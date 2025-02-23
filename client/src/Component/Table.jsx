import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Table({ Deletuser, UpdatedUser }) {
    const [data, setData] = useState([])



    useEffect(() => {
        async function FeatchData() {
            try {
                const user = await axios.get('http://localhost:8000/api/get')
                const response = user.data
                // console.log(response.users)
                setData(response)
                // console.log(response.data.users.email, 'email')
            } catch (error) {
                console.log(error)
            }
        }
        FeatchData()

    }, [data])


    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2><b>Trang Chủ</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="material-icons">&#xE147;</i> <span>Thêm cổ phiếu</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Giá hiện tại</th>
                                <th>Giá ngừng mua</th>
                                <th>Giá cân nhắc bán</th>
                                <th>Cổ tức (k/cp)</th>
                                <th>Suất cổ tức(cổ tức/ giá)</th>
                                <th>Tăng trưởng LN kỳ vọng 3-5 năm</th>
                                <th>Mức tăng trưởng tổng hàng năm(kỳ vọng)</th>
                                <th>Ghi chú</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users?.map((elem, index) => {
                                return (
                                    <tr>
                                        <td></td>
                                        <td>{elem.stt}</td>
                                        <td>{elem.ma}</td>
                                        <td>{elem.giahientai}</td>
                                        <td>{elem.giangungmua}</td>
                                        <td>{elem.giacannhacban}</td>
                                        <td>{elem.cotuc}</td>
                                        <td>{elem.suatcotuc}</td>
                                        <td>{elem.tangtruonglnkyvong}</td>
                                        <td>{elem.muctangtruongtonghangnam}</td>
                                        <td>{elem.ghichu}</td>
                                        <td>
                                            <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdatedUser(elem._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                                            </a>
                                            <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => Deletuser(elem._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="delete" >&#xE872;</i>
                                            </a>
                                            {/* <a className="delete" data-bas-toggle='modal' data-bs-target='#deleteEmployeeModal'><i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div >


        </>
    );
}
