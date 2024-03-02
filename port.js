const menu = document.querySelector("#menu");
const ul = document.querySelector("navigation");
const navLink = document.querySelectorAll(".nav-links");

menu.addEventListener("click", function(){
    if(navigation.classList.contains("show-links")){
        links.classList.remove("show-links");
    }else{
        links.classList.add("show-links");
    }
});
// function mobileMenu(){
//     menu.classList.toggle("active");
//     ul.classList.toggle("active");
// }

// navLinks.forEach(n => n.addEventListener("click", closeMenu));
// function closeMenu(){
//     menu.classList.remove("active");
//     ul.classList.remove("active");
// }