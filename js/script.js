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
