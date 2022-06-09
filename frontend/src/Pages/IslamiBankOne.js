import React from 'react'

function IslamiBankOne() {
    return (
        <div className=' w-full min-h-screen bg-gray-100 p-5'>

            {/* header section stert */}
            <div className='w-full grid grid-cols-3'>
                <div></div>
                <div className='text-center'>
                    <p className=' text-2xl font-semibold'>Social Islami Bank Ltd.</p>
                    <p className=' font-medium'>Garib-E-Newaz Avenue Branch</p>
                    <p className=' font-medium'>50,Garib-E-newaz Avenue,Sector-13,Uttara</p>
                </div>
                <div className=''>
                    <p className=' text-sm font-medium'>Print Date : 29/05/2022</p>
                    <p className=' text-sm font-medium'>Report Generated User:</p>
                </div>
            </div>
            <div className=' flex justify-center mt-5 mb-10'>
                <span className=' underline font-semibold text-lg'>A/C Statement</span>
            </div>

            {/* header section end */}

            <div className=' w-full flex'>
                <div className=' w-1/2'>
                    <div className=' my-1'>
                        <span className=' inline-block w-24 font-semibold'>A/C No</span>
                        <span className=' mx-2 font-semibold'>:</span>
                        <span className=' uppercase'>09328587234928</span>
                    </div>
                    <div className=' my-1'>
                        <span className=' inline-block w-24 font-semibold'>A/C Name</span>
                        <span className=' mx-2 font-semibold'>:</span>
                        <span className=' uppercase'>A.K.M RAJIB HASAN</span>
                    </div>
                    <div>
                        <span className=' inline-block w-24 font-semibold'>Address</span>
                        <span className=' mx-2 font-semibold'>:</span>
                        <span className=' uppercase'>house-27, road-6,block-b banasree,rampura,dhaka</span>
                    </div>
                </div>
                <div className=' w-1/2'>
                    <div className=' my-1 flex'>
                        <span className=' inline-block w-32 text-right font-semibold'>Date From</span>
                        <span className=' mx-2 font-semibold'>:</span>
                        <p className=' font-semibold'> <span>01/11/2021</span> To <span>29/05/2022</span></p>
                    </div>
                    <div className=' my-1 flex'>
                        <span className=' inline-block w-32 text-right font-semibold'>Type of Account</span>
                        <span className=' mx-2 font-semibold'>:</span>
                        <p className=' uppercase'> Mudaraba Saving Deposit-Client</p>
                    </div>
                    <div className=' my-1'>
                        <span className=' inline-block w-32 text-right font-semibold'>Opening Date</span>
                        <span className=' mx-2 font-semibold'>:</span>
                        <span className=' uppercase'>05/06/2017</span>
                    </div>
                    <div className=' my-1'>
                        <span className=' inline-block w-32 text-right font-semibold'>Last Tr.Date</span>
                        <span className=' mx-2 font-semibold'>:</span>
                        <span className=' uppercase'>05/06/2022</span>
                    </div>
                    <div className=' my-1'>
                        <span className=' inline-block w-32 text-right font-semibold'>Phone</span>
                        <span className=' mx-2 font-semibold'>:</span>
                        <span className=' uppercase'>01965789909876</span>
                    </div>
                    <div className=' my-1'>
                        <span className=' inline-block w-32 text-right font-semibold'>Account Status</span>
                        <span className=' mx-2 font-semibold'>:</span>
                        <span className=' uppercase'>Active</span>
                    </div>
                </div>
            </div>

            {/* header section end */}

            <table className=' w-full mt-10'>
                <thead>
                    <tr className='border'>
                        <td className=' font-medium p-2'>Date</td>
                        <td className=' font-medium p-2'>Code</td>
                        <td className=' font-medium p-2'>Cheque / Instr.</td>
                        <td className=' font-medium p-2'>Particulars</td>
                        <td className=' font-medium p-2 text-right'>Debit</td>
                        <td className=' font-medium p-2 text-right'>Credit</td>
                        <td className=' font-medium p-2 text-right'>Balance</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className=' border p-2'>01/11/2021</td>
                        <td className=' border p-2'>204</td>
                        <td className=' border p-2'>V-</td>
                        <td className=' border p-2 uppercase'>atm transaction from terminal code atm01761 <span className=' capitalize'>on Date 01-Nov-21</span></td>
                        <td className=' border p-2 text-right'>494.00</td>
                        <td className=' border p-2 text-right'>5244.08</td>
                        <td className=' border p-2 text-right'>982347</td>
                    </tr>
                    <tr>
                        <td className=' border p-2'>01/11/2021</td>
                        <td className=' border p-2'>204</td>
                        <td className=' border p-2'>V-</td>
                        <td className=' border p-2 uppercase'>atm transaction from terminal code atm01761 <span className=' capitalize'>on Date 01-Nov-21</span></td>
                        <td className=' border p-2 text-right'>494.00</td>
                        <td className=' border p-2 text-right'>5244.08</td>
                        <td className=' border p-2 text-right'>982347</td>
                    </tr>
                    <tr>
                        <td className=' border p-2'>01/11/2021</td>
                        <td className=' border p-2'>204</td>
                        <td className=' border p-2'>V-</td>
                        <td className=' border p-2 uppercase'>atm transaction from terminal code atm01761 <span className=' capitalize'>on Date 01-Nov-21</span></td>
                        <td className=' border p-2 text-right'>494.00</td>
                        <td className=' border p-2 text-right'>5244.08</td>
                        <td className=' border p-2 text-right'>982347</td>
                    </tr>
                    <tr>
                        <td className=' border p-2'>01/11/2021</td>
                        <td className=' border p-2'>204</td>
                        <td className=' border p-2'>V-</td>
                        <td className=' border p-2 uppercase'>atm transaction from terminal code atm01761 <span className=' capitalize'>on Date 01-Nov-21</span></td>
                        <td className=' border p-2 text-right'>494.00</td>
                        <td className=' border p-2 text-right'>5244.08</td>
                        <td className=' border p-2 text-right'>982347</td>
                    </tr>
                    <tr>
                        <td className=' border p-2'>01/11/2021</td>
                        <td className=' border p-2'>204</td>
                        <td className=' border p-2'>V-</td>
                        <td className=' border p-2 uppercase'>atm transaction from terminal code atm01761 <span className=' capitalize'>on Date 01-Nov-21</span></td>
                        <td className=' border p-2 text-right'>494.00</td>
                        <td className=' border p-2 text-right'>5244.08</td>
                        <td className=' border p-2 text-right'>982347</td>
                    </tr>
                    <tr>
                        <td className=' border p-2'>01/11/2021</td>
                        <td className=' border p-2'>204</td>
                        <td className=' border p-2'>V-</td>
                        <td className=' border p-2 uppercase'>atm transaction from terminal code atm01761 <span className=' capitalize'>on Date 01-Nov-21</span></td>
                        <td className=' border p-2 text-right'>494.00</td>
                        <td className=' border p-2 text-right'>5244.08</td>
                        <td className=' border p-2 text-right'>982347</td>
                    </tr>
                    <tr>
                        <td className=' border p-2'>01/11/2021</td>
                        <td className=' border p-2'>204</td>
                        <td className=' border p-2'>V-</td>
                        <td className=' border p-2 uppercase'>atm transaction from terminal code atm01761 <span className=' capitalize'>on Date 01-Nov-21</span></td>
                        <td className=' border p-2 text-right'>494.00</td>
                        <td className=' border p-2 text-right'>5244.08</td>
                        <td className=' border p-2 text-right'>982347</td>
                    </tr>
                    <tr>
                        <td className=' border p-2'>01/11/2021</td>
                        <td className=' border p-2'>204</td>
                        <td className=' border p-2'>V-</td>
                        <td className=' border p-2 uppercase'>atm transaction from terminal code atm01761 <span className=' capitalize'>on Date 01-Nov-21</span></td>
                        <td className=' border p-2 text-right'>494.00</td>
                        <td className=' border p-2 text-right'>5244.08</td>
                        <td className=' border p-2 text-right'>982347</td>
                    </tr>
                    <tr>
                        <td className=' border p-2'>01/11/2021</td>
                        <td className=' border p-2'>204</td>
                        <td className=' border p-2'>V-</td>
                        <td className=' border p-2 uppercase'>atm transaction from terminal code atm01761 <span className=' capitalize'>on Date 01-Nov-21</span></td>
                        <td className=' border p-2 text-right'>494.00</td>
                        <td className=' border p-2 text-right'>5244.08</td>
                        <td className=' border p-2 text-right'>982347</td>
                    </tr>
                    <tr>
                        <td className=' border p-2'>01/11/2021</td>
                        <td className=' border p-2'>204</td>
                        <td className=' border p-2'>V-</td>
                        <td className=' border p-2 uppercase'>atm transaction from terminal code atm01761 <span className=' capitalize'>on Date 01-Nov-21</span></td>
                        <td className=' border p-2 text-right'>494.00</td>
                        <td className=' border p-2 text-right'>5244.08</td>
                        <td className=' border p-2 text-right'>982347</td>
                    </tr>
                    <tr>
                        <td className=' border p-2'>01/11/2021</td>
                        <td className=' border p-2'>204</td>
                        <td className=' border p-2'>V-</td>
                        <td className=' border p-2 uppercase'>atm transaction from terminal code atm01761 <span className=' capitalize'>on Date 01-Nov-21</span></td>
                        <td className=' border p-2 text-right'>494.00</td>
                        <td className=' border p-2 text-right'>5244.08</td>
                        <td className=' border p-2 text-right'>982347</td>
                    </tr>
                    <tr>
                        <td className=' border p-2'>01/11/2021</td>
                        <td className=' border p-2'>204</td>
                        <td className=' border p-2'>V-</td>
                        <td className=' border p-2 uppercase'>atm transaction from terminal code atm01761 <span className=' capitalize'>on Date 01-Nov-21</span></td>
                        <td className=' border p-2 text-right'>494.00</td>
                        <td className=' border p-2 text-right'>5244.08</td>
                        <td className=' border p-2 text-right'>982347</td>
                    </tr>
                    <tr>
                        <td className=' border p-2'>01/11/2021</td>
                        <td className=' border p-2'>204</td>
                        <td className=' border p-2'>V-</td>
                        <td className=' border p-2 uppercase'>atm transaction from terminal code atm01761 <span className=' capitalize'>on Date 01-Nov-21</span></td>
                        <td className=' border p-2 text-right'>494.00</td>
                        <td className=' border p-2 text-right'>5244.08</td>
                        <td className=' border p-2 text-right'>982347</td>
                    </tr>
                    <tr>
                        <td className=" text-sm p-2"></td>
                        <td className=" text-center text-sm p-2"></td>
                        <td className=" text-center text-sm p-2"></td>
                        <td className=" text-right p-2 font-semibold">Total : </td>
                        <td className=" text-right p-2 font-semibold">
                            <div className=' w-full p-1'>
                                <p className=' border-y border-black'>567878900</p>
                            </div>
                        </td>
                        <td className=" text-right font-semibold p-2">
                            <div className=' w-full p-1'>
                                <p className=' border-y border-black'>567878900</p>
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