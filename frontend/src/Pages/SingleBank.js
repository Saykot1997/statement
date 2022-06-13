import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { Host } from "../Data"
import { useDispatch, useSelector } from 'react-redux';
import { transactionsFatchSuccess } from '../Redux/Transactions_slice';


function SingleBank() {

    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const User = useSelector(state => state.User.User);
    const Transaction = useSelector(state => state.Transactions.Transactions);
    const dispatch = useDispatch();


    const getTransaction = async () => {

        try {

            const response = await axios.get(`${Host}/api/user/transaction/${path}`, {
                headers: {
                    Authorization: `Bearer ${User}`
                }
            });

            dispatch(transactionsFatchSuccess(response.data));

        } catch (error) {

            console.log(error)
        }
    }

    useEffect(() => {

        getTransaction()

    }, [path])

    console.log(Transaction)

    return (
        <div className='w-full h-[calc(100vh-64px)] bg-gray-100 overflow-y-scroll p-5'>
            {
                Transaction.length > 0 ?
                    <p className=' text-center font-medium'>{Transaction[0].bankId.bankName}</p>
                    :
                    <p className=' text-center font-medium'>No Transactions Added</p>
            }
            <div className=' w-full grid grid-cols-3 gap-5 mt-5' >
                {
                    Transaction.length > 0 && Transaction.map(transaction => {
                        return (
                            <div className=' bg-white px-5 py-3 rounded shadow'>
                                <p className=' mb-2 text-sm'> <span className=' font-medium'>Transaction Name : </span>{transaction.transactionName}</p>
                                <p className=' my-2 text-sm'> <span className=' font-medium'>Transaction Method :</span> {transaction.transactionMethod}</p>
                                <p className=' my-2 text-sm'> <span className=' font-medium'>Transaction Type :</span> {transaction.transactionType}</p>
                                <p className=' mt-2 text-sm'> <span className=' font-medium'>Branch :</span> {transaction.branch}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SingleBank