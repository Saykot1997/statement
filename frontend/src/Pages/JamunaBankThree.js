import React from 'react'
import logo from "../Photos/jamunabank.jpg"

function JamunaBankThree() {
    return (
        <div className=' w-full min-h-screen px-20 print:px-5'>
            <div className=' flex justify-between items-center'>
                <div className=' w-1/2'>
                    <img src={logo} alt="" className='w-52' />
                </div>
                <div className=' w-1/2 print:text-sm'>
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
                <p className=' text-lg font-semibold print:font-medium'>JBL/SNB/GB/2022/522</p>
                <p className=' text-xl text-gray-600'>MAY 22,2022</p>
            </div>
            <div className=' flex justify-center mt-5'>
                <span className='text-xl font-semibold print:font-medium underline'>To Whome It May Concern</span>
            </div>

            <div className=' mt-10'>
                <p >This is to certify that <span className='font-semibold uppercase'>mohd. mominur rahman</span> Permanent Address:33/1 SARAT GUPTA ROAD, NARINDA DHAKA has been maintaining a Savings Account with our branch. The details of the said scheme as on 22.05.2022 are fiven blow: </p>
            </div>

            <div className=' mt-10'>
                <table className=' w-full'>
                    <thead>
                        <tr className=''>
                            <td className=' font-medium p-2 border'>A/c No</td>
                            <td className=' font-medium p-2 border'>Type of Account</td>
                            <td className=' font-medium p-2 border'>Account Name</td>
                            <td className=' font-medium p-2 border'>Opening Date</td>
                            <td className=' font-medium p-2 border'>Present Balance (Tk.)</td>
                            <td className=' font-medium p-2 border'>Present Balance (USD)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=' border p-2'>
                                <p>13/04/22 16:09</p>
                                <p>Update A/C Number</p>
                                <p>110100445399</p>
                            </td>
                            <td className=' border p-2'>Saving</td>
                            <td className=' border p-2'>MOHD. MOMINUR RAHMAN</td>
                            <td className=' border p-2'>04/08/2004</td>
                            <td className=' border p-2'>494421.52</td>
                            <td className=' border p-2'>5244.08</td>
                        </tr>
                    </tbody>
                </table>
                <p className=' my-5'>1 USD = 87.60</p>
                <p className=' mt-10'>We wish him every success in life.</p>
                <div className=' flex justify-between w-full mt-20'>
                    <div className=' w-1/2'>
                        <p className=' font-semibold'>Mrinalni Saha</p>
                        <p className=' font-semibold'>SEO & GB Incharge</p>
                    </div>
                    <div className=' w-1/2'>
                        <p className=' font-semibold'>K.M Khairul Islam</p>
                        <p className=' font-semibold'>FAVP & Manager Operations</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JamunaBankThree