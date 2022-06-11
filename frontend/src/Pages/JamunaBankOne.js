import React, { useState } from 'react'
import logo from "../Photos/jamunabank.jpg"

function JamunaBankOne() {

    const [randomArray, setRandomArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);

    return (
        <div className="p-5">
            {/* topbar start */}
            <div className=" w-full flex justify-between">
                <div className=" w-2/3 flex items-center">
                    <div className=' mr-3'>
                        <img src={logo} alt="" className=' w-16 h-40' />
                    </div>
                    <div className=' ml-2 print:text-[12px]'>
                        <p className=" font-semibold print:font-medium text-lg print:text-base">Jamuna Bank Lid</p>
                        <p className=" font-semibold print:font-normal my-1 print:my-0">Shantinagar Branch</p>
                        <p className=" my-1 font-medium print:font-normal">Green City Edge, 89, Kakrail ,Dhaka-1000</p>
                        <p className=" my-1 font-medium print:font-normal">Phone: 8355179</p>
                        <p className=" font-medium print:font-normal">Fax: 8355649</p>
                    </div>
                </div>
                <div className=" w-1/3 print:text-[12px]">
                    <p className=" font-semibold text-center text-xl print:text-lg mb-10 print:mb-5">STATEMENT OF ACCOUNT</p>
                    <div className=" flex justify-between">
                        <span className=" font-medium print:font-normal">Account opening date:</span>
                        <span className=" font-medium print:font-normal">04/08/2004</span>
                    </div>
                    <p className=" font-medium print:font-normal my-1">maturity date:</p>
                    <p className=" my-1 font-medium print:font-normal">Currency code: TK</p>
                    <p className=" font-medium print:font-normal">Interest/Profite Rate</p>
                </div>
            </div>

            {/* topbar end */}

            {/* mid start */}

            <div className=" w-full flex justify-between items-end print:text-[12px]">
                <div className=" w-2/3">
                    <p className=" font-medium print:font-normal my-1">SAVING ACCOUNT</p>
                    <p className=" font-medium print:font-normal my-1">MOHD MoMINUR RAHMAN</p>
                    <p className=" font-medium print:font-normal">33/1 SARAT GUPTA ROAD NARINDA DHAKA</p>
                </div>
                <div className=" w-1/3">
                    <p className=" font-medium print:font-normal">Status: OPERATIVE</p>
                </div>
            </div>

            <div className=" mt-5 print:text-[12px]">
                <p className=" leading-7 print:leading-[22px]">Account No: 0009-031007098</p>
                <p className=" leading-7 print:leading-[22px]">Statement Date: 01/10/2021 to 31/03/2022</p>
            </div>
            {/* mid end */}

            {/* info start */}

            <div className=" w-full mt-10 print:mt-5">
                <table className=" w-full">
                    <thead className=''>
                        <tr className=" border border-dashed">
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1 text-left">Date</th>
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1">Value Date</th>
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1">Particular</th>
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1">Withdrawal(Dr)</th>
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1">Deposit(Cr)</th>
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1">Balance</th>
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1">Branch</th>
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1 text-right">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            randomArray.map((item, index) => {
                                return (
                                    <tr className="">
                                        <td className=" text-sm print:text-[10px] px-1">01/10/2021</td>
                                        <td className=" text-center text-sm print:text-[12px] px-1">01/10/2021</td>
                                        <td className=" text-center text-sm print:text-[12px] px-1">Opening Balance</td>
                                        <td className=" text-center text-sm print:text-[12px] px-1">0.00</td>
                                        <td className=" text-center text-sm print:text-[12px] px-1">0.00</td>
                                        <td className=" text-center text-sm print:text-[12px] px-1">20000.00 CR</td>
                                        <td className=" text-center text-sm print:text-[12px] px-1">0122</td>
                                        <td className=" text-right text-sm print:text-[12px] px-1">12:00</td>
                                    </tr>
                                )
                            })
                        }

                        <tr>
                            <td className=" pt-2"></td>
                            <td></td>
                            <td > <hr /> </td>
                            <td > <hr /> </td>
                            <td > <hr /> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className=" text-sm p-2"></td>
                            <td className=" text-center text-sm p-2"></td>
                            <td className=" text-center text-sm p-2">Total</td>
                            <td className=" text-center text-sm p-2">5000000000</td>
                            <td className=" text-center text-sm p-2">567878900</td>
                            <td className=" text-center text-sm p-2"></td>
                            <td className=" text-center text-sm p-2"></td>
                            <td className=" text-right text-sm p-2"></td>
                        </tr>
                    </tbody>
                </table>
                <p className=' font-medium text-center print:text-[10px] mt-2'>This is a computer generated statement and does not require any signature</p>
            </div>

            {/* info end */}
        </div>
    )
}

export default JamunaBankOne