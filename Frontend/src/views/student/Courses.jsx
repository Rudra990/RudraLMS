import React from 'react'
import { Link } from 'react-router-dom'

import BaseHeader from '../partials/BaseHeader'
import BaseFooter from '../partials/BaseFooter'
import Sidebar from './Partials/Sidebar'
import Header from './Partials/Header'

function Courses() {
    return (
        <>
            <BaseHeader />

            <section className="pt-5 pb-5">
                <div className="container">
                    {/* Header Here */}
                    <Header />
                    <div className="row mt-0 mt-md-4">
                        {/* Sidebar Here */}
                        <Sidebar />
                        <div className="col-lg-9 col-md-8 col-12">
                            <h4 className="mb-0 mb-4"> <i className='fas fa-shopping-cart'></i> My Courses</h4>

                            <div className="card mb-4">
                                <div className="card-header">
                                    <span>
                                        Start watching courses now from your dashboard page.
                                    </span>
                                </div>
                                <div className="card-body">
                                    <form className="row gx-3">
                                        <div className="col-lg-12 col-md-12 col-12 mb-lg-0 mb-2">
                                            <input
                                                type="search"
                                                className="form-control"
                                                placeholder="Search Your Courses"
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="table-responsive overflow-y-hidden">
                                    <table className="table mb-0 text-nowrap table-hover table-centered text-nowrap">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Courses</th>
                                                <th>Date Enrolled</th>
                                                <th>Lectures</th>
                                                <th>Completed Lecture</th>
                                                <th>Action</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <a href="#">
                                                                <img
                                                                    src="https://geeksui.codescandy.com/geeks/assets/images/course/course-react.jpg"
                                                                    alt="course"
                                                                    className="rounded img-4by3-lg"
                                                                    style={{ width: "100px", height: "70px", borderRadius: "50%", objectFit: "cover" }}
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="ms-3">
                                                            <h4 className="mb-1 h5">
                                                                <a href="#" className="text-inherit text-decoration-none text-dark">
                                                                    Learn React
                                                                </a>
                                                            </h4>
                                                            <ul className="list-inline fs-6 mb-0">
                                                                <li className="list-inline-item">
                                                                    <i className='bi bi-reception-4'></i>
                                                                    <span className='ms-1'>Beginner</span>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <i className='bi bi-mic'></i>
                                                                    <span className='ms-1'>English</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><p className='mt-3'>7/11/2025</p></td>
                                                <td><p className='mt-3'>15</p></td>
                                                <td><p className='mt-3'>7</p></td>
                                                <td>
                                                    <Link to={`/student/courses/course_id/`} className='btn btn-primary btn-sm mt-3'>Continue Course <i className='fas fa-arrow-right'></i></Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BaseFooter />
        </>
    )
}

export default Courses