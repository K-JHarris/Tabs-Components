class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = document.querySelector('.dropdown');
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      this.toggleContent();
    })
  }

  toggleContent() {
    // console.log('i work');
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class

//gets all elements with the class dropdown and then loops through each element and creates a new object passing the element as a parameter.
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

// console.log(dropdowns);
// let dropdowns = document.querySelectorAll('.dropdown')
// dropdowns.forEach(dropdown => new Dropdown(dropdown));

// console.log(dropdowns);