
    let mod=0;
    let sum=0;
    
    let palindrome=num;
    while(num>0)
    {
        mod=num%10;
        sum=(sum*10)+mod;
        num=Math.floor(num/10);
        
    }
    if (sum==palindrome)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
    }