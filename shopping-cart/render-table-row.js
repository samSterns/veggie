const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content
}


export default (fruit, oder) => {
    const tableRow = document.createElement('tr');

    const columnOne = document.createElement('td');
    columnOne.textContent = 'apple'

    const columnTwo = document.createElement('td');
    columnOne.textContent = '4'

    const columnThree = document.createElement('td');
    columnOne.textContent = '1.00'

    const columnFour = document.createElement('td');
    columnOne.textContent = '4.00'

    tableRow.appendChild(makeTd(fruit.name));
    tableRow.appendChild(makeTd(order.quantity));
    tableRow.appendChild(makeTd(fruit.price));
    const totalPrice = fruit.quantity * fruit.price;
    const prettyPrice = totalPrice.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' })
    // const prettyPrice = totalPrice.toLocaleString('en-US', { 
            style: 'currency', 
            currency: 'USD' })
    return tableRow

    outterHtml: 'some string'
    };
};