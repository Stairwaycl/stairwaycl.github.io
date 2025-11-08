---
layout: post
---

{% assign ubuntu_posts = site.tags.ubuntu %}

{% if ubuntu_posts %}
  <ul>
    {% for post in ubuntu_posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p>No hay posts con la etiqueta 'ubuntu'.</p>
{% endif %}
