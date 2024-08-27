
$('.my-table-model').hide();
  
$('.tr-click-model').click(function(){
  $('.my-table-model').toggle();
});

$('.closeDialog').click(function(){
  $('.my-table-model').hide();
});



$('.toggleSidebar').click(function(){
  $('.sidebar').toggleClass('show');
});
$('.btn-filterhead').click(function(){
  $('.filter-uk-navbar').toggleClass('show');
});
$('.close-floating').click(function(){
  $(this).parent().toggleClass('show');
});


// load save layout hide how

let layoutElement = document.getElementById("loadSaveLayout");
let loadLayoutTrigger = document.getElementById("loadSaveTriggerBtn");
let saveLayoutTrigger = document.getElementById("saveLayoutBtn");

// hide save layout div
$(layoutElement).hide();

$(loadLayoutTrigger).click(function() {
    $(this).hide();
   $(layoutElement).show();
});

$(saveLayoutTrigger).click(function() {
   $(loadLayoutTrigger).show();
   $(layoutElement).hide();
});


 UIkit.util.on('#modal-createPageLayout .uk-close', 'click', function (e) {
           e.preventDefault();
           UIkit.modal("#modal-changeLayout").show();
});


//load Save Search List
let searchListlement = document.getElementById("loadSaveSearchList");
let loadSaveSearchBtn = document.getElementById("loadSavedSearchBtn");
let savedSearchBtn = document.getElementById("savedSearchBtn");

// hide save layout div
$(searchListlement).hide();

$(loadSaveSearchBtn).click(function() {
   $(searchListlement).toggle();
});

$(savedSearchBtn).click(function() {
   $(searchListlement).toggle();
});

// location tab & page script 
const saveClose = document.getElementById("saveandclose");
const formUnfilled = document.getElementById("form-unfilled");
const formfilled = document.getElementById("form-filled");
const infoNote = document.getElementById("info-note");

$(formfilled).hide();
$(saveClose).click(function() {
  $(formUnfilled).hide();
  $(formfilled).show();
  $(infoNote).hide();
});


// tooltip enabled
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// Get all dropdown buttons
const mydropdowns = document.querySelectorAll('.dropdown-drop');

// Loop through each dropdown
mydropdowns.forEach(function(dropdown) {
  let button = dropdown.querySelector('.dropdown-drop .btn');
  let dropdownContent = dropdown.querySelector('.dropdown-content');

  // Toggle dropdown content visibility on button click
  button.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
  });

  // Close dropdown when clicking outside of it
  window.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      dropdownContent.classList.remove('show');
    }
  });
});

// contextmenu right click menu
  const contextMenu = document.getElementById('tooltip-context');
  let currentItem = null;

  // Show custom context menu on right-click
  document.addEventListener('contextmenu', function(event) {
      if (event.target.classList.contains('right-click-trigger')) {
          event.preventDefault();
          currentItem = event.target.getAttribute('data-item');
          
          // Get the bounding rectangle of the right-clicked area
          const rect = event.target.getBoundingClientRect();
          
          // Calculate the vertical center position of the right-clicked area
          const top = rect.top + window.scrollY + (rect.height / 2) - (contextMenu.offsetHeight / 2);
          const left = event.pageX;

          contextMenu.style.top = `${top}px`;
          contextMenu.style.left = `${left}px`;
          contextMenu.style.display = 'block';
      } else {
          contextMenu.style.display = 'none';
      }
  });

  // Hide the custom context menu on click outside
  document.addEventListener('click', function(event) {
      if (!contextMenu.contains(event.target)) {
          contextMenu.style.display = 'none';
      }
  });

  // Add event listeners for each menu item
  // contextMenu.addEventListener('click', function(event) {
  //     event.preventDefault();
  //     if (event.target.tagName === 'A') {
  //         const action = event.target.getAttribute('data-action');
  //         contextMenu.style.display = 'none';
  //     }
  // });

  document.addEventListener('DOMContentLoaded', function() {
    const contextMenu = document.getElementById('contextMenu'); // Adjust this selector as needed
    if (contextMenu) {
        const menuItems = contextMenu.querySelectorAll('a[data-action]'); // Select all anchor tags with data-action attribute
        
        menuItems.forEach(function(menuItem) {
            menuItem.addEventListener('click', function(event) {
                event.preventDefault();
                const action = menuItem.getAttribute('data-action');
                contextMenu.style.display = 'none';

                // Perform action here if needed
                console.log('Action:', action);
            });
        });
    }
});

  

  // show general tab content
  const arrowDownClick = document.getElementById("arrowDownClick");
  const arrowUpClick = document.getElementById("arrowUpClick");
  const acContentToggle = document.getElementById("accordianContentToggle");
  const setPosBtnsGroup = document.getElementById("toggleGen-BtnsGroup");
  const tabNavSwitcher =  document.getElementById("tabNavSwitcher");

  $(arrowDownClick).on('click', function() {
    setPosBtnsGroup.classList.add("setPosTop");
    tabNavSwitcher.style.display = 'none';
    if ( acContentToggle.style.display = 'none') {
      acContentToggle.style.display = 'block';
    }else{
      acContentToggle.style.display = 'none'
    }
  });
  

  
  $(arrowUpClick).on('click', function() {
  
    if (tabNavSwitcher.style.display = 'none' || setPosBtnsGroup.className == "setPosTop") {
          setPosBtnsGroup.classList.remove("setPosTop");
          tabNavSwitcher.style.display = 'flex';
          acContentToggle.style.display = 'none';
          
        }else{
          acContentToggle.style.display = 'block';
        }
  });

  

//   function makeDraggable(element) {
    
//     let offsetX, offsetY;
//     // const modalHeader = element.querySelector('.graggable');

//     element.addEventListener('mousedown', (e) => {
//         offsetX = e.clientX - element.getBoundingClientRect().left;
//         offsetY = e.clientY - element.getBoundingClientRect().top;

//         function onMouseMove(e) {
//             element.style.left = `${e.clientX - offsetX}px`;
//             element.style.top = `${e.clientY - offsetY}px`;
//         }

//         function onMouseUp() {
//             document.removeEventListener('mousemove', onMouseMove);
//             document.removeEventListener('mouseup', onMouseUp);
//         }

//         document.addEventListener('mousemove', onMouseMove);
//         document.addEventListener('mouseup', onMouseUp);
//     });
// }

// // Apply draggable functionality to all elements with class 'draggable'
// document.querySelectorAll('.custom-dialog').forEach(makeDraggable);

$(".custom-dialog").draggable({
  drag: function(event, ui) {
  }
});


$('.uk-navbar-dropdown-nav a').on('click', function() {
  $(this).parent().parent().parent().parent().find('.filterDropdown').toggleClass('uk-open');
});

$('.filter-uk-navbar a.navlink').on('click', function() {
  $(this).find('.filterDropdown').toggleClass('uk-open');
});

function modalMassUpdate() { UIkit.modal($('#modal-massUpdate')).show();}


$("img.lazyload").lazyload();
 




// $(filterClick).on('click', function() {
  
//   $(filterDropdownGlobal).toggle();

//   const rect = event.target.getBoundingClientRect();
          
  
  

// });

// const filterDropdownGlobal = document.getElementsByClassName("global");
// const filterClick = document.getElementsByClassName("filterDemo");


document.addEventListener('DOMContentLoaded', function() {
  // Get all elements with the class 'menu-button'
  const menuButtons = document.querySelectorAll('.filterDemo');
  const menu = document.querySelector('.global');

  // Function to toggle menu visibility
  function toggleMenu() {
      const rect = event.target.getBoundingClientRect(); // Get the bounding rectangle of the clicked element
      menu.style.left = `${rect.left - 15}px`; // Set the menu's left position
      menu.style.top = `${rect.bottom + 10}px`; // Set the menu's top position
      
      if (menu.classList.contains('hidden')) {
          menu.classList.remove('hidden');
      } else {
          menu.classList.add('hidden');
      }
  }
  
  // Add click event listener to each button
  menuButtons.forEach(button => {
      button.addEventListener('click', toggleMenu);
  });

  
});




// ctxTooltip right click menu
const contextTooltip = document.getElementById('ctxTooltip');

 // Show custom context menu on right-click
 document.addEventListener('contextmenu', function(event) {
  if (event.target.classList.contains('openNewTab')) {
      event.preventDefault();
      
      // Get the bounding rectangle of the right-clicked area
      const rect = event.target.getBoundingClientRect();
      
      // Calculate the vertical center position of the right-clicked area
      const y = rect.top + window.scrollY + (rect.height / 1) - (contextTooltip.offsetHeight / 1);
      const x = rect.left + window.scrollX + (rect.width * -2) - (contextTooltip.offsetWidth / 2);


      contextTooltip.style.top = `${y}px`;
      contextTooltip.style.left = `${x}px`;
      contextTooltip.style.display = 'block';

  } else {
    contextTooltip.style.display = 'none';
  }
});

// Hide the custom context menu on click outside
document.addEventListener('click', function(event) {
  if (!contextTooltip.contains(event.target)) {
    contextTooltip.style.display = 'none';
  }
});
