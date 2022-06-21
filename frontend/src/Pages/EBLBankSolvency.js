import React, { useState } from 'react'
import logo from "../Photos/ebl_bank/logo.png"
import signature2 from "../Photos/ebl_bank/signature2.png"
import signature1 from "../Photos/ebl_bank/signature1.png"
import footer from "../Photos/islami_bank_footer.png";

function EBLBankSolvency() {


    const [branchName, setBranchName] = useState("Lohagora");
    const [branchCity, setBranchCity] = useState("Chattogram");
    const [branchPhone, setBranchPhone] = useState("01713-139033");
    const [printDate, setPrintDate] = useState("18.05.20222");
    const [ref, setRef] = useState("Ref:SIBL/Loha/Ctg/2022/604");


    const [editMode, setEditMode] = useState(false);
    const [branchAddress, setBranchAddress] = useState("Shantinagar, Green City Edge, Bangladesh")
    const [branchEmail, setBranchEmail] = useState("example@gamil.com")
    const [pabx, setPabx] = useState("972438,9347539,9348753")
    const [swift, setSwift] = useState("JAMUNABANK")
    const [branchWord, setBranchWord] = useState("19")
    const [branchState, setBranchState] = useState("Dhaka")
    const [jbl, setJbl] = useState("JBL/SNB/GB/2020/522")
    const [accountHolderName, setAccountHolderName] = useState("mohd.momiur rahman")
    const [accountHolderAddress, setAccountHolderAddress] = useState("31/1 SARAT GUPTA ROAD, SHANTINAGAR, GREEN CITY EDGE, BANGLADESH")
    const [todaysDate, setTodaysDate] = useState("May 22,2020")
    const [accountNumber, setAccountNumber] = useState("0123456789")
    const [accountType, setAccountType] = useState("Savings")
    const [accountBalance, setAccountBalance] = useState("1000")
    const [usdCurrancyConversionRate, setUsdCurrancyConversionRate] = useState("87.60")
    const [accountOpeningDate, setAccountOpeningDate] = useState("04/08/2004")
    const [oldAccountNumber, setOldAccountNumber] = useState("0123456789")

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const printWebPage = () => {
        window.print();
    }



    return (
        <div className=" w-full">
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

            <div className=' p-20'>
                <div className=' w-full flex justify-end'>
                    <div className=' mr-5'>
                        <img src={logo} alt="" className=' w-24' />
                    </div>
                    <div className=' text-left'>
                        <p className=' border-y border-gray-400 text-sm pl-[1px] pr-8 font-medium uppercase text-gray-800'>Chouhatta Branch</p>
                        <p className=' border-b border-gray-400 text-sm text-gray-600 pl-[1px] pr-8'>Plot 01,Tea Board Building</p>
                        <p className=' border-b border-gray-400 text-sm text-gray-600 pl-[1px] pr-8'>Zindabazar Road</p>
                        <p className=' border-b border-gray-400 text-sm text-gray-600 pl-[1px] pr-8'>chouhatta point Sylhet</p>
                        <p className=' border-b border-gray-400 text-sm text-gray-600 pl-[1px] pr-8'>Bangladesh</p>
                    </div>
                </div>
                <div className=' mt-10'>
                    <p>Date: June 14,2022</p>
                    <p>Ref:</p>
                </div>

                <div className=' text-center mb-5 mt-16'>
                    <span className=' border-b border-gray-800 font-semibold font-nuosu'>TO WHOME IT MAY CONCERN</span>
                </div>
                <div className=' my-10'>
                    <p className=' font-nuosu'>This is to certify that Mr. Ikram Rashid, Jounobs Residence, Mohona 5/1 Block C Pathantula, Sylhet has been,maintaining followning account(s) with us since 18-Feb-2020.</p>
                </div>
                <div className=' w-full '>
                    <p className=' font-nuosu'>Details are given below:</p>
                    <table className=' w-full my-5 font-nuosu'>
                        <thead>
                            <tr className=' bg-gray-300'>
                                <th className=' border border-gray-800 font-normal'>Account No</th>
                                <th className=' border border-gray-800 font-normal w-[35%]'>Account Type</th>
                                <th className=' border border-gray-800 font-normal'>Account Currency</th>
                                <th className=' border border-gray-800 font-normal'>Balance as of 13-June-2022</th>
                                <th className=' border border-gray-800 font-normal w-[16%]'>Equivalent in USD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className=' border border-gray-800 px-2'>0983093481093428</td>
                                <td className=' border border-gray-800 px-2 w-[35%]'>EBL Platinum Plus Savings</td>
                                <td className=' border border-gray-800 px-2 text-center'>BDT</td>
                                <td className=' border border-gray-800 px-2'>44,23,240.00</td>
                                <td className=' border border-gray-800 px-2 w-[16%] text-center'>50,379.45</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className=' font-nuosu'>This certificate is issued at the request of the account holder without any risk and prejudice on the part of Eastern Bank Limitted or any of its officials.</p>
                <div className=' w-full flex justify-between mt-28 print:absolute bottom-24 left-0 print:px-20'>
                    <div>
                        <img src={signature1} alt="" className=' w-[66%] -mt-6' />
                    </div>
                    <div className=' flex justify-end'>
                        <img src={signature2} alt="" className=' w-[66%]' />
                    </div>
                </div>
            </div>
            <div className=' w-full print:fixed bottom-0 font-sans' >
                <p className=' text-center leading-[14px] mb-1 text-sm print:text-[12px] text-gray-700'>Phone:0821 -723242, E-mail:info@ebl-bd.com, Contact Center:16230,+88-02-8332232 Web:www.ebl.com.bd, Swift:EBLDBDDH</p>
                <div className=' w-full bg-yellow-500 h-8'></div>
            </div>
        </div>
    )
}

export default EBLBankSolvency