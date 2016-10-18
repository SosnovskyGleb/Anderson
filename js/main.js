function First() { 
 
    alert('Количество ингридиентов должно быть более одного. При нажатии на специальные кнопки в нижней части экрана происходит очистка плиты или стола'); // Прописываем вывод окна
 }

function Second() { 
 
    alert('Яблоко + Малина + Молоко = Коктейль /// Мясо + Специи + Яйца = Мясо в кляре /// Яйца + Специи + Молоко = Омлет /// Мясо + Перец + Марковь + Лук + Картошка + Специи + Кабачек + Капуста + Помидоры = Дамлама');
}
//тут наши блюда
	var stringsСocktail = ["молоко","малина","яблоко"];
	var stringsOmelet = ["молоко","специи","яйца"];
	var stringsMeatInBatter = ["мясо","специи","яйца"];
	var stringsDamlama = ['мясо' , 'перец' , 'морковь' , 'лук' , 'картофель' , 'специи' , 'кабачок' , 'капуста' , 'помидоры'];
	//счётчики
	var k=0,m=0,g=0,s=0,t=0,u=0,y=0;

//счётчики
	var k=0,m=0,g=0,s=0;
//обавляем в переменную event данные об альтернативном тексте картинки и о её id
	function onDrag(target, event){
		event.dataTransfer.setData('image_name', target.alt);
		event.dataTransfer.setData('draggable_id', target.id);
	}
	
	function onDrop(target, event){
		alert("Добавлено " + event.dataTransfer.getData('image_name'));
///////////////////////////////проверка на коктейль
	for (var i = 0; i <= stringsСocktail.length; i++) {
		if((event.dataTransfer.getData('image_name'))&&(k==3))
			{
				alert("Приготовлен коктейль");k=0;
				var parentEl = document.getElementById("cocktail"),
				img = document.createElement("IMG");
				img.src = "img/cocktail.jpg";
				parentEl.appendChild(img);
			}
		else if ((event.dataTransfer.getData('image_name'))==stringsСocktail[i])
			{k++; 
			}
		else {}
	}
////////////////////////проверка на омлет
	for (var i = 0; i <= stringsOmelet.length; i++) {
		if((event.dataTransfer.getData('image_name'))&&(m==3))
			{
				alert("Приготовлен омлет");m=0;
				var parentEl = document.getElementById("omelet"),
				img = document.createElement("IMG");
				img.src = "img/omelet.jpg";
				parentEl.appendChild(img);
			}
		else if ((event.dataTransfer.getData('image_name'))==stringsOmelet[i])
			{m++; 
			}
		else {}
	}
//////////////////////проверка на мясо в кляре
	for (var i = 0; i <= stringsMeatInBatter.length; i++) {
		if((event.dataTransfer.getData('image_name'))&&(g==3))
			{
				alert("Приготовлено мясо в кляре");g=0;
				var parentEl = document.getElementById("meatInBatter"),
				img = document.createElement("IMG");
				img.src = "img/meatInBatter.jpg";
				parentEl.appendChild(img);
			}
		else if ((event.dataTransfer.getData('image_name'))==stringsMeatInBatter[i])
		{g++; 
		}
		else {}
 }
/////////////////проверка на дамламу
	for (var i = 0; i <= stringsDamlama.length; i++) {
		if((event.dataTransfer.getData('image_name'))&&(s==9))
			{
				alert("Приготовлеа дамлама");s=0;
				var parentEl = document.getElementById("damlama"),
				img = document.createElement("IMG");
				img.src = "img/damlama.jpg";
				parentEl.appendChild(img);
			}
		 else if ((event.dataTransfer.getData('image_name'))==stringsDamlama[i])
			{s++; 
			}
		 else {}
	 }
 
 ////////////////////
	if (event.preventDefault) {
		event.preventDefault();
	}
	return false;

	}

	function cancel(event){
		if (event.preventDefault){
			event.preventDefault();
		}
		return false;
	}
	

document.getElementById('meals').onclick = function() {
	this.innerHTML = '<div id="meals">';
}


