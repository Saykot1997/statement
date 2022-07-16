import React, { useState } from 'react'
import logo from "../../Photos/city_bank/logo1.png";
import signature2 from "../../Photos/city_bank/sig 2.png"
import signature1 from "../../Photos/city_bank/sig 1.png"
import commaNumber from 'comma-number';
import bankSil from "../../Photos/city_bank/sil.png";
import { ToWords } from 'to-words';

function CityBankCertificate() {

    const [branchName, setBranchName] = useState("Urrara Branch");
    const [branchAddress, setBranchAddress] = useState("City Bank Center, 136, Gulshan Avenue,Gulshan-2,Dhaka-1212,Bangladesh");
    const [sequenceNumber, setSequenceNumber] = useState("CBL/PALLABI BRANCH/Certificate/2022/1870");
    const [printDate, setPrintDate] = useState("18.05.2022");
    const [editMode, setEditMode] = useState(false);
    const [swiftCode, setSwiftCode] = useState("CIBLBDDH");
    const [accountHolderName, setAccountHolderName] = useState("Mohd.Momiur Rahman")
    const [accountHolderFotherName, setAccountHolderFotherName] = useState("Mr. Kabir Ahamed")
    const [accountHolderAddress, setAccountHolderAddress] = useState("House:1324,Rd:13,Avenue:02 Mirpur Dohs, Dhaka,")
    const [accountNumber, setAccountNumber] = useState("8790123456789")
    const [accountType, setAccountType] = useState("Monthly Savings Scheme")
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
        <div className=" w-full font-nuosu relative print:text-[13px]">
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
            <div className=' w-full flex items-end px-14 pt-8'>
                <div className=''>
                    <img src={logo} alt="" className=' w-36' />
                </div>
                <div className=' ml-3 mr-2 h-8 w-[1px] bg-gray-500'></div>
                <div className=' font-sans'>
                    <p className=''>The City Bank Limited</p>
                    {
                        editMode ?

                            <div className=' flex items-center'>
                                <span>Branch Address</span>
                                <span className=' mx-2 '>:</span>
                                <input type="text" placeholder='Branch Name' value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                            </div>

                            :

                            <p className=''>Head Office : {branchAddress}</p>
                    }
                </div>
            </div>
            <div className=' px-16 mt-3'>
                {
                    editMode ?
                        <div className=' flex items-center'>
                            <span>Sequence No</span>
                            <span className=' mx-2 '>:</span>
                            <input type="text" placeholder='Sequence Number' value={sequenceNumber} onChange={(e) => setSequenceNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                        </div>
                        :
                        <p>Sequence No.{sequenceNumber}</p>


                }
            </div>
            <div className=' px-16 pt-14'>
                <div>

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

                <div className=' text-center mb-5 mt-6'>
                    <span className=' border-b border-gray-800 font-semibold text-gray-800'>To whom it may concern</span>
                </div>
                <div>
                    <p className=' text-justify print:leading-7'>This is to certify that,
                        {
                            editMode ?
                                <input type="text" placeholder='Account Holder Name' value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {accountHolderName}, </span>
                        }
                        S/O
                        {
                            editMode ?
                                <input type="text" placeholder='Father Name' value={accountHolderFotherName} onChange={(e) => setAccountHolderFotherName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {accountHolderFotherName} </span>
                        }
                        of
                        {
                            editMode ?
                                <input type="text" placeholder='Account Holder Address' value={accountHolderAddress} onChange={(e) => setAccountHolderAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                :
                                <span className=' mx-1'>{accountHolderAddress} </span>
                        }
                        has been maintaining following account with our

                        {
                            editMode ?
                                <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {branchName} </span>
                        }

                        since
                        {
                            editMode ?
                                <input type="text" placeholder='Account Number' value={accountOpeningDate} onChange={(e) => setAccountOpeningDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {accountOpeningDate} </span>
                        }
                        and the conduct of the account has been noted satisfactory. Details of the account are appended below:</p>
                </div>
                {
                    editMode &&

                    <div className=' flex items-center mt-[2px]'>
                        <span>USD Curarncy Rete:</span>
                        <span className=' mx-2'>:</span>
                        <input type="text" placeholder='Print Date' value={usdCurrancyConversionRate} onChange={(e) => setUsdCurrancyConversionRate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                    </div>
                }
                <table className=' w-full my-5 mb-0'>
                    <thead>
                        <tr className=' align-text-top'>
                            <th className=' border border-gray-800 pb-1 text-gray-800 px-[2px] text-left w-[28%]'>Nature of Account</th>
                            <th className=' border border-gray-800 pb-1 text-gray-800 px-[2px] text-left w-[22%]'>Account No</th>
                            <th className=' border border-gray-800 pb-1 text-gray-800 px-[2px] text-left'>Present Balance (BDT)</th>
                            <th className=' border border-gray-800 pb-1 text-gray-800 px-[2px] text-left'>Equivalent to USD</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td className=' border border-gray-800 px-1'>
                                {
                                    editMode ?
                                        <input type="text" placeholder='Account Type' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-1 border border-blue-500 focus:outline-none w-full' />
                                        :
                                        <span className=''>{accountType}</span>
                                }
                            </td>
                            <td className=' border border-gray-800 px-1 text-center'>
                                {
                                    editMode ?
                                        <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-1 border border-blue-500 focus:outline-none w-full' />
                                        :
                                        <span className=''>{accountNumber}</span>
                                }
                            </td>
                            <td className=' border border-gray-800 px-1 text-center'>
                                {
                                    editMode ?
                                        <input type="text" placeholder='Present Balance' value={accountBalance} onChange={(e) => setAccountBalance(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                        :
                                        <span className=''>{commaNumber(parseFloat(accountBalance).toFixed(2))}</span>
                                }
                            </td>
                            <td className=' border border-gray-800 px-1 text-center'>{commaNumber(parseFloat(parseFloat(accountBalance) / parseFloat(usdCurrancyConversionRate)).toFixed(2))}</td>
                        </tr>
                        <tr >
                            <td colSpan={2} className=' border border-gray-800 text-center font-semibold text-gray-800'>Total</td>
                            <td className=' border border-gray-800 font-semibold text-gray-800 text-right px-1 '>{commaNumber(parseFloat(accountBalance).toFixed(2))}</td>
                            <td className=' border border-gray-800 font-semibold text-gray-800 text-right px-1'>{commaNumber(parseFloat(parseFloat(accountBalance) / parseFloat(usdCurrancyConversionRate)).toFixed(2))}</td>
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
                            <p>In word: <span className=' font-semibold text-gray-800'>BDT.</span>{bdWordConvertMoney} only or <span className=' font-semibold text-gray-800 text-gray-800'>USD.</span>{usdWordConvertMoney} only.</p>
                    }
                </div>
                <p className=' leading-6 pr-16 mt-6'>This certificate is issued at the request of our valued account holder based on the accounts statement and without assuming any risk or prejudice on the part of this bank or any of its officials.</p>

                <div className=' flex mt-40 pr-10'>
                    <div className=' w-1/2 relative'>
                        <div>
                            <img src={signature1} alt="" className=' w-44 absolute -top-16' />
                            <span>Authorized Signature</span>
                        </div>
                    </div>
                    <div>
                        <img src={bankSil} alt="" className="w-20" />
                    </div>
                    <div className=' w-1/2 flex justify-end relative'>
                        <div>
                            <img src={signature2} alt="" className=' w-44 absolute -top-12 rotate-6 -translate-x-4' />
                            <span>Authorized Signature</span>
                        </div>
                    </div>
                </div>
                <div className=' w-full pb-10 print:fixed bottom-0 font-sans'>
                    <div>
                        <p>Phone:58813488, 58814375, 58813126</p>
                        <p>Fax: 880-2-9884446; G.P.O Box No. 3381, Dhaka</p>
                        <p>E-mail:info@thecitybank.com;Web:www.thecitybank.com;SWIFT:
                            {
                                editMode ?
                                    <input type="text" placeholder='Swift Code' value={swiftCode} onChange={(e) => setSwiftCode(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                    :
                                    <span className=''>{swiftCode}</span>
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityBankCertificate