import React from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import { Helmet } from 'react-helmet'

function About() {
    return (
        <div>
    
            <Header />
            <main>
                {/* breadcrumb Start*/}
                <div className="page-notification">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">about</a></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* breadcrumb End*/}
                {/* About Area Start */}
                <div className="about-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="section-tittle mb-60 text-center pt-10">
                                    <h2>Our Story</h2>
                                    <p className="pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="about-img pb-bottom">
                                    <img src="Website/img/gallery/about1.png" alt className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="section-tittle mb-60 text-center pt-10">
                                    <h2>Journey start from</h2>
                                    <p className="pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="about-img pb-bottom">
                                    <img src="Website/img/gallery/about2.png" alt className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="section-tittle mb-60 text-center pt-10">
                                    <h2>2020</h2>
                                    <p className="pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About Area End */}
                {/*? Popular Items Start */}
                <div className="popular-items">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="Website/img/gallery/popular1.png" alt />
                                        <div className="img-cap">
                                            <span>Glasses</span>
                                        </div>
                                        <div className="favorit-items">
                                            <a href="#" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="Website/img/gallery/popular2.png" alt />
                                        <div className="img-cap">
                                            <span>Watches</span>
                                        </div>
                                        <div className="favorit-items">
                                            <a href="#" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="Website/img/gallery/popular3.png" alt />
                                        <div className="img-cap">
                                            <span>Jackets</span>
                                        </div>
                                        <div className="favorit-items">
                                            <a href="#" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="Website/img/gallery/popular4.png" alt />
                                        <div className="img-cap">
                                            <span>Clothes</span>
                                        </div>
                                        <div className="favorit-items">
                                            <a href="#" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Popular Items End */}
                {/*? Services Area Start */}
                <div className="categories-area section-padding40 gray-bg">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-cat mb-50">
                                    <div className="cat-icon">
                                        <img src="Website/img/icon/services1.svg" alt />
                                    </div>
                                    <div className="cat-cap">
                                        <h5>Fast &amp; Free Delivery</h5>
                                        <p>Free delivery on all orders</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-cat mb-50">
                                    <div className="cat-icon">
                                        <img src="Website/img/icon/services2.svg" alt />
                                    </div>
                                    <div className="cat-cap">
                                        <h5>Fast &amp; Free Delivery</h5>
                                        <p>Free delivery on all orders</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-cat mb-30">
                                    <div className="cat-icon">
                                        <img src="Website/img/icon/services3.svg" alt />
                                    </div>
                                    <div className="cat-cap">
                                        <h5>Fast &amp; Free Delivery</h5>
                                        <p>Free delivery on all orders</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-cat">
                                    <div className="cat-icon">
                                        <img src="Website/img/icon/services4.svg" alt />
                                    </div>
                                    <div className="cat-cap">
                                        <h5>Fast &amp; Free Delivery</h5>
                                        <p>Free delivery on all orders</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*? Services Area End */}
            </main>

            <Footer />
            <Helmet>
            {/* <script src="./Website/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="./Website/js/owl.carousel.min.js"></script>
        <script src="./Website/js/slick.min.js"></script>
        <script src="./Website/js/jquery.slicknav.min.js"></script> */}
        <script src="./Website/js/main.js"></script>
            </Helmet>
        </div>
    )
}

export default About