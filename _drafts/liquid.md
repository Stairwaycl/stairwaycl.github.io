---
layout: post
title: Qué es Liquid y su relación con Ruby y Jekyll
date: 2025-10-27
---

## ¿Qué es Liquid?

**Liquid** es un lenguaje de plantillas *open-source* (código abierto) creado por **Shopify**. No es un lenguaje de programación de uso general, sino una herramienta diseñada específicamente para incrustar **datos dinámicos** dentro de código HTML estático.

---

## Origen y Conexión con Ruby

Liquid fue desarrollado por Shopify en **2006**. La plataforma Shopify está construida principalmente utilizando el *framework* **Ruby on Rails**, que está escrito en el lenguaje de programación **Ruby**.

Liquid fue escrito en **Ruby** para integrarse de manera nativa y eficiente con el *backend* de Shopify. Fue diseñado para ser **seguro**, lo que significa que aísla las plantillas del código principal de la aplicación.

---

## Liquid y Jekyll: Portabilidad

La herramienta Liquid puede usarse en **diversos sistemas Ruby**, incluido Jekyll.

La belleza de que Liquid sea un proyecto *open-source* desarrollado por Shopify y distribuido como una **Gema de Ruby** es que **cualquier proyecto o aplicación escrita en Ruby** puede integrarlo y utilizarlo como su motor de plantillas.

Liquid se hizo popular en el ecosistema Ruby por estas razones:

* **Seguridad:** Fue diseñado para ser un lenguaje de plantillas **no evaluable**, aislando la lógica de los datos y evitando que el código de la plantilla ejecute operaciones inseguras en el servidor (un factor clave para plataformas con contenido generado por el usuario).
* **Facilidad de Uso:** Su sintaxis es sencilla y se enfoca en la presentación de datos (`{% raw %}{{ }}{% endraw %}`) y la lógica básica (`{% raw %}{% %}{% endraw %}`).
* **Portabilidad:** Al ser una gema, solo requiere que se añada al archivo `Gemfile` de cualquier proyecto Ruby para comenzar a usarse.

La gema (el paquete de Ruby) que contiene el lenguaje de plantillas Liquid se llama simplemente **`liquid`** 💎. Aunque Jekyll usa esta gema internamente, no es necesario que la añadas a tu `Gemfile`.
