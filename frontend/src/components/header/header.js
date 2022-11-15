document.addEventListener("scroll", scrollMe);
function scrollMe() {
    try {
        let value = window.scrollY;
        document.getElementById("moon").style.top = value * 1.05 + 'px';
        document.getElementById("starts").style.left = value * 0.5 + 'px';
        document.getElementById("mountains_behind").style.top = value * 0.5 + 'px';
        document.getElementById("mountains_front").style.top = value * 0 + 'px';
        document.getElementById("text").style.marginRight = value * 0.5 + 'px';
        document.getElementById("text2").style.top = value * -0.5 + 'px';
        document.getElementById("forest").style.top = value * 0.25 + 'px';
        document.getElementById("rock").style.top = value * -0.09 + 'px';
        var header = document.querySelector("header");
        header.classList.toggle("sticky",window.scrollY > 0);
    } catch (error) {
        return;
    }
}
document.addEventListener("click", function(e) {
    try {
        const clickLinknClose = document.querySelector('.profile-menu .menu ul li');
        let menuToggle = document.querySelector('.menu');
        if(clickLinknClose.contains(e.target) && menuToggle.classList.contains('active')) {
            menuToggle.classList.remove('active');
        }
    } catch (error) {
        return;
    }
});

document.addEventListener("click", function(e) {
    try {
        const profileMenu = document.querySelector('.profile-menu');
        let menuToggle = document.querySelector('.menu');
        if(!profileMenu.contains(e.target) && menuToggle.classList.contains('active')) {
            menuToggle.classList.remove('active');
    }
    } catch (error) {
        return;
    }

});

document.addEventListener("click",function(e) {
        try {
            const menuMobile = document.querySelector('.navlink');
            let navlink = document.querySelector('.navlink');
            if(menuMobile.contains(e.target) && navlink.classList.contains('mobile-menu')){
                navlink.classList.remove('mobile-menu');
            }
        } catch (error) {
            return;
        }
})
document.addEventListener("click",function(e) {
    const navLinks = document.querySelectorAll('.navlink li a');
    for(let i = 0; i < navLinks.length; i++) {
        var Link = navLinks[i];
        if(Link.contains(e.target)){
            Link.classList.add('activeLink');
        } 
    }
})
