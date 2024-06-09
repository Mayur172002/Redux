import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { delete_product, edit_product, get_product } from './ProductSlice'
import { toast } from 'react-toastify'
import "./Style.css"
import { get_categories } from './CategoriesSlice'
import { useNavigate } from 'react-router-dom'

function Product() {
    const [data1, setdata1] = useState('');
    console.log(data1);
    const { name, product } = useSelector((state) => state.product)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_product())
        dispatch(get_categories())
    }, [])
    const { categories } = useSelector((state) => state.categories)
    const editproduct = (id) => {
        const result = product.filter((value) => { return value.id == id })
        console.log(result);
        setdata(result[0])
    }
    const [data, setdata] = useState({
        cate_id: "",
        name: "",
        image: "",
        price: "",
        discount: "",
        brand:"",

    })
    const ChangeHandel = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
        console.log(data.data);
    }
    const SubmitHandel = async (e) => {
        e.preventDefault()
        dispatch(edit_product(data))
        toast.success('Data Update Success ')
        setdata({ ...data, name: "", image: "", price: "", discount: "", cate_id: "",brand :"" })
    }
    return (
        <div>
            <Navbar />
            <main id="main" class="main">
                <div class="row">
                    <div class="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className='d-flex justify-content-between flex-wrap'>
                                    <h5 className="card-title">Product {name} </h5>
                                    <form className="form-inline my-2 my-lg-0 d-flex align-items-center">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={data1} onChange={(e) => setdata1(e.target.value)} />
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </div>
                                {/* Table with stripped rows */}
                                <table className="table table-striped">
                                    <thead>
                                        <tr className=''>
                                            <th scope="col">Categories ID</th>
                                            <th scope="col">Product Image</th>
                                            <th scope="col ">Product Name</th>
                                            <th scope="col">Product Price</th>
                                            <th scope="col">Product Discount</th>
                                            <th scope="col" >Action</th>

                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        {product.filter((value) => {
                                            return data1 === '' ? value : (value.name && value.name.
                                                toLowerCase().includes(data1.toLowerCase()));
                                        }).map((value) => {
                                            return (
                                                <tr>
                                                    <td scope="row">{value.cate_id}</td>
                                                    <td><img src={value.image} alt="" width={50} height={50} /></td>
                                                    <td style={{ width: "415px" }} className='text_more'>{value.name}</td>
                                                    <td>₹{value.price}</td>
                                                    <td>{value.discount}%</td>
                                                    <td>
                                                        <button className='btn btn-info me-3' onClick={() => editproduct(value.id)} data-bs-toggle="modal" data-bs-target="#myModal" >Edit</button>
                                                        <button className='btn btn-danger' onClick={() => {
                                                            dispatch(delete_product(value.id))
                                                            toast.success(" Data Delete Success")
                                                            return dispatch(get_product())
                                                        }} >Delete</button>
                                                    </td>

                                                </tr>
                                            )
                                        })
                                        }


                                        {/* The Modal */}
                                        <div className="modal" id="myModal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    {/* Modal Header */}
                                                    <div className="modal-header">
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                    </div>
                                                    {/* Modal body */}
                                                    <div className="modal-body">
                                                        <form className="row g-3" method='post' onChange={ChangeHandel} onSubmit={SubmitHandel}>
                                                            <select value={data.cate_id} onChange={ChangeHandel} name='cate_id' className='form-select'>
                                                                <option value="" >Select Categories</option>
                                                                {
                                                                    categories && categories.map((val) => {
                                                                        return (
                                                                            <option value={val.id}>{val.name}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                            <div className="col-12">
                                                                <label htmlFor="inputNanme4" className="form-label"> Name</label>
                                                                <input type="text" className="form-control" name='name' value={data.name} id="inputNanme4" />
                                                            </div>
                                                            <div className="col-12">
                                                                <label htmlFor="inputNanme4" className="form-label"> Brand</label>
                                                                <input type="text" className="form-control" name='brand' value={data.brand} id="inputNanme4" />
                                                            </div>
                                                            <div className="col-12">
                                                                <label htmlFor="inputEmail4" className="form-label">Image</label>
                                                                <input type="url" className="form-control" name='image' value={data.image} id="inputEmail4" />
                                                            </div>
                                                            <div className="col-12">
                                                                <label htmlFor="inputEmail4" className="form-label">Price</label>
                                                                <input type="tel" className="form-control" name='price' value={data.price} id="inputEmail4" />
                                                            </div>
                                                            <div className="col-12">
                                                                <label htmlFor="inputEmail4" className="form-label">Discount</label>
                                                                <input type="text" className="form-control" name='discount' value={data.discount} id="inputEmail4" />
                                                            </div>
                                                            <div className="text-center mt-5">
                                                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    {/* Modal footer */}

                                                </div>
                                            </div>
                                        </div>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Product