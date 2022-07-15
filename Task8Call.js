var obj ={ name : 'john'};

let welcome = function(){
    console.log('hi, '+this.name);
}

welcome.call(obj);