export const sumAll = (numbers) => {
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}

export const minusAll = (numbers) => {
    let total = 0;
    for(let number of numbers){
        total -= number;
    }
    return total;
}

export const abduAll = (numbers) => {
    let total = 0;
    for(let number of numbers){
        total %= number;
    }
    return total;
}