import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { delete_categories, get_categories } from './CategoriesSlice';
import { toast } from 'react-toastify';


function Manage_categories() {
    const { name, categories } = useSelector((state) => state.categories)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_categories())
    })
    return (
        <div>
            <Navbar />
            <main id="main" class="main">
                <div class="row">
                    <div class="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Categories </h5>
                                {/* Table with stripped rows */}
                                <table className="table table-striped">
                                    <thead>
                                        <tr >
                                            <th scope="col">Categories ID</th>
                                            <th scope="col">Categories Image</th>
                                            <th scope="col">Categories Name</th>
                                            <th scope="col" >Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            categories && categories.map((value) => {
                                                return (
                                                    <tr>
                                                        <td scope="row">{value.id}</td>
                                                        <td><img src={value.image} alt="" width={50} height={50} /></td>
                                                        <td>{value.name}</td>
                                                        <td>
                                                            <button className='btn btn-info me-3' data-bs-toggle="modal" data-bs-target="#myModal" >Edit</button>
                                                            <button className='btn btn-danger' onClick={() => {
                                                                dispatch(delete_categories(value.id))
                                                                toast.success(" Data Delete Success")
                                                                return  dispatch(get_categories())
                                                            }} >Delete</button>
                                                        </td>

                                                    </tr>
                                                )
                                            })
                                        }

                                        <div className="modal" id="myModal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    {/* Modal Header */}
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Modal Heading</h4>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                    </div>
                                                    {/* Modal body */}
                                                    <div className="modal-body">
                                                        Modal body..
                                                    </div>
                                                    {/* Modal footer */}
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </tbody>
                                </table>


                                {/* End Table with stripped rows */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Manage_categories