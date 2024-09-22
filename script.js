function notifyMe(){
    let email = document.getElementById("email");
    let errorMessage = document.getElementById("error-message")
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email.value);

    if(email.value===""){
        alert("Whoops! It looks like you forgot to add your email")
    }
    else{

        if (isValid === false){
            errorMessage.style.display = 'block';
            email.style.border = '1px solid hsl(354, 100%, 66%)'
        }
        else{
            errorMessage.style.display = 'none'; 
            email.style.border = '1px solid hsl(223, 100%, 88%)'
            alert("Thank you! You will be notified.");
        }
    }
}