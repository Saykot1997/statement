import commaNumber from 'comma-number';
import React, { useState } from 'react'
import SolvencyEditComponent from '../../Components/SolvencyEditComponent';
import logo from "../../Photos/ncc_bank/nccbank.jpg"
import signature2 from "../../Photos/ucb_bank/sig 2.png";
import signature1 from "../../Photos/ucb_bank/sif 1.png";

function NCCBankCertificate() {

    const [jblDate, setJblDate] = useState("May 19,2022");
    const [jblName, setJblName] = useState("NCCB/BANANI/CERTIFICATE/2022/139");
    const [editMode, setEditMode] = useState(false);
    const [accountHolderName, setAccountHolderName] = useState("SK. NOWSHAD AHMED");
    const [accountHolderAddress, setAccountHolderAddress] = useState("41/15, B-1, Zigatola, Hazi Afsarudin Lane, Dhanmondi, Dhaka, Bangladesh");
    const [accountNumber, setAccountNumber] = useState("0050-0310175432");
    const [accountBalance, setAccountBalance] = useState("51000");
    const [usdConversionRate, setUsdConversionRate] = useState("87.5");
    const [accountType, setAccountType] = useState("Savings");
    const [accountOpeningDate, setAccountOpeningDate] = useState("27/02/2013");
    const [leftManagerName, setLeftManegerName] = useState("Mohammad Mahabub Alam");
    const [leftManagerPost, setLeftManegerPost] = useState("SEO & GB Incharge");
    const [rightManagerName, setRightManegerName] = useState("K.M Khairul Islam");
    const [rightManagerPost, setRightManegerPost] = useState("FAVP & Manager Operations");
    const [branchName, setBranchName] = useState("Banani")
    const [footerAddress, setFooterAddress] = useState("Tower-52,House-52 (1st & 2nd Floor), Road-11, Block-C, Banani, Dhaka-1213, Bangladesh")



    const toggleEditMode = () => {
        setEditMode(!editMode);
    }


    return (

        <div className=' w-full min-h-screen p-5 print:p-0 font-nuosu'>
            <SolvencyEditComponent editMode={editMode} toggleEditMode={toggleEditMode} convertNumberToWord={"not require"} convertWord={false} />

            <div className=' flex justify-between items-center'>
                <div>
                    <div>
                        <img src={logo} alt="" className=' w-60' />
                    </div>
                </div>
                <div>
                    <p className=' uppercase font-semibold print:font-medium'>National credit and commerce bank limited</p>
                </div>
            </div>
            <div className=' px-[100px]'>
                <div>
                    {
                        editMode ?
                            <div>
                                <span className=' mr-1'>Jbl Name :</span>
                                <input type="text" value={jblName} onChange={(e) => setJblName(e.target.value)} className=' border border-blue-500 rounded p-1 focus:outline-none' />
                            </div>
                            :
                            <p className=' text-lg font-semibold print:font-medium'>{jblName}</p>

                    }
                    {
                        editMode ?
                            <div>
                                <span className=' mr-1'>Jbl Date :</span>
                                <input type="text" value={jblDate} onChange={(e) => setJblDate(e.target.value)} className=' border border-blue-500 rounded p-1 focus:outline-none' />
                            </div>
                            :

                            <p className=' text-xl text-gray-600'>{jblDate}</p>
                    }
                </div>
                <div className=' flex justify-center mt-10 flex-col items-center'>
                    <span className='text-xl font-semibold'>To Whome It May Concern</span>
                    <span className=' w-[234px] h-[1px] bg-gray-700 -mt-1'></span>
                </div>

                <div className=' mt-10'>
                    <p className=' text-justify'>This is to certify that

                        {

                            editMode ?
                                <input type="text" value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} className=' border border-blue-500 rounded p-1 focus:outline-none' />
                                :
                                <span className='font-semibold print:text-[14px]'> {accountHolderName} </span>
                        }
                        of

                        {
                            editMode ?
                                <input type="text" value={accountHolderAddress} onChange={(e) => setAccountHolderAddress(e.target.value)} className=' border border-blue-500 rounded p-1 focus:outline-none' />
                                :
                                <span className=''> {accountHolderAddress} </span>
                        }
                        has been maintaining a

                        {
                            editMode ?
                                <input type="text" value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' border border-blue-500 rounded p-1 focus:outline-none' />
                                :
                                <span className=''> {accountType} </span>
                        }
                        Account bearing no:

                        {
                            editMode ?
                                <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' border border-blue-500 rounded p-1 focus:outline-none' />
                                :
                                <span className=''> {accountNumber} </span>
                        }
                        scince
                        {
                            editMode ?

                                <input type="text" value={accountOpeningDate} onChange={(e) => setAccountOpeningDate(e.target.value)} className=' border border-blue-500 rounded p-1 focus:outline-none' />
                                :
                                <span className=""> {accountOpeningDate} </span>

                        }

                        with our branch </p>
                </div>

                <div className=' mt-10 print:mt-5'>
                    <table className=' w-full'>
                        <thead>
                            <tr className=''>
                                <td className=' font-medium p-2 border'>SL.NO</td>
                                <td className=' font-medium p-2 border w-[25%]'>Account Number</td>
                                <td className=' font-medium p-2 border w-[25%]'>Account Name</td>
                                <td className=' font-medium p-2 border'>Balance As on 19.05.2022</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className=' border p-2 print:text-sm'>1</td>
                                <td className=' border p-2 print:text-sm'>{accountNumber}</td>
                                <td className=' border p-2 print:text-sm'>{accountHolderName}</td>
                                <td className=' border p-2 print:text-sm'>

                                    {
                                        editMode ?
                                            <div>
                                                <div>
                                                    <span>Account Balance</span>
                                                    <input type="text" value={accountBalance} onChange={(e) => setAccountBalance(e.target.value)} placeholder="Account Balance" className=' border border-blue-500 rounded p-1 focus:outline-none' />
                                                </div>
                                                <div>
                                                    <span>USD Conversion Rate</span>
                                                    <input type="text" value={usdConversionRate} onChange={(e) => setUsdConversionRate(e.target.value)} placeholder="USD Conversion Rate" className=' border border-blue-500 rounded p-1 focus:outline-none' />
                                                </div>
                                            </div>
                                            :
                                            <p> BDT {commaNumber(accountBalance)} eqvt/ tp USD {commaNumber(parseFloat(parseInt(accountBalance) / parseInt(usdConversionRate)).toFixed(2))}@{usdConversionRate}</p>
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className=' my-5 text-justify'> <span className=' font-semibold uppercase print:text-[14px]'>{accountHolderName}</span> has been maintaing above Saving deposite account satisfactory with our branch. Based on transactions of the account with us he is deemed financially sound and solvend. </p>
                    <p>We wish him every success in life.</p>
                    <p className=' pt-20 mb-10'>For NCC Bank Ltd</p>
                    <div className=' flex justify-between items-center '>
                        <div className=' w-full relative'>
                            <div className=''>
                                <img src={signature1} alt="" className=' w-52 translate-y-10' />
                                {
                                    editMode ?
                                        <input type="text" placeholder='Manager Name' value={leftManagerName} onChange={(e) => setLeftManegerName(e.target.value)} className=' w-full rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        :
                                        <p>{leftManagerName}</p>
                                }
                                {
                                    editMode ?
                                        <input type="text" placeholder='Manager Post' value={leftManagerPost} onChange={(e) => setLeftManegerPost(e.target.value)} className=' w-full rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        :
                                        <p>{leftManagerPost}</p>

                                }
                            </div>
                        </div>

                        <div className=' w-full relative flex justify-end translate-y-3 '>
                            <div className=''>
                                <img src={signature2} alt="" className=' w-40 translate-y-3' />
                                {
                                    editMode ?
                                        <input type="text" placeholder='Manager Name' value={rightManagerName} onChange={(e) => setRightManegerName(e.target.value)} className=' w-full rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        :
                                        <p>{rightManagerName}</p>
                                }
                                {
                                    editMode ?
                                        <input type="text" placeholder='Manager Post' value={rightManagerPost} onChange={(e) => setRightManegerPost(e.target.value)} className=' w-full rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        :
                                        <p>{rightManagerPost}</p>

                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' print:fixed bottom-0 left-0 w-full flex justify-center font-Poppins'>
                    <div className=' py-5'>
                        {
                            editMode ?
                                <div>
                                    <input type="text" placeholder='Branch name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' w-full rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                    <input type="text" placeholder='footer address' value={footerAddress} onChange={(e) => setFooterAddress(e.target.value)} className=' w-full rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                </div>
                                :
                                <p className=' text-center print:text-[12px]'> <span className=' font-semibold'>{branchName} Branch :</span> {footerAddress}</p>
                        }
                        <p className=' text-center print:text-[12px]'>Phone: (PABX) :9861626,9861627, Email : bm_<span className=' lowercase'>{branchName}</span>@nccbank.com.bd, Web : www.nccbank.com.bd</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NCCBankCertificate