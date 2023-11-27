


const form = document.querySelector('.lform')

function onloadd(){
    if(form.classList.contains('hidden')){
        setTimeout(() => {
            form.classList.remove('hidden')
            
        },2000 );
       
        form.classList.add('show')

    }
   

    
}
console.log(window.location.pathname)


document.addEventListener("keypress", function(e){
    if(e.key=="Enter" || e.keyCode == 13){
        console.log('Entered')
        login()
    }
})

console.log('changed all')

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
    
    setTimeout(() => {
        window.location.href = "./user.html"
    }, 2000);
  
    

   
    
   
    
}








