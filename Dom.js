

//Adding an item in the form and deleteing it. Aswell as creating Edit and Delete button
let form=document.getElementById("addForm");
let itemList=document.getElementById("items");
let filter=document.getElementById("filter");



form.addEventListener('submit',addItem);

//Delete an event
itemList.addEventListener('click',removeItem);

//Filter
filter.addEventListener('keyup',filterItems);

function addItem(e){
    e.preventDefault();

    let newItem=document.getElementById('item').value;

    let li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);
    
    //Adding delete button to the added item
    let deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    //Adding edit button to the added item
    let Editbtn=document.createElement('button');
    Editbtn.className='btn btn-info btn-sm float-right';
    Editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(Editbtn);
    itemList.appendChild(li);
}


function removeItem(e){
    if (e.target.classList.contains('delete')){
        if (confirm('Are you sure?')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}
//Implementing Filter
function filterItems(e){
    let text=e.target.value.toLowerCase();
    let items=document.getElementsByTagName("li");
    let New_Array=Array.from(items);
    
    New_Array.forEach(function(item){
        let ItemName=item.firstChild.textContent;
        if (ItemName.toLowerCase().indexOf(text)!=-1){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    })


};




