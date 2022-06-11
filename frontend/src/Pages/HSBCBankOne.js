import React from 'react'
import logo from "../Photos/HSBC.svg.png"

function HSBCBankOne() {
    return (
        <div className=' w-full min-h-screen p-10 print:p-5'>
            <div className=' flex justify-between'>
                <div className=' w-1/2'>
                    <img src={logo} alt="" className='w-52' />
                </div>
                <div className=' print:text-sm mr-20'>
                    <p className=' text-lg font-medium'>HSBC<span className=' font-semibold'>Select</span></p>
                    <p className=' text-sm my-1'>T- 88 096234567</p>
                    <p className=' text-sm my-1'>www.hsbc.com.bd</p>
                </div>
            </div>
            <p className=' uppercase'>md rezaur rahman &/or maksuda reza</p>
            <p className=' uppercase'>110,111 noyatola, moghbazar</p>
            <p className=' uppercase'>dhaka, bangladesh</p>
            <p className=' my-3 capitalize'>may 26,2022</p>
            <p className=' my-3 capitalize'>dear sir</p>
            <span className=' my- underline text-lg font-semibold'>Bank certificate</span>

            <div className=' mt-5'>
                <p >This is to certify that you are our valued Select Customer of HSBC Bangladesh (HSBC Select is a local Service Proposition which is designed for High Ner-Worth Individulals). You have been maintaining a Local Currency Saving Account with us. The details of your banking Relationship are as follow:</p>
            </div>

            <div className=' mt-5'>
                <table className=' w-full'>
                    <thead>
                        <tr className=''>
                            <td className=' font-medium p-2 print:py-0 print:px-1 border text-center'>Account Number</td>
                            <td className=' font-medium p-2 print:py-0 print:px-1 border text-center'>Type of Account</td>
                            <td className=' font-medium p-2 print:py-0 print:px-1 border text-center'>Account Name</td>
                            <td className=' font-medium p-2 print:py-0 print:px-1 border text-center'>Date of Account Opening</td>
                            <td className=' font-medium p-2 print:py-0 print:px-1 border text-center'>Balance as of 25 May, 2022 BDT.</td>
                            <td className=' font-medium p-2 print:py-0 print:px-1 border text-center'>Balance as of 25 May, 2022 USD.</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=' border p-2 print:py-0 print:px-1'>110100445399</td>
                            <td className=' border p-2 print:py-0 print:px-1 text-center'>Saving</td>
                            <td className=' border p-2 print:py-0 print:px-1 text-center'>MOHD. MOMINUR RAHMAN</td>
                            <td className=' border p-2 print:py-0 print:px-1 text-center'>04/08/2004</td>
                            <td className=' border p-2 print:py-0 print:px-1 text-center'>494421.52</td>
                            <td className=' border p-2 print:py-0 print:px-1 text-center'>5244.08</td>
                        </tr>
                    </tbody>
                </table>

                <p className=' ml-20 text-sm'>(Conversion rate USD1 = BDT87, date ib 26.05.2022)</p>
                <p>This certificate has been issued upon request from you without any obligation on the part of this Bank and/or any of its officials and/or informants.</p>

                <p className=' my-10'>Best regards</p>

                <div className=''>
                    <div className=''>
                        <hr className=' w-40 h-[2px] bg-gray-500 inline-block'></hr>
                        <p className=' font-semibold'>Sarowar H Hossain</p>
                        <p className=' print:leading-5 text-sm'>Relationship Manager, HSBC Select,</p>
                        <p className=' print:leading-5 text-sm'>Retail Banking & Wealth Management,</p>
                        <p className=' print:leading-5 text-sm'>The Hong Kong and Shanghi Banking Corporation Limited</p>
                        <p className=' print:leading-5 text-sm'>Motijheel Branch, Al - Haj Tower,Plot- 82,</p>
                        <p className=' print:leading-5 text-sm'>Motijheel, Dhaka 1000 Bangladesh</p>
                        <p className=' print:leading-5 text-sm'>Phone. 01723456789</p>
                        <p className=' print:leading-5 text-sm'>Phone. 017123456789</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HSBCBankOne