var obj = {num:5};

let adder = function(a,b,c){
    return this.num+a+b+c;
}

let binder = adder.bind(obj);
console.log(binder(1,2,3))