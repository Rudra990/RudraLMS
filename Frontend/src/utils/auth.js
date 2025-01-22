import { useAuthStore } from "../store/auth";
import axios from "./axios";
import jwt_decode from "jwt-decode";
import Cookie from "js-cookie";
import Swal from "sweetalert2";

// LOGIN FUNCTION
export const login = async (email, password) => {
    try {
        const { data, status } = await axios.post(`user/token/`, { email, password });

        if (status === 200) {
            setAuthUser(data.access, data.refresh);
        }

        return { data, error: null };
    } catch (error) {
        const errorMessage = error.response?.data?.detail || "Something went wrong";
        console.error("Login error:", errorMessage);
        return { data: null, error: errorMessage };
    }
};

// REGISTER FUNCTION
export const register = async (full_name, email, password, password2) => {
    try {
        const { data } = await axios.post(`user/register/`, {
            full_name,
            email,
            password,
            password2,
        });

        await login(email, password);
        return { data, error: null };
    } catch (error) {
        const errorMessage =
            `${error.response?.data?.full_name || ""} - ${error.response?.data?.email || ""}` ||
            "Something went wrong";
        console.error("Registration error:", errorMessage);
        return { data: null, error: errorMessage };
    }
};

// LOGOUT FUNCTION
export const logout = () => {
    Cookie.remove("access_token");
    Cookie.remove("refresh_token");
    useAuthStore.getState().setUser(null);
    useAuthStore.getState().setLoading(false); // Reset loading state
    console.log("User logged out successfully.");
};

// SET USER FUNCTION
export const setUser = async () => {
    const access_token = Cookie.get("access_token");
    const refresh_token = Cookie.get("refresh_token");

    if (!access_token || !refresh_token) {
        console.log("No valid tokens found.");
        return;
    }

    try {
        if (isAccessTokenExpired(access_token)) {
            const response = await getRefreshToken(refresh_token);
            setAuthUser(response.data.access, response.data.refresh);
        } else {
            setAuthUser(access_token, refresh_token);
        }
    } catch (error) {
        console.error("Failed to set user:", error);
    }
};

// SET AUTH USER FUNCTION
export const setAuthUser = (access_token, refresh_token) => {
    const authStore = useAuthStore.getState();
    try {
        if (access_token && refresh_token) {
            Cookie.set("access_token", access_token, { expires: 1, secure: true });
            Cookie.set("refresh_token", refresh_token, { expires: 7, secure: true });

            const user = jwt_decode(access_token);
            authStore.setUser(user);
        } else {
            throw new Error("Invalid tokens provided.");
        }
    } catch (error) {
        console.error("Error setting auth user:", error);
    } finally {
        authStore.setLoading(false); // Always reset loading state
    }
};

// REFRESH TOKEN FUNCTION
export const getRefreshToken = async (refresh_token) => {
    try {
        const response = await axios.post(`user/token/refresh/`, { refresh: refresh_token });
        return response;
    } catch (error) {
        console.error("Failed to refresh token:", error);
        logout(); // Ensure user is logged out if refresh fails
        throw error;
    }
};

// CHECK TOKEN EXPIRATION FUNCTION
export const isAccessTokenExpired = (access_token) => {
    try {
        const decodedToken = jwt_decode(access_token);
        return decodedToken.exp < Date.now() / 1000; // Check if token is expired
    } catch (error) {
        console.error("Error decoding token:", error);
        return true; // Treat token as expired on decoding failure
    }
};
