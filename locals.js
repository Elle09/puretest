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

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
  let myOj={
    name:`${nameInput.value}`,
    email:`${emailInput.value}`
}
let myOj_s = JSON.stringify(myOj);
localStorage.setItem("userdetails",myOj_s);

  
}



for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(`${key}: ${localStorage.getItem(key)}`);
}
document.addEventListener('DOMContentLoaded', () => {
  let btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
      // handle the click event
      console.log('loaded');
  });
});
a=JSON.parse((localStorage.getItem("usersdetails")));

for(var i=0; i<a.length; i++)
  {
   console.log(a[i]['name'],a[i]['email']);
  }
