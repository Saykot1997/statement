import axios from 'axios';
import commaNumber from 'comma-number';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Host } from '../../Data';
import { TransactionAmountFatchSuccess } from '../../Redux/TransactionAmount_slice';
import { transactionsFatchSuccess } from '../../Redux/Transactions_slice';
import GenerateRandomTranjections from '../../Utils/GenerateRandomTransaction';
import logo from "../../Photos/alfalah_bank/logo.png";
import bankSil from "../../Photos/alfalah_bank/sil.png";
import EditButtonComponent from '../../Components/EditButtonComponent';
import changeFields from '../../Utils/ChangeFields';
import GetFormatedDate from '../../Utils/GetFormatedDate';

function AlfalahBankStatement() {

    const [randomTransictions, setRandomTransictions] = useState([])
    const [transactionQuantity, setTransactionQuantity] = useState(40);
    const [initialBalance, setInitialBalance] = useState(700000);
    const [joinName, setJoinName] = useState("21022,1212,BD")
    const [editMode, setEditMode] = useState(false);
    const [accountCurrancy, setAccountCurrancy] = useState("BDT")
    const [accountType, setAccountType] = useState("6040-Alfalah Premium Plus");
    const [accountNumber, setAccountNumber] = useState("0702-2100183784");
    const [preAccountNumber, setPreAccountNumber] = useState("070224710333")
    const [accountHoldersName, setAccountHoldersName] = useState("MOHD MOMINUR RAHMAN");
    const [accountHoldersAddress, setAccountHoldersAddress] = useState("HOUSE NO:B-175, ROAD NO:23, NEW.,DOHS,MOHAKHALI, DHAKA-1206.");
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
    const [generationDate, setGenarationDate] = useState("24 July 2022")
    const [generationTime, setGenarationTime] = useState("11:02:21")


    const getBankTransactions = async (value) => {

        try {

            const res = await axios.get(`${Host}/api/user/transaction/ucb_bank`, {
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

            setStartStatementDate(GetFormatedDate(`${startStatementDateDay}/${startStatementDateMonth}/${startStatementDateYear}`, "full-year"));
            setHideStartStatementDate(`${startStatementDateYear}-${startStatementDateMonth}-${startStatementDateDay}`);

            console.log()
        } else if (option === "endStatementDate") {

            let endStatementDate = value.split("-");
            let endStatementDateYear = endStatementDate[0];
            let endStatementDateMonth = endStatementDate[1];
            let endStatementDateDay = endStatementDate[2];

            setEndStatementDate(GetFormatedDate(`${endStatementDateDay}/${endStatementDateMonth}/${endStatementDateYear}`, "full-year"));
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


        <div className='w-full p-10 print:p-0'>

            <EditButtonComponent editMode={editMode} toggleEditMode={toggleEditMode} GenerateTranjections={GenerateTranjections} />

            <table className='w-full'>
                <thead class=" table-header-group w-full">
                    <tr className=' w-full'>
                        <th class="report-header-cell w-full" colSpan={8}>
                            <div className=' w-full flex justify-between print:text-[11px] font-medium pb-2'>
                                <div className=' w-1/2'>
                                    <img src={logo} alt="" className=' w-44' />
                                </div>
                                <div className=' self-end text-right'>
                                    {
                                        editMode ?

                                            <input type="text" placeholder='date' value={generationDate} onChange={(e) => setGenarationDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                            :
                                            <p className=''>{generationDate}</p>
                                    }
                                    {
                                        editMode ?

                                            <input type="text" placeholder='time' value={generationTime} onChange={(e) => setGenarationTime(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />

                                            :
                                            <p className=''>{generationTime}</p>
                                    }
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={8}>
                            <div className=' print:text-[11px] font-medium'>
                                <p>ACCOUNT STATEMENT-INTERIM/DUPLICATE</p>
                                {
                                    editMode ?

                                        <input type="text" placeholder='Name' value={accountHoldersName} onChange={(e) => setAccountHoldersName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />

                                        :
                                        <p className='mt-1'>{accountHoldersName}</p>
                                }
                                {
                                    editMode ?

                                        <input type="text" placeholder='Address' value={accountHoldersAddress} onChange={(e) => setAccountHoldersAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />

                                        :
                                        <p className=' mt-1'>{accountHoldersAddress}</p>
                                }
                                {
                                    editMode ?

                                        <input type="text" placeholder='BD Number' value={joinName} onChange={(e) => setJoinName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />

                                        :
                                        <p className=' mt-1'>{joinName}</p>
                                }
                                <div className=' flex mt-1'>
                                    <p className=' w-1/2'>Accout No:</p>
                                    {
                                        editMode ?

                                            <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />

                                            :
                                            <p className=' mt-1'>{accountNumber}</p>
                                    }
                                </div>
                                <div className=' flex mt-1'>
                                    <p className=' w-1/2'>Old AC No:</p>
                                    {
                                        editMode ?

                                            <input type="text" placeholder='Old Account Number' value={preAccountNumber} onChange={(e) => setPreAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />

                                            :
                                            <p className=' mt-1'>{preAccountNumber}</p>
                                    }
                                </div>
                                <div className=' flex mt-1'>
                                    <p className=' w-1/2'>Account type:</p>
                                    {
                                        editMode ?

                                            <input type="text" placeholder='Account Type' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />

                                            :
                                            <p className=' mt-1'>{accountType}</p>
                                    }
                                </div>
                                <div className=' flex mt-1'>
                                    <p className=' w-1/2'>Currency:</p>
                                    {
                                        editMode ?

                                            <input type="text" placeholder='Currency' value={accountCurrancy} onChange={(e) => setAccountCurrancy(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />

                                            :
                                            <p className=' mt-1'>{accountCurrancy}</p>
                                    }
                                </div>
                                <div className=' flex mt-1'>
                                    <p className=' w-1/2'>Start Date:</p>
                                    {
                                        editMode ?

                                            <input type="date" placeholder='Start stetment date' value={hideStartStatementDate} onChange={(e) => statementDateChange("startStatementDate", e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />

                                            :
                                            <p className=' mt-1'>{startStatementDate}</p>
                                    }
                                </div>
                                <div className=' flex mt-1'>
                                    <p className=' w-1/2'>End Date:</p>
                                    {
                                        editMode ?

                                            <input type="date" placeholder='Start stetment date' value={hideEndStatementDate} onChange={(e) => statementDateChange("endStatementDate", e.target.value)} className=' rounded px-1 py-[1px] my-[2px] border border-blue-500 focus:outline-none' />

                                            :
                                            <p className=' mt-1'>{endStatementDate}</p>
                                    }
                                </div>
                                <div className=' flex mt-5'>
                                    <p className=' w-1/2'>OPENING BALANCE:</p>
                                    {
                                        editMode ?

                                            <input type="text" value={initialBalance} onChange={(e) => setInitialBalance(e.target.value)} placeholder='Blance' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />

                                            :
                                            <p className=' mt-1'>{commaNumber(initialBalance)}</p>
                                    }
                                </div>
                                <div className=''>

                                    {
                                        editMode &&

                                        <div className=' flex my-[2px]'>
                                            <p className=' w-1/2'>Number of Rows</p>
                                            <input type="text" value={transactionQuantity} onChange={(e) => setTransactionQuantity(e.target.value)} placeholder='Blance' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                        </div>
                                    }
                                </div>
                            </div>
                        </td>
                    </tr>


                    <tr className=' bg-gray-100 align-text-top print:text-[11px]'>
                        <td className=' font-semibold px-[2px] w-[12%]'>Post Date</td>
                        <td className=' font-semibold w-[14%]'>Description</td>
                        <td className=' font-semibold text-left w-[13%] pl-2 print:pl-1'>Transaction Ref</td>
                        <td className=' font-semibold px-[2px] text-left w-[11%]'>Cheque No</td>
                        <td className=' font-semibold px-2 text-center w-[12%]'>Value Date</td>
                        <td className=' font-semibold px-[2px] text-right w-[14%]'>Debit Amount</td>
                        <td className=' font-semibold px-[2px] text-right w-[14%]'>Credit Amount</td>
                        <td className=' font-semibold px-2 text-center w-[14%]'>Balance</td>
                    </tr>

                    {
                        randomTransictions.length > 0 && randomTransictions.map((item, index) => {

                            return (
                                <tr className=' align-text-top print:text-[11px]'>
                                    <td className=' print:leading-[12px] py-1 print:py-1 print:px-1'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.date} onChange={(e) => changeFields(e.target.value, index, "date", randomTransictions, setRandomTransictions)} placeholder='Date' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                :
                                                <span>{GetFormatedDate(item.date, "space")}</span>
                                        }
                                    </td>
                                    <td className=' print:leading-[12px] py-1 print:py-1 print:px-0'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.particular} onChange={(e) => changeFields(e.target.value, index, "particular", randomTransictions, setRandomTransictions)} placeholder='Particulars' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                                :
                                                <span>{item.particular}</span>
                                        }
                                    </td>
                                    <td className=' print:leading-[12px] py-1 print:py-1 text-left pl-2 print:pl-1'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.ref} onChange={(e) => changeFields(e.target.value, index, "ref", randomTransictions, setRandomTransictions)} placeholder='Ref' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                :
                                                <span>{item.ref}</span>
                                        }
                                    </td>
                                    <td className=' print:leading-[12px] py-1 print:py-1 print:px-1'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.cheque} onChange={(e) => changeFields(e.target.value, index, "cheque", randomTransictions, setRandomTransictions)} placeholder='Branch code' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                :
                                                <span>{item.cheque}</span>
                                        }
                                    </td>
                                    <td className=' print:leading-[12px] py-1 print:py-1 print:px-1 text-center'>{GetFormatedDate(item.date, "space")}</td>
                                    <td className=' print:leading-[12px] py-1 print:py-1 print:px-1 text-right'>{commaNumber(item.withdrawal)}</td>
                                    <td className=' print:leading-[12px] py-1 print:py-1 print:px-1 text-right'>{commaNumber(item.deposit)}</td>
                                    <td className='  print:leading-[12px] py-1 print:py-1 print:px-1 text-right'>{commaNumber(item.balance)}</td>
                                </tr>
                            )
                        })
                    }

                    <tr className=' print:text-[12px]'>
                        <td colSpan={4} className=" text-right" >Total:</td>
                        <td></td>
                        <td>-{commaNumber(totalWithdrawal)}</td>
                        <td>{commaNumber(totalDeposit)}</td>
                        <td></td>
                    </tr>

                </tbody>
                <tfoot className="table-footer-group">
                    <tr>
                        <td colSpan={8}>
                            <div className=' w-full text-sm text-center'>
                                <div className=' flex justify-center'>
                                    <img src={bankSil} alt="" className='w-20' />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default AlfalahBankStatement