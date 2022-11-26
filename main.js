
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

function five_tip() {
  //debugger 
  var tip = document.getElementById("bill_total");
  var tip_value = Number(tip.value);
  var party_size = document.getElementById("num_people");
  var party_size_value = party_size.value;
  var per_person = ((tip_value/party_size_value) * (0.05)).toFixed(2);
  var tip_per_person = formatBillNumber(per_person);
  //var rounded_tip_num = Number(tip.replace((/,/g, '')));
  //var rounded_tip = rounded_tip_num * 0.05;
  //var commas = formatBillNumber(String(rounded_tip));
  tip_per_person_result.innerText = "$"+tip_per_person;
}


function ten_tip() { 
  var tip = document.getElementById("bill_total");
  var tip_value = Number(tip.value);
  var party_size = document.getElementById("num_people");
  var party_size_value = party_size.value;
  var per_person = ((tip_value/party_size_value) * 0.10).toFixed(2);
  var tip_per_person = formatBillNumber(per_person);
  //var rounded_tip_num = Number(tip.replace((/,/g, '')));
  //var rounded_tip = rounded_tip_num * 0.05;
  //var commas = formatBillNumber(String(rounded_tip));
  tip_per_person_result.innerText = "$"+tip_per_person;
}

function fifteen_tip() { 
  var tip = document.getElementById("bill_total");
  var tip_value = Number(tip.value);
  var party_size = document.getElementById("num_people");
  var party_size_value = party_size.value;
  var per_person = ((tip_value/party_size_value) * 0.15).toFixed(2);
  var tip_per_person = formatBillNumber(per_person);
  //var rounded_tip_num = Number(tip.replace((/,/g, '')));
  //var rounded_tip = rounded_tip_num * 0.05;
  //var commas = formatBillNumber(String(rounded_tip));
  tip_per_person_result.innerText = "$"+tip_per_person;
}

function twenty_tip() { 
  var tip = document.getElementById("bill_total");
  var tip_value = Number(tip.value);
  var party_size = document.getElementById("num_people");
  var party_size_value = party_size.value;
  var per_person = ((tip_value/party_size_value) * 0.20).toFixed(2);
  var tip_per_person = formatBillNumber(per_person);
  //var rounded_tip_num = Number(tip.replace((/,/g, '')));
  //var rounded_tip = rounded_tip_num * 0.05;
  //var commas = formatBillNumber(String(rounded_tip));
  tip_per_person_result.innerText = "$"+tip_per_person;
}

function fifty_tip() { 
  var tip = document.getElementById("bill_total");
  var tip_value = Number(tip.value);
  var party_size = document.getElementById("num_people");
  var party_size_value = party_size.value;
  var per_person = ((tip_value/party_size_value) * 0.50).toFixed(2);
  var tip_per_person = formatBillNumber(per_person);
  //var rounded_tip_num = Number(tip.replace((/,/g, '')));
  //var rounded_tip = rounded_tip_num * 0.05;
  //var commas = formatBillNumber(String(rounded_tip));
  tip_per_person_result.innerText = "$"+tip_per_person;
}

function custom_tip() {
  //debugger
  var tip = document.getElementById("bill_total");
  var tip_value = Number(tip.value);
  var custom = document.getElementById("custom");
  //var result = document.getElementById("result"); #I guess I dont need this 
  var party_size = document.getElementById("num_people");
  var party_size_value = party_size.value;
  //var custom_value = Number(custom.value);
  var custom_value_percent = custom.value / 100;
  //var per_person = (custom_value/party_size_value).toFixed(2);
  var tip_per_person = document.getElementById("total_per_person_result");
  var per_person_string = ((tip_value/party_size_value) * custom_value_percent).toFixed(2);
  var tip_per_person = formatBillNumber(per_person_string);
  tip_per_person_result.innerText = "$"+tip_per_person;
}