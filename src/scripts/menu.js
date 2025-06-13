document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const topLine = hamburger.querySelector(".top-line");
  const middleLineA = hamburger.querySelector(".middle-line-a");
  const middleLineB = hamburger.querySelector(".middle-line-b");
  const bottomLine = hamburger.querySelector(".bottom-line");
 
  const TRANSITION_DURATION = 200; //ms - For some reason Tailwind is set at 300 but to get it to look right this needs to be 200

  if (!hamburger || !mobileMenu) return;

  // Set initial height 0 to hide menu
  mobileMenu.style.height = "0px";

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    const isOpen = hamburger.classList.contains("is-active");

    // Toggle X animation
    topLine.classList.toggle("opacity-0", isOpen);
    middleLineA.classList.toggle("rotate-45", isOpen);
    middleLineB.classList.toggle("-rotate-45", isOpen);
    bottomLine.classList.toggle("opacity-0", isOpen);

    if (isOpen) {
      mobileMenu.classList.remove("hidden");
      // Animate height to scrollHeight
      requestAnimationFrame(() => {
        mobileMenu.style.height = mobileMenu.scrollHeight + "px";
      });
    } else {
      // Set height to current computed height before collapsing
      mobileMenu.style.height = mobileMenu.scrollHeigth + "px";

      // Force a reflow to make sure the browser registers the current height
      void mobileMenu.offsetHeight;

      // Then collapse
      mobileMenu.style.height = "0px";

      // After transition, hide the menu
      setTimeout(() => {
        if (!hamburger.classList.contains("is-active")) {
          mobileMenu.classList.add("hidden");
        }
      }, TRANSITION_DURATION); // need this set to 200 to create a smooth transition when closing the menu
    }
  });
});

/*document.querySelector('#hamburger-button').addEventListener('click', () => {
  document.querySelector('.nav-link').classList.toggle('expanded');
});
*/


