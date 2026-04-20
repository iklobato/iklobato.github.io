(function () {
  'use strict';

  const normalize = (s) =>
    (s || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

  const extractTechs = (root, selector) => {
    const techs = new Set();
    root.querySelectorAll(selector).forEach((el) => {
      const raw = el.textContent || '';
      raw.split(/[·,()\/]/).forEach((t) => {
        const n = normalize(t);
        if (n && n.length > 1) techs.add(n);
      });
    });
    return Array.from(techs);
  };

  // ============================================================
  // 1. TECH STACK FILTER
  // ============================================================
  function initTechFilter() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    document.querySelectorAll('.experience-card').forEach((card) => {
      card.dataset.techs = extractTechs(card, '.technologies span').join(' ');
    });
    document.querySelectorAll('.service-card').forEach((card) => {
      card.dataset.techs = extractTechs(card, '.service-tech-tags span').join(' ');
    });
    document.querySelectorAll('.skill-category-card').forEach((card) => {
      card.dataset.techs = extractTechs(card, '.skill-tag').join(' ');
    });

    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag) => {
      tag.setAttribute('role', 'button');
      tag.setAttribute('tabindex', '0');
      tag.dataset.tech = normalize(tag.textContent.split('(')[0]);
    });

    const filterBar = document.createElement('div');
    filterBar.className = 'tech-filter-bar';
    filterBar.innerHTML = `
      <span class="tech-filter-label"><i class="fas fa-filter" aria-hidden="true"></i> Filter experience by tech:</span>
      <span class="tech-filter-current" aria-live="polite"></span>
      <button type="button" class="tech-filter-clear" hidden>Clear filter</button>
    `;
    skillsSection.insertBefore(filterBar, skillsSection.children[1]);

    const currentLabel = filterBar.querySelector('.tech-filter-current');
    const clearBtn = filterBar.querySelector('.tech-filter-clear');

    let styleEl = document.getElementById('tech-filter-style');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'tech-filter-style';
      document.head.appendChild(styleEl);
    }

    const applyFilter = (tech, originalText) => {
      if (!tech) {
        document.body.removeAttribute('data-active-filter');
        currentLabel.textContent = '';
        clearBtn.hidden = true;
        styleEl.textContent = '';
        skillTags.forEach((t) => t.classList.remove('is-active'));
        return;
      }
      document.body.dataset.activeFilter = tech;
      currentLabel.textContent = originalText;
      clearBtn.hidden = false;
      skillTags.forEach((t) =>
        t.classList.toggle('is-active', t.dataset.tech === tech)
      );
      styleEl.textContent = `
        body[data-active-filter] [data-techs~="${tech}"] { opacity: 1 !important; }
        body[data-active-filter] [data-techs~="${tech}"] .skill-tag { opacity: 1 !important; }
      `;
      filterBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleTagClick = (e) => {
      const tag = e.currentTarget;
      const tech = tag.dataset.tech;
      if (!tech) return;
      if (document.body.dataset.activeFilter === tech) {
        applyFilter(null);
      } else {
        applyFilter(tech, tag.textContent.trim());
      }
    };

    skillTags.forEach((tag) => {
      tag.addEventListener('click', handleTagClick);
      tag.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleTagClick(e);
        }
      });
    });

    clearBtn.addEventListener('click', () => applyFilter(null));
  }

  // ============================================================
  // 2. EXPANDABLE WORK TIMELINE
  // ============================================================
  function initTimelineCollapse() {
    const items = document.querySelectorAll('#experience .timeline-item');
    if (!items.length) return;

    items.forEach((item, idx) => {
      const card = item.querySelector('.experience-card');
      if (!card) return;
      const header = card.querySelector('.experience-header');
      const desc = card.querySelector('.job-description');
      if (!header) return;

      const body = document.createElement('div');
      body.className = 'experience-body';
      const nodesToMove = Array.from(card.children).filter(
        (n) => n !== header && n !== desc
      );
      nodesToMove.forEach((n) => body.appendChild(n));
      card.appendChild(body);

      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'experience-toggle';
      toggle.setAttribute('aria-expanded', idx === 0 ? 'true' : 'false');
      toggle.innerHTML =
        '<span class="toggle-text">' +
        (idx === 0 ? 'Hide details' : 'Show details') +
        '</span> <i class="fas fa-chevron-down" aria-hidden="true"></i>';
      card.appendChild(toggle);

      if (idx !== 0) card.classList.add('collapsed');

      toggle.addEventListener('click', () => {
        const isCollapsed = card.classList.toggle('collapsed');
        toggle.setAttribute('aria-expanded', String(!isCollapsed));
        toggle.querySelector('.toggle-text').textContent = isCollapsed
          ? 'Show details'
          : 'Hide details';
      });
    });
  }

  // ============================================================
  // 3. PROJECT QUALIFIER FORM
  // ============================================================
  function initQualifier() {
    const hireSection = document.getElementById('hire-me');
    if (!hireSection) return;
    const ctaButtons = hireSection.querySelector('.cta-buttons');
    if (!ctaButtons) return;

    const form = document.createElement('form');
    form.className = 'qualifier-form';
    form.setAttribute('aria-label', 'Tell me about your project');
    form.innerHTML = `
      <p class="qualifier-intro"><strong>30 seconds to a better first call:</strong> tell me what you need.</p>
      <div class="qualifier-row">
        <label class="qualifier-field">
          <span>Project type</span>
          <select name="project_type" required>
            <option value="">Choose…</option>
            <option value="backend-api">Backend API / Microservices</option>
            <option value="cloud-devops">Cloud Infrastructure / DevOps</option>
            <option value="ai-integration">AI / ML Integration</option>
            <option value="data-pipeline">Data Pipeline / ETL</option>
            <option value="other">Other / Not sure yet</option>
          </select>
        </label>
        <label class="qualifier-field">
          <span>Timeline</span>
          <select name="timeline" required>
            <option value="">Choose…</option>
            <option value="lt-1-month">Less than 1 month</option>
            <option value="1-3-months">1–3 months</option>
            <option value="3-6-months">3–6 months</option>
            <option value="6-plus-months">6+ months / ongoing</option>
          </select>
        </label>
        <label class="qualifier-field">
          <span>Budget band (USD)</span>
          <select name="budget" required>
            <option value="">Choose…</option>
            <option value="lt-10k">Under $10k</option>
            <option value="10-25k">$10k–$25k</option>
            <option value="25-50k">$25k–$50k</option>
            <option value="50k-plus">$50k+</option>
            <option value="discuss">Prefer to discuss</option>
          </select>
        </label>
      </div>
      <div class="qualifier-actions">
        <button type="submit" class="primary-cta qualifier-book">
          <i class="fas fa-calendar-check" aria-hidden="true"></i> Book a call with this context
        </button>
        <button type="button" class="secondary-cta qualifier-email">
          <i class="fas fa-envelope" aria-hidden="true"></i> Email me instead
        </button>
      </div>
    `;
    hireSection.querySelector('.hire-me-content').insertBefore(form, ctaButtons);
    ctaButtons.hidden = true;

    const calendlyBase = 'https://calendly.com/hlobato/lets-talk';
    const email = 'iklobato@proton.me';

    const buildParams = () => {
      const data = new FormData(form);
      const entries = {};
      for (const [k, v] of data.entries()) entries[k] = v;
      return entries;
    };

    const toCalendlyUrl = (data) => {
      const params = new URLSearchParams({
        utm_source: 'iklobato.com',
        utm_medium: 'qualifier',
        utm_campaign: data.project_type || 'unspecified',
        utm_content: `${data.timeline || 'na'}_${data.budget || 'na'}`,
      });
      return `${calendlyBase}?${params.toString()}`;
    };

    const toMailto = (data) => {
      const labels = {
        'backend-api': 'Backend API / Microservices',
        'cloud-devops': 'Cloud Infrastructure / DevOps',
        'ai-integration': 'AI / ML Integration',
        'data-pipeline': 'Data Pipeline / ETL',
        other: 'Other',
      };
      const timelines = {
        'lt-1-month': 'Less than 1 month',
        '1-3-months': '1–3 months',
        '3-6-months': '3–6 months',
        '6-plus-months': '6+ months / ongoing',
      };
      const budgets = {
        'lt-10k': 'Under $10k',
        '10-25k': '$10k–$25k',
        '25-50k': '$25k–$50k',
        '50k-plus': '$50k+',
        discuss: 'Prefer to discuss',
      };
      const subject = `Project enquiry: ${labels[data.project_type] || 'Project'}`;
      const body = [
        'Hi Henrique,',
        '',
        `Project type: ${labels[data.project_type] || '—'}`,
        `Timeline: ${timelines[data.timeline] || '—'}`,
        `Budget: ${budgets[data.budget] || '—'}`,
        '',
        'A bit more about what we need:',
        '',
      ].join('\n');
      return `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      window.open(toCalendlyUrl(buildParams()), '_blank', 'noopener');
    });

    form.querySelector('.qualifier-email').addEventListener('click', () => {
      if (!form.reportValidity()) return;
      window.location.href = toMailto(buildParams());
    });
  }

  // ============================================================
  // 4. CASE-STUDY PROGRESSIVE REVEAL (use-case pages)
  // ============================================================
  function initCaseStudyReveal() {
    const cases = document.querySelectorAll('.use-case');
    if (!cases.length) return;

    cases.forEach((uc, idx) => {
      uc.classList.add('collapsible');
      const title = uc.querySelector('.use-case-title');
      if (!title) return;

      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'use-case-toggle';
      toggle.setAttribute(
        'aria-expanded',
        idx === 0 ? 'true' : 'false'
      );
      toggle.setAttribute('aria-label', 'Expand case study');
      toggle.innerHTML = '<i class="fas fa-chevron-down" aria-hidden="true"></i>';
      title.appendChild(toggle);

      if (idx !== 0) uc.classList.add('collapsed');

      const doToggle = () => {
        const collapsed = uc.classList.toggle('collapsed');
        toggle.setAttribute('aria-expanded', String(!collapsed));
      };

      title.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        doToggle();
      });
      title.style.cursor = 'pointer';
    });
  }

  // ============================================================
  // 5. DARK MODE TOGGLE
  // ============================================================
  function initDarkModeToggle() {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.dataset.theme = stored;
    }

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'theme-toggle';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.innerHTML =
      '<i class="fas fa-sun" aria-hidden="true"></i><i class="fas fa-moon" aria-hidden="true"></i>';
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
      const current =
        document.documentElement.dataset.theme ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('theme', next);
    });
  }

  // ============================================================
  // INIT
  // ============================================================
  const boot = () => {
    try { initTechFilter(); } catch (e) { console.error(e); }
    try { initTimelineCollapse(); } catch (e) { console.error(e); }
    try { initQualifier(); } catch (e) { console.error(e); }
    try { initCaseStudyReveal(); } catch (e) { console.error(e); }
    try { initDarkModeToggle(); } catch (e) { console.error(e); }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
