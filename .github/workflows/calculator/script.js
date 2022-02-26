function calc() {
	var in1 = parseInt(document.querySelector("#in1").value);
	var in2 = parseInt(document.querySelector("#in2").value);
	var ope = document.querySelector("#operator").value;
	var calculate;
	
	if (ope == "add") {
		calculate = in1 + in2;
	} else if (ope == "min") {
		calculate = in1 - in2;
	} else if (ope == "mul") {
		calculate = in1 * in2;
	} else  if (ope == "div") {
		calculate = in1 / in2;
	}
	
    console.log(calculate);
    document.querySelector("#result").innerHTML = calculate;
}

