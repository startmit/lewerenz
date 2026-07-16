/* ==========================================================================
   LEWERENZ Objektservice — script.js
   ========================================================================== */

/* ===== SEKTION 01 — HEADER & HERO ===== */
// Header dunkelt beim Scrollen ab
  (function(){
    var header = document.getElementById('lwHeader');
    window.addEventListener('scroll', function(){
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    });

    // Mobiles Menü
    var burger = document.getElementById('lwBurger');
    var menu   = document.getElementById('lwMenu');

    function setMenu(open){
      burger.classList.toggle('is-open', open);
      menu.classList.toggle('is-open', open);
      document.body.classList.toggle('lw-menu-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    }

    if (burger && menu) {
      burger.addEventListener('click', function(){
        setMenu(!menu.classList.contains('is-open'));
      });

      // Nach Klick auf einen Link schließen
      menu.querySelectorAll('a').forEach(function(a){
        a.addEventListener('click', function(){ setMenu(false); });
      });

      // Escape schließt
      document.addEventListener('keydown', function(e){
        if (e.key === 'Escape' && menu.classList.contains('is-open')) setMenu(false);
      });

      // Beim Wechsel auf Desktop schließen
      window.addEventListener('resize', function(){
        if (window.innerWidth > 1100 && menu.classList.contains('is-open')) setMenu(false);
      });
    }
  })();

/* ===== SEKTION 06 — VORHER / NACHHER ===== */
/* ---------- Vorher/Nachher-Schieberegler ---------- */
(function(){
  document.querySelectorAll('[data-cmp]').forEach(function(cmp){
    var before = cmp.querySelector('.lw-cmp__before');
    var handle = cmp.querySelector('.lw-cmp__handle');
    var img    = before.querySelector('img');
    var active = false;

    function setPos(pct){
      pct = Math.max(0, Math.min(100, pct));
      before.style.width = pct + '%';
      handle.style.left  = pct + '%';
      cmp.setAttribute('aria-valuenow', Math.round(pct));
    }

    // Innenbild auf Containerbreite fixieren, damit es beim
    // Beschneiden nicht mitschrumpft
    function syncWidth(){
      img.style.width = cmp.getBoundingClientRect().width + 'px';
    }
    syncWidth();
    window.addEventListener('resize', syncWidth);

    function posFromEvent(e){
      var rect = cmp.getBoundingClientRect();
      var x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      return (x / rect.width) * 100;
    }

    function start(e){ active = true; setPos(posFromEvent(e)); }
    function move(e){ if(active){ setPos(posFromEvent(e)); } }
    function end(){ active = false; }

    cmp.addEventListener('mousedown', start);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', end);

    cmp.addEventListener('touchstart', start, {passive:true});
    cmp.addEventListener('touchmove', move, {passive:true});
    cmp.addEventListener('touchend', end);

    // Beim Hover ohne Klick mitziehen
    cmp.addEventListener('mousemove', function(e){
      if(!active) setPos(posFromEvent(e));
    });

    // Tastatur
    cmp.addEventListener('keydown', function(e){
      var cur = parseFloat(cmp.getAttribute('aria-valuenow')) || 50;
      if(e.key === 'ArrowLeft'){ setPos(cur - 4); e.preventDefault(); }
      if(e.key === 'ArrowRight'){ setPos(cur + 4); e.preventDefault(); }
    });

    setPos(50);
  });
})();

/* ===== SEKTION 11 — KONTAKT ===== */
/* ---------- Formularversand über Web3Forms ---------- */
(function(){
  var form   = document.getElementById('lwForm');
  var btn    = document.getElementById('lwSubmit');
  var btnTxt = document.getElementById('lwSubmitTxt');
  var status = document.getElementById('lwStatus');
  if(!form) return;

  function show(type, msg){
    status.className = 'lw-status is-' + type;
    status.textContent = msg;
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    status.className = 'lw-status';

    // Pflichtfelder prüfen
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }

    btn.disabled = true;
    btnTxt.textContent = 'Wird gesendet …';

    var data = Object.fromEntries(new FormData(form));

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(function(r){ return r.json(); })
    .then(function(res){
      if(res.success){
        show('ok', 'Danke, deine Nachricht ist angekommen. Du hörst zeitnah von mir.');
        form.reset();
      } else {
        show('err', 'Das hat leider nicht geklappt. Ruf gern direkt an: +49 172 4695433');
      }
    })
    .catch(function(){
      show('err', 'Keine Verbindung. Ruf gern direkt an: +49 172 4695433');
    })
    .finally(function(){
      btn.disabled = false;
      btnTxt.textContent = 'Nachricht senden';
    });
  });
})();
