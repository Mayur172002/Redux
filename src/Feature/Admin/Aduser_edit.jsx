import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link,  useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Edit_user, adget_user } from './Ad_UserSlice';
import { toast } from 'react-toastify';

function Aduser_edit() {
  const redirect = useNavigate();
  const {id} = useParams();
  const {aduser} = useSelector((state)=>state.aduser)
  useEffect(()=>{
    adget_user()
    Adedit_user()
  },[])
  const Adedit_user = ()=>{
    const result = aduser.filter((value)=>{return value.id == id})
    console.log(result);
    setdata(result[0])
  }
  const dispatch = useDispatch()
  const [mydata,setdata] = useState({
    name : "",
    email : "",
    image : "",
    number : "",
  })
  const changeHandel = (e) => {
    setdata({...mydata ,[e.target.name]:e.target.value})
    console.log(mydata);
  }
  const submitHandel = async(e)=>{
    e.preventDefault();
    dispatch(Edit_user(mydata))
    toast.success('User Updated success');
    redirect('/adprofile');
  }
  return (
    <div>
      <Navbar />
      <main id="main" className="main">
      <section className="section profile">
        <div className="row">
          <div className="col-xl-10">
            <div className="card">
              <div className="card-body pt-3">
                {/* Bordered Tabs */}
                <ul className="nav nav-tabs nav-tabs-bordered">
                  
                  <li className="nav-item" >
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                  </li>
                </ul>
                <div className="tab-content pt-2">
                 
                  <div className="tab-pane  active  profile-edit pt-3" id="profile-edit">
                    {/* Profile Edit Form */}
                    <form method='post' onChange={changeHandel} onSubmit={submitHandel}>
                      <div className="row mb-3">
                        <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                        <div className="col-md-8 col-lg-9">
                          <img src={mydata.image} name="image" alt="Profile" />
                          <div className="pt-2">
                            <a href="#" className="btn btn-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload" /></a>
                            <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="name" value={mydata.name} type="text" className="form-control" id="fullName" defaultValue="Kevin Anderson" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Number</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="number" value={mydata.number} type="text" className="form-control" id="company" defaultValue="Lueilwitz, Wisoky and Leuschke" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="Job" className="col-md-4 col-lg-3 col-form-label">Email</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="email" value={mydata.email} type="text" className="form-control" id="Job" defaultValue="Web Designer" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="country" type="text" className="form-control" id="Country" defaultValue="USA" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="address" type="text" className="form-control" id="Address" defaultValue="A108 Adam Street, New York, NY 535022" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="phone" type="text" className="form-control" id="Phone" defaultValue="(436) 486-3538 x29071" />
                        </div>
                      </div>
                     
                      <div className="row mb-3">
                        <label htmlFor="Twitter" className="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="twitter" type="text" className="form-control" id="Twitter" defaultValue="https://twitter.com/#" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="Facebook" className="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="facebook" type="text" className="form-control" id="Facebook" defaultValue="https://facebook.com/#" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="Instagram" className="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="instagram" type="text" className="form-control" id="Instagram" defaultValue="https://instagram.com/#" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="Linkedin" className="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="linkedin" type="text" className="form-control" id="Linkedin" defaultValue="https://linkedin.com/#" />
                        </div>
                      </div>
                      <div className="text-center" >
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                      </div>
                    </form>{/* End Profile Edit Form */}
                  </div>
               
                </div>{/* End Bordered Tabs */}
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  )
}

export default Aduser_edit