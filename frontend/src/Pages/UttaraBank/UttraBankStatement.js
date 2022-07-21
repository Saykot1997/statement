import axios from 'axios';
import commaNumber from 'comma-number';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Host } from '../../Data';
import { TransactionAmountFatchSuccess } from '../../Redux/TransactionAmount_slice';
import { transactionsFatchSuccess } from '../../Redux/Transactions_slice';
import GenerateRandomTranjections from '../../Utils/GenerateRandomTransaction';
import logo from "../../Photos/uttara_bank/logo.png";
import EditButtonComponent from '../../Components/EditButtonComponent';
import changeFields from '../../Utils/ChangeFields';
import sil from "../../Photos/uttara_bank/sil.png"

function UttraBankStatement() {

    const [randomTransictions, setRandomTransictions] = useState([])
    const [transactionQuantity, setTransactionQuantity] = useState(40);
    const [initialBalance, setInitialBalance] = useState(700000.00);
    const [editMode, setEditMode] = useState(false);
    const [printDate, setPrintDate] = useState("19/06/2022");
    const [printTime, setPrintTime] = useState("01:01:37PM");
    const [branchName, setBranchName] = useState("Nawabpur Branch");
    const [branchAddress, setBranchAddress] = useState("150, Nawabpur Road, Dhaka-1100 Dhaka-1100");
    const [openingDate, setOpeningDate] = useState("01/01/2020");
    const [accountHoldersName, setAccountHoldersName] = useState("KINAN TRADING");
    const [accountHoldersAddress, setAccountHoldersAddress] = useState("140, NAWABPUR ROAD, DHAKA");
    const [accountHolderCity, setAccountHolderCity] = useState("Dhaka")
    const [accountHoldersPhone, setAccountHoldersPhone] = useState("01715077361");
    const [accountHoldersMobile, setAccountHoldersMobile] = useState("01715077361");
    const [accountCurrency, setAccountCurrency] = useState("BDT");
    const [accountType, setAccountType] = useState(`CURRENT DEPOSIT ACCOUNT(NON - INDIVIDUAL)`);
    const [accountNumber, setAccountNumber] = useState("1362 12200215015");
    const [accountStatus, setAccountStatus] = useState("REGULAR");
    const [startStatementDate, setStartStatementDate] = useState("01/10/2021");
    const [endStatementDate, setEndStatementDate] = useState("31/03/2022");
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

            const res = await axios.get(`${Host}/api/user/transaction/uttra_bank`, {
                headers: {
                    "Authorization": `Bearer ${User}`
                }
            });

            dispatch(transactionsFatchSuccess(res.data))

        } catch (error) {

            console.log(error)
        }
    }

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const statementDateChange = (option, value) => {

        if (option === "startStatementDate") {

            let startStatementDate = value.split("-");
            let startStatementDateYear = startStatementDate[0];
            let startStatementDateMonth = startStatementDate[1];
            let startStatementDateDay = startStatementDate[2];

            setStartStatementDate(`${startStatementDateDay}/${startStatementDateMonth}/${startStatementDateYear}`);
            setHideStartStatementDate(`${startStatementDateYear}-${startStatementDateMonth}-${startStatementDateDay}`);

        } else if (option === "endStatementDate") {

            let endStatementDate = value.split("-");
            let endStatementDateYear = endStatementDate[0];
            let endStatementDateMonth = endStatementDate[1];
            let endStatementDateDay = endStatementDate[2];

            setEndStatementDate(`${endStatementDateDay}/${endStatementDateMonth}/${endStatementDateYear}`);
            setHideEndStatementDate(`${endStatementDateYear}-${endStatementDateMonth}-${endStatementDateDay}`);
        }
    }

    const GenerateTranjections = () => {

        if (!Transactions.length > 0) {
            return alert("No Transactions Found. Please select Bank Transaction First.")
        }

        if (!TransactionAmount.ATM?.length > 0 || !TransactionAmount.Cheque?.length > 0) {
            return alert("No Transaction Amount Found. Please insert Transaction Amount First.")
        }

        const allData = GenerateRandomTranjections(hideStartStatementDate, hideEndStatementDate, Transactions, transactionQuantity, initialBalance, TransactionAmount.ATM, TransactionAmount.Cheque, "islami_bank");
        setTotalWithdrawal(allData.TotalWithdrawal);
        setTotalDeposit(allData.TotalDeposit);
        setRandomTransictions(allData.RandomTransictions);
        toggleEditMode();
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

    useEffect(() => {
        getTransectionsAmounts()
        getBankTransactions()
    }, [])


    return (
        <div className=' w-full min-h-screen p-10 print:p-0'>

            <EditButtonComponent editMode={editMode} toggleEditMode={toggleEditMode} GenerateTranjections={GenerateTranjections} />


            <table className='w-full'>
                <thead class=" table-header-group w-full">
                    <tr>
                        <th className=' w-full pt-1' colSpan={7}>
                            <div className=' pb-2'>
                                <div className=' w-full flex justify-center'>
                                    <div className=' flex flex-col items-center'>
                                        <div className=' flex justify-center'>
                                            <img src={logo} alt="" className=' w-52' />
                                        </div>
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-24 font-semibold print:font-semibold'>Branch Name</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <p className=' text-center font-semibold -mt-5'>{branchName}</p>
                                        }
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-24 font-semibold print:font-semibold'>Branch Name</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='Branch Name' value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <p className=' text-center print:text-[12px] font-normal'>{branchAddress}</p>
                                        }
                                        <div className=' flex flex-col items-center mt-2 w-full'>
                                            <span className=' print:text-sm text-center font-semibold'>Statement of Account</span>
                                            <span className=' h-[1px] w-40 print:-translate-y-[2px] print:w-[140px] bg-gray-900'></span>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex font-normal text-left'>
                                    <div className=' w-1/2 print:text-[11px] print:leading-[14px]'>
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-24 font-semibold print:font-semibold'>Name</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='Account Holder Name' value={accountHoldersName} onChange={(e) => setAccountHoldersName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between text-left w-28 print:w-14'>
                                                        <span className=''>Name</span>
                                                        <span className="">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.14))]'>
                                                        <span className=' ml-1 '>{accountHoldersName}</span>
                                                    </div>
                                                </div>
                                        }

                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-24 font-semibold print:font-semibold'>Address</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='Address' value={accountHoldersAddress} onChange={(e) => setAccountHoldersAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between text-left w-28 print:w-14'>
                                                        <span className=''>Address</span>
                                                        <span className="">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.14))]'>
                                                        <span className=' ml-1 '>{accountHoldersAddress}</span>
                                                    </div>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-24 font-semibold print:font-semibold'>City</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='City' value={accountHolderCity} onChange={(e) => setAccountHolderCity(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex mt-2'>
                                                    <div className=' flex justify-between text-left w-28 print:w-14'>
                                                        <span className=''>City</span>
                                                        <span className="">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.14))]'>
                                                        <span className=' ml-1 '>{accountHolderCity}</span>
                                                    </div>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-24 font-semibold print:font-semibold'>Mobile</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='Mobile' value={accountHoldersMobile} onChange={(e) => setAccountHoldersMobile(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between text-left w-28 print:w-14'>
                                                        <span className=' '>Mobile</span>
                                                        <span className="">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.14))]'>
                                                        <span className=' ml-1 '>{accountHoldersMobile}</span>
                                                    </div>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-24 font-semibold print:font-semibold'>Phone</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='Phone' value={accountHoldersPhone} onChange={(e) => setAccountHoldersPhone(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between text-left w-28 print:w-14'>
                                                        <span className=' '>Phone</span>
                                                        <span className="">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.14))]'>
                                                        <span className=' ml-1 '>{accountHoldersPhone}</span>
                                                    </div>
                                                </div>
                                        }
                                        {
                                            editMode ?

                                                <div className=" leading-7 print:leading-[22px] flex">
                                                    <span className='inline-block w-32 font-semibold print:font-semibold'>Period</span>

                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="date" placeholder='Start stetment date' value={hideStartStatementDate} onChange={(e) => statementDateChange("startStatementDate", e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />

                                                    to

                                                    <input type="date" placeholder='Start stetment date' value={hideEndStatementDate} onChange={(e) => statementDateChange("endStatementDate", e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between text-left w-28 print:w-14'>
                                                        <span className=' '>Period</span>
                                                        <span className="">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.14))]'>
                                                        <p className='ml-1 inline-block'> <span>From {startStatementDate}</span> To <span>{endStatementDate}</span></p>
                                                    </div>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-32 font-semibold print:font-semibold'>Currency</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='Account Currency' value={accountCurrency} onChange={(e) => setAccountCurrency(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between text-left w-28 print:w-14'>
                                                        <span className=' '>Currency</span>
                                                        <span className="">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.14))]'>
                                                        <span className=' ml-1 '>{accountCurrency}</span>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                    <div className=' w-1/2 print:text-[11px] print:leading-[14px] pt-2 print:pr-16'>
                                        {
                                            editMode ?
                                                <div>
                                                    <div className=' my-1'>
                                                        <span className=' inline-block w-24 font-semibold print:font-semibold'>Print Date</span>
                                                        <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                        <input type="text" placeholder='Phone' value={printDate} onChange={(e) => setPrintDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                    </div>
                                                    <div className=' my-1'>
                                                        <span className=' inline-block w-24 font-semibold print:font-semibold'>Print Time</span>
                                                        <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                        <input type="text" placeholder='Phone' value={printTime} onChange={(e) => setPrintTime(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                    </div>
                                                </div>
                                                :
                                                <div className=' -mt-6 mb-2'>
                                                    <div className=' flex justify-end'>
                                                        <div className=' flex'>
                                                            <div className=' flex text-right w-44 print:w-[90px]'>
                                                                <span className=' '>Generation Date</span>
                                                                <span className="">:</span>
                                                            </div>
                                                            <div className='text-left ml-1 w-[calc(100%-theme(space.20))]'>
                                                                <span className=' '>{printDate}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className=' flex justify-end'>
                                                        <div className=' flex'>
                                                            <div className=' flex justify-end text-right w-44 print:w-[90px]'>
                                                                <p className=' text-right'>Time</p>
                                                                <span className="">:</span>
                                                            </div>
                                                            <div className='text-left ml-1 w-[calc(100%-theme(space.20))]'>
                                                                <span className=' '>{printTime}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        }


                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-32 font-semibold print:font-semibold'>A/C No</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between w-32'>
                                                        <span className=''>A/C No</span>
                                                        <span className=" mr-2">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                        <span className=' '>{accountNumber}</span>
                                                    </div>
                                                </div>
                                        }

                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-32 font-semibold print:font-semibold'>A/C Type</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='A/C Type' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between w-32'>
                                                        <span className=''>A/C Type</span>
                                                        <span className=" mr-2">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                        <span className=' '>{accountType}</span>
                                                    </div>
                                                </div>
                                        }

                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-32 font-semibold print:font-semibold'>Status</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='Account Status' value={accountStatus} onChange={(e) => setAccountStatus(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between w-32'>
                                                        <span className=''>AC Status</span>
                                                        <span className=" mr-2">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                        <span className=' '>{accountStatus}</span>
                                                    </div>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-32 font-semibold print:font-semibold'>A/C Open Date</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='AC Opening Date' value={openingDate} onChange={(e) => setOpeningDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex mt-1'>
                                                    <div className=' flex justify-between w-32'>
                                                        <span className=''>Opening Date</span>
                                                        <span className=" mr-2">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                        <span className=' '>{openingDate}</span>
                                                    </div>
                                                </div>
                                        }

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
                            </div>
                        </th>
                    </tr>
                    <tr className=' text-gray-900 print:text-[11px]'>
                        <th className=' font-semibold print:px-0 pb-[2px] pt-1 border-y border-gray-700 p-2 text-left w-[12%]'>Trans. Date</th>
                        <th className=' font-semibold print:px-0 pb-[2px] pt-1 border-y border-gray-700 p-2 text-left w-[8%]'>Trans. Type</th>
                        <th className=' font-semibold print:px-0 pb-[2px] pt-1 border-y border-gray-700 p-2 text-center w-[10%]'>Cheque No</th>
                        <th className=' font-semibold print:px-0 pb-[2px] pt-1 border-y border-gray-700 p-2 text-left w-[25%]'>Description</th>
                        <th className=' font-semibold print:px-0 pb-[2px] pt-1 border-y border-gray-700 p-2 text-right w-[15%]'>Debit</th>
                        <th className=' font-semibold print:px-0 pb-[2px] pt-1 border-y border-gray-700 p-2 text-right w-[15%]'>Credit</th>
                        <th className=' font-semibold print:px-0 pb-[2px] pt-1 border-y border-gray-700 p-2 text-right w-[15%]'>Balance</th>
                    </tr>
                </thead>
                <tbody className=' print:text-[11px]'>
                    <tr className=''>
                        <td className='print:px-0 py-0 p-2 font-semibold'>Opening Balance</td>
                        <td className='print:px-0 py-0 p-2'></td>
                        <td className='print:px-0 py-0 p-2'></td>
                        <td className='print:px-0 py-0 p-2 text-right'></td>
                        <td className='print:px-0 py-0 p-2 text-right'></td>
                        <td className='print:px-0 py-0 p-2 text-right'></td>
                        <td className='print:px-0 py-0 p-2 text-right font-semibold'>{commaNumber(initialBalance)}</td>
                    </tr>

                    {
                        randomTransictions.length > 0 && randomTransictions.map((item, index) => {

                            return (
                                <tr className=' print:leading-[14px] align-text-top'>
                                    <td className='p-2 print:py-[2px] print:px-0 text-left'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.date} onChange={(e) => changeFields(e.target.value, index, "date", randomTransictions, setRandomTransictions)} placeholder='Date' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                :
                                                <span>{item.date}</span>
                                        }
                                    </td>
                                    <td className='p-2 print:py-[2px] print:px-0 text-center'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.transactionDetails} onChange={(e) => changeFields(e.target.value, index, "transactionDetails", randomTransictions, setRandomTransictions)} placeholder='Details' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                                :
                                                <span>{item.transactionDetails}</span>
                                        }
                                    </td>
                                    <td className='p-2 print:py-[2px] print:px-0 text-center'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.cheque} onChange={(e) => changeFields(e.target.value, index, "cheque", randomTransictions, setRandomTransictions)} placeholder='Cheque' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                :
                                                <span>{item.cheque}</span>
                                        }
                                    </td>
                                    <td className='p-2 print:py-[2px] print:px-1 text-left'>

                                        {
                                            editMode ?
                                                <input type="text" value={item.particular} onChange={(e) => changeFields(e.target.value, index, "particular", randomTransictions, setRandomTransictions)} placeholder='Date' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                                :
                                                <p>{item.particular}</p>
                                        }
                                    </td>

                                    <td className='p-2 print:py-[2px] print:px-0 text-right'>{item.withdrawal > 0 && commaNumber(item.withdrawal)}</td>
                                    <td className='p-2 print:py-[2px] print:px-0 text-right'>{item.deposit > 0 && commaNumber(item.deposit)}</td>
                                    <td className='p-2 print:py-[2px] print:px-0 text-right'>{commaNumber(item.balance)}</td>
                                </tr>
                            )
                        })
                    }

                    <tr>
                        <td colSpan={7} className="py-1">
                        </td>
                    </tr>

                    <tr className='border-t border-gray-700'>
                        <td className='p-2 print:px-1 print:py-1 font-semibold'></td>
                        <td className='p-2 print:px-1 print:py-1'></td>
                        <td className='p-2 print:px-1 print:py-1'></td>
                        <td className='p-2 print:px-1 print:py-1 text-right'></td>
                        <td className='p-2 print:px-1 print:py-1 text-right font-semibold'>{commaNumber(totalWithdrawal)}</td>
                        <td className='p-2 print:px-1 print:py-1 text-right font-semibold'>{commaNumber(totalDeposit)}</td>
                        <td className='p-2 print:px-1 print:py-1 text-right font-semibold'></td>
                    </tr>

                    <tr>
                        <td class=" " colspan="7">
                            <div className=' w-full pt-5'>
                                <p>Unless a constituent notifies the Bank within 10 days any discrepancy found by him,/her in his/her statement it will be taken that he/ she has found the entries in hislher account statement correct.</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot class="table-footer-group">
                    <tr>
                        <td class=" py-8" colspan="7">
                        </td>
                    </tr>
                </tfoot>
            </table>

            <div className=' print:fixed bottom-10 w-full print:text-[12px] relative'>
                <span className=' w-full h-[1px] bg-gray-700 block'></span>
                <div className=' flex justify-between'>
                    <p>BankUltimus</p>
                    <p>This is a system generated statement and does not require any signature</p>
                    <span></span>
                </div>
                <img src={sil} alt="" className="absolute -top-3 right-7 w-24" />

            </div>
        </div>
    )
}

export default UttraBankStatement