---
layout: default
title: About
---
# Stairway SpA | Desarrollo y Diseño Web

# Staff

{% for author in site.authors %}
  <lu>
    <h2> {{ author.name }} </h2>
    <h4> {{ author.position }} </h4>
    <p> {{ author.content | markdownify }} </p>
  </lu>
{% endfor %}
