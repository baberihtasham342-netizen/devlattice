/* ==========================================================================
   Devlattice Academy: script.js
   1. Editable content   2. Helpers   3. Renderers   4. Behaviour   5. Init
   ========================================================================== */

(() => {
  'use strict';

  /* ------------------------------------------------------------------------
     1. EDITABLE CONTENT
     Everything below is sample content. Replace it with confirmed details.
     ------------------------------------------------------------------------ */

  const CONFIG = {
    // Future integration: set this to a form service URL (for example a Formspree
    // endpoint) or your own API. While it is empty, the form validates but sends nothing.
    formEndpoint: '',
    socials: [
      { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/' },
      { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/' },
      { name: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/' },
      { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/' }
    ]
  };

  const unsplash = (id, w, h) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=75`;

  const PROGRAMS = [
    {
      id: 'web',
      title: 'Web Development',
      description: 'Learn how websites are planned, built and published, from page structure to a live project.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Git'],
      level: 'Beginner'
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Build fast, accessible and responsive interfaces, and learn to structure code you can maintain.',
      skills: ['Responsive design', 'JavaScript', 'APIs', 'Accessibility'],
      level: 'Intermediate'
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Design the logic behind an application: servers, databases, authentication and clean APIs.',
      skills: ['Node.js', 'Databases', 'REST APIs', 'Security basics'],
      level: 'Intermediate'
    },
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      description: 'Bring frontend and backend together by building and deploying a complete application.',
      skills: ['Frontend', 'Backend', 'Databases', 'Deployment'],
      level: 'Advanced'
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      description: 'Understand users, sketch ideas, design clear interfaces and test them before they are built.',
      skills: ['User research', 'Wireframing', 'Prototyping', 'Design systems'],
      level: 'Beginner'
    },
    {
      id: 'fundamentals',
      title: 'Programming Fundamentals',
      description: 'Start here if you are new. Learn to think in logic, solve problems and write your first programs.',
      skills: ['Logic', 'Variables and loops', 'Functions', 'Debugging'],
      level: 'Beginner'
    }
  ];

  const LEVELS = { Beginner: 1, Intermediate: 2, Advanced: 3 };

  const PROJECTS = [
    {
      id: 'p1', layout: 'a', ratio: '4 / 3',
      title: 'Community Library Portal',
      category: 'Web application',
      description: 'A catalogue and borrowing system with search, member accounts and an admin view.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      image: unsplash('1555066931-4365d14bab8c', 1200, 900),
      alt: 'Code open on a laptop screen next to a notebook',
      url: ''
    },
    {
      id: 'p2', layout: 'b', ratio: '4 / 5',
      title: 'Campus Events App',
      category: 'UI/UX design',
      description: 'A mobile-first concept for finding and booking campus events, from research to prototype.',
      tech: ['Figma', 'User research', 'Prototyping'],
      image: unsplash('1559028012-481c04fa702d', 900, 1125),
      alt: 'Designer sketching an interface layout on a desk',
      url: ''
    },
    {
      id: 'p3', layout: 'c', ratio: '4 / 5',
      title: 'Study Planner',
      category: 'Frontend',
      description: 'A weekly planner with drag-and-drop tasks, reminders and a focus timer.',
      tech: ['JavaScript', 'LocalStorage', 'CSS Grid'],
      image: unsplash('1498050108023-c5249f4df085', 900, 1125),
      alt: 'Laptop and coffee on a desk in a developer workspace',
      url: ''
    },
    {
      id: 'p4', layout: 'd', ratio: '3 / 2',
      title: 'Small Business Dashboard',
      category: 'Full stack',
      description: 'Sales and stock charts for a small shop, built on a simple API and database.',
      tech: ['JavaScript', 'REST API', 'SQL', 'Charts'],
      image: unsplash('1551288049-bebda4e38f71', 1200, 800),
      alt: 'Analytics charts displayed on a laptop screen',
      url: ''
    },
    {
      id: 'p5', layout: 'e', ratio: '21 / 9',
      title: 'Team Project Showcase Site',
      category: 'Capstone',
      description: 'A group capstone: a portfolio site where each learner presents their finished work, built together with shared code reviews.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Git', 'Deployment'],
      image: unsplash('1522071820081-009f0129c71c', 1600, 686),
      alt: 'Group of learners collaborating around laptops',
      url: ''
    }
  ];

  // Placeholder profiles only. Do not publish these as real people.
  const TEAM = [
    {
      name: 'Instructor Name',
      role: 'Lead Instructor, Web Development',
      bio: 'Replace this with a two-line introduction: background, teaching focus and what learners can expect.',
      initials: '01', tone: 'ink', linkedin: ''
    },
    {
      name: 'Instructor Name',
      role: 'Instructor, Backend Development',
      bio: 'Replace this with a two-line introduction: background, teaching focus and what learners can expect.',
      initials: '02', tone: 'lime', linkedin: ''
    },
    {
      name: 'Mentor Name',
      role: 'Mentor, UI/UX Design',
      bio: 'Replace this with a two-line introduction: background, mentoring focus and what learners can expect.',
      initials: '03', tone: 'paper', linkedin: ''
    },
    {
      name: 'Coordinator Name',
      role: 'Programme Coordinator',
      bio: 'Replace this with a two-line introduction: role at the academy and how learners can reach out.',
      initials: '04', tone: 'ink', linkedin: ''
    }
  ];

  // Sample testimonials. Replace with real, permitted student feedback.
  const TESTIMONIALS = [
    {
      name: 'Sample Student A', initials: 'SA', tone: 'lime', program: 'Web Development', rating: 5,
      feedback: 'I came in knowing nothing about code. By the end I had a working website I was proud to show people.'
    },
    {
      name: 'Sample Student B', initials: 'SB', tone: 'ink', program: 'Frontend Development', rating: 5,
      feedback: 'Every concept was followed by something to build. That made it stick far better than just reading.'
    },
    {
      name: 'Sample Student C', initials: 'SC', tone: 'paper', program: 'UI/UX Design', rating: 4,
      feedback: 'Getting feedback on real designs changed how I think about users. My portfolio finally has a story.'
    },
    {
      name: 'Sample Student D', initials: 'SD', tone: 'ink', program: 'Full Stack Development', rating: 5,
      feedback: 'Building and deploying a complete app showed me how all the pieces fit together.'
    }
  ];

  // Sample gallery items. 'cert' and 'badge' are drawn in code; 'photo' uses an image URL.
  const GALLERY = [
    { id: 'g1', type: 'cert', ratio: '1200 / 850', title: 'Certificate of Completion', sub: 'Sample certificate design', program: 'Web Development' },
    { id: 'g2', type: 'photo', ratio: '3 / 4', title: 'Demo day', sub: 'Sample learner presentations',
      src: unsplash('1524178232363-1fb2b075b655', 900, 1200), alt: 'Instructor presenting to a classroom of learners' },
    { id: 'g3', type: 'badge', ratio: '1 / 1', title: 'First project shipped', sub: 'Sample learning milestone', program: 'Milestone' },
    { id: 'g4', type: 'photo', ratio: '1 / 1', title: 'Workshop day', sub: 'Sample academy event',
      src: unsplash('1517048676732-d65bc937f952', 900, 900), alt: 'People collaborating around a table in a workshop' },
    { id: 'g5', type: 'cert', ratio: '1200 / 850', title: 'Achievement in Frontend Development', sub: 'Sample achievement award', program: 'Frontend Development', award: true }
  ];

  /* ------------------------------------------------------------------------
     2. HELPERS
     ------------------------------------------------------------------------ */

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const esc = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const ICONS = {
    'arrow-left': '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    'arrow-right': '<path d="M5 12h14M12 5l7 7-7 7"/>',
    'arrow-up': '<path d="M12 19V5M5 12l7-7 7 7"/>',
    'arrow-up-right': '<path d="M7 17 17 7M7 7h10v10"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    zoom: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>',
    instagram: '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2zM17.5 6.5h.01"/>',
    youtube: '<path d="M2.5 17a24 24 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49 49 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24 24 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49 49 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'
  };

  const icon = (name, filled = false) =>
    `<svg viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[name] || ''}</svg>`;

  const STAR = '<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l6.9-1z"/>';

  const stars = (n) =>
    `<div class="stars" role="img" aria-label="${n} out of 5 stars">${[1, 2, 3, 4, 5]
      .map((i) => `<svg class="${i > n ? 'off' : ''}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${STAR}</svg>`)
      .join('')}</div>`;

  const dataUri = (svg) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

  // Drawn certificates and badges so the gallery works with no external files.
  function certificateSvg(item) {
    const title = item.award ? 'Certificate of Achievement' : 'Certificate of Completion';
    return dataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850">
      <rect width="1200" height="850" fill="#F7F7F4"/>
      <rect x="40" y="40" width="1120" height="770" fill="none" stroke="#171918" stroke-width="3"/>
      <rect x="62" y="62" width="1076" height="726" fill="none" stroke="#171918" stroke-width="1"/>
      <rect x="90" y="96" width="44" height="44" fill="#171918"/>
      <path d="M100 106h24M100 118h24M100 130h24M100 106v24M112 106v24M124 106v24" stroke="#C6F36A" stroke-width="2.4" fill="none"/>
      <text x="150" y="128" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#171918">Devlattice Academy</text>
      <text x="600" y="320" text-anchor="middle" font-family="Georgia, serif" font-size="62" fill="#171918">${esc(title)}</text>
      <text x="600" y="400" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" fill="#5A5E58">This certifies that</text>
      <text x="600" y="480" text-anchor="middle" font-family="Georgia, serif" font-size="56" font-style="italic" fill="#171918">Student Name</text>
      <line x1="320" y1="502" x2="880" y2="502" stroke="#171918" stroke-width="1.5"/>
      <text x="600" y="564" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" fill="#5A5E58">${item.award ? 'for outstanding work in' : 'has successfully completed'}</text>
      <text x="600" y="618" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="#171918">${esc(item.program)}</text>
      <rect x="150" y="700" width="220" height="3" fill="#171918"/>
      <text x="150" y="730" font-family="Arial, sans-serif" font-size="20" fill="#5A5E58">Instructor signature</text>
      <circle cx="1020" cy="690" r="52" fill="#C6F36A" stroke="#171918" stroke-width="3"/>
      <text x="1020" y="698" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#171918">SAMPLE</text>
    </svg>`);
  }

  function badgeSvg(item) {
    return dataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <rect width="800" height="800" fill="#171918"/>
      <g stroke="#F7F7F4" stroke-opacity=".14" stroke-width="2">
        <path d="M0 200h800M0 400h800M0 600h800M200 0v800M400 0v800M600 0v800"/>
      </g>
      <circle cx="400" cy="340" r="150" fill="#C6F36A"/>
      <path d="M340 340l45 45 80-95" fill="none" stroke="#171918" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="400" y="596" text-anchor="middle" font-family="Arial, sans-serif" font-size="46" font-weight="700" fill="#F7F7F4">${esc(item.title)}</text>
      <text x="400" y="650" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="#C6F36A">Sample milestone</text>
    </svg>`);
  }

  const gallerySrc = (item) =>
    item.type === 'cert' ? certificateSvg(item) : item.type === 'badge' ? badgeSvg(item) : item.src;

  const galleryAlt = (item) =>
    item.type === 'photo'
      ? item.alt
      : item.type === 'cert'
        ? `Sample certificate: ${item.title}`
        : `Sample milestone badge: ${item.title}`;

  // Used when a remote image fails to load, so no broken-image icons ever show.
  const FALLBACK_IMG = dataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="#E9EBE5"/>
    <g stroke="#171918" stroke-opacity=".15" stroke-width="2"><path d="M0 150h800M0 300h800M0 450h800M200 0v600M400 0v600M600 0v600"/></g>
    <text x="400" y="300" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#5A5E58">Image unavailable</text>
    <text x="400" y="332" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#5A5E58">Replace it in js/script.js</text>
  </svg>`);

  /* ------------------------------------------------------------------------
     3. RENDERERS
     ------------------------------------------------------------------------ */

  function renderIcons(root = document) {
    $$('[data-icon]', root).forEach((el) => {
      if (!el.querySelector('svg')) el.insertAdjacentHTML('afterbegin', icon(el.dataset.icon));
    });
  }

  function renderPrograms() {
    $('#programList').innerHTML = PROGRAMS.map((p) => {
      const n = LEVELS[p.level] || 1;
      const dots = [1, 2, 3].map((i) => `<i class="${i <= n ? 'on' : ''}"></i>`).join('');
      return `
        <li class="program" data-reveal>
          <div class="program__head">
            <h3 class="program__title">${esc(p.title)}</h3>
            <p class="program__level" aria-label="Difficulty: ${esc(p.level)}">${dots}<span>${esc(p.level)}</span></p>
          </div>
          <div class="program__body">
            <p class="program__desc">${esc(p.description)}</p>
            <ul class="chips" aria-label="Skills covered">${p.skills.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
          </div>
          <div class="program__action">
            <button class="link-btn" type="button" data-program="${esc(p.id)}" aria-label="Explore ${esc(p.title)}">Explore program</button>
          </div>
        </li>`;
    }).join('');

    $('#program').insertAdjacentHTML(
      'beforeend',
      PROGRAMS.map((p) => `<option value="${esc(p.id)}">${esc(p.title)}</option>`).join('')
    );
    $('#footerPrograms').innerHTML = PROGRAMS.map(
      (p) => `<li><button class="footer-link" type="button" data-program="${esc(p.id)}">${esc(p.title)}</button></li>`
    ).join('');
  }

  function renderProjects() {
    $('#projectGrid').innerHTML = PROJECTS.map((p) => `
      <article class="project project--${esc(p.layout)}" data-reveal>
        <div class="project__media" style="--ratio:${esc(p.ratio)}" data-project="${esc(p.id)}">
          <img src="${esc(p.image)}" alt="${esc(p.alt)}" loading="lazy" decoding="async">
          <span class="project__open" aria-hidden="true">${icon('arrow-up-right')}</span>
        </div>
        <div class="project__body">
          <p class="project__cat">${esc(p.category)}</p>
          <h3 class="project__title">${esc(p.title)}</h3>
          <p class="project__desc">${esc(p.description)}</p>
          <ul class="chips" aria-label="Technologies used">${p.tech.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
          ${p.url
            ? `<a class="link-btn" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" aria-label="View project: ${esc(p.title)}">View project</a>`
            : `<button class="link-btn" type="button" data-project="${esc(p.id)}" aria-label="View project: ${esc(p.title)}">View project</button>`}
        </div>
      </article>`).join('');
  }

  function renderTeam() {
    $('#teamList').innerHTML = TEAM.map((m) => `
      <li class="team-member" data-reveal>
        <div class="avatar avatar--${esc(m.tone)}" aria-hidden="true">${esc(m.initials)}</div>
        <div class="team-member__body">
          <h3 class="team-member__name">${esc(m.name)}</h3>
          <p class="team-member__role">${esc(m.role)}</p>
          <p class="team-member__bio">${esc(m.bio)}</p>
          ${m.linkedin
            ? `<a class="team-member__link" href="${esc(m.linkedin)}" target="_blank" rel="noopener noreferrer">${icon('linkedin')}<span>LinkedIn profile<span class="visually-hidden"> of ${esc(m.name)}</span></span></a>`
            : `<span class="team-member__link" aria-disabled="true" title="Add a LinkedIn URL in js/script.js">${icon('linkedin')}<span>LinkedIn link not added yet</span></span>`}
        </div>
      </li>`).join('');
  }

  function renderTestimonials() {
    $('#sliderTrack').innerHTML = TESTIMONIALS.map((t, i) => `
      <figure class="slide" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${TESTIMONIALS.length}">
        <span class="sample-tag">Sample testimonial</span>
        <blockquote class="slide__quote">${esc(t.feedback)}</blockquote>
        <figcaption class="slide__meta">
          <span class="avatar avatar--${esc(t.tone)}" aria-hidden="true">${esc(t.initials)}</span>
          <span class="slide__who">
            <span class="slide__name">${esc(t.name)}</span>
            <span class="slide__program">${esc(t.program)}</span>
            ${stars(t.rating)}
          </span>
        </figcaption>
      </figure>`).join('');
  }

  function renderGallery() {
    $('#certGrid').innerHTML = GALLERY.map((g, i) => `
      <figure class="cert cert--${i + 1}" data-reveal>
        <button class="cert__btn" type="button" data-gallery="${i}" style="--ratio:${esc(g.ratio)}" aria-label="Preview: ${esc(g.title)}">
          <img src="${esc(gallerySrc(g))}" alt="${esc(galleryAlt(g))}" loading="lazy" decoding="async">
          <span class="cert__zoom" aria-hidden="true">${icon('zoom')}</span>
        </button>
        <figcaption class="cert__cap">
          <span class="cert__title">${esc(g.title)}</span>
          <span class="cert__sub">${esc(g.sub)}</span>
        </figcaption>
      </figure>`).join('');
  }

  function renderSocials() {
    const html = CONFIG.socials
      .map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(s.name)}">${icon(s.icon)}</a></li>`)
      .join('');
    $$('[data-socials]').forEach((ul) => { ul.innerHTML = html; });
  }

  /* ------------------------------------------------------------------------
     4. BEHAVIOUR
     ------------------------------------------------------------------------ */

  /* Navigation: scroll state, mobile menu, active link */
  function initNav() {
    const nav = $('#nav');
    const menu = $('#navMenu');
    const toggle = $('#navToggle');
    const desktop = window.matchMedia('(min-width: 960px)');

    const setOpen = (open) => {
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('is-locked', open);
      // Keep hidden menu links out of the tab order on mobile.
      menu.inert = !open && !desktop.matches;
    };

    toggle.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
    $$('a', menu).forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
    });
    desktop.addEventListener('change', () => setOpen(false));
    setOpen(false);

    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Active link. Sections outside the nav belong to the nearest nav item above them.
    const map = { home: 'home', about: 'about', programs: 'programs', approach: 'programs', projects: 'projects', team: 'team', testimonials: 'team', certificates: 'team', contact: null };
    const links = $$('[data-nav]', menu);
    const setActive = (key) => links.forEach((a) => {
      if (a.dataset.nav === key) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) setActive(map[en.target.id]); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach((id) => { const s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* Scroll reveal */
  function initReveal() {
    const items = $$('[data-reveal]');
    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach((el) => io.observe(el));
  }

  /* Programs: "Explore program" jumps to the form with the program selected */
  function initProgramLinks() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-program]');
      if (!btn) return;
      $('#program').value = btn.dataset.program;
      $('#contact').scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      setTimeout(() => $('#fullName').focus({ preventScroll: true }), reduceMotion.matches ? 0 : 700);
    });
  }

  /* Project details dialog */
  function initProjects() {
    const dlg = $('#projectModal');
    const open = (id) => {
      const p = PROJECTS.find((x) => x.id === id);
      if (!p) return;
      $('#pmCat').textContent = p.category;
      $('#pmTitle').textContent = p.title;
      $('#pmDesc').textContent = p.description;
      $('#pmTech').innerHTML = p.tech.map((t) => `<li>${esc(t)}</li>`).join('');
      document.body.classList.add('is-locked');
      dlg.showModal();
    };
    $('#projectGrid').addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-project]');
      if (trigger) open(trigger.dataset.project);
    });
    $('#pmClose').addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', () => document.body.classList.remove('is-locked'));
  }

  /* Testimonial slider */
  function initSlider() {
    const track = $('#sliderTrack');
    const slides = $$('.slide', track);
    const slider = $('#slider');
    const count = $('#tCount');
    const total = slides.length;
    let index = 0;

    const go = (n) => {
      index = (n + total) % total;
      track.style.transform = `translateX(${-index * 100}%)`;
      slides.forEach((s, i) => { s.inert = i !== index; s.setAttribute('aria-hidden', String(i !== index)); });
      count.textContent = `${index + 1} / ${total}`;
    };

    $('#tPrev').addEventListener('click', () => go(index - 1));
    $('#tNext').addEventListener('click', () => go(index + 1));
    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') go(index - 1);
      if (e.key === 'ArrowRight') go(index + 1);
    });

    // Swipe
    let startX = null;
    slider.addEventListener('pointerdown', (e) => { startX = e.clientX; });
    slider.addEventListener('pointerup', (e) => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    });
    slider.addEventListener('pointercancel', () => { startX = null; });

    go(0);
  }

  /* Certificate lightbox */
  function initLightbox() {
    const dlg = $('#lightbox');
    const img = $('#lbImg');
    let current = 0;
    let opener = null;

    const show = (i) => {
      current = (i + GALLERY.length) % GALLERY.length;
      const g = GALLERY[current];
      img.src = gallerySrc(g);
      img.alt = galleryAlt(g);
      $('#lbTitle').textContent = g.title;
      $('#lbCaption').textContent = `${g.sub} (${current + 1} of ${GALLERY.length})`;
    };

    $('#certGrid').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-gallery]');
      if (!btn) return;
      opener = btn;
      show(Number(btn.dataset.gallery));
      document.body.classList.add('is-locked');
      dlg.showModal();
    });
    $('#lbPrev').addEventListener('click', () => show(current - 1));
    $('#lbNext').addEventListener('click', () => show(current + 1));
    $('#lbClose').addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });
    dlg.addEventListener('close', () => {
      document.body.classList.remove('is-locked');
      if (opener) opener.focus();
    });
  }

  /* Contact form */
  function initForm() {
    const form = $('#contactForm');
    const status = $('#formStatus');
    const submit = $('#submitBtn');

    const rules = {
      fullName: (v) => (v.trim().length < 2 ? 'Enter your full name.' : ''),
      email: (v) => (!v.trim() ? 'Enter your email address.' : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? 'Enter a valid email address, like name@example.com.' : ''),
      phone: (v) => (v.trim() && (!/^[+()\d\s-]+$/.test(v.trim()) || v.replace(/\D/g, '').length < 7) ? 'Enter a valid phone number or leave this field empty.' : ''),
      program: (v) => (!v ? 'Choose the program you are interested in.' : ''),
      message: (v) => (v.trim().length < 10 ? 'Write at least 10 characters so we know how to help.' : '')
    };

    const setError = (name, msg) => {
      const field = form.elements[name];
      const out = $(`#${name}-err`);
      out.textContent = msg;
      if (msg) field.setAttribute('aria-invalid', 'true'); else field.removeAttribute('aria-invalid');
    };

    const validateField = (name) => {
      const msg = rules[name](form.elements[name].value);
      setError(name, msg);
      return !msg;
    };

    Object.keys(rules).forEach((name) => {
      const el = form.elements[name];
      el.addEventListener('blur', () => validateField(name));
      el.addEventListener('input', () => { if (el.getAttribute('aria-invalid')) validateField(name); });
    });

    const showStatus = (kind, text) => {
      status.className = `form__status is-${kind}`;
      status.textContent = text;
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.className = 'form__status';
      status.textContent = '';

      const results = Object.keys(rules).map((n) => [n, validateField(n)]);
      const firstBad = results.find(([, ok]) => !ok);
      if (firstBad) {
        form.elements[firstBad[0]].focus();
        showStatus('error', 'Please fix the highlighted fields and try again.');
        return;
      }
      if (form.elements.company.value) return; // honeypot filled: ignore silently

      if (!CONFIG.formEndpoint) {
        showStatus('info', 'Your details look good, but this form is not connected to a backend yet, so nothing was sent. Set CONFIG.formEndpoint in js/script.js to enable sending.');
        return;
      }

      submit.disabled = true;
      submit.textContent = 'Sending…';
      try {
        const body = Object.fromEntries(new FormData(form).entries());
        delete body.company;
        const res = await fetch(CONFIG.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(body)
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        form.reset();
        showStatus('success', 'Thank you. Your message has been sent and we will reply soon.');
      } catch (err) {
        showStatus('error', 'We could not send your message. Please try again, or email us directly.');
      } finally {
        submit.disabled = false;
        submit.textContent = 'Send message';
      }
    });
  }

  /* Back to top */
  function initToTop() {
    const btn = $('#toTop');
    const onScroll = () => btn.classList.toggle('is-visible', window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' }));
  }

  /* Image fallback: replace any image that fails to load */
  function initImageFallback() {
    const swap = (img) => {
      if (img.dataset.fallback) return;
      img.dataset.fallback = '1';
      img.src = FALLBACK_IMG;
    };
    document.addEventListener('error', (e) => { if (e.target.tagName === 'IMG') swap(e.target); }, true);
    $$('img').forEach((img) => { if (img.complete && img.naturalWidth === 0 && img.src) swap(img); });
  }

  /* ------------------------------------------------------------------------
     5. INIT
     ------------------------------------------------------------------------ */

  function init() {
    renderPrograms();
    renderProjects();
    renderTeam();
    renderTestimonials();
    renderGallery();
    renderSocials();
    renderIcons();
    $('#year').textContent = new Date().getFullYear();

    initNav();
    initReveal();
    initProgramLinks();
    initProjects();
    initSlider();
    initLightbox();
    initForm();
    initToTop();
    initImageFallback();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
