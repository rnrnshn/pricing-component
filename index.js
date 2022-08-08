// store the checkbox inside a variable
const checkBoxItem = document.querySelector('.toggle-switch input[type="checkbox"]');


// check if the checkbox is checked or not
function ifChecked(e) {
  if (e.target.checked) {
    console.log('Is checked')
  } else {
    console.log('Not Checked')
  }
}

// listen to the checked event
checkBoxItem.addEventListener('change', ifChecked, false)