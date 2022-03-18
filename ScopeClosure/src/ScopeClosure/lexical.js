const builCount = (i) => {
    let count = i ;
    const displayCount = () => {
        console.log (count++);
    };
    return displayCount;
}

const myCount = builCount(1);
myCount();
myCount();
myCount();