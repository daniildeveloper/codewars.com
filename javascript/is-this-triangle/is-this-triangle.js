function isTriangle(a,b,c)
{
   return a < b + c && b < a + c && c < a + b;
}

var q = isTriangle(7, 2, 2);

console.log(q);