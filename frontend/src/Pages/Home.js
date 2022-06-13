import React, { useEffect } from 'react'
import axios from 'axios'
import { Host } from "../Data"
import { useDispatch, useSelector } from 'react-redux'
import { fatchSuccess } from '../Redux/Banks_slice'
import { Link } from 'react-router-dom'

function Home() {

    const User = useSelector(state => state.User.User);
    const Banks = useSelector(state => state.Banks.Banks);
    const dispatch = useDispatch();

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


    return (
        <div className=' w-full h-[calc(100vh-64px)] overflow-y-scroll p-5'>
            <div className=' w-full grid grid-cols-3 gap-5'>
                {
                    Banks.length > 0 && Banks.map(bank => {
                        return (
                            <Link to={`/singlebank/${bank._id}`}>
                                <div className=' bg-white rounded px-5 py-3 shadow'>
                                    <p className=' text-center font-medium'>{bank.bankName}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home