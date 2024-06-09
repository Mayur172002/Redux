import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <img src="Admin/img/logo.png" alt />
                        <span className="d-none d-lg-block">NiceAdmin</span>
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn" />
                </div>{/* End Logo */}
                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i className="bi bi-search" /></button>
                    </form>
                </div>{/* End Search Bar */}
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " href="#">
                                <i className="bi bi-search" />
                            </a>
                        </li>{/* End Search Icon*/}
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-bell" />
                                <span className="badge bg-primary badge-number">4</span>
                            </a>{/* End Notification Icon */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li className="dropdown-header">
                                    You have 4 new notifications
                                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-exclamation-circle text-warning" />
                                    <div>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>30 min. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-x-circle text-danger" />
                                    <div>
                                        <h4>Atque rerum nesciunt</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>1 hr. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-check-circle text-success" />
                                    <div>
                                        <h4>Sit rerum fuga</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>2 hrs. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-info-circle text-primary" />
                                    <div>
                                        <h4>Dicta reprehenderit</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>4 hrs. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="dropdown-footer">
                                    <a href="#">Show all notifications</a>
                                </li>
                            </ul>{/* End Notification Dropdown Items */}
                        </li>{/* End Notification Nav */}
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-chat-left-text" />
                                <span className="badge bg-success badge-number">3</span>
                            </a>{/* End Messages Icon */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                                <li className="dropdown-header">
                                    You have 3 new messages
                                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="message-item">
                                    <a href="#">
                                        <img src="Admin/img/messages-1.jpg" alt className="rounded-circle" />
                                        <div>
                                            <h4>Maria Hudson</h4>
                                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                            <p>4 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="message-item">
                                    <a href="#">
                                        <img src="Admin/img/messages-2.jpg" alt className="rounded-circle" />
                                        <div>
                                            <h4>Anna Nelson</h4>
                                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                            <p>6 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="message-item">
                                    <a href="#">
                                        <img src="Admin/img/messages-3.jpg" alt className="rounded-circle" />
                                        <div>
                                            <h4>David Muldon</h4>
                                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                            <p>8 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="dropdown-footer">
                                    <a href="#">Show all messages</a>
                                </li>
                            </ul>{/* End Messages Dropdown Items */}
                        </li>{/* End Messages Nav */}
                        <li className="nav-item dropdown pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src="Admin/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                            </a>{/* End Profile Iamge Icon */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>Kevin Anderson</h6>
                                    <span>Web Designer</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <NavLink className="dropdown-item d-flex align-items-center" to="/adprofile">
                                        <i className="bi bi-person" />
                                        <span>My Profile</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-gear" />
                                        <span>Account Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                        <i className="bi bi-question-circle" />
                                        <span>Need Help?</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className="bi bi-box-arrow-right" />
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </ul>{/* End Profile Dropdown Items */}
                        </li>{/* End Profile Nav */}
                    </ul>
                </nav>{/* End Icons Navigation */}
            </header>{/* End Header */}
            {/* ======= Sidebar ======= */}
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/dashboard">
                            <i className="bi bi-grid" />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>{/* End Dashboard Nav */}
                  
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#Product" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-layout-text-window-reverse" /><span>Categories</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="Product" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <NavLink to="/manage_categories">
                                    <i className="bi bi-circle" /><span>Categories</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/add_categories">
                                    <i className="bi bi-circle" /><span>Add Categories</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-layout-text-window-reverse" /><span>Product</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <NavLink to="/product">
                                    <i className="bi bi-circle" /><span>Products</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/add_product">
                                    <i className="bi bi-circle" /><span>Add Product</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-heading">Pages</li>
                    <li className="nav-item">
                        <NavLink className="nav-link collapsed" to="/adprofile">
                            <i className="bi bi-person" />
                            <span>Profile</span>
                        </NavLink>
                    </li>{/* End Profile Page Nav */}

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="pages-contact.html">
                            <i className="bi bi-envelope" />
                            <span>Contact</span>
                        </a>
                    </li>{/* End Contact Page Nav */}
                    {/* <li className="nav-item">
              <a className="nav-link collapsed" href="pages-register.html">
                <i className="bi bi-card-list" />
                <span>Register</span>
              </a>
            </li> */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="pages-login.html">
                            <i className="bi bi-box-arrow-in-right" />
                            <span>Login</span>
                        </a>
                    </li>{/* End Login Page Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="pages-error-404.html">
                            <i className="bi bi-dash-circle" />
                            <span>Error 404</span>
                        </a>
                    </li>{/* End Error 404 Page Nav */}

                </ul>
            </aside>{/* End Sidebar*/}

            <Helmet>
                {/* <link href="Admin/img/favicon.png" rel="icon"/> */}
                {/* <link href="Admin/img/apple-touch-icon.png" rel="apple-touch-icon"/> */}
                {/* <link href="https://fonts.gstatic.com" rel="preconnect"/> */}
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

                <link href="Admin/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="Admin/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                {/* <link href="Admin/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/> */}
                {/* <link href="Admin/vendor/quill/quill.snow.css" rel="stylesheet"/> */}
                {/* <link href="Admin/vendor/quill/quill.bubble.css" rel="stylesheet"/> */}
                {/* <link href="Admin/vendor/remixicon/remixicon.css" rel="stylesheet"/> */}
                {/* <link href="Admin/vendor/simple-datatables/style.css" rel="stylesheet"/> */}
                <link href="Admin/css/style1.css" rel="stylesheet" />

                {/* <script src="Admin/vendor/apexcharts/apexcharts.min.js"></script> */}
                <script src="Admin/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                {/* <script src="Admin/vendor/chart.js/chart.umd.js"></script> */}
                {/* <script src="Admin/vendor/echarts/echarts.min.js"></script> */}
                {/* <script src="Admin/vendor/quill/quill.js"></script> */}
                {/* <script src="Admin/vendor/simple-datatables/simple-datatables.js"></script> */}
                {/* <script src="Admin/vendor/tinymce/tinymce.min.js"></script> */}
                {/* <script src="Admin/vendor/php-email-form/validate.js"></script> */}

                {/* <script src="Admin/js/main.js"></script>   */}
            </Helmet>
        </div>
    )
}

export default Navbar