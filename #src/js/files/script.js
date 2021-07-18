const menuParents = document.querySelectorAll('.menu-page__parent');

for (let index = 0; index < menuParents.length; index++) {
  const menuParent = menuParents[index];
  menuParent.addEventListener("mouseenter", function(e) {
    menuParent.classList.add('_active');
  });
  menuParent.addEventListener("mouseleave", function(e) {
    menuParent.classList.remove('_active');
  });
}