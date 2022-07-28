import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import sil from "../../Photos/agrani_bank/sil.png"
import axios from 'axios';
import { Host } from "../../Data"
import { transactionsFatchSuccess } from '../../Redux/Transactions_slice';
import commaNumber from 'comma-number'
import GenerateRandomTranjections from '../../Utils/GenerateRandomTransaction';
import { TransactionAmountFatchSuccess } from '../../Redux/TransactionAmount_slice';
import EditButtonComponent from '../../Components/EditButtonComponent';
import changeFields from '../../Utils/ChangeFields';
import GetFormatedDate from '../../Utils/GetFormatedDate';

function AgraniBankStatement() {

    const [randomTransictions, setRandomTransictions] = useState([])
    const [transactionQuantity, setTransactionQuantity] = useState(40);
    const [initialBalance, setInitialBalance] = useState(700000.76);
    const [editMode, setEditMode] = useState(false);
    const [branchAddress, setBranchAddress] = useState("COMM.AREA BR,CTNG2844");
    const [branchAddress2, setBranchAddress2] = useState("BASHAR SQUARE 2ND FLOOR 108 AG");
    const [accountType, setAccountType] = useState("Current Depposits Individuals and others-");
    const [accountNumber, setAccountNumber] = useState("0200009275870==()===");
    const [customerId, setCustomerId] = useState("27195597==(Other)===");
    const [accountHoldersName, setAccountHoldersName] = useState("GLOBAL IMMIGRATION CONSULTANTS LTD");
    const [accountHoldersPhone, setAccountHoldersPhone] = useState("01755659559");
    const [accountOpeningDate, setAccountOpeningDate] = useState("08 DEC 2016");
    const [accountCurrency, setAccountCurrency] = useState("Bangladeshi Taka");
    const [accountStatus, setAccountStatus] = useState("Active");
    const [startStatementDate, setStartStatementDate] = useState("01 OCT 2021");
    const [endStatementDate, setEndStatementDate] = useState("31 MAR 2022");
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

            const res = await axios.get(`${Host}/api/user/transaction/agrani_bank`, {
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

            setStartStatementDate(GetFormatedDate(`${startStatementDateDay}/${startStatementDateMonth}/${startStatementDateYear}`, "space"));
            setHideStartStatementDate(`${startStatementDateYear}-${startStatementDateMonth}-${startStatementDateDay}`);

        } else if (option === "endStatementDate") {

            let endStatementDate = value.split("-");
            let endStatementDateYear = endStatementDate[0];
            let endStatementDateMonth = endStatementDate[1];
            let endStatementDateDay = endStatementDate[2];

            setEndStatementDate(GetFormatedDate(`${endStatementDateDay}/${endStatementDateMonth}/${endStatementDateYear}`, "space"));
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

    // console.log(Transactions)


    return (
        <div className="p-5 print:p-0 font-nuosu">
            <EditButtonComponent editMode={editMode} toggleEditMode={toggleEditMode} GenerateTranjections={GenerateTranjections} />
            <table className=' w-full'>
                <thead class=" table-header-group w-full">
                    <tr>
                        <th colSpan={8}>
                            <div className=' text-left text-gray-700 flex '>
                                <div className=' w-1/2 print:w-[250px]'>
                                    <p className=' print:text-[16px]'>AGRANI BANK LIMITED</p>
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-24 font-semibold print:font-semibold'>Address</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Branch Address' value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <p className=' print:text-[11px]'>{branchAddress}</p>
                                    }

                                    <p className=' uppercase print:text-[11px]'>Account Statement</p>
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-24 font-semibold print:font-semibold'>Name</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Account Holder Name' value={accountHoldersName} onChange={(e) => setAccountHoldersName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <p className='print:text-[11px]'>{accountHoldersName}</p>
                                    }
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-24 font-semibold print:font-semibold'>Address</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Account Holder Name' value={branchAddress2} onChange={(e) => setBranchAddress2(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <p className='print:text-[11px] my-[10px]'>{branchAddress2}</p>
                                    }
                                    {
                                        editMode ?
                                            <div className=' my-1'>
                                                <span className=' inline-block w-24 font-semibold print:font-semibold'>Mobile Number</span>
                                                <span className=' mx-2 font-semibold print:font-semibold'>:</span>
                                                <input type="text" placeholder='Account Holder Name' value={accountHoldersPhone} onChange={(e) => setAccountHoldersPhone(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                            </div>
                                            :
                                            <p className='print:text-[11px]'>Customer's Mobile number (SMS):</p>
                                    }
                                    <p className='print:text-[11px]'>Account Statement for period of:</p>
                                    <p className='print:text-[11px]'>Account Balance at period start:</p>
                                </div>
                                <div className=' print:text-[11px] print:leading-[15px] self-end pl-1'>
                                    <div className=' flex'>
                                        <p className='w-[250px] print:w-[150px]'>Customer ID/Customer Type :</p>
                                        {
                                            editMode ?
                                                <input type="text" placeholder='Account Status' value={customerId} onChange={(e) => setCustomerId(e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />
                                                :
                                                <p className=' ml-[2px]'>{customerId}</p>
                                        }
                                    </div>
                                    <div className=' flex'>
                                        <p className='w-[250px] print:w-[150px]'>Account Number/Contract ID :</p>
                                        {
                                            editMode ?
                                                <input type="text" placeholder='Account Status' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />
                                                :
                                                <p className=' ml-[2px]'>{accountNumber}</p>
                                        }
                                    </div>
                                    <div className=' flex'>
                                        <p className='w-[250px] print:w-[150px]'>Account/Contract type :</p>
                                        {
                                            editMode ?
                                                <input type="text" placeholder='Account Status' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />
                                                :
                                                <p className=' ml-[2px]'>{accountType}</p>
                                        }
                                    </div>
                                    <div className=' flex'>
                                        <p className='w-[250px] print:w-[150px]'>Account/Contract With Branch :</p>
                                        <p className=' ml-[2px]'>{branchAddress}</p>
                                    </div>
                                    <div className=' flex'>
                                        <div className=' w-[250px] print:w-[150px] '>
                                            <p className=' ml-[2px]'>{accountHoldersPhone}</p>
                                        </div>
                                        {
                                            editMode ?
                                                <div className=' flex'>
                                                    <p>Account Status:</p>
                                                    <input type="text" placeholder='Account Status' value={accountStatus} onChange={(e) => setAccountStatus(e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />

                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <p>Account Status:</p>
                                                    <p className=' ml-[2px]'> {accountStatus}</p>
                                                </div>
                                        }
                                    </div>

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
                                            <div className=' flex'>
                                                <div className='w-[250px] print:w-[150px]'>
                                                    <p className=' print:text-[11px]'> <span> {startStatementDate}</span> To <span>{endStatementDate}</span></p>
                                                </div>
                                                {
                                                    editMode ?
                                                        <div className=' flex'>
                                                            <p>Opening Date:</p>
                                                            <input type="text" placeholder='currency' value={accountOpeningDate} onChange={(e) => setAccountOpeningDate(e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />

                                                        </div>
                                                        :
                                                        <div className=' flex'>
                                                            <p>Account Opening date:</p>
                                                            <p className=' ml-[2px]'>{accountOpeningDate}</p>
                                                        </div>
                                                }
                                            </div>

                                    }
                                    <div className=' flex'>
                                        <div className=' w-[250px] print:w-[150px] '>
                                            <p>{commaNumber(initialBalance)}</p>
                                        </div>
                                        {
                                            editMode ?
                                                <div className=' flex'>
                                                    <p>Currency:</p>
                                                    <input type="text" placeholder='currency' value={accountCurrency} onChange={(e) => setAccountCurrency(e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />

                                                </div>
                                                :
                                                <div className=' flex'>
                                                    <p>Account Currency:</p>
                                                    <p className=' ml-[2px]'>{accountCurrency}</p>
                                                </div>
                                        }
                                    </div>
                                </div>
                                {
                                    editMode &&

                                    <div className=' w-full flex flex-col items-end justify-end'>
                                        <div className=' flex items-center my-1'>
                                            <span className=' font-semibold mr-2'>Initial Blance</span>
                                            <input type="text" value={initialBalance} onChange={(e) => setInitialBalance(e.target.value)} placeholder='Blance' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                        </div>

                                        <div className=' flex items-center'>
                                            <span className=' font-semibold mr-2'>Number of row</span>
                                            <input type="text" value={transactionQuantity} onChange={(e) => setTransactionQuantity(e.target.value)} placeholder='Blance' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                        </div>
                                    </div>
                                }
                            </div>
                        </th>
                    </tr>
                    <tr className=" text-gray-700">
                        <th className=" font-semibold print:text-[10px] pb-2 text-left">Trans Date</th>
                        <th className=" font-semibold print:text-[10px] pb-2 text-left">Transaction Type</th>
                        <th className=" font-semibold print:text-[10px] pb-2 text-left">Narative</th>
                        <th className=" font-semibold print:text-[10px] pb-2 text-right">Cheque</th>
                        <th className=" font-semibold print:text-[10px] pb-2 text-right">Debit Amount</th>
                        <th className=" font-semibold print:text-[10px] pb-2 text-right">Credit Amount</th>
                        <th className=" font-semibold print:text-[10px] pb-2 text-right">Balance Amount</th>
                        <th className=" font-semibold print:text-[10px] pb-2 text-right">Dr/Cr</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        randomTransictions.length > 0 && randomTransictions.map((item, index) => {
                            return (
                                <tr className=" align-text-top" key={index}>
                                    <td className=" text-sm print:text-[10px] print:leading-[13px] uppercase">
                                        {
                                            editMode ?
                                                <input type="text" value={item.date} onChange={(e) => changeFields(e.target.value, index, "date", randomTransictions, setRandomTransictions)} placeholder='Date' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                :
                                                <span>{GetFormatedDate(item.date, "space")}</span>
                                        }
                                    </td>
                                    <td className="text-sm print:text-[10px] print:leading-[13px]">
                                        {
                                            editMode ?
                                                <input type="text" value={item.transactionDetails} onChange={(e) => changeFields(e.target.value, index, "transactionDetails", randomTransictions, setRandomTransictions)} placeholder='Transaction Type' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                                :
                                                <span>{item.transactionDetails}</span>
                                        }
                                    </td>
                                    <td className="text-sm print:text-[10px] print:leading-[13px] pr-2">
                                        {
                                            editMode ?
                                                <input type="text" value={item.particular} onChange={(e) => changeFields(e.target.value, index, "particular", randomTransictions, setRandomTransictions)} placeholder='Particulars' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                                :
                                                <span>{item.particular}</span>
                                        }
                                    </td>
                                    <td className="text-sm print:text-[10px] print:leading-[13px] text-right">
                                        {
                                            editMode ?
                                                <input type="text" value={item.cheque} onChange={(e) => changeFields(e.target.value, index, "cheque", randomTransictions, setRandomTransictions)} placeholder='Cheque' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                :
                                                <span>{item.cheque}</span>
                                        }
                                    </td>
                                    <td className="text-sm print:text-[10px] print:leading-[13px] uppercase text-right">
                                        <p>-{item.withdrawal > 0 ? commaNumber(item.withdrawal) : "0.00"}</p>
                                    </td>
                                    <td className="text-sm print:text-[10px] print:leading-[13px] uppercase text-right">
                                        <p>{item.deposit > 0 ? commaNumber(item.deposit) : "0.00"}</p>
                                    </td>
                                    <td className="text-sm print:text-[10px] print:leading-[13px] uppercase text-right">
                                        <p>{commaNumber(item.balance)}</p>
                                    </td>
                                    <td className=" text-right text-sm print:text-[10px] print:leading-[13px]">
                                        {
                                            item.balance > 0 ?
                                                <span>Cr.</span>
                                                :
                                                <span>Dr.</span>
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }

                    <tr>
                        <td className=' w-full' colSpan={8}>
                            <div className=' w-full print:text-[11px] font-semibold text-gray-700 mt-2 '>
                                <div className=' flex justify-between w-[25%]'>
                                    <p>Total Credit :</p>
                                    <p>{commaNumber(totalDeposit)}</p>
                                </div>
                                <div className=' flex justify-between w-[25%]'>
                                    <p>Total Credit :</p>
                                    <p>{commaNumber(totalWithdrawal)}</p>
                                </div>
                                <div className=' flex justify-between w-[25%]'>
                                    <p>Bal. at End:</p>
                                    <p>{randomTransictions.length > 0 && commaNumber(randomTransictions[randomTransictions.length - 1].balance)}</p>
                                </div>
                                <div className=' flex '>
                                    <div className=' flex justify-between w-[25%] mr-5'>
                                        <p>Printed by:</p>
                                        <p>Rahim hossain</p>
                                    </div>
                                    <p>24 Jul 2022</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot className="table-footer-group">
                    <tr>
                        <td colSpan={8} className="py-10">
                        </td>
                    </tr>
                </tfoot>
            </table>
            <div className=' print:fixed bottom-0 left-0 w-full'>
                <div className=' w-full flex justify-center'>
                    <img src={sil} alt="" className='w-20' />
                </div>
            </div>
        </div>
    )
}

export default AgraniBankStatement