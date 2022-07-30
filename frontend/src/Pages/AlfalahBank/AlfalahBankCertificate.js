import React, { useState } from 'react'
import logo from "../../Photos/alfalah_bank/logo2.png";
import signature2 from "../../Photos/islami_bank/islami_bank_signature_2.png"
import signature1 from "../../Photos/islami_bank/islami_bank_signature.png"
import commaNumber from 'comma-number';
import bankSil from "../../Photos/alfalah_bank/sil.png";
import { ToWords } from 'to-words';
import SolvencyEditComponent from '../../Components/SolvencyEditComponent';

function AlfalahBankCertificate() {
    const [footerAddress, setFooterAddress] = useState("City Center,90/1,Motijheel C/A,Dhaka-1000")
    const [branchName, setBranchName] = useState("Gulshan Branch");;
    const [printDate, setPrintDate] = useState("July 14, 2022");
    const [printDate2, setPrintDate2] = useState("23.07.2022");
    const [ref, setRef] = useState("BAFL/GUL/CSD/2022/0724/61539");
    const [editMode, setEditMode] = useState(false);
    const [accountHolderName, setAccountHolderName] = useState("Mohd.Momiur Rahman")
    const [accountHolderAddress, setAccountHolderAddress] = useState("Kabir Mistrir Bari, JamidurPara, Word No-04, West Kalauzan, Kalauzan-4396, Lohagora, Chattogram")
    const [leftManagerName, setLeftManegerName] = useState("Mohammad Mahabub Alam");
    const [leftManagerPost, setLeftManegerPost] = useState("FAVP & Operation Manager");
    const [rightManagerName, setRightManegerName] = useState("Kazi Muzibul Islam");
    const [rightManagerPost, setRightManegerPost] = useState("EVP & Head of Branch");
    const [accountNumber, setAccountNumber] = useState("0702-2100183784")
    const [accountType, setAccountType] = useState("an Alfalah Premiup Plus")
    const [accountBalance, setAccountBalance] = useState("1000")
    const [usdCurrancyConversionRate, setUsdCurrancyConversionRate] = useState("87.60")
    const [accountOpeningDate, setAccountOpeningDate] = useState("04/08/2004")
    const toWords = new ToWords();
    const [bdWordConvertMoney, setBdWordConvertMoney] = useState("One Thousand");
    const [usdWordConvertMoney, setUsdWordConvertMoney] = useState("One Thousand");

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const convertNumberToWord = () => {
        setBdWordConvertMoney(toWords.convert(parseFloat(parseFloat(accountBalance).toFixed(2))))
        setUsdWordConvertMoney(toWords.convert(parseFloat(parseFloat(accountBalance / usdCurrancyConversionRate).toFixed(2))))
    }



    return (
        <div className=" w-full  relative ">
            <SolvencyEditComponent editMode={editMode} toggleEditMode={toggleEditMode} convertNumberToWord={convertNumberToWord} convertWord={true} />
            <div className=' px-16 pt-10'>
                <div className=' w-full mt-5 mb-16'>
                    <img src={logo} alt="" className=' w-40' />
                </div>
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

                <div className=' flex flex-col justify-center items-center mb-7 mt-12'>
                    <span className='font-semibold'>TO WHOM IT MAY CONCERN</span>
                    <span className=' w-[210px] h-[1px] bg-gray-700 -mt-[3px]'></span>
                </div>
                <div>
                    <p className=' text-justify'>This is to certify that
                        {
                            editMode ?
                                <input type="text" placeholder='Account Holder Name' value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {accountHolderName} </span>
                        }
                        of

                        {
                            editMode ?
                                <input type="text" placeholder='Account Holder Address' value={accountHolderAddress} onChange={(e) => setAccountHolderAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                :
                                <span className=' mx-1'>{accountHolderAddress} </span>
                        }
                        has been maintaining

                        {
                            editMode ?
                                <input type="text" placeholder='Account Number' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {accountType} </span>
                        }
                        Account relationship bearing number
                        {
                            editMode ?
                                <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {accountNumber} </span>
                        }
                        with Bank Alfalah Limited,
                        {
                            editMode ?
                                <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {branchName}</span>
                        }
                        with us since
                        {
                            editMode ?
                                <input type="text" placeholder='Account Opening Date' value={accountOpeningDate} onChange={(e) => setAccountOpeningDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {accountOpeningDate}. </span>
                        }
                        Derails is as follows:</p>
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
                        <tr className=' align-text-top print:text-[13px]'>
                            <th className=' border border-gray-600 pb-1 px-[2px]'>ACCOUNT NO.</th>
                            <th className=' border border-gray-600 pb-1 px-[2px w-[38%]'>
                                {
                                    editMode ?
                                        <input type="text" placeholder='Date' value={printDate2} onChange={(e) => setPrintDate2(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        :
                                        <span>BALANCE IN BD AS OF  {printDate2}</span>
                                }
                            </th>
                            <th className=' border border-gray-600 pb-1 px-[2px] w-[38%]'>
                                <p>BALANCE IN USD AS OF {printDate} </p>
                                <p>(USD 1 = BDT {usdCurrancyConversionRate})</p> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >

                            <td className=' border border-gray-600 px-[2px] text-center'>{accountNumber}</td>
                            <td className=' border border-gray-600 px-[2px] text-center'>
                                {
                                    editMode ?
                                        <input type="text" placeholder='Present Balance' value={accountBalance} onChange={(e) => setAccountBalance(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        :
                                        <span className=''>BDT: {commaNumber(accountBalance)}</span>
                                }
                            </td>
                            <td className=' border border-gray-600 px-1 text-center'>USD: {commaNumber(parseFloat(parseFloat(accountBalance) / parseFloat(usdCurrancyConversionRate)).toFixed(2))}</td>
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
                <p className=' leading-7 mt-5'>This certificate is issued at the request of our client and give without any risk and responsibility of the part of bank and of its officals.</p>
                <div className=' mt-14'>
                    <p className=' text-center'>For Bank ALFALAH Limited</p>
                    <p className=' text-center'>{branchName}</p>
                </div>

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
                            <img src={signature1} alt="" className=' w-44 absolute -top-28 print:-top-[55px]' />
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
            <div className=' w-full print:fixed bottom-0 font-sans px-16 py-5 print:text-[11px]' >
                <p className=''>{branchName}:
                    {
                        editMode ?
                            <input type="text" placeholder='footer address' value={footerAddress} onChange={(e) => setFooterAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                            :
                            <span>{footerAddress}</span>
                    }
                </p>
                <p className=' leading-[14px] mb-1'>T: +8802-8833112-4 Fax: +8802-8835097 bankalfalah.com/bd</p>
            </div>
        </div>
    )
}

export default AlfalahBankCertificate