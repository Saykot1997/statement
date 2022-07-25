import React, { useState } from 'react'
import logo from "../../Photos/ab_bank/solvency_logo.png";
import signature2 from "../../Photos/southeast_bank/sig1.png"
import commaNumber from 'comma-number';
import SolvencyEditComponent from '../../Components/SolvencyEditComponent';

function ABBankCertificate() {

    const [branchName, setBranchName] = useState("Nawabpur Branch");
    const [branchAddress, setBranchAddress] = useState(`House No. 191, Gulshan North Avenue Gulshan No. 2 Dhaka 1212`);
    const [branchAddress2, setBranchAddress2] = useState(`'Equity Anitri', 32, H.S.S. Road, Kotwali, Chattogram, Bangladesh`);
    const [printDate, setPrintDate] = useState("05/06/2022");
    const [ref, setRef] = useState("ABBL/STR/AOP-2/2022/704");
    const [serviceHolder, setServiceHolder] = useState("Visa Consultant");
    const [serviceHolderPosition, setServiceHolderPosition] = useState("UAE High Commission");
    const [editMode, setEditMode] = useState(false);
    const [accountHolderName, setAccountHolderName] = useState(`AL-HAJ SK MAMTAZUDDIN AHMED`)
    const [leftManagerName, setLeftManegerName] = useState("Mohammad Mahabub Alam");
    const [leftManagerPost, setLeftManegerPost] = useState("FAVP & Operation Manager");
    const [accountNumber, setAccountNumber] = useState("4103-223549-300")
    const [accountBalance, setAccountBalance] = useState("1000")
    const [usdCurrancyConversionRate, setUsdCurrancyConversionRate] = useState("87.60")

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }


    return (
        <div className=" w-full relative">
            <SolvencyEditComponent editMode={editMode} toggleEditMode={toggleEditMode} convertNumberToWord={"not require"} convertWord={false} />
            <div className=' w-full pt-6'>
                <div>
                    <img src={logo} alt="" className=' w-64' />
                </div>
                <div className=' print:text-sm px-[73px] '>
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Ref</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Branch Ref' value={ref} onChange={(e) => setRef(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :

                            <p className=' mb-3 mt-2'>{ref}</p>
                    }
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Date</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Print Date' value={printDate} onChange={(e) => setPrintDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :
                            <p className=' mb-3'>{printDate}</p>
                    }
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Service Holder</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Service Holder' value={serviceHolder} onChange={(e) => setServiceHolder(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :
                            <p className=' mb-2'>{serviceHolder}</p>
                    }
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Service Holder Opsition</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Service Holder Position' value={serviceHolderPosition} onChange={(e) => setServiceHolderPosition(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :
                            <p className=' mb-3'>{serviceHolderPosition}</p>
                    }
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Address</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Address' value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                            </div>
                            :
                            <p className=' w-40'>{branchAddress}</p>
                    }
                    {
                        editMode ?
                            <div className=' flex items-center'>
                                <span>Subject: Solvency Certificate of</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Name' value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                            </div>
                            :
                            <p className=' mt-8'>Subject: Solvency Certificate of {accountHolderName}</p>
                    }
                    <p className=' mt-5'>This is to certify that the above named client has been maintaining the following account with our Branch:</p>
                </div>
            </div>

            {
                editMode &&

                <div className=' flex items-center'>
                    <span>USD Curarncy Rete:</span>
                    <span className=' mx-2'>:</span>
                    <input type="text" placeholder='Print Date' value={usdCurrancyConversionRate} onChange={(e) => setUsdCurrancyConversionRate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                </div>
            }

            <div className=' pl-2 pr-36'>
                <table className=' w-full mt-3 print:text-sm'>
                    <tbody>
                        <tr className=' font-normal'>
                            <td className=' border border-gray-600 px-1 text-gray-900'>NAME</td>
                            <td className=' border border-gray-600 px-1 text-gray-900'>A/C NUMBER</td>
                            <td className=' border border-gray-600 px-1 text-gray-900 w-[28%]'>
                                {
                                    editMode ?
                                        <div>
                                            <span>Balance</span>
                                            <input type="text" placeholder='Print Date' value={printDate} onChange={(e) => setPrintDate(e.target.value)} className=' rounded p-[2px] my-[2px] border border-blue-500 focus:outline-none block' />
                                        </div>
                                        :
                                        <div className=''>
                                            <p>BALANCE ON {printDate}</p>

                                        </div>
                                }
                            </td>
                        </tr>
                        <tr className=' align-text-top' >
                            <td className=' border border-gray-500 px-1 '>{accountHolderName}</td>
                            <td className=' border border-gray-500 px-1 '>{
                                editMode ?

                                    <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                    :
                                    <span className=''>{accountNumber} </span>}</td>
                            <td className=' border border-gray-500 px-1 '>
                                {
                                    editMode ?
                                        <input type="text" placeholder='Present Balance' value={accountBalance} onChange={(e) => { setAccountBalance(e.target.value) }} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        :
                                        <span className=''>{commaNumber(accountBalance)}tk (BDT) equivalent to {commaNumber(parseFloat(parseFloat(accountBalance) / parseFloat(usdCurrancyConversionRate)).toFixed(2))}$(USD)</span>
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className=' px-[73px] print:text-sm'>

                <div className=' mt-10'>
                    <p>To the best of our knowledge the Client is financially solvent & sound" Our knowledge on the solvency of the client is based upon the current balance of the above account only and no other information has been taken into consideration.</p>
                </div>

                <p className=' mt-5'>This certificate is being issued at the request of the above client without any risk and responsibility on the part of the Bank or any of its officials.</p>

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
                        {/* <img src={bankSil} alt="" className="w-24" /> */}
                    </div>
                </div>

            </div>
            <div className=' p-5 print:fixed bottom-0 print:text-sm w-full '>
                {
                    editMode ?
                        <div className=' flex'>
                            <div className=' flex items-center'>
                                <span>Branch Name</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                            </div>
                            <div className=' flex items-center'>
                                <span>Branch Address</span>
                                <span className=' mx-2'>:</span>
                                <input type="text" placeholder='Branch Name' value={branchAddress2} onChange={(e) => setBranchAddress2(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                            </div>
                        </div>

                        :
                        <p className=' text-center'><span className=' font-medium'>{branchName} :</span>{branchAddress2}</p>

                }
                <p className=' text-center'>Telephone : 616665, 613376, 615029 (031), Fax : 615029, E-mail : str@abbl.com, Swift : ABBLBDDH103</p>
            </div>
        </div>
    )
}

export default ABBankCertificate