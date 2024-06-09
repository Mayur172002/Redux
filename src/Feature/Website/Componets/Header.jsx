import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header() {
    const redirect = useNavigate();
    const userlogout = () => {
        localStorage.removeItem('Sid')
        localStorage.removeItem('Sname')
        toast.success('Logout Success')
        redirect('/')
    }
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" href="Website/css/bootstrap.min.css" />
                <link rel="stylesheet" href="Website/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="Website/css/slicknav.css" />
                <link rel="stylesheet" href="Website/css/flaticon.css" />
                <link rel="stylesheet" href="Website/css/progressbar_barfiller.css" />
                <link rel="stylesheet" href="Website/css/gijgo.css" />
                <link rel="stylesheet" href="Website/css/animate.min.css" />
                <link rel="stylesheet" href="Website/css/animated-headline.css" />
                <link rel="stylesheet" href="Website/css/magnific-popup.css" />
                <link rel="stylesheet" href="Website/css/fontawesome-all.min.css" />
                <link rel="stylesheet" href="Website/css/themify-icons.css" />
                <link rel="stylesheet" href="Website/css/slick.css" />
                <link rel="stylesheet" href="Website/css/nice-select.css" />
                <link rel="stylesheet" href="Website/css/style.css" />
            </Helmet>
            <header>
                {/* Header Start */}
                <div className="header-area ">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="menu-wrapper d-flex align-items-center justify-content-between">
                                <div className="header-left d-flex align-items-center">
                                    {/* Logo */}
                                    <div className="logo">
                                        <NavLink to="/"><img src="Website/img/logo/logo.png" alt /></NavLink>
                                    </div>
                                    {/* Main-menu */}
                                    <div className="main-menu  d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><NavLink to="/">Home</NavLink></li>
                                                <li><NavLink to="/shop">shop</NavLink></li>
                                                <li><NavLink to="/about">About</NavLink></li>
                                                <li><NavLink to="/blog">Blog</NavLink>
                                                    <ul className="submenu">
                                                        <li><NavLink to="/blog">Blog</NavLink></li>
                                                        <li><a href="blog_details.html">Blog Details</a></li>
                                                        <li><a href="elements.html">Elements</a></li>
                                                        <li><a href="product_details.html">Product Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><NavLink to="/contact">Contact</NavLink></li>
                                                {
                                                    (() => {
                                                        if (localStorage.getItem('Sid')) {
                                                            return (
                                                                <li><a >
                                                                    <div className='mt-3 d-block d-md-none' >
                                                                        <div className='d-flex'>
                                                                            <h3 className='pr-2'>Mayur</h3>
                                                                            <i class="fa-solid fa-user pr-3"></i>
                                                                            <i class="fa-solid fa-right-from-bracket" onClick={userlogout}></i>
                                                                        </div>
                                                                    </div>
                                                                </a></li>
                                                            )
                                                        }
                                                        else {
                                                            return (
                                                                <li className="d-block d-md-none"><NavLink to="/login"> Login</NavLink></li>
                                                            )
                                                        }
                                                    })()
                                                }

                                            </ul>

                                        </nav>

                                    </div>
                                </div>
                                <div className="header-right1 d-flex align-items-center">
                                    {/* Social */}
                                    <div className="header-social d-none d-md-block">
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f" /></a>
                                        <a href="#"><i className="fab fa-pinterest-p" /></a>
                                    </div>


                                    {
                                        (() => {
                                            if (localStorage.getItem('Sid')) {
                                                return (
                                                    <div className=' mt-3 pr-5 d-none d-md-block' >
                                                        <div className='d-flex'>
                                                               <Link to='/profile'> <h3 className='pr-2'>Mayur</h3></Link>
                                                                <i class="fa-solid fa-user pr-3"></i>
                                                                <i class="fa-solid fa-right-from-bracket" onClick={userlogout}></i>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            else {
                                                return (
                                                    <div className="d-none d-md-block">
                                                        <div className="card-stor text-light">
                                                            <NavLink to='/login'>  Login</NavLink>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })()
                                    }


                                </div>
                                {/* Mobile Menu */}
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </header>

        </div>
    )
}

export default Header