---
layout: post
title: Diseño Gráfico
---
{% assign design_posts = site.tags.design %}

{% if design_posts %}
  <ul>
    {% for post in design_posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p>No hay posts con la etiqueta 'design'.</p>
{% endif %}
