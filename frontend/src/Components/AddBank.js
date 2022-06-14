import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Host } from '../Data';
import { addBank } from '../Redux/Banks_slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddBank({ toggleBankAddMode }) {

    const [bankName, setBankName] = useState('');
    const User = useSelector(state => state.User.User);
    const dispatch = useDispatch();

    const SaveBankName = async () => {

        try {

            const response = await axios.post(`${Host}/api/user/banks`, { bankName }, {
                headers: {
                    Authorization: `Bearer ${User}`
                }
            })

            setBankName('');
            toast.success('Bank added successfully')
            dispatch(addBank(response.data));

        } catch (error) {

            console.log(error)
            toast.error('Something went wrong')
        }

    }

    return (
        <div className=' w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-25 p-5 z-20'>
            <div className=' px-10 flex justify-end'>
                <button onClick={toggleBankAddMode} className=' bg-red-500 py-[6px] px-2 rounded text-white'>Close</button>
            </div>
            <div className=' flex justify-center w-full'>
                <div className=' bg-white shadow rounded h-[200px] p-5 py-3 mt-10'>
                    <p className=' text-center font-medium'>Create Bank</p>
                    <input value={bankName} onChange={(e) => setBankName(e.target.value)} type="text" placeholder='Bank Name' className='mt-5 border border-blue-500 rounded p-1 focus:outline-none' />
                    <div className='mt-5 flex justify-center'>
                        <button onClick={SaveBankName} className='shadow shadow-blue-300 p-1 rounded text-blue-600 hover:scale-105 transition-all ease-in'>Save</button>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                className="w-72"
            />
        </div>
    )
}

export default AddBank