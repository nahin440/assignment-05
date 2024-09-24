


document.getElementById('noa-donate-btn')
.addEventListener('click',function(event){
    event.preventDefault()
    
    const donateMoney = getInputValueById('donate-money-noa');
    const balance = getTextValueById('main-balance');

    if (typeof donateMoney === 'number' && donateMoney >= 0 && donateMoney <= balance  ){

        
        const noaBalance = getTextValueById('noa-donated-balance');
        console.log(noaBalance,balance,donateMoney);

        const newBalanceMain = balance - donateMoney;
        const newNoaBalance = noaBalance + donateMoney;

        document.getElementById('noa-donated-balance').innerText = newNoaBalance;
        document.getElementById('main-balance').innerText = newBalanceMain;

    }
    else{
        alert('Please type valid information');
        return ;
    }
    
})
