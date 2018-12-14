var array = [+3, +3, +4, -2, -4];
var done = false;
var i = 0;
var seen = []
var current = 0;
while(!done) { 
    current += array[i]; 
    if(seen.find((i) => i === current)) {
        done = true; 
        console.log(current);
    } 
    seen.push(current); 
    i++;
    if(i === array.length) {
        i = 0;
    }
}