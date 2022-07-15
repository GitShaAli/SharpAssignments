let multiply = function(x,y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(3);

let add = function(a){
    return function(b){
        console.log(a+b);
    }
}

let addWithTwo = add(2);
addWithTwo(3);