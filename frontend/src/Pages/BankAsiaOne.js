import axios from 'axios';
import commaNumber from 'comma-number';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Host } from '../Data';
import logo from "../Photos/bankasia.jpg"
import { fatchSuccess } from '../Redux/Banks_slice';
import { TransactionAmountFatchSuccess } from '../Redux/TransactionAmount_slice';
import { transactionsFatchSuccess } from '../Redux/Transactions_slice';
import GenerateRandomTranjections from '../Utils/GenerateRandomTransaction';

function BankAsiaOne() {

    const [randomArray, setRandomArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);


    const [randomTransictions, setRandomTransictions] = useState([])
    const [initialBranchCode, setInitialBranchCode] = useState(32)
    const [transactionQuantity, setTransactionQuantity] = useState(40);
    const [initialBalance, setInitialBalance] = useState(400000);
    const [editMode, setEditMode] = useState(false);
    const [todayDate, setTodayDate] = useState("15/05/2022");
    const [branchName, setBranchName] = useState("Shantinagar Branch");
    const [branchAddress, setBranchAddress] = useState("Green City Edge, 89, Kakrail ,Dhaka-1000");
    const [branchPhone, setBranchPhone] = useState("8355179");
    const [branchFax, setBranchFax] = useState("8355649");
    const [accountType, setAccountType] = useState("Saving");
    const [accountNumber, setAccountNumber] = useState("0009-03100007098");
    const [accountHoldersName, setAccountHoldersName] = useState("MOHD MOMINUR RAHMAN");
    const [accountHoldersAddress, setAccountHoldersAddress] = useState("33/1 SARAT GUPTA ROAD NARINDA DHAKA");
    const [customerId, setCustomerId] = useState("CUST-0009");
    const [accountOpeningDate, setAccountOpeningDate] = useState("04/08/2004");
    const [accountCurrency, setAccountCurrency] = useState("TK");
    const [accountMatureDate, setAccountMatureDate] = useState("04/08/2024");
    const [accountInterestRate, setAccountInterestRate] = useState("2");
    const [accountStatus, setAccountStatus] = useState("OPERATIVE");
    const [startStatementDate, setStartStatementDate] = useState("01/10/2021");
    const [endStatementDate, setEndStatementDate] = useState("31/03/2022");
    const [hideStartStatementDate, setHideStartStatementDate] = useState("2021-10-01");
    const [hideEndStatementDate, setHideEndStatementDate] = useState("2022-03-31");
    const [totalWithdrawal, setTotalWithdrawal] = useState(0);
    const [totalDeposit, setTotalDeposit] = useState(0);
    const Transactions = useSelector(state => state.Transactions.Transactions);
    const Banks = useSelector(state => state.Banks.Banks);
    const User = useSelector(state => state.User.User);
    const dispatch = useDispatch();
    const TransactionAmount = useSelector(state => state.TransactionAmount.TransactionAmount);

    const getBankTransactions = async (value) => {

        try {

            const res = await axios.get(`${Host}/api/user/transaction/${value}`, {
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

        const allData = GenerateRandomTranjections(hideStartStatementDate, hideEndStatementDate, Transactions, transactionQuantity, initialBalance, TransactionAmount.ATM, TransactionAmount.Cheque);
        setTotalWithdrawal(allData.TotalWithdrawal);
        setTotalDeposit(allData.TotalDeposit);
        setRandomTransictions(allData.RandomTransictions);
        toggleEditMode();
    }

    const printWebPage = () => {
        window.print();
    }

    const getBanks = async () => {

        try {

            const response = await axios.get(`${Host}/api/user/banks`, {
                headers: {
                    Authorization: `Bearer ${User}`
                }
            });
            dispatch(fatchSuccess(response.data));

        } catch (error) {
            console.log(error)
        }
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

        getBanks()
        getTransectionsAmounts()

    }, [])

    console.log(randomTransictions)


    return (
        <div className=' w-full min-h-screen p-5'>
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
            <div className=' w-full border-t border-gray-400'>
                {/* top section start */}

                <div className=' w-full'>
                    <div className=' w-full border-x border-gray-400'>
                        <div className=' w-full flex justify-between'>
                            <div className=' w-[33%] pt-1 pl-1'>
                                <div>
                                    <img src={logo} alt="" className=' w-40' />
                                    <p className=' print:text-[10px] -mt-3 ml-3'>mpbank.bankasia-bd.com</p>
                                </div>
                            </div>
                            <div className=' w-[33%]'>
                                <p>Any Branch</p>
                            </div>
                            <div className=' w-[33%] text-center pt-2'>
                                {
                                    editMode ?
                                        <input type="text" className='w-full' value={branchName} onChange={(e) => setBranchName(e.target.value)} />
                                        :
                                        <p className=' uppercase print:leading-[18px] font-semibold print:font-medium -mt-1 text-lg print:text-base tracking-wide'>station road branch</p>

                                }
                                {
                                    editMode ?

                                        <input type="text" placeholder='Branch Code' value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                        :
                                        <p className='print:leading-[18px] text-sm print:text-[10px]'>{branchAddress}</p>

                                }
                                {
                                    editMode ?
                                        <div>
                                            <input type="text" placeholder='Branch Address' value={branchPhone} onChange={(e) => setBranchPhone(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                            <input type="text" placeholder='Branch Fax' value={branchFax} onChange={(e) => setBranchFax(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                        </div>
                                        :

                                        <p className='text-[10px] print:text-[10px] print:leading-[18px]'>Phone :{branchPhone} Fax : {branchFax}</p>
                                }
                            </div>
                        </div>
                        <div className=' w-full flex justify-between mt-5 print:mt-2 border-b border-gray-400 px-1 print:text-[10px]'>
                            {
                                editMode ?

                                    <div className=" leading-7 print:leading-[22px]">
                                        <span>Statement Date:</span>

                                        <input type="date" placeholder='Start stetment date' value={hideStartStatementDate} onChange={(e) => statementDateChange("startStatementDate", e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />

                                        to

                                        <input type="date" placeholder='Start stetment date' value={hideEndStatementDate} onChange={(e) => statementDateChange("endStatementDate", e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />
                                    </div>
                                    :
                                    <p className=" leading-7 print:text-[10px] print:leading-[22px] print:font-medium">Statement of Account for the Period: {startStatementDate} to {endStatementDate}</p>
                            }
                            {
                                editMode ?

                                    <div>
                                        <span className='mr-2'>Date :</span>
                                        <input type="text" placeholder='Today Date' value={todayDate} onChange={(e) => setTodayDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                    </div>
                                    :
                                    <p className=" leading-7 print:text-[10px] print:leading-[22px] print:font-medium">Date: {todayDate}</p>
                            }
                        </div>
                    </div>

                    <div className=' w-full flex justify-between px-1 pb-10 print:pb-5 border-x border-gray-400 print:text-[10px] print:leading-[18px]'>
                        <div className=' w-1/2'>
                            {
                                editMode ?
                                    <div className=' my-1'>
                                        <span className=' inline-block w-40 print:w-28'>Customer Name</span>
                                        <span className=' mx-2 font-semibold'>:</span>
                                        <input type="text" placeholder='Account Number' value={accountHoldersName} onChange={(e) => setAccountHoldersName(e.target.value)} className=' rounded p-1 print:text-[10px] my-[2px] border border-blue-500 focus:outline-none' />
                                    </div>
                                    :

                                    <div className=' flex'>
                                        <div className='w-40 print:w-32 flex justify-between'>
                                            <span className=''>Customer Name</span>
                                            <span className=' mx-2 font-semibold'>:</span>
                                        </div>
                                        <span className=' font-medium'>{accountHoldersName}</span>
                                    </div>
                            }

                            {
                                editMode ?
                                    <div>
                                        <span className=' inline-block w-40 print:w-28'>Address</span>
                                        <span className=' mx-2 font-semibold'>:</span>
                                        <input type="text" placeholder='Account Number' value={accountHoldersAddress} onChange={(e) => setAccountHoldersAddress(e.target.value)} className=' rounded p-1 print:text-[10px] my-[2px] border border-blue-500 focus:outline-none' />
                                    </div>
                                    :
                                    <div className=' flex'>
                                        <div className='w-40 print:w-32 flex justify-between'>
                                            <span className=''>Address</span>
                                            <span className=' mx-2 font-semibold'>:</span>
                                        </div>
                                        <span className=' capitalize'>{accountHoldersAddress}</span>
                                    </div>
                            }
                        </div>
                        <div className=' pr-5'>
                            {
                                editMode ?
                                    <div className=''>
                                        <span className=' inline-block w-28'>Account Type</span>
                                        <span className=' mx-2 font-semibold'>:</span>
                                        <input type="text" placeholder='Account Type' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                    </div>
                                    :
                                    <div className=''>
                                        <span className=' inline-block w-28'>Account Type</span>
                                        <span className=' mx-2 font-semibold'>:</span>
                                        <span className=''>{accountType}</span>
                                    </div>
                            }
                            {
                                editMode ?
                                    <div className=''>
                                        <span className=' inline-block w-28'>A/c No</span>
                                        <span className=' mx-2 font-semibold'>:</span>
                                        <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                    </div>
                                    :
                                    <div className=''>
                                        <span className=' inline-block w-28'>A/c No</span>
                                        <span className=' mx-2 font-semibold'>:</span>
                                        <span className=''>{accountNumber}</span>
                                    </div>
                            }

                            {
                                editMode ?
                                    <div>
                                        <span className=' inline-block w-28'>Cust. ID</span>
                                        <span className=' mx-2 font-semibold'>:</span>
                                        <input type="text" placeholder='Customer ID' value={customerId} onChange={(e) => setCustomerId(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                    </div>
                                    :
                                    <div>
                                        <span className=' inline-block w-28'>Cust. ID</span>
                                        <span className=' mx-2 font-semibold'>:</span>
                                        <span className=' uppercase'>{customerId}</span>
                                    </div>
                            }
                            {
                                editMode ?
                                    <div>
                                        <span className=' inline-block w-28'>Currency</span>
                                        <span className=' mx-2 font-semibold'>:</span>
                                        <input type="text" placeholder='Currency' value={accountCurrency} onChange={(e) => setAccountCurrency(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                    </div>
                                    :
                                    <div>
                                        <span className=' inline-block w-28'>Currency</span>
                                        <span className=' mx-2 font-semibold'>:</span>
                                        <span className=' uppercase'>{accountCurrency}</span>
                                    </div>
                            }
                            {
                                editMode &&
                                <div>
                                    <div className=' flex items-center my-1'>
                                        <span className=' font-semibold mr-2'>Initial Blance</span>
                                        <input type="text" value={initialBalance} onChange={(e) => setInitialBalance(e.target.value)} placeholder='Blance' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                    </div>
                                    <div className=' flex items-center my-1'>
                                        <span className=' font-semibold mr-2'>Initial Branch Code</span>
                                        <input type="text" value={initialBranchCode} onChange={(e) => setInitialBranchCode(e.target.value)} placeholder='Blance' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                    </div>
                                    <div className=' flex items-center'>
                                        <span className=' font-semibold mr-2'>Number of row</span>
                                        <input type="text" value={transactionQuantity} onChange={(e) => setTransactionQuantity(e.target.value)} placeholder='Blance' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                    </div>
                                    <select onChange={(e) => { getBankTransactions(e.target.value) }} name="" id="" className=' border border-blue-500 px-2 py-[6px] rounded mt-2 focus:outline-none'>
                                        <option value="">Select Bank Transaction</option>
                                        {
                                            Banks.map((bank, index) => {
                                                return <option key={index} value={bank._id}>{bank.bankName}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            }
                        </div>

                    </div>
                </div>

                {/* top section end */}

                {/* table start */}

                <table className=' w-full border border-collapse border-slate-400'>
                    <thead>
                        <tr className=''>
                            <td className=' font-medium border border-gray-400 p-2 print:text-[10px] print:px-1 print:py-0 text-center'>SL#</td>
                            <td className=' font-medium border border-gray-400 p-2 print:text-[10px] print:px-1 print:py-0 text-center'>Date</td>
                            <td className=' font-medium border border-gray-400 p-2 print:text-[10px] print:px-1 print:py-0 text-center w-[20%]'>Trands. Code / Chq No</td>
                            <td className=' font-medium border border-gray-400 p-2 print:text-[10px] print:px-1 print:py-0 text-center'>Debit Amount</td>
                            <td className=' font-medium border border-gray-400 p-2 print:text-[10px] print:px-1 print:py-0 text-center'>Credit Amount</td>
                            <td className=' font-medium border border-gray-400 p-2 print:text-[10px] print:px-1 print:py-0 text-center'>Balance Amount</td>
                            <td className=' font-medium border border-gray-400 p-2 print:text-[10px] print:px-1 print:py-0 text-center w-[27%]'>Remarks</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=' border border-gray-400 p-2 print:px-1 py-0 print:leading-4 print:text-[10px] text-center'></td>
                            <td className=' border border-gray-400 p-2 print:px-1 py-0 print:leading-4 print:text-[10px] text-center'></td>
                            <td className=' border border-gray-400 p-2 print:px-1 py-0 print:leading-4 print:text-[10px] w-[20%]'></td>
                            <td className=' border border-gray-400 p-2 print:px-1 py-0 print:leading-4 print:text-[10px] text-right'></td>
                            <td className=' border border-gray-400 p-2 print:px-1 py-0 print:leading-4 print:text-[10px] text-right font-medium'>Opening Balance :</td>
                            <td className=' border border-gray-400 p-2 print:px-1 py-0 print:leading-4 print:text-[10px] text-right font-medium'>{commaNumber(initialBalance)}</td>
                            <td className=' border border-gray-400 p-2 print:px-1 py-0 print:leading-4 print:text-[10px] text-left w-[27%]'></td>
                        </tr>
                        {
                            randomTransictions.length > 0 && randomTransictions.map((item, index) => {
                                return (
                                    <tr>
                                        <td className=' border border-gray-400 p-2 print:px-1 py-0 print:leading-4 print:text-[10px] text-center'>{index + 1}</td>
                                        <td className=' border border-gray-400 p-2 print:px-1 py-0 print:leading-4 print:text-[10px] text-center'>{item.date}</td>
                                        <td className=' border border-gray-400 p-2 print:px-1 py-0 print:leading-4 print:text-[10px] w-[20%]'>{item.particular}</td>
                                        <td className=' border border-gray-400 p-2 print:px-1 py-0 print:leading-4 print:text-[10px] text-right'>{item.withdrawal > 0 && commaNumber(item.withdrawal)}</td>
                                        <td className=' border border-gray-400 p-2 print:px-1 py-0 print:leading-4 print:text-[10px] text-right'>{item.deposit > 0 && commaNumber(item.deposit)}</td>
                                        <td className=' border border-gray-400 p-2 print:px-1 py-0 print:leading-4 print:text-[10px] text-right'>{commaNumber(item.balance)}</td>
                                        <td className=' border border-gray-400 p-2 print:px-0 py-0 print:leading-4 print:text-[10px] text-left w-[27%]'>{item.remarks}</td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td className=' border border-r-0 border-gray-400 p-2 print:px-1 print:text-[10px] print:py-0'></td>
                            <td className=' border border-x-0 border-gray-400 p-2 print:px-1 print:text-[10px] print:py-0'></td>
                            <td className=' border border-l-0 border-gray-400 p-2 print:px-1 print:text-[10px] print:py-0'>Total Debit/Credit : --> </td>
                            <td className=' border border-gray-400 p-2 print:px-1 print:text-[10px] print:py-0 uppercase'>{commaNumber(totalWithdrawal)}</td>
                            <td className=' border border-gray-400 p-2 print:px-1 print:text-[10px] print:py-0 text-right'>{commaNumber(totalDeposit)}</td>
                            <td className=' border border-r-0 border-gray-400 p-2 print:px-1 print:text-[10px] print:py-0 text-right'></td>
                            <td className=' border border-gray-400 border-l-0 p-2 print:px-1 print:text-[10px] print:py-0 text-right '></td>
                        </tr>
                    </tbody>
                </table>
                {/* table end */}

                {/* bottom section start */}
                <div className=' w-full mt-5'>
                    <p className=' text-center font-medium print:text-[10px]'>Thanks for banking with us.</p>
                    <hr className=' h-[2px] bg-gray-400 w-full' />
                    <p className=' print:text-[9px]'>The Customer should examine promptly the statement received and notify the bank in writing within 15 calendar days after the statement is maild,transmitted, or otherwise made available to customer of any errors,discrepancies or irregularities detected failng,failing which the statement will deem to be correct. This is a computer generated statement and does not require any signature.</p>
                </div>
                {/* bottom section stop */}
            </div>
        </div>
    )
}

export default BankAsiaOne