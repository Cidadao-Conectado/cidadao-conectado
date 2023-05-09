

//Listar Reclamações

const botaolist = document.getElementById("listar");
botaolist.addEventListener("click", fnrecuperar);
function fnrecuperar(){

  console.log(localStorage.key(0))
  for(var i =0; i < localStorage.length; i++){
    const result = JSON.parse(localStorage.getItem(localStorage.key(i)));
    console.log(result)
  }
}


