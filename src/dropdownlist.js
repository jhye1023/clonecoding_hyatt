const langList = document.querySelector('.dropdownlist');
const signinList = document.querySelector('.dropdownlistlogin');
const langBtn = document.querySelector('.menu-language');
const signinBtn = document.querySelector('.menu-singin');
const barBtn = document.querySelector('.font');
const barList = document.querySelector('.barlist');
console.log(barBtn);

console.log(signinList);

function show_hide() {  
  if(langList.style.display ==="none") {  
     langList.style.display ="block";  
  } else {  
     langList.style.display ="none";  
  }   
} 
langBtn.addEventListener('click', show_hide);

function signin_show_hide() {  
  if(signinList.style.display === "none") {  
     signinList.style.display = "block";  
  } else {  
     signinList.style.display ="none";  
  }   
}
signinBtn.addEventListener('click', signin_show_hide);


function bar_show_hide() {  
  if(barList.style.display === "none") {  
     barList.style.display = "block";  
  } else {  
     barList.style.display ="none";  
  }   
}
barBtn.addEventListener('click', bar_show_hide);