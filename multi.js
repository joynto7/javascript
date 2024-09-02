//  Multiple Condition 

const price = 5000;
if("price>=5000"){
    const discount = price * 10/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price>=2500) {
    // 5% discount
    const discount = price * 5/100;
    const payAmount = price -discount
    console.log(payAmount);

}


else{
    console.log('price');
}

const age = 18;
if(age<18){
    console.log("You can smoke");
}

else if(age >= 50){
    console.log("You are not allowed");
}
else{
    console.log("you can't Smoke");
}