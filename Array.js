//Inserting new entries into Array at any index using splice function

// let days =['monday', 'wednesday','Thursday']

// console.log(days)

//insert Tuesday to the array

// days.splice(1,0,'Tuesday') 
//1 indicate where to start inserting or deleting from,
//0 denotes  the number of items to delete
// console.log(days)

//removing items from array at any index

// let cars =['mazda','toyota','peugeot','benz','audi','chevrolet']

// console.log(cars);

// //removing toyota and audi from the array cars
// cars.splice(1,2)
// console.log(cars)

//finding the index which a member of array first occur

// let number=[1,2,3,4,2,5,7,8]

// console.log(number.indexOf(2)) 

//2 appears first at index 1,if the items is not found it will return -1

//finding the index which a member of arraylast occur

// let number=[1,2,3,4,2,5,7,8]

// console.log(number.lastIndexOf(2)) 

//checking if an item is included in an array

// let moviesName =['extraction','The convenant','Spider Man','The witcher']
// let checkMovie =moviesName.includes('extraction',)
// console.log(checkMovie); //will return true if found otherwise false(boolean)

//find object in an array

// let stateGovernor =[
//   { name:'Alex Otti', State: 'Abia'},
//   {name:'Ahmadu Umaru', State: 'Adamawa'},
//   {name:'Umo Eno', State: 'Akwa ibom'},
//   {name:'Charles soludo', State: 'Anambra'},
//   {name:'Bala Muhammed', State: 'Bauchi'},
//   ]

//   let findGovenor =stateGovernor.find(function(searchGovernor)
//   { return searchGovernor.name==='Alex Otti'

//   })
//   console.log(findGovenor);

//convert array to string

// const studentNames =['joshua','samuel','kola','shade']
// const namesAsString =studentNames.toString()
// console.log(namesAsString);

//To specify what we use to seperate array element

// const studentNames =['joshua','samuel','kola','shade']
// const seperateWithOr =studentNames.join(' or ')
// console.log(seperateWithOr);
//  
// Joining Two arrays Together
// const workDays=['Monday','Tueday','Wednesday','Thursday','Friday']
// const weekEnds=['Saturday','Sunday']
// const daysOfWeek =workDays.concat(weekEnds)
// console.log(daysOfWeek);

//convert nested arrays to non nested

let mainCharacters=['Jumong','Daiso',['daiso','youngpo'],'youngYi']
console.log(mainCharacters);
let flat =mainCharacters.flat()
console.log(flat);


