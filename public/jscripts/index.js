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
                window.location.href = "./register";
                
            }, 500);
        

})




LogButton.addEventListener('click', ()=>{

    LogButton.classList.add('llog')
    cards.forEach((card)=>{
        card.style.opacity = '0'

    })
   

    gsap.to(LogButton,0.2,{ 'borderRadius':50,  backgroundColor: 'rgb(255, 255, 255)', color:'  rgb(93, 252, 112)', scale:100.5,backgroundColor:'rgb(93, 252, 112)', opacity:0.7,ease:Power3.easeOut  })
    setTimeout(() => {
                window.location.href ="./login";
                
                
            }, 500);
        
    
    
    
    
   
})

let itemShower = document.querySelector('.gitems')
let searchButton = document.querySelector('.search-btn')
let nfDiv =document.querySelector('.nfd')
let iShowStyle = itemShower.innerHTML
searchButton.addEventListener('click', ()=>{
    Searcher()



})

document.addEventListener('click',()=>{
    document.addEventListener("keypress", function(e){
        if(e.key=="Enter" || e.keyCode == 13){
            Searcher()
        }
    })
})


function Searcher(){
    let ndflag=false
    console.log('called')
    itemShower.innerHTML=iShowStyle
    let searcBar = document.querySelector('.searchbar').value.toLowerCase()
    console.log(searcBar)
    cards.forEach((card)=>{
        let Ishower=itemShower.innerHTML
        let itemName =card.querySelector('.lf .i-name').innerHTML.toLowerCase()
        console.log(itemName)
        if(itemName == searcBar)
        {   
          ndflag =true
          itemShower.innerHTML=''
          itemShower.appendChild(card)
        }
    
     
    })
    if(ndflag!=true){
        nfDiv.classList.add('nshow')
        setTimeout(() => {
            nfDiv.classList.remove('nshow')
        }, 3000);
    }

   
}


  



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