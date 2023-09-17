import {gsap, Flip, RoughEase, TweenLite} from "./node_modules/gsap/all.js"
import {Power4, Power3, Expo} from "./node_modules/gsap/index.js"
gsap.registerPlugin(Flip)



const signupButton = document.querySelector('.sign')
const LogButton = document.querySelector('.log')
const cards = document.querySelectorAll('.cards')



signupButton.addEventListener('click', ()=>{
    
    
    signupButton.classList.add('ssign')

    gsap.to(signupButton,0.2,{ 'borderRadius':50, scale:100.5, backgroundColor: 'rgb(155, 181, 155)', color:' rgb(155, 181, 155)',ease:Power4.easeOut  })
    LogButton.style.opacity = '0'
    setTimeout(() => {
                window.location.href = "./register.html";
                
            }, 500);
        

})




LogButton.addEventListener('click', ()=>{

    LogButton.classList.add('llog')
    cards.forEach((card)=>{
        card.style.opacity = '0'

    })
   

    gsap.to(LogButton,0.2,{ 'borderRadius':50,  backgroundColor: 'rgb(255, 255, 255)', color:'  rgb(93, 252, 112)', scale:100.5,backgroundColor:'rgb(93, 252, 112)', opacity:0.7,ease:Power3.easeOut  })
    setTimeout(() => {
                window.location.href ="/login.html";
                
                
            }, 500);
        
    
    
    
    
   
})







cards.forEach((card, index)=>{

    card.addEventListener('click',()=>{
        const state = Flip .getState(cards);
        //
        const isCardActive = card.classList.contains("active")

        cards.forEach((otherCard, OtherIdx)=>{
            otherCard.classList.remove('active')
            otherCard.classList.remove('is-inactive')
            if(!isCardActive && index!==OtherIdx) otherCard.classList.add('is-inactive')
        });
        if(!isCardActive) card.classList.add('active')
        // Flip.to(state,{ duration:0.4,  ease:easeOut})
    
    })

})


let AddB = document.querySelectorAll('.add-c')
let BuyB = document.querySelectorAll('.buy-i')
let dummyDiv = document.querySelector('.dummy')
let closeButton = document.querySelector('.x-btn')
AddB.forEach((button)=>{
    console.log('button-clickded')
    button.addEventListener('click',()=>{
        dummyDiv.style.display = 'flex'
        gsap.fromTo('.popup', {y:-20, opacity:0}, {y:0, opacity:1})

    })
})


BuyB.forEach((button)=>{
    console.log('button-clickded')
    button.addEventListener('click',()=>{
        dummyDiv.style.display = 'flex'
        gsap.fromTo('.popup', {y:-20, opacity:0}, {y:0, opacity:1})

    })
})





closeButton.addEventListener('click',()=>{
    gsap.fromTo('.popup', {y:0, opacity:1},{y:-20, opacity:0})
    setTimeout(() => {
    dummyDiv.style.display = 'none'
        
    }, 1000);
    // gsap.to('.popup', {opacity:1})
})