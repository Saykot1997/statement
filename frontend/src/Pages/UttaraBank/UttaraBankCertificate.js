import React, { useState } from 'react'
import logo from "../../Photos/uttara_bank/logo.png";
import signature2 from "../../Photos/southeast_bank/sig1.png"
import commaNumber from 'comma-number';
import bankSil from "../../Photos/uttara_bank/sil.png";
import { ToWords } from 'to-words';

function UttaraBankCertificate() {

    const [branchName, setBranchName] = useState("Nawabpur Branch");
    const [branchAddress, setBranchAddress] = useState(`150, Nawabpur Road Dhaka-1000, Bangladesh`);
    const [printDate, setPrintDate] = useState("19.06.2022");
    const [ref, setRef] = useState("UBL/NP/SOL/2022/5646");
    const [editMode, setEditMode] = useState(false);
    const [accountHolderName, setAccountHolderName] = useState(`"Kinan Trading" proprietor Mr. Md Abdul Muhit`)
    const [accountHolderAddress, setAccountHolderAddress] = useState("140, Nawabpur Road, Dhaka - l100, Bangladesh")
    const [leftManagerName, setLeftManegerName] = useState("Mohammad Mahabub Alam");
    const [leftManagerPost, setLeftManegerPost] = useState("FAVP & Operation Manager");
    const [accountNumber, setAccountNumber] = useState("122-0021-5015")
    const [accountType, setAccountType] = useState("Curtent Account")
    const [accountBalance, setAccountBalance] = useState("1000")
    const [todayDate, setTodayDate] = useState("19 June 2022")
    const [usdCurrancyConversionRate, setUsdCurrancyConversionRate] = useState("87.60")
    const toWords = new ToWords();
    const [bdWordConvertMoney, setBdWordConvertMoney] = useState("One Thousand");
    const [usdWordConvertMoney, setUsdWordConvertMoney] = useState("One Thousand");

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const printWebPage = () => {
        window.print();
    }
    const convertNumberToWord = () => {
        setBdWordConvertMoney(toWords.convert(parseFloat(parseFloat(accountBalance).toFixed(2))))
        setUsdWordConvertMoney(toWords.convert(parseFloat(parseFloat(accountBalance / usdCurrancyConversionRate).toFixed(2))))
    }



    return (
        <div className=" w-full font-nuosu relative">
            {
                editMode ?
                    <div className='absolute top-5 right-0 print:hidden'>
                        <button onClick={convertNumberToWord} className="bg-green-500 px-2 py-[6px] rounded text-white hover:bg-green-700 mr-2">Convert Money</button>
                        <button onClick={toggleEditMode} className="bg-blue-500 px-2 py-[6px] rounded text-white hover:bg-blue-700 ">Save</button>
                        <button onClick={toggleEditMode} className="bg-red-500 ml-2 px-2 py-[6px] rounded text-white hover:bg-red-700 ">Cencel</button>
                    </div>
                    :
                    <div className='absolute top-5 right-0 print:hidden'>
                        <button onClick={toggleEditMode} className=' bg-blue-500 px-2 py-[6px] rounded text-white hover:bg-blue-700'>Edit</button>
                        <button onClick={printWebPage} className=' bg-green-500 ml-2 px-2 py-[6px] rounded text-white hover:bg-green-700'>Print</button>
                    </div>
            }
            <div className=' w-full px-16 pt-10'>
                <div>
                    <img src={logo} alt="" className=' w-64' />
                </div>
                <div className=' print:text-[12px] print:leading-[16px] pl-14 -mt-7 '>

                    {
                        editMode ?

                            <div className=' flex items-center'>
                                <span>Branch Name</span>
                                <span className=' mx-2 '>:</span>
                                <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :
                            <p className='print:text-[16px] print:leading-5 mb-[2px]'>{branchName}</p>
                    }

                    {
                        editMode ?

                            <div className=' flex items-center'>
                                <span>Branch Address</span>
                                <span className=' mx-2 '>:</span>
                                <input type="text" placeholder='Branch Address' value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :
                            <p className=' font-Poppins'>{branchAddress}</p>
                    }
                    <p className=' font-Poppins'>Telephone: 02223385690, 02223382302, Mobile: 01991144136</p>
                    <p className=' font-Poppins'>Email: nawabpur@manager@uttarabank-bd.com, Website: www.uttarabank-bd.com, SWIFT: UTBLBDDH454</p>
                </div>
                <span className=' block w-full h-[1px] bg-gray-700 mt-1'></span>
            </div>
            <div className=' px-16 mt-2'>
                <div className=' flex justify-between print:text-sm'>
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Ref</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Branch Ref' value={ref} onChange={(e) => setRef(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :

                            <p className=' font-semibold'>{ref}</p>
                    }
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Date</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Print Date' value={printDate} onChange={(e) => setPrintDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :
                            <p className=' font-semibold'>Date: {printDate}</p>
                    }
                </div>

                <div className=' flex flex-col items-center mt-16'>
                    <span className='font-semibold'>TO WHOM IT MAY CONCERN</span>
                    <span className=' block w-[228px] -mt-[2px] h-[1px] bg-gray-700'></span>
                </div>
                {
                    editMode &&

                    <div className=' flex items-center'>
                        <span>USD Curarncy Rete:</span>
                        <span className=' mx-2'>:</span>
                        <input type="text" placeholder='Print Date' value={usdCurrancyConversionRate} onChange={(e) => setUsdCurrancyConversionRate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                    </div>
                }
                <div className=' mt-10'>
                    <p className=' text-justify'>This is to certify that
                        {
                            editMode ?
                                <input type="text" placeholder='Account Holder Name' value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {accountHolderName}, </span>
                        }
                        of
                        {
                            editMode ?
                                <input type="text" placeholder='Account Holder Address' value={accountHolderAddress} onChange={(e) => setAccountHolderAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                :
                                <span className=' mx-1'>{accountHolderAddress} </span>
                        }
                        has been maintaining a

                        {
                            editMode ?
                                <input type="text" placeholder='Account Number' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {accountType} </span>
                        }
                        bearing no.
                        {
                            editMode ?
                                <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {accountNumber} </span>
                        }
                        with us since long, The present balance of his account as
                        {
                            editMode ?
                                <input type="text" placeholder='Today Date' value={todayDate} onChange={(e) => setTodayDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {todayDate} </span>
                        } is BDT
                        {
                            editMode ?
                                <input type="text" placeholder='Present Balance' value={accountBalance} onChange={(e) => setAccountBalance(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {commaNumber(accountBalance)} </span>
                        }
                        (
                        {
                            editMode ?
                                <input type="text" placeholder='BD Word Taka' value={bdWordConvertMoney} onChange={(e) => setBdWordConvertMoney(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                :
                                <span>{bdWordConvertMoney}</span>
                        }
                        ) only, which is equivalent to US Dolar $<span className=''>{commaNumber(parseFloat(parseFloat(accountBalance) / parseFloat(usdCurrancyConversionRate)).toFixed(2))} Approx. </span>
                        (US Dolar

                        {
                            editMode ?
                                <input type="text" placeholder='Usd Word Taka' value={usdWordConvertMoney} onChange={(e) => setUsdWordConvertMoney(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                :
                                <span> {usdWordConvertMoney}</span>
                        }
                        ) only. To the best of out knowledge the Party is financially sound & solvent
                    </p>
                </div>

                <p className=' mt-16 mb-10'>We wish him every success in his life.</p>

                <div className=' flex items-center mt-24'>
                    <div className='relative'>
                        <div>
                            <img src={signature2} alt="" className=' w-44 absolute -top-[70px]' />
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
                    <div className=' ml-60 print:ml-32'>
                        <img src={bankSil} alt="" className="w-24" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UttaraBankCertificate