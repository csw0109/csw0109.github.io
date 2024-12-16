---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* M.Eng. CCDS, Nanyang Technological University, 2027(expected)
* B.Eng. in Intelligence Science and Technology, Sun Yat-sen University, 2024

Work experience
======
* Winter 2022 - Summer 2024: Undergraduate Research Assistant
  * Sun Yat-sen University
  * Duties included: Visualization, 
  * Supervisor: Professor Haipeng Zeng
  
Skills
======
* Python
  * Pytorch
  * Pandas
  * Numpy
* Javasript
  * D3
  * Node
  * Vue

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
