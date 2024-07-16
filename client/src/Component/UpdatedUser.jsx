import React, { useState } from 'react'

export default function UpdatedUser({ handleOnSubmit, value, handlechange }) {



    return (
        <>


            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Chỉnh sửa</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>STT</label>
                                    <input type="text" value={value.stt} name='stt' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Mã</label>
                                    <input type="text" value={value.ma} name='ma' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Giá hiện tại</label>
                                    <input type="text" value={value.giahientai} name='giahientai' onChange={handlechange} className="form-control" />

                                </div>
                                <div className="form-group">
                                    <label>Giá ngừng mua</label>

                                    <input type="text" value={value.giangungmua} name='giangungmua' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Giá cân nhắc bán</label>

                                    <input type="text" value={value.giacannhacban} name='giacannhacban' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Cổ tức (k/cp)</label>

                                    <input type="text" value={value.cotuc} name='cotuc' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Suất cổ tức(cổ tức/ giá)</label>

                                    <input type="text" value={value.suatcotuc} name='suatcotuc' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Tăng trưởng LN kỳ vọng 3-5 năm</label>

                                    <input type="text" value={value.tangtruonglnkyvong} name='tangtruonglnkyvong' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Mức tăng trưởng tổng hàng năm(kỳ vọng)</label>

                                    <input type="text" value={value.muctangtruongtonghangnam} name='muctangtruongtonghangnam' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Ghi chú</label>

                                    <input type="text" value={value.ghichu} name='ghichu' onChange={handlechange} className="form-control" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Update" data-bs-dismiss="modal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
