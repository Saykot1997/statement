import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Host } from "../Data"
import { useDispatch, useSelector } from 'react-redux'
import { fatchSuccess, deleteBank, updateBank } from '../Redux/Banks_slice'
import { Link } from 'react-router-dom'
import AddBank from '../Components/AddBank'
import { MdDelete } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSave } from 'react-icons/fa'
import { AiFillCloseSquare } from 'react-icons/ai'

function Banks() {

    const User = useSelector(state => state.User.User);
    const Banks = useSelector(state => state.Banks.Banks);
    const [openBankAddMode, setOpenBankAddMode] = useState(false);
    const dispatch = useDispatch();
    const [updateModeOpen, setUpdateModeOpen] = useState(false);
    const [currentBankId, setCurrentBankId] = useState("");
    const [currentBankName, setCurrentBankName] = useState("");


    const toggleBankAddMode = () => {

        setOpenBankAddMode(!openBankAddMode)
    }

    const toggleUpdateMode = (bank) => {

        setUpdateModeOpen(!updateModeOpen);
        setCurrentBankId(bank._id);
        setCurrentBankName(bank.bankName);
    }

    const getBanks = async () => {

        try {

            const response = await axios.get(`${Host}/api/user/banks`, {
                headers: {
                    Authorization: `Bearer ${User}`
                }
            });
            dispatch(fatchSuccess(response.data));

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBanks()
    }, [])

    const confirmDelete = async (bankId) => {

        window.confirm("Are you sure you want to delete this bank? All it's transiction will be deleted.") && deleteBanks(bankId)
    }

    const deleteBanks = async (id) => {

        try {

            await axios.delete(`${Host}/api/user/banks/${id}`, {
                headers: {
                    Authorization: `Bearer ${User}`
                }
            })

            toast.success('Bank deleted successfully')
            dispatch(deleteBank(id))

        } catch (error) {

            toast.error('Something went wrong')
            console.log(error)
        }
    }

    const updateBankName = async () => {

        try {

            const res = await axios.put(`${Host}/api/user/banks/${currentBankId}`, { bankName: currentBankName }, {
                headers: {
                    Authorization: `Bearer ${User}`
                }
            })

            toast.success('Bank updated successfully')
            dispatch(updateBank(res.data))
            setUpdateModeOpen(false)

        } catch (error) {

            if (error.response.data === "Bank not found") {

                toast.error('Bank not found')

            } else if (error.response.data === "Bank name already exists") {

                toast.error('Bank name already exists')

            } else {

                toast.error('Something went wrong')
            }

            console.log(error)
        }
    }


    return (
        <div className=' w-full h-[calc(100vh-64px)] bg-gray-100 overflow-y-scroll p-5 pt-3'>
            <div className=' flex justify-end mb-3 py-1'>
                <button onClick={toggleBankAddMode} className=' shadow shadow-blue-300 p-1 rounded text-blue-600 hover:scale-105 transition-all ease-in'>Add Bank</button>
            </div>
            <div className='w-full grid grid-cols-3 gap-5'>
                {
                    Banks.map(bank => {
                        return (

                            <div className=' bg-white p-5 rounded shadow flex items-center justify-between' key={bank._id}>
                                {
                                    updateModeOpen && currentBankId === bank._id ?
                                        <input placeholder='Bank Name' value={currentBankName} onChange={(e) => { setCurrentBankName(e.target.value) }} className=' p-1 focus:outline-none border border-blue-500 rounded' />
                                        :
                                        <Link to={`/singlebank/${bank._id}`}>
                                            <span className=' font-medium '>{bank.bankName}</span>
                                        </Link>
                                }

                                {
                                    updateModeOpen && currentBankId === bank._id ?


                                        <div className=' flex items-center'>
                                            <FaSave onClick={updateBankName} className=' text-blue-500 cursor-pointer mr-2' />
                                            <AiFillCloseSquare onClick={() => { toggleUpdateMode(bank) }} className=' text-red-500 text-lg cursor-pointer' />
                                        </div>

                                        :

                                        <div className=' flex items-center'>
                                            <BiEdit onClick={() => { toggleUpdateMode(bank) }} className=' text-green-500 cursor-pointer mr-2' />
                                            <MdDelete onClick={() => { confirmDelete(bank._id) }} className=' text-red-500 text-lg cursor-pointer' />
                                        </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
            {
                openBankAddMode &&
                <AddBank toggleBankAddMode={toggleBankAddMode} />
            }

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

export default Banks