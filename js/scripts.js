function newItem(){
  //add new element
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

    if(inputValue === ''){
      alert('Add to list before clicking button.')
    }else{
      let list = $('#list');
      list.append(li);
      $("#input").val("");
    }

  function crossOut(){
    li.toggleClass('strike');
  }
  li.on('dblclick', crossOut);

  let crossOutButton = $('<button></button>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  crossOutButton.addClass('button');
  crossOutButton.on('click', deleteListItem);

  function deleteListItem(){
    li.addClass('delete');
  }

  $('#list').sortable();

}
    
