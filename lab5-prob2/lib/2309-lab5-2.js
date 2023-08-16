function readInput() {
    let inputList = [];
    let input;
    
    do {
        input = prompt("Enter an integer (a negative integer to quit):");
        const num = parseInt(input);
        
        if (!isNaN(num)) {
            if (num === 0 && inputList.length === 0) {
                inputList.push(num);
                break;
            }
            else if (num >= 0) {
                inputList.push(num);
            } 
            else if (inputList.length === 0) {
                inputList.push(0);
                break;
            }
            else {
                break;
            }
        }
    } while (true);
    
    return inputList;
}

function displayStats(list) {
    const total = list.length;
    const sum = list.reduce((acc, num) => acc + num, 0);
    const avg = (sum / total).toFixed(2);
    const min = Math.min(...list);
    const max = Math.max(...list);

    if (sum === 0) {
        alert(`For the list that is empty, the average is ${avg}, the minimum is ${min}, and the maximum is ${max}`);
    }
    else{
        alert(`For the list ${list}, the average is ${avg}, the minimum is ${min}, and the maximum is ${max}`);
    }

}

function startApp() {
    const inputList = readInput();
    displayStats(inputList);
}

startApp();

let pos_int = displayStats()
alert(`${displayStats(pos_int)}`);



