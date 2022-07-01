var form = document.getElementById('addForm');

var itemList = document.getElementById('items');
var newItem = document.getElementById('item').value;
tab = [], index;
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', edititem);
// Add item
function addItem(e){
  e.preventDefault();


  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn  btn-sm float-right edit';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('edit'));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(id){
  axios.delete(`https://crudcrud.com/api/49308973c7774039b52702d4d75beda5/Employeedata/${id}`)
  .then((response)=>{ deleteli(id)

  })
  .catch((err)=>{console.log(err)
  })

 
}
function deleteli(id){
  const cldnode =document.getElementById(id);
  if(cldnode){
    itemList.removeChild(cldnode);
  }
}
function updateItem(id){
  axios.put(`https://crudcrud.com/api/49308973c7774039b52702d4d75beda5/Employeedata/${id}`)
  .then((response)=>{ editli(id)

  })
  .catch((err)=>{console.log(err)
  })
}
function editli(id){
  const cldnode =document.getElementById(id);
  for(var i = 0; i < cldnode.length; i++){
                 
    cldnode[i].onclick = function(){
        index = tab.indexOf(this.innerHTML);
        console.log(this.innerHTML + " INDEX = " + index);
        // set the selected li value into input text
        newItem.value = this.innerHTML;
    };
    
}
  
  // edit the selected li using input text
  itemList[index].innerHTML = newItem.value;
  
}

   
       
    
    
  
  

