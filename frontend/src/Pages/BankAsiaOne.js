import React from 'react'

function BankAsiaOne() {
    return (
        <div className=' w-full min-h-screen bg-gray-100 p-5 '>
            <div className=' w-full border-t border-black'>
                {/* top section start */}
                <div className=' w-full p-1 border-x border-black'>
                    <div className=' w-full flex justify-between'>
                        <div className=' w-[33%]'>
                            <p>logo</p>
                        </div>
                        <div className=' w-[33%]'>
                            <p>Any Branch</p>
                        </div>
                        <div className=' w-[33%] text-center'>
                            <p className=' uppercase font-semibold text-lg'>station road branch</p>
                            <p className=' uppercase text-sm'>mohiddin market <span className=' capitalize'>(1st floor)</span></p>
                            <p className=' uppercase text-sm'>170, station road</p>
                            <p className=' uppercase text-sm'>chitagong</p>
                            <p className=' uppercase text-sm'>bangladesh</p>
                            <p className='text-[12px]'>Phone : 092348755298437 Fax : 0258420935509</p>
                        </div>
                    </div>
                    <div className=' w-full flex justify-between mt-5'>
                        <p className=' font-medium'>Statement oof Account for the Period: 01/10/2021 to 10/05/2022</p>
                        <p className=' font-medium'>Date : 10/05/2022</p>
                    </div>
                </div>

                <div className=' w-full flex justify-between p-1 pb-10 border-x border-black'>
                    <div className=' w-2/3'>
                        <div className=' my-1'>
                            <span className=' inline-block w-32'>Customer Name</span>
                            <span className=' mx-2 font-semibold'>:</span>
                            <span className=' uppercase font-semibold'>mohammad jahirul islam</span>
                        </div>

                        <div>
                            <span className=' inline-block w-32'>Address</span>
                            <span className=' mx-2 font-semibold'>:</span>
                            <span className=' capitalize'>house-27, road-6,block-b banasree,rampura,dhaka</span>
                        </div>
                    </div>
                    <div className=' w-1/3'>
                        <div className=' my-1 flex'>
                            <span className=' inline-block w-32'>Account Type</span>
                            <span className=' mx-2 font-semibold'>:</span>
                            <p className=' uppercase'> C01 - Current Deposit Account</p>
                        </div>
                        <div className=' my-1'>
                            <span className=' inline-block w-32'>A/c No</span>
                            <span className=' mx-2 font-semibold'>:</span>
                            <span className=' uppercase'>0309875366539</span>
                        </div>
                        <div>
                            <span className=' inline-block w-32'>Cust. ID</span>
                            <span className=' mx-2 font-semibold'>:</span>
                            <span className=' uppercase'>0178943275</span>
                        </div>
                        <div>
                            <span className=' inline-block w-32'>Currency</span>
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
                            <td className=' font-medium border border-gray-600 p-2 text-center'>SL#</td>
                            <td className=' font-medium border border-gray-600 p-2 text-center'>Date</td>
                            <td className=' font-medium border border-gray-600 p-2 text-center'>Trands. Code / Chq No</td>
                            <td className=' font-medium border border-gray-600 p-2 text-center'>Debit Amount</td>
                            <td className=' font-medium border border-gray-600 p-2 text-center'>Credit Amount</td>
                            <td className=' font-medium border border-gray-600 p-2 text-center'>Balance Amount</td>
                            <td className=' font-medium border border-gray-600 p-2 text-center'>Remarks</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>
                        <tr>
                            <td className=' border border-gray-600 p-2 text-center'>1</td>
                            <td className=' border border-gray-600 p-2 text-center'>03/10/2021</td>
                            <td className=' border border-gray-600 p-2'>GE LID 2LC002447</td>
                            <td className=' border border-gray-600 p-2 text-right'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-gray-600 p-2 text-right'>5244.08</td>
                            <td className=' border border-gray-600 p-2 text-left'>Margin For the Lc : 2099024375</td>
                        </tr>


                        <tr>
                            <td className=' border border-r-0 border-gray-600 p-2'></td>
                            <td className=' border border-x-0 border-gray-600 p-2'></td>
                            <td className=' border border-l-0 border-gray-600 p-2'>Total Debit/Credit : --> </td>
                            <td className=' border border-gray-600 p-2 uppercase'>2,93,487</td>
                            <td className=' border border-gray-600 p-2 text-right'>456794.00</td>
                            <td className=' border border-r-0 border-gray-600 p-2 text-right'></td>
                            <td className=' border border-gray-600 border-l-0 p-2 text-right'></td>
                        </tr>
                    </tbody>
                </table>

                {/* table end */}

            </div>
        </div>
    )
}

export default BankAsiaOne