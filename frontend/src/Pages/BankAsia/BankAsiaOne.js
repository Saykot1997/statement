import axios from 'axios';
import commaNumber from 'comma-number';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Host } from '../../Data';
import logo from "../../Photos/bank_asia/logo.png"
import sil from "../../Photos/bank_asia/sil.png"
import { TransactionAmountFatchSuccess } from '../../Redux/TransactionAmount_slice';
import { transactionsFatchSuccess } from '../../Redux/Transactions_slice';
import GenerateRandomTranjections from '../../Utils/GenerateRandomTransaction';
import anybranchLogo from "../../Photos/bank_asia/BankAsiaAnyBranchLogo.png"
import EditButtonComponent from '../../Components/EditButtonComponent';
import changeFields from '../../Utils/ChangeFields';

function BankAsiaOne() {

    const [randomTransictions, setRandomTransictions] = useState([])
    const [initialBranchCode, setInitialBranchCode] = useState(32)
    const [transactionQuantity, setTransactionQuantity] = useState(40);
    const [initialBalance, setInitialBalance] = useState(400000);
    const [editMode, setEditMode] = useState(false);
    const [todayDate, setTodayDate] = useState("15/05/2022");
    const [branchName, setBranchName] = useState("Shantinagar Branch");
    const [branchStreet, setBranchStreet] = useState("170,STATION ROAD");
    const [branchHouse, setBranchHouse] = useState("MOHIUDDIN MARKET (1ST Floor)");
    const [branchCity, setBranchCity] = useState("Bangladesh");
    const [branchState, setBranchState] = useState("CHITAGONG");
    const [branchPhone, setBranchPhone] = useState("88-031-2850934,2850935");
    const [branchFax, setBranchFax] = useState("88-031-2850936");
    const [accountType, setAccountType] = useState("C01-Current Deposit Account");
    const [accountNumber, setAccountNumber] = useState("02233002348");
    const [accountHoldersName, setAccountHoldersName] = useState("MOHD MOMINUR RAHMAN");
    const [accountHoldersAddress, setAccountHoldersAddress] = useState("Shop:12 Gazi Tower(1st FI), Jubilee Rd Reaz Uddin Bazar Chattogram");
    const [customerId, setCustomerId] = useState("01708775");
    const [accountCurrency, setAccountCurrency] = useState("BDT-BANGLADESH TAKA");
    const [accountInterestRate, setAccountInterestRate] = useState("0");
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

            const res = await axios.get(`${Host}/api/user/transaction/asia_bank`, {
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
            <table className=' w-full'>
                <thead class=" table-header-group w-full">
                    <tr className=' w-full '>
                        <th class="report-header-cell w-full border-t border-x border-gray-400" colspan="7">
                            <div className=' w-full'>
                                <div className=' w-full'>
                                    <div className=' w-full flex justify-between font-normal'>
                                        <div className=' w-1/2 flex justify-between'>
                                            <div className=''>
                                                <div>
                                                    <img src={logo} alt="" className=' w-40' />
                                                    <p className=' print:text-[10px] text-left pl-1'>mpbank.bankasia-bd.com</p>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <img src={anybranchLogo} alt="" className=' w-32 -mt-5 rotate-2' />
                                            </div>
                                        </div>
                                        <div className={` w-1/2 flex ${editMode ? "justify-end" : " justify-center"} mt-2`}>
                                            <div className=' text-center'>
                                                {
                                                    editMode ?
                                                        <div className=' flex items-center'>
                                                            <div className=' flex justify-between mr-2'>
                                                                <span className=' font-medium'>Branch Name</span>
                                                                <span className='ml-2'>:</span>
                                                            </div>
                                                            <input type="text" className='rounded p-1 my-[2px] border border-blue-500 focus:outline-none' value={branchName} onChange={(e) => setBranchName(e.target.value)} />
                                                        </div>
                                                        :
                                                        <p className=' uppercase print:leading-[18px] print:font-medium -mt-1 text-lg print:text-base tracking-wide'>{branchName}</p>

                                                }
                                                {
                                                    editMode ?

                                                        <div className=' flex items-center'>
                                                            <div className=' flex justify-between mr-2'>
                                                                <span className=' font-medium'>Branch House</span>
                                                                <span className='ml-2'>:</span>
                                                            </div>

                                                            <input type="text" placeholder='Branch House' value={branchHouse} onChange={(e) => setBranchHouse(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                        </div>

                                                        :
                                                        <p className='print:leading-[14px] text-sm print:text-[10px]'>{branchHouse}</p>

                                                }
                                                {
                                                    editMode ?

                                                        <div className=' flex items-center'>
                                                            <div className=' flex justify-between mr-2'>
                                                                <span className=' font-medium'>Branch Street</span>
                                                                <span className='ml-2'>:</span>
                                                            </div>
                                                            <input type="text" placeholder='Branch Road' value={branchStreet} onChange={(e) => setBranchStreet(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                        </div>

                                                        :
                                                        <p className='print:leading-[14px] text-sm print:text-[10px]'>{branchStreet}</p>

                                                }

                                                {
                                                    editMode ?

                                                        <div className=' flex items-center'>
                                                            <div className=' flex justify-between mr-2'>
                                                                <span className=' font-medium'>Branch State</span>
                                                                <span className='ml-2'>:</span>
                                                            </div>


                                                            <input type="text" placeholder='Branch House' value={branchState} onChange={(e) => setBranchState(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                        </div>

                                                        :
                                                        <p className='print:leading-[14px] text-sm print:text-[10px]'>{branchState}</p>

                                                }
                                                {
                                                    editMode ?

                                                        <div className=' flex items-center'>
                                                            <div className=' flex justify-between mr-2'>
                                                                <span className=' font-medium'>Branch Cuntry</span>
                                                                <span className='ml-2'>:</span>
                                                            </div>

                                                            <input type="text" placeholder='Branch House' value={branchCity} onChange={(e) => setBranchCity(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                        </div>

                                                        :
                                                        <p className='print:leading-[14px] text-sm print:text-[10px]'>{branchCity}</p>

                                                }
                                                {
                                                    editMode ?

                                                        <div>
                                                            <div className=' flex items-center'>
                                                                <div className=' flex justify-between mr-2'>
                                                                    <span className=' font-medium'>Branch Phone</span>
                                                                    <span className='ml-2'>:</span>
                                                                </div>

                                                                <input type="text" placeholder='Branch Address' value={branchPhone} onChange={(e) => setBranchPhone(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                            </div>

                                                            <div className=' flex items-center'>
                                                                <div className=' flex justify-between mr-2'>
                                                                    <span className=' font-medium'>Branch Fax</span>
                                                                    <span className='ml-2'>:</span>
                                                                </div>

                                                                <input type="text" placeholder='Branch Fax' value={branchFax} onChange={(e) => setBranchFax(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                            </div>
                                                        </div>
                                                        :

                                                        <p className='text-[12px] print:text-[9px] print:leading-[14px]'>Phone : {branchPhone} Fax : {branchFax}</p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' w-full flex justify-between mt-5 print:mt-2 px-1 print:text-[10px] font-normal'>
                                        {
                                            editMode ?

                                                <div className=" leading-7 print:leading-[22px]">
                                                    <span>Statement Date:</span>

                                                    <input type="date" placeholder='Start stetment date' value={hideStartStatementDate} onChange={(e) => statementDateChange("startStatementDate", e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />

                                                    to

                                                    <input type="date" placeholder='Start stetment date' value={hideEndStatementDate} onChange={(e) => statementDateChange("endStatementDate", e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <p className=" leading-7 print:text-[10px] print:leading-[22px] print:font-medium">Statement of Account for the Period: {startStatementDate} <span className=' mx-1'>to</span> {endStatementDate}</p>
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

                                <div className=' border-t border-gray-400 w-full flex justify-between px-1 pb-10 print:pb-5 print:text-[10px] print:leading-[18px] font-normal'>
                                    <div className='w-2/5'>

                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-32'>Customer Name</span>
                                                    <span className=' mx-2'>:</span>
                                                    <input type="text" placeholder='Customer Name' value={accountHoldersName} onChange={(e) => setAccountHoldersName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between w-32 print:w-20'>
                                                        <span className=''>Customer Name</span>
                                                        <span className="">:</span>
                                                    </div>
                                                    <div className=' text-left pl-2 w-[calc(100%-theme(space.32))] print:w-[calc(100%-theme(space.20))]'>
                                                        <span className=' font-medium'>{accountHoldersName}</span>
                                                    </div>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' my-1'>
                                                    <span className=' inline-block w-32'>Address</span>
                                                    <span className=' mx-2'>:</span>
                                                    <input type="text" placeholder='Address' value={accountHoldersAddress} onChange={(e) => setAccountHoldersAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' flex justify-between w-32 print:w-20'>
                                                        <span className=''>Address</span>
                                                        <span className="">:</span>
                                                    </div>
                                                    <div className=' text-left pl-2 w-[calc(100%-theme(space.32))] print:w-[calc(100%-theme(space.32))]'>
                                                        <span className=''>{accountHoldersAddress}</span>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                    <div className=' w-2/5 pr-5 print:leading-[14px]'>
                                        {
                                            editMode ?
                                                <div className=''>
                                                    <span className=' inline-block w-[100px]'>Account Type</span>
                                                    <span className=' mx-2 font-semibold'>:</span>
                                                    <input type="text" placeholder='Account Type' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <div className=' w-40 print:w-24 text-left flex'>
                                                        <span className=' inline-block w-[100px]'>Account Type</span>
                                                        <span className=' mx-2 font-semibold'>:</span>
                                                    </div>
                                                    <span className=''>{accountType}</span>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=''>
                                                    <span className=' inline-block w-[100px]'>A/c No</span>
                                                    <span className=' mx-2 font-semibold'>:</span>
                                                    <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className='flex'>
                                                    <div className=' w-40 print:w-24 text-left flex'>
                                                        <span className=' inline-block w-[100px]'>A/c No</span>
                                                        <span className=' mx-2 font-semibold'>:</span>
                                                    </div>
                                                    <span className=''>{accountNumber}</span>
                                                </div>
                                        }

                                        {
                                            editMode ?
                                                <div>

                                                    <div>
                                                        <span className=' inline-block w-[100px]'>Cust. ID</span>
                                                        <span className=' mx-2 font-semibold'>:</span>
                                                        <input type="text" placeholder='Customer ID' value={customerId} onChange={(e) => setCustomerId(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                    </div>
                                                    <div>
                                                        <span className=' inline-block w-[100px]'>Interest</span>
                                                        <span className=' mx-2 font-semibold'>:</span>
                                                        <input type="text" placeholder='Customer ID' value={accountInterestRate} onChange={(e) => setAccountInterestRate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                    </div>
                                                </div>
                                                :
                                                <div className=' flex justify-between'>
                                                    <div className='flex'>
                                                        <div className=' w-40 print:w-24 text-left flex'>
                                                            <span className=' inline-block w-[100px]'>Cust. ID</span>
                                                            <span className=' mx-2 font-semibold'>:</span>
                                                        </div>
                                                        <span className=' uppercase'>{customerId}</span>
                                                    </div>
                                                    <div className='flex'>
                                                        <div className=' w-40 print:w-20 text-left flex'>
                                                            <span className=''>Interest Rate</span>
                                                            <span className=' mx-2 font-semibold'>:</span>
                                                        </div>
                                                        <span className=' uppercase'>{accountInterestRate}</span>
                                                    </div>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div>
                                                    <span className=' inline-block w-[100px]'>Currency</span>
                                                    <span className=' mx-2 font-semibold'>:</span>
                                                    <input type="text" placeholder='Currency' value={accountCurrency} onChange={(e) => setAccountCurrency(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className='flex'>
                                                    <div className=' w-40 print:w-24 text-left flex'>
                                                        <span className=' inline-block w-[100px]'>Currency</span>
                                                        <span className=' mx-2 font-semibold'>:</span>
                                                    </div>
                                                    <span className=' uppercase'>{accountCurrency}</span>
                                                </div>
                                        }
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
                                    </div>
                                </div>
                            </div>
                        </th>
                    </tr>
                    <tr className=''>
                        <td className=' font-medium  border-t border-x border-gray-400 p-2 print:text-[10px] print:px-1 print:py-0 text-center'>SL#</td>
                        <td className=' font-medium  border-t border-r border-gray-400 p-2 print:text-[10px] print:px-1 print:py-0 text-center'>Date</td>
                        <td className=' font-medium  border-t border-r border-gray-400 p-2 print:text-[10px] print:px-1 print:py-0 text-center w-[20%]'>Trands. Code / Chq No</td>
                        <td className=' font-medium  border-t border-r border-gray-400 p-2 print:text-[10px] print:px-1 print:py-0 text-center'>Debit Amount</td>
                        <td className=' font-medium  border-t border-r border-gray-400 p-2 print:text-[10px] print:px-1 print:py-0 text-center'>Credit Amount</td>
                        <td className=' font-medium  border-t border-r border-gray-400 p-2 print:text-[10px] print:px-1 print:py-0 text-center'>Balance Amount</td>
                        <td className=' font-medium  border-t border-r border-gray-400 p-2 print:text-[10px] print:px-1 print:py-0 text-center w-[27%]'>Remarks</td>
                    </tr>
                </thead>

                <tbody className=' align-text-top'>
                    <tr>
                        <td className=' p-2 border-t border-x border-gray-400 print:px-1 py-0 print:leading-4 print:text-[10px] text-center'></td>
                        <td className=' p-2 border-t border-r border-gray-400 print:px-1 py-0 print:leading-4 print:text-[10px] text-center'></td>
                        <td className=' p-2 border-t border-r border-gray-400 print:px-1 py-0 print:leading-4 print:text-[10px] w-[20%]'></td>
                        <td className=' p-2 border-t border-r border-gray-400 print:px-1 py-0 print:leading-4 print:text-[10px] text-right'></td>
                        <td className=' p-2 border-t border-r border-gray-400 print:px-1 py-0 print:leading-4 print:text-[10px] text-right font-medium'>Opening Balance :</td>
                        <td className=' p-2 border-t border-r-0 border-gray-400 print:px-1 py-0 print:leading-4 print:text-[10px] text-right font-medium'>{commaNumber(initialBalance)}</td>
                        <td className=' p-2 border-t border-l-0 border-r border-gray-400 print:px-1 py-0 print:leading-4 print:text-[10px] text-left w-[27%]'></td>
                    </tr>
                    {
                        randomTransictions.length > 0 && randomTransictions.map((item, index) => {
                            return (
                                <tr>
                                    <td className='p-2  border-t  border-x border-gray-400 print:px-[1px] print:py-0 print:text-[10px] print:leading-[14px] text-center'>{index + 1}</td>
                                    <td className='p-2  border-t border-r border-gray-400 print:px-[1px] print:py-0 print:text-[10px] print:leading-[14px] text-center'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.date} onChange={(e) => changeFields(e.target.value, index, "date", randomTransictions, setRandomTransictions)} placeholder='Date' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                                :
                                                <span>{item.date}</span>
                                        }
                                    </td>
                                    <td className='p-2  border-t border-r border-gray-400 print:px-[1px] print:py-0 print:text-[10px] print:leading-[14px] w-[20%]'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.branchCode} onChange={(e) => changeFields(e.target.value, index, "particular", randomTransictions, setRandomTransictions)} placeholder='Cheque' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                                :
                                                <span>{item.branchCode}</span>
                                        }
                                    </td>
                                    <td className='p-2  border-t border-r border-gray-400 print:px-[1px] print:py-0 print:text-[10px] print:leading-[14px] text-right'>
                                        {
                                            item.withdrawal > 0 ?
                                                <span>{commaNumber(item.withdrawal)}</span>
                                                :
                                                <span>00.0</span>
                                        }
                                    </td>
                                    <td className='p-2  border-t border-r border-gray-400 print:px-[1px] print:py-0 print:text-[10px] print:leading-[14px] text-right'>
                                        {
                                            item.deposit > 0 ?
                                                <span>{commaNumber(item.deposit)}</span>
                                                :
                                                <span>0.00</span>
                                        }
                                    </td>
                                    <td className='p-2  border-t border-r border-gray-400 print:px-[1px] print:py-0 print:text-[10px] print:leading-[14px] text-right'>{commaNumber(item.balance)}</td>
                                    <td className='p-2  border-t border-r border-gray-400 print:px-[1px] print:py-0 print:text-[10px] print:leading-[14px] text-left w-[27%]'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.particular} onChange={(e) => changeFields(e.target.value, index, "particular", randomTransictions, setRandomTransictions)} placeholder='Particulars' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                                :
                                                <span>{item.particular}</span>
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }

                    <tr className=''>
                        <td className='p-2 border-y border-x border-gray-400 print:px-1 print:text-[10px] print:py-0 text-right pr-5' colSpan="3">Total Debit/Credit : {"-->"} </td>
                        <td className='p-2 border-y border-r border-gray-400 print:px-1 print:text-[10px] print:py-0 uppercase text-right'>{commaNumber(totalWithdrawal)}</td>
                        <td className='p-2 border-y border-r border-gray-400 print:px-1 print:text-[10px] print:py-0 text-right'>{commaNumber(totalDeposit)}</td>
                        <td className='p-2 border-y border-r border-gray-400 print:px-1 print:text-[10px] print:py-0' colspan="2 border-t-0"></td>
                    </tr>
                </tbody>
                <tfoot className="table-footer-group">
                    <tr>
                        <td colSpan={7}>
                            <div className=' w-full py-12'>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>

            <div className=' print:fixed bottom-3 w-full print:text-[11px] relative'>
                <p className=' text-center font-medium pt-5 print:text-[10px]'>Thanks for banking with us.</p>
                <hr className=' h-[2px] bg-gray-400 w-full' />
                <p className=' print:text-[10px] print:leading-[12px]'>The Customer should examine promptly the statement received and notify the bank in writing within 15 calendar days after the statement is maild,transmitted, or otherwise made available to customer of any errors,discrepancies or irregularities detected failng,failing which the statement will deem to be correct. This is a computer generated statement and does not require any signature.</p>
                <img src={sil} alt="" className='w-28 absolute bottom-2 right-6' />
            </div>
        </div>

    )
}

export default BankAsiaOne