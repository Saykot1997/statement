import React, { useState } from 'react'
import logo from "../../Photos/ebl_bank/logo.png"
import signature2 from "../../Photos/ebl_bank/signature2.png"
import signature1 from "../../Photos/ebl_bank/signature1.png"
import commaNumber from 'comma-number';
import midlogo from "../../Photos/ebl_bank/mid_logo.png"
import { ToWords } from 'to-words';
import SolvencyEditComponent from '../../Components/SolvencyEditComponent';

function EBLBankSolvency() {

    const [branchName, setBranchName] = useState("Lohagora");
    const [branchHouseNumber, setBranchHouseNumber] = useState("Plot 01,Tea Board building");
    const [branchRoad, setBranchRoad] = useState("Zindabazar Road");
    const [branchState, setBranchState] = useState("chouhatta point Sylhet");
    const [branchCountry, setBranchCountry] = useState("Bangladesh");;
    const [ref, setRef] = useState("SIBL/Loha/Ctg/2022/604");
    const [editMode, setEditMode] = useState(false);
    const [accountHolderName, setAccountHolderName] = useState("mohd.momiur rahman");
    const [accountHolderFotherName, setAccountHolderFotherName] = useState("mohd.kabir rahman");
    const [accountHolderAddress, setAccountHolderAddress] = useState("Mohona 5/1 Block C Pathantula, Sylhet");
    const [leftManagerName, setLeftManegerName] = useState("Mohammad Mahabub Alam");
    const [leftManagerPost, setLeftManegerPost] = useState("FAVP & Operation Manager");
    const [rightManagerName, setRightManegerName] = useState("Kazi Muzibul Islam");
    const [rightManagerPost, setRightManegerPost] = useState("EVP & Head of Branch");
    const [todaysDate, setTodaysDate] = useState("June 14,2022")
    const [accountNumber, setAccountNumber] = useState("0123456789123")
    const [balanceDate, setBalanceDate] = useState("13-June-2022")
    const [accountType, setAccountType] = useState("EBL Platinum Plus Savings")
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
        <div className=" w-full">
            <SolvencyEditComponent editMode={editMode} toggleEditMode={toggleEditMode} convertNumberToWord={convertNumberToWord} convertWord={true} />

            <div className=' p-20'>
                <div className=' w-full flex justify-end'>
                    <div className=' mr-5'>
                        <img src={logo} alt="" className=' w-24' />
                    </div>
                    <div className=' text-left'>
                        {
                            editMode ?

                                <div className=' flex items-center'>
                                    <span>Branch Name</span>
                                    <span className=' mx-2 '>:</span>
                                    <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                </div>

                                :
                                <p className=' border-y border-gray-400 text-sm pl-[1px] pr-8 font-medium uppercase text-gray-800'>{branchName} Branch</p>

                        }
                        {
                            editMode ?
                                <div className=' flex items-center'>
                                    <span>Branch House</span>
                                    <span className=' mx-2'>:</span>
                                    <input type="text" placeholder='Branch House' value={branchHouseNumber} onChange={(e) => setBranchHouseNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                </div>
                                :

                                <p className=' border-b border-gray-400 text-sm text-gray-600 pl-[1px] pr-8'>{branchHouseNumber}</p>
                        }
                        {
                            editMode ?
                                <div className=' flex items-center'>
                                    <span>Branch Road Number</span>
                                    <span className=' mx-1'>:</span>
                                    <input type="text" placeholder='Branch Road Number' value={branchRoad} onChange={(e) => setBranchRoad(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                </div>
                                :
                                <p className=' border-b border-gray-400 text-sm text-gray-600 pl-[1px] pr-8'>{branchRoad}</p>
                        }
                        {
                            editMode ?
                                <div className=' flex items-center'>
                                    <span>Branch State</span>
                                    <span className=' mx-1'>:</span>
                                    <input type="text" placeholder='Branch State' value={branchState} onChange={(e) => setBranchState(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                </div>
                                :

                                <p className=' border-b border-gray-400 text-sm text-gray-600 pl-[1px] pr-8'>{branchState}</p>
                        }

                        {
                            editMode ?

                                <div className=' flex items-center'>
                                    <span>Branch Country</span>
                                    <span className=' mx-1'>:</span>
                                    <input type="text" placeholder='Branch Country' value={branchCountry} onChange={(e) => setBranchCountry(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />

                                </div>
                                :
                                <p className=' border-b border-gray-400 text-sm text-gray-600 pl-[1px] pr-8'>{branchCountry}</p>

                        }

                    </div>
                </div>
                <div className=' mt-10 font-nuosu'>
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Date : </span>
                                <input type="text" placeholder='Date' value={todaysDate} onChange={(e) => setTodaysDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :
                            <p className=' mb-2'>Date: <span className=' ml-2'>{todaysDate}</span></p>
                    }
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Ref : </span>
                                <input type="text" placeholder='Ref' value={ref} onChange={(e) => setRef(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :
                            <p>Ref: {ref}</p>
                    }
                </div>

                <div className=' text-center mb-5 mt-[80px]'>
                    <span className=' border-b border-gray-800 font-semibold font-nuosu'>TO WHOM IT MAY CONCERN</span>
                </div>
                <div className=' my-10'>
                    <p className=' font-nuosu text-justify'>This is to certify that
                        {
                            editMode ?
                                <input type="text" placeholder='Name' value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' mx-1'>{accountHolderName}</span>
                        }
                        S/O
                        {
                            editMode ?
                                <input type="text" placeholder='Father Name' value={accountHolderFotherName} onChange={(e) => setAccountHolderFotherName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {accountHolderFotherName} </span>
                        }
                        Residence,

                        {
                            editMode ?
                                <input type="text" placeholder='Address' value={accountHolderAddress} onChange={(e) => setAccountHolderAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                :
                                <span className=' mx-1'>{accountHolderAddress}</span>
                        }
                        has been maintaining followning account with us since
                        {
                            editMode ?
                                <input type="text" placeholder='Date' value={accountOpeningDate} onChange={(e) => setAccountOpeningDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' mx-1'>{accountOpeningDate}</span>
                        }
                        .</p>
                </div>
                <div className=' w-full '>
                    <p className=' font-nuosu'>Details are given below:</p>
                    {
                        editMode &&
                        <div>
                            <span>USD Convert Rate : </span>
                            <input type="text" placeholder='USD Convert Rate' value={usdCurrancyConversionRate} onChange={(e) => setUsdCurrancyConversionRate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                        </div>
                    }
                    <table className=' w-full mt-3 font-nuosu'>
                        <thead>
                            <tr className=' bg-gray-300'>
                                <th className=' border border-gray-400 font-normal'>Account Number</th>
                                <th className=' border border-gray-400 font-normal w-[35%]'>Account Type</th>
                                <th className=' border border-gray-400 font-normal'>Account Currency</th>
                                <th className=' border border-gray-400 font-normal'>
                                    {
                                        editMode ?
                                            <div>
                                                <span>Balance date</span>
                                                <input type="text" placeholder='Date' value={balanceDate} onChange={(e) => setBalanceDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <p className=' mx-1'>Balance as of <span>{balanceDate}</span></p>
                                    }

                                </th>
                                <th className=' border border-gray-400 font-normal w-[16%]'>Equivalent in USD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className=' border border-gray-400 px-2'>
                                    {
                                        editMode ?
                                            <input type="text" placeholder='Account No' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                            :
                                            <span className=' mx-1'>{accountNumber}</span>
                                    }
                                </td>
                                <td className=' border border-gray-400 px-2 w-[35%]'>
                                    {
                                        editMode ?
                                            <input type="text" placeholder='Account Type' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                            :
                                            <span className=' mx-1'>{accountType}</span>
                                    }
                                </td>
                                <td className=' border border-gray-400 px-2 text-center'>BDT</td>
                                <td className=' border border-gray-400 px-2'>
                                    {
                                        editMode ?
                                            <input type="text" placeholder='Balance' value={accountBalance} onChange={(e) => setAccountBalance(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                            :
                                            <span className=' mx-1'>{commaNumber(accountBalance)}</span>
                                    }
                                </td>
                                <td className=' border border-gray-400 px-2 w-[16%] text-center'>{commaNumber(parseFloat(parseFloat(accountBalance) / parseFloat(usdCurrancyConversionRate)).toFixed(2))}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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

                <p className=' font-nuosu mt-8'>This certificate is issued at the request of the account holder without any risk and prejudice on the part of Eastern Bank Limitted or any of its officials.</p>

                <div className=' w-full flex justify-between items-center'>
                    <div className=' relative'>
                        <img src={signature1} alt="" className=' w-52 translate-y-8' />
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

                    <div>
                        <img src={midlogo} alt="" className=' w-28 translate-y-7' />
                    </div>

                    <div className='relative -translate-y-4'>
                        <img src={signature2} alt="" className=' w-40 translate-y-8' />
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
            <div className=' w-full print:fixed bottom-0 font-sans' >
                <p className=' text-center leading-[14px] text-sm print:text-[11px] text-gray-700 mb-3'>Phone (IP):02-09666777325, E-mail:info@ebl-bd.com, Contact Center:16230,+88-02-8332232 Web:www.ebl.com.bd, Swift:EBLDBDDH</p>
                <div className=' w-full bg-yellow-500 h-8'></div>
            </div>
        </div>
    )
}

export default EBLBankSolvency