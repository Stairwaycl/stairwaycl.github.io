---
layout: post
title: El Error de 'for' más Común en Jekyll (site.tags)
date: 2025-10-27
tag: jekyll
---

## 🚫 El Error: Iterar sobre una Etiqueta Específica

Muchos desarrolladores principiantes de Jekyll cometen este error al intentar crear una lista de posts para una etiqueta en específico, por ejemplo, **'ubuntu'**:

Quieren que el resultado sea un título de etiqueta y una lista de posts, por lo que escriben un bucle anidado similar al que usan para listar *todas* las etiquetas del sitio:

```liquid
{% raw %}
{# CÓDIGO INCORRECTO: Mezcla de sintaxis #}
{% for tag in site.tags.ubuntu %}
  <h3>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
{% endraw %}
