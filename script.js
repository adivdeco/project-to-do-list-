let add = document.querySelector(".add");
let remove = document.querySelector(".remove");
let inp    = document.querySelector("input");
let ul =document.querySelector(".listitems")
let li;


add.addEventListener("click",function(){
   if (inp.value.trim()==='')
 {
    
   } else {
    li=document.createElement("li");
    li.textContent=inp.value;
    
    document.querySelector("ul").appendChild(li);
    inp.value=""; 
   }
})

// remove.addEventListener("click",function(){
//     document.querySelector("ul").removeChild(li);
// 
remove.addEventListener("click",function(){
    let itemtoremove = inp.value.trim();
    if (itemtoremove === '') {
        return
    }
                                                              //get list which is inp in li....
let listitems =document.querySelectorAll(".listitems li");
listitems.forEach(function(li){
    if (li.textContent === itemtoremove){
        ul.removeChild(li);
    }
    
});
inp.value="";    // Clear the input field after removing
})















