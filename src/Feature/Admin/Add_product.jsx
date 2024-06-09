import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import { insert_product } from './ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { get_categories } from './CategoriesSlice';



function Add_product() {
    const dispatch = useDispatch()

    useEffect(()=>{
     dispatch(get_categories())  
    })
    const {categories} = useSelector((state)=>state.categories)
    const [data, setdata] = useState({
        cate_id: "",
        name: "",
        image: "",
        price : "",
        discount : "",
        brand : ""

    })
    const ChangeHandel = (e) => {
        setdata({ ...data, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
        console.log(data.data);
    }
    const SubmitHandel = async (e) => {
        e.preventDefault()
        dispatch(insert_product(data))   
        toast.success('Data Add Success ')
        setdata({ ...data, name: "", image: "",price : "",discount:"" ,cate_id : "",brand :""})
    }

  return (
    <div>
        <Navbar/>
        <main id="main" class="main">
                <div class="row">
                    <div class="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Add Product</h5>
                         
                                {/* Vertical Form */}
                                <form className="row g-3" method='post'  onChange={ChangeHandel} onSubmit={SubmitHandel}>
                                <select value={data.cate_id} onChange={ChangeHandel} name='cate_id' className='form-select'>
                                        <option value="" >Select Categories</option>
                                        {
                                            categories && categories.map((val) => {
                                                return (
                                                    <option  value={val.id}>{val.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <div className="col-12">
                                        <label htmlFor="inputNanme4" className="form-label"> Name</label>
                                        <input type="text" className="form-control" name='name' value={data.name} id="inputNanme4"  />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputNanme4" className="form-label"> Brand</label>
                                        <input type="text" className="form-control" name='brand' value={data.brand} id="inputNanme4"  />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputEmail4" className="form-label">Image</label>
                                        <input type="url" className="form-control" name='image' value={data.image} id="inputEmail4"  />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputEmail4" className="form-label">Price</label>
                                        <input type="tel" className="form-control" name='price' value={data.price} id="inputEmail4"  />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputEmail4" className="form-label">Discount</label>
                                        <input type="text" className="form-control" name='discount' value={data.discount} id="inputEmail4"  />
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

export default Add_product