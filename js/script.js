
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


// $('.uk-navbar-dropdown-nav a').on('click', function() {
//   $(this).parent().parent().parent().parent().find('.filterDropdown').toggleClass('uk-open');
// });

// $('.filter-uk-navbar a.navlink').on('click', function() {
//   $(this).find('.filterDropdown').toggleClass('uk-open');
// });

document.addEventListener('DOMContentLoaded', function() {
  // Function to open or close the dropdown menu
  function toggleDropdown(button) {
    const targetSelector = button.getAttribute('data-dropdown');
    const dropdown = UIkit.dropdown(document.querySelector(targetSelector));
    dropdown.toggle();
  }

  // Handle menu button clicks to toggle the dropdown
  const menuButtons = document.querySelectorAll('.navlink');
  menuButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      toggleDropdown(this);
    });
  });

  // Handle dropdown item clicks to close the dropdown
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    item.addEventListener('click', function(event) {
      // Get the closest dropdown parent
      const dropdown = this.closest('[uk-dropdown]');
      if (dropdown) {
        UIkit.dropdown(dropdown).hide();
      }
    });
  });
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
  function toggleMenu(event) {
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

// Hide the custom context menu on click outside
document.addEventListener('click', function(event) {
  if (!menu.contains(event.target)) {
    menu.style.display = 'none';
  }
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



//-------------- menu dropdown custom -------------------//

document.addEventListener('DOMContentLoaded', function() {
  const dropdownBtns = document.querySelectorAll('.menuDropdown-btn');
  const dropdowns = document.querySelectorAll('.menuDropdown-content');
  const dropdownItems = document.querySelectorAll('.menuDropdown-item');

  // Toggle dropdown content
  dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
      event.stopPropagation();
      // Close other dropdowns
      dropdowns.forEach(dropdown => {
        if (dropdown.previousElementSibling !== btn) {
          dropdown.style.opacity = '0';
          dropdown.style.transform = 'translateY(-10px)';
          setTimeout(() => {
            dropdown.style.display = 'none';
          }, 300); // Match transition duration
        }
      });
      // Toggle the clicked dropdown
      const dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.opacity = '0';
        dropdownContent.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          dropdownContent.style.display = 'none';
        }, 300); // Match transition duration
      } else {
        dropdownContent.style.display = 'block';
        setTimeout(() => {
          dropdownContent.style.opacity = '1';
          dropdownContent.style.transform = 'translateY(0)';
        }, 10); // Small delay to allow display to be applied
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function(event) {
    dropdowns.forEach(dropdown => {
      dropdown.style.opacity = '0';
      dropdown.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        dropdown.style.display = 'none';
      }, 300); // Match transition duration
    });
  });

  // Close dropdown when clicking on a dropdown item
  dropdownItems.forEach(item => {
    item.addEventListener('click', function(event) {
      // Close the dropdown content
      const dropdownContent = this.closest('.dropdown-content');
      if (dropdownContent) {
        dropdownContent.style.opacity = '0';
        dropdownContent.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          dropdownContent.style.display = 'none';
        }, 300); // Match transition duration
      }
    });
  });

  // Prevent closing dropdown when clicking inside
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });
});

//-------------- bell dropdown custom -------------------//
document.addEventListener('DOMContentLoaded', function() {
  // Get all elements with the class 'menu-button'
  const bellBtn = document.getElementById('bellNotify');
  const bellDropdown = document.querySelector('.bellDropdown');

  // Function to toggle menu visibility
  function toggleMenu(event) {
      const rect = event.target.getBoundingClientRect(); // Get the bounding rectangle of the clicked element
      bellDropdown.style.left = `${rect.left - 0}px`; // Set the menu's left position
      bellDropdown.style.top = `${rect.bottom + 10}px`; // Set the menu's top position
      
      if (bellDropdown.classList.contains('hidden')) {
        bellDropdown.classList.remove('hidden');
      } else {
        bellDropdown.classList.add('hidden');
      }
  }
  
  // Add click event listener to each button
  bellBtn.addEventListener('click', toggleMenu);

  
});