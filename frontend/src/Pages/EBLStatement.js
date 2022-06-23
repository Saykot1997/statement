import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Host } from "../Data"
import { transactionsFatchSuccess } from '../Redux/Transactions_slice';
import commaNumber from 'comma-number'
import GenerateRandomTranjections from '../Utils/GenerateRandomTransaction';
import { TransactionAmountFatchSuccess } from '../Redux/TransactionAmount_slice';
import logo from "../Photos/ebl_bank/logo.png"
import sile from "../Photos/ebl_bank/mid_logo.png"

function EBLStatement() {

    const [randomTransictions, setRandomTransictions] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
    const [initialBranchCode, setInitialBranchCode] = useState(32)
    const [transactionQuantity, setTransactionQuantity] = useState(40);
    const [initialBalance, setInitialBalance] = useState(400000);
    const [editMode, setEditMode] = useState(false);
    const [todayDate, setTodayDate] = useState("14-DEC-21");
    const [creditCount, setCreditCount] = useState(0)
    const [debitCount, setDebitCount] = useState(0)
    const [branchName, setBranchName] = useState("Chouhatta");
    const [branchAddress, setBranchAddress] = useState("Plot-1 Tea Board Building");
    const [branchRoad, setBranchRoad] = useState("Zindabaza");
    const [branchPoint, setBranchPoint] = useState("Chouhatta Point");
    const [branchCity, setBranchCity] = useState("Sylet")
    // const [branchPhone, setBranchPhone] = useState("8355179");
    // const [branchFax, setBranchFax] = useState("8355649");
    const [customerId, setCustomerId] = useState("871641872328")
    const [accountType, setAccountType] = useState("EBL Platinum Plus Savings");
    const [accountNumber, setAccountNumber] = useState("0009-03100007098");
    const [accountHoldersName, setAccountHoldersName] = useState("IKPAM RASHID");
    const [accountHoldersAddress, setAccountHoldersAddress] = useState("MOHONOB 5/1 C JOYNOB RESIDENCY");
    const [accountHolderState, setAccountHolderState] = useState("PATHAN TULA")
    const [accountHolderCity, setAccountHolderCity] = useState("SYLET")
    // const [accountOpeningDate, setAccountOpeningDate] = useState("04/08/2004");
    const [accountCurrency, setAccountCurrency] = useState("Bangladeshi TAka");
    // const [accountMatureDate, setAccountMatureDate] = useState("04/08/2024");
    // const [accountInterestRate, setAccountInterestRate] = useState("2");
    // const [accountStatus, setAccountStatus] = useState("OPERATIVE");
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

            const res = await axios.get(`${Host}/api/user/transaction/ebl_bank`, {
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

            let month = ""

            if (startStatementDateMonth == 1) {
                month = "JAN"
            } else if (startStatementDateMonth == 2) {
                month = "FEB"
            } else if (startStatementDateMonth == 3) {
                month = "MAR"
            } else if (startStatementDateMonth == 4) {
                month = "APR"
            } else if (startStatementDateMonth == 5) {
                month = "MAY"
            } else if (startStatementDateMonth == 6) {
                month = "JUN"
            } else if (startStatementDateMonth == 7) {
                month = "JUL"
            } else if (startStatementDateMonth == 8) {
                month = "AUG"
            } else if (startStatementDateMonth == 9) {
                month = "SEP"
            } else if (startStatementDateMonth == 10) {
                month = "OCT"
            } else if (startStatementDateMonth == 11) {
                month = "NOB"
            } else if (startStatementDateMonth == 12) {
                month = "DEC"
            } else {
                month = ""
            }

            let sprateYear = [...startStatementDateYear]

            setStartStatementDate(`${startStatementDateDay}-${month}-${`${sprateYear[2]}${sprateYear[3]}`}`);

            setHideStartStatementDate(`${startStatementDateYear}-${startStatementDateMonth}-${startStatementDateDay}`);

        } else if (option === "endStatementDate") {

            let endStatementDate = value.split("-");
            let endStatementDateYear = endStatementDate[0];
            let endStatementDateMonth = endStatementDate[1];
            let endStatementDateDay = endStatementDate[2];

            let month = ""

            if (endStatementDateMonth == 1) {
                month = "JAN"
            } else if (endStatementDateMonth == 2) {
                month = "FEB"
            } else if (endStatementDateMonth == 3) {
                month = "MAR"
            } else if (endStatementDateMonth == 4) {
                month = "APR"
            } else if (endStatementDateMonth == 5) {
                month = "MAY"
            } else if (endStatementDateMonth == 6) {
                month = "JUN"
            } else if (endStatementDateMonth == 7) {
                month = "JUL"
            } else if (endStatementDateMonth == 8) {
                month = "AUG"
            } else if (endStatementDateMonth == 9) {
                month = "SEP"
            } else if (endStatementDateMonth == 10) {
                month = "OCT"
            } else if (endStatementDateMonth == 11) {
                month = "NOB"
            } else if (endStatementDateMonth == 12) {
                month = "DEC"
            } else {
                month = ""
            }

            let sprateYear = [...endStatementDateYear]

            setEndStatementDate(`${endStatementDateDay}-${month}-${`${sprateYear[2]}${sprateYear[3]}`}`);
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

        const allData = GenerateRandomTranjections(hideStartStatementDate, hideEndStatementDate, Transactions, transactionQuantity, initialBalance, TransactionAmount.ATM, TransactionAmount.Cheque);
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

    useEffect(() => {
        getTransectionsAmounts()
        getBankTransactions()

    }, [])

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


    return (
        <div className=" typeWriter p-5 print:p-0">
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

            {/* info start */}

            <table className=' w-full text-gray-800 font-semibold'>
                <thead className=' table-header-group'>
                    <tr className=' w-full '>
                        <th class=" w-full report-header-cell" colspan="6" className=''>
                            <div className=' w-full flex justify-between'>
                                <div className=' text-sm print:text-[11px] print:leading-[14px]  self-end flex flex-col items-start'>
                                    {
                                        editMode ?
                                            <div className=' flex items-center my-[2px]'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Name</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" value={accountHoldersName} onChange={(e) => setAccountHoldersName(e.target.value)} placeholder='Name' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            :

                                            <p>{accountHoldersName}</p>
                                    }
                                    {
                                        editMode ?
                                            <div className=' flex items-center my-[2px]'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Address</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" value={accountHoldersAddress} onChange={(e) => setAccountHoldersAddress(e.target.value)} placeholder='address' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            :

                                            <p>{accountHoldersAddress}</p>
                                    }
                                    {
                                        editMode ?
                                            <div className=' flex items-center my-[2px]'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>State</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" value={accountHolderState} onChange={(e) => setAccountHolderState(e.target.value)} placeholder='state' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            :

                                            <p>{accountHolderState}</p>
                                    }
                                    {
                                        editMode ?
                                            <div className=' flex items-center my-[2px]'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>State</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" value={accountHolderCity} onChange={(e) => setAccountHolderCity(e.target.value)} placeholder='state' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            :

                                            <p>{accountHolderCity}</p>
                                    }
                                </div>
                                <div>
                                    <img src={logo} alt="" className=' w-28' />
                                </div>
                            </div>
                            <div className=' flex justify-between pb-1 text-left'>
                                <div className=' text-sm print:text-[11px] print:leading-[14px]  self-end'>
                                    <p>ESTERN BANK LIMITED</p>
                                    {
                                        editMode ?
                                            <div className=' flex items-center my-[2px]'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Branch</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" value={branchName} onChange={(e) => setBranchName(e.target.value)} placeholder='state' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            :

                                            <p>{branchName} Branch</p>
                                    }

                                    {
                                        editMode ?
                                            <div className=' flex items-center my-[2px]'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Branch Address</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} placeholder='Address' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            :

                                            <p>{branchAddress}</p>
                                    }
                                    {
                                        editMode ?
                                            <div className=' flex items-center my-[2px]'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Branch Road</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" value={branchRoad} onChange={(e) => setBranchRoad(e.target.value)} placeholder='Road' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            :

                                            <p>{branchRoad} Road</p>
                                    }
                                    {
                                        editMode ?
                                            <div>
                                                <div className=' flex items-center my-[2px]'>
                                                    <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Branch Point</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" value={branchPoint} onChange={(e) => setBranchPoint(e.target.value)} placeholder='Point' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                                <div className=' flex items-center my-[2px]'>
                                                    <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Branch City</span>
                                                    <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                    <input type="text" value={branchCity} onChange={(e) => setBranchCity(e.target.value)} placeholder='Point' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                </div>
                                            </div>
                                            :

                                            <p>{branchPoint} Point, {branchCity}</p>
                                    }
                                </div>
                                <div className=' self-end'>
                                    <p className=' text-sm print:text-[11px]'>ONLLINE STATEMENT</p>
                                </div>
                                <div className=' text-sm print:text-[12px] print:leading-[15px] text-left'>
                                    {
                                        editMode ?
                                            <div className=' flex items-center my-[2px]'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Account Number</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder='Account Number' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            :
                                            <div>
                                                <span className=' w-24 inline-block'>Account Number</span>
                                                <span className=' mx-1'>:</span>
                                                <span>{accountNumber}</span>
                                            </div>
                                    }
                                    {
                                        editMode ?
                                            <div className=' flex items-center my-[2px]'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Account Number</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" value={accountType} onChange={(e) => setAccountType(e.target.value)} placeholder='Account Type' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            :
                                            <div>
                                                <span className=' w-24 inline-block'>Product Name</span>
                                                <span className=' mx-1'>:</span>
                                                <span>{accountType}</span>
                                            </div>
                                    }
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
                                            <div>
                                                <span className=' w-24 inline-block'>Period From</span>
                                                <span className=' mx-1'>:</span>
                                                <span>{startStatementDate} - {endStatementDate}</span>
                                            </div>
                                    }


                                    {
                                        editMode ?
                                            <div className=' flex items-center my-[2px]'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Account Number</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" value={accountCurrency} onChange={(e) => setAccountCurrency(e.target.value)} placeholder='Account Type' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            :
                                            <div>
                                                <span className=' w-24 inline-block'>Currancy Name</span>
                                                <span className=' mx-1'>:</span>
                                                <span>{accountCurrency}</span>
                                            </div>
                                    }
                                    {
                                        editMode ?
                                            <div className=' flex items-center my-[2px]'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Account Number</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" value={initialBranchCode} onChange={(e) => setInitialBranchCode(e.target.value)} placeholder='Account Type' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            :
                                            <div>
                                                <span className=' w-24 inline-block'>Branch Code</span>
                                                <span className=' mx-1'>:</span>
                                                <span>{initialBranchCode}</span>
                                            </div>
                                    }
                                    {
                                        editMode ?
                                            <div className=' flex items-center my-[2px]'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Account Number</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" value={customerId} onChange={(e) => setCustomerId(e.target.value)} placeholder='Customer Id' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            :
                                            <div>
                                                <span className=' w-24 inline-block'>Customer Id</span>
                                                <span className=' mx-1'>:</span>
                                                <span>{customerId}</span>
                                            </div>
                                    }

                                </div>
                            </div>

                            {
                                editMode &&
                                <div className=' flex flex-col items-end pr-24'>
                                    <div className=' flex items-center my-1'>
                                        <span className=' mr-2'>Initial Blance</span>
                                        <input type="text" value={initialBalance} onChange={(e) => setInitialBalance(e.target.value)} placeholder='Blance' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                    </div>
                                    <div className=' flex items-center my-1'>
                                        <span className=' mr-2'>Initial Branch Code</span>
                                        <input type="text" value={initialBranchCode} onChange={(e) => setInitialBranchCode(e.target.value)} placeholder='Blance' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                    </div>
                                    <div className=' flex items-center'>
                                        <span className=' mr-2'>Number of row</span>
                                        <input type="text" value={transactionQuantity} onChange={(e) => setTransactionQuantity(e.target.value)} placeholder='Blance' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                    </div>

                                </div>
                            }
                        </th>
                    </tr>
                </thead>

                <thead className=''>
                    <tr className=' text-sm print:text-[11px]'>
                        <td className=' pt-1'>TRN. DATE</td>
                        <td className=' pt-1 w-[25%] text-left'>DESCRIPTION</td>
                        <td className=' pt-1 text-left pl-3'>REFERENCE</td>
                        <td className=' pt-1 text-right'>DEBIT</td>
                        <td className=' pt-1 text-right'>CREDITS</td>
                        <td className=' pt-1 text-right'>BALANCE</td>
                    </tr>
                </thead>

                <tbody className=' text-sm print:text-[11px]'>
                    <tr>
                        <td className='print:leading-4 print:text-[11px] text-left py-[4px]'>{
                            editMode ?
                                <input type="text" value={todayDate} onChange={(e) => setTodayDate(e.target.value)} placeholder='Todays Date' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                :
                                <span>{todayDate}</span>
                        }</td>
                        <td className='print:leading-4 print:text-[10px] py-[4px]'>Opening Balance</td>
                        <td className=' w-[25%] pl-3'></td>
                        <td></td>
                        <td className='print:leading-4 print:text-[10px] text-right py-[4px]'>{commaNumber(initialBalance)}</td>
                        <td className='print:leading-4 print:text-[10px] text-right py-[4px]'>{commaNumber(initialBalance)}</td>
                    </tr>
                    {
                        randomTransictions.length > 0 && randomTransictions.map((item, index) => {
                            return (
                                <tr>
                                    <td className='print:leading-[14px] print:text-[10px] text-left align-text-top py-[4px]'>
                                        {item.date && GetFormateDate(item.date)}
                                    </td>
                                    <td className='print:leading-[14px] print:text-[10px] w-[25%] text-left py-[4px]'>{item.particular}</td>
                                    <td className='text-left pl-3 print:leading-[14px] py-[4px]'>{item.branchCode}</td>
                                    <td className='text-right print:leading-[14px] py-[4px]'>{item.withdrawal > 0 && commaNumber(item.withdrawal)}</td>
                                    <td className='print:leading-[14px] print:text-[10px] text-right py-[4px]'>{item.deposit > 0 && commaNumber(item.deposit)}</td>
                                    <td className='print:leading-[14px] print:text-[10px] text-right py-[4px]'>{item.balance}</td>
                                </tr>
                            )
                        })
                    }
                    <tr className='w-full'>
                        <td colSpan={6}>
                            <div className=' w-full pt-5'>
                                <div className=' w-full border-t border-dashed border-gray-600'>
                                    <div className=' pl-32 pt-3'>
                                        <div>
                                            <span className=' w-60 print:w-48 inline-block'>OPENING BALANCE</span>
                                            <span className=' w-44 print:w-36 inline-block'>{commaNumber(initialBalance)}</span>
                                            <span ></span>
                                        </div>
                                        <div>
                                            <span className=' w-60 print:w-48 inline-block'>DEBITS</span>
                                            <span className=' w-44 print:w-36 inline-block'>{commaNumber(totalWithdrawal)}</span>
                                            <span>DRCOUNT {debitCount}</span>
                                        </div>
                                        <div>
                                            <span className=' w-60 print:w-48 inline-block'>CREDITS</span>
                                            <span className=' w-44 print:w-36 inline-block'>{commaNumber(totalDeposit)}</span>
                                            <span>CRCOUNT {creditCount}</span>
                                        </div>
                                        <div>
                                            <span className=' w-60 print:w-48 inline-block'>UNCOLLECTED FUNDS</span>
                                            <span className=' w-44 print:w-[110px] inline-block'></span>
                                            <span>SWITCH AMOUNT0</span>
                                        </div>
                                        <div>
                                            <span className=' w-60 print:w-48 inline-block'>* = UNAUTH ENTRY / R = REVERSAL</span>
                                            <span className=' w-44 print:w-36 inline-block'></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot class="table-footer-group">
                    <tr>
                        <td class=" " colspan="6">
                            <div className=' w-full'>
                                <div className=' flex justify-center'>
                                    <img src={sile} alt="" className=' w-28' />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default EBLStatement