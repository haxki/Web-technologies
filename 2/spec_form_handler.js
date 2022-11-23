function spec_handle_contact() {
	if (answer1.value.split(" ").length!=3){
		answer1.focus();
		window.alert("Поле ФИО должно содержать три слова, которые разделенны пробелами.");
		return false;
	}
	var pref = phone.value.substring(0,2); 
	var num_count = phone.value.length-1;
	if (!(num_count>=9 && num_count<=11 && !isNaN(phone.value.substring(1)) && 
	phone.value.split(" ").length==1 && (pref=="+3" || pref=="+7"))){
		phone.focus();
		window.alert("Телефон может начинаться только с \"+7\" или \"+3\" и содержать от 9 до 11 цифр без посторонних символов (в том числе пробелов).");
		return false;
	}
	return true;
}

function spec_handle_test(){
	if (answer3.value.split(" ").filter(function(word){return word!="";}).length < 35) {
		answer3.focus();
		window.alert("Ответ должен содержать больше 35 слов.");
		return false;
	}
	return true;
}

