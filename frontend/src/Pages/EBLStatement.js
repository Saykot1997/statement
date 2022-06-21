import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Host } from "../Data"
import { transactionsFatchSuccess } from '../Redux/Transactions_slice';
import commaNumber from 'comma-number'
import GenerateRandomTranjections from '../Utils/GenerateRandomTransaction';
import { TransactionAmountFatchSuccess } from '../Redux/TransactionAmount_slice';
import logo from "../Photos/ebl_bank/logo.png"

function EBLStatement() {

    const [randomTransictions, setRandomTransictions] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
    const [initialBranchCode, setInitialBranchCode] = useState(32)
    const [transactionQuantity, setTransactionQuantity] = useState(40);
    const [initialBalance, setInitialBalance] = useState(400000);
    const [editMode, setEditMode] = useState(false);
    const [branchName, setBranchName] = useState("Shantinagar Branch");
    const [branchAddress, setBranchAddress] = useState("Green City Edge, 89, Kakrail ,Dhaka-1000");
    const [branchPhone, setBranchPhone] = useState("8355179");
    const [branchFax, setBranchFax] = useState("8355649");
    const [accountType, setAccountType] = useState("Saving");
    const [accountNumber, setAccountNumber] = useState("0009-03100007098");
    const [accountHoldersName, setAccountHoldersName] = useState("MOHD MOMINUR RAHMAN");
    const [accountHoldersAddress, setAccountHoldersAddress] = useState("33/1 SARAT GUPTA ROAD NARINDA DHAKA");
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

    console.log(Transactions)


    return (
        <div className="p-5">
            {/* {
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
            } */}

            {/* info start */}

            <table className=' w-full'>
                <thead className=' table-header-group'>

                    <div className=' w-full flex justify-between'>
                        <div className=' text-[11px] leading-[14px]'>
                            <p>IKPAM RASHID</p>
                            <p>MOHONOB 5/1 C JOYNOB RESIDENCY</p>
                            <p>PATHAN TULA</p>
                            <p>SYLET</p>
                        </div>
                        <div>
                            <img src={logo} alt="" className=' w-28 -mt-5' />
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


                </thead>
                {/* <thead className=''>
                    <tr className="">
                        <th className="font-normal print:text-[10px] pb-1 text-left">TRN. DATE</th>
                        <th className="font-normal print:text-[10px] pb-1 text-left">DESCRIPTIONS</th>
                        <th className="font-normal print:text-[10px] pb-1 text-left">REFERANCES</th>
                        <th className="font-normal print:text-[10px] pb-1 text-right">DEBITS</th>
                        <th className="font-normal print:text-[10px] pb-1 text-center">CREDITS</th>
                        <th className="font-normal print:text-[10px] pb-1 text-right">BALANCE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td className=" text-sm print:text-[10px] print:mr-[2px]">{startStatementDate}</td>
                        <td className="text-sm print:text-[10px] print:mr-[2px]">Opening Balance</td>
                        <td className="text-sm print:text-[10px] print:mr-[2px] uppercase"></td>
                        <td className="text-sm print:text-[10px] print:mr-[2px] text-right"></td>
                        <td className="text-sm print:text-[10px] print:mr-[2px] text-right">{commaNumber(initialBalance)}</td>
                        <td className="text-sm print:text-[10px] print:mr-[2px] text-right">{commaNumber(initialBalance)}</td>
                    </tr> */}

                {/* {
                        randomTransictions.length > 0 && randomTransictions.map((item, index) => {
                            return (
                                <tr className="" key={index}>
                                    <td className=" text-sm print:text-[10px] print:leading-[13px] uppercase">
                                        <p>{item.date}</p>
                                    </td>
                                    <td className="text-sm print:text-[10px] print:leading-[13px] uppercase">
                                        <p>{item.date}</p>
                                    </td>
                                    <td className="text-sm print:text-[10px] print:leading-[13px] w-[27%] pr-2">
                                        <p>{item.particular}</p>
                                    </td>
                                    <td className="text-sm print:text-[10px] print:leading-[13px] uppercase text-right">
                                        <p>{item.withdrawal > 0 && commaNumber(item.withdrawal)}</p>
                                    </td>
                                    <td className="text-sm print:text-[10px] print:leading-[13px] uppercase text-right">
                                        <p>{item.deposit > 0 && commaNumber(item.deposit)}</p>
                                    </td>
                                    <td className="text-sm print:text-[10px] print:leading-[13px] uppercase text-right">
                                        <p>{commaNumber(item.balance)} CR</p>
                                    </td>
                                    <td className="text-sm print:text-[10px] print:leading-[13px] uppercase text-right">
                                        <p>{item.branchCode}</p>
                                    </td>
                                    <td className=" text-right text-sm print:text-[10px] print:leading-[13px] uppercase">
                                        <p>{item.time}</p>
                                    </td>
                                </tr>
                            )
                        })
                    } */}

                {/* <tr className=" border-t border-dashed border-gray-400">
                        <td ></td>
                        <td>OPENING BALANCE</td>
                        <td>{commaNumber(initialBalance)}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td ></td>
                        <td >DEBITS</td>
                        <td>{commaNumber(totalWithdrawal)}</td>
                        <td>DRCOUNT 225</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td ></td>
                        <td >CREDITS</td>
                        <td>{commaNumber(totalDeposit)}</td>
                        <td>CRCOUNT</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td ></td>
                        <td >UNCOLLECTED FUNDS</td>
                        <td></td>
                        <td>SWITCH AMOUNT 0</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

                <tfoot class="table-footer-group">
                    <tr>
                        <td class=" " colspan="7">
                            <div className=' w-full'>
                                <p className=' text-center font-medium pt-5 print:text-[10px]'>Thanks for banking with us.</p>
                                <hr className=' h-[2px] bg-gray-400 w-full' />
                                <p className=' print:text-[9px]'>The Customer should examine promptly the statement received and notify the bank in writing within 15 calendar days after the statement is maild,transmitted, or otherwise made available to customer of any errors,discrepancies or irregularities detected failng,failing which the statement will deem to be correct. This is a computer generated statement and does not require any signature.</p>
                            </div>
                        </td>
                    </tr>
                </tfoot> */}
            </table>
        </div>
    )
}

export default EBLStatement