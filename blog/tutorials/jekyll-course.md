---
layout: post
title: Curso de Jekyll
---

{% assign jekyll_posts = site.tags.jekyll %}

{% if jekyll_posts %}
  <ul>
    {% for post in jekyll_posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p>No hay posts con la etiqueta 'jekyll'.</p>
{% endif %}

-----------------------

Iniciando: ¿Cuáles son los componentes esenciales y el flujo de
trabajo para configurar un sitio estático básico con Jekyll?
----

Para comenzar con Jekyll, siga el [tutorial oficial](https://jekyllrb.com/docs/). Recomendamos usar VS Code para seguir este tutorial.

Abra su terminal y genere un nuevo proyecto:

<div class="highlight">
  bundle exec jekyll new```
</div>



Si quiere hacer un blog, necesitará agregar un archivo ```"_draft"``` en la raíz del proyecto, como se enseña en la documentación de Jekyll [posts/#drafts](https://jekyllrb.com/docs/posts/#drafts)

Cómo usar Bootstrap en Jekyll
----

Buscar y copiar la ultima versión de la gema de bootstrap según salga en el sitio oficial en RubyGems, agregándola a su Gemfile dentro de los plugins con la gema github-pages, si es que hará deploy a Github, como haremos en este tutorial.

Ir a la terminal en el proyecto y ejecutar:

```bundle```

Luego, agregar en ```head``` en el ```default``` del ```layout``` del proyecto el CDN


Agregar archivos
-----

Si se quiere agregar imagenes o pdf se usa ```[texto]{path}```

Liquid
-----

Creado por Shopify. Sirve para escribir ruby en Jekyll
