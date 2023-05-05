//Essa função faz a possibilidade de ver a senha
function esconderSenha(senha) {
  const esconderSenha = document.getElementById(senha);
  const eyeIcon = document.querySelector(`#${senha} + img.eye-icon`);
  
  if (esconderSenha.type === 'password') {
    esconderSenha.type = 'text';
    eyeIcon.src = '/Imagens/olho_aberto.svg';
    eyeIcon.alt = 'Ocultar senha';
  } else {
    esconderSenha.type = 'password';
    eyeIcon.src = '/Imagens/olho_fechado.svg';
    eyeIcon.alt = 'Mostrar senha';
  }
}

//Valida se o campo senha e confirmar senha sejam os mesmos
function validarSenha() {
  var senha = document.getElementById("senha").value;
  var confirmarSenha = document.getElementById("confirmar-senha").value;

  if (senha !== confirmarSenha) {
    alert("O campo Senha e Confirmar senha devem ter o mesmo valor");
    return false;
  }
  return true;
}

//Cadastrar Reclamação

// Adiciona um evento de clique ao botão "Salvar"

const botao = document.getElementById("enviar");
botao.addEventListener("click", fnenviar);
function fnenviar(){
  
  // Obtém os valores dos campos de entrada
  const idCidadao = document.getElementById("username").value;
  const cidadeUF = document.getElementById("City").value;
  const areaEspecifica = document.getElementById("Zone").value;
  const reclamacao = document.getElementById("Question").value;
  
  // cria objeto com as informações da reclamação
  var reclamacaoObj = {
    idCidadao: idCidadao,
    cidadeUF: cidadeUF,
    areaEspecifica: areaEspecifica,
    reclamacao: reclamacao
  }

  // adiciona a reclamação no localStorage
  localStorage.setItem(idCidadao, JSON.stringify(reclamacaoObj));

  // exibe mensagem de sucesso
  alert('Reclamação cadastrada com sucesso!');
}


