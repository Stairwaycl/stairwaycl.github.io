---
layout: post
title: "¿Por qué desaparece mi Favicon en los Posts de Jekyll? La Solución de las Rutas Absolutas"
date: 2025-10-22 10:00:00 -0300
excerpt: Descubre la causa común por la que el favicon de tu sitio Jekyll deja de funcionar en las páginas de tus posts y cómo solucionarlo con una ruta absoluta o el filtro 'relative_url'.
---

# El Misterio del Favicon Desaparecido en los Posts de Jekyll

Si has notado que el pequeño ícono de tu sitio web (el `favicon.ico`) se muestra perfectamente en la página principal (`index.html` o `blog.html`), pero desaparece misteriosamente cuando navegas a una página individual de un post, no estás solo.

Este es un problema extremadamente común que tiene una solución simple, pero crucial: **un error de ruta (path) relativa vs. absoluta.**

---

## La Causa del Problema

Jekyll, al ser un generador de sitios estáticos, construye la estructura de carpetas de forma que cada *post* tiene su propia URL anidada (ej: `/aaaa/mm/dd/mi-post/`).

### Lo que sucede con las Rutas Relativas

Si en tu archivo `_layouts/default.html` tienes el código del favicon así:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
El navegador interpreta esta ruta de la siguiente manera:

En la Raíz del Sitio (tusitio.com/): La ruta funciona, ya que busca en tusitio.com/favicon.ico.

En un Post (tusitio.com/posts/mi-post/): El navegador, al ver una ruta relativa, asume que debe buscar el archivo dentro de la carpeta actual, intentando acceder a tusitio.com/posts/mi-post/favicon.ico. El archivo no está allí, ¡y el favicon desaparece!

La Solución: Rutas Absolutas
Para que el favicon se cargue sin importar la profundidad de la URL del post, debes indicarle al navegador que siempre inicie la búsqueda desde la raíz de tu dominio, usando el prefijo slash (/).

Paso 1: Ubicación del Archivo
Asegúrate de que tu archivo favicon.ico esté ubicado en el directorio raíz de tu proyecto Jekyll (al mismo nivel que _config.yml).

Paso 2: Corrección en _layouts/default.html
Edita el archivo de layout principal y añade un slash inicial (/) a la ruta:

Solución 1: Ruta Absoluta Simple

HTML

<link rel="icon" type="image/x-icon" href="/favicon.ico">
Solución Avanzada: Usando el Filtro relative_url (Recomendado)
Para sitios alojados en subdirectorios (como algunas configuraciones de GitHub Pages), la forma más robusta y compatible con Jekyll es usar el filtro relative_url:

Solución 2: Uso del Filtro Liquid

HTML

<link rel="icon" type="image/x-icon" href="{{ '/favicon.ico' | relative_url }}">
Al implementar cualquiera de estas soluciones (siendo la segunda la más recomendada para la compatibilidad con todos los entornos de Jekyll), tu favicon se mostrará correctamente en la barra del navegador, ¡sin importar dónde se encuentre el visitante de tu blog!
