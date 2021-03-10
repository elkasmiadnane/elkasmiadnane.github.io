
const contactme = document.querySelector('.contact-form');

let namee = document.getElementById('name');
let object = document.getElementById('object');
let email = document.getElementById('email');
let message = document.getElementById('message');






let headers = new Headers();

headers.append("Content-Type", "application/json");





contactme.onsubmit = async(event)=>{
    console.log('did it ');

    event.preventDefault();

    

    const form = event.currentTarget;

    console.log('form is ' , form);

    if ( namee.value != null  ){
            const formdata = {
                name : namee.value,
                email : email.value,
                object : object.value,
                message : message.value,


            }

            // console.log('form data ' , formdata);
            // console.log('headers are ' , headers)



            let responsePromise = await fetch (  form.action , {
                method : 'POST',
                headers,
                body : JSON.stringify(formdata)
            }).then(function(response){
                console.log('its' , response);
                return response.json();
            }).then(function(jsonData){
                console.log('done');
                //console.log('its' , response);
                alert('object is ' , jsonData.formdata);
            
            }).catch(error=>{
                alert(error);
            });


        }else  alert('Please fill all fields')
        
        

    

    
};

