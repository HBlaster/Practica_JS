var a = 'Hello';

function hello (){
    let b = 'Hello world';
    const c = 'Hello world !'
    if(true){
        let d = 'Hello World !!'
        debugger
    }
}

hello();

const moneyBox = () => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger
        saveCoins += coins ;
        console.log (`MoneyBox: $ ${saveCoins} `);
    }
    return countCoins;
}

let Money = moneyBox(); 

Money(4);
Money(10);
Money(12);

const fruits = () => { 
	if (true) { 
		var fruit1 = 'apple'; 
		const fruit2 = 'banana'; 
		let fruit3 = 'kiwi'; 
		} 
} 

fruits();