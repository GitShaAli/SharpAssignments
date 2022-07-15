var student = {age : 20};

function displayAge(a){
    return this.age
}

let binder = displayAge.bind(student);
console.log("Age :"+binder());