import logo1 from "../../Photos/agrani_bank/logo1.png"
import { useState } from 'react';
import commaNumber from "comma-number";
import signature from "../../Photos/agrani_bank/sig2.png";
import sil from "../../Photos/agrani_bank/sil.png";
import SolvencyEditComponent from "../../Components/SolvencyEditComponent";
import { ToWords } from 'to-words';

function AgraniBankCertificate() {

    const [editMode, setEditMode] = useState(false);

    const [branchAddress, setBranchAddress] = useState("Commercial Area Corporate Branch, Agrabad, Chittagong.");
    const [accountHolderName, setAccountHolderName] = useState("Global Immigration Consultant Limited");
    const [accountHolderAddress, setAccountHolderAddress] = useState("Shop:12, Gazi Tower (1st Fl), Jubilee Rd, Teaz Uddin Bazar, Chattogram");
    const [accountNumber, setAccountNumber] = useState("02233002348");
    const [accountBalance, setAccountBalance] = useState("1000");
    const [accountType, setAccountType] = useState("current");
    const [printDate, setPrintDate] = useState("05/07/2022");
    const toWords = new ToWords();
    const [bdWordConvertMoney, setBdWordConvertMoney] = useState("One Thousand");
    // const [usdWordConvertMoney, setUsdWordConvertMoney] = useState("One Thousand");

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const convertNumberToWord = () => {
        setBdWordConvertMoney(toWords.convert(parseFloat(parseFloat(accountBalance).toFixed(2))))
    }

    return (

        <div className=' w-full min-h-screen py-10 px-16 font-lora'>

            <SolvencyEditComponent editMode={editMode} toggleEditMode={toggleEditMode} convertNumberToWord={convertNumberToWord} convertWord={true} />
            <div className=" px-[72px] print:text-[12px] flex justify-between">
                <p>Email-comareabr@agranibank.org</p>
                <p>. Phone: 02333311739,023333320375,02333331220</p>
            </div>

            <div className=" w-full relative px-5">
                <img src={logo1} alt="" className=" w-full" />
                {
                    editMode ?
                        <input value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} type="text" className=' border border-blue-500 rounded p-1 focus:outline-none' />
                        :
                        <span className=' absolute left-[900px] print:left-[330px] top-56  print:top-[68px] print:text-[12px]'>, {branchAddress}</span>
                }

            </div>

            <div className=" w-full flex justify-end mt-8">
                {
                    editMode ?
                        <input value={printDate} onChange={(e) => setPrintDate(e.target.value)} type="text" className=' border border-blue-500 rounded p-1 focus:outline-none' />
                        :
                        <div className=" flex flex-col justify-center items-center">
                            <span className=' print:text-sm'>DATED:-{printDate}</span>
                            <span className=" w-[134px] h-[1px] bg-gray-600 -mt-[2px]"></span>
                        </div>
                }
            </div>

            <div className=' flex justify-center mt-16'>
                <span className='text-xl border-b border-gray-400 uppercase'>To Whome It May Concern</span>
            </div>

            <div className=' mt-12'>
                <p className=" text-justify font-Poppins leading-8" > <span className=" ml-7"></span> This is to certify that

                    {
                        editMode ?
                            <input value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} type="text" className=' border border-blue-500 rounded p-1 focus:outline-none' />
                            :
                            <span className=' '> {accountHolderName}, </span>
                    }
                    Address-
                    {
                        editMode ?
                            <input value={accountHolderAddress} onChange={(e) => setAccountHolderAddress(e.target.value)} type="text" className=' border border-blue-500 rounded p-1 focus:outline-none w-full' />
                            :
                            <span className=""> {accountHolderAddress}</span>
                    }
                    has been maintaining a
                    {

                        editMode ?
                            <input value={accountType} onChange={(e) => setAccountType(e.target.value)} type="text" className=' border border-blue-500 rounded p-1 focus:outline-none w-full' />
                            :
                            <span className=""> {accountType} </span>

                    }
                    Account No.

                    {
                        editMode ?
                            <input value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} type="text" className=' border border-blue-500 rounded p-1 focus:outline-none' />
                            :
                            <span>{accountNumber}</span>
                    }
                    with us. Today the balance of this account is TK-

                    {
                        editMode ?
                            <input value={accountBalance} onChange={(e) => setAccountBalance(e.target.value)} type="text" className=' border border-blue-500 rounded p-1 focus:outline-none' />
                            :
                            <span className="">{commaNumber(accountBalance)}/-</span>
                    }
                    (Inword-
                    {
                        editMode ?
                            <input type="text" placeholder='BD Word Taka' value={bdWordConvertMoney} onChange={(e) => setBdWordConvertMoney(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                            :
                            `${bdWordConvertMoney}`
                    }
                    ) only.</p>

                <p className=" font-Poppins mt-1">They are reported to be financially sound and solvent.</p>
            </div>
            <div className=" flex ">
                <img src={signature} alt="" className=" w-52 print:absolute right-32 bottom-60" />
                <img src={sil} alt="" className=" w-20 print:absolute right-96 bottom-72" />
            </div>
        </div>
    )
}

export default AgraniBankCertificate