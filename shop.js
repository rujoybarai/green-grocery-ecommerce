const productSection =document.querySelector(".product-section");


// product list//

 const createPro_Card=(d)=>{
 
   let proCard=document.createElement("div");

   proCard.className="product-card";

   let pr_Img =document.createElement("img");
   pr_Img.src=d.img;

   let H3=document.createElement("h3");
    H3.innerText=d.name;
   let P3=document.createElement("p");
    P3.innerText=d.price;
   let Btn=document.createElement("button");
    Btn.innerText="Add to cart";
  

   productSection.appendChild(proCard);

   proCard.appendChild(pr_Img);
   proCard.appendChild(H3);
   proCard.appendChild(P3);
   proCard.appendChild(Btn);
  
    addNotify(Btn);
   
 }
const cartBtn =document.querySelector(".cart");
 cartBtn.addEventListener("click",()=>{
   alert("coming soon ! 👷")
 });
 const addNotify=(Btn)=>{
   Btn.addEventListener("click",()=>{
    Btn.style.backgroundColor="green";
    Btn.innerText="Added ";
     const cartH1=document.createElement("h1");
      cartH1.textContent="!";
    cartBtn.appendChild(cartH1);
   })
 }


 const getCardDetail = async (file)=>{
    
  let res = await fetch(file);
  data = await res.json();

  productSection.innerHTML="";
  data.forEach((d)=>{
    createPro_Card(d);
  });
}

getCardDetail("./shopproduct.json");

//about//
const aboutBtn=document.querySelector(".about");

aboutBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  alert("This page is unavailable currently 👷");
  
});



// menu ber for mobile//

const menuBtn =document.querySelector(".menu");
const cartImg =document.querySelector(".cart img");
const Login =document.querySelector(".log");
const Reg =document.querySelector(".reg");

menuBtn.addEventListener("click", (e)=>{

  cartImg.classList.toggle("menu-ac");

  Login.classList.toggle("menu-ac");

  Reg.classList.toggle("menu-ac");
});



///log-page//

const logPage = document.querySelector(".log-page");
const errEmail=document.querySelector(".errEmail");
const errPass = document.querySelector(".errPass")
const err = document.querySelectorAll(".err");

const submitBtn = document.querySelector(".Submit");
const emailInput =document.querySelector("#email")
const passInput =document.querySelector("#pass")
const logBtn =document.querySelector(".log");
const H = document.querySelector(".log-page h1");
const H2 = document.querySelector(".log-page h2");


err.forEach((e)=>{
  
 e.style.cssText =`
    color:red;
    font-size:10px;
    font-weight:400px;
    font-style:italic;
    margin-top:1px;
    margin-bottom:1px;
    margin-left:40px;
    padding-left:20px;
 
 
 `

});

logPage.addEventListener("submit",e =>{
  e.preventDefault();
   
  const formData= new FormData(logPage);

  const Email=formData.get("email");
  const pass = formData.get("password");

  if(!Email){
    errEmail.textContent="please fill up the form"
  }else if(!/^(?:[a-zA-Z0-9_'^&+/=?`{|}~.-]+)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(Email)){
    errEmail.textContent="invallid Email"
  }else{
    errEmail.textContent="";
  }

  if(!pass){
    errPass.textContent="please fill up the form"
  }
  else{
     errPass.textContent="";
  }

 if(Email && pass){
  emailInput.classList.add("hide");
  passInput.classList.add("hide");
  submitBtn.classList.add("hide");
   H2.classList.add("hide");
   H.textContent="Login Successful!";
 }
 


});


logBtn.addEventListener("click",e=>{
  logPage.classList.add("Active");

  
   emailInput.classList.remove("hide");
  passInput.classList.remove("hide");
  submitBtn.classList.remove("hide");
   H2.classList.remove("hide");
   H.textContent="";
   emailInput.value="";
   passInput.value="";
  
});

const offLog= document.querySelector("#off-log");

offLog.addEventListener("click",()=>{
  logPage.classList.remove("Active");
});

// regration-page//
// regration-page//
const regPage= document.querySelector(".reg-page");
const regBtn= document.querySelector(".reg");
const errName = regPage.querySelector(".errName");
const errcPassReg = regPage.querySelector(".errCpass");
const errPassReg = regPage.querySelector(".errPass")
const errEmailReg=regPage.querySelector(".errEmail");




const submitBtnReg = regPage.querySelector(".Submit");

const emailInputReg =regPage.querySelector("#email")
const passInputReg =regPage.querySelector("#pass")
const nameInputReg =regPage.querySelector("#name");
const cpassInputReg = regPage.querySelector("#Cpass");


const HH = regPage.querySelector(".reg-page h1");
const HH2=regPage.querySelector(".reg-page h2");

const offreg= document.querySelector("#off-reg");

regPage.addEventListener("submit",e=>{
  
 e.preventDefault();
   
  const formData= new FormData(regPage);

  const name =formData.get("Name");
  const email=formData.get("email");
  const pass = formData.get("password");
  const cpass = formData.get("Cpassword");
 
  if(!name) {
    errName.textContent="please fill up the name";
  }else if(!/^[A-Za-z]{2,30}\s[A-Za-z]{2,30}$/.test(name)){
    errName.textContent="invalid (enter ful name)";
  }else{
    errName.textContent="";
  }

  if(!email){
    errEmailReg.textContent="please fill up the form";
  }else if(!/^(?:[a-zA-Z0-9_'^&+/=?`{|}~.-]+)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(email)){
    errEmailReg.textContent="invallid Email";
  }else{
    errEmailReg.textContent="";
  }

  if(!pass){
    errPassReg.textContent="please fill up the form";
  }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(pass)){
     errPassReg.textContent="At least 8 chars, 1 lowercase, 1 uppercase, 1 digit.";
  }
  else{
     errPassReg.textContent= "";
  }
 
  if(!cpass){
    errcPassReg.textContent="please fill up the form";
  }
  else if(pass !== cpass){
      errcPassReg.textContent="Password do not match";
  }else{
     errcPassReg.textContent= "";
  }

 if(name && email && pass && cpass && pass === cpass){
   nameInputReg.classList.add("hide");
  emailInputReg.classList.add("hide");
  passInputReg.classList.add("hide");
  cpassInputReg.classList.add("hide");
  submitBtnReg.classList.add("hide");
   HH2.classList.add("hide");
   HH.textContent="Registration Successful!";
 }


});

regBtn.addEventListener("click",e=>{
  
  regPage.classList.add("Active");
 
     nameInputReg.classList.remove("hide");
  emailInputReg.classList.remove("hide");
  passInputReg.classList.remove("hide");
  cpassInputReg.classList.remove("hide");
  submitBtnReg.classList.remove("hide");
   HH2.classList.remove("hide");
   HH.textContent="";
   nameInputReg.value = "";
   emailInputReg.value = "";
   passInputReg.value = "";
   cpassInputReg.value = ""; 

})

offreg.addEventListener("click",e=>{
  regPage.classList.remove("Active");
})