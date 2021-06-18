// Define Global Variables

var sections = Array.from(document.querySelectorAll('section'));
var menu = document.getElementById('navbar__list');

// End global variables section

// Starting function to implement and create menu bar or navbar

var sectionName, section, sectionLink;

function createListItems() {
  "use strict";
  for (section of sections) {
    sectionName = section.getAttribute('data_nav');
    sectionLink = section.getAttribute('id');

    //create an item for everyone
    var listItem = document.createElement('li');

    // add text to this item that has just created

    listItem.innerHTML = '<a class='menu__link' href='#$(sectionLink)'>$(sectionName)</a>';

    // appen the list item to the nav bar or menu
    menu.appendChild(listItem);

  }

}



// second function  --- determine if section in viewport or not

function sectionInViewPort(elem) {
  let sectionPosition = elem.getBoundingClientRect();
  return (sectionPosition.top >= 0);
}

//third function


function toggleActivesection() {

  for (section of sections) {

    if (sectionInViewPort(section)) {
      if (!section.classList.contains('active__class')) {
        section.classList.add('active__class');
      }
    } else {
      section.classList.remove('active__class');
    }
  }
}



// calling functions

createListItems();

document.addEventListener('scroll', toggleActivesection);

