import React, { useRef, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';



export default function AddUser() {
    const [value, setValue] = useState({
        stt: '',
        ma: '',
        giahientai: '',
        giangungmua: '',
        giacannhacban: '',
        cotuc: '',
        suatcotuc: '',
        tangtruonglnkyvong: '',
        muctangtruongtonghangnam: '',
        ghichu: ""
    })
    const handleOnchange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    };


    const CloseRef = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const adduser = await axios.post('http://localhost:8000/api/create', value)
            const response = adduser.data
            if (response.success) {
                toast.success(response.Message)
                CloseRef.current.click()

            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }


    };
    return (
        <>


            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Thêm mã chứng khoán</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
                            <div className="modal-body">
                            <div className="form-group">
                                    <label>STT</label>
                                    <input type="text" value={value.stt} name='stt' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Mã</label>
                                    <input type="text" value={value.ma} name='ma' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Giá hiện tại</label>
                                    <input type="text" value={value.giahientai} name='giahientai' onChange={handleOnchange} className="form-control" required />

                                </div>
                                <div className="form-group">
                                    <label>Giá ngừng mua</label>

                                    <input type="text" value={value.giangungmua} name='giangungmua' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Giá cân nhắc bán</label>

                                    <input type="text" value={value.giacannhacban} name='giacannhacban' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Cổ tức (k/cp)</label>

                                    <input type="text" value={value.cotuc} name='cotuc' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Suất cổ tức(cổ tức/ giá)</label>

                                    <input type="text" value={value.suatcotuc} name='suatcotuc' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Tăng trưởng LN kỳ vọng 3-5 năm</label>

                                    <input type="text" value={value.tangtruonglnkyvong} name='tangtruonglnkyvong' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Mức tăng trưởng tổng hàng năm(kỳ vọng)</label>

                                    <input type="text" value={value.muctangtruongtonghangnam} name='muctangtruongtonghangnam' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Ghi chú</label>

                                    <input type="text" value={value.ghichu} name='ghichu' onChange={handleOnchange} className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Add" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
