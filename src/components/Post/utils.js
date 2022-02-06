export const coffeeStr = (coffeeNumber) => {
    const coffee = '☕';
    let str = '';
    for(let i =0; i<coffeeNumber; i++)
        str+=coffee;
    return str || coffee;
}