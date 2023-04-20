
//--------------- drop down for contact us -----------------------

let contact =  document.querySelector('.contact-us'),
tellUs = document.querySelector('.tell-us');
contact.onclick = function() { 
    tellUs.classList.toggle('active');
}
let navLink = document.querySelectorAll('.nav-link')
//----- updowon btn  -----
let upDownBtn = document.querySelector('.up-btn');

//----------------- btn-scroll to Top ------------------
upDownBtn.onclick = function() { 
    window.scrollTo({ 
        top: 0,
        behavior: 'smooth',
    });
}
let myTitle = document.querySelector('.product > h1');
window.addEventListener("scroll" , function() { 
    if (this.scrollY != 0) {
document.querySelector('.heading').classList.add('stiky');
tellUs.classList.remove('active');
    }
else { 
document.querySelector('.heading').classList.remove('stiky')
}
if(this.scrollY == 0) { 
    for (let index = 0; index < navLink.length; index++) {
        navLink[index].classList.remove('active');
    upDownBtn.classList.remove('active');
    }
    navLink[0].classList.add('active');
    }
    if (this.scrollY >= 300) { 
         for (let index = 0; index < navLink.length; index++) {
        navLink[index].classList.remove('active');
    }
    navLink[2].classList.add('active');
    upDownBtn.classList.add('active');
    myTitle.classList.add('active');
    }
    
})

/*--------------------------- section list ----------------------------*/
let navS = document.querySelector('.nav-s'),
navListS = navS.querySelectorAll('li'),
totalNavS = navListS.length,
allSection = document.querySelectorAll('.content-s'),
totalSec = allSection.length;
for (let i = 0; i < totalNavS; i++) {
    let a = navListS[i].querySelector('a');
    a.addEventListener('click',function() { 
        for (let i = 0; i < totalSec; i++) {
            allSection[i].classList.remove('active');
            
        }
        for (let j = 0; j < totalNavS; j++) {
            if(navListS[j].querySelector('a').classList.contains('active')) { 
                allSection[j].classList.add('active')
            }
            navListS[j].querySelector('a').classList.remove('active');
            
        }
        
        this.classList.add('active');
        showSection(this);
    })
}
function showSection(el) { 
    for (let i = 0; i < totalSec; i++) {
        allSection[i].classList.remove('active');  
    }
    let target = el.getAttribute('data-sec').split('se')[1];
    document.querySelector('.' + target).classList.add('active');
}

