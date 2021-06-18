const object1 = {
 name :"hritik",
 age:10,
 mess:"hi",
 mess2:"hey",
}
const object2={
name :"gupta",
age:11,
mess:"hello",
fum : function()
{
    console.log (this.mess)
    console.log (this.mess2)
},
para : function(a,b,c)
{
    console.log(this.name)
console.log(a+b+c)
}
}



//Call
object2.fum.call(object1)
object2.para.call(object1,1,2,3)

//Apply
object2.fum.apply(object1)
object2.para.apply(object1,[1,2,3])

//Bind
var a=object2.para.bind(object1,1,2,3)
a()