function addNewTask(){
    var list = document.getElementById('list');    //localizando  o elemento de lista para poder colocar o conteudo da lista que vai ser gereda
    var text = document.getElementById('task_name').value;//buscar o elemento input e pegar o valor que  o uuario vai digitar
  
    if (text.length === 0){  
        alert('Tarefa precisa de ter mais 1 caracter');
        return;
    }
   
    var listItem = document.createElement('li');//criar na tela  a lista 
    listItem.className = 'list-item' ;
    
    const textElement = document.createTextNode(text);//Vai criar um texto na pagina
    listItem.appendChild(textElement);
    list.appendChild(listItem);

   
}




