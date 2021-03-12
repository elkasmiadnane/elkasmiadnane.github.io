
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

let counter = 0;



let lefts = [la1,la2,la3,la4];
let rights = [ra1,ra2,ra3,ra4];

let holdersl = [document.getElementById('left1'),document.getElementById('left2'),
                document.getElementById('left3'),document.getElementById('left4')];

let holdersr = [document.getElementById('right1'),document.getElementById('right2'),
                document.getElementById('right3'),document.getElementById('right4')];




                

//document.getElementById('hint1').style.opacity = '0';

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


    counter++;

    if (counter>4){
        document.getElementById('hint1').style.opacity = '100';

        document.getElementById('hint1').innerHTML = 'Hint 1 : You probably should consider freeing space to move the arrows to their home direction';
    }

    if(counter>8){
        

        document.getElementById('hint1').innerHTML = 'Hint 2 : Not having two arrows with same direction next to each other is the way to go'
    }

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
        setTimeout(alert("Congratulations champ !!!!! "),500);
    }
    

    
});



window.onload = ()=>{
    document.getElementById('myname').style.opacity = '0';

    setTimeout(function(){
        document.getElementById('firstpagemytext').style.transform = 'translate(0%,0%)';
        document.getElementById('firstpagemytext').style.opacity = '1';
    },1000);

    
}

// function isembedInViewPort(function(document.getElementById('embeddedsystemstext')){

// }

window.onscroll = function(){

    console.log(document.getElementById('embeddedsystemstext').getBoundingClientRect().y);

    if (document.getElementById('embeddedsystemstext').getBoundingClientRect().y < 600){
        document.getElementById('embeddedsystemstext').style.transform = 'translate(10%,0%)' ;
        document.getElementById('embeddedsystemstext').style.opacity = '1' ;
        
    }
    

    if(document.body.scrollTop > 430 || document.documentElement.scrollTop > 300){
        document.getElementById('myname').style.opacity = '100';
    }
    else{
        document.getElementById('myname').style.opacity = '0';
    }

    if(document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300){
        document.getElementById('Sysid').style.clipPath = 'circle(100%)';
    }
    if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
        document.getElementById('androidproject').style.clipPath = 'circle(100%)';
    }
    if(document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700){
        document.getElementById('pythonproject').style.clipPath = 'circle(100%)';
    }
};

document.getElementById('contactme').addEventListener('click', ()=>{
    window.open('public/contactme.html');

    
})