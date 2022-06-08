import React from 'react'

function FormateThree() {
    return (
        <div className=' w-full min-h-screen bg-gray-100 px-20 py-10'>
            <div className=' flex justify-between items-center '>
                <p className=' text-6xl text-gray-500'>JamunaBank</p>
                <div>
                    <p className=' font-semibold text-xl'>Shantinagar Branch</p>
                    <p>Green City Edge 89, Kankril C/A</p>
                    <p>Ward No 19 Dhaka Bangladesh</p>
                    <p>Phone No:8802897462</p>
                    <p>PABX :  972438,9347539,9348753</p>
                    <p>E-mail : manager.ahantinagar@jamunabank.com.bd</p>
                    <p>SWIFT : JAMUBDDH041</p>
                </div>
            </div>
            <div>
                <p className=' text-lg font-semibold'>JBL/SNB/GB/2022/522</p>
                <p className=' text-xl text-gray-600'>MAY 22,2022</p>
            </div>
            <div className=' flex justify-center mt-10'>
                <span className='text-xl font-semibold underline'>To Whome To May Concern</span>
            </div>

            <div className=' mt-10'>
                <p >This is to certify that <span className=' text-xl font-semibold uppercase'>mohd. mominur rahman</span> Permanent Address:33/1 SARAT GUPTA ROAD, NARINDA DHAKA has been maintaining a Savings Account with our branch. The details of the said scheme as on 22.05.2022 are fiven blow </p>
            </div>

            <div className=' mt-10'>

                <table className=' w-full'>
                    <thead>
                        <tr className='border'>
                            <td className=' font-medium p-2'>Trans Date</td>
                            <td className=' font-medium p-2'>Value Date</td>
                            <td className=' font-medium p-2'>Particulars</td>
                            <td className=' font-medium p-2'>Ref/Cheque No</td>
                            <td className=' font-medium p-2'>Debit</td>
                            <td className=' font-medium p-2'>Credit</td>
                            <td className=' font-medium p-2'>Balance</td>
                            <td className=' font-medium p-2'>Tran Branch</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=' border p-2'>13/04/22 16:09</td>
                            <td className=' border p-2'>13/04/22 16:09</td>
                            <td className=' border p-2'>CW-Halkhul ATM-001287934678423898743</td>
                            <td className=' border p-2'></td>
                            <td className=' border p-2'>10,00000</td>
                            <td className=' border p-2'></td>
                            <td className=' border p-2'>2390856</td>
                            <td className=' border p-2'>1978344</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FormateThree