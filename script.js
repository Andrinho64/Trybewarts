function validarLogin() {
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
validarLogin();

document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('agreement');
  const submitBtn = document.getElementById('submit-btn');

  // Função para atualizar o estado do botão com base no estado do checkbox
  function updateButtonState() {
    submitBtn.disabled = !checkbox.checked;
  }

  // Adiciona um ouvinte de eventos ao checkbox para chamar a função de atualização
  checkbox.addEventListener('change', updateButtonState);

  updateButtonState();
});
