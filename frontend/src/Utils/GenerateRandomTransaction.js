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

        if (transactions[findRandomParticular].transactionMethod === "cheque" || transactions[findRandomParticular].transactionMethod === "cash") {
            randomTransictionsTime = chequeWithdrawalOrDepositTime[Math.floor(Math.random() * chequeWithdrawalOrDepositTime.length)];
        } else {
            randomTransictionsTime = Math.floor(Math.random() * 24);
        }

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
            date: `${randomTransictionsDate.getDate()}/${randomTransictionsDate.getMonth() + 1}/${randomTransictionsDate.getFullYear()}`,
            time: randomTransictionsTime + ":" + randomTransictionsMunite,
            withdrawal: randomWithdrawal,
            deposit: randomDeposit,
        }

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