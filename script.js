
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
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


const reload = () => {
    if(screen.width <= '768') {
        scheme.src='assets/scheme-mobile.svg'
        console.log('done');  
    }else {}
    // location.reload()

}
