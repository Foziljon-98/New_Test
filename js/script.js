

// Dom
const newPersons = document.querySelector('.newPersons');
const inputsContainer = document.querySelector('.inputsContainer');

const inputs = document.querySelector('.inputs');

const addPersons = document.querySelector('.addPersons');






let count = [];
console.log(inputs);

newPersons.addEventListener('click' , e => {
	e.preventDefault();	
	studentsCount = +prompt('Сколько участников хотите добавить?');
		if(studentsCount > 1){
			for (let i = 1; i <= studentsCount; i++) {
				let id = i;
				count[i] = {
					id: id
				};

				inputs.innerHTML += `<form class="form-control mb-3 pb-5"><input class="form-control names" type="text" placeholder="Имя участника № ${i}"></form>` 
						
			}
			
			
		}else{
			alert('Число участников не можеть быть меньше 2');
		}

});



addPersons.addEventListener('click' , e => {
	e.preventDefault();	
	let input = document.querySelectorAll('.names');
	if(input.value === "") alert('Плоля  не должны быть пустимы!');
});






















// var names =['Ilya','Yuriy','Olga','Anton','Igor','Kseniya','Aleksandr','Grigoriy','Tanya','Artur'];
// console.log(names);

// function lottery(arr){
//     var random = Math.floor(Math.random() * 10);

//     for (var i = 0; i < arr.length; i++) {
//         if(i === random){
//             alert(arr[i] + ' - победитель лотореи!');
//             delete arr[i]
//         }

//     }
//     console.log(arr)
// }

// lottery(names)


