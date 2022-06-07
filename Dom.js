
let filter=document.getElementById("filter");


//Filter
filter.addEventListener('keyup',filterItems);


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




