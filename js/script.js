
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


  // show general tab content
  const arrowDownClick = document.getElementById("arrowDownClick");
  const arrowUpClick = document.getElementById("arrowUpClick");
  const acContentToggle = document.getElementById("accordianContentToggle");
  const setPosBtnsGroup = document.getElementById("toggleGen-BtnsGroup");
  const tabNavSwitcher =  document.getElementById("tabNavSwitcher");
  
  arrowDownClick.addEventListener("click", () => {
    setPosBtnsGroup.classList.add("setPosTop");
    tabNavSwitcher.style.display = 'none';
    if (acContentToggle.hasAttribute("hidden")) {
        acContentToggle.removeAttribute("hidden");
    }else{
      acContentToggle.setAttribute("hidden")
    }
  });
  arrowUpClick.addEventListener("click", () => {
    alert("up arrow");
    
    if (tabNavSwitcher.style.display = 'none' || setPosBtnsGroup.className == "setPosTop") {
      setPosBtnsGroup.classList.remove("setPosTop");
      tabNavSwitcher.style.display = 'flex';
      acContentToggle.removeAttribute("visible");
      acContentToggle.setAttribute("hidden");
      
    }else{
      tabNavSwitcher.style.display = 'none';
    }
  });



// contextmenu right click menu
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
  contextMenu.addEventListener('click', function(event) {
      event.preventDefault();
      if (event.target.tagName === 'A') {
          const action = event.target.getAttribute('data-action');
          contextMenu.style.display = 'none';
      }
  });

  


