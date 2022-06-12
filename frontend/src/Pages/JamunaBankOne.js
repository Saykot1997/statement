import React, { useState } from 'react'
import logo from "../Photos/jamunabank.jpg"

function JamunaBankOne() {

    const [randomTransictions, setRandomTransictions] = useState([])
    const [randomParticulars, setRandomParticulars] = useState(["On-Line Cash - Aminul-1036 Batch-Online-Cash-Collection-Jamuna Bank", "TRANSFER -  eFTN iNWARDCLTI bank", "ATM-Cash-Collection-Jamuna Bank", "ATM-Cash- Motigil"]);
    const [randomBranchCodes, setRandomBranchCodes] = useState(["97", "100", "92", "36"]);
    const [transactionQuantity, setTransactionQuantity] = useState(20);
    const [initialBalance, setInitialBalance] = useState(300000);
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

    // const [transactionDate, setTransactionDate] = useState("");
    // const [valueDate, setValueDate] = useState("");
    // const [particular, setParticular] = useState("");
    // const [withdrawal, setWithdrawal] = useState("");
    // const [deposit, setDeposit] = useState("");
    // const [balance, setBalance] = useState("");
    // const [branch, setBranch] = useState("");
    // const [time, setTime] = useState("");


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

    const GenerateRandomTranjections = () => {

        let totalDays = (new Date(hideEndStatementDate).getTime() - new Date(hideStartStatementDate).getTime()) / (1000 * 3600 * 24);
        let totalYears = totalDays / 365;
        let totalMonths = totalDays / 30;

        // randomTransictionsDate between hideStartStatementDate and hideEndStatementDate with trantions quantity

        let randomTransictionsDates = [];

        for (let i = 0; i < transactionQuantity; i++) {
            let randomDate = new Date(hideStartStatementDate);
            randomDate.setDate(randomDate.getDate() + Math.floor(Math.random() * totalDays));
            randomDate.setFullYear(randomDate.getFullYear() + Math.floor(Math.random() * totalYears));
            randomDate.setMonth(randomDate.getMonth() + Math.floor(Math.random() * totalMonths));
            randomTransictionsDates.push(randomDate);
        }

        // sort randomTransictionsDate by date
        randomTransictionsDates.sort((a, b) => {

            let dateA = new Date(a);
            let dateB = new Date(b);
            return dateA - dateB;
        })

        // randomTransictions

        let randomTransictions = [];

        for (let i = 0; i < transactionQuantity; i++) {

            let randomParticular = randomParticulars[Math.floor(Math.random() * randomParticulars.length)];
            let randomBranchCode = randomBranchCodes[Math.floor(Math.random() * randomBranchCodes.length)];
            let randomTransictionsDate = randomTransictionsDates[i];
            let randomTransictionsTime = Math.floor(Math.random() * 24);
            let randomTransictionsMunite = Math.floor(Math.random() * 60);
            let randomWithdrawal = Math.floor(Math.random() * 100000);
            let randomDeposit = Math.floor(Math.random() * 100000);

            let randomTransictionsObject = {

                particular: randomParticular,
                branchCode: randomBranchCode,
                date: `${randomTransictionsDate.getDate()}/${randomTransictionsDate.getMonth() + 1}/${randomTransictionsDate.getFullYear()}`,
                time: randomTransictionsTime + ":" + randomTransictionsMunite,
            }

            if (i % 2 === 0) {

                randomTransictionsObject.withdrawal = randomWithdrawal;
                randomTransictionsObject.deposit = 0;

                if (i === 0) {

                    randomTransictionsObject.balance = parseInt(initialBalance)

                } else {

                    randomTransictionsObject.balance = randomTransictions[i - 1].balance - parseInt(randomWithdrawal);
                }

            } else {

                randomTransictionsObject.withdrawal = 0;
                randomTransictionsObject.deposit = randomDeposit;

                if (i === 0) {

                    randomTransictionsObject.balance = parseInt(initialBalance)

                } else {

                    randomTransictionsObject.balance = randomTransictions[i - 1].balance + parseInt(randomDeposit);
                }
            }

            randomTransictions.push(randomTransictionsObject);
        }

        setRandomTransictions(randomTransictions);
    }

    console.log(randomTransictions);

    return (
        <div className="p-5">
            {
                editMode ?
                    <div className='absolute top-5 right-5 print:hidden'>
                        <button onClick={GenerateRandomTranjections} className="bg-blue-500 px-2 py-[6px] rounded text-white hover:bg-blue-700 ">Save</button>
                        <button onClick={toggleEditMode} className="bg-red-500 px-2 py-[6px] rounded text-white hover:bg-red-700 ">Cencel</button>
                    </div>
                    :

                    <button onClick={toggleEditMode} className=' bg-blue-500 px-2 py-[6px] rounded text-white hover:bg-blue-700 absolute top-5 right-5 print:hidden'>Edit</button>
            }
            {/* topbar start */}
            <div className=" w-full flex justify-between">
                <div className=" w-2/3 flex items-center">
                    <div className=' mr-3'>
                        <img src={logo} alt="" className=' w-16 h-40' />
                    </div>
                    <div className=' ml-2 print:text-[12px]'>
                        <p className=" font-semibold print:font-medium text-lg print:text-base">Jamuna Bank Lid</p>
                        {
                            editMode ?
                                <input type="text" placeholder='Branch Name' value={branchName} onChange={(e) => setBranchName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                :
                                <p className=" font-semibold print:font-normal my-1 print:my-0 capitalize">{branchName}</p>
                        }
                        {
                            editMode ?
                                <input type="text" placeholder='Branch Code' value={branchAddress} onChange={(e) => setBranchAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                :
                                <p className=" font-semibold print:font-normal my-1 print:my-0 capitalize">{branchAddress}</p>
                        }

                        {
                            editMode ?
                                <input type="text" placeholder='Branch Address' value={branchPhone} onChange={(e) => setBranchPhone(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                :
                                <p className=" font-semibold print:font-normal my-1 print:my-0">Phone: {branchPhone}</p>
                        }
                        {
                            editMode ?
                                <input type="text" placeholder='Branch Fax' value={branchFax} onChange={(e) => setBranchFax(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none w-full' />
                                :
                                <p className=" font-semibold print:font-normal my-1 print:my-0">Fax: {branchFax}</p>
                        }
                    </div>
                </div>
                <div className=" w-1/3 print:text-[12px]">

                    <p className=" font-semibold text-center text-xl print:text-lg mb-10 print:mb-5">STATEMENT OF ACCOUNT</p>
                    <div className=" flex justify-between">
                        <span className=" font-medium print:font-normal">Account opening date:</span>
                        {
                            editMode ?
                                <input type="text" placeholder='Account opening date' value={accountOpeningDate} onChange={(e) => setAccountOpeningDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                :

                                <span className=" font-medium print:font-normal">{accountOpeningDate}</span>
                        }
                    </div>
                    <div className=" flex justify-between my-1">
                        <span className=" font-medium print:font-normal">Maturity date:</span>
                        {
                            editMode ?
                                <input type="text" placeholder='Account opening date' value={accountMatureDate} onChange={(e) => setAccountMatureDate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                :

                                <span className=" font-medium print:font-normal">{accountMatureDate}</span>
                        }
                    </div>
                    <div className=" flex my-1">
                        <span className=" font-medium print:font-normal">Currency code:</span>
                        {
                            editMode ?
                                <input type="text" placeholder='Account opening date' value={accountCurrency} onChange={(e) => setAccountCurrency(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                :

                                <span className=" font-medium print:font-normal ml-1">{accountCurrency}</span>
                        }
                    </div>
                    <div className=" flex my-1">
                        <span className=" font-medium print:font-normal">Interest/Profite Rate:</span>
                        {
                            editMode ?
                                <input type="text" placeholder='Account opening date' value={accountInterestRate} onChange={(e) => setAccountInterestRate(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                                :

                                <span className=" font-medium print:font-normal ml-1">{accountInterestRate}</span>
                        }
                    </div>
                </div>
            </div>

            {/* topbar end */}

            {/* mid start */}

            <div className=" w-full flex justify-between items-end print:text-[12px]">
                <div className=" w-2/3">
                    {
                        editMode ?
                            <input type="text" placeholder='Account Type' value={accountType} onChange={(e) => setAccountType(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            :
                            <p className=" font-semibold print:font-normal my-1 print:my-0 uppercase">{accountType} Account</p>
                    }
                    {
                        editMode ?
                            <input type="text" placeholder='Account Number' value={accountHoldersName} onChange={(e) => setAccountHoldersName(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            :
                            <p className=" font-semibold print:font-normal my-1 print:my-0 uppercase">{accountHoldersName}</p>
                    }
                    {
                        editMode ?
                            <input type="text" placeholder='Account Holders Address' value={accountHoldersAddress} onChange={(e) => setAccountHoldersAddress(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            :
                            <p className=" font-semibold print:font-normal my-1 print:my-0 uppercase">{accountHoldersAddress}</p>
                    }

                </div>
                <div className=" w-1/3">
                    {
                        editMode ?
                            <input type="text" placeholder='Account Number' value={accountStatus} onChange={(e) => setAccountStatus(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                            :

                            <p className=" font-semibold print:font-normal my-1 print:my-0">Status <span className=' uppercase'>{accountStatus}</span></p>
                    }
                </div>
            </div>

            <div className=" mt-5 print:text-[12px]">
                {
                    editMode ?
                        <input type="text" placeholder='Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none block' />
                        :
                        <p className=" font-semibold print:font-normal my-1 print:my-0">Account Number: <span className=' uppercase'>{accountNumber}</span></p>
                }
                {
                    editMode ?

                        <div className=" leading-7 print:leading-[22px]"><span>Statement Date:</span> <input type="date" placeholder='Start stetment date' value={hideStartStatementDate} onChange={(e) => statementDateChange("startStatementDate", e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' /> to <input type="date" placeholder='Start stetment date' value={hideEndStatementDate} onChange={(e) => statementDateChange("endStatementDate", e.target.value)} className=' rounded p-1 my-[2px] border border-blue-500 focus:outline-none' /></div>
                        :
                        <p className=" leading-7 print:leading-[22px]">Statement Date: {startStatementDate} to {endStatementDate}</p>
                }

            </div>
            {/* mid end */}

            {/* info start */}

            <div className=" w-full mt-10 print:mt-5">
                <div className=' w-full flex justify-end print:hidden'>
                </div>
                <table className=" w-full">
                    <thead className=''>
                        <tr className=" border border-dashed">
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1 text-left">Date</th>
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1">Value Date</th>
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1">Particular</th>
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1">Withdrawal(Dr)</th>
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1">Deposit(Cr)</th>
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1">Balance</th>
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1">Branch</th>
                            <th className=" font-medium print:font-normal print:text-[12px] pb-3 pt-1 px-1 text-right">Time</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="">
                            <td className=" text-sm print:text-[10px] px-1">{startStatementDate}</td>
                            <td className=" text-center text-sm print:text-[12px] px-1">{startStatementDate}</td>
                            <td className=" text-center text-sm print:text-[12px] px-1">Opening Balance</td>
                            <td className=" text-center text-sm print:text-[12px] px-1">0.00</td>
                            <td className=" text-center text-sm print:text-[12px] px-1">0.00</td>
                            <td className=" text-center text-sm print:text-[12px] px-1">{initialBalance} CR</td>
                            <td className=" text-center text-sm print:text-[12px] px-1">{randomBranchCodes[Math.floor(Math.random() * randomBranchCodes.length)]}</td>
                            <td className=" text-right text-sm print:text-[12px] px-1">12:00</td>
                        </tr>

                        {
                            randomTransictions.length > 0 && randomTransictions.map((item, index) => {
                                return (
                                    <tr className="">
                                        <td className=" text-sm print:text-[10px] px-1">{item.date}</td>
                                        <td className=" text-center text-sm print:text-[12px] px-1">{item.date}</td>
                                        <td className=" text-center text-sm print:text-[12px] px-1">
                                            <p>{item.particular}</p>
                                        </td>
                                        <td className=" text-center text-sm print:text-[12px] px-1">{item.withdrawal}</td>
                                        <td className=" text-center text-sm print:text-[12px] px-1">{item.deposit}</td>
                                        <td className=" text-center text-sm print:text-[12px] px-1">{item.balance} CR</td>
                                        <td className=" text-center text-sm print:text-[12px] px-1">{item.branchCode}</td>
                                        <td className=" text-right text-sm print:text-[12px] px-1">{item.time}</td>
                                    </tr>
                                )
                            })
                        }

                        <tr>
                            <td className=" pt-2"></td>
                            <td></td>
                            <td > <hr /> </td>
                            <td > <hr /> </td>
                            <td > <hr /> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className=" text-sm p-2"></td>
                            <td className=" text-center text-sm p-2"></td>
                            <td className=" text-center text-sm p-2">Total</td>
                            <td className=" text-center text-sm p-2">5000000000</td>
                            <td className=" text-center text-sm p-2">567878900</td>
                            <td className=" text-center text-sm p-2"></td>
                            <td className=" text-center text-sm p-2"></td>
                            <td className=" text-right text-sm p-2"></td>
                        </tr>
                    </tbody>
                </table>
                <p className=' font-medium text-center print:text-[10px] mt-2'>This is a computer generated statement and does not require any signature</p>
            </div>

            {/* info end */}
        </div>
    )
}

export default JamunaBankOne