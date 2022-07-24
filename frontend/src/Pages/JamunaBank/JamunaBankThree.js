import commaNumber from 'comma-number';
import React, { useState } from 'react'
import logo from "../../Photos/jamuna_bank/jamunabank.jpg"
import signature2 from "../../Photos/ucb_bank/sig 2.png";
import signature1 from "../../Photos/ucb_bank/sif 1.png";
import sile from "../../Photos/ucb_bank/sil.png"

function JamunaBankThree() {

    const [editMode, setEditMode] = useState(false);
    const [branchName, setBranchName] = useState("Shantinagar Branch")
    const [branchAddress, setBranchAddress] = useState("Green City Edge 89, Kakrail C/A Ward No. 19, Dhaka, Bangladesh")
    const [branchPhone, setBranchPhone] = useState("88-02-8300546")
    const [branchEmail, setBranchEmail] = useState("manager.shantinagar@jamunabank.com.bd")
    const [pabx, setPabx] = useState("8300524,8300545,8300547")
    const [swift, setSwift] = useState("JAMUBDDH041")
    const [printDate, setPrintDate] = useState("22.05.2022")
    // const [jbl, setJbl] = useState("JBL/SNB/GB/2020/522")
    const [accountHolderName, setAccountHolderName] = useState("mohd.momiur rahman")
    const [accountHolderAddress, setAccountHolderAddress] = useState("31/1 SARAT GUPTA ROAD, SHANTINAGAR, GREEN CITY EDGE, BANGLADESH")
    const [todaysDate, setTodaysDate] = useState("May 22,2020")
    const [accountNumber, setAccountNumber] = useState("1101000445399")
    const [accountType, setAccountType] = useState("Savings")
    const [accountBalance, setAccountBalance] = useState("1000")
    const [usdCurrancyConversionRate, setUsdCurrancyConversionRate] = useState("87.60")
    const [accountOpeningDate, setAccountOpeningDate] = useState("04/08/2004")
    const [oldAccountNumber, setOldAccountNumber] = useState("0009-0310007098")
    const [leftManagerName, setLeftManegerName] = useState("Mohammad Mahabub Alam");
    const [leftManagerPost, setLeftManegerPost] = useState("SEO & GB Incharge");
    const [rightManagerName, setRightManegerName] = useState("K.M Khairul Islam");
    const [rightManagerPost, setRightManegerPost] = useState("FAVP & Manager Operations");

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const printWebPage = () => {
        window.print();
    }


    return (
        <div className=' w-full min-h-screen px-20 print:px-14 print:py-5'>
            {
                editMode ?
                    <div className='absolute top-5 right-0 print:hidden'>
                        <button onClick={toggleEditMode} className="bg-blue-500 px-2 py-[6px] rounded text-white hover:bg-blue-700 ">Save</button>
                        <button onClick={toggleEditMode} className="bg-red-500 ml-2 px-2 py-[6px] rounded text-white hover:bg-red-700 ">Cencel</button>
                    </div>
                    :
                    <div className='absolute top-5 right-0 print:hidden'>
                        <button onClick={toggleEditMode} className=' bg-blue-500 px-2 py-[6px] rounded text-white hover:bg-blue-700'>Edit</button>
                        <button onClick={printWebPage} className=' bg-green-500 ml-2 px-2 py-[6px] rounded text-white hover:bg-green-700'>Print</button>
                    </div>
            }
            <div className=' flex justify-between items-center'>
                <div className=' w-1/2'>
                    <img src={logo} alt="" className='w-52' />
                </div>
                <div className=' pl-16 w-1/2 print:text-[12px]'>
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Branch Name</span>
                                <span className=' mx-2 '>:</span>
                                <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :
                            <p className=' font-semibold text-xl'>{branchName}</p>
                    }
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Branch Address</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Branch Address' value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :
                            <p className=' w-[70%]'>{branchAddress}</p>
                    }
                    {
                        editMode ?

                            <div className=' flex items-center'>
                                <span>Branch Phone</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Branch Phone' value={branchPhone} onChange={(e) => setBranchPhone(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>

                            :
                            <p>Phone No : {branchPhone}</p>
                    }
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>PABX</span>
                                <span className='mx-2'>:</span>
                                <input type="text" placeholder='Branch Pabx' value={pabx} onChange={(e) => setPabx(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :

                            <p>PABX : {pabx}</p>
                    }
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Branch Email</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Branch Email' value={branchEmail} onChange={(e) => setBranchEmail(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :
                            <p>E-mail : {branchEmail}</p>
                    }
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Swift</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Branch Swift' value={swift} onChange={(e) => setSwift(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :

                            <p>SWIFT : {swift}</p>
                    }
                </div>
            </div>
            <div>
                <p className=' text-lg font-semibold print:font-medium'>JBL/SNB/GB/2022/522</p>
                {
                    editMode ?
                        <div className=' flex items-center'>
                            <span>Today Date</span>
                            <span className=' mx-2'>:</span>
                            <input type="text" placeholder='Invoice No' value={todaysDate} onChange={(e) => setTodaysDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                        </div>
                        :
                        <p className=' text-xl text-gray-600'>{todaysDate}</p>

                }
            </div>
            <div className=' flex justify-center mt-5'>
                <span className='text-xl font-semibold print:font-medium border-b border-gray-400'>To Whome It May Concern</span>
            </div>

            <div className=' mt-10'>
                <p className=' pl-2 pr-3 text-justify ' >This is to certify that
                    {
                        editMode ?
                            <input type="text" placeholder='Account Holder Name' value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                            :
                            <span className=' font-medium mx-1 uppercase'>{accountHolderName}</span>
                    }

                    Permanent Address:

                    {
                        editMode ?
                            <input type="text" placeholder='Account Holder Address' value={accountHolderAddress} onChange={(e) => setAccountHolderAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' /> :
                            <span className=' mx-1 uppercase'>{accountHolderAddress}</span>
                    }
                    has been maintaining a
                    {
                        editMode ?
                            <input type="text" placeholder='Account Type' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                            :
                            <span className=' mx-1'>{accountType}</span>
                    }

                    Account with our branch. The details of the said scheme as on

                    {
                        editMode ?
                            <input type="text" placeholder='print date' value={printDate} onChange={(e) => setPrintDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                            :
                            <span className=' mx-1'> {printDate} </span>
                    }
                    are given blow: </p>
            </div>

            <div className=' mt-10'>
                <table className=' w-full'>
                    <thead>
                        <tr className=' align-text-top'>
                            <td className=' px-2 border border-gray-600 w-[28%]'>A/c No</td>
                            <td className=' px-2 border border-gray-600'>Type of Account</td>
                            <td className=' px-2 border border-gray-600'>Account Name</td>
                            <td className=' px-2 border border-gray-600 text-center'>Opening Date</td>
                            <td className=' px-2 border border-gray-600 w-[20%]'>Present Balance (Tk.)</td>
                            <td className=' px-2 border border-gray-600 w-[16%]'>Present Balance (USD)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=' align-text-top'>
                            <td className=' border border-gray-600 p-2'>
                                {
                                    editMode ?
                                        <input type="text" placeholder='Account No' value={oldAccountNumber} onChange={(e) => setOldAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        :
                                        <span className=' mx-1'>{oldAccountNumber}</span>
                                }
                                <p className=' pt-2'>Update A/C</p>
                                <p className=''>Number</p>
                                {
                                    editMode ?
                                        <input type="text" placeholder='Account No' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        :

                                        <p>{accountNumber}</p>
                                }
                            </td>
                            <td className=' border border-gray-600 p-2'>{accountType}</td>
                            <td className=' border border-gray-600 p-2 uppercase'>{accountHolderName}</td>
                            <td className=' border border-gray-500 p-2'>
                                {
                                    editMode ?
                                        <input type="text" placeholder='Opening Date' value={accountOpeningDate} onChange={(e) => setAccountOpeningDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        :
                                        <span>{accountOpeningDate}</span>
                                }
                            </td>
                            <td className=' border border-gray-600 p-2'>
                                {
                                    editMode ?
                                        <input type="text" placeholder='Present Balance' value={accountBalance} onChange={(e) => setAccountBalance(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        :
                                        <span>{commaNumber(accountBalance)}</span>
                                }
                            </td>
                            <td className=' border border-gray-600 p-2'>{commaNumber(parseFloat(parseInt(accountBalance) / parseInt(usdCurrancyConversionRate)).toFixed(2))}</td>
                        </tr>
                    </tbody>
                </table>
                {
                    editMode ?
                        <div>
                            <span>1 USD = </span>
                            <input value={usdCurrancyConversionRate} onChange={(e) => setUsdCurrancyConversionRate(e.target.value)} type="text" placeholder='USD Conbert Rate' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                        </div>
                        :
                        <p className=' my-5'>1 USD = {usdCurrancyConversionRate} </p>

                }
                <p className=' mt-10'>We wish him every success in life.</p>
                <div className=' grid grid-cols-3 mt-6 items-center px-5 '>
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

                    <div className=' w-full flex justify-center'>
                        <div>
                            {/* <img src={sile} alt="" className=' w-48' /> */}
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
        </div>
    )
}

export default JamunaBankThree