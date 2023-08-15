const menuItems = document.querySelectorAll('.menu-link');
const menuCheckbox = document.getElementById('click');

   menuItems.forEach(item => {
      item.addEventListener('click', () => {
         menuCheckbox.checked = false;
      });
   });