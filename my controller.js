
let la1 = document.getElementById('la1');
let la2 = document.getElementById('la2');
let la3 = document.getElementById('la3');
let la4 = document.getElementById('la4');

let ra1 = document.getElementById('ra1');
let ra2 = document.getElementById('ra2');
let ra3 = document.getElementById('ra3');
let ra4 = document.getElementById('ra4');

let screen = document.getElementById('header');

let mid = document.getElementById('mid');

let reset = document.getElementById('resetbut');

let gameimage = document.getElementById('gameimage');



let lefts = [la1,la2,la3,la4];
let rights = [ra1,ra2,ra3,ra4];

let holdersl = [document.getElementById('left1'),document.getElementById('left2'),
                document.getElementById('left3'),document.getElementById('left4')];

let holdersr = [document.getElementById('right1'),document.getElementById('right2'),
                document.getElementById('right3'),document.getElementById('right4')];

                


lefts.forEach(element => {
    element.addEventListener("click",()=>{
        let nxt = element.parentElement.nextElementSibling;
        let com = element.parentElement.nextElementSibling.nextElementSibling;
        if(nxt.childElementCount == 0 && (nxt.className == 'holdersl' || nxt.className == 'holdersr'|| nxt.className == 'holdersm' )){
            nxt.appendChild(element);
            console.log("move" , nxt.className);


        }else{
            if(com.childElementCount == 0 && (nxt.className == 'holdersl' || nxt.className == 'holdersr'|| nxt.className == 'holdersm' )){
                com.appendChild(element);
                console.log("move 2", com.id);
            }
        }
    })

    
});

rights.forEach(element => {
    element.addEventListener("click",()=>{
        let nxt = element.parentElement.previousElementSibling;
        let com = element.parentElement.previousElementSibling.previousElementSibling;
        if(nxt.childElementCount == 0 && (nxt.className == 'holdersl' || nxt.className == 'holdersr'|| nxt.className == 'holdersm' )){
            nxt.appendChild(element);
            console.log("move" , nxt.id);
        }else{
            if(com.childElementCount == 0 && (nxt.className == 'holdersl' || nxt.className == 'holdersr'|| nxt.className == 'holdersm' )){
                com.appendChild(element);
                console.log("move 2", com.id);
            }
        }
    })

    
});

reset.addEventListener('click',()=>{

    for( i = 0 ; i < 4 ; i++){
        holdersl[i].appendChild(lefts[i]);
        holdersr[i].appendChild(rights[i]);
    }
    
});

gameimage.addEventListener('click' , ()=>{
    

    if( 
        la1.parentElement.className == 'holdersr' && la2.parentElement.className == 'holdersr' &&
        la3.parentElement.className == 'holdersr' && la1.parentElement.className == 'holdersr' &&

        ra1.parentElement.className == 'holdersl' && ra2.parentElement.className == 'holdersl' &&
        ra3.parentElement.className == 'holdersl' && ra4.parentElement.className == 'holdersl'
        
        ){
        alert("Congratulations champ !!!!! ");
    }
    

    
});

window.onload = ()=>{
    document.getElementById('myname').style.opacity = '0';
}

window.onscroll = function(){
    

    if(document.body.scrollTop > 430 || document.documentElement.scrollTop > 300){
        document.getElementById('myname').style.opacity = '100';
    }
    else{
        document.getElementById('myname').style.opacity = '0';
    }
};