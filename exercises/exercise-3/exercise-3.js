let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt(array) {
  console.log("QTY   ITEM                TOTAL");
  let total = 0;
  array.forEach((item) => {
    const { itemName, quantity, unitPrice } = item;
    let itemTotalPrice = quantity * unitPrice;
    let fixedPrice = itemTotalPrice.toFixed(2);
    total = total + itemTotalPrice;
    //total character space for correct formatting = 20, from first character of item, to first character of total.
    let space = "                    ";  //empty spaces to slice from
    let spaceRequired = 20 - itemName.length; //the longer the item name, the less space needed between columns
    let spaces = space.slice(-spaceRequired); //a string of empty spaces to the required length
    console.log(`${quantity}     ${itemName}${spaces}${fixedPrice}`;
    );
  });
  console.log(""); // for formatting a space between items and total
  console.log(`Total: ${total}`);
}

printReceipt(order);
