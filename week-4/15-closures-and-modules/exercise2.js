const Bank = function() {
    _money = 500;

    depositCash = function(cash) {
        _money += cash;
    };

    checkBalance = function() {
        console.log(_money);
    };

    return {
        deposit: depositCash,
        showBalance: checkBalance,
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950