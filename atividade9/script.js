/* script.js
   Comentários: gerencia abas (login/cadastro) e exibe tabela de usuários fake.
   Tudo em vanilla JS para ficar simples e didático.
*/

// Usuários fake para demonstrar a tabela (poderia vir de uma API em um projeto real)
const fakeUsers = [
  { name: "Ana Silva", email: "ana.silva@email.com", phone: "(11) 99999-1111" },
  { name: "Bruno Costa", email: "bruno.costa@email.com", phone: "(21) 98888-2222" },
  { name: "Carla Souza", email: "carla.souza@email.com", phone: "(31) 97777-3333" }
];

// Seleções de elementos
const tabs = document.querySelectorAll('.tab');
const forms = document.querySelectorAll('.form');
const showUsersBtn = document.getElementById('showUsersBtn');
const usersTableWrap = document.getElementById('usersTableWrap');
const usersTableBody = document.querySelector('#usersTable tbody');
const hideUsersBtn = document.getElementById('hideUsersBtn');

// Função para alternar abas (login / cadastro)
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove classe active de todas as abas e marca como não selecionada (acessibilidade)
    tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });

    // Adiciona active na aba clicada
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    // Esconde todos os formulários e mostra apenas o que corresponde ao data-target
    const target = tab.getAttribute('data-target');
    forms.forEach(f => f.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

// Preenche a tabela de usuários com os dados fake
function populateUsersTable(){
  // limpa primeiro
  usersTableBody.innerHTML = '';
  fakeUsers.forEach(u => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${u.name}</td><td>${u.email}</td><td>${u.phone}</td>`;
    usersTableBody.appendChild(tr);
  });
}

// Mostra a tabela ao clicar no botão
showUsersBtn.addEventListener('click', () => {
  populateUsersTable();
  usersTableWrap.hidden = false; // mostramos a div que estava com hidden
  usersTableWrap.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Esconder a tabela
hideUsersBtn.addEventListener('click', () => {
  usersTableWrap.hidden = true;
});

// Exemplos simples de submissão — aqui apenas prevenimos o comportamento padrão e mostramos um alerta.
// Em um projeto real, faria validação e requisição a uma API.
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Login simulado — formulário não envia dados (atividade demo).');
});
document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Cadastro simulado — formulário não envia dados (atividade demo).');
});