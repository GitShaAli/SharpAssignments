var obj ={ num : 4};

let addWith = function(a,b,c){
    return this.num+a+b+c;
}

let arr = [1,2,3];
console.log(addWith.apply(obj,arr));