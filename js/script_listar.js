

//Listar Reclamações
const novoElemento = document.createElement('div');
novoElemento.setAttribute('class', 'minha-classe');

const botaolist = document.getElementById("listar");
botaolist.addEventListener("click", fnrecuperar);

function fnrecuperar(){
  console.log(localStorage.key(0))
  for(var i =0; i < localStorage.length; i++){
    const result = JSON.parse(localStorage.getItem(localStorage.key(i)));
    console.log(result);

    // Adiciona um parágrafo com o resultado de cada item armazenado no local storage
    novoElemento.innerHTML += `
    <section class= "card"><h2>Card Usuário</h2>
    <p>${result.idCidadao}</p>
    <p>${result.cidadeUF}</p>
    <p>${result.areaEspecifica}</p>
    <p>${result.reclamacao}</p>
    </div>
    </section>
    `;
  };

    // Adiciona o elemento criado com o resultado dos itens do local storage ao corpo do documento
  const meuContainer = document.getElementById('resultado');
  meuContainer.appendChild(novoElemento);
}
