import React from 'react'
import logo from "../Photos/nccbank.jpg"

function NCCBankTwo() {
    return (

        <div className=' w-full min-h-screen p-5 print:p-0'>
            <div className=' flex justify-between items-center'>
                <div>
                    <div>
                        <img src={logo} alt="" className=' w-60' />
                    </div>
                </div>
                <div>
                    <p className=' uppercase font-semibold print:font-medium'>National credit and commerce bank limited</p>
                </div>
            </div>
            <div className=' px-[100px]'>
                <div>
                    <p className=' text-lg font-semibold print:font-medium'>JBL/SNB/GB/2022/522</p>
                    <p className=' text-xl text-gray-600'>MAY 22,2022</p>
                </div>
                <div className=' flex justify-center mt-10'>
                    <span className='text-xl font-semibold print:font-medium underline'>To Whome It May Concern</span>
                </div>

                <div className=' mt-10'>
                    <p >This is to certify that <span className=' font-medium uppercase'>mohd. mominur rahman</span> of 33/1 SARAT GUPTA ROAD, NARINDA DHAKA has been maintaining a Savings Deposit Account bearing no 0005-0330374567 scince 22/05/2022 with our branch </p>
                </div>

                <div className=' mt-10 print:mt-5'>
                    <table className=' w-full'>
                        <thead>
                            <tr className=''>
                                <td className=' font-medium p-2 border'>SL.NO</td>
                                <td className=' font-medium p-2 border'>Account Number</td>
                                <td className=' font-medium p-2 border'>Account Name</td>
                                <td className=' font-medium p-2 border'>Balance As on 19.05.2022</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className=' border p-2 print:text-sm'>1</td>
                                <td className=' border p-2 print:text-sm'>98173248972148989</td>
                                <td className=' border p-2 print:text-sm'>MOHD. MOMINUR RAHMAN</td>
                                <td className=' border p-2 print:text-sm'>BDT 345678 eqvt/ tp USD 3456@87.60</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className=' my-5'> <span className=' font-medium uppercase'>sk. nowshad ahmed</span> has been maintaing above Saving deposite account satisfactory with our branch. Based on transactions of the account with us he is deemed financially sound and solvend. </p>
                    <p>We wish him every success in life.</p>
                    <p className=' py-20'>For NCC Bank Ltd</p>
                    <div className=' flex justify-between w-full'>
                        <div className=' w-1/2'>
                            <p className=' font-semibold'>Authorized Officer</p>
                        </div>
                        <div className=' w-1/2'>
                            <p className=' font-semibold'>Authorized Officer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NCCBankTwo