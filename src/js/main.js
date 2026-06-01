/**
 * main.js — entrada do site Resistência
 *
 * Responsabilidades:
 *   1. FAQ accordion (abrir/fechar respostas)
 *   2. Ano dinâmico no rodapé
 *   3. Placeholder para Meta Pixel (descomente quando tiver o ID)
 */

(function () {
  'use strict';

  // ============ FAQ ACCORDION ============
  function initFAQ() {
    const items = document.querySelectorAll('.faq__item');
    items.forEach((item) => {
      const question = item.querySelector('.faq__question');
      if (!question) return;
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        // fecha todos
        items.forEach((i) => i.classList.remove('is-open'));
        // abre o clicado (toggle)
        if (!isOpen) item.classList.add('is-open');
      });
    });
  }

  // ============ ANO NO RODAPÉ ============
  function initYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  // ============ META PIXEL (descomente quando tiver o PIXEL_ID) ============
  // function initMetaPixel() {
  //   const PIXEL_ID = 'COLOQUE_AQUI_O_PIXEL_ID';
  //   !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  //   n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  //   n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  //   t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  //   document,'script','https://connect.facebook.net/en_US/fbevents.js');
  //   fbq('init', PIXEL_ID);
  //   fbq('track', 'PageView');
  // }

  // ============ BOOT ============
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  function boot() {
    initFAQ();
    initYear();
    // initMetaPixel();
  }
})();
