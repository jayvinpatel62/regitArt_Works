$(document).ready(function () {
    // Toggle expand/collapse
    $(".toggle-tree").click(function () {
      $(this).toggleClass("expanded");
      $(this).siblings("ul").toggleClass("hidden");
    });
  
    // Checkbox behavior: Parent-child relation
    $(".tree-parent").change(function () {
      $(this)
        .siblings("ul")
        .find("input[type='checkbox']")
        .prop("checked", this.checked);
    });
  
    $(".tree-child").change(function () {
      let parent = $(this).closest("ul").prev().prev(".tree-parent");
      if ($(this).closest("ul").find(".tree-child:checked").length === 0) {
        parent.prop("checked", false);
      } else {
        parent.prop("checked", true);
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".tree-accordion-item");
  
    accordionItems.forEach((item) => {
      const header = item.querySelector(".tree-accordion-header");
      header.addEventListener("click", () => {
        item.classList.toggle("active"); // Toggle the clicked item only
      });
    });
  });
  