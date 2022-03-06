function newItem(){

  //1. Adding a new item to the list of items: 
  let li = $('<li></li>');
  let inputValue = $('#input').val(); 
  li.append(inputValue);

  if(inputValue === ''){
    alert('You must write something!');
  }else {
    $('#list').append(li);
  }
    
  li.on('dblclick', () => {
      li.toggleClass('strike');
  });
      
   //2. Crossing out an item from the list of items:     
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  crossOutButton.on('click', () => {
      li.addClass('delete');
  })
  
  // 4. Reordering the items:*/ 
  $('#list').sortable();   
}

 //javascript

  /*let li = document.createElement("li");
   let inputValue = document.getElementById("input").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);*/

/*if (inputValue === '') {
    alert("You must write something!");
  }else {
    let list = document.querySelector('#list');
    list.appendChild(li);
  }*/

  /*function crossOut() {
    li.toggleClass('strike');
  }*/
    
  //li.addEventListener("dblclick",crossOut);

//3(i). Adding the delete button "X": 
  /*let crossOutButton = document.createElement("crossOutButton");
  crossOutButton.appendChild(document.createTextNode("X"));
  li.appendChild(crossOutButton);*/
    
  //crossOutButton.addEventListener("click", deleteListItem);

  /*function deleteListItem(){
    li.classList.add("delete")
  }*/