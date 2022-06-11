import React, { useState } from 'react'
import logo from "../Photos/nccbank.jpg";

function NCCBankOne() {


    const [randomArray, setRandomArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);

    return (
        <div className=' w-full min-h-screen p-5 print:p-0'>
            {/* header start */}
            <div className=' w-full flex '>
                <div className=' w-1/2 flex'>
                    <div>
                        <img src={logo} alt="" className=' w-24 h-36' />
                    </div>
                    <div className=' ml-3'>
                        <p className=' text-xl print:text-lg'>NCC Bank Limited</p>
                        <p className=' text-lg print:text-base'>Banani Branch</p>
                        <p className='mt-5 print:mt-2 print:text-sm'>Account Opening Branch : Banani Branch</p>
                        <p className='my-1 print:text-sm'>Tower-52,House-52,RD#11,Blok-c,Banani</p>
                        <p className='my-1 print:text-sm'>Phone: 1234567778</p>
                        <p className='my-1 print:text-sm'>Fax: 12345678345</p>
                    </div>
                </div>
                <div className=' w-1/2'>
                    <p className=' font-semibold text-xl uppercase text-right pr-16'>statement of account</p>
                    <div className=' w-full mt-10 print:mt-5 print:text-sm pl-5'>
                        <div className=' my-1'>
                            <span className=' inline-block w-40'>Account Status</span>
                            <span className=' mx-2 font-semibold'>:</span>
                            <span className=''>Active</span>
                        </div>
                        <div className=' my-1'>
                            <span className=' inline-block w-40'>Account opening date</span>
                            <span className=' mx-2 font-semibold'>:</span>
                            <span className=''>27 Feb 2013</span>
                        </div>
                        <div className=' my-1'>
                            <span className=' inline-block w-40'>Entry Date</span>
                            <span className=' mx-2 font-semibold'>:</span>
                            <span className=''></span>
                        </div>
                        <div className=' my-1'>
                            <span className=' inline-block w-40'>Interest/Profit Rate</span>
                            <span className=' mx-2 font-semibold'>:</span>
                            <span className=''>2.00%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full flex mt-10 print:mt-5 items-center print:text-sm'>
                <div className=' w-1/2'>
                    <p className=' mb-1'>Savings Bank Deposits</p>
                    <p className=' my-1'>SK.NOWSHAD AHMED</p>
                    <p className=' my-1 uppercase'>41/15,B-1,ZIGATOLA,HAZI AFSARUDDIN LANE,dhanmondi,dhaka</p>
                    <p className=' my-1'>Account No: 002345678876</p>
                    <p className=' mt-1'>Statement of Period: 01/Nov/2021 to 19/May/2022</p>
                </div>
                <div className=' w-1/2'>
                    <p className='pl-5'>Status: OPERATIVE</p>
                </div>
            </div>
            {/* header end */}

            {/* table start */}

            <table className=' w-full mt-10 print:mt-5'>
                <thead>
                    <tr className=' border-y border-dashed py-1'>
                        <td className=' font-medium p-2 print:font-normal print:text-sm print:p-0'>Date</td>
                        <td className=' font-medium p-2 print:font-normal print:text-sm print:p-0'>Value Date</td>
                        <td className=' font-medium p-2 print:font-normal print:text-sm print:p-0 '>Particulars</td>
                        <td className=' font-medium p-2 print:font-normal print:text-sm print:p-0 text-center'>Eithdrawal(Dr)</td>
                        <td className=' font-medium p-2 print:font-normal print:text-sm print:p-0 text-center'>Deposit(Cr)</td>
                        <td className=' font-medium p-2 print:font-normal print:text-sm print:p-0 text-center'>Balance</td>
                        <td className=' font-medium p-2 print:font-normal print:text-sm print:p-0 text-center'>Branch</td>
                        <td className=' font-medium p-2 print:font-normal print:text-sm print:p-0 text-right'>time</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        randomArray.map((item, index) => {
                            return (
                                <tr>
                                    <td className='p-2 print:p-0 print:text-[12px]'>01/11/2021</td>
                                    <td className='p-2 print:p-0 print:text-[12px]'>01/11/2021</td>
                                    <td className='p-2 print:p-0 print:text-[12px] uppercase'>opening balance</td>
                                    <td className='p-2 print:p-0 print:text-[12px] text-center'>3000</td>
                                    <td className='p-2 print:p-0 print:text-[12px] text-center'>494.00</td>
                                    <td className='p-2 print:p-0 print:text-[12px] text-center'>5244.08</td>
                                    <td className='p-2 print:p-0 print:text-[12px] text-center'>05</td>
                                    <td className='p-2 print:p-0 print:text-[12px] text-right'>10.53</td>
                                </tr>
                            )
                        })
                    }


                    <tr>
                        <td className=''></td>
                        <td className=''></td>
                        <td className='p-2 print:p-0 print:text-[12px] border-t border-dashed'>Total:</td>
                        <td className='p-2 print:p-0 print:text-[12px] text-center border-t border-dashed'>3000</td>
                        <td className='p-2 print:p-0 print:text-[12px] text-center border-t border-dashed'>494.00</td>
                        <td className='p-2 print:p-0 print:text-[12px] text-center border-t border-dashed'>5244.08</td>
                        <td className=''></td>
                        <td className=''></td>
                    </tr>

                </tbody>
            </table>

            {/* table end */}

        </div>
    )
}

export default NCCBankOne