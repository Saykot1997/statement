import axios from 'axios';
import commaNumber from 'comma-number';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Host } from '../Data';
import { TransactionAmountFatchSuccess } from '../Redux/TransactionAmount_slice';
import { transactionsFatchSuccess } from '../Redux/Transactions_slice';
import GenerateRandomTranjections from '../Utils/GenerateRandomTransaction';
import logo from "../Photos/ucb_bank/logo.png";
import bankSil from "../Photos/islami_bank_sil.png";


function UCBBankStatement() {

    const [randomTransictions, setRandomTransictions] = useState([])
    const [initialBranchCode, setInitialBranchCode] = useState(32)
    const [transactionQuantity, setTransactionQuantity] = useState(40);
    const [initialBalance, setInitialBalance] = useState(400000);
    const [joinName, setJoinName] = useState("")
    const [customerId, setCustomerId] = useState("1234567899")
    const [fhp, setFhp] = useState("MD. ALAMGIR MIAH")
    const [editMode, setEditMode] = useState(false);
    const [printDate, setPrintDate] = useState("01/01/2020");
    const [accountCurrancy, setAccountCurrancy] = useState("BDT")
    const [branchName, setBranchName] = useState("New Eskaton Branch");
    const [branchAddress, setBranchAddress] = useState("Green City Edge, 89, Kakrail ,Dhaka-1000");
    const [openingDate, setOpeningDate] = useState("01/01/2020");
    const [lastTRDate, setLastTRDate] = useState("01/01/2020");
    const [reportGenerateUser, setReportGenerateUser] = useState("");
    const [accountType, setAccountType] = useState("Saving");
    const [accountNumber, setAccountNumber] = useState("0009-03100007098");
    const [preAccountNumber, setPreAccountNumber] = useState("12345678999976")
    const [accountHoldersName, setAccountHoldersName] = useState("MAHEDI HASAN MUNNA");
    const [accountHoldersAddress, setAccountHoldersAddress] = useState("33/1 SARAT GUPTA ROAD NARINDA DHAKA");
    const [accountHolderCity, setAccountHolderCity] = useState("Dhaka")
    const [accountHoldersPhone, setAccountHoldersPhone] = useState("8355179");
    const [accountStatus, setAccountStatus] = useState("OPERATIVE");
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

            const res = await axios.get(`${Host}/api/user/transaction/islamic_bank`, {
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

        if (!TransactionAmount.ATM.length > 0 || !TransactionAmount.Cheque.length > 0) {
            return alert("No Transaction Amount Found. Please insert Transaction Amount First.")
        }

        const allData = GenerateRandomTranjections(hideStartStatementDate, hideEndStatementDate, Transactions, transactionQuantity, initialBalance, TransactionAmount.ATM, TransactionAmount.Cheque, "islami_bank");
        setTotalWithdrawal(allData.TotalWithdrawal);
        setTotalDeposit(allData.TotalDeposit);
        setRandomTransictions(allData.RandomTransictions);
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



    return (
        <div className='w-full'>

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
                        <th class="report-header-cell w-full" colspan="8">
                            <div className=' w-full grid grid-cols-4'>
                                <div className=' flex justify-end'>
                                    <img src={logo} alt="" className=' w-28 h-20' />
                                </div>
                                <div className=' col-span-2'>
                                    <p className=''>United Commercial Bank Limited.</p>
                                    {
                                        editMode ?
                                            <div className=' flex items-center'>
                                                <span className=' font-semibold'>Branch Name :</span>
                                                <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            :

                                            <p className=''>{branchName}</p>
                                    }
                                    <p className=''>Statement Of Account</p>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className=' w-full flex font-medium print:text-[12px] print:leading-[16px] pb-5'>
                                <div className=' w-[60%]'>
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-24 font-semibold print:font-semibold'>Name</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Account Holder Name' value={accountHoldersName} onChange={(e) => setAccountHoldersName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className=' flex'>
                                                <span className='font-semibold text-left inline-block w-20 print:font-semibold'>Name</span>
                                                <div>
                                                    <span className='font-semibold print:font-semibold mr-1'>:</span>
                                                    <span className=''>{accountHoldersName}</span>
                                                </div>
                                            </div>
                                    }
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-24 font-semibold print:font-semibold'>Join Name</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Join Name' value={joinName} onChange={(e) => setJoinName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className=' flex mt-2'>
                                                <span className='font-semibold text-left inline-block w-20 print:font-semibold'>Join Name</span>
                                                <div>
                                                    <span className='font-semibold print:font-semibold mr-1'>:</span>
                                                    <span className=''>{joinName}</span>
                                                </div>
                                            </div>
                                    }
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-24 font-semibold print:font-semibold'>F/H/P</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='fhp' value={fhp} onChange={(e) => setFhp(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className=' flex'>
                                                <span className='font-semibold text-left inline-block w-20 print:font-semibold'>F/H/P</span>
                                                <div>
                                                    <span className='font-semibold print:font-semibold mr-1'>:</span>
                                                    <span className=''>{fhp}</span>
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
                                                <span className='font-semibold text-left inline-block w-20 print:font-semibold'>Address</span>
                                                <div>
                                                    <span className='font-semibold print:font-semibold mr-1'>:</span>
                                                    <span className=''>{accountHoldersAddress}</span>
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
                                                <span className='font-semibold text-left inline-block w-20 print:font-semibold'>City</span>
                                                <div>
                                                    <span className='font-semibold print:font-semibold mr-1'>:</span>
                                                    <span className=''>{accountHolderCity}</span>
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
                                                <span className='font-semibold text-left inline-block w-20 print:font-semibold'>Phone</span>
                                                <div>
                                                    <span className='font-semibold print:font-semibold mr-1'>:</span>
                                                    <span className=''>{accountHoldersPhone}</span>
                                                </div>
                                            </div>
                                    }

                                </div>
                                <div className=' w-[40%] print:text-[12px]'>

                                    {
                                        editMode ?

                                            <div className=' my-[2px] flex'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Customer ID</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='customer id' value={customerId} onChange={(e) => setCustomerId(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className='flex'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Customer ID</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <p className=''>{customerId}</p>
                                            </div>
                                    }

                                    {
                                        editMode ?

                                            <div className=' my-[2px] flex'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>A/c N0.</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='account number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className='flex'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>A/C No.</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <p className=''>{accountNumber}</p>
                                            </div>
                                    }

                                    {
                                        editMode ?

                                            <div className=' my-[2px] flex'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Prev. A/c No.</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='previous account number' value={preAccountNumber} onChange={(e) => setPreAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className='flex'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Prev. A/C No.</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <p className=''>{preAccountNumber}</p>
                                            </div>
                                    }

                                    {
                                        editMode ?

                                            <div className=' my-[2px] flex'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>A/C Type</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Account Type' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className='flex'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>A/C Type</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <p className=''>{accountType}</p>
                                            </div>
                                    }
                                    {
                                        editMode ?

                                            <div className=' my-[2px] flex'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Account Currency</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Account Type' value={accountCurrancy} onChange={(e) => setAccountCurrancy(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className='flex'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Currency</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <p className=''>{accountCurrancy}</p>
                                            </div>
                                    }

                                    {
                                        editMode ?
                                            <div className=' my-[2px] flex'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>A/C Status</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Account Number' value={accountStatus} onChange={(e) => setAccountStatus(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className=' my-[2px] flex mt-2'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>A/C Status</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <span className=' uppercase'>{accountStatus}</span>
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

                                            <div className='flex'>
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Period</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <p className=' font-semibold print:font-semibold'> <span> {startStatementDate}</span> To <span>{endStatementDate}</span></p>
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
                                                <span className=' inline-block w-32 text-right font-semibold print:font-semibold'>Initial Branch Code</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" value={initialBranchCode} onChange={(e) => setInitialBranchCode(e.target.value)} placeholder='Blance' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
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
                        </th>
                    </tr>
                </thead>

                <thead className=''>
                    <tr className=''>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2 text-gray-800'>Trans. Date</td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2 text-gray-800'>Cheque#</td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2 text-gray-800'>Ref.</td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2 text-gray-800'>Naration</td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2 text-gray-800 text-right'>Trans. Details</td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2 text-gray-800 text-right'>Debit</td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2 text-gray-800 text-right'>Credit</td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2 text-gray-800 text-right'>Balance</td>
                    </tr>
                </thead>
                <tbody>

                    <tr className=''>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2'>Balance Forward</td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2'></td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2'></td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2 text-gray-800'></td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2 text-right'></td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2 text-right'></td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2 text-right'></td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border border-gray-800 p-2 text-right text-gray-800'>{commaNumber(initialBalance)}</td>
                    </tr>

                    {
                        randomTransictions.length > 0 && randomTransictions.map((item, index) => {

                            return (
                                <tr>
                                    <td className=' border border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px]'>{item.date}</td>
                                    <td className=' border border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px]'></td>
                                    <td className=' border border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px]'>{item.branchCode}</td>
                                    <td className=' border border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px] uppercase'>{item.particular} <span className=' capitalize'>on Date {item.date}</span></td>
                                    <td className=' border border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px] uppercase'>{item.particular} <span className=' capitalize'>on Date {item.date}</span></td>
                                    <td className=' border border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px] text-right'>{item.withdrawal > 0 && commaNumber(item.withdrawal)}</td>
                                    <td className=' border border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px] text-right'>{item.deposit > 0 && commaNumber(item.deposit)}</td>
                                    <td className=' border border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px] text-right'>{commaNumber(item.balance)}</td>
                                </tr>
                            )
                        })
                    }
                    <tr className=''>
                        <td className='p-2 border-t-0 border border-gray-800 print:px-1 print:text-[10px] print:py-0 text-right pr-5' colSpan="5">Total </td>
                        <td className='p-2 border-t-0 border border-gray-800 print:px-1 print:text-[10px] print:py-0 uppercase text-right'>{commaNumber(totalWithdrawal)}</td>
                        <td className='p-2 border-t-0 border border-gray-800 print:px-1 print:text-[10px] print:py-0 text-right'>{commaNumber(totalDeposit)}</td>
                        <td className='p-2 border-t-0 border border-gray-800 print:px-1 print:text-[10px] print:py-0'></td>
                    </tr>
                </tbody>
                <tfoot class="table-footer-group">
                    <tr>
                        <td class=" " colspan="8">
                            <div className=' w-full text-sm text-center mt-5'>
                                <div className=' flex justify-center'>
                                    <img src={bankSil} alt="" className=' w-32' />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default UCBBankStatement