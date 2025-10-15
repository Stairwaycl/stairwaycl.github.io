---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
---

<h1>
  {{ "Logos Stairway" | uppercase }}
</h1>


<div class="logo-gallery">
  {% assign image_files = site.static_files | where: "image", true %}
  {% for myimage in image_files %}
    <img class="gallery-item" src="{{ myimage.path }}" alt="{{ myimage.name }}" width="100px">
  {% endfor %}
</div>
