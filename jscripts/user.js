
import {gsap, Flip, RoughEase, TweenLite} from "./node_modules/gsap/all.js"
import {Power4, Power3, Expo, Elastic} from "./node_modules/gsap/index.js"
gsap.registerPlugin(Flip)
gsap.registerPlugin(TweenLite)

let unameDispaly  = document.querySelector('.usb')
let uname =localStorage.getItem('currentname')



let closeB = document.querySelector('.x-button')
let mclose = document.querySelector('.mx-button')
let rup = document.querySelector('.h-1')
let no = document.querySelector('.h-2')
let payB =  document.querySelector('.buy-bought')
let cart =document.querySelector('.cart')

let uDiv = document.querySelector('.u')
let logOutButton = document.querySelector('.logt')


  //open a new html
let bBuy = document.body.querySelector('.bb-buy')
let bought = document.body.querySelector('.hnmdiv')
  



let MyOrdersDiv = document.querySelector('.ndiv')

let myOrdersConnectedDiv = document.querySelector('.mrs')


unameDispaly.innerHTML = uname
let n=0
let menu = document.querySelector('.dupmenu')
menu.classList.add('hmenu')
unameDispaly.addEventListener('click',()=>{
    
    if(n%2==0){
        menu.classList.remove('hmenu') 
        menu.classList.add('menu')
        gsap.to(menu, {y:5, opacity:1})
         
 
        
       
    }   
    else{
      
        gsap.fromTo(menu,{y:5, opacity:1}, {y:0, opacity:0, duration:0.5})
        setTimeout(() => {
            menu.classList.remove('menu')
            menu.classList.add('hmenu')

        }, 500);
       
      
    }
    n++
    
   
})

logOutButton.addEventListener('click',()=>{
    gsap.to('body', {opacity:0})
    setTimeout(() => {
    window.location.href = "./"
  
        
    }, 1000);
})

let itemShower = document.querySelector('.gitems')
const cards = document.querySelectorAll('.cards')
let price=0
let count =0
let cartElement = document.body.querySelector('.cart .c')
let temp=0


cards.forEach((card, index)=>{

    card.addEventListener('click',()=>{
        const state = Flip .getState(cards);
        
        const isCardActive = card.classList.contains("active")

        cards.forEach((otherCard, OtherIdx)=>{
            otherCard.classList.remove('active')
            otherCard.classList.remove('is-inactive')
            if(!isCardActive && index!==OtherIdx) otherCard.classList.add('is-inactive')
        });

        if(!isCardActive){
            card.classList.add('active')
            Flip.from(state, {ease: Expo,duration:0.25, opacity:1}) 

            //buy Logic
             price = card.querySelector('.lf .price .pricen').innerHTML.slice(1)
             let   bprice = '&#8377;'+ price
          

            let buyButton = card.querySelector('.info .btns .buy-i')
            buyButton.addEventListener('click', ()=>{

                
                localStorage.setItem('cprice', bprice)
                buyAdder(card)
                open('Pay.html')
       
              
            })


          
        }


        
    
    })

})



//add to cart Logic

let bbb = document.body.querySelector('.bbb')
let Addiing = document.body.querySelector('.ing')
let id
let IntId 
let toPopArray =[]

let addtoB =document.querySelectorAll('.add-c')
addtoB.forEach(button=>{
    button.addEventListener('click',()=>{
        count++;
        cartElement.innerHTML = count
        TweenLite.fromTo(cart, {rotation:-40, scale:1.4,}, {rotation:0,scale:1, ease:Elastic, duration:0.25, }  )
        
        // console.log(cart)
        bbb.style.display = 'flex'
        

        cards.forEach(card=>{
            if(card.contains(button)){
                // console.log('yes')
                price = card.querySelector('.lf .price .pricen').innerHTML.slice(1)
                id = card.querySelector('.item-id')
                console.log(id.innerHTML)
                IntId = Number.parseInt(id.innerHTML)
                console.log(typeof(IntId))
                toPopArray.push(IntId)
                console.log(toPopArray)
               
                cartAdder(card)
              


            }
        })
          
        CartShower(price, count)

    })

  
    function CartShower(price, count){
        let cartPrices = document.querySelector('.cd1')
        // console.log(cartPrices)
        let cartSum=document.querySelector('.cd2')
        
        let  temp1=price
        temp1=Number.parseInt(temp1)
        temp +=temp1
        // console.log(temp)
        cartPrices.innerHTML = count
        if(count>1){
            no.innerHTML = 'Cart'+' '+count+' Items'
        }else{
        no.innerHTML = count+' Item'

        }
        rup.innerHTML = '&#8377;'+temp
        rup.style.fontSize = '20px'
        cartSum.innerHTML=temp

    }
  
})





// Orders Cart 
bBuy.addEventListener('click', ()=>{
   
        bought.classList.remove('hnm')
        bought.classList.add('bought')
        gsap.to(bought, {opacity:1, y:0, scale:1})

  
   
 
})


closeB.addEventListener('click', ()=>{
  closeBfun()
    
})

function closeBfun(){
    console.log('clciked')
   
        gsap.to(bought, {y:-80, ease:Expo, opacity: 0, duration:0.5})
        setTimeout(() => {
         bought.classList.remove('bought')
        
         bought.classList.add('hnm')
            
        }, 500);
    

   
}

//My Orders logic

let MyOrdersButton = document.querySelector('.myobtn')
MyOrdersButton.addEventListener('click',()=>{
    MyOrdersDiv.classList.remove('nhidden')
    MyOrdersDiv.classList.add('mors')
    gsap.fromTo(MyOrdersDiv, {opacity:0, y:-40},{opacity:1, y:0})
   
    
})

let MyOrdersCloseButton = document.querySelector('.mx-button')
MyOrdersCloseButton.addEventListener('click',()=>{

    gsap.to(MyOrdersDiv, {y:-80, ease:Expo, opacity: 0, duration:0.5})
    setTimeout(() => {
     MyOrdersDiv.classList.remove('mors')
    
     MyOrdersDiv.classList.add('nhidden')
        
    }, 500);

})


//buy one item function
function buyAdder(card){
    console.log('called the stupid function')
    let bcard = document.createElement('div')
    let bid= card.querySelector('.item-id')
    toPopArray.push(bid)
    IntId=Number.parseInt(bid.innerHTML)
   

    bcard.innerHTML = card.innerHTML

    bcard.classList.add('newcard')
    let jj = bcard.hasChildNodes()
    if(jj == true){
        const info = bcard.querySelector('.info')
        info.remove()
    }
    itemShower.removeChild(card)
    myOrdersConnectedDiv.appendChild(bcard)
    
    

    

    
}



function cartAdder(card){
    let ncard = document.createElement('div')
    ncard.innerHTML = card.innerHTML
    ncard.classList.add('newcard')
    let jj = ncard.hasChildNodes()
    if(jj == true){
        const info = ncard.querySelector('.info')
        info.remove()
    }
    Addiing.appendChild(ncard)
    
}

let amount=0

payB.addEventListener('click',()=>{
    console.log('clicked')
    amount = rup.innerText
    console.log(amount)
    localStorage.setItem('cprice', amount)

    open('Pay.html')
    
})

let flag , newprice
localStorage.removeItem('flagValue')
function flagChanger(){
    flag = localStorage.getItem('flagValue')
    if(flag !== null){
        
        DelAdC()
        
        console.log('called funtion')
    }
   
}


flagUpdate()
let cid, CintId
function DelAdC(){
    
   toPopArray.sort()
   let  revar=toPopArray.reverse()
    console.log(revar)
    cards.forEach(card=>{
        cid = card.querySelector('.item-id')
        console.log(cid)
        CintId = Number.parseInt(cid.innerHTML)
        if(revar.includes(CintId)){
                
            toPopArray.pop(CintId)
            console.log(toPopArray+"After poping")
            console.log('yes')
            console.log(CintId)
            newprice = card.querySelector('.lf .price .pricen').innerHTML.slice(1)
            count=0
            CartShowerCount(newprice, count)
            CartRemover(card)
            cartElement.innerHTML = count
            gsap.to(card, {y:-20, opacity:0, duration:1})
            closeBfun()
    
            setTimeout(() => {
            if(CintId == CintId){
                itemShower.removeChild(card)

            }
            
            
    
            }, 1000);
            console.log('removed')
            
            
            // console.log(toPopArray)
           
    
        }
       
    })
    localStorage.removeItem('flagValue')


    
}




function flagUpdate(){
    setInterval(() => {
        flagChanger()
        console.log(flag)
        console.log(toPopArray)
       
    }, 1000);
   
    
}


function CartShowerCount(price, count){
    let cartPrices = document.querySelector('.cd1')
    // console.log(cartPrices)
    let cartSum=document.querySelector('.cd2')
    
    let  temp1=price
    temp1=Number.parseInt(temp1)
    temp = 0
    // console.log(temp)
    cartPrices.innerHTML = ''
    if(count>1){
        no.innerHTML = count+' Items'
    }else{
    no.innerHTML = count+' Item'

    }
    rup.innerHTML = '&#8377;'+'0'
    rup.style.fontSize = '20px'
    cartSum.innerHTML='0'

}

let child

function CartRemover(card){
    let children = Addiing.children
    // myOrdersConnectedDiv.innerHTML = 'hello'

    for(let i=0; i<children.length; i++){
        child = children[i];
        
        child.remove()
        myOrdersConnectedDiv.appendChild(child)
        console.log(toPopArray)

    }
   
    

 
}






















