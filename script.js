
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function dropDownBurger() {
    document.getElementById("nav").classList.toggle("show-flex");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const scheme = document.getElementById('schemeImg');
console.log(scheme);

if(screen.width <= '768') {
    scheme.src='assets/scheme-mobile.svg'
    console.log('done');  
} else {}

