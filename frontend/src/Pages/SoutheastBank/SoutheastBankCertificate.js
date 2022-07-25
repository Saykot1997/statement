import React, { useState } from 'react'
import logo from "../../Photos/southeast_bank/logo.png";
import signature2 from "../../Photos/southeast_bank/sig1.png"
import signature1 from "../../Photos/southeast_bank/sig2.png"
import footer from "../../Photos/southeast_bank/footer.png";
import commaNumber from 'comma-number';
import bankSil from "../../Photos/southeast_bank/sil.png";
import { ToWords } from 'to-words';
import SolvencyEditComponent from '../../Components/SolvencyEditComponent';

function SoutheastBankCertificate() {

    const [branchName, setBranchName] = useState("Uttara Branch");
    const [branchAddress, setBranchAddress] = useState(`"ARHAMS" plot # 79, Sector-07, Dhaka- Mymensing Highway, Azimpur Uttara, Dhaka-1230, Bangladesh`);
    const [printDate, setPrintDate] = useState("June 16, 2022");
    const [ref, setRef] = useState("SEBL/UTTARA/GB/2022/193");
    const [editMode, setEditMode] = useState(false);
    const [accountHolderName, setAccountHolderName] = useState("Mohd.Momiur Rahman")
    const [accountHolderAddress, setAccountHolderAddress] = useState("Kabir Mistrir Bari, JamidurPara, Word No-04, West Kalauzan, Kalauzan-4396, Lohagora, Chattogram")
    const [leftManagerName, setLeftManegerName] = useState("Mohammad Mahabub Alam");
    const [leftManagerPost, setLeftManegerPost] = useState("FAVP & Operation Manager");
    const [rightManagerName, setRightManegerName] = useState("Kazi Muzibul Islam");
    const [rightManagerPost, setRightManegerPost] = useState("EVP & Head of Branch");
    const [accountNumber, setAccountNumber] = useState("0123456789")
    const [accountType, setAccountType] = useState("savings")
    const [accountBalance, setAccountBalance] = useState("1000")
    const [usdCurrancyConversionRate, setUsdCurrancyConversionRate] = useState("87.60")
    const toWords = new ToWords();

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const printWebPage = () => {
        window.print();
    }




    return (
        <div className=" w-full font-nuosu relative">
            <SolvencyEditComponent editMode={editMode} toggleEditMode={toggleEditMode} convertNumberToWord={"not require"} convertWord={false} />

            <div className=' w-full flex justify-between px-10 pt-10'>
                <div className=' w-[80%]'>
                    <img src={logo} alt="" className=' w-64' />
                </div>
                <div className=' print:text-[10px] print:leading-[12px] pl-28'>

                    {
                        editMode ?

                            <div className=' flex items-center'>
                                <span>Branch Name</span>
                                <span className=' mx-2 '>:</span>
                                <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>

                            :

                            <p className=' font-semibold'>{branchName}</p>
                    }

                    {
                        editMode ?

                            <div className=' flex items-center'>
                                <span>Branch Address</span>
                                <span className=' mx-2 '>:</span>
                                <input type="text" placeholder='Branch Address' value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :
                            <p className=''>{branchAddress}</p>
                    }


                    <div className=' flex'>
                        <div className=' flex justify-between text-left w-28 print:w-8'>
                            <span className=' '>Phone</span>
                            <span className="">:</span>
                        </div>
                        <div className=' text-left ml-1 w-[calc(100%-theme(space.8))]'>
                            <span className=' ml-[1px] '>58953680,5895391</span>
                        </div>
                    </div>
                    <div className=' flex'>
                        <div className=' flex justify-between text-left w-28 print:w-8'>
                            <span className=' '>Fax</span>
                            <span className="">:</span>
                        </div>
                        <div className=' text-left ml-1 w-[calc(100%-theme(space.8))]'>
                            <span className=' ml-[1px] '>880-02-58953781</span>
                        </div>
                    </div>
                    <div className=' flex'>
                        <div className=' flex justify-between text-left w-28 print:w-8'>
                            <span className=' '>Email</span>
                            <span className="">:</span>
                        </div>
                        <div className=' text-left ml-1 w-[calc(100%-theme(space.8))]'>
                            <span className=' ml-[1px] border-b border-gray-400'>info.ut@southeastbank.com.bd</span>
                        </div>
                    </div>
                    <div className=' flex'>
                        <div className=' flex justify-between text-left w-28 print:w-8'>
                            <span className=' '>SWIFT</span>
                            <span className="">:</span>
                        </div>
                        <div className=' text-left ml-1 w-[calc(100%-theme(space.8))]'>
                            <span className=' ml-[1px] '>SEBDBDDHUTT</span>
                        </div>
                    </div>
                    <div className=' flex'>
                        <div className=' flex justify-between text-left w-28 print:w-8'>
                            <span className=' '>Website</span>
                            <span className="">:</span>
                        </div>
                        <div className=' text-left ml-1 w-[calc(100%-theme(space.8))]'>
                            <span className=' ml-[1px] '>www.southeastbank.com.bd</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className=' px-20 pt-10'>
                <div>
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
                            <p>{printDate}</p>
                    }
                </div>

                <div className=' text-center mb-5 mt-12'>
                    <span className='font-semibold'>TO WHOM IT MAY CONCERN</span>
                </div>
                <div className=' mt-5'>
                    <p className=' text-justify'>This is to certify that
                        {
                            editMode ?
                                <input type="text" placeholder='Account Holder Name' value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=' font-semibold'> {accountHolderName}, </span>
                        }
                        having address at
                        {
                            editMode ?
                                <input type="text" placeholder='Account Holder Address' value={accountHolderAddress} onChange={(e) => setAccountHolderAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                :
                                <span className=' mx-1'>{accountHolderAddress} </span>
                        }
                        has been maintaining a satisfactory conducted

                        {
                            editMode ?
                                <input type="text" placeholder='Account Number' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''> {accountType} </span>
                        }
                        account with us bearing account no.
                        {
                            editMode ?
                                <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''>{accountNumber}.</span>
                        }
                        The present balance of this account is BDT
                        {
                            editMode ?
                                <input type="text" placeholder='Present Balance' value={accountBalance} onChange={(e) => setAccountBalance(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                :
                                <span className=''>{commaNumber(accountBalance)} only</span>
                        }
                        which is equivalent <span className=' font-semibold'>USD {commaNumber(parseFloat(parseFloat(accountBalance) / parseFloat(usdCurrancyConversionRate)).toFixed(2))} (Apprx)</span> at a existing conversion rate of <span className=' font-semibold'>01 USD = Tk. {

                            editMode ?
                                <input type="text" placeholder='Print Date' value={usdCurrancyConversionRate} onChange={(e) => setUsdCurrancyConversionRate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                :
                                `${usdCurrancyConversionRate}`
                        }</span>
                    </p>
                </div>

                <p className=' mt-5'>To the best of our knowledge, the client is financially sound and solvent.</p>
                <p className=' my-5'>We wish him for success.</p>

                <div className=' mt-10 text-center font-semibold'>
                    <p className=''>For Southeast Bank Limited</p>
                    <p>{branchName}, Dhaka</p>
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
                        <img src={bankSil} alt="" className="w-32" />
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
            <div className=' w-full print:fixed bottom-3 font-sans' >
                <img src={footer} alt="" className=' w-full' />
            </div>
        </div>
    )
}

export default SoutheastBankCertificate