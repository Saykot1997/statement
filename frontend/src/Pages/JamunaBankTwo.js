import React, { useState } from 'react'

function JamunaBankTwo() {

    const [randomArray, setRandomArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);

    return (
        <div className=' w-full min-h-screen bg-gray-100 p-5 print:p-0'>
            <div className=' flex justify-between'>
                <p className=' font-semibold text-lg print:text-sm'>Jamuna Bank Ltd</p>
                <p className=' font-semibold text-xl print:text-sm '>STATEMENT OF ACCOUNT</p>
                <p className=' font-semibold text-3xl print:text-xl text-gray-600 '>JAMUNABANK</p>
            </div>

            {/* top section start */}
            <div className=' flex justify-between mt-5 print:mt-2'>
                <div className='w-[49.5%]'>
                    <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px]'>
                        <div className='w-1/2 flex justify-between mr-2'>
                            <p className='uppercase font-semibold print:font-medium print:text-[12px]'>Branch name</p>
                            <span>:</span>
                        </div>
                        <p className=' w-1/2 uppercase  print:text-[12px]'>shantinagar branch</p>
                    </div>
                    <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px] print:text-[12px]'>
                        <div className=' w-1/2 flex justify-between mr-2'>
                            <p className='uppercase font-semibold print:font-medium print:text-[12px]'>Branch Address</p>
                            <span>:</span>
                        </div>
                        <p className=' w-1/2 uppercase print:text-[12px]'>green city edge holding no.89, kakpail, ward no.19 p.s:ramna dhake south city corporation dhaka</p>
                    </div>
                    <div className=' py-2'>
                        <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px] print:text-[12px]'>
                            <div className=' w-1/2 flex justify-between mr-2'>
                                <p className='uppercase print:text-[12px] font-semibold print:font-medium '>Account no</p>
                                <span>:</span>
                            </div>
                            <p className=' w-1/2 uppercase print:text-[12px]'>098249032890328523</p>
                        </div>
                        <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px] print:text-[12px]'>
                            <div className=' w-1/2 flex justify-between mr-2'>
                                <p className='uppercase print:text-[12px] font-semibold print:font-medium'>Ucic id</p>
                                <span>:</span>
                            </div>
                            <p className=' w-1/2 uppercase print:text-[12px]'>098249032890328523</p>
                        </div>
                        <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px] print:text-[12px]'>
                            <div className=' w-1/2 flex justify-between mr-2'>
                                <p className='uppercase print:text-[12px] font-semibold print:font-medium'>Account type</p>
                                <span>:</span>
                            </div>
                            <p className=' w-1/2 capitalize'>saving account</p>
                        </div>
                        <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px] print:text-[12px]'>
                            <div className=' w-1/2 flex justify-between mr-2'>
                                <p className='uppercase print:text-[12px] font-semibold print:font-medium'>name</p>
                                <span>:</span>
                            </div>
                            <p className=' w-1/2 uppercase print:text-[12px]'>mohd. mominur rahman</p>
                        </div>
                        <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px] print:text-[12px]'>
                            <div className=' w-1/2 flex justify-between mr-2'>
                                <p className='uppercase print:text-[12px] font-semibold'>address</p>
                                <span>:</span>
                            </div>
                            <p className=' w-1/2 uppercase print:text-[12px]'>33/1 sarat gupta road, narinda dhaka kotwali</p>
                        </div>
                    </div>
                    <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px] print:text-[12px]'>
                        <div className=' w-1/2 flex justify-between mr-2'>
                            <p className='uppercase print:text-[12px] font-semibold'>post code</p>
                            <span>:</span>
                        </div>
                        <p className=' w-1/2 uppercase print:text-[12px]'>1260</p>
                    </div>
                    <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px] print:text-[12px]'>
                        <div className=' w-1/2 flex justify-between mr-2'>
                            <p className='uppercase print:text-[12px] font-semibold'>city</p>
                            <span>:</span>
                        </div>
                        <p className=' w-1/2 uppercase print:text-[12px]'>narinda</p>
                    </div>
                    <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px] print:text-[12px]'>
                        <div className=' w-1/2 flex justify-between mr-2'>
                            <p className='uppercase print:text-[12px] font-semibold'>state</p>
                            <span>:</span>
                        </div>
                        <p className=' w-1/2 uppercase print:text-[12px]'>dhaka</p>
                    </div>
                    <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px] print:text-[12px]'>
                        <div className=' w-1/2 flex justify-between mr-2'>
                            <p className='uppercase print:text-[12px] font-semibold'>email id</p>
                            <span>:</span>
                        </div>
                        <p className=' w-1/2 uppercase print:text-[12px]'></p>
                    </div>
                    <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px] print:text-[12px]'>
                        <div className=' w-1/2 flex justify-between mr-2'>
                            <p className='uppercase print:text-[12px] font-semibold'>phone number</p>
                            <span>:</span>
                        </div>
                        <p className=' w-1/2 uppercase print:text-[12px]'>9023487525</p>
                    </div>
                </div>
                <div className='w-[49.5%]'>
                    <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px]'>
                        <div className='w-1/2 flex justify-between mr-2'>
                            <p className='uppercase font-semibold print:text-[12px]'>routing number/micr</p>
                            <span>:</span>
                        </div>
                        <p className=' w-1/2 uppercase print:text-[12px]'>908789432789</p>
                    </div>

                    <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px]'>
                        <div className='w-1/2 flex justify-between mr-2'>
                            <p className='uppercase font-semibold print:text-[12px]'>statement from</p>
                            <span>:</span>
                        </div>
                        <p className=' w-1/2 uppercase print:text-[12px]'>01-April-2022 <span className=' font-semibold print:text-[12px] print:font-medium'>TO</span> 22-May-2022</p>
                    </div>
                    <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px]'>
                        <div className='w-1/2 flex justify-between mr-2'>
                            <p className='uppercase font-semibold print:text-[12px]'>maturity date</p>
                            <span>:</span>
                        </div>
                        <p className=' w-1/2 print:text-[12px]'>01-April-2022 <span className=' font-semibold print:text-[12px]'>To</span> 22-May-2022</p>
                    </div>
                    <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px]'>
                        <div className='w-1/2 flex justify-between mr-2'>
                            <p className='uppercase font-semibold print:text-[12px]'>account status</p>
                            <span>:</span>
                        </div>
                        <p className=' w-1/2 uppercase print:text-[12px]'>Active</p>
                    </div>
                    <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px]'>
                        <div className='w-1/2 flex justify-between mr-2'>
                            <p className='uppercase font-semibold print:text-[12px]'>Limit amount</p>
                            <span>:</span>
                        </div>
                        <p className=' w-1/2 uppercase print:text-[12px]'>0.00</p>
                    </div>
                    <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px]'>
                        <div className='w-1/2 flex justify-between mr-2'>
                            <p className='uppercase font-semibold print:text-[12px]'>currancy</p>
                            <span>:</span>
                        </div>
                        <p className=' w-1/2 uppercase print:text-[12px]'>BDT</p>
                    </div>
                    <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px]'>
                        <div className='w-1/2 flex justify-between mr-2'>
                            <p className='uppercase font-semibold print:text-[12px]'>statement of generation</p>
                            <span>:</span>
                        </div>
                        <p className=' w-1/2 print:text-[12px]'>22-May-2022</p>
                    </div>
                    <div className=' py-1'>
                        <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px]'>
                            <div className='w-1/2 flex justify-between mr-2'>
                                <p className='uppercase font-semibold print:text-[12px]'>interest/profit rate %</p>
                                <span>:</span>
                            </div>
                            <p className=' w-1/2 print:text-[12px]'>2.00</p>
                        </div>
                        <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px]'>
                            <div className='w-1/2 flex justify-between mr-2'>
                                <p className='uppercase font-semibold print:text-[12px]'>recept no.</p>
                                <span>:</span>
                            </div>
                            <p className=' w-1/2 print:text-[12px]'></p>
                        </div>
                        <div className=' w-full flex justify-between py-1 print:py-0 print:leading-[18px]'>
                            <div className='w-1/2 flex justify-between mr-2'>
                                <p className='uppercase font-semibold print:text-[12px]'>expary date</p>
                                <span>:</span>
                            </div>
                            <p className=' w-1/2 print:text-[12px]'></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* top section end */}
            {/* mid section start */}
            <div className=' w-full mt-5'>
                <div className=' flex w-full'>
                    <div className='flex w-[20%] items-center border px-1 border-r-0 font-semibold print:text-[12px]'>
                        <p>Statement Summary:</p>
                    </div>
                    <table className=' w-[80%] print:text-[11px]'>
                        <thead>
                            <tr>
                                <th className=' font-medium  border'>Opening Banance</th>
                                <th className=' font-medium border'>Total Dabits</th>
                                <th className=' font-medium border'>Total Credits</th>
                                <th className=' font-medium border'>Closing Blance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className=' text-center border p-1'>2138475.08</td>
                                <td className=' text-center border p-1'>2138475.08</td>
                                <td className=' text-center border p-1'>23438475.08</td>
                                <td className=' text-center border p-1'>32538475.08</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* mid section end */}

            {/* table section start */}

            <div className=' w-full mt-5'>
                <table className=' w-full'>
                    <thead>
                        <tr className='print:text-[12px]'>
                            <td className=' font-medium border p-2 print:p-1 text-center'>Trans Date</td>
                            <td className=' font-medium border p-2 print:p-1 text-center'>Value Date</td>
                            <td className=' font-medium border p-2 print:p-1 text-center'>Particulars</td>
                            <td className=' font-medium border p-2 print:p-1 text-center'>Ref/Cheque No</td>
                            <td className=' font-medium border p-2 print:p-1 text-center'>Debit</td>
                            <td className=' font-medium border p-2 print:p-1 text-center'>Credit</td>
                            <td className=' font-medium border p-2 print:p-1 text-center'>Balance</td>
                            <td className=' font-medium border p-2 print:p-1 text-center'>Tran Branch</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=' print:text-[10px]'>
                            <td className=' border p-2 print:p-1 text-center'></td>
                            <td className=' border p-2 print:p-1'></td>
                            <td className=' border p-2 print:p-1 font-medium'>Opening Balance</td>
                            <td className=' border p-2 print:p-1'></td>
                            <td className=' border p-2 print:p-1 text-right'></td>
                            <td className=' border p-2 print:p-1 text-right'></td>
                            <td className=' border p-2 print:p-1 text-right'>2390856</td>
                            <td className=' border p-2 print:p-1 text-center'></td>
                        </tr>
                        {
                            randomArray.map((item, index) => {
                                return (
                                    <tr className=' print:text-[10px]'>
                                        <td className=' border p-2 print:p-1 text-center'>13/04/22 16:09</td>
                                        <td className=' border p-2 print:p-1'>13/04/22 16:09</td>
                                        <td className=' border p-2 print:p-1'>CW-Halkhul ATM-001287934678423898743</td>
                                        <td className=' border p-2 print:p-1'></td>
                                        <td className=' border p-2 print:p-1 text-right'>10,00000</td>
                                        <td className=' border p-2 print:p-1 text-right'>982347</td>
                                        <td className=' border p-2 print:p-1 text-right'>2390856</td>
                                        <td className=' border p-2 print:p-1 text-center'>1978344</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <p className=' font-medium text-center print:text-[10px] mt-2'>This is a computer generated statement and does not require any signature</p>

                {/* table section end */}

            </div>
        </div>
    )
}

export default JamunaBankTwo