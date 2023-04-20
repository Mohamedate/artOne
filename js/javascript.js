
//------------------ nav-hidden-when-click-link ---------------------
let navLink = document.querySelectorAll('.nav-link'),
 navbarCollapse = document.querySelector('.navbar-collapse');
for (let index = 0; index < navLink.length; index++) {
    navLink[index].onclick = function() { 
    navbarCollapse.classList.remove('show');
}
}
/*-------------------- section animation ----------------------*/
let body = document.querySelector('body'),
home = document.querySelector('.home'),
 about = document.querySelector('.about'),
 latest = document.querySelector('.latest'),
 services = document.querySelector('.services'),
 clients = document.querySelector('.clients'),
 upBtn = document.querySelector('.up-btn'),
 ourLocation = document.querySelector('.location');

//----------------- btn-scroll to Top ------------------
upBtn.onclick = function() { 
    window.scrollTo({ 
        top: 0,
        behavior: 'smooth',
    });
}


window.addEventListener('load',function() { 
    setTimeout(function() { 
        document.querySelector(".page-loader").style.display = "none";
        body.classList.add('active');
        home.classList.add('active');
    },1000)

})
window.addEventListener("scroll" , function() { 
//---------------
    if (this.scrollY != 0) {
document.querySelector('.heading').classList.add('stiky');
   }
else { 
document.querySelector('.heading').classList.remove('stiky');
upBtn.classList.remove('active');
for (let index = 0; index < navLink.length; index++) {
    navLink[index].classList.remove('active');
}
navLink[0].classList.add('active');
}

//---------------
if(this.scrollY >= 400) {
    about.classList.add('active');
    upBtn.classList.add('active');
    for (let index = 0; index < navLink.length; index++) {
        navLink[index].classList.remove('active');
    }
    navLink[1].classList.add('active');
}

//--------------
 if(this.scrollY >= 1100) {
 services.classList.add('active');
 for (let index = 0; index < navLink.length; index++) {
    navLink[index].classList.remove('active');
}
navLink[2].classList.add('active');
 }
 if(this.scrollY >= 1900) {
 latest.classList.add('active');
 for (let index = 0; index < navLink.length; index++) {
    navLink[index].classList.remove('active');
}
navLink[3].classList.add('active');
 }

 // ---------------
 if(this.scrollY >= 2800) { 
    clients.classList.add('active');
    for (let index = 0; index < navLink.length; index++) {
        navLink[index].classList.remove('active');
    }
    navLink[4].classList.add('active');
 }
 if(this.scrollY >= 3500) { 
    ourLocation.classList.add('active');
 }
 if(this.scrollY >= 4300) { 
    ourLocation.classList.add('active1');
 }
 if(this.scrollY >= 4500) { 
    for (let index = 0; index < navLink.length; index++) {
        navLink[index].classList.remove('active');
    }
    navLink[5].classList.add('active');
 }
})

