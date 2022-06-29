import axios from 'axios';
import commaNumber from 'comma-number';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Host } from '../Data';
import { TransactionAmountFatchSuccess } from '../Redux/TransactionAmount_slice';
import { transactionsFatchSuccess } from '../Redux/Transactions_slice';
import GenerateRandomTranjections from '../Utils/GenerateRandomTransaction';
import logo from "../Photos/canara_bank/logo.png";
import bankSil from "../Photos/ucb_bank/sil.png";


function CanaraBankStatement() {

    const [randomTransictions, setRandomTransictions] = useState([])
    const [initialBranchCode, setInitialBranchCode] = useState(32)
    const [transactionQuantity, setTransactionQuantity] = useState(40);
    const [initialBalance, setInitialBalance] = useState(400000);
    const [joinName, setJoinName] = useState("")
    const [customerId, setCustomerId] = useState("1234567899")
    const [fhp, setFhp] = useState("MD. ALAMGIR MIAH")
    const [debitCount, setDebitCount] = useState("");
    const [creditCount, setCreditCount] = useState("");
    const [editMode, setEditMode] = useState(false);
    // const [printDate, setPrintDate] = useState("01/01/2020");
    const [accountCurrancy, setAccountCurrancy] = useState("BDT")
    const [branchName, setBranchName] = useState("New Eskaton Branch");
    // const [branchAddress, setBranchAddress] = useState("Green City Edge, 89, Kakrail ,Dhaka-1000");
    // const [openingDate, setOpeningDate] = useState("01/01/2020");
    // const [lastTRDate, setLastTRDate] = useState("01/01/2020");
    // const [reportGenerateUser, setReportGenerateUser] = useState("");
    const [accountType, setAccountType] = useState("Saving");
    const [accountNumber, setAccountNumber] = useState("0009-03100007098");
    const [preAccountNumber, setPreAccountNumber] = useState("12345678999976")
    const [accountHoldersName, setAccountHoldersName] = useState("MAHEDI HASAN MUNNA");
    const [accountHoldersAddress, setAccountHoldersAddress] = useState("33/1 SARAT GUPTA ROAD NARINDA DHAKA");
    const [accountHolderCity, setAccountHolderCity] = useState("Dhaka")
    const [accountHoldersPhone, setAccountHoldersPhone] = useState("8355179");
    const [accountStatus, setAccountStatus] = useState("OPERATIVE");
    const [startStatementDate, setStartStatementDate] = useState("01-10-2021");
    const [endStatementDate, setEndStatementDate] = useState("31-03-2022");
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

            const res = await axios.get(`${Host}/api/user/transaction/canara_bank`, {
                headers: {
                    "Authorization": `Bearer ${User}`
                }
            });

            dispatch(transactionsFatchSuccess(res.data))

        } catch (error) {

            console.log(error)
        }
    }

    // console.log(TransactionAmount)
    // console.log(Transactions)

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const statementDateChange = (option, value) => {

        if (option === "startStatementDate") {

            let startStatementDate = value.split("-");
            let startStatementDateYear = startStatementDate[0];
            let startStatementDateMonth = startStatementDate[1];
            let startStatementDateDay = startStatementDate[2];

            setStartStatementDate(`${startStatementDateDay}-${startStatementDateMonth}-${startStatementDateYear}`);
            setHideStartStatementDate(`${startStatementDateYear}-${startStatementDateMonth}-${startStatementDateDay}`);

        } else if (option === "endStatementDate") {

            let endStatementDate = value.split("-");
            let endStatementDateYear = endStatementDate[0];
            let endStatementDateMonth = endStatementDate[1];
            let endStatementDateDay = endStatementDate[2];

            setEndStatementDate(`${endStatementDateDay}-${endStatementDateMonth}-${endStatementDateYear}`);
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


    useEffect(() => {
        getTransectionsAmounts()
        getBankTransactions()
    }, [])

    console.log(randomTransictions)


    return (
        <div className='w-full p-10 print:p-0'>

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
                        <th class="report-header-cell w-full" colSpan={8}>
                            <div className=' flex justify-center'>
                                <img src={logo} alt="" className=' w-[300px]' />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr className=''>
                        <td className=' font-semibold print:px-1 pb-1 print:text-[12px] border-l border-t border-gray-800 p-2 text-gray-800'>TRANS DATE</td>
                        <td className=' font-semibold print:px-1 pb-1 print:text-[12px] border-l border-t border-gray-800 p-2 text-gray-800'>VALUE</td>
                        <td className=' font-semibold print:px-1 pb-1 print:text-[12px] border-l border-t border-gray-800 p-2 text-gray-800'>BRANCH</td>
                        <td className=' font-semibold print:px-1 pb-1 print:text-[12px] border-l border-t border-gray-800 p-2 text-gray-800'>REF/CHQ,NO</td>
                        <td className=' font-semibold print:px-1 pb-1 print:text-[12px] border-l border-t border-gray-800 p-2 text-gray-800 text-center'>DESCRIPTION</td>
                        <td className=' font-semibold print:px-1 pb-1 print:text-[12px] border-l border-t border-gray-800 p-2 text-gray-800 text-right'>WITHDRAWS</td>
                        <td className=' font-semibold print:px-1 pb-1 print:text-[12px] border-l border-t border-gray-800 p-2 text-gray-800 text-right'>DEPOSIT</td>
                        <td className=' font-semibold print:px-1 pb-1 print:text-[12px] border-x border-t border-gray-800 p-2 text-gray-800 text-right'>BALANCE</td>
                    </tr>

                    <tr className=' align-text-top'>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border-l border-t border-gray-800 p-2 text-gray-800'>28-DEC-21</td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border-l border-t border-gray-800 p-2'>28-DEC-21</td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border-l border-t border-gray-800 p-2'>0</td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border-l border-t border-gray-800 p-2 text-gray-800'></td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border-l border-t border-gray-800 p-2 text-right'>B/F</td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border-l border-t border-gray-800 p-2 text-right'>0</td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border-l border-t border-gray-800 p-2 text-right'>0</td>
                        <td className=' font-semibold print:px-1 py-0 print:text-[12px] border-x border-t border-gray-800 p-2 text-right text-gray-800'>{commaNumber(initialBalance)}</td>
                    </tr>

                    {
                        randomTransictions.length > 0 && randomTransictions.map((item, index) => {

                            return (
                                <tr className=' align-text-top'>
                                    <td className=' border-l border-t border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px]'>{GetFormateDate(item.date)}</td>
                                    <td className=' border-l border-t border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px]'>{GetFormateDate(item.date)}</td>
                                    <td className=' border-l border-t border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px]'>{item.branchCode}</td>
                                    <td className=' border-l border-t border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px]'>{item.ref} </td>
                                    <td className=' border-l border-t border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px]'>{item.particular}</td>
                                    <td className=' border-l border-t border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px] text-right'>{commaNumber(item.withdrawal)}</td>
                                    <td className=' border-l border-t border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px] text-right'>{commaNumber(item.deposit)}</td>
                                    <td className=' border-x border-t border-gray-800 p-2 print:py-0 print:px-1 print:text-[11px] text-right'>{commaNumber(item.balance)}</td>
                                </tr>
                            )
                        })
                    }
                    <tr className=''>
                        <td className='p-2  border-t border-l border-b border-gray-800 print:px-1 print:text-[10px] print:py-0 text-right pr-5'></td>
                        <td className='p-2  border-t border-l border-b border-gray-800 print:px-1 print:text-[10px] print:py-0 uppercase text-right'></td>
                        <td className='p-2  border-t border-l border-b border-gray-800 print:px-1 print:text-[10px] print:py-0 text-right'></td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'></td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'></td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'></td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'></td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'></td>
                    </tr>
                    <tr className=''>
                        <td className='p-2  border-t border-l border-b border-gray-800 print:px-1 print:text-[10px] print:py-0 text-right pr-5'>Opening Balance</td>
                        <td className='p-2  border-t border-l border-b border-gray-800 print:px-1 print:text-[10px] print:py-0 uppercase text-right'>Total Debit Amount</td>
                        <td className='p-2  border-t border-l border-b border-gray-800 print:px-1 print:text-[10px] print:py-0 text-right'>Total Credit Amount</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'>Debit Count</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'>Credit Count</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'>Closing Balance</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'>Unclear Balance</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'>Sweep-In Balance</td>
                    </tr>
                    <tr className=''>
                        <td className='p-2  border-t border-l border-b border-gray-800 print:px-1 print:text-[10px] print:py-0 text-right pr-5'>{commaNumber(initialBalance)}</td>
                        <td className='p-2  border-t border-l border-b border-gray-800 print:px-1 print:text-[10px] print:py-0 uppercase text-right'>{totalWithdrawal}</td>
                        <td className='p-2  border-t border-l border-b border-gray-800 print:px-1 print:text-[10px] print:py-0 text-right'>{totalDeposit}</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'>{debitCount}</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'>{creditCount}</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'>helo</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'>0</td>
                        <td className='p-2  border-t border-l border-b border-r border-gray-800 print:px-1 print:text-[10px] print:py-0'>0</td>
                    </tr>
                    <tr>
                        <td colSpan={8}>
                            <div>
                                <p>UNLESS THE CONSTITIJENT BRINGS TO THE NOLLCE OF THE BANK ANY DISCREPANCIES / OMMISSION / ERRORS / UNAUTHORISED
                                    DEBITS IMMEDIATELY.</p>
                                <p>THE ENTRIES IN SUCH PASS SHEET SAAL.I. BE DEEMED AFL CORRECT ANO SHALL SINO THE CONSTITUENT FOR ALL PURPOSE AND
                                    INTENTS.</p>
                                <p>BEWARE OF PHIS HING ATTACKS THROUGH EMAILS AND FAKE WEBSITES.</p>
                                <p>IMS FACILFTY USERS ARE REQUESTED TO NOTE THAT CNARA BANK DOES NOT SEEK ANY INFORMATION THROUGH EMAIL DO NOT
                                    CLICK ON ANY LINK</p>
                                <p>WHICH HAS COME THROUGH EMAIL FROM UNEXPECTED SOURCES. IT MAY CONTAIN MALICIOUS CODE OR COULD BE AN
                                    ATTEMPT TO "PHISH'</p>
                                <p>ALWAYS LOGIN THROUGH WWW.CANARABANK.IN . PLEASE BEWARE OF PHISHLNG.</p>
                                <p>CHANGE IN THE ADDRESS OF ACCOUNT HOLDER/PA HOLDER. IF ANY, MAY PLEASE BE INFORMED TO THE BRANCH ALONG WITH
                                    ADDRESS PROOF.</p>
                                <p className=' text-center my-4'>"DO NOT SHARE ATM PIN NUMBER, ACCOUNT DETAILS, OTP TO OUTSIDERS, EMAILS ETC"</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot className="table-footer-group">
                    <tr>
                        <td colSpan={8}>
                            <div className=' w-full text-sm text-center'>
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

export default CanaraBankStatement