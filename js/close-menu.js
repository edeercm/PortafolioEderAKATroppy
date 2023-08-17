const menuItems = document.querySelectorAll('.menu-link');
const menuCheckbox = document.getElementById('click');

   // Verificar si estamos en una versión móvil
   function isMobile() {
      return window.innerWidth <= 885; // Ajusta el valor según tus necesidades
   }

   if (isMobile()) {
      menuItems.forEach(item => {
         item.addEventListener('click', () => {
            menuCheckbox.checked = false; // Cierra el menú desplegable al seleccionar una opción en la versión móvil
         });
      });
   }