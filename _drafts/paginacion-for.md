---
layout: post
title: La Clave de la Paginación en Jekyll - Cambiando el Objeto de Iteración
author: [Tu Nombre]
tags: [jekyll, liquid, paginacion, tutorial]
---

## 🚫 El Bucle Original (Sin Paginación)

En un sitio Jekyll estándar, la lista completa de todas las publicaciones está disponible a través de la variable global `site.posts`.

Sin paginación, el bucle para mostrar todas las publicaciones es simple:

```liquid
{% raw %}
{# CÓDIGO ORIGINAL (Iterando sobre *todos* los posts) #}
{% for post in site.posts %}
  <a href="{{ post.url }}">{{ post.title }}</a>
{% endfor %}
{% endraw %}
