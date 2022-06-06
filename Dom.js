//console.dir(document)
//console.log(document.all);
//document.all[10].textContent="Hello, Anurag";

//console.log(document.getElementById('main'));
//console.log(document.getElementById('header-title'));
//let headertitle=document.getElementById('header-title');
//headertitle.textContent="Hello, Anurag Verma"
//headertitle.style.borderBottom='solid 2px black';

//let mainhead=document.getElementById('main-header');
//mainhead.style.borderBottom='solid 4px black';

//let header2=document.getElementById('header 2');
//header2.style.color='green';
//header2.style.fontWeight='bold';

// var items=document.getElementsByClassName('list-group-item');
// //Making all the list elements Bold.

// for (let i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

// //Updating the 3rd element in the list with green background
// items[2].style.backgroundColor='green';

// let li=document.getElementsByTagName('li');
// //Adding a new li element without classname in index.html and then editing all li items using getElementsByTagName.
// for (let i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
//     li[i].style.color='green';
// }

//QuerySelector//
// let header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px blue';

//  let input=document.querySelector('input');
//  input.value='Welcome, Anurag';

// let seconditem=document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor='green';

//let thirditem=document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.color='white'

//QuerySelectorAll//


//  let odd=document.querySelectorAll('li:nth-child(odd)');
//  for (let i=0;i<odd.length;i++){
//      odd[i].style.backgroundColor='green';
//  };

//  let allsecond=document.querySelectorAll('li');
//  allsecond[1].style.color='green';
// // let allseconditem=document.querySelectorAll('li:nth-child(1)');
// // allseconditem.style.fontcolor='red'

//PARENTNODE
// let itemlist=document.querySelector('#items');
// itemlist.parentNode.style.backgroundColor='#f4f4f4';

// // //PARENTELEMENT
//  let itemlist=document.querySelector('#items');
//  itemlist.parentElement.style.backgroundColor='#f4f4f4';

// //Children
// let childlist=document.querySelector('#items');

// childlist.children[1].style.background='yellow';

// //firstElementChild
// itemlist.firstElementChild.textContent='Hello1';

// //Lastelementchild
// itemlist.lastElementChild.textContent='Last Hello';

// //Nextelementsibling
// itemlist.nextElementSibling.style.background='purple';

// //previouselementsibling
// itemlist.previousElementSibling.style.background='blue';

// //Create DIV-Add Class-Add Attributes-Create textnode inside the new div-then add this
// //new div just above <h1> in header and below div having class container .
//  let newdiv=document.createElement('div');
//  newdiv.className='hello';
// newdiv.setAttribute('title','Hello People');
//  let newdivtext=document.createTextNode('Hello World');
//  newdiv.appendChild(newdivtext);
//  let container=document.querySelector('header .container');
// let h1=document.querySelector('header h1');
//  console.log(newdiv);
// container.insertBefore(newdiv, h1);

// //Now go head and add HEllo word before Item 1

// let newele=document.querySelector('div');
// newele.className='Added Hello';
// newele.setAttribute('title', 'Adding Hello');
// let neweletext=document.createTextNode('Added Hello Now');
// newele.appendChild(neweletext);
// let conatainer1=document.querySelector('header .list-group');
// let li=document.querySelector('header li');
// conatainer1.insertBefore(newele,li)

//Button
// let button=document.getElementById('button').addEventListener('click',function(){
//     console.log(123)
// });

//Click the button so that the header gets changed
// let button=document.getElementById('button').addEventListener('click',buttonClick);
// function buttonClick(){
//     document.getElementById('header-title').textContent= 'Changed';
//     document.querySelector('#main').style.backgroundColor='#f4f4f4';
// }


//Adding an item in the form and deleteing it. Aswell as creating Edit and Delete button
let form=document.getElementById("addForm");
let itemList=document.getElementById("items");



form.addEventListener('submit',addItem);

//Delete an event
itemList.addEventListener('click',removeItem);

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
