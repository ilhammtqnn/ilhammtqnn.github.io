// Fungsi Menampilkan menu dan close menu
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose= document.getElementById('nav-close')

  if(navToggle){
      navToggle.addEventListener('click',()=>{
          navMenu.classList.add('show-menu')
      })
  }

  if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
  }
// Ketika menu diklik menu di hidden
const navLink=document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

// fungsi menampilkan dan menutup list sklill

const skillContent=document.getElementsByClassName('skills_content'),
skillsHeader=document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillContent.length; i++){
        skillContent[i].className='skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className='skills_content skills_open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})

// 
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('almamater_active')
        })
        target.classList.add('almamater_active')

        tabs.forEach(tab =>{
            tab.classList.remove('almamater_active')
        })
        tab.classList.add('almamater_active')
    })
})

//

const modalV=document.querySelectorAll('.service_modal'),
modalBtn=document.querySelectorAll('.service_button'),
modalClose=document.querySelectorAll('.service_modal-close')

let modal= function(modalClick){
    modalV[modalClick].classList.add('active-modal')
}

modalBtn.forEach((modalButton,i)=>{
    modalButton.addEventListener('click',()=>{
        modal(i)
    })
})

modalClose.forEach((modalKeluar)=>{
    modalKeluar.addEventListener('click',()=>{
        modalV.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})

//active color menu

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50 ;

        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) 
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        else
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active-link')
        
    })
}
window.addEventListener('scroll',scrollActive)

//ganti background

function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 80 ) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

// scroll up

function up (){
    const scup = document.getElementById('scrollup');
    if(this.scrollY>=500) scup.classList.add('show-scroll');
    else scup.classList.remove('show-scroll');
}
window.addEventListener('scroll',up)


//dark theme
const themeBtn = document.getElementById('theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-lamp'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = ()=> themeBtn.classList.contains(iconTheme)?'uil-moon':'uil-lamp'

if (selectedTheme) {
document.body.classList[selectedTheme === 'dark'? 'add' : 'remove'](darkTheme)
themeBtn.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeBtn.classList.toggle(iconTheme)


    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

document.getElementById('submit').addEventListener('click',function(){
    event.preventDefault();
    let name = document.getElementById("nama");
    let email = document.getElementById("emails");
    let text = document.getElementById("comment");
    let newItem = db.collection("contact").add({
        name: name.value,
        email: email.value,
        text: text.value

    });
    Swal.fire(
        'Komentar Kamu Berhasil Tersimpan',
        'Terima Kasih Banyak',
        'success'
      )
    name.value = ""; 
    email.value = ""; 
    text.value = ""; 
})
