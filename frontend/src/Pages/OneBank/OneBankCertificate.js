import React, { useState } from 'react'
import logo from "../../Photos/one_bank/logo.png";
import signature2 from "../../Photos/one_bank/1.png";
import signature1 from "../../Photos/one_bank/3.png";
import sile from "../../Photos/one_bank/sil.png"
import commaNumber from 'comma-number';
import { ToWords } from 'to-words';

function OnebankCertificate() {
    const [branchAddress, setBranchAddress] = useState('Tamij Uddin Tower, 01 DIT Road, Malibagh Chowdhurypara, Dhaka')
    // const [printDate, setPrintDate] = useState("18.05.2022");
    const [ref, setRef] = useState("OBL/MALIBAGH BRANCH/GB/2022");
    const [editMode, setEditMode] = useState(false);
    const [accountHolderName, setAccountHolderName] = useState("SMART INTERIOR SOLUTION")
    const [accountOpeningDate, setAccountOpeningDate] = useState("Oct 24, 2019")
    // const [accountHolderFotherName, setAccountHolderFotherName] = useState("Md Alamgir Miah")
    const [leftManagerName, setLeftManegerName] = useState("Mohammad Mahabub Alam");
    const [leftManagerPost, setLeftManegerPost] = useState("FAVP & Operation Manager");
    const [rightManagerName, setRightManegerName] = useState("Kazi Muzibul Islam");
    const [rightManagerPost, setRightManegerPost] = useState("EVP & Head of Branch");
    const [accountHolderAddress, setAccountHolderAddress] = useState("504/C,KHILGAON, DHAKA-1219")
    const [accountNumber, setAccountNumber] = useState("0921020001424")
    const [accountTitle, setAccountTitle] = useState("SMART INTERIOR SOLUTION")
    const [accountType, setAccountType] = useState("CDCL-CURRENT-DEPOSIT - CLIENT")
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
        <div className=" w-full p-12 font-Poppins">
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
                        <img src={logo} alt="" className=' w-[260px] -translate-x-2' />
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

                <div className=' w-full '>
                    <div className=' px-1'>
                        <div className=' flex justify-between print:text-[12px] print:leading-[14px] my-8'>
                            {
                                editMode ?
                                    <div className=' flex items-center'>
                                        <span>Ref</span>
                                        <span>:</span>
                                        <input type="text" placeholder='Ref' value={ref} onChange={(e) => setRef(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                    </div>
                                    :
                                    <p className=''>Ref: {ref}</p>
                            }

                            <div className=' text-right pr-2'>
                                <p className=''>Issuing Branch:<span className=' uppercase'>{branchName}</span> </p>
                                {
                                    editMode ?
                                        <div className=' flex items-center'>
                                            <span>Issue Date</span>
                                            <span>:</span>
                                            <input type="text" placeholder='Issue Date' value={todayDate} onChange={(e) => setTodayDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        </div>
                                        :
                                        <p>Issue Date:{todayDate}</p>
                                }
                                {
                                    editMode ?
                                        <div className=' flex items-center'>
                                            <span>Generation Time</span>
                                            <span>:</span>
                                            <input type="text" placeholder='Issue Date' value={genarationTime} onChange={(e) => setGenarationTime(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        </div>
                                        :
                                        <p>Generation Time:{genarationTime}</p>
                                }
                            </div>
                        </div>
                        <div className=' text-center my-9'>
                            <span className=' font-medium uppercase print:text-lg'>To Whom It May Concern</span>
                        </div>
                        <div className=' print:text-sm'>
                            <p>This is to certify that the following person(s) having address as mentioned below has / have been banking with ONE Bank Limited.</p>
                        </div>
                    </div>
                    <table className=' w-full my-3'>
                        <tbody className='print:text-[12px]'>
                            <tr className=' bg-gray-100 '>
                                <td className=' border border-gray-600 px-1'>Customer Name</td>
                                <td className=' border border-gray-600 px-1'>Address</td>
                            </tr>
                            <tr className=''>
                                <td className=' border border-gray-600 px-1'>
                                    {
                                        editMode ?
                                            <input type="text" placeholder='Customer Name' value={accountHolderName} onChange={(e) => { setAccountHolderName(e.target.value) }} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                            :
                                            <span className=''>{accountHolderName}</span>
                                    }
                                </td>
                                <td className=' border border-gray-600 px-1'>
                                    {
                                        editMode ?
                                            <input type="text" placeholder='Address' value={accountHolderAddress} onChange={(e) => { setAccountHolderAddress(e.target.value) }} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                            :
                                            <span className=''>{accountHolderAddress}</span>
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className=' print:text-sm mt-2 mb-4 px-1'>The details of the accounts maintained with the Branch are mentioned as under:</p>
                    {
                        editMode &&

                        <div className=' flex items-center'>
                            <span>USD Curarncy Rete:</span>
                            <span className=' mx-2'>:</span>
                            <input type="text" placeholder='Print Date' value={usdCurrancyConversionRate} onChange={(e) => setUsdCurrancyConversionRate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                        </div>
                    }
                    <table className=' w-full mt-2'>
                        <tbody className=' align-text-top print:text-[12px]'>
                            <tr className=' bg-gray-100 '>
                                <td className=' border border-gray-600 px-2'>Account Number</td>
                                <td className=' border border-gray-600 px-2 w-[30%]'>Account Title</td>
                                <td className=' border border-gray-600 px-2 w-[27%]'>Account Type</td>
                                <td className=' border border-gray-600 px-2 w-[12%] text-center'>Account Opening Date</td>
                                <td className=' border border-gray-600 px-2 text-right'>Amount (BDT)</td>
                            </tr>
                            <tr className='' >
                                <td className=' border border-gray-500 px-[2px] text-center'>
                                    {
                                        editMode ?
                                            <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => { setAccountNumber(e.target.value) }} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                            :
                                            <span className=''>{accountNumber}</span>
                                    }
                                </td>
                                <td className=' border border-gray-500 px-[2px] text-left'>
                                    {
                                        editMode ?
                                            <input type="text" placeholder='Account Title' value={accountTitle} onChange={(e) => { setAccountTitle(e.target.value) }} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                            :
                                            <span className=''>{accountTitle}</span>
                                    }
                                </td>
                                <td className=' border border-gray-500 px-[2px]'>
                                    {
                                        editMode ?
                                            <input type="text" placeholder='Account Type' value={accountType} onChange={(e) => { setAccountType(e.target.value) }} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                            :
                                            <span className=''>{accountType}</span>
                                    }
                                </td>
                                <td className=' border border-gray-500 px-[2px] text-center '>
                                    {
                                        editMode ?
                                            <input type="text" placeholder='Account Opening Date' value={accountOpeningDate} onChange={(e) => { setAccountOpeningDate(e.target.value) }} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                            :
                                            <span className=''>{commaNumber(accountOpeningDate)}</span>
                                    }
                                </td>
                                <td className=' border border-gray-500 px-[2px] text-right'>
                                    {
                                        editMode ?
                                            <input type="text" placeholder='Present Balance' value={accountBalance} onChange={(e) => { setAccountBalance(e.target.value) }} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                            :
                                            <span className=''>{commaNumber(accountBalance)}</span>
                                    }
                                </td>
                            </tr>
                            <tr >
                                <td colSpan={4} className=' border border-gray-500 px-[2px] text-right'>Total Amount in BDT</td>
                                <td className=' border border-gray-500 text-right px-1'>{commaNumber(accountBalance)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className=' text-center print:text-sm'>
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

                    <p className=' print:text-sm px-1 mt-5'>Total Amount in Equivalent USD (Exchange rate @ BDT..{usdCurrancyConversionRate}..../ 1 USD) {commaNumber(parseFloat(parseFloat(accountBalance) / parseFloat(usdCurrancyConversionRate)).toFixed(2))}</p>
                    <p className=' print:text-sm px-1 mt-3'>The customer is financially sound and solvent to the best of our knowledge.</p>
                    <p className=' print:text-sm px-1 mt-3'>The certificate is issued as per request of the customer and without any prejudice on the part of the Bank and its officials.</p>

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
                                <img src={sile} alt="" className='w-24 translate-y-5 translate-x-3' />
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