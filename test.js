var myArray = [
    { id: 0, name: "Jhon" },
    { id: 1, name: "Sara" },
    { id: 2, name: "Domnic" },
    { id: 3, name: "Bravo" }
]

//Find index of specific object using findIndex method.    



const abc = (abc) => {
    abc.filter(function (el) { return el.Name != "Sara"; });
}
abc(myArray)
console.log(myArray);