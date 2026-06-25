---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

✨✨ **Hello and welcome!** ✨✨

I am a Master of Engineering (M.Eng.) student in the College of Computing and Data Science (CCDS), Nanyang Technological University under the supervision of [Prof. Yong Wang](http://yong-wang.org/).

## Research Interests
I want to build tools that make AI easier to *inspect* 🔍, *control* 🎛️, and *collaborate* 🤝.

<div class="interest-tags">
  <div class="interest-tag-group">
    <button class="interest-tag interest-tag-parent" type="button" data-pub-target="#pub-2026-04-06-reasondiag, #pub-2026-06-01-semiconlens,#pub-2025-08-01-huge-generation">VISxAI</button>
    <div class="interest-tag-children" aria-label="VISxAI subtopics">
      <button class="interest-tag interest-tag-child" type="button" data-pub-target="#pub-2026-04-06-reasondiag">LLM Reasoning Diagnosis</button>
      <button class="interest-tag interest-tag-child" type="button" data-pub-target="#pub-2026-06-01-semiconlens,#pub-2025-08-01-huge-generation">Visual Analytics with AI</button>
    </div>
  </div>
  <div class="interest-tag-group">
    <button class="interest-tag interest-tag-parent" type="button" data-pub-target="#pub-2026-04-06-reasondiag, #pub-2025-08-01-huge-generation">Human-AI Collaboration</button>
    <div class="interest-tag-children" aria-label="Human-AI Collaboration subtopics">
      <button class="interest-tag interest-tag-child" type="button" data-pub-target="#pub-2026-04-06-reasondiag">LLM Reasoning Diagnosis</button>
      <button class="interest-tag interest-tag-child" type="button" data-pub-target="#pub-2025-08-01-huge-generation">Controllable Image Generation</button>
    </div>
  </div>
  <div class="interest-tag-group">
    <button class="interest-tag interest-tag-parent" type="button" data-pub-target="#pub-2026-06-01-semiconlens, #pub-2025-01-01-pretrained-models">AI for Science</button>
    <div class="interest-tag-children" aria-label="AI for Science subtopics">
      <button class="interest-tag interest-tag-child" type="button" data-pub-target="#pub-2026-06-01-semiconlens">2D Semiconductor Discovery</button>
      <button class="interest-tag interest-tag-child" type="button" data-pub-target="#pub-2025-01-01-pretrained-models">Protein &amp; Molecular Design</button>
    </div>
  </div>
</div>

<style>
  .archive > .page__title {
    display: none;
  }

  .page__content {
    font-size: 0.9rem;
    line-height: 1.55;
  }

  .page__content > p {
    margin-bottom: 1.15rem;
    font-size: 0.92rem;
    line-height: 1.55;
  }

  .page__content > h2 {
    margin-top: 1.35rem;
    margin-bottom: 0.55rem;
    font-size: 1.12rem;
    line-height: 1.28;
  }

  .interest-tags {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 0.48rem 0.55rem;
    align-items: flex-start;
    margin: -0.5rem 0 1.25rem;
  }

  .interest-tag-group {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    margin-bottom: 0;
    transition: margin-bottom 0.2s ease;
  }

  .interest-tag-group::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 2;
    width: max(100%, 10rem);
    height: 0.42rem;
  }

  .interest-tag-group:hover,
  .interest-tag-group:focus-within {
    margin-bottom: 3.85rem;
  }

  .interest-tag-children {
    position: absolute;
    top: calc(100% + 0.3rem);
    left: 0.72rem;
    z-index: 3;
    display: grid;
    grid-template-columns: max-content;
    gap: 0.22rem;
    margin: 0;
    padding-left: 0.68rem;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-0.12rem);
    visibility: hidden;
    transition: opacity 0.16s ease, transform 0.16s ease, visibility 0.16s ease;
  }

  .interest-tag-group:hover .interest-tag-children,
  .interest-tag-group:focus-within .interest-tag-children {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    visibility: visible;
  }

  .interest-tag-children::before {
    content: "";
    position: absolute;
    top: -0.3rem;
    bottom: 0.62rem;
    left: 0.16rem;
    border-left: 1px solid #cbd8e8;
  }

  .interest-tags span,
  .interest-tags a,
  .interest-tags button {
    position: relative;
    display: inline-flex;
    align-items: center;
    border: 1px solid #d7e1ec;
    border-radius: 999px;
    padding: 0.16rem 0.5rem;
    background: #f7fafc;
    color: #344052;
    cursor: pointer;
    font-size: 0.74rem;
    font-family: inherit;
    font-weight: 560;
    line-height: 1.35;
    text-decoration: none;
    white-space: nowrap;
  }

  .interest-tags .interest-tag-parent {
    border-color: #b7cce3;
    background: #eef6ff;
    color: #1f4f8f;
  }

  .interest-tags .interest-tag-child {
    padding: 0.12rem 0.44rem;
    background: #fff;
    font-size: 0.7rem;
    font-weight: 540;
  }

  .interest-tags .interest-tag-child::before {
    content: "";
    position: absolute;
    top: 50%;
    right: calc(100% + 1px);
    width: 0.52rem;
    border-top: 1px solid #cbd8e8;
  }

  .interest-tags a:hover,
  .interest-tags button:hover,
  .interest-tags button:focus-visible {
    border-color: #b7cce3;
    background: #eef6ff;
    color: #1f63b5;
    outline: 0;
    text-decoration: none;
  }

  .latest-news {
    margin: 1.2rem 0 1.45rem;
  }

  .page__content .latest-news-title {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    margin: 0 0 0.42rem;
    border-bottom: 0;
    padding-bottom: 0;
    color: #1f1f1f;
    font-size: 1.02rem;
    font-weight: 760;
    line-height: 1.25;
    letter-spacing: 0;
  }

  .page__content .latest-news-title::after {
    content: "";
    flex: 1 1 auto;
    border-top: 1px solid #dfe4ec;
  }

  .news-list {
    display: grid;
    gap: 0.2rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .news-list li {
    display: grid;
    grid-template-columns: 1fr max-content;
    column-gap: 1.15rem;
    align-items: baseline;
    color: #333;
    font-size: 0.84rem;
    line-height: 1.38;
  }

  .news-text {
    min-width: 0;
  }

  .news-date {
    font-style: normal;
    font-weight: 400;
    color: #5b6675;
    font-size: 0.82rem;
    white-space: nowrap;
  }

  .news-list a {
    color: #183aa6;
    text-decoration: none;
  }

  .news-list a:hover {
    color: #102b7a;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.12em;
  }

  @media (max-width: 640px) {
    .interest-tags {
      display: grid;
      gap: 0.5rem;
    }

    .interest-tags button {
      white-space: normal;
      text-align: left;
    }

    .interest-tag-group {
      width: 100%;
    }

    .interest-tag-children {
      gap: 0.28rem;
      grid-template-columns: minmax(0, 1fr);
      width: min(22rem, calc(100vw - 5rem));
    }

    .interest-tag-group:hover .interest-tag-children,
    .interest-tag-group:focus-within .interest-tag-children {
      margin-bottom: 0;
    }

    .interest-tag-group:hover,
    .interest-tag-group:focus-within {
      margin-bottom: 7.6rem;
    }

    .news-list li {
      grid-template-columns: 1fr;
      row-gap: 0.05rem;
    }

    .news-date {
      color: #6b7280;
      font-size: 0.84rem;
    }
  }
</style>

<section class="latest-news" id="news">
  <h2 class="latest-news-title">News</h2>
  <ul class="news-list">
  <li>
      <span class="news-text">Presented my first paper, <a href="https://arxiv.org/abs/2603.21286">ReasonDiag</a> at EuroVis 2026📍.</span>
      <span class="news-date">Jun, 2026</span>
    </li>
    <li>
      <span class="news-text">Two papers, <a href="https://arxiv.org/abs/2603.21286">ReasonDiag</a> and <a href="https://arxiv.org/abs/2605.04067">SemiConLens</a>, were accepted to EuroVis 2026 🎉.</span>
      <span class="news-date">Jun, 2026</span>
    </li>
    <li>
      <span class="news-text"><a href="https://doi.org/10.1016/j.visinf.2025.100262">HuGe</a> was published in <em>Visual Informatics</em>.</span>
      <span class="news-date">Aug, 2025</span>
    </li>
    <li>
      <span class="news-text">I embarked on my M.Eng. journey at NTU 🎓. Looking forward to my research journey!</span>
      <span class="news-date">Jan 2025</span>
    </li>
    <li>
      <span class="news-text">I received the NTU Research Scholarship 🥳!</span>
      <span class="news-date">Oct 2024</span>
    </li>
  </ul>
</section>

## Publications

{% include publications-list.html %}

<script>
  function positionPublicationNote(item) {
    var note = item.querySelector('.pub-note');
    if (!note || window.matchMedia('(max-width: 900px)').matches) return;

    var gap = 14;
    var pad = 16;
    var itemRect = item.getBoundingClientRect();
    var noteWidth = note.offsetWidth || 288;
    var noteHeight = note.offsetHeight || 120;
    var left = itemRect.right + gap;
    var placedLeft = false;

    if (left + noteWidth > window.innerWidth - pad) {
      var leftSide = itemRect.left - gap - noteWidth;
      if (leftSide >= pad) {
        left = leftSide;
        placedLeft = true;
      } else {
        left = Math.max(pad, window.innerWidth - noteWidth - pad);
      }
    }

    var top = itemRect.top + itemRect.height / 2;
    var minTop = pad + noteHeight / 2;
    var maxTop = window.innerHeight - pad - noteHeight / 2;
    top = Math.min(Math.max(top, minTop), maxTop);

    note.style.setProperty('--pub-note-left', Math.round(left) + 'px');
    note.style.setProperty('--pub-note-top', Math.round(top) + 'px');
    note.classList.toggle('is-left', placedLeft);
  }

  function scrollPublicationToCenter(target, behavior) {
    var scroller = document.scrollingElement || document.documentElement;
    var rect = target.getBoundingClientRect();
    var targetTop = scroller.scrollTop + rect.top;
    var targetCenter = targetTop + rect.height / 2;
    var viewportCenter = window.innerHeight / 2;
    var scrollTop = Math.max(targetCenter - viewportCenter, 0);

    scroller.scrollTo({
      top: scrollTop,
      behavior: behavior || 'smooth'
    });
  }

  var publicationHighlightTimeout;
  var publicationNotePositionFrame;
  var publicationHoverSuppressTimeout;

  function suppressPublicationHover() {
    window.clearTimeout(publicationHoverSuppressTimeout);
    document.body.classList.add('is-suppressing-pub-hover');

    publicationHoverSuppressTimeout = window.setTimeout(function() {
      document.body.classList.remove('is-suppressing-pub-hover');
    }, 1400);
  }

  function positionHighlightedPublicationNotes() {
    document.querySelectorAll('.pub-item.is-highlighted').forEach(function(item) {
      positionPublicationNote(item);
    });
  }

  function scheduleHighlightedPublicationNotePosition() {
    if (publicationNotePositionFrame) return;

    publicationNotePositionFrame = window.requestAnimationFrame(function() {
      publicationNotePositionFrame = null;
      positionHighlightedPublicationNotes();
    });
  }

  function highlightPublications(targets) {
    window.clearTimeout(publicationHighlightTimeout);
    suppressPublicationHover();

    document.querySelectorAll('.pub-item.is-highlighted').forEach(function(item) {
      item.classList.remove('is-highlighted');
    });

    targets.forEach(function(target) {
      target.classList.add('is-highlighted');
    });
    scheduleHighlightedPublicationNotePosition();

    publicationHighlightTimeout = window.setTimeout(function() {
      targets.forEach(function(target) {
        target.classList.remove('is-highlighted');
      });
    }, 2600);
  }

  function getPublicationTargets(targetId) {
    if (targetId === 'first' || targetId === '#publications') {
      var firstTarget = document.querySelector('.pub-item');
      return firstTarget ? [firstTarget] : [];
    }

    return targetId.split(',').map(function(selector) {
      return selector.trim();
    }).filter(Boolean).map(function(selector) {
      return document.querySelector(selector);
    }).filter(Boolean);
  }

  function getPublicationTarget(targetId) {
    return getPublicationTargets(targetId)[0] || null;
  }

  document.querySelectorAll('.interest-tags [data-pub-target]').forEach(function(control) {
    control.addEventListener('click', function() {
      var targets = getPublicationTargets(control.getAttribute('data-pub-target'));
      if (!targets.length) return;

      control.blur();
      window.requestAnimationFrame(function() {
        scrollPublicationToCenter(targets[0], 'smooth');
      });
      highlightPublications(targets);
    });
  });

  document.querySelectorAll('a[href$="#publications"]').forEach(function(link) {
    link.addEventListener('click', function(event) {
      var target = getPublicationTarget('first');
      if (!target) return;

      event.preventDefault();
      link.blur();
      window.requestAnimationFrame(function() {
        scrollPublicationToCenter(target, 'smooth');
      });
      highlightPublications([target]);
    });
  });

  window.addEventListener('load', function() {
    if (!window.location.hash) return;
    var target = getPublicationTarget(window.location.hash);
    if (!target) return;

    setTimeout(function() {
      scrollPublicationToCenter(target, 'smooth');
      highlightPublications([target]);
      if (window.location.hash === '#' + target.id) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }, 120);
  });

  document.querySelectorAll('.pub-item').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      positionPublicationNote(item);
    });
    item.addEventListener('focusin', function() {
      positionPublicationNote(item);
    });
  });

  window.addEventListener('scroll', scheduleHighlightedPublicationNotePosition, { passive: true });
  window.addEventListener('resize', scheduleHighlightedPublicationNotePosition);
</script>
