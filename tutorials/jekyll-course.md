---
layout: post
title: Curso de Jekyll
---

Iniciando
----

Para comenzar con Jekyll, siga el [tutorial oficial](https://jekyllrb.com/docs/). Recomendamos usar VS Code para seguir este tutorial.

Abra su terminal y genere un nuevo proyecto:

```bundle exec jekyll new```

Si quiere hacer un blog, necesitará agregar un archivo ```"_draft"``` en la raíz del proyecto, como se enseña en la documentación de Jekyll [posts/#drafts](https://jekyllrb.com/docs/posts/#drafts)

Cómo usar Bootstrap en Jekyll
----

Buscar y copiar la ultima versión de la gema de bootstrap según salga en el sitio oficial en RubyGems, agregándola a su Gemfile dentro de los plugins con la gema github-pages, si es que hará deploy a Github, como haremos en este tutorial.

Ir a la terminal en el proyecto y ejecutar:

```bundle```

Luego, agregar en ```head``` en el ```default``` del ```layout``` del proyecto el CDN
