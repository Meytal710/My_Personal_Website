// change the header background//

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

}

window.addEventListener('scroll', scrollHeader)

// Work Card

function myFunction() {
    const list = document.getElementById("myDIV").classList;
    list.add("active-modal");
    }

    function myFunctionDelete(){
        const list = document.getElementById("myDIV").classList;
        list.remove("active-modal"); 
    }