window.onload = function () {
    var firstHoverItem = document.getElementById("first-hover-item");
    var productsSubmenu = document.getElementById("produkty-submenu");
    firstHoverItem.onmouseover = function () {
        productsSubmenu.style.display = "block";
        productsSubmenu.onmousemove = function () {
            productsSubmenu.style.display = "block";
        }
        productsSubmenu.onmouseover = function () {
            productsSubmenu.style.display = "block";
        }
        productsSubmenu.onmouseout = function () {
            productsSubmenu.style.display = "none";
        }
    }
    firstHoverItem.onmouseout = function () {
        productsSubmenu.style.display = "none";
    }

}