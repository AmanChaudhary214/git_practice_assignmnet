
    let rem=0;
    let sum=0;
    
    let palindrome=num;
    while(num>0){
        rem=num%10;
        sum=(sum*10)+rem;
        num=Math.floor(num/10);
    }
    if(sum==palindrome){
        console.log("Yes");
    }
    else{
        console.log("No");
    }