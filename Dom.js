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

let li=document.getElementsByTagName('li');
//Adding a new li element without classname in index.html and then editing all li items using getElementsByTagName.
for (let i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
    li[i].style.color='green';
}