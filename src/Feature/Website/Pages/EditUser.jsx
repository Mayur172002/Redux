import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../Componets/Header'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Edit_user, adget_user } from '../../Admin/Ad_UserSlice';

function EditUser() {
    const redirect = useNavigate();
    const {id} = useParams();
    const {user} = useSelector((state)=>state.user)
    useEffect(()=>{
        adget_user()
        editUser()
    },[])

    const editUser = ()=>{
        const single = user.filter((value)=>{return value.id == id})
        console.log(single);
        setdata(single[0])
    }
    const diapatch =useDispatch()
    const [mydata,setdata] = useState({
        name : "",
        number : "",
        image : "",
        email : "",
    })
    const changeHandel = (e) => {
      setdata({...mydata ,[e.target.name]:e.target.value})
      console.log(mydata);
    }
    const submitHandel = async(e)=>{
        e.preventDefault();
        diapatch(Edit_user(mydata))
        toast.success('User Updated success');
        redirect('/profile');
    }
    return (
        <>

            <Header />

            <div class="container mt-5">
            <div class="row">
                <div class="col-sm-12">
                    <h2>Edit User</h2>
                    <Link to="/" className='btn btn-primary float-end mb-5'>Back</Link>
                    <form action="" method='post' onSubmit={submitHandel} >
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Name:</label>
                            <input type="text" value={mydata.name} onChange={changeHandel} className="form-control"  placeholder="Enter Name" name="name" />
                        </div>
                      
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Mobile:</label>
                            <input type="number" value={mydata.number} onChange={changeHandel} className="form-control"  placeholder="Enter Mobile" name="number" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Upload Image:</label>
                            <input type="url" value={mydata.image} onChange={changeHandel} className="form-control" name="image" />
                        </div>
                       
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>

                </div>
            </div>
        </div>
            <div className="container">
                <div className="main-body">
                    <form action="" method='post' onChange={changeHandel} onSubmit={submitHandel}>
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                                        <div className="mt-3">
                                            <h4>{mydata.name}</h4>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                            <button className="btn btn-primary">Follow</button>
                                            <button className="btn btn-outline-primary">Message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h4 className="mb-0 ">Full Name</h4>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                            <input type="text" value={mydata.name} onChange={changeHandel} className="form-control"  placeholder="Enter Name" name="name" />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h4 className="mb-0">Email</h4>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {mydata.email}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h4 className="mb-0">Phone</h4>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {mydata.number}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h4 className="mb-0">Mobile</h4>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            (320) 380-4539
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h4 className="mb-0">Image</h4>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                        {/* <input className="form-control" type="text" name='image' value={mydata.image} /> */}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <Link className="btn btn-info "to="/profile">Save</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default EditUser