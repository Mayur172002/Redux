import React, { useState } from 'react'
import Header from '../Componets/Header'
import { NavLink, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Footer from '../Componets/Footer'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { login_user } from './UserSlice'
import axios from 'axios'

function Login() {
  const dispatch = useDispatch()
  const redirect = useNavigate();
  const [mydata, setdata] = useState({
    name: "",
    number: "",
    password: "",
    image: "",
    email: ""
  })
  const ChangeHandel = (e) => {
    setdata({ ...mydata, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
    console.log(mydata.data);
  }
  const SubmitHandel = async (e) => {
    e.preventDefault()
    const result = await axios.get(`http://localhost:3000/Users?email=${mydata.email}`)
    if (result.data.length > 0) {
      if (result.data[0].password == mydata.password) {
       if(result.data[0].status == "Unblock"){
        localStorage.setItem('Sid',result.data[0].id)
        localStorage.setItem('Sname',result.data[0].name)
        toast.success("Login Success !!")
        return redirect('/');
       }
       else
       {
         toast.error("Your Account Blocked Contact Shion Shop !!")
         setdata({  email: "", password: "" })
         return false
       }
      }
      else {
        toast.error("Password does not match !!")
        setdata({ ...mydata, email: "", password: "" })
        return false
      }
    }
    else {
      toast.error("Email does not Exist !!")
      setdata({ ...mydata, email: "", password: "" })
      return false
    }
    toast.success('Data Add Success ')
    setdata({ ...mydata, name: "", image: "", number: "", password: "", email: "" })
    redirect('/login')
  }
  return (
    <div>
      <Header />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 ">
            <h2 className="contact-title text-center ">Get in Login</h2>
          </div>
          <div className="col-lg-5 mt-5  mx-auto">
            <form className="form-contact contact_form" onChange={ChangeHandel} onSubmit={SubmitHandel} method="post" id="contactForm" >
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <input className="form-control valid" value={mydata.email} name="email" id="name" type="text" placeholder="Enter your Email" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <input className="form-control valid" value={mydata.password} name="password" id="email" type="password" placeholder="password" />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3 d-flex justify-content-center ">
                <button type="submit" className="button button-contactForm boxed-btn">Login</button>
              </div>
              <div className='mt-5 pb-5 text-center'>
                <NavLink to='/signup'>  <p className=''>New to Shion? <span style={{ color: "#9F78FF" }}>Create an account</span></p></NavLink>
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

export default Login