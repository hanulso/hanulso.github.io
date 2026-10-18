/* 자료 > 옛 책자: 책자를 고르면 page-flip(StPageFlip)으로 펼쳐 넘겨 본다.
   책자 목록은 _data/booklets.yml 을 페이지에 JSON으로 넣은 #booklet-data 에서 읽는다. */
(function () {
  const dataEl = document.getElementById('booklet-data');
  const root = document.getElementById('booklets');
  if (!dataEl || !root || !window.St) return;

  const books = JSON.parse(dataEl.textContent);
  const stage = root.querySelector('.booklet-stage');
  const title = root.querySelector('.booklet-title');
  const desc = root.querySelector('.booklet-desc');
  const status = root.querySelector('.booklet-status');
  const zoom = root.querySelector('.booklet-zoom');
  const prev = root.querySelector('.booklet-prev');
  const next = root.querySelector('.booklet-next');
  const picks = root.querySelectorAll('.booklet-pick');

  let flip = null;
  let book = null;

  const src = (b, p) => `/assets/img/booklets/${b.id}/${p.file}`;

  function visible() {
    const n = book.pages.length;
    const i = flip ? flip.getCurrentPageIndex() : 0;
    if (!flip || flip.getOrientation() === 'portrait' || i === 0) return [i];
    const left = i % 2 === 1 ? i : i - 1;
    return [left, left + 1].filter((k) => k < n);
  }

  function update() {
    const shown = visible();
    const n = book.pages.length;
    const labels = shown.map((k) => book.pages[k].label);
    status.textContent = `${labels.join(' · ')} (${shown[shown.length - 1] + 1} / ${n})`;
    zoom.replaceChildren();
    shown.forEach((k) => {
      const a = document.createElement('a');
      a.href = src(book, book.pages[k]);
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = shown.length > 1 ? `${book.pages[k].label} 크게 보기` : '크게 보기';
      zoom.append(a);
    });
    prev.disabled = shown[0] === 0;
    next.disabled = shown[shown.length - 1] >= n - 1;
  }

  function open(id, fromHash) {
    const b = books.find((x) => x.id === id) || books[0];
    book = b;
    if (flip) {
      flip.destroy();
      flip = null;
    }
    stage.replaceChildren();
    title.textContent = b.title;
    desc.textContent = b.desc || '';
    picks.forEach((el) => el.setAttribute('aria-pressed', String(el.dataset.id === b.id)));

    const holder = document.createElement('div');
    holder.className = 'booklet-book';
    stage.append(holder);

    if (b.pages.length === 1) {
      // 한 쪽뿐인 책자(표지만 남은 것)는 넘길 것이 없으니 그림만 보인다
      const img = document.createElement('img');
      img.src = src(b, b.pages[0]);
      img.alt = `${b.title} ${b.pages[0].label}`;
      img.className = 'booklet-single';
      holder.append(img);
      update();
    } else {
      const pages = b.pages.map((p, k) => {
        const d = document.createElement('div');
        d.className = 'booklet-page';
        if (k === 0 || p.hard) d.dataset.density = 'hard';
        const img = document.createElement('img');
        img.src = src(b, p);
        img.alt = `${b.title} ${p.label}`;
        img.loading = k < 4 ? 'eager' : 'lazy';
        d.append(img);
        return d;
      });
      flip = new St.PageFlip(holder, {
        width: b.width,
        height: b.height,
        size: 'stretch',
        minWidth: 300, // 책자 칸이 600px보다 좁으면(휴대폰) 한 쪽씩 보인다
        maxWidth: 1000,
        minHeight: 220,
        maxHeight: 1400,
        showCover: true,
        usePortrait: true,
        mobileScrollSupport: true,
        maxShadowOpacity: 0.35,
        flippingTime: 650,
      });
      flip.loadFromHTML(pages);
      flip.on('flip', update);
      flip.on('changeOrientation', update);
      update();
    }
    if (!fromHash) history.replaceState(null, '', `#book-${b.id}`);
  }

  prev.addEventListener('click', () => flip && flip.flipPrev());
  next.addEventListener('click', () => flip && flip.flipNext());
  picks.forEach((el) =>
    el.addEventListener('click', () => {
      open(el.dataset.id);
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })
  );
  document.addEventListener('keydown', (e) => {
    if (!flip || e.target.closest('input, textarea, [contenteditable]')) return;
    const r = stage.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return;
    if (e.key === 'ArrowLeft') flip.flipPrev();
    if (e.key === 'ArrowRight') flip.flipNext();
  });

  const fromHash = location.hash.startsWith('#book-') ? location.hash.slice(6) : null;
  open(fromHash || books[0].id, Boolean(fromHash));
})();
