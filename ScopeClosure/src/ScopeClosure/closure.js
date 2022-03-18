const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins ;
        console.log (`MoneyBox: $ ${saveCoins} `);
    }
    return countCoins;
}

let Money = moneyBox(); 

Money(4);
Money(10);
