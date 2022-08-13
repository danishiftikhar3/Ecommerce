let myArray = [
    { id: 0, name: "Jhon" },
    { id: 1, name: "Sara" },
    { id: 2, name: "Domnic" },
    { id: 3, name: "Bravo" }
],

    //Find index of specific object using findIndex method.    
    objIndex = myArray.findIndex((obj => obj.id == 2));

//Log object to Console.
console.log("Before update: ", myArray[objIndex])

//Update object's name property.
myArray[objIndex].name = "Laila"


//Log object to console again.
console.log("After update: ", myArray[objIndex])