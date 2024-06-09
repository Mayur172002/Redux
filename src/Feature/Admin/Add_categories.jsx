import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { insert_categories } from './CategoriesSlice'
function Add_categories() {
    const dispatch = useDispatch()
    const [data, setdata] = useState({
        id: "",
        name: "",
        image: "",
    })
    const ChangeHandel = (e) => {
        setdata({ ...data, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
        console.log(data.data);
    }
    const SubmitHandel = async (e) => {
        e.preventDefault()
        dispatch(insert_categories(data))
        toast.success('Data Add Success ')
        setdata({ ...data, name: "", image: "" })
    }
    return (
        <div>
            <Navbar />
            <main id="main" class="main">
                <div class="row">
                    <div class="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Add Categories </h5>
                                {/* Vertical Form */}
                                <form className="row g-3" method='post'  onChange={ChangeHandel} onSubmit={SubmitHandel}>
                                    <div className="col-12">
                                        <label htmlFor="inputNanme4" className="form-label"> Name</label>
                                        <input type="text" className="form-control" name='name' value={data.name} id="inputNanme4"  />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputEmail4" className="form-label">Image</label>
                                        <input type="url" className="form-control" name='image' value={data.image} id="inputEmail4"  />
                                    </div>
                                    <div className="text-center mt-5">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>{/* Vertical Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Add_categories