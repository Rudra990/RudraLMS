import React from "react";
import BaseHeader from "../partials/BaseHeader";
import BaseFooter from "../partials/BaseFooter";
import { Link } from "react-router-dom";

function Search() {
  return (
    <>
      <BaseHeader />

      <section className="mb-5" style={{ marginTop: "100px" }}>
        <div className="container mb-lg-8 ">
          <div className="row mb-5 mt-3">
            {/* col */}
            <div className="col-12">
              <div className="mb-6">
                <h2 className="mb-1 h1">
                  Showing Results for "LMS System Using Django"
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control lg mt-3"
                  placeholder="Search Courses..."
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div className="col">
                  {/* Card */}
                  <div className="card card-hover">
                    <Link to={`/course-detail/slug/`}>
                      <img
                        src="https://geeksui.codescandy.com/geeks/assets/images/course/course-css.jpg"
                        alt="course"
                        className="card-img-top"
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                    {/* Card Body */}
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="badge bg-info">Intermediate</span>
                        <a href="#" className="fs-5">
                          <i className="fas fa-heart text-danger align-middle" />
                        </a>
                      </div>
                      <h4 className="mb-2 text-truncate-line-2 ">
                        <Link
                          to={`/course-detail/slug/`}
                          className="text-inherit text-decoration-none text-dark fs-5"
                        >
                          How to easily create a website with JavaScript
                        </Link>
                      </h4>
                      <small>By: Claire Evans</small> <br />
                      <small>16k Students</small> <br />
                      <div className="lh-1 mt-3 d-flex">
                        <span className="align-text-top">
                          <span className="fs-6">
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star-half text-warning"></i>
                          </span>
                        </span>
                        <span className="text-warning">4.5</span>
                        <span className="fs-6 ms-2">(9,300)</span>
                      </div>
                    </div>
                    {/* Card Footer */}
                    <div className="card-footer">
                      <div className="row align-items-center g-0">
                        <div className="col">
                          <h5 className="mb-0">$39.00</h5>
                        </div>
                        <div className="col-auto">
                          <button
                            type="button"
                            className="text-inherit text-decoration-none btn btn-primary me-2"
                          >
                            <i className="fas fa-shopping-cart text-primary text-white" />
                          </button>
                          <Link
                            to={""}
                            className="text-inherit text-decoration-none btn btn-primary"
                          >
                            Enroll Now{" "}
                            <i className="fas fa-arrow-right text-primary align-middle me-2 text-white" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <nav className="d-flex mt-5">
                <ul className="pagination">
                  <li className="">
                    <button className="page-link me-1">
                      <i className="ci-arrow-left me-2" />
                      Previous
                    </button>
                  </li>
                </ul>
                <ul className="pagination">
                  <li key={1} className="active">
                    <button className="page-link">1</button>
                  </li>
                </ul>
                <ul className="pagination">
                  <li className={`totalPages`}>
                    <button className="page-link ms-1">
                      Next
                      <i className="ci-arrow-right ms-3" />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="my-8 py-lg-8">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row align-items-center bg-primary gx-0 rounded-3 mt-5">
            {/* col */}
            <div className="col-lg-6 col-12 d-none d-lg-block">
              <div className="d-flex justify-content-center pt-4">
                {/* img */}
                <div className="position-relative">
                  <img
                    src="https://geeksui.codescandy.com/geeks/assets/images/png/cta-instructor-1.png"
                    alt="image"
                    className="img-fluid mt-n8"
                  />
                  <div className="ms-n8 position-absolute bottom-0 start-0 mb-6">
                    <img
                      src="https://geeksui.codescandy.com/geeks/assets/images/svg/dollor.svg"
                      alt="dollor"
                    />
                  </div>
                  {/* img */}
                  <div className="me-n4 position-absolute top-0 end-0">
                    <img
                      src="https://geeksui.codescandy.com/geeks/assets/images/svg/graph.svg"
                      alt="graph"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="text-white p-5 p-lg-0">
                {/* text */}
                <h2 className="h1 text-white">Become an instructor today</h2>
                <p className="mb-0">
                  Instructors from around the world teach millions of students
                  on Geeks. We provide the tools and skills to teach what you
                  love.
                </p>
                <a href="#" className="btn bg-white text-dark fw-bold mt-4">
                  Start Teaching Today <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BaseFooter />
    </>
  );
}

export default Search;
