import React, { useState } from 'react'
import logo from "../Photos/islami_bank_logo.png";
import signature2 from "../Photos/ucb_bank/sig 2.png";
import signature1 from "../Photos/ucb_bank/sif 1.png";
import footer from "../Photos/islami_bank_footer.png";
import commaNumber from 'comma-number';

function UCBbankCertificate() {


    const [branchName, setBranchName] = useState("Lohagora");
    const [branchCity, setBranchCity] = useState("Chattogram");
    const [branchPhone, setBranchPhone] = useState("01713-139033");
    const [printDate, setPrintDate] = useState("18.05.2022");
    const [ref, setRef] = useState("SIBL/Loha/Ctg/2022/604");
    const [editMode, setEditMode] = useState(false);
    const [accountHolderName, setAccountHolderName] = useState("Mohd.Momiur Rahman")
    const [accountHolderFotherName, setAccountHolderFotherName] = useState("Mr. Kabir Ahamed")
    const [accountHolderMotherName, setAccountHolderMotherName] = useState("Masudda Begum")
    const [accountHolderHouse, setAccountHolderHouse] = useState("Kabir Mistrir Bari")
    const [accountHoldervillage, setAccountHoldervillage] = useState("JamidurPara")
    const [accountHolderWard, setAccountHolderWard] = useState("04")
    const [accountHolderPost, setAccountHolderPost] = useState("West Kalauzan")
    const [accountHolderThana, setAccountHolderThana] = useState("Kalauzan-4396")
    const [accountNumber, setAccountNumber] = useState("0123456789")
    const [accountType, setAccountType] = useState("Sanchita Special deposit Scheme")
    const [accountBalance, setAccountBalance] = useState("1000")
    const [usdCurrancyConversionRate, setUsdCurrancyConversionRate] = useState("87.60")
    const [accountOpeningDate, setAccountOpeningDate] = useState("04/08/2004")

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const printWebPage = () => {
        window.print();
    }



    return (
        <div className=" w-full font-nuosu relative bg-water-mark bg-right-top bg-75% bg-no-repeat">
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
            <div className=' w-full flex justify-center '>
                <div className=' absolute top-0 left-5'>
                    <img src={logo} alt="" className=' w-40' />
                </div>
                <div className=' flex flex-col items-center w-full pt-10'>
                    <p className=' font-semibold text-xl'>Social Islami Bank Limited</p>
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
                                <span>Ref</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Print Date' value={printDate} onChange={(e) => setPrintDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :
                            <p>Date: {printDate}</p>
                    }
                </div>

                <div className=' text-center mb-5 mt-10'>
                    <span className=' border-b border-gray-800 font-semibold'>TO WHOME IT MAY CONCERN</span>
                </div>
                <div>
                    <p>This is to certify that
                        {
                            editMode ?
                                <input type="text" placeholder='Account Holder Name' value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' mx-1'>{accountHolderName}</span>
                        }
                        S/o
                        {
                            editMode ?
                                <input type="text" placeholder='Father Name' value={accountHolderFotherName} onChange={(e) => setAccountHolderFotherName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' mx-1'>{accountHolderFotherName}</span>
                        }

                        &

                        {
                            editMode ?
                                <input type="text" placeholder='Mother Name' value={accountHolderMotherName} onChange={(e) => setAccountHolderMotherName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' mx-1'>{accountHolderMotherName}</span>
                        }
                        , Address:-
                        {
                            editMode ?
                                <input type="text" placeholder='house' value={accountHolderHouse} onChange={(e) => setAccountHolderHouse(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' mx-1'>{accountHolderHouse}</span>
                        }
                        ,
                        {
                            editMode ?
                                <input type="text" placeholder='village' value={accountHoldervillage} onChange={(e) => setAccountHoldervillage(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' mx-1'>{accountHoldervillage}</span>
                        }
                        Word No-
                        {
                            editMode ?
                                <input type="text" placeholder='Word No' value={accountHolderWard} onChange={(e) => setAccountHolderWard(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' mx-1'>{accountHolderWard}</span>
                        }
                        {
                            editMode ?
                                <input type="text" placeholder='Post Office' value={accountHolderPost} onChange={(e) => setAccountHolderPost(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' mx-1'>{accountHolderPost}</span>
                        }
                        ,
                        {
                            editMode ?
                                <input type="text" placeholder='District' value={accountHolderThana} onChange={(e) => setAccountHolderThana(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' mx-1'>{accountHolderThana}</span>
                        }
                        ,{branchName},{branchCity} have been maintaing a

                        {
                            editMode ?
                                <input type="text" placeholder='Account Number' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' mx-1'>{accountType}</span>
                        }
                        Account brearing No.
                        {
                            editMode ?
                                <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' mx-1'>{accountNumber}</span>
                        }
                        since
                        {
                            editMode ?
                                <input type="text" placeholder='Account Number' value={accountOpeningDate} onChange={(e) => setAccountOpeningDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' mx-1'>{accountOpeningDate}</span>
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
                <table className=' w-full my-5'>
                    <thead>
                        <tr>
                            <th className=' border border-gray-800 pb-2 px-1'>S/N</th>
                            <th className=' border border-gray-800 pb-2 px-1'>Account No</th>
                            <th className=' border border-gray-800 pb-2 px-1'>Account Name</th>
                            <th className=' border border-gray-800 pb-2 px-1 w-[20%]'>Present Balance as on {printDate} (BDT)</th>
                            <th className=' border border-gray-800 pb-2 px-1 w-[20%]'>Equivalent to USD @{usdCurrancyConversionRate} (Approx.) as on {printDate}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td className=' border border-gray-800 px-2'>01</td>
                            <td className=' border border-gray-800 px-2'>{accountNumber}</td>
                            <td className=' border border-gray-800 px-2'>{accountHolderName}</td>
                            <td className=' border border-gray-800 px-2 w-[20%]'>
                                {
                                    editMode ?
                                        <input type="text" placeholder='Present Balance' value={accountBalance} onChange={(e) => setAccountBalance(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        :
                                        <span className=' mx-1'>BDT:{accountBalance}</span>
                                }
                            </td>
                            <td className=' border border-gray-800 px-2 w-[20%]'>USD: {commaNumber(parseFloat(parseFloat(accountBalance) / parseFloat(usdCurrancyConversionRate)).toFixed(2))}</td>
                        </tr>
                        <tr >
                            <td colSpan="3" className=' border border-gray-800 text-center font-semibold'>Total</td>
                            <td className=' border border-gray-800 font-semibold text-right px-2 w-[20%]'>BDT:{commaNumber(accountBalance)}</td>
                            <td className=' border border-gray-800 font-semibold text-right px-2 w-[20%]'>USD: {commaNumber(parseFloat(parseFloat(accountBalance) / parseFloat(usdCurrancyConversionRate)).toFixed(2))}</td>
                        </tr>
                    </tbody>
                </table>

                <p className=' my-3'>To the best of our knowledge the client is financially sound and solvent.</p>
                <p className=' mb-4'>We wish him for success.</p>
                <p>To the best of our knowledge, the client is financially sound and solvent.</p>
                <p className=' font-semibold mt-8 my-5'>FOR UNITED COMMERCIAL BANK PLC</p>

                <div className=' flex my-16'>
                    <div className=' w-1/2 relative'>
                        <div>
                            <img src={signature2} alt="" className=' w-32 absolute -top-12' />
                            <p>Mohammad Mahabub Alam</p>
                            <p>FAVP & Operation Manager</p>
                        </div>
                    </div>
                    <div className=' w-1/2 flex justify-center relative'>
                        <div>
                            <img src={signature1} alt="" className=' w-36 absolute -top-16' />
                            <p>Kazi Muzibul Islam</p>
                            <p>EVP & Head of Branch</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full print:fixed bottom-0 font-sans' >
                <p className=' text-center'><span className=' font-semibold'>Social Islami Bank Limited,</span>Corporate Office: City Center,90/1,Motijheel C/A,Dhaka-1000</p>
                <p className=' text-center leading-[14px] mb-1'>Phone:88 02 09612001122, Fax:88 02 9568098, E-mail:info@sibl-bd.com</p>
                <img src={footer} alt="" />
            </div>
        </div>
    )
}

export default UCBbankCertificate