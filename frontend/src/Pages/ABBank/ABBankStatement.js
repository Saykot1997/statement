import axios from 'axios';
import commaNumber from 'comma-number';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Host } from '../../Data';
import { TransactionAmountFatchSuccess } from '../../Redux/TransactionAmount_slice';
import { transactionsFatchSuccess } from '../../Redux/Transactions_slice';
import GenerateRandomTranjections from '../../Utils/GenerateRandomTransaction';
import logo from "../../Photos/ab_bank/logo.png";
import bankSil from "../../Photos/ebl_bank/mid_logo.png";
import EditButtonComponent from '../../Components/EditButtonComponent';
import changeFields from '../../Utils/ChangeFields';

function ABBankStatement() {

    const [randomTransictions, setRandomTransictions] = useState([])
    const [transactionQuantity, setTransactionQuantity] = useState(40);
    const [initialBalance, setInitialBalance] = useState(700000);
    const [debitCount, setDebitCount] = useState("");
    const [creditCount, setCreditCount] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [accountCurrency, setAccountCurrency] = useState("BANGLADESH TAKA")
    const [branchName, setBranchName] = useState("STATION ROAD BRANCH");
    const [branchPhone, setBranchPhone] = useState("637011,615029");
    const [accountType, setAccountType] = useState("SAVINGS ACCOUNT");
    const [accountNumber, setAccountNumber] = useState("4103-223549-300");
    const [accountHoldersName, setAccountHoldersName] = useState("AL-HAJ SK MOMTAZUDDIN AHMED");
    const [accountHolderFotherName, setAccountHolderFotherName] = useState("LATE DR.KAMAL UDDIN AHMED");
    const [accountHoldersAddress, setAccountHoldersAddress] = useState("HOUSE#82,SHARIF MASJID GALI NORTH NALA PARA, PO.GPO, CTG.");
    const [accountHoldersPhone, setAccountHoldersPhone] = useState("01629-504590,031-624050");
    const [startStatementDate, setStartStatementDate] = useState("01-OCT-2021");
    const [endStatementDate, setEndStatementDate] = useState("31-MAR-2022");
    const [hideStartStatementDate, setHideStartStatementDate] = useState("2021-10-01");
    const [hideEndStatementDate, setHideEndStatementDate] = useState("2022-03-31");
    const [totalWithdrawal, setTotalWithdrawal] = useState(0);
    const [totalDeposit, setTotalDeposit] = useState(0);
    const Transactions = useSelector(state => state.Transactions.Transactions);
    const User = useSelector(state => state.User.User);
    const dispatch = useDispatch();
    const TransactionAmount = useSelector(state => state.TransactionAmount.TransactionAmount);
    const [UID, setUID] = useState("robious");
    const [AID, setAID] = useState("hamid");
    const [timestamp, setTimeStamp] = useState("05-06-2022 13:41:17");
    const [ID, setID] = useState("15784");
    const [printDate, setPrintDate] = useState("05-Jun-2022")


    const getBankTransactions = async (value) => {

        try {

            const res = await axios.get(`${Host}/api/user/transaction/ab_bank`, {
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

    const GetFormatedDate = (date) => {

        let splitDate = date.split("-")

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
            month = "NOV"
        } else if (splitDate[1].toString() === "12") {
            month = "DEC"
        } else {
            month = ""
        }

        return `${splitDate[2]}-${month}-${splitDate[0]}`
    }

    const statementDateChange = (option, value) => {

        if (option === "startStatementDate") {

            let startStatementDate = value.split("-");
            let startStatementDateYear = startStatementDate[0];
            let startStatementDateMonth = startStatementDate[1];
            let startStatementDateDay = startStatementDate[2];

            setStartStatementDate(GetFormatedDate(value));
            setHideStartStatementDate(`${startStatementDateYear}-${startStatementDateMonth}-${startStatementDateDay}`);

        } else if (option === "endStatementDate") {

            let endStatementDate = value.split("-");
            let endStatementDateYear = endStatementDate[0];
            let endStatementDateMonth = endStatementDate[1];
            let endStatementDateDay = endStatementDate[2];

            setEndStatementDate(GetFormatedDate(value));
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

        return `${splitDate[0]}-${splitDate[1]}-${splitDate[2]}`
    }

    useEffect(() => {
        getTransectionsAmounts()
        getBankTransactions()
    }, [])


    return (
        <div className='w-full p-10 print:p-0 print:pr-[2px]'>
            <EditButtonComponent editMode={editMode} toggleEditMode={toggleEditMode} GenerateTranjections={GenerateTranjections} />

            <table className='w-full'>
                <thead class=" table-header-group w-full">
                    <tr className=''>
                        <th className='' colSpan={7}>
                            <div className=' w-full pb-3 font-normal text-left'>
                                <div className=' w-full flex justify-between print:text-[12px] print:leading-[16px]'>
                                    <div className=' font-medium'>
                                        <div className=' flex'>
                                            <img src={logo} alt="" className='w-48 mb-3' />
                                        </div>
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-24 font-semibold print:font-semibold'>Name</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='Account Holder Name' value={accountHoldersName} onChange={(e) => setAccountHoldersName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <p className=''>{accountHoldersName}</p>
                                        }
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-24 font-semibold print:font-semibold'>Fother Name</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='Fother Name' value={accountHolderFotherName} onChange={(e) => setAccountHolderFotherName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <p>S/O.{accountHolderFotherName}</p>
                                        }



                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-24 font-semibold print:font-semibold'>Address</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='Address' value={accountHoldersAddress} onChange={(e) => setAccountHoldersAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <p className=' print:w-[200px]'>{accountHoldersAddress}</p>
                                        }

                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-24 font-semibold print:font-semibold'>Phone</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" placeholder='Phone' value={accountHoldersPhone} onChange={(e) => setAccountHoldersPhone(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <p className=''>CELL.{accountHoldersPhone}</p>
                                        }

                                    </div>
                                    <div className='print:text-[11px] print:leading-[14px] self-end'>
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-32 font-semibold print:font-semibold'>BRANCH</span>
                                                    <span className=' mx-2'>:</span>
                                                    <input type="text" placeholder='Account Currency' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between w-32 print:w-24'>
                                                        <span className=''>BRANCH</span>
                                                        <span className=" mr-2">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.32))] print:w-[calc(100%-theme(space.24))]'>
                                                        <span className=' font-medium'>{branchName}</span>
                                                    </div>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-32'>TELEPHONE</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <input type="text" placeholder='Account Currency' value={branchPhone} onChange={(e) => setBranchPhone(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between w-32 print:w-24'>
                                                        <span className=''>TELEPHONE</span>
                                                        <span className=" mr-2">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.32))] print:w-[calc(100%-theme(space.24))]'>
                                                        <span className=' font-medium'>{branchPhone}</span>
                                                    </div>
                                                </div>
                                        }
                                        {
                                            editMode ?

                                                <div className=" leading-7 print:leading-[22px] flex">
                                                    <span className='inline-block w-32 text-right  print:'>PERIOD</span>

                                                    <span className=' mx-2  print:'>:</span>
                                                    <input type="date" placeholder='Start stetment date' value={hideStartStatementDate} onChange={(e) => statementDateChange("startStatementDate", e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />

                                                    to

                                                    <input type="date" placeholder='Start stetment date' value={hideEndStatementDate} onChange={(e) => statementDateChange("endStatementDate", e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :

                                                <div className='flex'>
                                                    <div className=' flex justify-between w-32 print:w-24'>
                                                        <span className=''>PERIOD</span>
                                                        <span className=" mr-2">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.32))] print:w-[calc(100%-theme(space.24))]'>
                                                        <p className='font-medium'> <span> {startStatementDate}</span> To <span>{endStatementDate}</span></p>
                                                    </div>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-32'>ACCOUNT</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <input type="text" placeholder='ACCOUNT' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between w-32 print:w-24'>
                                                        <span className=''>ACCOUNT</span>
                                                        <span className=" mr-2">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.32))] print:w-[calc(100%-theme(space.24))]'>
                                                        <span className='font-medium '>{accountType}</span>
                                                    </div>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-32'>ACCOUNT NO</span>
                                                    <span className=' mx-2'>:</span>
                                                    <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between w-32 print:w-24'>
                                                        <span className=''>ACCOUNT NO</span>
                                                        <span className=" mr-2">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.32))] print:w-[calc(100%-theme(space.24))]'>
                                                        <span className=' font-medium'>{accountNumber}</span>
                                                    </div>
                                                </div>
                                        }

                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-32'>CURRENCY</span>
                                                    <span className=' mx-2'>:</span>
                                                    <input type="text" placeholder='Account CURRENCY' value={accountCurrency} onChange={(e) => setAccountCurrency(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between w-32 print:w-24'>
                                                        <span className=''>CURRENCY</span>
                                                        <span className=" mr-2">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.32))] print:w-[calc(100%-theme(space.24))]'>
                                                        <span className=' font-medium'>{accountCurrency}</span>
                                                    </div>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-32 '>PRINT DATE</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <input type="text" placeholder='PRINT DATE' value={printDate} onChange={(e) => setPrintDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between w-32 print:w-24'>
                                                        <span className=''>PRINT DATE</span>
                                                        <span className=" mr-2">:</span>
                                                    </div>
                                                    <div className=' text-left ml-1 w-[calc(100%-theme(space.32))] print:w-[calc(100%-theme(space.24))]'>
                                                        <span className=' font-medium '>{printDate}</span>
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
                    <tr className=''>
                        <th className=' font-semibold px-2 print:text-[12px] border-l border-y border-gray-600 w-[11%] text-left'>Date</th>
                        <th className=' font-semibold px-2 print:text-[12px] border-l border-y border-gray-600 w-[11%] text-left'>Value Date</th>
                        <th className=' font-semibold px-2 print:text-[12px] border-l border-y border-gray-600 text-left'>Reference</th>
                        <th className=' font-semibold px-2 print:text-[12px] border-l border-y border-gray-600 text-left'>Description</th>
                        <th className=' font-semibold px-2 print:text-[12px] border-l border-y border-gray-600 w-[14%] text-right'>Debit</th>
                        <th className=' font-semibold px-2 print:text-[12px] border-l border-y border-gray-600 w-[14%] text-right'>Credit</th>
                        <th className=' font-semibold px-2 print:text-[12px] border-x border-y border-gray-600 w-[14%] text-right'>Balance</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className='leading-[14px]'>
                        <td className=' font-semibold print:px-2 py-0 print:text-[12px] border-l border-t border-gray-400 p-2'></td>
                        <td className=' font-semibold print:px-2 py-0 print:text-[12px] border-l border-t border-gray-400 p-2'></td>
                        <td className=' font-semibold print:px-2 py-0 print:text-[12px] border-l border-t border-gray-400 p-2'></td>
                        <td className=' font-semibold print:px-2 py-0 print:text-[12px] border-l border-t border-gray-400 p-2'>Brought Forward</td>
                        <td className=' font-semibold print:px-2 py-0 print:text-[12px] border-l border-t border-gray-400 p-2'></td>
                        <td className=' font-semibold print:px-2 py-0 print:text-[12px] border-l border-t border-gray-400 p-2 '></td>
                        <td className=' font-semibold print:px-2 py-0 print:text-[12px] border-x border-t border-gray-400 p-2 text-right '>{commaNumber(initialBalance)}</td>
                    </tr>

                    {
                        randomTransictions.length > 0 && randomTransictions.map((item, index) => {

                            return (
                                <tr className='print:leading-[14px]'>
                                    <td className=' border-l border-t border-gray-400 p-2 print:py-0 print:px-2 print:text-[11px]'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.date} onChange={(e) => changeFields(e.target.value, index, "date", randomTransictions, setRandomTransictions)} placeholder='Date' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                :
                                                <span>{GetFormateDate(item.date)}</span>
                                        }
                                    </td>
                                    <td className=' border-l border-t border-gray-400 p-2 print:py-0 print:px-2 print:text-[11px]'>
                                    </td>
                                    <td className=' border-l border-t border-gray-400 p-2 print:py-0 print:px-2 print:text-[11px]'>

                                        {
                                            editMode ?
                                                <input type="text" value={item.ref} onChange={(e) => changeFields(e.target.value, index, "ref", randomTransictions, setRandomTransictions)} placeholder='Ref' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                :
                                                <span>{item.ref}</span>
                                        }
                                    </td>
                                    <td className=' border-l border-t border-gray-400 p-2 print:py-0 print:px-1 print:text-[11px]'>

                                        {
                                            editMode ?
                                                <input type="text" value={item.particular} onChange={(e) => changeFields(e.target.value, index, "particular", randomTransictions, setRandomTransictions)} placeholder='Particulars' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                                :
                                                <span>{item.particular}</span>
                                        }
                                    </td>
                                    <td className=' border-l border-t border-gray-400 p-2 print:py-0 print:px-2 print:text-[11px] text-right'>{item.withdrawal > 0 && commaNumber(item.withdrawal)}</td>
                                    <td className=' border-l border-t border-gray-400 p-2 print:py-0 print:px-2 print:text-[11px] text-right'>{item.deposit > 0 && commaNumber(item.deposit)}</td>
                                    <td className=' border-x border-t border-gray-400 p-2 print:py-0 print:px-2 print:text-[11px] text-right'>{commaNumber(item.balance)}</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td colSpan={7} className=" border-t border-gray-400 print:text-[11px]">
                            <div className=' w-full flex justify-center'>
                                <div className=' w-[60%] flex items-center py-1'>
                                    <div className=' w-[70%]'>
                                        <div className=' flex'>
                                            <div className=' flex justify-between w-40 print:w-32'>
                                                <span className='font-medium'>Opening Balance</span>
                                                <span className=" mr-2">:</span>
                                            </div>
                                            <div className=' text-left ml-1 w-[calc(100%-theme(space.40))] print:w-[calc(100%-theme(space.32))]'>
                                                <span className=' pl-5'>{commaNumber(initialBalance)}</span>
                                            </div>
                                        </div>
                                        <div className=' flex'>
                                            <div className=' flex justify-between w-40 print:w-32'>
                                                <span className='font-medium'>Total Debit Amount</span>
                                                <span className=" mr-2">:</span>
                                            </div>
                                            <div className=' text-left ml-1 w-[calc(100%-theme(space.40))] print:w-[calc(100%-theme(space.32))]'>
                                                <span className=' pl-5'>{commaNumber(totalWithdrawal)}</span>
                                            </div>
                                        </div>
                                        <div className=' flex'>
                                            <div className=' flex justify-between w-40 print:w-32'>
                                                <span className='font-medium'>Total Credit Amount</span>
                                                <span className=" mr-2">:</span>
                                            </div>
                                            <div className=' text-left ml-1 w-[calc(100%-theme(space.40))] print:w-[calc(100%-theme(space.32))]'>
                                                <span className=' pl-5'>{commaNumber(totalDeposit)}</span>
                                            </div>
                                        </div>
                                        <div className=' flex'>
                                            <div className=' flex justify-between w-40 print:w-32'>
                                                <span className='font-medium'>Closing Balance</span>
                                                <span className=" mr-2">:</span>
                                            </div>
                                            <div className=' text-left ml-1 w-[calc(100%-theme(space.40))] print:w-[calc(100%-theme(space.32))]'>
                                                <span className=' pl-5'>{randomTransictions.length > 0 && commaNumber(randomTransictions[randomTransictions.length - 1].balance)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' w-[30%]'>
                                        <div className=' flex'>
                                            <div className=' flex justify-between w-40 print:w-16'>
                                                <span className=' font-medium'>DR Count</span>
                                                <span className=" mr-2">:</span>
                                            </div>
                                            <div className=' text-left ml-1 w-[calc(100%-theme(space.40))] print:w-[calc(100%-theme(space.16))]'>
                                                <span className=' pl-5'>{debitCount}</span>
                                            </div>
                                        </div>
                                        <div className=' flex'>
                                            <div className=' flex justify-between w-40 print:w-16'>
                                                <span className=' font-medium'>CR Count</span>
                                                <span className=" mr-2">:</span>
                                            </div>
                                            <div className=' text-left ml-1 w-[calc(100%-theme(space.40))] print:w-[calc(100%-theme(space.16))]'>
                                                <span className=' pl-5'>{creditCount}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className=' w-full block h-[1px] bg-gray-400'></span>
                        </td>
                    </tr>
                </tbody>
                <tfoot className="table-footer-group">
                    <tr>
                        <td colSpan={7} className="py-16">
                        </td>
                    </tr>
                </tfoot>
            </table>
            <div className=' print:fixed bottom-8 w-full print:text-[10px] relative'>
                <div className=' w-full flex border-t border-gray-700'>
                    <div className=' w-36 print:w-[100px] font-medium '>
                        <p>Important Notice:</p>
                    </div>
                    <div>
                        <div className=' flex'>
                            <span>1. </span>
                            <p> This is a computer generated statement which is issued without any alteration and does not require a signature.</p>
                        </div>
                        <div className=' flex'>
                            <span>2. </span>
                            <p> All Transactions posted to your account shall be deemed correct and accepted by you unless we are notified to the contrary within 15 days of receipt of this statement.</p>
                        </div>
                    </div>
                </div>
                <div className=' mt-2'>
                    {
                        editMode ?
                            <p>UID:  <input type="text" value={UID} onChange={(e) => setUID(e.target.value)} placeholder='UID' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' /> AID: <input type="text" value={AID} onChange={(e) => setAID(e.target.value)} placeholder='AID' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' /> Office: <span className=' font-medium'>{branchName}</span> Timestamp: <input type="text" value={timestamp} onChange={(e) => setTimeStamp(e.target.value)} placeholder='Time Stamp' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' /> ID: <input type="text" value={ID} onChange={(e) => setID(e.target.value)} placeholder='UID' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' /></p>

                            :
                            <p>UID: <span className=' font-medium'>{UID}</span> AID: <span className=' font-medium'>{AID}</span> Office: <span className=' font-medium'>{branchName}</span> Timestamp: <span className=' font-medium'>{timestamp}</span> ID: <span className=' font-medium'>{ID}</span></p>
                    }

                </div>
                {/* <img src={bankSil} alt="" className='w-24 absolute -bottom-8 right-20' /> */}
            </div>
        </div>
    )
}

export default ABBankStatement