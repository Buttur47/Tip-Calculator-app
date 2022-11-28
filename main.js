
function formatBillNumber(BillNumber) {
  return BillNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



function updateBill() {
  //debugger
  var bill = document.getElementById("bill_total");
  //var result = document.getElementById("result"); #I guess I dont need this 
  var party_size = document.getElementById("num_people");
  var party_size_value = party_size.value;
  var bill_value = bill.value;
  var per_person = (bill_value/party_size_value).toFixed(2);
  var total_per_person = document.getElementById("total_per_person_result");
  var per_person_string = String((bill_value/party_size_value).toFixed(2));
  var total_per_person = formatBillNumber(per_person_string);
  total_per_person_result.innerText = "$"+total_per_person;
}


function tip_calc(entered_tip) {
  //debugger
  var tip = document.getElementById("bill_total");
  var tip_value = Number(tip.value);
  var party_size = document.getElementById("num_people");
  var party_size_value = party_size.value;
  var per_person = ((tip_value/party_size_value) * (entered_tip)).toFixed(2);
  var tip_per_person = formatBillNumber(per_person);
  //var rounded_tip_num = Number(tip.replace((/,/g, '')));
  //var rounded_tip = rounded_tip_num * 0.05;
  //var commas = formatBillNumber(String(rounded_tip));
  tip_per_person_result.innerText = "$"+tip_per_person;
}
