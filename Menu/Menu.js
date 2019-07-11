
// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence. 
// }

// // Start Here: Create a reference to the ".menu" class
// const menu;
// // create a reference to the ".menu-button" class
// const menuButton;
// // Using your menuButton reference, add a click handler that calls toggleMenu

const menulist =[
  'Students',
  'Faculty',
  'What \'s New',
  'Tech Trends',
  'Music',
  'Log Out'
]

const ul = document.createElement('ul');

const menu = document.querySelector('.menu')
const menuButton = document.querySelector('.menu-button')

menu.appendChild(ul);

menulist.forEach(function (menuitem){
  const li = document.createElement('li');
  ul.appendChild(li);

  li.innerHTML += menuitem;
})

menuButton.addEventListener('click', e => {
  menu.classList.toggle('menu--open');
})

