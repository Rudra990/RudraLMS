import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import MainWrapper from "./layouts/MainWrapper";
import PrivateRoute from "./layouts/PrivateRoute";
import Register from "../src/views/auth/Register";
import Login from "../src/views/auth/Login";
import Logout from "./views/auth/Logout";
import ForgotPassword from "./views/auth/ForgotPassword";
import CreateNewPassword from "./views/auth/CreateNewPassword";
import Index from "./views/base/Index";


function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <Routes>
          <Route path="/register/" element={<Register />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/logout/" element={<Logout />} />
          <Route path="/ForgotPassword/" element={<ForgotPassword />} />
          <Route path="/CreateNewPassword/" element={<CreateNewPassword />} />
          
           {/* Base Routes */}
           <Route path="/" element={<Index />} />
           {/* <Route path="/course-detail/:slug/" element={<CourseDetail />} />
           <Route path="/cart/" element={<Cart />} />
           <Route path="/checkout/:order_oid/" element={<Checkout />} />
           <Route path="/payment-success/:order_oid/" element={<Success />} />
           <Route path="/search/" element={<Search />} /> */}


        </Routes>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;



