const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{

   if(!validateInputs()){
    e.preventDefault();
   }
})

function validateInputs(){
    const usernameval = username.Value.trim()
    const emailval = email.Value.trim();
    const passwordval = password.Value.trim();
    const cpasswordval = cpassword.Value.trim();

    if(usernameval===''){
        setError(username,'username is required')
    }
    else 
         setSuccess(username)

    if(usernameval===''){
            setError(email,'Email is required')
        }
    else if(!validateEmail(emailval)){
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordval===''){
        setError(password,'password is required')
    }
else if(passwordval.length<8){
    setError(password,'Password must be atleast 8 charcters long')

}
else{setSuccess(password)}

 if(passwordval === ''){
    setError(cpassword,' confirm Password is required')

}
else if (passwordval!==passwordval){
    setError(cpassword,'password does not match')
}
else{setSuccess(password)}  
}
//element - password, msg- password is required
function setError(element,message){
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.Queryselector('.error')
    
    errorElement.innerText = message;
     inputgroup.classList.add('errror')
     inputgroup.classList.remove('Success')
}

function setSucess(element){
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.Queryselector('.error')
    
    errorElement.innerText = '';
     inputgroup.classList.add('success')
     inputgroup.classList.remove('error')
}

let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let mail = "test@example.com";

if (regex.test(mail)) {
    console.log("Valid Email address");
} else {
    console.log("Invalid Email address");
}