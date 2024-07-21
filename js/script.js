
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

// contextmenu right click menu
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// Get all dropdown buttons
let mydropdowns = document.querySelectorAll('.dropdown-drop');

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

// let options = {
//   html: true,
//   title: "",
//   //html element
//   //content: $("#popover-content")
//   content: $('[data-name="popover-content"]')
//   //Doing below won't work. Shows title only
//   //content: $("#popover-content").html()

// }
// // let popDiv = document.querySelector('[pop-tigger="pop-trigger"]')
// // let popover = new bootstrap.Popover(popDiv, options)



 // Get reference to the right-click area
 let popTrigger = document.querySelector('.pop-trigger');
 let targetDiv = document.querySelector('.pop-trigger .popover-context');
 popTrigger.addEventListener('contextmenu', function(e) {
   e.preventDefault(); 
   targetDiv.classList.toggle('show');
 });

 popTrigger.addEventListener('click', function(e) {
  e.preventDefault();
  targetDiv.classList.toggle('show');
});
