let myForm=document.querySelector('#my-form');
let nameInput=document.querySelector('#name');
let emailInput=document.querySelector('#email');
let msg=document.querySelector('.msg');
let userList=document.querySelector('#users');

//Event
myForm.addEventListener('submit',onSubmit);

//Functionality

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value=='' || emailInput.value==''){
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';
    } else{
        console.log('Success');
        //Adding to local storage
        //localStorage.setItem(nameInput.value,emailInput.value);

        //Using object to store in local storage
        let User_Details={
            name:nameInput.value,
            email:emailInput.value
        };
        let User_Details_Serialized=JSON.stringify(User_Details);
        localStorage.setItem("User_Details",User_Details_Serialized);
        

    }
}