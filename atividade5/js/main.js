// js/main.js
// Script pequeno para controlar o menu "hamburger" em telas pequenas.
// Comentários em PT-BR para você entender cada passo.

document.addEventListener('DOMContentLoaded', function () {
  // seleciona o botão que abre/fecha o menu
  const toggle = document.querySelector('.nav-toggle');
  // seleciona o elemento de navegação principal
  const nav = document.querySelector('.main-nav');

  if (!toggle || !nav) return; // se não existir, nada a fazer

  // adiciona evento de clique ao botão
  toggle.addEventListener('click', function () {
    // alterna a classe .open no nav (essa classe controla exibição no CSS)
    nav.classList.toggle('open');

    // atualiza atributo aria-expanded para acessibilidade
    const expanded = nav.classList.contains('open');
    toggle.setAttribute('aria-expanded', expanded);
  });

  // opcional: quando o usuário clica em um link do menu, fechamos o menu (bom para mobile)
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});