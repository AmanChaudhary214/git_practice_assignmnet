let i=2, prime=0;
while (i<num)
{
    if (num%i==0)
    {
        prime=1;
        break;
    }
    i++;
}
if (prime==1)
{
    console.log("No");
}
else
{
    console.log("Yes");
}