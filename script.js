const menu=document.querySelector(".menu-btn");
const nav=document.querySelector(".site-header nav");
if(menu&&nav){
  menu.addEventListener("click",()=>nav.classList.toggle("open"));
}
document.querySelectorAll(".site-header nav a").forEach(a=>{
  a.addEventListener("click",()=>nav?.classList.remove("open"));
});
const form=document.getElementById("quoteForm");
if(form){
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const data=new FormData(form);
    const subject=encodeURIComponent(`ARVEX Quote Request - ${data.get("product")}`);
    const body=encodeURIComponent(
`Name: ${data.get("name")}
Email: ${data.get("email")}
Product: ${data.get("product")}
Quantity: ${data.get("quantity")}

Requirements:
${data.get("message")}`
    );
    window.location.href=`mailto:arvexclothing.co@gmail.com?subject=${subject}&body=${body}`;
  });
}
