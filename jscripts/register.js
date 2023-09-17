


const form = document.querySelector('.form')

function onloadd(){
    if(form.classList.contains('hidden')){
        setTimeout(() => {
            form.classList.remove('hidden')
            
        },2000 );
       
        form.classList.add('show')

    }
   

    
}





document.addEventListener("keypress", function(e){
    if(e.key=="Enter" || e.keyCode == 13){
        console.log('Entered')
        register()
    }
})

function register(){
    let userName = document.querySelector('.us').value
    let password = document.querySelector('.ps').value
    let password1 = document.querySelector('.ps1').value

   

    let log = document.querySelector('.log')
   
    log.style.display = 'flex'
    
    if(password == password1){
        // chekPass(password)
        let user = {
            username:userName,
            password:password
        }
        localStorage.setItem(userName, JSON.stringify(user));
        log.innerHTML = 'Registerd Succesfully'
        myvals = localStorage.getItem(userName)
        setTimeout(() => {
            window.location.href = '/login.html'
        }, 1000);
        
    }else{
        log.innerHTML = 'password does not match'
    }
}







