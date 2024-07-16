import React, { useState, useEffect } from 'react';
import Table from '../Component/Table';
import AddUser from '../Component/AddUser';
import UpdatedUser from '../Component/UpdatedUser';
import DeletUser from '../Component/DeletUser';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function UserTable() {
    const [userId, setUserId] = useState('');
    const [updatedUserId, setUpdatedUserId] = useState('');
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
        ghichu: ''
    });

    const handlechange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/get');
            return response.data.users || [];
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    const deletuser = (userid) => {
        setUserId(userid);
    };

    const handleUserDelet = async () => {
        try {
            const DeletUser = await axios.delete(`http://localhost:8000/api/delete/${userId}`);
            const response = DeletUser.data;
            if (response.success) {
                toast.success(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const UpadteUserData = (Updatedid) => {
        setUpdatedUserId(Updatedid);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const UpdatedUser = await axios.put(`http://localhost:8000/api/update/${updatedUserId}`, value);
            const response = UpdatedUser.data;

            if (response.success) {
                toast.success(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Table Deletuser={deletuser} UpdatedUser={UpadteUserData} />
            <AddUser />
            <UpdatedUser handleOnSubmit={handleOnSubmit} value={value} handlechange={handlechange} />
            <DeletUser handleUserDelet={handleUserDelet} />
        </>
    );
}
