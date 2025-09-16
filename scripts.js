const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
menuIcon.addEventListener("click", () => {
    if(menu.className == 'hidden')
    {
        menu.classList.remove("hidden");
    }
    else{
        menu.classList.add("hidden");
    }

});



// FAQ PORTION START HERE
var action="click";
var speed="500";

$(document).ready(function() {
    // Question handler
    $('li.q').on(action, function() {
        // Get next element
        $(this).next()
            .slideToggle(speed)
        // Select all other answers
                .siblings('li.a')
                    .slideUp();
    });
});
