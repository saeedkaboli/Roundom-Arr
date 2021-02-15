function R(min,max){
    var x=[min];
    var y=[max];
    var a=[min,max];
    var b=[];
    for(var i=min;i<max;++i){
     b.push(++min);
    }
    var f=[...x,...b,...y];
    //return a;
    return f;
   //  console.log(f);

}
var test=R(-20,9)
console.log(test);