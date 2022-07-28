





var max_container = document.getElementById('control-container__max');
var max_button_up = max_container.querySelector(".control-up");
var max_button_down = max_container.querySelector(".control-down");
var max_value_display = max_container.querySelector(".control-display").querySelector("p");
var max_value = 4;

var limit_container = document.getElementById('control-container__limit');
var limit_button_up = limit_container.querySelector(".control-up");
var limit_button_down = limit_container.querySelector(".control-down");
var limit_value_display = limit_container.querySelector(".control-display").querySelector("p");
var limit_value = 6;



render();




max_button_up.onclick = function(){
	max_value += 1;
	render();
}
max_button_down.onclick = function(){
	max_value -= 1;
	render();
}

limit_button_up.onclick = function(){
	limit_value += 1;
	render();
}
limit_button_down.onclick = function(){
	limit_value -= 1;
	render();
}

function render() {
	max_value_display.innerHTML = max_value;
	limit_value_display.innerHTML = limit_value;
}


var generate_button = document.getElementById('generate_voicing');
generate_button.onclick = function(){handleGenerateButton()}


function handleGenerateButton() {
	var arr = generate_voicing(limit_value, max_value);
	display_voicing(arr);
}


function generate_voicing(amount, limit) {

	var result = [];

	for (let i = 0; i < amount; i++) {
		var num_rand = Math.floor(Math.random() * (limit+1));
		result.push(num_rand);
	};

	return result;
}

function display_voicing(voicing_arr) {
	var voicing_div = document.getElementById("voicing_result");
	voicing_div.innerHTML = '';
	for (let i = 0; i < voicing_arr.length; i++) {
		var num_to_add = voicing_arr[i];
		var new_el = document.createElement("div");
		new_el.className = 'voicing_number';	
		var text_el = document.createElement("p");
		text_el.innerHTML = num_to_add;
		new_el.append(text_el);
		voicing_div.append(new_el);
	}
}




