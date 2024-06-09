import React, { useEffect, useState } from 'react'
import Header from '../Componets/Header'
import { NavLink, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Footer from '../Componets/Footer'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { insert_user } from './UserSlice'

function Signup() {
  const dispatch = useDispatch()
 
  const redirect = useNavigate();
  const [mydata,setdata] = useState({
    name : "",
    number : "",
    password : "",
    image : "",
    email : "",
    status : "Unblock"
  })
  const ChangeHandel = (e)=>{
  setdata({...mydata,id : new Date().getTime().toString(),[e.target.name] : e.target.value})
  console.log(mydata.data);
  }
  const SubmitHandel = async(e)=>{
    e.preventDefault()
    dispatch(insert_user(mydata))
    toast.success('Data Add Success ')
    setdata({ ...mydata, name: "", image: "",number : "",password:"" ,email : ""})
    redirect('/login')
  }

 
  return (
    <div>
      <Header />
      <div className="container mt-5 pt-5 ">
        <div className="row">
          <div className="col-12 ">
            <h2 className="contact-title text-center ">Get in SignUp</h2>
          </div>
          <div className="col-lg-5 mt-5   mx-auto">
            <form className="form-contact contact_form" onChange={ChangeHandel} method="post" id="contactForm" onSubmit={SubmitHandel}>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <input className="form-control valid"value={mydata.name} name="name" id="name" type="text" placeholder="Enter your name" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <input className="form-control valid" value={mydata.number} name="number" id="name" type="number" placeholder="Enter your number" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <input className="form-control valid" value={mydata.email} name="email" id="email" type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <input className="form-control valid" value={mydata.password} name="password" id="name" type="password" placeholder="Enter your password" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <input className="form-control valid" value={mydata.image} name="image" id="name" type="url" placeholder="Enter your image" />
                  </div>
                </div>


              </div>
              <div className="form-group mt-3 d-flex justify-content-center ">
                <button type="submit" className="button button-contactForm boxed-btn">SignUp</button>
              </div>
              <div className='pb-5 text-center'>
                <NavLink to='/login'>  <p className=''>Already have an acoount ? <span style={{ color: "#9F78FF" }}>Login</span></p></NavLink>
              </div>
            </form>
          </div>

        </div>
      </div>
      <Helmet>
        <script src="./Website/js/main.js"></script>
      </Helmet>
      <Footer />
    </div>
  )
}

export default Signup