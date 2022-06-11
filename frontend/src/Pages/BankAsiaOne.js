import React, { useState } from 'react'
import logo from "../Photos/bankasia.jpg"

function BankAsiaOne() {

    const [randomArray, setRandomArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);

    return (
        <div className=' w-full min-h-screen p-5'>
            <div className=' w-full border-t border-gray-800'>
                {/* top section start */}
                <div className=' w-full border-x border-gray-800'>
                    <div className=' w-full flex justify-between'>
                        <div className=' w-[33%] pt-1 pl-1'>
                            <img src={logo} alt="" className=' w-40' />
                            <p className=' print:text-[12px] -mt-3'>mpbank.bankasia-bd.com</p>
                        </div>
                        <div className=' w-[33%]'>
                            <p>Any Branch</p>
                        </div>
                        <div className=' w-[33%] text-center pt-2'>
                            <p className=' uppercase print:leading-[18px] font-semibold text-lg'>station road branch</p>
                            <p className=' uppercase print:leading-[18px] text-sm print:text-[12px]'>mohiddin market <span className=' capitalize'>(1st floor)</span></p>
                            <p className=' uppercase print:leading-[18px] text-sm print:text-[12px]'>170, station road</p>
                            <p className=' uppercase print:leading-[18px] text-sm print:text-[12px]'>chitagong</p>
                            <p className=' uppercase print:leading-[18px] text-sm print:text-[12px]'>bangladesh</p>
                            <p className='text-[12px] print:text-[11px] print:leading-[18px]'>Phone : 092348755298437 Fax : 0258420935509</p>
                        </div>
                    </div>
                    <div className=' w-full flex justify-between mt-5 print:mt-2 border-b border-gray-800 px-1 print:text-[12px]'>
                        <p className=' font-medium'>Statement oof Account for the Period: 01/10/2021 to 10/05/2022</p>
                        <p className=' font-medium'>Date : 10/05/2022</p>
                    </div>
                </div>

                <div className=' w-full flex justify-between px-1 pb-10 print:pb-5 border-x border-gray-800 print:text-sm print:leading-[18px]'>
                    <div className=' w-1/2'>
                        <div className=' my-1'>
                            <span className=' inline-block w-28'>Customer Name</span>
                            <span className=' mx-2 font-semibold'>:</span>
                            <span className=' uppercase font-semibold print:font-medium'>mohammad jahirul islam</span>
                        </div>

                        <div>
                            <span className=' inline-block w-28'>Address</span>
                            <span className=' mx-2 font-semibold'>:</span>
                            <span className=' capitalize'>house-27, road-6,block-b banasree,rampura,dhaka</span>
                        </div>
                    </div>
                    <div className=' w-1/2'>
                        <div className=''>
                            <span className=' inline-block w-28'>Account Type</span>
                            <span className=' mx-2 font-semibold'>:</span>
                            <span className=''>C01 - Current Deposit Account</span>
                        </div>
                        <div className=''>
                            <span className=' inline-block w-28'>A/c No</span>
                            <span className=' mx-2 font-semibold'>:</span>
                            <span className=' uppercase'>0309875366539</span>
                        </div>
                        <div>
                            <span className=' inline-block w-28'>Cust. ID</span>
                            <span className=' mx-2 font-semibold'>:</span>
                            <span className=' uppercase'>0178943275</span>
                        </div>
                        <div>
                            <span className=' inline-block w-28'>Currency</span>
                            <span className=' mx-2 font-semibold'>:</span>
                            <span className=' uppercase'>BDT - BANGLADESH TAKA</span>
                        </div>
                    </div>
                </div>

                {/* top section end */}

                {/* table start */}

                <table className=' w-full border border-collapse border-slate-400'>
                    <thead>
                        <tr className=''>
                            <td className=' font-medium border border-gray-800 p-2 print:text-[12px] print:px-1 print:py-0 text-center'>SL#</td>
                            <td className=' font-medium border border-gray-800 p-2 print:text-[12px] print:px-1 print:py-0 text-center'>Date</td>
                            <td className=' font-medium border border-gray-800 p-2 print:text-[12px] print:px-1 print:py-0 text-center'>Trands. Code / Chq No</td>
                            <td className=' font-medium border border-gray-800 p-2 print:text-[12px] print:px-1 print:py-0 text-center'>Debit Amount</td>
                            <td className=' font-medium border border-gray-800 p-2 print:text-[12px] print:px-1 print:py-0 text-center'>Credit Amount</td>
                            <td className=' font-medium border border-gray-800 p-2 print:text-[12px] print:px-1 print:py-0 text-center'>Balance Amount</td>
                            <td className=' font-medium border border-gray-800 p-2 print:text-[12px] print:px-1 print:py-0 text-center'>Remarks</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            randomArray.map((item, index) => {
                                return (
                                    <tr>
                                        <td className=' border border-gray-800 p-2 print:px-1 py-0 print:leading-4 print:text-[11px] text-center'>{item}</td>
                                        <td className=' border border-gray-800 p-2 print:px-1 py-0 print:leading-4 print:text-[11px] text-center'>03/10/2021</td>
                                        <td className=' border border-gray-800 p-2 print:px-1 py-0 print:leading-4 print:text-[11px]'>GE LID 2LC002447</td>
                                        <td className=' border border-gray-800 p-2 print:px-1 py-0 print:leading-4 print:text-[11px] text-right'>2,93,487</td>
                                        <td className=' border border-gray-800 p-2 print:px-1 py-0 print:leading-4 print:text-[11px] text-right'>456794.00</td>
                                        <td className=' border border-gray-800 p-2 print:px-1 py-0 print:leading-4 print:text-[11px] text-right'>5244.08</td>
                                        <td className=' border border-gray-800 p-2 print:px-1 py-0 print:leading-4 print:text-[11px] text-left'>Margin For the Lc : 2099024375</td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td className=' border border-r-0 border-gray-800 p-2 print:px-1 print:text-[12px] print:py-0'></td>
                            <td className=' border border-x-0 border-gray-800 p-2 print:px-1 print:text-[12px] print:py-0'></td>
                            <td className=' border border-l-0 border-gray-800 p-2 print:px-1 print:text-[12px] print:py-0'>Total Debit/Credit : --> </td>
                            <td className=' border border-gray-800 p-2 print:px-1 print:text-[12px] print:py-0 uppercase'>2,93,487</td>
                            <td className=' border border-gray-800 p-2 print:px-1 print:text-[12px] print:py-0 text-right'>456794.00</td>
                            <td className=' border border-r-0 border-gray-800 p-2 print:px-1 print:text-[12px] print:py-0 text-right'></td>
                            <td className=' border border-gray-800 border-l-0 p-2 print:px-1 print:text-[12px] print:py-0 text-right'></td>
                        </tr>
                    </tbody>
                </table>
                {/* table end */}
                {/* bottom section start */}
                <div className=' w-full mt-10'>
                    <p className=' text-center font-medium print:text-sm'>Thanks for banking with us.</p>
                    <hr className=' h-[2px] bg-gray-400 w-full' />
                    <p className=' print:text-[11px]'>The Customer should examine promptly the statement received and notify the bank in writing within 15 calendar days after the statement is maild,transmitted, or otherwise made available to customer of any errors,discrepancies or irregularities detected failng,failing which the statement will deem to be correct. This is a computer generated statement and does not require any signature.</p>
                </div>
                {/* bottom section stop */}
            </div>
        </div>
    )
}

export default BankAsiaOne