---
title: "When the Chain Breaks: Interactive Diagnosis of LLM Chain-of-Thought Reasoning Errors"
collection: publications
category: manuscripts
permalink: /publication/2026-04-06-reasondiag
date: 2026-06-01
venue: 'Computer Graphics Forum, Nottingham, UK'
venue_short: 'EuroVis 2026'
authors: '**Shiwei Chen**, [Niruthikka Sritharan](https://niruthikka24.github.io/), [Xiaolin Wen](https://wenxiaolin.com/), Chenxi Zhang, [Xingbo Wang](https://andy-xingbowang.com/), [Yong Wang](https://yong-wang.org/)'
first_author: true
author_position: 1
author_order: "01"
paperurl: 'https://arxiv.org/pdf/2603.21286'
arxivurl: 'https://arxiv.org/abs/2603.21286'
doiurl: 'https://doi.org/10.1111/cgf.70439'
demourl: 'https://csw0109.github.io/reasondiag-demo/'
slidesurl: 'https://docs.google.com/presentation/d/1a5nwc8S8koytkZpei01Deh6TkNg1qWe_/edit?usp=drive_link&ouid=113599180512914146560&rtpof=true&sd=true'
image: '/images/publications/2026-reasondiag-teaser.jpg'
card_image: '/images/publications/2026-reasondiag-teaser.jpg'
excerpt: 'ReasonDiag is an interactive visual analytics system for diagnosing factual and logical errors in LLM Chain-of-Thought reasoning traces.'
citation: 'Chen, S., Sritharan, N., Wen, X., Zhang, C., Wang, X., & Wang, Y. (2026). When the Chain Breaks: Interactive Diagnosis of LLM Chain-of-Thought Reasoning Errors. Computer Graphics Forum, e70439.'
---

<div class="paper-callout">
  <p>
    <strong>TL;DR.</strong> ReasonDiag helps users inspect long Chain-of-Thought traces,
    detect factual and logical errors, and trace how local mistakes propagate through an
    LLM's reasoning process.
  </p>
</div>

## Why This Matters

Current Large Language Models, especially Large Reasoning Models, can produce long
Chain-of-Thought (CoT) traces that expose parts of their reasoning process. These traces
can help users calibrate trust, but they are often verbose, nonlinear, and vulnerable to
factual or logical errors.

ReasonDiag turns these traces into inspectable visual structures. It combines an automated
error-detection pipeline with coordinated visualizations so users can identify suspicious
steps, compare local and global reasoning patterns, and trace possible root causes.

## Key Contributions

- An error-detection pipeline that combines external fact-checking with symbolic formal logic validation to flag step-level factual and logical errors.
- An arc diagram that summarizes reasoning-step distributions and error-propagation patterns across a CoT trace.
- A hierarchical node-link diagram that reveals high-level reasoning flows and premise-conclusion dependencies.
- Evaluation through technical analysis, case studies, and user interviews with 16 participants.

## System Views

ReasonDiag is organized around two complementary levels of inspection:

- A trace-level view that helps users scan the distribution of reasoning steps and error propagation.
- A dependency-level view that helps users follow how premises support conclusions across the reasoning chain.

## Resources

- [Paper](https://arxiv.org/abs/2603.21286)
- [Interactive demo](https://csw0109.github.io/reasondiag-demo/)

## BibTeX

```bibtex
@article{chen2026reasondiag,
  title={When the Chain Breaks: Interactive Diagnosis of LLM Chain-of-Thought Reasoning Errors},
  author={Chen, Shiwei and Sritharan, Niruthikka and Wen, Xiaolin and Zhang, Chenxi and Wang, Xingbo and Wang, Yong},
  journal={arXiv preprint arXiv:2603.21286},
  year={2026}
}
```
