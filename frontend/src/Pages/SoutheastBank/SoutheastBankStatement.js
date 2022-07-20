import axios from 'axios';
import commaNumber from 'comma-number';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Host } from '../../Data';
import { TransactionAmountFatchSuccess } from '../../Redux/TransactionAmount_slice';
import { transactionsFatchSuccess } from '../../Redux/Transactions_slice';
import GenerateRandomTranjections from '../../Utils/GenerateRandomTransaction';
import logo from "../../Photos/southeast_bank/logo 3.png";
import GetFormatedDate from '../../Utils/GetFormatedDate';
import EditButtonComponent from '../../Components/EditButtonComponent';
import changeFields from '../../Utils/ChangeFields';
import sil from "../../Photos/southeast_bank/sil.png"

function SoutheastBankStatement() {

    const [randomTransictions, setRandomTransictions] = useState([])
    const [transactionQuantity, setTransactionQuantity] = useState(40);
    const [initialBalance, setInitialBalance] = useState(700000.00);
    const [editMode, setEditMode] = useState(false);
    const [printDate, setPrintDate] = useState("16-Jun-2022 12:13 pm");
    // const [statementValidDate, setStatementValidDate] = useState("April 01,2022");
    const [branchName, setBranchName] = useState("Uttara Branch");
    const [branchAddress, setBranchAddress] = useState("ARHAMS , PLOT#79, SECTOR-07, DHAKA-MYMENSIGH HIGHWAY, AZAMPUR, UT Dhaka");
    const [openingDate, setOpeningDate] = useState("01/01/2020");
    const [accountHoldersName, setAccountHoldersName] = useState("MOHD MOMINUR RAHMAN");
    const [accountHoldersAddress, setAccountHoldersAddress] = useState("HOUSE-430(3RD FLOOR), ROAD-03 BAITULAMAN HOUSING, POST - MOHAMMADPUR");
    const [accountHolderCity, setAccountHolderCity] = useState("Dhaka")
    const [accountHoldersPhone, setAccountHoldersPhone] = useState("01715077361");
    const [customerId, setCustomerId] = useState("CB2889932");
    const [accountCurrency, setAccountCurrency] = useState("BDT");
    const [accountType, setAccountType] = useState("CURRENT ACCOUNT [RB-DS]");
    const [accountNumber, setAccountNumber] = useState("1302889932001");
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

            const res = await axios.get(`${Host}/api/user/transaction/city_bank`, {
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
        <div className=' w-full min-h-screen p-10 print:p-0 bg-southeast-background bg-repeat-y bg-100% bg-center'>

            <EditButtonComponent editMode={editMode} toggleEditMode={toggleEditMode} GenerateTranjections={GenerateTranjections} />

            <div className=' flex justify-between pb-[2px]'>
                <div>
                    <img src={logo} alt="" className='w-48 translate-y-4' />
                </div>
                <div className=' w-[63%] font-normal text-left print:text-[11px]'>

                    {
                        editMode ?
                            <div className=' flex items-center justify-end'>
                                <span className=' font-semibold'>Branch Name :</span>
                                <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            </div>
                            :

                            <p className='text-center font-semibold print:text-[13px]'>{branchName}</p>
                    }
                    <div className=' w-full flex justify-between print:justify-start mt-1'>
                        <div className=' text-left print:w-[220px]'>
                            {
                                editMode ?
                                    <div className=' flex items-center justify-end'>
                                        <span className=' font-semibold'>Branch Address :</span>
                                        <input type="text" placeholder='Branch Address' value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                    </div>
                                    :
                                    <p className=''>{branchAddress}</p>
                            }
                            <p>www.southeastbank.com.bd</p>
                        </div>
                        <div className=''>
                            <div className=' flex'>
                                <div className=' flex justify-between w-16'>
                                    <span className=''>Tel</span>
                                    <span className=" mr-2">:</span>
                                </div>
                                <div className=' text-left ml-1 w-[calc(100%-theme(space.16))]'>
                                    <span className=' '>58953680, 58953591</span>
                                </div>
                            </div>
                            <div className=' flex'>
                                <div className=' flex justify-between w-16'>
                                    <span className=''>Fax</span>
                                    <span className=" mr-2">:</span>
                                </div>
                                <div className=' text-left ml-1 w-[calc(100%-theme(space.16))]'>
                                    <span className=' '>88 - 02 - 58953781</span>
                                </div>
                            </div>
                            <div className=' flex'>
                                <div className=' flex justify-between w-16'>
                                    <span className=''>SWIFT</span>
                                    <span className=" mr-2">:</span>
                                </div>
                                <div className=' text-left ml-1 w-[calc(100%-theme(space.16))]'>
                                    <span className=' '>SEBDBDDHUTT</span>
                                </div>
                            </div>
                            <div className=' flex'>
                                <div className=' flex justify-between w-16'>
                                    <span className=''>E-mail</span>
                                    <span className=" mr-2">:</span>
                                </div>
                                <div className=' text-left ml-1 w-[calc(100%-theme(space.16))]'>
                                    <span className=' '>info.ut@southeastbank.com.bd</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className=' block w-full h-[1px] bg-gray-700'></span>
            <p className=' text-center font-semibold'>Statement of Account</p>
            <div className=' flex font-normal text-left'>
                <div className=' w-1/2 print:text-[11px]'>
                    {
                        editMode ?
                            <div className=' my-1'>
                                <span className=' inline-block w-24 font-semibold print:font-semibold'>Name</span>
                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                <input type="text" placeholder='Account Holder Name' value={accountHoldersName} onChange={(e) => setAccountHoldersName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                            </div>
                            :
                            <div className=' flex'>
                                <div className=' flex justify-between text-left w-28 print:w-20'>
                                    <span className=''>Name</span>
                                    <span className="">:</span>
                                </div>
                                <div className=' text-left ml-1 w-[calc(100%-theme(space.20))]'>
                                    <span className=' ml-1 '>{accountHoldersName}</span>
                                </div>
                            </div>
                    }
                    {
                        editMode ?
                            <div className=' my-1'>
                                <span className=' inline-block w-24 font-semibold print:font-semibold'>Customer Id</span>
                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                <input type="text" placeholder='Account Holder Name' value={customerId} onChange={(e) => setCustomerId(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                            </div>
                            :
                            <div className=' flex mt-2'>
                                <div className=' flex justify-between text-left w-28 print:w-20'>
                                    <span className=' '>Customer ID</span>
                                    <span className="">:</span>
                                </div>
                                <div className=' text-left ml-1 w-[calc(100%-theme(space.20))]'>
                                    <span className=' ml-1 '>{customerId}</span>
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
                                <div className=' flex justify-between text-left w-28 print:w-[84px]'>
                                    <span className=' '>Address</span>
                                    <span className=" print:pr-1">:</span>
                                </div>
                                <div className=' text-left ml-1 w-[calc(100%-theme(space.20))]'>
                                    <span className=' inline-block w-[90%]'>{accountHoldersAddress}</span>
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
                            <div className=' flex'>
                                <div className=' flex justify-between text-left w-28 print:w-20'>
                                    <span className=''>City</span>
                                    <span className="">:</span>
                                </div>
                                <div className=' text-left ml-1 w-[calc(100%-theme(space.20))]'>
                                    <span className=' ml-1 '>{accountHolderCity}</span>
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
                                <div className=' flex justify-between text-left w-28 print:w-20'>
                                    <span className=' '>Phone</span>
                                    <span className="">:</span>
                                </div>
                                <div className=' text-left ml-1 w-[calc(100%-theme(space.20))]'>
                                    <span className=' ml-1 '>{accountHoldersPhone}</span>
                                </div>
                            </div>
                    }
                    {
                        editMode ?

                            <div className=" leading-7 print:leading-[22px] flex">
                                <span className='inline-block w-32 font-semibold print:font-semibold'>Statement Date</span>

                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                <input type="date" placeholder='Start stetment date' value={hideStartStatementDate} onChange={(e) => statementDateChange("startStatementDate", e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />

                                to

                                <input type="date" placeholder='Start stetment date' value={hideEndStatementDate} onChange={(e) => statementDateChange("endStatementDate", e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />
                            </div>
                            :
                            <div className=' flex'>
                                <div className=' flex justify-between text-left w-28 print:w-20'>
                                    <span className=' '>Period</span>
                                    <span className="">:</span>
                                </div>
                                <div className=' text-left ml-1 w-[calc(100%-theme(space.20))]'>
                                    <p className='ml-1 inline-block'> <span>From {startStatementDate}</span> To <span>{endStatementDate}</span></p>
                                </div>
                            </div>

                    }
                    {
                        editMode ?
                            <div className=' my-1'>
                                <span className=' inline-block w-24 font-semibold print:font-semibold'>Print Date</span>
                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                <input type="text" placeholder='Phone' value={printDate} onChange={(e) => setPrintDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                            </div>
                            :
                            <div className=' flex'>
                                <div className=' flex justify-between text-left w-28 print:w-20'>
                                    <span className=' '>Print Date</span>
                                    <span className="">:</span>
                                </div>
                                <div className=' text-left ml-1 w-[calc(100%-theme(space.20))]'>
                                    <span className=' ml-1 '>{printDate}</span>
                                </div>
                            </div>
                    }

                </div>
                <div className=' w-1/2 pl-20 print:text-[11px] pt-2'>

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
                            <div className=' flex mt-2'>
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
                                <span className=' inline-block w-32 font-semibold print:font-semibold'>A/C Open Date</span>
                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                <input type="text" placeholder='AC Opening Date' value={openingDate} onChange={(e) => setOpeningDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                            </div>
                            :
                            <div className=' flex'>
                                <div className=' flex justify-between w-32'>
                                    <span className=''>A/C Open Date</span>
                                    <span className=" mr-2">:</span>
                                </div>
                                <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                    <span className=' '>{openingDate}</span>
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
                            <div className=' flex mt-2'>
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
                                <span className=' inline-block w-32 font-semibold print:font-semibold'>Currency</span>
                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                <input type="text" placeholder='Account Currency' value={accountCurrency} onChange={(e) => setAccountCurrency(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                            </div>
                            :
                            <div className=' flex mt-2'>
                                <div className=' flex justify-between w-32'>
                                    <span className=''>Currency</span>
                                    <span className=" mr-2">:</span>
                                </div>
                                <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                    <span className=' '>{accountCurrency}</span>
                                </div>
                            </div>
                    }
                    <div className=' flex mt-2'>
                        <div className=' flex justify-between w-32'>
                            <span className=''>Available Balance</span>
                            <span className=" mr-2">:</span>
                        </div>
                        <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                            <span className=' '>9,843,275 BDT</span>
                        </div>
                    </div>

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

            <table className='w-full'>
                <thead class=" table-header-group w-full">
                    <tr>
                        <th className=' w-full pt-1' colSpan={7}>

                        </th>
                    </tr>
                    <tr className=' text-gray-900 print:text-[11px]'>
                        <th className=' font-semibold print:px-0 py-1 border-y border-gray-700 p-2 text-left'>Date</th>
                        <th className=' font-semibold print:px-0 py-1 border-y border-gray-700 p-2 text-left'>Cheque No</th>
                        <th className=' font-semibold print:px-0 py-1 border-y border-gray-700 p-2 text-left w-[25%]'>Narration</th>
                        <th className=' font-semibold print:px-0 py-1 border-y border-gray-700 p-2 text-center w-[8%]'>Trans Type</th>
                        <th className=' font-semibold print:px-0 py-1 border-y border-gray-700 p-2 text-right w-[15%]'>Debit</th>
                        <th className=' font-semibold print:px-0 py-1 border-y border-gray-700 p-2 text-right w-[15%]'>Credit</th>
                        <th className=' font-semibold print:px-0 py-1 border-y border-gray-700 p-2 text-right w-[15%]'>Balance</th>
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
                                    <td className='p-2 print:py-[2px] print:px-0'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.date} onChange={(e) => changeFields(e.target.value, index, "date", randomTransictions, setRandomTransictions)} placeholder='Date' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                :
                                                <span>{item.date}</span>
                                        }
                                    </td>
                                    <td className='p-2 print:py-[2px] print:px-0'>
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
                                    <td className='p-2 print:py-[2px] print:px-0 text-center'>T</td>
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

                    <tr className='border-dashed border-t border-gray-600'>
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
                            <div className=' w-full pt-5 flex justify-end'>
                                <div className=' w-1/2 pr-10'>
                                    <div className=' w-full flex justify-between'>
                                        <div className=' flex justify-between w-[55%]'>
                                            <span className=' font-medium'>Line Amount</span>
                                            <span className=' font-medium'>:</span>
                                        </div>
                                        <span className=' font-medium'>0.00</span>
                                    </div>
                                    <div className=' w-full flex justify-between'>
                                        <div className=' flex justify-between w-[55%]'>
                                            <span className=' font-medium'>Blocked Amount</span>
                                            <span className=' font-medium'>:</span>
                                        </div>
                                        <span className=' font-medium'>0.00</span>
                                    </div>
                                    <div className=' w-full flex justify-between'>
                                        <div className=' flex justify-between w-[55%]'>
                                            <span className=' font-medium'>Hold Amount</span>
                                            <span className=' font-medium'>:</span>
                                        </div>
                                        <span className=' font-medium'>0.00</span>
                                    </div>

                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot class="table-footer-group">
                    <tr>
                        <td class=" py-5" colspan="7">
                        </td>
                    </tr>
                </tfoot>
            </table>

            <div className=' print:fixed bottom-5 w-full print:text-[12px] relative'>
                <span className=' w-full h-[1px] bg-gray-700 block'></span>
                <div className=''>
                    <p className=' text-center font-medium'>Please submit your National ID and 12 digit e-TIN to avoid 5% extra tax on interest earning</p>
                </div>
                <img src={sil} alt="" className="absolute -top-10 right-7 w-32" />

            </div>
        </div>
    )
}

export default SoutheastBankStatement