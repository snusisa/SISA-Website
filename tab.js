/**
 * Script for Website tab navigation functionality
 * Take note of className and id when referencing this script.
 */
function openTab(event, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab-item");
    for (i = 0; i < x.length; i++) {
        // hide content display for non-active tab items
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(
            // styling for non-active tabs
            " active",
            ""
        );
    }
    // display content of currently active tab
    document.getElementById(tabName).style.display = "block";
    // change styling for currently active tab
    event.currentTarget.className += " active";
}

$(function() {
    $('[id$="-include"]').each(function(e) {
        $(this).load(
            "includes\\" +
                $(this)
                    .attr("id")
                    .replace("-include", "") +
                ".html"
        );
    });
});
