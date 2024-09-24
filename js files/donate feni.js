




document.getElementById('feni-donate-btn')
.addEventListener('click',function(event){
    event.preventDefault()
    
    const donateMoney2 = getInputValueById('donate-money-feni');
    const balance = getTextValueById('main-balance');

    if (typeof donateMoney2 === 'number' && donateMoney2 >= 0 && donateMoney2 <= balance  ){

        
        const feniBalance = getTextValueById('noa-donated-balance');

        const newBalanceMain = balance - donateMoney2;
        const newFeniBalance = feniBalance + donateMoney2;

        document.getElementById('noa-donated-balance').innerText = newFeniBalance;
        document.getElementById('main-balance').innerText = newBalanceMain;

    }
    else{
        alert('Please type valid information');
        return ;
    }
    
})