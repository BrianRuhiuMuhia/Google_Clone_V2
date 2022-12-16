const list =document.querySelector("ul")
const links=document.querySelectorAll(".link")
const linkBtn=document.querySelectorAll(".link-btn")
links.forEach((link)=>
{
    link.onmouseover=function(e)
    {
    e.currentTarget.children[0].classList.add("show-btn")
    }
    link.onmouseleave=function(e)
    {
    e.currentTarget.children[0].classList.remove("show-btn")
    }
    
})
linkBtn.forEach((btn)=>{
    btn.addEventListener("click",function()
    {
        
    })
})