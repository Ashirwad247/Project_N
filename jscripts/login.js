


const form = document.querySelector('.lform')

function onloadd(){
    if(form.classList.contains('hidden')){
        setTimeout(() => {
            form.classList.remove('hidden')
            
        },2000 );
       
        form.classList.add('show')

    }
   

    
}


function login(){
    let luserName = document.querySelector('.us').value
    let lpassword = document.querySelector('.ps').value

    let log = document.querySelector('.log')
   
    log.style.display = 'flex'
    let userChecker = JSON.parse(localStorage.getItem(luserName))
    if(!userChecker){
        log.innerHTML = 'User does not exist'
    }
    if(userChecker.password != lpassword){
        log.innerHTML = 'Wrong Password'
    }
    
    log.innerHTML = 'Login Successful<br>Redirecting..'
    let checkedUser = luserName
    localStorage.setItem("currentname",checkedUser)
    
    window.location.href = "/htmls/user.html"
    

   
    
   
    
}








