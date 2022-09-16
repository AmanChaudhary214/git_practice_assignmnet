let num=13;

let i=1;
let count=0;
while (i<=num)
{
    if (num%i==0){
        count++
    }
    i++;
}
if (count==2){
    console.log("Prime");
}
else{
    console.log("Not prime");
}
