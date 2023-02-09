function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
} 
function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}


function firstName(people){
    return map(people,function(person){
        return person.name.first;
    });
}

var lastNames = function(people){
    return map(people,function(person){
        return person.name.last;
    }); 
}


var lastNames = function(people){
    return map(people,function(person){
        return person.name.last;
    }); 
}


var fullNames = function(people){
    return map(people,function(person){
        return person.name;
    }); 
}


var fullNames = function(people){
    return map(people,function(person){
        return person.name.first + ' ' + person.name.last;
    }); 
}

//2

function abs(x) { 
    if (x >= 0) { 
          return x; 
    } 
    return -x; 
} 
var z= [1, -2, 37, -100, -8, 5];

map(z,abs); //===> [1, 2, 37, 100, 8, 5];

//3
var max =function(array){
    var m=0;
    each(array,function(v){
        if (v>m){
            m=v;
        }
    })
    return m;
}

var maximums = function(arrays){
    return map (arrays,max);
}

//More Practice

var exponentials(numbers){
    return map (arr,function(v,i){
        return v**i
    })
}

