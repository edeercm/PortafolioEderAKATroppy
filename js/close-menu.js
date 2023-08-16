// const menuItems = document.querySelectorAll('.menu-link');
// const menuCheckbox = document.getElementById('click');

//    menuItems.forEach(item => {
//       item.addEventListener('click', () => {
//          menuCheckbox.checked = false;
//       });
//    });


   const menuCheckbox = document.getElementById('click');

   menuCheckbox.addEventListener('change', () => {
      if (!menuCheckbox.checked) {
         return; // No hagas nada si el menú se está cerrando
      }
      
      const menuItems = document.querySelectorAll('.menu-link');
      
      menuItems.forEach(item => {
         item.addEventListener('click', () => {
            menuCheckbox.checked = false; // Cierra el menú desplegable al seleccionar una opción
         });
      });
   });