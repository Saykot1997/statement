import React, { useState } from 'react'
import logo from "../../Photos/one_bank/logo.png";
import signature2 from "../../Photos/ucb_bank/sig 2.png";
import signature1 from "../../Photos/ucb_bank/sif 1.png";
import sile from "../../Photos/ucb_bank/sil.png"
import commaNumber from 'comma-number';
import { ToWords } from 'to-words';

function OnebankCertificate() {
    const [branchAddress, setBranchAddress] = useState('Tamij Uddin Tower, 01 DIT Road, Malibagh Chowdhurypara, Dhaka')
    const [printDate, setPrintDate] = useState("18.05.2022");
    const [ref, setRef] = useState("UCBL/GB/NEB/2022");
    const [editMode, setEditMode] = useState(false);
    const [accountHolderName, setAccountHolderName] = useState("Mahedi Hasan Munna")
    const [accountHolderFotherName, setAccountHolderFotherName] = useState("Md Alamgir Miah")
    const [leftManagerName, setLeftManegerName] = useState("Mohammad Mahabub Alam");
    const [leftManagerPost, setLeftManegerPost] = useState("FAVP & Operation Manager");
    const [rightManagerName, setRightManegerName] = useState("Kazi Muzibul Islam");
    const [rightManagerPost, setRightManegerPost] = useState("EVP & Head of Branch");
    const [accountHolderAddress, setAccountHolderAddress] = useState("40/A, Holding No-20, Cantonment-4, Mohakhali, Dhaka Cantonment, Bangladesh")
    const [accountNumber, setAccountNumber] = useState("0943211000001452")
    const [accountType, setAccountType] = useState("Saving Deposit")
    const [accountBalance, setAccountBalance] = useState(1000)
    const [usdCurrancyConversionRate, setUsdCurrancyConversionRate] = useState(87.60)
    const [todayDate, setTodayDate] = useState("30-06-2022");
    const [genarationTime, setGenarationTime] = useState("3:39:59 PM");
    const [branchName, setBranchName] = useState("Malibagh Branch")
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
        <div className=" w-full p-10">
            <div className=''>
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

                <div className=' w-full flex justify-between items-center'>
                    <div className=''>
                        <img src={logo} alt="" className=' w-[280px]' />
                    </div>
                    <div className='text-gray-500 print:leading-[14px]'>

                        {
                            editMode ?
                                <div className=' flex items-center'>
                                    <span>Branchname</span>
                                    <span>:</span>
                                    <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                </div>
                                :
                                <p className=' font-semibold print:text-[14px]'>{branchName} :</p>
                        }
                        {
                            editMode ?
                                <div className=' flex items-center'>
                                    <span>Address</span>
                                    <span>:</span>
                                    <input type="text" placeholder='House' value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                </div>
                                :
                                <p className=' print:text-[11px]'>{branchAddress}</p>
                        }
                        <p className='font-medium print:text-[13px] print:tracking-wider'>Telephone: 88-02-58316113, 58316117, 58316118</p>
                        <p className=' print:text-[11px] print:tracking-tighter'>E-mail: manager.malibagh@onebank.com.bd, Web: www.onebank.com.bd</p>
                    </div>
                </div>

                <div className=' w-full print:px-5 print:text-[12px] print:leading-[14px] text-gray-900'>
                    <div className=' my-8'>
                        <div className=' flex justify-between'>
                            <p className=' font-semibold text-gray-900'>Ref: {ref}</p>
                            <div>
                                <p className=''>Issuing Branch:{branchName}</p>
                                <p>Issue Date:{todayDate}</p>
                                <p>Generation Time:{genarationTime}</p>
                            </div>
                        </div>
                    </div>

                    <div className=' text-center my-9'>
                        <span className='font-semibold uppercase print:text-lg'>To Whom It May Concern</span>
                    </div>
                    <div className=' px-2'>
                        <p className='leading-7 text-justify'>This is to inform that
                            {
                                editMode ?
                                    <input type="text" placeholder='Account Holder Name' value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                    :
                                    <span className=''> {accountHolderName}, </span>
                            }Son of
                            {
                                editMode ?
                                    <input type="text" placeholder='Father Name' value={accountHolderFotherName} onChange={(e) => setAccountHolderFotherName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                    :
                                    <span className=''> {accountHolderFotherName}, </span>
                            }
                            at
                            {
                                editMode ?
                                    <input type="text" placeholder='Address ' value={accountHolderAddress} onChange={(e) => setAccountHolderAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                    :
                                    <span className=''> {accountHolderAddress} </span>
                            }
                            has been maintainnig the following

                            {
                                editMode ?
                                    <input type="text" placeholder='Account Number' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                    :
                                    <span className=''> {accountType} </span>
                            }
                            account bearing No.
                            {
                                editMode ?
                                    <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                    :
                                    <span className=''>{accountNumber} </span>
                            }
                            with us. Details as follows:
                        </p>
                    </div>
                    {
                        editMode &&

                        <div className=' flex items-center'>
                            <span>USD Curarncy Rete:</span>
                            <span className=' mx-2'>:</span>
                            <input type="text" placeholder='Print Date' value={usdCurrancyConversionRate} onChange={(e) => setUsdCurrancyConversionRate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                        </div>
                    }
                    <table className=' w-full mt-2'>
                        <thead>
                            <tr>
                                <th className=' border border-gray-600 pb-2 px-[2px] w-[10%] text-gray-900'>SL no</th>
                                <th className=' border border-gray-600 pb-2 px-[2px] w-[23%] text-gray-900'>Account Number</th>
                                <th className=' border border-gray-600 pb-2 px-[2px] w-[23%] text-gray-900'>Account Type</th>
                                <th className=' border border-gray-600 pb-2 px-[2px] text-gray-900'>
                                    {
                                        editMode ?
                                            <div>
                                                <span>Balance</span>
                                                <input type="text" placeholder='Print Date' value={printDate} onChange={(e) => setPrintDate(e.target.value)} className=' rounded p-[2px] my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            :
                                            <div>
                                                <p>Balance on</p>
                                                <span className=' text-gray-800 font-normal'>{printDate}</span>
                                            </div>
                                    }
                                </th>
                                <th className=' border border-gray-600 pb-2 w-[25%] text-gray-900'>
                                    <p>Equivalent to USD</p>
                                    <p className=' text-sm font-normal'>(USD.1.00 = BDT.{parseFloat(usdCurrancyConversionRate).toFixed(2)})</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className=' border border-gray-500 px-[2px] text-center w-[10%]'>01</td>
                                <td className=' border border-gray-500 px-[2px] text-center w-[23%] '>{accountNumber}</td>
                                <td className=' border border-gray-500 px-[2px] text-center w-[23%]'>{accountType}</td>
                                <td className=' border border-gray-500 px-[2px] text-center '>
                                    {
                                        editMode ?
                                            <input type="text" placeholder='Present Balance' value={accountBalance} onChange={(e) => { setAccountBalance(e.target.value) }} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            :
                                            <span className=''>{commaNumber(accountBalance)}</span>
                                    }
                                </td>
                                <td className=' border border-gray-500 px-[2px] text-center w-[23%]'>{commaNumber(parseFloat(parseFloat(accountBalance) / parseFloat(usdCurrancyConversionRate)).toFixed(2))}</td>
                            </tr>
                            <tr >
                                <td className=' border border-gray-500 text-center font-semibold text-gray-900 w-[10%]'></td>
                                <td className=' border border-gray-500 px-[2px] text-left w-[23%] font-semibold text-gray-800'>Total</td>
                                <td className=' border border-gray-500 px-[2px] w-[23%]'></td>
                                <td className=' border border-gray-500 text-center px-2 font-semibold text-gray-800'>{commaNumber(accountBalance)}</td>
                                <td className=' border border-gray-500 text-center px-2 w-[23%] font-semibold text-gray-800'>{commaNumber(parseFloat(parseFloat(accountBalance) / parseFloat(usdCurrancyConversionRate)).toFixed(2))}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className=' text-center'>
                        {
                            editMode ?
                                <div>
                                    <p>In word: <span className=' font-semibold text-gray-800'>BDT.</span>
                                        <input type="text" placeholder='BD Word Taka' value={bdWordConvertMoney} onChange={(e) => setBdWordConvertMoney(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                        only or <span className=' font-semibold text-gray-800'>USD.</span>
                                        <input type="text" placeholder='Usd Word Taka' value={usdWordConvertMoney} onChange={(e) => setUsdWordConvertMoney(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                        only.</p>
                                </div>
                                :
                                <p>In word: <span className=' font-semibold text-gray-800'>BDT.</span>{bdWordConvertMoney} only or <span className=' font-semibold text-gray-800'>USD.</span>{usdWordConvertMoney} only.</p>
                        }
                    </div>
                    <div className=' mt-10 mb-5'>
                        <p>To the best of our knowledge, the client is financially sound and solvent.</p>
                    </div>
                    <div className=' text-center mt-10'>
                        <p className=' font-semibold text-lg text-gray-900'>FOR UNITED COMMERCIAL BANK PLC.</p>
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
                                <img src={sile} alt="" className=' w-48' />
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
        </div>
    )
}

export default OnebankCertificate