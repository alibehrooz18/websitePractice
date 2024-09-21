// Preloader script start
document.querySelector('.preloader').style.display = 'flex';

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none';
    }, 500);
});
// Preloader script end

// mobile menu start
document.addEventListener('DOMContentLoaded', function() {
    const headerBar = document.querySelector('.header-bar');
    const mobileMenu = document.querySelector('.mobile-menu .mobile-menu');

    headerBar.addEventListener('click', function() {
        this.classList.toggle('close');
        mobileMenu.classList.toggle('open');
    });

    const menuItemsWithChildren = document.querySelectorAll('.menu-item-has-children');

    menuItemsWithChildren.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('open');

            const submenu = this.querySelector('ul');

            if (submenu.style.maxHeight) {
                submenu.style.maxHeight = null;
            } else {
                submenu.style.maxHeight = submenu.scrollHeight + "px";
            }
        });
    });
});

// mobile menu end

// scroll to up start
const scrollToTopButton = document.querySelector('.scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// scroll to up end

// Shop cart start
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.qtybutton').forEach(button => {
      button.addEventListener('click', function () {
        let input = this.parentElement.querySelector('.cart-plus-minus-box');
        let value = parseInt(input.value);
        
        if (this.classList.contains('inc')) {
          input.value = value + 1;
        } else if (this.classList.contains('dec') && value > 1) {
          input.value = value - 1;
        }
        
        let price = parseFloat(this.closest('.cart-item').querySelector('.sing-price').textContent.replace('Tk.', '').trim());
        let totalPriceElem = this.closest('.cart-item').querySelector('.total-price');
        totalPriceElem.textContent = 'Tk. ' + (price * input.value).toFixed(2);
      });
    });
  });
  
// Shop cart end

// Food menu start

// function openCity(evt, cityName) {
// 	var i, tabcontent, tablinks;
// 	tabcontent = document.getElementsByClassName("tab-content");
// 	for (i = 0; i < tabcontent.length; i++) {
// 	tabcontent[i].style.display = "none";
// 	}
// 	tablinks = document.getElementsByClassName("tablinks");
// 	for (i = 0; i < tablinks.length; i++) {
// 	tablinks[i].className = tablinks[i].className.replace(" active", "");
// 	}
// 	document.getElementById(cityName).style.display = "block";
// 	evt.currentTarget.className += " active";
// }

// // Get the element with id="defaultOpen" and click on it
// 	document.getElementById("defaultOpen").click();

// Food menu end

// client section start 
var swiper = new Swiper('.clients-container', {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    pagination: {
        el: '.clients-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        }
    }
});

// client section end

// search 
$(document).on('click', '.search, .search-close', () => {
    $(".search-area").toggleClass("open");
});
// cart option
$(document).on('click', '.cart-icon, .list-close', () => {
    $(".cart-area").toggleClass("open");
});

// sponsor slider section
var swiper = new Swiper('.sponsor-slider', {
    slidesPerView: 6,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        420: {
            slidesPerView: 1,
        },
    },
    loop: true,
});

// sponsor slider section

// Shop page.html start

document.addEventListener('DOMContentLoaded', () => {
    const gridViewButton = document.querySelector('[data-target="grid"]');
    const listViewButton = document.querySelector('[data-target="list"]');

    gridViewButton.addEventListener('click', () => {
        gridViewButton.classList.add('active');
        listViewButton.classList.remove('active');

        const productContainers = document.querySelectorAll('.col-xl-3.col-md-6.col-12');

        productContainers.forEach( (container) => {
            container.querySelector('.product-item').style.display = 'block';
            container.querySelector('.product-list-item').style.display = 'none';
        });
    });

    listViewButton.addEventListener('click', () => {
        listViewButton.classList.add('active');
        gridViewButton.classList.remove('active');

        const productContainers = document.querySelectorAll('.col-xl-3.col-md-6.col-12');

        productContainers.forEach(function (container) {
            container.querySelector('.product-item').style.display = 'none';
            container.querySelector('.product-list-item').style.display = 'block';
        });
    });

    gridViewButton.click();
});

document.querySelectorAll('.view-item-mode a').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.view-item-mode a').forEach(btn => btn.classList.remove('active'));

        this.classList.add('active');

        const target = this.getAttribute('data-target');

        const productItems = document.querySelectorAll('.product-item, .product-list-item');

        if (target === 'grid') {
            productItems.forEach(item => {
                item.querySelector('.product-item').style.display = 'block';
                item.querySelector('.product-list-item').style.display = 'none';
            });
        } else if (target === 'list') {
            productItems.forEach(item => {
                item.querySelector('.product-item').style.display = 'none';
                item.querySelector('.product-list-item').style.display = 'flex';
            });
        }
    });
});


// Shop page.html end