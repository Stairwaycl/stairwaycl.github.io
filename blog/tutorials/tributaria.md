---
layout: post
---


{% assign tributaria_posts = site.tags.tributaria %}

{% if tributaria_posts %}
  <ul>
    {% for post in tributaria_posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p>No hay posts con la etiqueta 'tributaria'.</p>
{% endif %}
