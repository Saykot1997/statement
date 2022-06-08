import React from 'react'

function FormateOne() {
    return (
        <div className=" w-full min-h-screen bg-gray-100 p-5">

            {/* topbar start */}

            <div className=" w-full flex justify-between px-20">
                <div className=" w-3/4 ">
                    <p className=" font-semibold text-lg">Jamuna Bank Lid</p>
                    <p className=" font-semibold my-1">Shantinagar Branch</p>
                    <p className=" my-1 font-medium">Green City Edge, 89, Kakrail ,Dhaka-1000</p>
                    <p className=" my-1 font-medium">Phone: 8355179</p>
                    <p className=" font-medium">Fax: 8355649</p>
                </div>
                <div className=" w-1/4">
                    <p className=" font-semibold text-right text-xl mb-10">STATEMENT OF ACCOUNT</p>
                    <div className=" flex justify-between">
                        <span className=" font-medium">Account opening date:</span>
                        <span className=" font-medium">04/08/2004</span>
                    </div>
                    <p className=" font-medium my-1">maturity date:</p>
                    <p className=" my-1 font-medium">Currency code: TK</p>
                    <p className=" font-medium">Interest/Profite Rate</p>
                </div>
            </div>

            {/* topbar end */}

            {/* mid start */}

            <div className=" w-full flex justify-between items-end">
                <div className=" w-3/4">
                    <p className=" font-medium my-1">SAVING ACCOUNT</p>
                    <p className=" font-medium my-1">MOHD MoMINUR RAHMAN</p>
                    <p className=" font-medium">33/1 SARAT GUPTA ROAD NARINDA DHAKA</p>
                </div>
                <div className=" w-1/4">
                    <p className=" font-medium">Status: OPERATIVE</p>
                </div>
            </div>

            <div className=" mt-5">
                <p className=" leading-7">Account No: 0009-031007098</p>
                <p className=" leading-7">Statement Date: 01/10/2021 to 31/03/2022</p>
            </div>
            {/* mid end */}

            {/* info start */}

            <div className=" w-full mt-10">
                <table className=" w-full">
                    <thead>
                        <tr className="p-3">
                            <th className=" font-medium text-left">Date</th>
                            <th className=" font-medium p-3">Value Date</th>
                            <th className=" font-medium p-3">Particular</th>
                            <th className=" font-medium p-3">Withdrawal(Dr)</th>
                            <th className=" font-medium p-3">Deposit(Cr)</th>
                            <th className=" font-medium p-3">Balance</th>
                            <th className=" font-medium p-3">Branch</th>
                            <th className=" font-medium text-right">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
                        <tr className="">
                            <td className=" text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">01/10/2021</td>
                            <td className=" text-center text-sm p-2">Opening Balance</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">0.00</td>
                            <td className=" text-center text-sm p-2">20000.00 CR</td>
                            <td className=" text-center text-sm p-2">Shantinagar Branch</td>
                            <td className=" text-right text-sm p-2">12:00</td>
                        </tr>
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
                        <hr className=" my-5" />
                    </tbody>
                </table>
                <p></p>
            </div>

            {/* info end */}
        </div>
    )
}

export default FormateOne