function handle_contact(){
	var answers = [answer1, phone, answer4, answer5];
	for(i=0; i<answers.length; i++) {
		if(!answers[i].value) {
			answers[i].focus();
			window.alert("Заполните все поля!");
			return false;
		}
	}
	if(!answer21.checked&&!answer22.checked){
		answer21.focus();
		window.alert("Вы не отметили свой пол.");
		return false;
	} 
	return true;
}

function handle_test(){
	var answers = [answer01, answer3];
	for(i=0; i<answers.length; i++) {
		if(!answers[i].value) {
			answers[i].focus();
			window.alert("Заполните все поля!");
			return false;
		}
	}
	if(!answer11.checked&&!answer12.checked&&!answer13.checked&&!answer14.checked){
		answer11.focus();
		window.alert("Вы не выбрали вариант ответа.");
		return false;
	} 
	return true;
}

