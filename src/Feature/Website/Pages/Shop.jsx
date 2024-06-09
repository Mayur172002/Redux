import React, { useEffect } from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux';
import { get_product } from '../../Admin/ProductSlice'


function Shop() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(get_product())
        },[])
   const {product} = useSelector((state)=>state.product)
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
                                        <li className="breadcrumb-item"><a href="#">Shop</a></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* listing Area Start */}
                <div className="category-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-8 col-md-10">
                                <div className="section-tittle mb-50">
                                    <h2>Shop with us</h2>
                                    <p>Browse from 230 latest items</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/*? Left content */}
                            <div className="col-xl-3 col-lg-3 col-md-4 ">
                                {/* Job Category Listing start */}
                                <div className="category-listing mb-50">
                                    {/* single one */}
                                    <div className="single-listing">
                                        {/* Select City items start */}
                                        <div className="select-job-items2">
                                            <select name="select2">
                                                <option value>Category</option>
                                                <option value>Shat</option>
                                                <option value>T-shart</option>
                                                <option value>Pent</option>
                                                <option value>Dress</option>
                                            </select>
                                        </div>
                                        {/*  Select City items End*/}
                                        {/* Select State items start */}
                                        <div className="select-job-items2">
                                            <select name="select3">
                                                <option value>Type</option>
                                                <option value>SM</option>
                                                <option value>LG</option>
                                                <option value>XL</option>
                                                <option value>XXL</option>
                                            </select>
                                        </div>
                                        {/*  Select State items End*/}
                                        {/* Select km items start */}
                                        <div className="select-job-items2">
                                            <select name="select4">
                                                <option value>Size</option>
                                                <option value>1.2ft</option>
                                                <option value>2.5ft</option>
                                                <option value>5.2ft</option>
                                                <option value>3.2ft</option>
                                            </select>
                                        </div>
                                        {/*  Select km items End*/}
                                        {/* Select km items start */}
                                        <div className="select-job-items2">
                                            <select name="select5">
                                                <option value>Color</option>
                                                <option value>Whit</option>
                                                <option value>Green</option>
                                                <option value>Blue</option>
                                                <option value>Sky Blue</option>
                                                <option value>Gray</option>
                                            </select>
                                        </div>
                                        {/*  Select km items End*/}
                                        {/* Select km items start */}
                                        <div className="select-job-items2">
                                            <select name="select6">
                                                <option value>Price range</option>
                                                <option value>$10 to $20</option>
                                                <option value>$20 to $30</option>
                                                <option value>$50 to $80</option>
                                                <option value>$100 to $120</option>
                                                <option value>$200 to $300</option>
                                                <option value>$500 to $600</option>
                                            </select>
                                        </div>
                                        {/*  Select km items End*/}
                                    </div>
                                </div>
                                {/* Job Category Listing End */}
                            </div>
                            {/*?  Right content */}
                            <div className="col-xl-9 col-lg-9 col-md-8 ">
                                {/*? New Arrival Start */}
                                <div className="new-arrival new-arrival2">
                                    <div className="row">
                                        {
                                            product && product.map((value)=>{
                                                return(
                                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="single-new-arrival mb-50 text-center">
                                                        <div className="popular-img">
                                                            <img src={value.image} alt />
                                                            <div className="favorit-items">
                                                                {/* <span class="flaticon-heart"></span> */}
                                                                <img src="Website/img/gallery/favorit-card.png" alt />
                                                            </div>
                                                        </div>
                                                        <div className="popular-caption">
                                                            <h3><a href="product_details.html">{value.name}</a></h3>
                                                            <div className="rating mb-10">
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <span>$ {value.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                       
                                        
                                    </div>
                                    {/* Button */}
                                    <div className="row justify-content-center">
                                        <div className="room-btn mt-20">
                                            <a href="catagori.html" className="border-btn">Browse More</a>
                                        </div>
                                    </div>
                                </div>
                                {/*? New Arrival End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* listing-area Area End */}
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
                                            <a href="shop.html" className="btn">Shop Now</a>
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
                                            <a href="shop.html" className="btn">Shop Now</a>
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
                                            <a href="shop.html" className="btn">Shop Now</a>
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
                                            <a href="shop.html" className="btn">Shop Now</a>
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
        <script src="./Website/js/main.js"></script>
            </Helmet>
        </div>
    )
}

export default Shop