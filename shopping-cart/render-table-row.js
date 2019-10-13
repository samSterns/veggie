const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;
}


export default (veggie, order) => {
    const tableRow = document.createElement('tr');

    const columnOne = document.createElement('td');
    columnOne.textContent = 'apple';

    const columnTwo = document.createElement('td');
    columnTwo.textContent = '4';

    const columnThree = document.createElement('td');
    columnThree.textContent = '1.00';

    const columnFour = document.createElement('td');
    columnFour.textContent = '4.00';

    tableRow.appendChild(makeTd(veggie.name));
    tableRow.appendChild(makeTd(order.quantity));
    tableRow.appendChild(makeTd(veggie.price));
    const totalPrice = veggie.quantity * veggie.price;
    const prettyPrice = totalPrice.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' })
    // const prettyPrice = totalPrice.toLocaleString('en-US', { 
    //         style: 'currency', 
    //         currency: 'USD' });
    return renderTableRow

    outterHtml: 'some string'
};