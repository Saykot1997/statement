import React, { useEffect } from 'react'
import axios from 'axios'
import { Host } from "../Data"
import { useDispatch, useSelector } from 'react-redux'
import { fatchSuccess } from '../Redux/Banks_slice'
import { Link } from 'react-router-dom'

function Banks() {

    // const [bankName, setBankName] = React.useState('');
    // const User = useSelector(state => state.User.User);

    // const SaveBankName = async () => {

    //     try {

    //         const response = await axios.post(`${Host}/api/user/banks`, { bankName }, {
    //             headers: {
    //                 Authorization: `Bearer ${User}`
    //             }
    //         })

    //         setBankName('');
    //         alert('Bank added')

    //     } catch (error) {

    //         console.log(error)
    //         alert('Something went wrong')
    //     }

    // }

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
        <div className=' w-full h-[calc(100vh-64px)] bg-gray-100 overflow-y-scroll p-5'>
            <div className='w-full grid grid-cols-3 gap-5'>
                {
                    Banks.map(bank => {
                        return (
                            <Link to={`/singlebank/${bank._id}`} key={bank._id}>
                                <div className=' bg-white p-5 rounded shadow'>
                                    <p className=' font-medium '>{bank.bankName}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Banks