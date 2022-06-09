import React from 'react'

function NCCBankOne() {
    return (
        <div className=' w-full min-h-screen bg-gray-100 p-5'>
            {/* header start */}
            <div className=' w-full flex '>
                <div className=' w-1/2 flex'>
                    <div>
                        <p>NCC Bank Logo</p>
                    </div>
                    <div className=' ml-3'>
                        <p className=' text-xl'>NCC Bank Limited</p>
                        <p className=' text-lg'>Banani Branch</p>
                        <p className='mt-5'>Account Opening Branch : Banani Branch</p>
                        <p className='my-1'>Tower-52,House-52,RD#11,Blok-c,Banani</p>
                        <p className='my-1'>Phone: 1234567778</p>
                        <p className='my-1'>Fax: 12345678345</p>
                    </div>
                </div>
                <div className=' w-1/2'>
                    <p className=' font-semibold text-xl uppercase'>statement of account</p>
                    <div className=' w-full mt-10'>
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
            <div className=' w-full flex mt-10 items-center'>
                <div className=' w-1/2'>
                    <p className=' my-1'>Savings Bank Deposits</p>
                    <p className=' my-1'>SK.NOWSHAD AHMED</p>
                    <p className=' my-1 uppercase'>41/15,B-1,ZIGATOLA,HAZI AFSARUDDIN LANE,dhanmondi,dhaka</p>
                    <p className=' my-1'>Account No: 002345678876</p>
                    <p className=' my-1'>Statement of Period: 01/Nov/2021 to 19/May/2022</p>
                </div>
                <div className=' w-1/2'>
                    <p>Status: OPERATIVE</p>
                </div>
            </div>
            {/* header end */}

            {/* table start */}

            <table className=' w-full mt-10'>
                <thead>
                    <tr className=''>
                        <td className=' font-medium p-2'>Date</td>
                        <td className=' font-medium p-2'>Value Date</td>
                        <td className=' font-medium p-2 '>Particulars</td>
                        <td className=' font-medium p-2 text-center'>Eithdrawal(Dr)</td>
                        <td className=' font-medium p-2 text-center'>Deposit(Cr)</td>
                        <td className=' font-medium p-2 text-center'>Balance</td>
                        <td className=' font-medium p-2 text-center'>Branch</td>
                        <td className=' font-medium p-2 text-right'>time</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                    <tr>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2'>01/11/2021</td>
                        <td className='p-2 uppercase'>opening balance</td>
                        <td className='p-2 text-center'>3000</td>
                        <td className='p-2 text-center'>494.00</td>
                        <td className='p-2 text-center'>5244.08</td>
                        <td className='p-2 text-center'>05</td>
                        <td className='p-2 text-right'>10.53</td>
                    </tr>
                </tbody>
            </table>
            <div className=' w-full flex justify-center p-5'>
                <div className=' border-t border-dashed'>

                </div>
            </div>

            {/* table end */}

        </div>
    )
}

export default NCCBankOne