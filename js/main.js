
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function toggle_map_legend(showLegend) {
    let legend = document.querySelector(".info.legend .legend-cont");
    let toggler_label = document.getElementById("legend_toggler_label");

    if (showLegend) {
        toggler_label.style.maxHeight = 0;
        legend.style.maxHeight = "100vh";
        legend_toggler.style.transform = "rotate(90deg)";
    } else {
        legend.style.maxHeight = 0;
        legend_toggler.style.transform = "rotate(-90deg)";
        setTimeout(function () {
            toggler_label.style.maxHeight = "100vh";
        }, 500);
    }
}

let legend_toggler = document.getElementById("legend_toggler");
if (legend_toggler) {
    legend_toggler.addEventListener("click", function () {
        let css_tr = legend_toggler.style.transform;

        // Show or hide/collapse map legend
        if (!css_tr || css_tr === "rotate(90deg)") {
            toggle_map_legend(0);
        } else {
            toggle_map_legend(1);
        }
    });
}

// Keep map legend initially collapsed for screen width < 600px
(function () {
    if (window.innerWidth < 576) {
        toggle_map_legend(0);
    }
})();


// Convert integer from English to Bengali
function bn_num(num) {
    if (!parseInt(num)) {
        return num === "0" ? "০" : num;
    }

    let p = (num + "").length - 1;
    let bn_num = "";

    while (p >= 0) {
        n = num % 10;
        n = n === 0
            ? "০"
            : n ===1
                ? "১"
                : n ===2
                    ? "২"
                    : n ===3
                        ? "৩"
                        : n ===4
                            ? "৪"
                            : n ===5
                                ? "৫"
                                : n ===6
                                    ? "৬"
                                    : n ===7
                                        ? "৭"
                                        : n ===8
                                            ? "৮"
                                            : n ===9
                                                ? "৯"
                                                : "";
        bn_num = n + bn_num;
        num = Math.floor(num / 10);
        --p;
    }

    return bn_num;
}
