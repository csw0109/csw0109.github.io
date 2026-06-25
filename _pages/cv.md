---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
  .cv-page {
    max-width: 840px;
    color: #2f343b;
    hyphens: none;
    overflow-wrap: normal;
    word-break: normal;
  }

  .cv-header {
    margin-bottom: 1.8rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #dfe4ec;
  }

  .cv-name {
    margin: 0 0 0.35rem;
    color: #18212f;
    font-size: 1.85rem;
    font-weight: 760;
    line-height: 1.15;
    letter-spacing: 0;
  }

  .cv-role {
    margin: 0 0 0.35rem;
    color: #4b5563;
    font-size: 1rem;
    line-height: 1.5;
  }

  .cv-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem 1rem;
    margin: 0;
    color: #5b6675;
    font-size: 0.9rem;
    line-height: 1.45;
  }

  .cv-links a {
    color: #1f63b5;
    text-decoration: none;
  }

  .cv-links a:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.12em;
  }

  .cv-section {
    margin: 1.55rem 0 0;
  }

  .cv-section h2 {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin: 0 0 0.85rem;
    color: #18212f;
    font-size: 1.2rem;
    font-weight: 760;
    line-height: 1.25;
    letter-spacing: 0;
  }

  .cv-section h2::after {
    content: "";
    flex: 1 1 auto;
    border-top: 1px solid rgba(91, 102, 117, 0.22);
  }

  .cv-item {
    display: grid;
    grid-template-columns: minmax(0, 1fr) max-content;
    gap: 0.75rem 1.2rem;
    margin-bottom: 0.9rem;
  }

  .cv-item-title {
    margin: 0;
    color: #202733;
    font-size: 0.98rem;
    font-weight: 680;
    line-height: 1.45;
  }

  .cv-item-meta,
  .cv-date {
    margin: 0;
    color: #5b6675;
    font-size: 0.88rem;
    line-height: 1.45;
  }

  .cv-date {
    white-space: nowrap;
  }

  .cv-item ul,
  .cv-compact-list,
  .cv-publications {
    margin: 0.35rem 0 0;
    padding-left: 1.05rem;
  }

  .cv-item li,
  .cv-compact-list li,
  .cv-publications li {
    margin-bottom: 0.32rem;
    color: #374151;
    font-size: 0.92rem;
    line-height: 1.55;
  }

  .cv-publications {
    padding-left: 1.25rem;
  }

  .cv-publications strong {
    color: #000;
    font-weight: 650;
  }

  .cv-publications a {
    color: #1f63b5;
    text-decoration: none;
  }

  .cv-publications a:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.12em;
  }

  .cv-skill-grid {
    display: grid;
    grid-template-columns: 9rem minmax(0, 1fr);
    gap: 0.45rem 1rem;
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.55;
  }

  .cv-skill-grid dt {
    color: #202733;
    font-weight: 650;
  }

  .cv-skill-grid dd {
    margin: 0;
    color: #374151;
  }

  @media (max-width: 720px) {
    .cv-item {
      grid-template-columns: 1fr;
      gap: 0.15rem;
    }

    .cv-date {
      white-space: normal;
    }

    .cv-skill-grid {
      grid-template-columns: 1fr;
      gap: 0.05rem;
    }
  }
</style>

<div class="cv-page">
  <header class="cv-header">
    <h1 class="cv-name">Shiwei Chen</h1>
    <p class="cv-role">M.Eng. Student, College of Computing and Data Science, Nanyang Technological University</p>
    <p class="cv-links">
      <a href="mailto:shiwei004@e.ntu.edu.sg">shiwei004@e.ntu.edu.sg</a>
      <a href="https://scholar.google.com/citations?hl=en&user=_tsRz70AAAAJ">Google Scholar</a>
      <a href="https://github.com/csw0109">GitHub</a>
    </p>
  </header>

  <section class="cv-section">
    <h2>Education</h2>
    <div class="cv-item">
      <div>
        <p class="cv-item-title">Nanyang Technological University</p>
        <p class="cv-item-meta">M.Eng., College of Computing and Data Science</p>
        <p class="cv-item-meta">Advisor: Prof. Yong Wang</p>
      </div>
      <p class="cv-date">Jan 2025 - Expected 2027</p>
    </div>
    <div class="cv-item">
      <div>
        <p class="cv-item-title">Sun Yat-sen University</p>
        <p class="cv-item-meta">B.Eng., Intelligence Science and Technology</p>
      </div>
      <p class="cv-date">2020 - 2024</p>
    </div>
  </section>

  <section class="cv-section">
    <h2>Research Interests</h2>
    <ul class="cv-compact-list">
      <li>Visualization and visual analytics for artificial intelligence systems.</li>
      <li>Human-AI interaction, LLM reasoning analysis, and human-AI alignment.</li>
      <li>Interactive systems for scientific discovery, model diagnosis, and data exploration.</li>
    </ul>
  </section>

  <section class="cv-section">
    <h2>Research Experience</h2>
    <div class="cv-item">
      <div>
        <p class="cv-item-title">Graduate Research Student, VIDA Lab</p>
        <p class="cv-item-meta">Nanyang Technological University</p>
        <ul>
          <li>Develop visual analytics systems for AI reasoning diagnosis and scientific discovery.</li>
          <li>Build interactive prototypes for analyzing LLM reasoning traces and model behaviors.</li>
          <li>Advisor: Prof. Yong Wang.</li>
        </ul>
      </div>
      <p class="cv-date">Jan 2025 - Present</p>
    </div>
    <div class="cv-item">
      <div>
        <p class="cv-item-title">Undergraduate Research Assistant</p>
        <p class="cv-item-meta">Sun Yat-sen University</p>
        <ul>
          <li>Designed visualization systems for data analysis tasks.</li>
          <li>Contributed to data processing, model training, and interface implementation.</li>
          <li>Supervisor: Assoc. Prof. Haipeng Zeng.</li>
        </ul>
      </div>
      <p class="cv-date">Winter 2022 - Summer 2024</p>
    </div>
  </section>

  <section class="cv-section">
    <h2>Publications</h2>
    <ol class="cv-publications">
      <li>
        <strong>Shiwei Chen</strong>, Niruthikka Sritharan, Xiaolin Wen, Chenxi Zhang, Xingbo Wang, and Yong Wang.
        "When the Chain Breaks: Interactive Diagnosis of LLM Chain-of-Thought Reasoning Errors."
        <em>Computer Graphics Forum (Proceedings of EuroVis 2026)</em>, 2026.
        <a href="https://arxiv.org/abs/2603.21286">arXiv</a>
      </li>
      <li>
        Kavinda Athapaththu, <strong>Shiwei Chen</strong>, Yuan Fang, Sanchali Mitra, Yee Sin Ang, and Yong Wang.
        "SemiConLens: Visual Analytics for 2D Semiconductor Discovery."
        <em>Computer Graphics Forum (Proceedings of EuroVis 2026)</em>, 2026.
        <a href="https://arxiv.org/abs/2605.04067">arXiv</a>
      </li>
      <li>
        Yuanzhi Zeng, Shuxian Gu, <strong>Shiwei Chen</strong>, Yong Wang, and Haipeng Zeng.
        "TMSeer: Visual analysis of city-level travel modes using cellular signaling data."
        <em>Visual Informatics</em>, 2026.
        <a href="https://doi.org/10.1016/j.visinf.2026.100310">DOI</a>
      </li>
      <li>
        Yuanzhi Zeng, <strong>Shiwei Chen</strong>, Yutian Zhang, Dong Sun, Yong Wang, and Haipeng Zeng.
        "HuGe: Towards Human-controllable image Generation in autonomous driving."
        <em>Visual Informatics</em>, 2025.
        <a href="https://www.sciencedirect.com/science/article/pii/S2468502X25000452">Paper</a>
      </li>
      <li>
        Erdong Zhang, Zilin Pan, Zequan Yao, Tiejun Dong, Guanxing Chen, Tingwen Deng, <strong>Shiwei Chen</strong>, and Calvin Yu-Chian Chen.
        "Pre-trained language models for protein and molecular design."
        <em>Physical Chemistry Chemical Physics</em>, 2025.
        <a href="https://pubs.rsc.org/en/content/articlehtml/2025/cp/d5cp00785b">Paper</a>
      </li>
    </ol>
  </section>

  <section class="cv-section">
    <h2>Honors</h2>
    <div class="cv-item">
      <div>
        <p class="cv-item-title">NTU Research Scholarship</p>
        <p class="cv-item-meta">Nanyang Technological University</p>
      </div>
      <p class="cv-date">2024 - Present</p>
    </div>
    <div class="cv-item">
      <div>
        <p class="cv-item-title">Sun Yat-sen University Scholarship</p>
        <p class="cv-item-meta">Sun Yat-sen University</p>
      </div>
      <p class="cv-date">2020 - 2024</p>
    </div>
  </section>

  <section class="cv-section">
    <h2>Skills</h2>
    <dl class="cv-skill-grid">
      <dt>Programming</dt>
      <dd>Python, JavaScript, HTML/CSS</dd>
      <dt>Visualization</dt>
      <dd>D3.js, Vue.js, interactive visual analytics system design</dd>
      <dt>Data & ML</dt>
      <dd>PyTorch, Pandas, NumPy, LLM APIs, data preprocessing, model training</dd>
      <dt>Research</dt>
      <dd>Literature review, user study support, prototype design, academic writing</dd>
    </dl>
  </section>
</div>
