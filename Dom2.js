
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
    
            //Show the list of all the users who have applied right below the form using DOM Manipulations.
            // Simply Iterate through the localstorage object to get all the keys stored in it.(
            let User_Details={
                name:nameInput.value,
                email:emailInput.value
            };
            let User_Details_Serialized=JSON.stringify(User_Details);
            localStorage.setItem(emailInput.value,User_Details_Serialized);
            OnScreen(User_Details);
            
    
    }
    
    }
    function OnScreen(user){

        let parentnode=document.getElementById('Users');
        let childHTML=`<li id =${user.email}> ${user.name}-${user.email}
        <button onclick=deleteuser('${user.email}')>Delete User</button>
        <button onclick=editUserDetails('${user.email}','${user.name}')>Edit User </button>
        </li>`;
        parentnode.innerHTML=parentnode.innerHTML+childHTML;
        
    }
    function editUserDetails(emailId,name){
        document.getElementById('email').value = emailId;
        document.getElementById('name').value = name;
        deleteuser(emailId);

    }

    function deleteuser(emailid){
        console.log(emailid);
        localStorage.removeItem(emailid);
        removeuserfromscreen(emailid);
    }
    function removeuserfromscreen(emailid){
        const parentnode=document.getElementById('Users');
        const childnode1=document.getElementById(emailid);
        parentnode.removeChild(childnode1);
    }

