const GenerateRandomTranjections = (startStatementDate, endStatementDate, transactions, transactionQuantity, initialBalance, ATMAmounts, ChequeAmounts) => {

    let totalDays = (new Date(endStatementDate).getTime() - new Date(startStatementDate).getTime()) / (1000 * 3600 * 24);
    let totalYears = totalDays / 365;
    let totalMonths = totalDays / 25;

    // randomTransictionsDate between startStatementDate and endStatementDate with trantions quantity

    let randomTransictionsDates = [];

    for (let i = 0; i < transactionQuantity; i++) {
        let randomDate = new Date(startStatementDate);
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

    let interTotalWithdrawal = 0;
    let interTotalDeposit = 0;

    for (let i = 0; i < transactionQuantity; i++) {

        let chequeWithdrawalOrDepositTime = [11, 12, 13, 14, 15];
        let atmWithdrawalAmount = ATMAmounts

        let chequeAmounts = ChequeAmounts

        let randomParticular = transactions[Math.floor(Math.random() * transactions.length)].transactionName;
        let randomBranchCode = transactions[transactions.findIndex((item) => item.transactionName === randomParticular)].branch;
        let randomTransictionsDate = randomTransictionsDates[i];

        let randomTransictionsTime = ""
        let findRandomParticular = transactions.findIndex((item) => item.transactionName === randomParticular);
        let randomTransictionsMunite = Math.floor(Math.random() * 60);
        let randomWithdrawal = "";
        let randomDeposit = "";


        // set transection time
        if (transactions[findRandomParticular].transactionMethod === "cheque" || transactions[findRandomParticular].transactionMethod === "cash") {

            randomTransictionsTime = chequeWithdrawalOrDepositTime[Math.floor(Math.random() * chequeWithdrawalOrDepositTime.length)];

        } else {

            randomTransictionsTime = Math.floor(Math.random() * 24);
        }


        if (randomTransictionsTime.toString().length === 1) {
            randomTransictionsTime = "0" + randomTransictionsTime;
        }

        if (randomTransictionsMunite.toString().length === 1) {
            randomTransictionsMunite = "0" + randomTransictionsMunite;
        }

        // set withdrawal and deposit
        if (transactions[findRandomParticular].transactionMethod === "atm") {

            randomWithdrawal = atmWithdrawalAmount[Math.floor(Math.random() * atmWithdrawalAmount.length)];
            randomDeposit = 0;

        } else {

            if (transactions[findRandomParticular].transactionType === "credit") {

                randomWithdrawal = 0;
                randomDeposit = chequeAmounts[Math.floor(Math.random() * chequeAmounts.length)];

            } else {

                randomWithdrawal = chequeAmounts[Math.floor(Math.random() * chequeAmounts.length)];
                randomDeposit = 0;
            }
        }

        // create randomTransictions object
        let randomTransictionsObject = {
            particular: randomParticular,
            branchCode: randomBranchCode,
            date: "",
            time: randomTransictionsTime + ":" + randomTransictionsMunite,
            withdrawal: randomWithdrawal,
            deposit: randomDeposit,
            type: transactions[findRandomParticular].transactionType,
            method: transactions[findRandomParticular].transactionMethod,

        }

        if (transactions[findRandomParticular].ref) {
            randomTransictionsObject.ref = transactions[findRandomParticular].ref
        }

        if (transactions[findRandomParticular].cheque) {
            randomTransictionsObject.cheque = transactions[findRandomParticular].cheque
        }

        if (transactions[findRandomParticular].transactionDetails) {
            randomTransictionsObject.transactionDetails = transactions[findRandomParticular].transactionDetails
        }


        // set randomTransictions date
        if (randomTransictionsDate.getDate().toString().length === 1) {
            randomTransictionsObject.date = "0" + randomTransictionsDate.getDate();
        } else {
            randomTransictionsObject.date = randomTransictionsDate.getDate();
        }

        if ((randomTransictionsDate.getMonth() + 1).toString().length === 1) {
            randomTransictionsObject.date += "/0" + (randomTransictionsDate.getMonth() + 1);
        } else {
            randomTransictionsObject.date += "/" + (randomTransictionsDate.getMonth() + 1);
        }
        randomTransictionsObject.date += "/" + randomTransictionsDate.getFullYear();


        //  set interTotalWithdrawal and interTotalDeposit
        if (transactions[findRandomParticular].transactionType === "credit") {

            interTotalDeposit += randomDeposit;

            if (i === 0) {

                randomTransictionsObject.balance = parseInt(initialBalance) + parseInt(randomDeposit);

            } else {

                randomTransictionsObject.balance = randomTransictions[i - 1].balance + parseInt(randomDeposit);
            }
        } else {

            interTotalWithdrawal += randomWithdrawal;

            if (i === 0) {

                randomTransictionsObject.balance = parseInt(initialBalance) - parseInt(randomWithdrawal);

            } else {

                randomTransictionsObject.balance = randomTransictions[i - 1].balance - parseInt(randomWithdrawal);
            }
        }

        randomTransictions.push(randomTransictionsObject);
    }

    return {
        RandomTransictions: randomTransictions,
        TotalWithdrawal: interTotalWithdrawal,
        TotalDeposit: interTotalDeposit,
    }
}


export default GenerateRandomTranjections;