
function updateValue() {
  let txt = document.getElementById("bill_total");
  let formattedBill = formatBillNumber(txt.value);
  let result = document.getElementById("result");
  result.innerText = formattedBill;
}


function formatBillNumber(billNumber) {
  //debugger
  return billNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
