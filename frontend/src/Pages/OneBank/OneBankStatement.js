import axios from 'axios';
import commaNumber from 'comma-number';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Host } from '../../Data';
import { TransactionAmountFatchSuccess } from '../../Redux/TransactionAmount_slice';
import { transactionsFatchSuccess } from '../../Redux/Transactions_slice';
import GenerateRandomTranjections from '../../Utils/GenerateRandomTransaction';
import logo from "../../Photos/one_bank/logo.png";
import bankSil from "../../Photos/one_bank/sil.png";
import EditButtonComponent from '../../Components/EditButtonComponent';
import changeFields from '../../Utils/ChangeFields';

function OneBankStatement() {

    const [randomTransictions, setRandomTransictions] = useState([])
    const [initialBranchCode, setInitialBranchCode] = useState(32)
    const [transactionQuantity, setTransactionQuantity] = useState(40);
    const [initialBalance, setInitialBalance] = useState(700000);
    const [customerId, setCustomerId] = useState("095017190")
    const [editMode, setEditMode] = useState(false);
    const [todayDate, setTodayDate] = useState("01-01-2021");
    const [bankAddress, setBankAddress] = useState("504/C, KHILGAON, DHAKA-1219")
    const [branchName, setBranchName] = useState("MALIBAGH")
    const [branchAddress, setBranchAddress] = useState("TAMIJ UDDIN TOWER, 01, DIT ROAD MALIBAGH, CHOWDHURYPARA, DHAKA")
    const [accountCurrancy, setAccountCurrancy] = useState("BDT")
    const [accountType, setAccountType] = useState("CURRENT DEPOSIT - CLIENT");
    const [accountNumber, setAccountNumber] = useState("0921020001424");
    const [accountStatus, setAccountStatus] = useState("NORM");
    const [startStatementDate, setStartStatementDate] = useState("01-10-2021");
    const [endStatementDate, setEndStatementDate] = useState("31-03-2022");
    const [hideStartStatementDate, setHideStartStatementDate] = useState("2021-10-01");
    const [hideEndStatementDate, setHideEndStatementDate] = useState("2022-03-31");
    const [totalWithdrawal, setTotalWithdrawal] = useState(0);
    const [totalDeposit, setTotalDeposit] = useState(0);
    const [creditCount, setCreditCount] = useState(0)
    const [debitCount, setDebitCount] = useState(0)
    const Transactions = useSelector(state => state.Transactions.Transactions);
    const User = useSelector(state => state.User.User);
    const dispatch = useDispatch();
    const TransactionAmount = useSelector(state => state.TransactionAmount.TransactionAmount);
    const [generationDate, setGenarationDate] = useState("12/06/2022 13:02 PM")
    const [openingDate, setOpeningDate] = useState("24-Oct-2019")


    const getBankTransactions = async (value) => {

        try {

            const res = await axios.get(`${Host}/api/user/transaction/one_bank`, {
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

        return `${splitDate[0]}-${splitDate[1]}-${splitDate[2]}`
    }


    useEffect(() => {
        getTransectionsAmounts()
        getBankTransactions()
    }, [])


    return (
        <div className='w-full p-10 print:py-0'>
            <EditButtonComponent editMode={editMode} toggleEditMode={toggleEditMode} GenerateTranjections={GenerateTranjections} />

            <table className='w-full'>
                <thead class=" table-header-group w-full">
                    <tr>
                        <th colSpan={7}>
                            <div className=' w-full print:py-5'>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th colSpan={7}>
                            <div className=' w-full print:text-[11px] font-normal '>
                                <div className=' w-full flex '>
                                    <div className=' w-[54%] text-left'>
                                        <img src={logo} alt="" className=' -translate-y-2 -translate-x-3' />
                                        <p>SMART INTERIOR SOLUTION</p>
                                        {
                                            editMode ?
                                                <div className=' my-[2px] flex items-center'>
                                                    <span className=''>Bank Address</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <input type="text" placeholder='bank address' value={bankAddress} onChange={(e) => setBankAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <p>{bankAddress}</p>
                                        }

                                        <div className=' mt-5'>
                                            {
                                                editMode ?
                                                    <div className=' my-[2px] flex items-center'>
                                                        <span className=''>Branch Name</span>
                                                        <span className=' mx-2 '>:</span>
                                                        <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                    </div>
                                                    :
                                                    <p>{branchName} BRANCH</p>
                                            }
                                            {
                                                editMode ?
                                                    <div className=' my-[2px] flex items-center'>
                                                        <span className=''>Branch Address</span>
                                                        <span className=' mx-2 '>:</span>
                                                        <input type="text" placeholder='Branch Address' value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                    </div>
                                                    :
                                                    <p>{branchAddress}</p>
                                            }
                                        </div>
                                    </div>
                                    <div className=' w-[46%]'>
                                        <p className=' font-medium text-lg mb-5 text-center'>ACCOUNT STATEMENT</p>
                                        {
                                            editMode ?

                                                <div className=' my-[2px] flex'>
                                                    <span className=' inline-block w-32 text-right '>Account Number</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <input type="text" placeholder='account number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className='flex'>
                                                    <span className=' inline-block w-32 text-right '>Account Number</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <p className=''>{accountNumber}</p>
                                                </div>
                                        }
                                        {
                                            editMode ?

                                                <div className=' my-[2px] flex'>
                                                    <span className=' inline-block w-32 text-right '>Customer ID</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <input type="text" placeholder='customer id' value={customerId} onChange={(e) => setCustomerId(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className='flex'>
                                                    <span className=' inline-block w-32 text-right '>Customer ID</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <p className=''>{customerId}</p>
                                                </div>
                                        }
                                        {
                                            editMode ?

                                                <div className=' my-[2px] flex'>
                                                    <span className=' inline-block w-32 text-right '>A/C Type</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <input type="text" placeholder='Account Type' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className='flex'>
                                                    <span className=' inline-block w-32 text-right '>Product Name</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <p className=''>{accountType}</p>
                                                </div>
                                        }
                                        {
                                            editMode ?

                                                <div className=' my-[2px] flex'>
                                                    <span className=' inline-block w-32 text-right '>Account Currency</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <input type="text" placeholder='Account Type' value={accountCurrancy} onChange={(e) => setAccountCurrancy(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className='flex'>
                                                    <span className=' inline-block w-32 text-right '>Currency Name</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <p className=''>{accountCurrancy}</p>
                                                </div>
                                        }

                                        {
                                            editMode ?
                                                <div className=' my-[2px] flex'>
                                                    <span className=' inline-block w-32 text-right '>Account Status</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <input type="text" placeholder='Account Number' value={accountStatus} onChange={(e) => setAccountStatus(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' my-[2px] flex'>
                                                    <span className=' inline-block w-32 text-right '>Account Status</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <span className=' uppercase'>{accountStatus}</span>
                                                </div>
                                        }
                                        {
                                            editMode ?
                                                <div className=' my-[2px] flex'>
                                                    <span className=' inline-block w-32 text-right '>Opening Date</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <input type="text" placeholder='Opening Date' value={openingDate} onChange={(e) => setOpeningDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className=' my-[2px] flex'>
                                                    <span className=' inline-block w-32 text-right '>Opening Date</span>
                                                    <span className=' mx-2 '>:</span>
                                                    <span className=' uppercase'>{openingDate}</span>
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
                                                    <span className=' inline-block w-32 text-right'>Statement Period</span>
                                                    <span className=' mx-2'>:</span>
                                                    <p className=''> <span> {startStatementDate}</span> To <span>{endStatementDate}</span></p>
                                                </div>
                                        }
                                        {
                                            editMode ?

                                                <div className=' my-[2px] flex'>
                                                    <span className=' inline-block w-32 text-right'>Generation Date</span>
                                                    <span className=' mx-2'>:</span>
                                                    <input type="text" placeholder='Generation Date' value={generationDate} onChange={(e) => setGenarationDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' />
                                                </div>
                                                :
                                                <div className='flex mt-3'>
                                                    <span className=' inline-block w-32 text-right'>Generation Date</span>
                                                    <span className=' mx-2'>:</span>
                                                    <span className=' uppercase'>{generationDate}</span>
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
                            </div>
                        </th>
                    </tr>
                    <tr className=' bg-gray-100 align-text-top'>
                        <th className=' font-semibold px-2 print:px-[2px] print:text-[11px] border-l border-y border-gray-800 w-[11%]'>TRANSACTION DATE</th>
                        <th className=' font-semibold px-2 print:px-[2px] print:text-[11px] border-l border-y border-gray-800'>DESCRIPTION</th>
                        <th className=' font-semibold px-2 print:px-[2px] print:text-[11px] border-l border-y border-gray-800 text-left w-[18%]'>REFERENCE</th>
                        <th className=' font-semibold px-2 print:px-[2px] print:text-[11px] border-l border-y border-gray-800 text-center w-[10%]'>VALU DATE</th>
                        <th className=' font-semibold px-2 print:px-[2px] print:text-[11px] border-l border-y border-gray-800 text-right w-[12%]'>DEBITS</th>
                        <th className=' font-semibold px-2 print:px-[2px] print:text-[11px] border-l border-y border-gray-800 text-right w-[12%]'>CREDITS</th>
                        <th className=' font-semibold px-2 print:px-[2px] print:text-[11px] border-x border-y border-gray-800 text-right w-[14%]'>BALANCE</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className=' align-text-top'>
                        <td className='print:px-[2px] py-0 print:text-[11px] border-l border-gray-800 p-2 text-center leading-[14px]'>
                            {
                                editMode ?
                                    <input type="text" value={todayDate} onChange={(e) => setTodayDate(e.target.value)} placeholder='Todays Date' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                    :
                                    <span>{todayDate}</span>
                            }
                        </td>
                        <td className='print:px-[2px] py-0 print:text-[11px] border-l border-gray-800 p-2'>Balance Brought Forward</td>
                        <td className='print:px-[2px] py-0 print:text-[11px] border-l border-gray-800 p-2'></td>
                        <td className='print:px-[2px] py-0 print:text-[11px] border-l border-gray-800 p-2 text-center'>{todayDate}</td>
                        <td className='print:px-[2px] py-0 print:text-[11px] border-l border-gray-800 p-2 text-right'></td>
                        <td className='print:px-[2px] py-0 print:text-[11px] border-l border-gray-800 p-2 text-right'></td>
                        <td className='print:px-[2px] py-0 print:text-[11px] border-x border-gray-800 p-2 text-right'>{commaNumber(initialBalance)} Cr</td>
                    </tr>

                    {
                        randomTransictions.length > 0 && randomTransictions.map((item, index) => {

                            return (
                                <tr className='print:leading-[12px] align-text-top'>
                                    <td className=' border-l border-gray-800 p-2 print:py-[2px] print:px-[2px] print:text-[11px] text-center'>
                                        {
                                            editMode ?
                                                <input type="text" value={item.date} onChange={(e) => changeFields(e.target.value, index, "date", randomTransictions, setRandomTransictions)} placeholder='Date' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                :
                                                <span>{GetFormateDate(item.date)}</span>
                                        }
                                    </td>
                                    <td className=' border-l border-gray-800 p-2 print:py-[2px] print:px-[2px] print:text-[11px]'>

                                        {
                                            editMode ?
                                                <input type="text" value={item.particular} onChange={(e) => changeFields(e.target.value, index, "particular", randomTransictions, setRandomTransictions)} placeholder='Particulars' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                                :
                                                <span>{item.particular}</span>
                                        }
                                    </td>

                                    <td className=' border-l border-gray-800 p-2 print:py-[2px] print:px-[2px] print:text-[11px]'>

                                        {
                                            editMode ?
                                                <input type="text" value={item.ref} onChange={(e) => changeFields(e.target.value, index, "ref", randomTransictions, setRandomTransictions)} placeholder='Ref' className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                                :
                                                <span>{item.ref}</span>
                                        }
                                    </td>

                                    <td className=' border-l border-gray-800 p-2 print:py-[2px] print:px-[2px] print:text-[11px] text-center'>{GetFormateDate(item.date)}</td>
                                    <td className=' border-l border-gray-800 p-2 print:py-[2px] print:px-[2px] print:text-[11px] text-right'>{item.withdrawal > 0 && commaNumber(item.withdrawal)}</td>
                                    <td className=' border-l border-gray-800 p-2 print:py-[2px] print:px-[2px] print:text-[11px] text-right'>{item.deposit > 0 && commaNumber(item.deposit)}</td>
                                    <td className=' border-x border-gray-800 p-2 print:py-[2px] print:px-[2px] print:text-[11px] text-right'>{commaNumber(item.balance)} Cr</td>
                                </tr>
                            )
                        })
                    }
                    <tr className=''>
                        <td className='px-2 print:text-[11px] border-l border-y border-gray-800'></td>
                        <td className='px-2 print:text-[11px] border-l border-y border-gray-800 text-left'>NEW BALANCE</td>
                        <td className='px-2 print:text-[11px] border-l border-y border-gray-800 text-left'></td>
                        <td className='px-2 print:text-[11px] border-l border-y border-gray-800 text-left'></td>
                        <td className='px-2 print:text-[11px] border-l border-y border-gray-800 text-right'></td>
                        <td className='px-2 print:text-[11px] border-l border-y border-gray-800 text-right'></td>
                        <td className='px-2 print:text-[11px] border-x border-y border-gray-800 text-right'>{randomTransictions.length > 0 && commaNumber(randomTransictions[randomTransictions.length - 1].balance)} Cr</td>
                    </tr>
                    <tr className=''>
                        <td className='p-1 print:text-[11px]'></td>
                        <td className='p-1 print:text-[11px] text-left'>{debitCount} DEBIT(S)</td>
                        <td className='p-1 print:text-[11px] text-left'></td>
                        <td className='p-1 print:text-[11px] text-left'></td>
                        <td className='p-1 print:text-[11px] text-right'>{commaNumber(totalWithdrawal)}</td>
                        <td className='p-1 print:text-[11px] text-right'></td>
                        <td className='p-1 print:text-[11px] text-right'></td>
                    </tr>
                    <tr className=''>
                        <td className='pX-1 py-0 print:text-[11px]'></td>
                        <td className='pX-1 py-0 print:text-[11px] text-left'>{creditCount} CREDIT(S)</td>
                        <td className='pX-1 py-0 print:text-[11px] text-left'></td>
                        <td className='pX-1 py-0 print:text-[11px] text-left'></td>
                        <td className='pX-1 py-0 print:text-[11px] text-right'></td>
                        <td className='pX-1 py-0 print:text-[11px] text-right'>{commaNumber(totalDeposit)}</td>
                        <td className='pX-1 py-0 print:text-[11px] text-right'></td>
                    </tr>
                </tbody>
                <tfoot className="table-footer-group">
                    <tr>
                        <td colSpan={7}>
                            <div className=' w-full py-[60px]'>
                            </div>
                        </td>
                    </tr>
                    {/* <tr>
                        <td colSpan={7}>
                            <div className=' w-full py-2'>
                            </div>
                        </td>
                    </tr> */}
                    {/* <tr>
                        <td colSpan={7} className="relative pb-16">
                            <div className=' w-full print:w-[105%] flex justify-center'>
                                <hr className=' print:-translate-x-5 w-full h-[2px] bg-black' />
                            </div>
                            <div className=''>
                                <p className=' print:text-[11px] text-center'>Page No.:1</p>
                            </div>
                            <img src={bankSil} alt="" className='w-24 absolute -top-7 right-10' />
                        </td>
                    </tr> */}
                </tfoot>
            </table>

            <div className=' print:fixed bottom-[90px] w-full print:text-[11px]'>
                <div className=' w-full print:w-[94%] flex justify-center'>
                    <hr className=' print:-translate-x-5 w-full h-[2px] bg-black' />
                </div>
                <div className=''>
                    <p className=' print:text-[11px] text-center'>Page No.:1</p>
                </div>
                <img src={bankSil} alt="" className='w-24 print:absolute -top-5 right-20' />
            </div>
        </div>
    )
}

export default OneBankStatement