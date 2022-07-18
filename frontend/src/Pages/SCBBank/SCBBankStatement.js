import axios from 'axios';
import commaNumber from 'comma-number';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Host } from '../../Data';
import { TransactionAmountFatchSuccess } from '../../Redux/TransactionAmount_slice';
import { transactionsFatchSuccess } from '../../Redux/Transactions_slice';
import GenerateRandomTranjections from '../../Utils/GenerateRandomTransaction';
import logo from "../../Photos/scb_bank/logo.png";
import GetFormatedDate from '../../Utils/GetFormatedDate';
import EditButtonComponent from '../../Components/EditButtonComponent';
import changeFields from '../../Utils/ChangeFields';
import sil from "../../Photos/city_bank/sil.png"

function SCBBankStatement() {

    const [randomTransictions, setRandomTransictions] = useState([])
    const [initialBranchCode, setInitialBranchCode] = useState(32)
    const [transactionQuantity, setTransactionQuantity] = useState(40);
    const [initialBalance, setInitialBalance] = useState(700000.00);
    const [editMode, setEditMode] = useState(false);
    const [printDate, setPrintDate] = useState("26JUN22");
    const [branchName, setBranchName] = useState("Sonargaon Booth");
    const [branchPhone, setBranchPhone] = useState("019666777111");
    const [branchAddress, setBranchAddress] = useState("THE CITY BANK LIMITED,UTTARA BRANCH");
    const [branchAddress2, setBranchAddress2] = useState("HOUSE-8, SECTOR-7 UTTRA MODEL TOWN,DHAKA");
    const [openingDate, setOpeningDate] = useState("01/01/2020");
    const [lastTRDate, setLastTRDate] = useState("01/01/2020");
    const [customerId, setCustomerId] = useState("CB2889932");
    const [accountCurrency, setAccountCurrency] = useState("BANGLADESH TAKA");
    const [accountType, setAccountType] = useState("CURRENT ACCOUNTS");
    const [accountNumber, setAccountNumber] = useState("01 1196519 01");
    const [accountHoldersName, setAccountHoldersName] = useState("GLOBAL IMMIGRATION CONSULTANTS LTD.");
    const [accountHoldersAddress, setAccountHoldersAddress] = useState("HOUSE-56/B (1ST FLOOR) ROAD-132, GULSHAN-1 Postal/Zip Code 1212");
    const [accountHoldersCity, setAccountHoldersCity] = useState("DHAKA");
    const [accountHoldersCountry, setAccountHoldersCountry] = useState("BANGLADESH");
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

            const res = await axios.get(`${Host}/api/user/transaction/scb_bank`, {
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
                        <th colSpan={5} className="w-full">
                            <div className=' w-full flex justify-between items-center px-2 pb-2'>
                                <div>
                                    <img src={logo} alt="" className='w-52' />
                                </div>
                                <div className=' text-right'>
                                    <p className=' text-lg'>Statement Of Account</p>
                                </div>
                            </div>
                        </th>
                    </tr>
                    <tr className=' w-full border border-gray-800'>
                        <th class="report-header-cell w-full" colspan="5">
                            <div className=' flex font-normal text-left pt-[2px] pb-5 px-1'>
                                <div className=' w-1/2 print:text-[12px]'>
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-32 font-semibold print:font-semibold'>Account Holder Name</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Account Holder Name' value={accountHoldersName} onChange={(e) => setAccountHoldersName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <p className=' font-semibold'>{accountHoldersName}</p>

                                    }
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-32 font-semibold print:font-semibold'>Account Holder Address</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Account Holder Address' value={accountHoldersAddress} onChange={(e) => setAccountHoldersAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <p className=' font-semibold w-[190px] print:w-[140px]'>{accountHoldersAddress}</p>

                                    }
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-32 font-semibold print:font-semibold'>Account Holder City</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Account Holder City' value={accountHoldersCity} onChange={(e) => setAccountHoldersCity(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <p className=' font-semibold w-[190px] print:w-[140px]'>{accountHoldersCity}</p>

                                    }
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-32 font-semibold print:font-semibold'>Account Holder Country</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Account Holder Country' value={accountHoldersCountry} onChange={(e) => setAccountHoldersCountry(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <p className=' font-semibold w-[190px] print:w-[130px]'>{accountHoldersCountry}</p>

                                    }
                                </div>
                                <div className=' w-1/2 print:text-[12px]'>
                                    <p className=' font-semibold print:text-[13px]'>STANDARD CHARTERED BANK</p>
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-32 font-semibold print:font-semibold'>Branch Name</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className=' flex'>
                                                <div className=' w-48 print:w-32'>
                                                    <span className=''>BRANCH</span>
                                                </div>
                                                <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                    <span className=' font-semibold'>{branchName}</span>
                                                </div>
                                            </div>
                                    }
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-32 font-semibold print:font-semibold'>ENQUIRY TEL NO</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Branch Phone' value={branchPhone} onChange={(e) => setBranchPhone(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className=' flex'>
                                                <div className=' w-48 print:w-32'>
                                                    <span className=''>ENQUIRY TEL NO.</span>
                                                </div>
                                                <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                    <span className=' font-semibold'>{branchPhone}</span>
                                                </div>
                                            </div>
                                    }
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-32 font-semibold print:font-semibold'>STMT NO: / DATE</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='STMT NO: / DATE' value={printDate} onChange={(e) => setPrintDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className=' flex'>
                                                <div className=' w-48 print:w-32'>
                                                    <span className=''>ENQUIRY TEL NO.</span>
                                                </div>
                                                <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                    <span className=' font-semibold'>{printDate}</span>
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
                                                <div className=' w-48 print:w-32'>
                                                    <span className=''>CURRENCY</span>
                                                </div>
                                                <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                    <span className=' font-semibold'>{accountCurrency}</span>
                                                </div>
                                            </div>
                                    }

                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-32 font-semibold print:font-semibold'>ACCOUNT TYPE</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='ACCOUNT TYPE' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <div className=' flex'>
                                                <div className=' w-48 print:w-32'>
                                                    <span className=''>ACCOUNT TYPE</span>
                                                </div>
                                                <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                    <span className=' font-semibold'>{accountType}</span>
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
                                                <div className=' w-48 print:w-32'>
                                                    <span className=''>ACCOUNT NUMBER</span>
                                                </div>
                                                <div className=' text-left ml-1 w-[calc(100%-theme(space.32))]'>
                                                    <span className=' font-semibold'>{accountNumber}</span>
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
                        <td className=' font-semibold print:px-1 py-1 print:text-[11px] border border-r-0 border-gray-700 p-2'>DATE</td>
                        <td className=' font-semibold print:px-1 py-1 print:text-[11px] border-y border-gray-700 p-2 w-[40%]'>DESCRIPTION</td>
                        <td className=' font-semibold print:px-1 py-1 print:text-[11px] border-y border-gray-700 p-2 text-right w-[15%]'>WITHDRAWAL</td>
                        <td className=' font-semibold print:px-1 py-1 print:text-[11px] border-y border-gray-700 p-2 text-right w-[15%]'>DEPOSIT</td>
                        <td className=' font-semibold print:px-1 py-1 print:text-[11px] border border-l-0 border-gray-700 p-2 text-right w-[15%]'>BALANCE[BDT]</td>
                    </tr>
                </thead>
                <tbody>

                    <tr className=''>
                        <td className='print:px-1 border-x border-gray-700 py-0 print:text-[11px] p-2'></td>
                        <td className='print:px-1 py-0 border-r border-gray-700 print:text-[11px] p-2'>Balance Forward</td>
                        <td className='print:px-1 py-0 border-r border-gray-700 print:text-[11px] p-2 text-right'></td>
                        <td className='print:px-1 py-0 border-r border-gray-700 print:text-[11px] p-2 text-right'></td>
                        <td className='print:px-1 py-0 border-r border-gray-700 print:text-[11px] p-2 text-right'>{commaNumber(initialBalance)}</td>
                    </tr>
                    {
                        randomTransictions.length > 0 && randomTransictions.map((item, index) => {

                            return (
                                <tr className=' print:leading-[14px] align-text-top'>
                                    <td className='p-2 border-x border-gray-700 print:py-[2px] print:px-1 print:text-[11px]'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.date} onChange={(e) => changeFields(e.target.value, index, "date", randomTransictions, setRandomTransictions)} placeholder='Date' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                :
                                                <span>{item.date}</span>
                                        }
                                    </td>
                                    <td className='p-2 border-r border-gray-700 print:py-[2px] print:px-[6px] print:text-[11px]'>

                                        {
                                            editMode ?
                                                <input type="text" value={item.particular} onChange={(e) => changeFields(e.target.value, index, "particular", randomTransictions, setRandomTransictions)} placeholder='Date' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                                :
                                                <p>{item.particular}</p>
                                        }
                                    </td>
                                    <td className='p-2 border-r border-gray-700 print:py-[2px] print:px-1 print:text-[11px] text-right'>{item.withdrawal > 0 && commaNumber(item.withdrawal)}</td>
                                    <td className='p-2 border-r border-gray-700 print:py-[2px] print:px-1 print:text-[11px] text-right'>{item.deposit > 0 && commaNumber(item.deposit)}</td>
                                    <td className='p-2 border-r border-gray-700 print:py-[2px] print:px-1 print:text-[11px] text-right'>{commaNumber(item.balance)}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
                <tfoot class="table-footer-group">
                    <tr>
                        <td class=" " colspan="5">
                            <div className=' w-full print:text-[10px] font-medium my-3'>
                                <p className=' pl-5'>Note: Please advise the Bank of discrepancies, if any, within 14 days from date of receipt, otherwise this statement is considered correct.</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="" colspan="5">
                            <div className=' w-full text-center border border-gray-700  py-5'>
                                <p className=' print:text-sm'>Thank you for banking with Standard Chartered. We are pleased to be of service to you.</p>
                                <p className=' print:text-[12px] mt-3'>This is aDuplicate Statement</p>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default SCBBankStatement