import logo from "../../Photos/bank_asia/logo.png"
import { useState } from 'react';
import commaNumber from "comma-number";
import signature2 from "../../Photos/ucb_bank/sig 2.png";
import signature1 from "../../Photos/ucb_bank/sif 1.png";
import sile from "../../Photos/bank_asia/sil.png"
import SolvencyEditComponent from "../../Components/SolvencyEditComponent";

function BankAsiaTwo() {

    const [baDate, setBaDate] = useState("16.05.2022");
    const [editMode, setEditMode] = useState(false);
    const [accountHolderName, setAccountHolderName] = useState("MOHD. MOMINUR RAHMAN");
    const [accountHolderAddress, setAccountHolderAddress] = useState("Shop:12, Gazi Tower (1st Fl), Jubilee Rd, Teaz Uddin Bazar, Chattogram");
    const [accountNumber, setAccountNumber] = useState("02233002348");
    const [accountBalance, setAccountBalance] = useState("1000");
    const [accountType, setAccountType] = useState("current");
    const [usdConversionRate, setUsdConversionRate] = useState("87.5");
    const [leftManagerName, setLeftManegerName] = useState("Mohammad Mahabub Alam");
    const [leftManagerPost, setLeftManegerPost] = useState("FAVP & Operation Manager");
    const [rightManagerName, setRightManegerName] = useState("Kazi Muzibul Islam");
    const [rightManagerPost, setRightManegerPost] = useState("EVP & Head of Branch");

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }


    return (

        <div className=' w-full min-h-screen p-5 print:p-14 font-lora'>
            <SolvencyEditComponent editMode={editMode} toggleEditMode={toggleEditMode} convertNumberToWord={"not require"} convertWord={false} />
            <div className='flex flex-col justify-center  items-center'>
                <img src={logo} alt="" className=' w-64' />
                <p className=" uppercase font-medium text-lg">limited</p>
            </div>
            <div className=" -translate-y-10">
                <p className=' text-xl font-semibold print:font-medium'>BA/STR/GB/</p>
                {
                    editMode ?
                        <input value={baDate} onChange={(e) => setBaDate(e.target.value)} type="text" className=' border border-blue-500 rounded p-1 focus:outline-none' />
                        :
                        <p className=' text-xl'>{baDate}</p>
                }
            </div>
            <div className=' flex justify-center mt-10'>
                <span className='text-xl font-semibold print:font-semibold border-b border-gray-400 uppercase'>To Whome It May Concern</span>
            </div>

            {
                editMode &&

                <div>
                    <span>USD Convert Rate</span>
                    <span className=" mx-1">:</span>
                    <input value={usdConversionRate} onChange={(e) => setUsdConversionRate(e.target.value)} type="text" className=' border border-blue-500 rounded p-1 focus:outline-none' />
                </div>

            }

            <div className=' mt-16'>
                <p className=" text-justify text-lg" >This is to certify that

                    {
                        editMode ?
                            <input value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} type="text" className=' border border-blue-500 rounded p-1 focus:outline-none' />
                            :
                            <span className=' font-semibold uppercase mx-1'>{accountHolderName}</span>
                    }
                    Address :
                    {
                        editMode ?
                            <input value={accountHolderAddress} onChange={(e) => setAccountHolderAddress(e.target.value)} type="text" className=' border border-blue-500 rounded p-1 focus:outline-none w-full' />
                            :
                            <span className=" mx-1">{accountHolderAddress}</span>
                    }
                    has been maintaining a
                    {

                        editMode ?
                            <input value={accountType} onChange={(e) => setAccountType(e.target.value)} type="text" className=' border border-blue-500 rounded p-1 focus:outline-none w-full' />
                            :
                            <span className=" mx-1"> {accountType} </span>

                    }
                    account bearing No.

                    {
                        editMode ?
                            <input value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} type="text" className=' border border-blue-500 rounded p-1 focus:outline-none' />
                            :
                            <span className=" font-semibold mx-1">{accountNumber}</span>
                    }
                    with an available balance of total TK-

                    {
                        editMode ?
                            <input value={accountBalance} onChange={(e) => setAccountBalance(e.target.value)} type="text" className=' border border-blue-500 rounded p-1 focus:outline-none' />
                            :
                            <span className=" font-semibold mx-1">{commaNumber(accountBalance)}/-</span>
                    }
                    (Local Currency) which is equivalent to <span className=" font-semibold">USD-{parseFloat(parseInt(accountBalance) / parseInt(usdConversionRate)).toFixed(2)}/-</span> .The party is reported to be financially sound & solvent.</p>
                <p className=" my-10 text-lg text-justify">This certificate has been issued without prejudice and/or any responsibility on the part of this Bank or any of its officials.</p>
            </div>

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
                        <img src={sile} alt="" className=' w-28 translate-y-10' />
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
    )
}

export default BankAsiaTwo