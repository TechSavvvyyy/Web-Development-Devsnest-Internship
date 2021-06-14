//Question 1
const b=function(input=[1,2,3])
{
    if  (Array.isArray(input))
        console.log("Array");
        return true
    console.log(" Not Array");
}

//Question 2
var array_Clone = function(arra1) {
    return arra1.slice(0);
       }
//Question 3
var first =  function(array, n) {
        if (array == null) 
        return void 0;
      if (n == null) 
        return array[0];
      if (n < 0)
        return [];
      return array.slice(0, n);
    };

//Question 4
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

//Question 5
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ");