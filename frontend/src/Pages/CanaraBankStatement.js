import axios from 'axios';
import commaNumber from 'comma-number';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Host } from '../Data';
import { TransactionAmountFatchSuccess } from '../Redux/TransactionAmount_slice';
import { transactionsFatchSuccess } from '../Redux/Transactions_slice';
import GenerateRandomTranjections from '../Utils/GenerateRandomTransaction';
import logo from "../Photos/canara_bank/logo.png";
import bankSil from "../Photos/canara_bank/sil.png";
import signe from "../Photos/canara_bank/sil1.png";


function CanaraBankStatement() {

    const [randomTransictions, setRandomTransictions] = useState([])
    const [openingDate, setOpeningDate] = useState("28-DEC-21")
    const [transactionQuantity, setTransactionQuantity] = useState(30);
    const [initialBalance, setInitialBalance] = useState(400000);
    const [jointHolderName, setJointHolderName] = useState("John Jose Mathew");
    const [swiltCode, setSwiltCode] = useState("CNRBINBBBFD");
    const [customerId, setCustomerId] = useState("42-416032")
    const [IFSC, setIFSC] = useState("CNRB0000837")
    const [MICR, setMICR] = useState("673015152")
    const [refNumber, setRefNumber] = useState("673305")
    const [nomineeName, setNomineeName] = useState("Luke Johan Jose")
    const [accountTitle, setAccountTitle] = useState("837004B16")
    const [debitCount, setDebitCount] = useState("");
    const [creditCount, setCreditCount] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [printDate, setPrintDate] = useState("27-06-22 13:12:46 PM");
    const [accountCurrancy, setAccountCurrancy] = useState("INDIAN RUPEES")
    const [branchName, setBranchName] = useState("837-QUILANOY 673305");
    const [branchAddress, setBranchAddress] = useState("Green City Edge, 89, Kakrail ,Dhaka-1000");
    const [lastTRDate, setLastTRDate] = useState("01/01/2020");
    const [reportGenerateUser, setReportGenerateUser] = useState("");
    const [accountType, setAccountType] = useState("CANARA SB GENERAL");
    const [accountNumber, setAccountNumber] = useState("0837101033765");
    const [preAccountNumber, setPreAccountNumber] = useState("12345678999976")
    const [accountHoldersName, setAccountHoldersName] = useState("Luke Johan Jose");
    const [accountHoldersAddress, setAccountHoldersAddress] = useState("33/1 SARAT GUPTA ROAD NARINDA DHAKA");
    const [accountHolderCity, setAccountHolderCity] = useState("Dhaka")
    const [accountHoldersPhone, setAccountHoldersPhone] = useState("8355179");
    const [accountStatus, setAccountStatus] = useState("OPERATIVE");
    const [startStatementDate, setStartStatementDate] = useState("01-10-2021");
    const [endStatementDate, setEndStatementDate] = useState("31-03-2022");
    const [hideStartStatementDate, setHideStartStatementDate] = useState("2021-10-01");
    const [hideEndStatementDate, setHideEndStatementDate] = useState("2022-03-31");
    const [totalWithdrawal, setTotalWithdrawal] = useState(0);
    const [totalDeposit, setTotalDeposit] = useState(0);
    const Transactions = useSelector(state => state.Transactions.Transactions);
    const User = useSelector(state => state.User.User);
    const dispatch = useDispatch();
    const TransactionAmount = useSelector(state => state.TransactionAmount.TransactionAmount);

    const getBankTransactions = async (value) => {

        try {

            const res = await axios.get(`${Host}/api/user/transaction/canara_bank`, {
                headers: {
                    "Authorization": `Bearer ${User}`
                }
            });

            dispatch(transactionsFatchSuccess(res.data))

        } catch (error) {

            console.log(error)
        }
    }

    // console.log(TransactionAmount)
    // console.log(Transactions)

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const statementDateChange = (option, value) => {

        if (option === "startStatementDate") {

            let startStatementDate = value.split("-");
            let startStatementDateYear = startStatementDate[0];
            let startStatementDateMonth = startStatementDate[1];
            let startStatementDateDay = startStatementDate[2];

            setStartStatementDate(`${startStatementDateDay}-${startStatementDateMonth}-${startStatementDateYear}`);
            setHideStartStatementDate(`${startStatementDateYear}-${startStatementDateMonth}-${startStatementDateDay}`);

        } else if (option === "endStatementDate") {

            let endStatementDate = value.split("-");
            let endStatementDateYear = endStatementDate[0];
            let endStatementDateMonth = endStatementDate[1];
            let endStatementDateDay = endStatementDate[2];

            setEndStatementDate(`${endStatementDateDay}-${endStatementDateMonth}-${endStatementDateYear}`);
            setHideEndStatementDate(`${endStatementDateYear}-${endStatementDateMonth}-${endStatementDateDay}`);
        }
    }



    const GenerateTranjections = () => {

        if (!Transactions.length > 0) {
            return alert("No Transactions Found. Please select Bank Transaction First.")
        }

        if (!TransactionAmount.ATM.length > 0 || !TransactionAmount.Cheque.length > 0) {
            return alert("No Transaction Amount Found. Please insert Transaction Amount First.")
        }

        const allData = GenerateRandomTranjections(hideStartStatementDate, hideEndStatementDate, Transactions, transactionQuantity, initialBalance, TransactionAmount.ATM, TransactionAmount.Cheque, "islami_bank");
        setTotalWithdrawal(allData.TotalWithdrawal);
        setTotalDeposit(allData.TotalDeposit);
        setRandomTransictions(allData.RandomTransictions);


        let inerdebitCount = 0
        let inercreditCount = 0

        allData.RandomTransictions.forEach((item, index) => {

            if (item.withdrawal > 0) {
                inerdebitCount = inerdebitCount + 1
            } else {
                inercreditCount = inercreditCount + 1
            }
        })

        setDebitCount(inerdebitCount)
        setCreditCount(inercreditCount)

        toggleEditMode();
    }

    const printWebPage = () => {
        window.print();
    }

    const getTransectionsAmounts = async () => {

        try {

            const response = await axios.get(`${Host}/api/user/transactionAmount`, {
                headers: {
                    Authorization: `Bearer ${User}`
                }
            })

            dispatch(TransactionAmountFatchSuccess(response.data))

        } catch (error) {

            console.log(error)
        }
    }

    const GetFormateDate = (date) => {

        if (date === undefined) {
            return null
        }

        let splitDate = date.split("/")

        let month = ""
        if (splitDate[1].toString() === "01") {
            month = "JAN"
        } else if (splitDate[1].toString() === "02") {
            month = "FEB"
        } else if (splitDate[1].toString() === "03") {
            month = "MAR"
        } else if (splitDate[1].toString() === "04") {
            month = "APR"
        } else if (splitDate[1].toString() === "05") {
            month = "MAY"
        } else if (splitDate[1].toString() === "06") {
            month = "JUN"
        } else if (splitDate[1].toString() === "07") {
            month = "JUL"
        } else if (splitDate[1].toString() === "08") {
            month = "AUG"
        } else if (splitDate[1].toString() === "09") {
            month = "SEP"
        } else if (splitDate[1].toString() === "10") {
            month = "OCT"
        } else if (splitDate[1].toString() === "11") {
            month = "NOB"
        } else if (splitDate[1].toString() === "12") {
            month = "DEC"
        } else {
            month = ""
        }

        let sprateYear = [...splitDate[2]]

        return `${splitDate[0]}-${month}-${`${sprateYear[2]}${sprateYear[3]}`}`
    }


    useEffect(() => {
        getTransectionsAmounts()
        getBankTransactions()
    }, [])

    const getLastBalance = () => {

        if (randomTransictions.length > 0) {

            return randomTransictions[randomTransictions.length - 1].balance

        } else {

            return 0
        }
    }

    console.log(randomTransictions)


    return (
        <div className='w-full p-10 print:p-0'>

            {
                editMode ?
                    <div className='absolute top-5 right-0 print:hidden'>
                        <button onClick={GenerateTranjections} className="bg-blue-500 px-2 py-[6px] rounded text-white hover:bg-blue-700 ">Save</button>
                        <button onClick={toggleEditMode} className="bg-red-500 ml-2 px-2 py-[6px] rounded text-white hover:bg-red-700 ">Cencel</button>
                    </div>
                    :
                    <div className='absolute top-5 right-0 print:hidden'>
                        <button onClick={toggleEditMode} className=' bg-blue-500 px-2 py-[6px] rounded text-white hover:bg-blue-700'>Edit</button>
                        <button onClick={printWebPage} className=' bg-green-500 ml-2 px-2 py-[6px] rounded text-white hover:bg-green-700'>Print</button>
                    </div>
            }
            <table className='w-full'>
                <thead class=" table-header-group w-full">
                    <tr className=' w-full'>
                        <th class="report-header-cell w-full" colSpan={8}>
                            <div className=' flex justify-center mb-5'>
                                <img src={logo} alt="" className=' w-[300px]' />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={8}>
                            <div className=' print:text-[12px]'>
                                <p className=' text-center text-base'>STATEMENT OF ACCOUNT</p>
                                <div className=' w-full flex mt-5'>
                                    <div className=' w-1/2 '>
                                        <p>CANARA BANK</p>
                                        {
                                            editMode ?

                                                <div className=' flex items-center'>
                                                    <span className=' font-semibold mr-2'>Account Branch :</span>
                                                    <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                :
                                                <div className=' flex '>
                                                    <div className=' w-36 flex justify-between'>
                                                        <span>Account Branch</span>
                                                        <span>:</span>
                                                    </div>
                                                    <span className=' pl-3'>{branchName}</span>
                                                </div>
                                        }

                                        {
                                            editMode ?
                                                <div className=' flex items-center'>
                                                    <span className=' font-semibold mr-2'>IFIC :</span>
                                                    <input type="text" placeholder='IFIC' value={IFSC} onChange={(e) => setIFSC(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                :
                                                <div className=' flex '>
                                                    <div className=' w-36 flex justify-between'>
                                                        <span>IFSC</span>
                                                        <span>:</span>
                                                    </div>
                                                    <span className='pl-3'>{IFSC}</span>
                                                </div>
                                        }

                                        {
                                            editMode ?

                                                <div className=' flex items-center'>
                                                    <span className=' font-semibold mr-2'>MICR :</span>
                                                    <input type="text" placeholder='MICR' value={MICR} onChange={(e) => setMICR(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                :
                                                <div className=' flex '>
                                                    <div className=' w-36 flex justify-between'>
                                                        <span>MICR</span>
                                                        <span>:</span>
                                                    </div>
                                                    <span className='pl-3'>{MICR}</span>
                                                </div>

                                        }
                                        {
                                            editMode ?

                                                <div className=' flex items-center'>
                                                    <span className=' font-semibold mr-2'>Account Number :</span>
                                                    <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                :
                                                <div className=' flex mt-3'>
                                                    <div className=' w-36 flex justify-between'>
                                                        <span>Account No</span>
                                                        <span>:</span>
                                                    </div>
                                                    <span className='pl-3'>{accountNumber}</span>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' flex items-center'>
                                                    <span className=' font-semibold mr-2'>Product name :</span>
                                                    <input type="text" placeholder='Product name' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                :
                                                <div className=' flex '>
                                                    <div className=' w-36 flex justify-between'>
                                                        <span>Product name</span>
                                                        <span>:</span>
                                                    </div>
                                                    <span className='pl-3'>{accountType}</span>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' flex items-center'>
                                                    <span className=' font-semibold mr-2'>Customer ID :</span>
                                                    <input type="text" placeholder='Customer ID' value={customerId} onChange={(e) => setCustomerId(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                :
                                                <div className=' flex '>
                                                    <div className=' w-36 flex justify-between'>
                                                        <span>Customer ID</span>
                                                        <span>:</span>
                                                    </div>
                                                    <span className='pl-3'>{customerId}</span>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' flex items-center'>
                                                    <span className=' font-semibold mr-2'>Customer name :</span>
                                                    <input type="text" placeholder='Customer name' value={accountHoldersName} onChange={(e) => setAccountHoldersName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' w-36 flex justify-between'>
                                                        <span>Customer name</span>
                                                        <span>:</span>
                                                    </div>
                                                    <p className='pl-3'>{accountHoldersName}</p>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' flex items-center'>
                                                    <span className=' font-semibold mr-2'>Address :</span>
                                                    <input type="text" placeholder='Customer name' value={accountHoldersAddress} onChange={(e) => setAccountHoldersAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                :
                                                <div className=' flex  w-full'>
                                                    <div className=' w-[168px] print:w-2/5 flex justify-between'>
                                                        <span>Address</span>
                                                        <span>:</span>
                                                    </div>
                                                    <span className='pl-3 inline-block print:w-3/5'>{accountHoldersAddress}</span>
                                                </div>
                                        }
                                    </div>
                                    <div className=' w-1/2 flex justify-center'>
                                        {
                                            editMode ?
                                                <div className=' flex items-center'>
                                                    <span className=' font-semibold mr-2'>Print Date :</span>
                                                    <input type="text" placeholder='Print date' value={printDate} onChange={(e) => setPrintDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                :

                                                <p>DATE: {printDate}</p>
                                        }
                                    </div>
                                </div>

                                <div className=' mb-3 flex'>
                                    <div className=' w-1/2'>
                                        {
                                            editMode ?
                                                <div className=' flex items-center'>
                                                    <span className=' font-semibold mr-2'>Nominee Ref Number</span>
                                                    <input type="text" placeholder='Nominee Ref.number' value={refNumber} onChange={(e) => setRefNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                :
                                                <div className=' flex '>
                                                    <div className=' w-36 flex justify-between'>
                                                        <span>Nominee Reference num</span>
                                                        <span>:</span>
                                                    </div>
                                                    <span className='pl-3'>{refNumber}</span>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' flex items-center'>
                                                    <span className=' font-semibold mr-2'>Nominee Name</span>
                                                    <input type="text" placeholder='Nominee Ref.number' value={nomineeName} onChange={(e) => setNomineeName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                :
                                                <div className=' flex '>
                                                    <div className=' w-36 flex justify-between'>
                                                        <span>Nominee Name</span>
                                                        <span>:</span>
                                                    </div>
                                                    <span className='pl-3'>{nomineeName}</span>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' flex items-center'>
                                                    <span className=' font-semibold mr-2'>Account Title</span>
                                                    <input type="text" placeholder='Nominee Ref.number' value={accountTitle} onChange={(e) => setAccountTitle(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                :
                                                <div className=' flex '>
                                                    <div className=' w-36 flex justify-between'>
                                                        <span>Account Title</span>
                                                        <span>:</span>
                                                    </div>
                                                    <span className='pl-3'>{accountTitle}</span>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' flex items-center'>
                                                    <span className=' font-semibold mr-2'>Joint Holder Name</span>
                                                    <input type="text" placeholder='Nominee Ref.number' value={jointHolderName} onChange={(e) => setJointHolderName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                :
                                                <div className=' flex '>
                                                    <div className=' w-36 flex justify-between'>
                                                        <div>
                                                            <p>Joint Holder’s/Authorised</p>
                                                            <p>Person’s Name</p>
                                                        </div>
                                                        <span>:</span>
                                                    </div>
                                                    <span className='pl-3'>{jointHolderName}</span>
                                                </div>
                                        }
                                    </div>
                                    <div className=' w-1/2 self-end pl-10'>

                                        {
                                            editMode ?

                                                <div className=" leading-7 print:leading-[22px] flex">
                                                    <span className='inline-block w-32 text-right font-semibold print:font-semibold'>Statement Date</span>

                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="date" placeholder='Start stetment date' value={hideStartStatementDate} onChange={(e) => statementDateChange("startStatementDate", e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />

                                                    to

                                                    <input type="date" placeholder='Start stetment date' value={hideEndStatementDate} onChange={(e) => statementDateChange("endStatementDate", e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :

                                                <div className='flex justify-between'>
                                                    <span className=''>Period:</span>
                                                    <p className=''> <span> {startStatementDate}</span> To <span>{endStatementDate}</span></p>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' flex items-center justify-between'>
                                                    <span className=' font-semibold mr-2'>Currency</span>
                                                    <input type="text" placeholder='Currency Name' value={accountCurrancy} onChange={(e) => setAccountCurrancy(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                :
                                                <div className=' flex justify-between '>
                                                    <span>Name Currency:</span>
                                                    <span>{accountCurrancy}</span>
                                                </div>
                                        }

                                        {
                                            editMode ?
                                                <div className=' flex items-center justify-between'>
                                                    <span className=' font-semibold mr-2'>Swift Code</span>
                                                    <input type="text" placeholder='Swilt Code' value={swiltCode} onChange={(e) => setSwiltCode(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                :
                                                <div className=' flex justify-between '>
                                                    <span>Swift code</span>
                                                    <span>{swiltCode}</span>
                                                </div>
                                        }
                                    </div>
                                </div>
                                <div className=' w-full flex justify-end'>
                                    {
                                        editMode &&
                                        <div>
                                            <div className=' flex my-[2px]'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>initialBalance</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" value={initialBalance} onChange={(e) => setInitialBalance(e.target.value)} placeholder='Blance' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            <div className=' flex my-[2px]'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Number of Rows</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" value={transactionQuantity} onChange={(e) => setTransactionQuantity(e.target.value)} placeholder='Blance' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr className='align-text-top'>
                        <td className='print:px-1 pb-1 print:text-[12px] font-medium border-l border-t border-gray-800 p-2 print:py-0 w-[10%]'>TRANS DATE</td>
                        <td className='print:px-1 pb-1 print:text-[12px] font-medium border-l border-t border-gray-800 p-2 print:py-0 w-[10%]'>VALUE DATE</td>
                        <td className='print:px-1 pb-1 print:text-[12px] font-medium border-l border-t border-gray-800 p-2 print:py-0'>BRANCH</td>
                        <td className='print:px-1 pb-1 print:text-[12px] font-medium border-l border-t border-gray-800 p-2 print:py-0 w-[13%]'>REF/CHQ,NO</td>
                        <td className='print:px-1 pb-1 print:text-[12px] font-medium border-l border-t border-gray-800 p-2 print:py-0 text-center w-[16%]'>DESCRIPTION</td>
                        <td className='print:px-1 pb-1 print:text-[12px] font-medium border-l border-t border-gray-800 p-2 print:py-0 text-right'>WITHDRAWS</td>
                        <td className='print:px-1 pb-1 print:text-[12px] font-medium border-l border-t border-gray-800 p-2 print:py-0 text-right'>DEPOSIT</td>
                        <td className='print:px-1 pb-1 print:text-[12px] font-medium border-x border-t border-gray-800 p-2 print:py-0 w-[16%]'>BALANCE</td>
                    </tr>

                    <tr className=' align-text-top'>
                        <td className='print:px-1 py-0 print:text-[11px] border-l border-y border-gray-800 p-2 text-gray-800 w-[10%]'>
                            {
                                editMode ?
                                    <input type="text" value={openingDate} onChange={(e) => setOpeningDate(e.target.value)} placeholder='Opening Date' className=' rounded p-1 my-[2px] border-2 border-blue-500 focus:outline-none' />
                                    :
                                    <span className=' print:text-[11px]'>{openingDate}</span>
                            }
                        </td>
                        <td className='print:px-1 py-0 print:text-[11px] border-l border-y border-gray-800 p-2 w-[10%]'>{openingDate}</td>
                        <td className='print:px-1 py-0 print:text-[11px] border-l border-y border-gray-800 p-2'>0</td>
                        <td className='print:px-1 py-0 print:text-[11px] border-l border-y border-gray-800 p-2 text-gray-80 w-[13%]'></td>
                        <td className='print:px-1 py-0 print:text-[11px] border-l border-y border-gray-800 p-2 w-[16%]'>B/F</td>
                        <td className='print:px-1 py-0 print:text-[11px] border-l border-y border-gray-800 p-2 text-right'>0</td>
                        <td className='print:px-1 py-0 print:text-[11px] border-l border-y border-gray-800 p-2 text-right'>0</td>
                        <td className='print:px-1 py-0 print:text-[11px] border-x border-y border-gray-800 p-2 text-right text-gray-800 w-[16%]'>{commaNumber(initialBalance)}</td>
                    </tr>

                    {
                        randomTransictions.length > 0 && randomTransictions.map((item, index) => {

                            return (
                                <tr className=' align-text-top'>
                                    <td className=' border-l border-y border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px] w-[10%]'>{GetFormateDate(item.date)}</td>
                                    <td className=' border-l border-y border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px] w-[10%]'>{GetFormateDate(item.date)}</td>
                                    <td className=' border-l border-y border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px]'>{item.branchCode}</td>
                                    <td className=' border-l border-y border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px] w-[13%] text-right'>{item.ref} </td>
                                    <td className=' border-l border-y border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px] w-[16%]'>{item.particular}</td>
                                    <td className=' border-l border-y border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px] text-right'>{commaNumber(item.withdrawal)}</td>
                                    <td className=' border-l border-y border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px] text-right'>{commaNumber(item.deposit)}</td>
                                    <td className=' border-x border-y border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px] text-right w-[16%]'>{commaNumber(item.balance)}</td>
                                </tr>
                            )
                        })
                    }
                    <tr className=''>
                        <td className='py-4' colSpan={2}>
                            <p className=' font-medium text-center print:text-[12px]'>Statement Summary :</p>
                        </td>
                        <td className='py-4'></td>
                        <td className='py-4'></td>
                        <td className='py-4'></td>
                        <td className='py-4'></td>
                        <td className='py-4'></td>
                        <td className='py-4'></td>
                    </tr>
                    <tr className=''>
                        <td className='p-2  border-t border-l border-b border-gray-800 print:px-1 print:text-[10px] print:py-0 print:leading-[12px] font-medium w-[20%]'>Opening Balance</td>
                        <td className='p-2  border-t border-l border-b border-gray-800 print:px-1 print:text-[10px] print:py-0 print:leading-[12px] font-medium w-[20%]'>Total Debit Amount</td>
                        <td className='p-2  border-t border-l border-b border-gray-800 print:px-1 print:text-[10px] print:py-0 print:leading-[12px] font-medium w-[20%]'>Total Credit Amount</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0 print:leading-[12px] font-medium'>Debit Count</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0 print:leading-[12px] font-medium'>Credit Count</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0 print:leading-[12px] font-medium'>Closing Balance</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0 print:leading-[12px] font-medium w-[18%]'>Unclear Balance</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0 print:leading-[12px] font-medium w-[18%]'>Sweep-In Balance</td>
                    </tr>
                    <tr className=''>
                        <td className='p-2  border-t border-l border-b border-gray-800 print:px-1 print:text-[10px] print:py-0'>{commaNumber(initialBalance)}</td>
                        <td className='p-2  border-t border-l border-b border-gray-800 print:px-1 print:text-[10px] print:py-0'>{commaNumber(totalWithdrawal)}</td>
                        <td className='p-2  border-t border-l border-b border-gray-800 print:px-1 print:text-[10px] print:py-0'>{commaNumber(totalDeposit)}</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'>{debitCount}</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'>{creditCount}</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'>{commaNumber(getLastBalance())}</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'>0</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'>0</td>
                    </tr>
                    <tr>
                        <td colSpan={8}>
                            <div className=' mx-10 print:text-[12px]'>
                                <div className=' '>
                                    <p>UNLESS THE CONSTITUENT BRINGS TO THE NOTICE OF THE BANK ANY DISCREPANCIES / OMMISSION / ERRORS / UNAUTHORISED
                                        DEBITS IMMEDIATELY.</p>
                                    <p>THE ENTRIES IN SUCH PASS SHEET SHALL BE DEEMED AS CORRECT AND SHALL BIND THE CONSTITUENT FOR ALL PURPOSE AND INTENTS.</p>
                                    <p>BEWARE OF PHISHING ATTACKS THROUGH EMAILS AND FAKE WEBSITES.</p>
                                </div>
                                <div className=' mt-3'>
                                    <p>IMB FACILITY USERS ARE REQUESTED TO NOTE THAT CNARA BANK DOES NOT SEEK ANY INFORMATION THROUGH EMAIL DO NOT CLICK ON ANY LINK</p>
                                    <p>WHICH HAS COME THROUGH EMAIL FROM UNEXPECTED SOURCES. IT MAY CONTAIN MALICIOUS CODE OR COULD BE AN ATTEMPT TO "PHISH'</p>
                                    <p>ALWAYS LOGIN THROUGH <span className=' border-b border-gray-800'>WWW.CANARABANK.IN</span> . PLEASE BEWARE OF PHISHLNG.</p>
                                    <p>CHANGE IN THE ADDRESS OF ACCOUNT HOLDER/PA HOLDER. IF ANY, MAY PLEASE BE INFORMED TO THE BRANCH ALONG WITH ADDRESS PROOF.</p>
                                </div>
                                <p className=' text-center my-4 font-medium'>"DO NOT SHARE ATM PIN NUMBER, ACCOUNT DETAILS, OTP TO OUTSIDERS, EMAILS ETC"</p>
                                <div className=' mt-5'>
                                    <p className=' text-center'>Fort Glacis</p>
                                    <p>Details of Ombudsman : The Banking Ombudsman</p>
                                    <p>C/O, RBI, 10/3/8</p>
                                    <p>Nurpatunga Road</p>
                                    <p>Bangalore</p>
                                    <p>Bongalore</p>
                                    <p>560001</p>
                                    <p>Tal0000 / 0000 Fax:0</p>
                                    <p>E-mail:bobangalore@rbi.org.in</p>
                                    <p>ARE YOU A MERCHANT/TRADER/RETAILER/SMALL VENDOR.USE DIGITAL PAYMENT CHANNEL TO RECEIVE PAYMENTS FROM YOUR CUSTOMERS. CONTACT MANAGER FOR MORE DETAILS GO CASHLESS/ CARDLESS.</p>
                                    <p>COMPUTER OUTPUT DOES NOT REQUIRE SIGNATURE.</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot className="table-footer-group">
                    <tr>
                        <td colSpan={8}>
                            <div className=' w-full text-sm text-center'>
                                <div className=' flex justify-center'>
                                    <img src={bankSil} alt="" className='w-24' />
                                    <img src={signe} alt="" className=' w-36' />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default CanaraBankStatement