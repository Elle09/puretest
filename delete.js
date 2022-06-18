const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});




// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);
myForm.addEventListener('click', removeItem);


function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    
    userList.appendChild(li);
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('delete'));
    editBtn.appendChild(document.createTextNode('edit'));
  
    // Append button to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
  
    myForm.appendChild(li);
 
    nameInput.value = '';
    emailInput.value = '';
    let myOj={
        name:`${nameInput.value}`,
        email:`${emailInput.value}`
    }
    let myOj_s = JSON.stringify(myOj);
    localStorage.setItem("userdetails",myOj_s);
    
  }
 
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete' ||'edit')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


