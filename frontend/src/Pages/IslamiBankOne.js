import React, { useState } from 'react'

function IslamiBankOne() {

    const [randomArray, setRandomArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);

    return (
        <div className=' w-full min-h-screen bg-gray-100 p-5 print:p-0'>

            {/* header section stert */}
            <div className='w-full flex justify-center'>
                <div className='text-center'>
                    <p className=' text-2xl print:text-xl font-semibold'>Social Islami Bank Ltd.</p>
                    <p className=' font-medium print:sm:'>Garib-E-Newaz Avenue Branch</p>
                    <p className=' font-medium print:text-sm'>50,Garib-E-newaz Avenue,Sector-13,Uttara</p>
                </div>
                <div className=' absolute top-0 right-0 w-1/2 flex justify-end pl-10'>
                    <div className=''>
                        <p className=' text-sm font-medium print:font-normal print:text-right'>Print Date : 29/05/2022</p>
                        <p className=' text-sm font-medium print:font-normal mr-14'>Report Generated User:</p>
                    </div>
                </div>
            </div>
            <div className=' flex justify-center py-5 print:pt-2 print:pb-4'>
                <span className=' underline font-semibold text-lg print:text-base'>A/C Statement</span>
            </div>

            {/* header section end */}

            <div className=' w-full flex'>
                <div className=' w-1/2 print:text-sm'>
                    <div className=' my-1'>
                        <span className=' inline-block w-24 font-semibold print:font-medium'>A/C No</span>
                        <span className=' mx-2 font-semibold print:font-medium'>:</span>
                        <span className=' uppercase'>09328587234928</span>
                    </div>
                    <div className=' my-1'>
                        <span className=' inline-block w-24 font-semibold print:font-medium'>A/C Name</span>
                        <span className=' mx-2 font-semibold print:font-medium'>:</span>
                        <span className=' uppercase'>A.K.M RAJIB HASAN</span>
                    </div>
                    <div>
                        <span className=' inline-block w-24 font-semibold print:font-medium'>Address</span>
                        <span className=' mx-2 font-semibold print:font-medium'>:</span>
                        <span className=' uppercase'>house-27, road-6,block-b banasree,rampura,dhaka</span>
                    </div>
                </div>
                <div className=' w-1/2 print:text-sm'>
                    <div className=' my-1 flex'>
                        <span className=' inline-block w-32 text-right font-semibold print:font-medium'>Date From</span>
                        <span className=' mx-2 font-semibold print:font-medium'>:</span>
                        <p className=' font-semibold print:font-medium'> <span>01/11/2021</span> To <span>29/05/2022</span></p>
                    </div>
                    <div className=' my-1 flex'>
                        <span className=' inline-block w-32 text-right font-semibold print:font-medium'>Type of Account</span>
                        <span className=' mx-2 font-semibold print:font-medium'>:</span>
                        <p className=''>Mudaraba Saving Deposit-Client</p>
                    </div>
                    <div className=' my-1'>
                        <span className=' inline-block w-32 text-right font-semibold print:font-medium'>Opening Date</span>
                        <span className=' mx-2 font-semibold print:font-medium'>:</span>
                        <span className=' uppercase'>05/06/2017</span>
                    </div>
                    <div className=' my-1'>
                        <span className=' inline-block w-32 text-right font-semibold print:font-medium'>Last Tr.Date</span>
                        <span className=' mx-2 font-semibold print:font-medium'>:</span>
                        <span className=' uppercase'>05/06/2022</span>
                    </div>
                    <div className=' my-1'>
                        <span className=' inline-block w-32 text-right font-semibold print:font-medium'>Phone</span>
                        <span className=' mx-2 font-semibold print:font-medium'>:</span>
                        <span className=' uppercase'>01965789909876</span>
                    </div>
                    <div className=' my-1'>
                        <span className=' inline-block w-32 text-right font-semibold print:font-medium'>Account Status</span>
                        <span className=' mx-2 font-semibold print:font-medium'>:</span>
                        <span className=' uppercase'>Active</span>
                    </div>
                </div>
            </div>

            {/* header section end */}

            <table className=' w-full mt-10 print:mt-5'>
                <thead>
                    <tr className=''>
                        <td className=' font-medium print:px-1 py-0 print:text-[12px] border p-2'>Date</td>
                        <td className=' font-medium print:px-1 py-0 print:text-[12px] border p-2'>Code</td>
                        <td className=' font-medium print:px-1 py-0 print:text-[12px] border p-2'>Cheque/Instr.</td>
                        <td className=' font-medium print:px-1 py-0 print:text-[12px] border p-2'>Particulars</td>
                        <td className=' font-medium print:px-1 py-0 print:text-[12px] border p-2 text-right'>Debit</td>
                        <td className=' font-medium print:px-1 py-0 print:text-[12px] border p-2 text-right'>Credit</td>
                        <td className=' font-medium print:px-1 py-0 print:text-[12px] border p-2 text-right'>Balance</td>
                    </tr>
                </thead>
                <tbody>

                    {
                        randomArray.map((item, index) => {

                            return (
                                <tr>
                                    <td className=' border p-2 print:py-0 print:px-1 print:text-[11px] print:leading-4'>01/11/2021</td>
                                    <td className=' border p-2 print:py-0 print:px-1 print:text-[11px] print:leading-4'>204</td>
                                    <td className=' border p-2 print:py-0 print:px-1 print:text-[11px] print:leading-4'>V-</td>
                                    <td className=' border p-2 print:py-0 print:px-1 print:text-[11px] print:leading-4 uppercase'>atm transaction from terminal code atm017601 <span className=' capitalize'>on Date 01-Nov-21</span></td>
                                    <td className=' border p-2 print:py-0 print:px-1 print:text-[11px] print:leading-4 text-right'>494.00</td>
                                    <td className=' border p-2 print:py-0 print:px-1 print:text-[11px] print:leading-4 text-right'>5244.08</td>
                                    <td className=' border p-2 print:py-0 print:px-1 print:text-[11px] print:leading-4 text-right'>982347</td>
                                </tr>
                            )
                        })
                    }

                    <tr>
                        <td className=" text-sm p-2"></td>
                        <td className=" text-center text-sm p-2"></td>
                        <td className=" text-center text-sm p-2"></td>
                        <td className=" text-right p-2 font-semibold print:font-medium print:text-[12px]">Total : </td>
                        <td className=" text-right p-2 font-semibold print:font-medium print:text-[12px]">
                            <div className=' w-full p-1'>
                                <p className=' border-y border-gray-700'>567878900</p>
                            </div>
                        </td>
                        <td className=" text-right font-semibold print:font-medium print:text-[12px] p-2">
                            <div className=' w-full p-1'>
                                <p className=' border-y border-gray-700'>567878900</p>
                            </div>
                        </td>
                        <td className=" text-center text-sm p-2"></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default IslamiBankOne