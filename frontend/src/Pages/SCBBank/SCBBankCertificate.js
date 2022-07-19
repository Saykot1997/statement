import React, { useState } from 'react'
import logo from "../../Photos/scb_bank/logo.png";
import signature2 from "../../Photos/scb_bank/sig1.png"
import signature1 from "../../Photos/scb_bank/sig2.png"
import commaNumber from 'comma-number';
import bankSil from "../../Photos/scb_bank/sil.png";
import { ToWords } from 'to-words';

function SCBBankCertificate() {

    const [footerContractInfo, setFooterContractInfo] = useState("Phone:88 02 09612001122, Fax:88 02 9568098, E-mail:info@scb-bd.com")
    const [footerAddress, setFooterAddress] = useState("City Center,90/1,Motijheel C/A,Dhaka-1000")
    const [branchName, setBranchName] = useState("Lohagora Branch");
    const [branchCity, setBranchCity] = useState("Chattogram");
    const [branchPhone, setBranchPhone] = useState("01713-139033");
    const [printDate, setPrintDate] = useState("18.05.2022");
    const [ref, setRef] = useState("SIBL/Loha/Ctg/2022/604");
    const [editMode, setEditMode] = useState(false);
    const [accountHolderName, setAccountHolderName] = useState("Mohd.Momiur Rahman")
    const [accountHolderFotherName, setAccountHolderFotherName] = useState("Mr. Kabir Ahamed")
    const [accountHolderMotherName, setAccountHolderMotherName] = useState("Masudda Begum")
    const [accountHolderAddress, setAccountHolderAddress] = useState("Kabir Mistrir Bari, JamidurPara, Word No-04, West Kalauzan, Kalauzan-4396, Lohagora, Chattogram")
    const [leftManagerName, setLeftManegerName] = useState("Mohammad Mahabub Alam");
    const [leftManagerPost, setLeftManegerPost] = useState("FAVP & Operation Manager");
    const [rightManagerName, setRightManegerName] = useState("Kazi Muzibul Islam");
    const [rightManagerPost, setRightManegerPost] = useState("EVP & Head of Branch");
    const [accountNumber, setAccountNumber] = useState("0123456789")
    const [accountType, setAccountType] = useState("Sanchita Special Deposit Scheme")
    const [accountBalance, setAccountBalance] = useState("1000")
    const [usdCurrancyConversionRate, setUsdCurrancyConversionRate] = useState("87.60")
    const [accountOpeningDate, setAccountOpeningDate] = useState("04/08/2004")
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
            <div className=' w-full flex justify-center pt-6 '>
                <div className=' flex flex-col items-center w-full'>
                    <div className=''>
                        <img src={logo} alt="" className=' w-60' />
                    </div>
                    <p className=' font-semibold text-[22px]'>Standard Chartered Bank Limited</p>
                    {
                        editMode ?
                            <div>
                                <div className=' flex items-center'>
                                    <span>Branch Name</span>
                                    <span className=' mx-2 '>:</span>
                                    <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                </div>
                                <div className=' flex items-center'>
                                    <span>Branch City</span>
                                    <span className=' mx-2'>:</span>
                                    <input type="text" placeholder='Branch City' value={branchCity} onChange={(e) => setBranchCity(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                </div>
                            </div>
                            :

                            <p className=' font-semibold text-lg'>{branchName}, {branchCity}.</p>
                    }
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Branch Phone</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Branch Phone' value={branchPhone} onChange={(e) => setBranchPhone(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :

                            <p className='font-semibold'>Phone No. {branchPhone}</p>
                    }
                </div>
            </div>
            <div className=' px-16 pt-10'>
                <div>
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Ref</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Branch Ref' value={ref} onChange={(e) => setRef(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :

                            <p>Ref:{ref}</p>
                    }
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Date</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Print Date' value={printDate} onChange={(e) => setPrintDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :
                            <p>Date: {printDate}</p>
                    }
                </div>

                <div className=' text-center mb-5 mt-10'>
                    <span className=' border-b border-gray-800 font-semibold'>TO WHOM IT MAY CONCERN</span>
                </div>
                <div>
                    <p className=' text-justify'>This is to certify that
                        {
                            editMode ?
                                <input type="text" placeholder='Account Holder Name' value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' font-semibold'> {accountHolderName}, </span>
                        }
                        S/O
                        {
                            editMode ?
                                <input type="text" placeholder='Father Name' value={accountHolderFotherName} onChange={(e) => setAccountHolderFotherName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {accountHolderFotherName} </span>
                        }

                        &

                        {
                            editMode ?
                                <input type="text" placeholder='Mother Name' value={accountHolderMotherName} onChange={(e) => setAccountHolderMotherName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' mx-1'>{accountHolderMotherName}, </span>
                        }
                        Address:-
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
                        Account bearing No.
                        {
                            editMode ?
                                <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''>{accountNumber} </span>
                        }
                        since
                        {
                            editMode ?
                                <input type="text" placeholder='Account Number' value={accountOpeningDate} onChange={(e) => setAccountOpeningDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {accountOpeningDate} </span>
                        }
                        with our branch. The details of the aforementioned account is given below:</p>
                </div>
                {
                    editMode &&

                    <div className=' flex items-center'>
                        <span>USD Curarncy Rete:</span>
                        <span className=' mx-2'>:</span>
                        <input type="text" placeholder='Print Date' value={usdCurrancyConversionRate} onChange={(e) => setUsdCurrancyConversionRate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                    </div>
                }
                <table className=' w-full my-5 mb-0'>
                    <thead>
                        <tr className=' align-text-top'>
                            <th className=' border border-gray-800 pb-1 px-[2px]'>S/N</th>
                            <th className=' border border-gray-800 pb-1 px-[2px]'>Account No</th>
                            <th className=' border border-gray-800 pb-1 px-[2px]'>Account Name</th>
                            <th className=' border border-gray-800 pb-1 px-[2px] w-[20%]'>Present Balance as on {printDate} (BDT)</th>
                            <th className=' border border-gray-800 pb-1 px-[2px] w-[20%]'>Equivalent to USD @{usdCurrancyConversionRate} (Approx.) as on {printDate}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td className=' border border-gray-800 px-[2px]'>01</td>
                            <td className=' border border-gray-800 px-[2px]'>{accountNumber}</td>
                            <td className=' border border-gray-800 px-[2px]'>{accountHolderName}</td>
                            <td className=' border border-gray-800 px-[2px] w-[20%] text-right'>
                                {
                                    editMode ?
                                        <input type="text" placeholder='Present Balance' value={accountBalance} onChange={(e) => setAccountBalance(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        :
                                        <span className=''>BDT:{commaNumber(accountBalance)}</span>
                                }
                            </td>
                            <td className=' border border-gray-800 px-1 w-[20%] text-right'>USD: {commaNumber(parseFloat(parseFloat(accountBalance) / parseFloat(usdCurrancyConversionRate)).toFixed(2))}</td>
                        </tr>
                        <tr >
                            <td colSpan="3" className=' border border-gray-800 text-center font-semibold'>Total</td>
                            <td className=' border border-gray-800 font-semibold text-right px-1 w-[20%]'>BDT:{commaNumber(accountBalance)}</td>
                            <td className=' border border-gray-800 font-semibold text-right px-1 w-[20%]'>USD: {commaNumber(parseFloat(parseFloat(accountBalance) / parseFloat(usdCurrancyConversionRate)).toFixed(2))}</td>
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

                <p className=' my-3'>To the best of our knowledge the client is financially sound and solvent.</p>
                <p className=' mb-4'>We wish him for success.</p>
                <p>This certificate is being issued at the specific request of the client without any prejudice and obligation on the part of bank or any of its officals.</p>
                <p className=' font-semibold mt-8 my-5 italic'>For Standard Chartered Bank Limited</p>

                <div className=' flex justify-between items-center mt-24'>
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
                    <div>
                        <img src={bankSil} alt="" className="w-20" />
                    </div>
                    <div className='flex justify-center relative'>
                        <div>
                            <img src={signature1} alt="" className=' w-36 absolute -top-28 print:-top-[100ppx]' />
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
            <div className=' w-full print:fixed bottom-0 font-sans pb-3' >
                <p className=' text-center '><span className=' font-semibold'>Standard Chartered Bank Limited,</span>Corporate Office:
                    {
                        editMode ?
                            <input type="text" placeholder='footer address' value={footerAddress} onChange={(e) => setFooterAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                            :
                            <span>{footerAddress}</span>
                    }
                </p>
                {
                    editMode ? <input type="text" placeholder='footer address' value={footerContractInfo} onChange={(e) => setFooterContractInfo(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                        :
                        <p className=' text-center leading-[14px] mb-1'>{footerContractInfo}</p>
                }
            </div>
        </div>
    )
}

export default SCBBankCertificate