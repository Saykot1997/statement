import axios from 'axios';
import commaNumber from 'comma-number';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Host } from '../../Data';
import { TransactionAmountFatchSuccess } from '../../Redux/TransactionAmount_slice';
import { transactionsFatchSuccess } from '../../Redux/Transactions_slice';
import GenerateRandomTranjections from '../../Utils/GenerateRandomTransaction';
import logo from "../../Photos/city_bank/logo.png";
import GetFormatedDate from '../../Utils/GetFormatedDate';
import EditButtonComponent from '../../Components/EditButtonComponent';
import changeFields from '../../Utils/ChangeFields';
import sil from "../../Photos/city_bank/sil.png"

function CityBankStatement() {

    const [randomTransictions, setRandomTransictions] = useState([])
    const [initialBranchCode, setInitialBranchCode] = useState(32)
    const [transactionQuantity, setTransactionQuantity] = useState(40);
    const [initialBalance, setInitialBalance] = useState(700000.00);
    const [editMode, setEditMode] = useState(false);
    const [printDate, setPrintDate] = useState("01/01/2020");
    const [branchName, setBranchName] = useState("UTTRA BRANCH");
    const [branchAddress, setBranchAddress] = useState("THE CITY BANK LIMITED,UTTARA BRANCH");
    const [branchAddress2, setBranchAddress2] = useState("HOUSE-8, SECTOR-7 UTTRA MODEL TOWN,DHAKA");
    const [openingDate, setOpeningDate] = useState("01/01/2020");
    const [statementNumber, setStatementNumber] = useState("CBL/Statement/01/761966/2011");
    const [lastTRDate, setLastTRDate] = useState("01/01/2020");
    const [customerId, setCustomerId] = useState("CB2889932");
    const [accountCurrency, setAccountCurrency] = useState("BDT");
    const [accountType, setAccountType] = useState("CURRENT ACCOUNT [RB-DS]");
    const [accountNumber, setAccountNumber] = useState("1302889932001");
    const [accountHoldersName, setAccountHoldersName] = useState("S M MASUKUR RAHMAN");
    const [accountHoldersAddress, setAccountHoldersAddress] = useState("HOUSE:1324,RD:13,AVENUE:02 MIRPUR DOSH, DHAKA, BANGLADESH");
    const [accountHoldersPhone, setAccountHoldersPhone] = useState("8355179");
    const [accountStatus, setAccountStatus] = useState("ACTIVE");
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
        <div className=' w-full min-h-screen p-10 print:p-0'>

            <EditButtonComponent editMode={editMode} toggleEditMode={toggleEditMode} GenerateTranjections={GenerateTranjections} />

            <table className='w-full'>
                <thead class=" table-header-group w-full">
                    <tr className=' w-full'>
                        <th class="report-header-cell w-full" colspan="6">
                            <div className=' flex justify-between pb-1'>
                                <div>
                                    <img src={logo} alt="" className='w-48' />
                                </div>
                                <div className=' text-right w-[50%]'>
                                    <p>Statement Of Account</p>
                                    {
                                        editMode ?
                                            <div className=' flex items-center justify-end'>
                                                <span className=' font-semibold'>Branch Name :</span>
                                                <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            </div>
                                            :

                                            <p className=' print:text-[12px] print:leading-[16px] mt-[2px]'>{branchName}</p>
                                    }
                                    {
                                        editMode ?
                                            <div className=' flex items-center justify-end'>
                                                <span className=' font-semibold'>Branch Address :</span>
                                                <input type="text" placeholder='Branch Address' value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <p className=' text-right font-semibold print:text-[12px] print:leading-[16px]'>{branchAddress}</p>
                                    }
                                    {
                                        editMode ?
                                            <div className=' flex items-center justify-end'>
                                                <span className=' font-semibold'>Branch Address 2 :</span>
                                                <input type="text" placeholder='Branch Address' value={branchAddress2} onChange={(e) => setBranchAddress2(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <p className=' text-right font-semibold print:text-[12px] print:leading-[16px]'>{branchAddress2}</p>
                                    }

                                </div>
                            </div>
                            <span className=' block h-[2px] w-full bg-gray-700' />
                            <div className=' flex font-normal text-left mb-5'>
                                <div className=' w-2/5 print:text-[11px]'>
                                    {
                                        editMode ?
                                            <div className=' flex items-center'>
                                                <span className=' font-semibold'>Statement Number :</span>
                                                <input type="text" placeholder='Statement Number' value={statementNumber} onChange={(e) => setStatementNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <p className=' font-medium'>{statementNumber}</p>
                                    }
                                    {
                                        editMode ?
                                            <p className=' text-sm font-semibold print:font-normal print:text-right print:text-[12px]'>Statement Print Date :
                                                <input type="text" placeholder='Print date' value={printDate} onChange={(e) => setPrintDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </p>
                                            :
                                            <p className=' font-medium'>Statement Print Date: <span>{printDate}</span></p>
                                    }
                                    {
                                        editMode ?
                                            <p className=' text-sm font-semibold print:font-normal print:text-right print:text-[12px]'>Account Holder Name :
                                                <input type="text" placeholder='Account Holder name' value={accountHoldersName} onChange={(e) => setAccountHoldersName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </p>
                                            :

                                            <p className=' font-medium mt-1'>{accountHoldersName}</p>

                                    }
                                    {
                                        editMode ?
                                            <div className=' flex items-center'>
                                                <span className=' font-semibold'>Address :</span>
                                                <input type="text" placeholder='Account Holder Address' value={accountHoldersAddress} onChange={(e) => setAccountHoldersAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <p className=' mt-2'>{accountHoldersAddress}</p>

                                    }
                                </div>
                                <div className=' w-3/5 pl-20 print:text-[11px] pt-2'>
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
                                                <div className=' flex justify-between w-32'>
                                                    <span className='font-semibold'>Period From</span>
                                                    <span className=" mr-2">:</span>
                                                </div>
                                                <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                    <p className=' font-semibold print:font-semibold'> <span> {startStatementDate}</span> To <span>{endStatementDate}</span></p>
                                                </div>
                                            </div>
                                    }
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-32 font-semibold print:font-semibold'>Account Number</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className=' flex'>
                                                <div className=' flex justify-between w-32'>
                                                    <span className='font-semibold'>Account Number</span>
                                                    <span className=" mr-2">:</span>
                                                </div>
                                                <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                    <span className=' font-semibold'>{accountNumber}</span>
                                                </div>
                                            </div>
                                    }
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-32 font-semibold print:font-semibold'>Customer Id</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Customer Id' value={customerId} onChange={(e) => setCustomerId(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className=' flex'>
                                                <div className=' flex justify-between w-32'>
                                                    <span className='font-semibold'>Customer Id</span>
                                                    <span className=" mr-2">:</span>
                                                </div>
                                                <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                    <span className=' font-semibold'>{customerId}</span>
                                                </div>
                                            </div>
                                    }
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-32 font-semibold print:font-semibold'>Product Name</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Product Name' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className=' flex'>
                                                <div className=' flex justify-between w-32'>
                                                    <span className='font-semibold'>Product Name</span>
                                                    <span className=" mr-2">:</span>
                                                </div>
                                                <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                    <span className=' font-semibold'>{accountType}</span>
                                                </div>
                                            </div>
                                    }
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-32 font-semibold print:font-semibold'>Status</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Account Status' value={accountStatus} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className=' flex'>
                                                <div className=' flex justify-between w-32'>
                                                    <span className='font-semibold'>Status</span>
                                                    <span className=" mr-2">:</span>
                                                </div>
                                                <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                    <span className=' font-semibold'>{accountStatus}</span>
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
                                                <div className=' flex justify-between w-32'>
                                                    <span className='font-semibold'>Currency</span>
                                                    <span className=" mr-2">:</span>
                                                </div>
                                                <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                    <span className=' font-semibold'>{accountCurrency}</span>
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
                        </th>
                    </tr>
                    <tr className=' text-gray-900'>
                        <td className=' font-semibold print:px-1 py-1 print:text-[11px] border border-gray-700 p-2'>DATE</td>
                        <td className=' font-semibold print:px-1 py-1 print:text-[11px] border border-gray-700 p-2 w-[40%]'>DESCRIPTION</td>
                        <td className=' font-semibold print:px-1 py-1 print:text-[11px] border border-gray-700 p-2'>CHQ.NO.</td>
                        <td className=' font-semibold print:px-1 py-1 print:text-[11px] border border-gray-700 p-2 text-right w-[15%]'>WITHDRAWAL</td>
                        <td className=' font-semibold print:px-1 py-1 print:text-[11px] border border-gray-700 p-2 text-right w-[15%]'>DEPOSIT</td>
                        <td className=' font-semibold print:px-1 py-1 print:text-[11px] border border-gray-700 p-2 text-right w-[15%]'>BALANCE[BDT]</td>
                    </tr>
                </thead>
                <tbody>

                    <tr className=''>
                        <td className='print:px-1 py-0 print:text-[11px] p-2'></td>
                        <td className='print:px-1 py-0 print:text-[11px] p-2'>Balance Forward</td>
                        <td className='print:px-1 py-0 print:text-[11px] p-2'></td>
                        <td className='print:px-1 py-0 print:text-[11px] p-2 text-right'></td>
                        <td className='print:px-1 py-0 print:text-[11px] p-2 text-right'></td>
                        <td className='print:px-1 py-0 print:text-[11px] p-2 text-right'>{commaNumber(initialBalance)}</td>
                    </tr>

                    {
                        randomTransictions.length > 0 && randomTransictions.map((item, index) => {

                            return (
                                <tr className=' print:leading-[14px] align-text-top'>
                                    <td className='p-2 print:py-[2px] print:px-1 print:text-[11px]'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.date} onChange={(e) => changeFields(e.target.value, index, "date", randomTransictions, setRandomTransictions)} placeholder='Date' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                :
                                                <span>{item.date}</span>
                                        }
                                    </td>
                                    <td className='p-2 print:py-[2px] print:px-[6px] print:text-[11px]'>

                                        {
                                            editMode ?
                                                <input type="text" value={item.particular} onChange={(e) => changeFields(e.target.value, index, "particular", randomTransictions, setRandomTransictions)} placeholder='Date' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                                :
                                                <p>{item.particular} <span className=' capitalize'>on Date {GetFormatedDate(item.date)}</span></p>
                                        }
                                    </td>
                                    <td className='p-2 print:py-[2px] print:px-1 print:text-[11px]'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.cheque} onChange={(e) => changeFields(e.target.value, index, "cheque", randomTransictions, setRandomTransictions)} placeholder='Date' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                :
                                                <span>{item.cheque}</span>
                                        }
                                    </td>

                                    <td className='p-2 print:py-[2px] print:px-1 print:text-[11px] text-right'>{item.withdrawal > 0 && commaNumber(item.withdrawal)}</td>
                                    <td className='p-2 print:py-[2px] print:px-1 print:text-[11px] text-right'>{item.deposit > 0 && commaNumber(item.deposit)}</td>
                                    <td className='p-2 print:py-[2px] print:px-1 print:text-[11px] text-right'>{commaNumber(item.balance)}</td>
                                </tr>
                            )
                        })
                    }

                    <tr>
                        <td colSpan={6} className="print:text-[11px] my-1">
                            <div className=' w-full py-2'>
                                <span className=' block w-full h-[1px] bg-gray-700 mb-1'></span>
                                <div className=' w-full flex justify-between'>
                                    <div className=' flex'>
                                        <div className=' w-[134px] flex justify-between'>
                                            <span>Total Withdrawal in BDT</span>
                                            <span className=' mr-2'>:</span>
                                        </div>
                                        <span className=''>{commaNumber(totalWithdrawal)}</span>
                                    </div>
                                    <div className=' flex'>
                                        <div className='text-right'>
                                            <span>Opening Balance:</span>
                                        </div>
                                        <span className=' inline-block w-24 text-right'>{commaNumber(initialBalance)} (Cr)</span>
                                    </div>
                                </div>
                                <div className=' w-full flex justify-between'>
                                    <div className=' flex'>
                                        <div className=' w-[134px] flex justify-between'>
                                            <span>Total Deposit in BDT</span>
                                            <span className=' mr-2'>:</span>
                                        </div>
                                        <span className=''>{commaNumber(totalDeposit)}</span>
                                    </div>
                                    <div className=' flex'>
                                        <div className='text-right'>
                                            <span> Balance: ({startStatementDate})</span>
                                        </div>
                                        <span className=' inline-block w-24 text-right'>{randomTransictions.length > 0 && commaNumber(randomTransictions[randomTransictions.length - 1].balance)} (Cr)</span>
                                    </div>
                                </div>
                                <div className=' w-full flex items-center justify-between'>
                                    <span className=' block w-[43%]  h-[1px] bg-gray-700'></span>
                                    <span className=''>End Of Statement</span>
                                    <span className=' block w-[43%]  h-[1px] bg-gray-700'></span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot class="table-footer-group">
                    <tr>
                        <td class=" " colspan="6">
                            <div className=' w-full print:text-[8px] font-medium'>
                                <div className=' w-full border border-gray-800 py-[2px] px-1'>
                                    <p className=' text-center'>Note.Please verify the items and balance on this statement and advice the bank of any discrepancy within 14 days of th statement date.</p>
                                </div>
                                <div className=' w-full flex justify-end'>
                                    <div className=' mt-1 pr-20'>
                                        <p>Page 1 of 1</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-full flex justify-center '>
                                <img src={sil} alt="" className=' w-20' />
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}

export default CityBankStatement