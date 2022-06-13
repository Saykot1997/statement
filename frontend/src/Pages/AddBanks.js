import React from 'react'
import { Host } from '../Data'
import axios from 'axios'
import { useSelector } from 'react-redux';

function AddBanks() {

    const [bankName, setBankName] = React.useState('');
    const User = useSelector(state => state.User.User);

    const SaveBankName = async () => {

        try {

            const response = await axios.post(`${Host}/api/user/banks`, { bankName }, {
                headers: {
                    Authorization: `Bearer ${User}`
                }
            })

            setBankName('');
            alert('Bank added')

        } catch (error) {

            console.log(error)
            alert('Something went wrong')
        }

    }



    return (
        <div className=' w-full h-[calc(100vh-64px)] bg-gray-100 overflow-y-scroll p-5'>
            <div className=' w-full flex justify-center'>
                <div className=' mt-5 bg-white rounded shadow w-[300px] h-[200px] p-5'>
                    <p className=' text-center font-medium mb-3'>Add Banks</p>
                    <input value={bankName} onChange={(e) => setBankName(e.target.value)} type="text" className='w-full px-5 py-2 border border-blue-500 focus:outline-none rounded' placeholder='Bank Name' />
                    <div className=' flex justify-center mt-5'>
                        <button onClick={SaveBankName} className=' bg-blue-500 text-white py-[6px] px-2 rounded'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBanks