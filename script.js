const menuOpenBtn = document.querySelector(".nav__hamburger-btn");
const menu = document.querySelector(".menu-container");
const menuClose = document.querySelector(".menu__close-btn");

menuOpenBtn.addEventListener("click", () => {
    menu.classList.remove("hidden-menu");
    menu.focus();           
    menu.addEventListener("keydown", (e) => trapFocus(menu, e));
})
menuClose.addEventListener("click", () => {
    menu.classList.add("hidden-menu");
})
window.addEventListener("resize", () => {
    if (window.innerWidth > 750 && !menu.classList.contains("hidden-menu")) {
        menu.classList.add("hidden-menu")
    }
});

// focus trap inside menu
// by https://hidde.blog/using-javascript-to-trap-focus-in-an-element/
function trapFocus(menu, e) {
    const focusableEls = menu.querySelectorAll('a[href]:not([disabled]), button:not([disabled])');
    const firstFocusableEl = focusableEls[0];  
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    const KEYCODE_TAB = 9;
  
    if (e.key !== 'Tab' && e.keyCode !== KEYCODE_TAB) {
      return;
    }
  
    if (e.shiftKey) { // shift + tab
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } else { // tab
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  }