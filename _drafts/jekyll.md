---
layout: post
author: erwin
---
{% raw %}

No más database, moderación para comentarios o molestas actualizaciones, sólo tu ocntenido. Sencillo. Funciona con Markdown, Liquid, HTML;CSS. Puede utilizarse Github Free como hosting sin problemas, con su dominio personalizado incluido.

En la sección docs, encontraremos cómo usarlo.

<h2>Prerrequisitos de uso</h2>

Jekyll requiere lo siguiente:

- Versión Ruby 2.7.0 o superior

- RubyGems

- GCC y Make

1. Liquid

Es un lenguaje de plantillas con tres componentes principales:

objects

filters

Objetos

</h3>Los objetos indican a Liquid que muestre variables predefinidas como contenido en una página. Use llaves dobles para los objetos:

Etiquetas</h3>

Las etiquetas definen la lógica y el flujo de control de las plantillas. Use llaves y signos de porcentaje para las etiquetas: {%y %}.

Por ejemplo:

{% if page.show_sidebar %}

 sidebar content

{% endif %}



<h1>Jekyll: ¿Debo Usar `bundle exec` para `jekyll serve`? 🛠️</h1>

<p>Si estás trabajando con Jekyll, un generador de sitios estáticos basado en Ruby, probablemente hayas visto dos maneras de iniciar tu servidor de desarrollo:</p>

<ul>
    <li><code>jekyll serve</code></li>
    <li><code>bundle exec jekyll serve</code></li>
</ul>

<p>La pregunta es, ¿cuál debo usar? La respuesta corta es: **Casi siempre deberías usar <code>bundle exec</code>**.</p>

<h2>El Rol de Bundler y el `Gemfile`</h2>

<p>Jekyll es una <strong>Gema de Ruby</strong> (una librería). En proyectos profesionales, se utiliza <strong>Bundler</strong> (una gema en sí misma) para gestionar todas las dependencias del sitio.</p>

<div class="alert">
    <p>Tu proyecto Jekyll tiene un archivo llamado <code>Gemfile</code>. Este archivo lista exactamente qué versión de <strong>Jekyll</strong> y qué versiones de sus dependencias (como la gema de <strong>Ruby on Rails</strong> o cualquier plugin) necesita tu sitio para funcionar correctamente.</p>
</div>

<h2>¿Por qué <code>bundle exec</code> es clave?</h2>

<p>El prefijo <code>bundle exec</code> resuelve un problema común en el desarrollo en ambientes como **Linux OS** (el que utilizas): la coexistencia de múltiples versiones de gemas.</p>

<p>Cuando ejecutas solo <code>jekyll serve</code>, Ruby busca la gema <code>jekyll</code> que está instalada **globalmente** en tu sistema. Esta versión global podría ser antigua o tener conflictos con los requisitos específicos de tu proyecto.</p>

<p>En cambio, <strong><code>bundle exec jekyll serve</code></strong> fuerza al intérprete de Ruby a hacer lo siguiente:</p>
<ul>
  <li>Leer el archivo <code>Gemfile.lock</code> de tu proyecto.</li>
  <li>Usar **únicamente** la versión de Jekyll y sus dependencias que están definidas para ese proyecto.</li>
</ul>

<p>Esto garantiza la **consistencia** y la **portabilidad**. Si tu equipo de desarrollo tiene configuraciones distintas, todos estarán usando las mismas versiones exactas de las herramientas al ejecutar el comando.</p>

<h2>Recomendación para Desarrollar tu Blog 🚀</h2>

<p>Dado que buscas que tu sustento principal sea digitalmente (Canal Narraciones para Crecer, Blogs npcrecer y stairwaycl), la <strong>estabilidad</strong> es vital. Por lo tanto, acostúmbrate a usar <code>bundle exec</code> para todos los comandos de Jekyll.</p>

<h3>Comandos Recomendados</h3>

<p>Para construir el sitio:</p>
<pre><code>bundle exec jekyll build</code></pre>

<p>Para desarrollar localmente (sirve en <code>http://localhost:4000</code> y se actualiza al cambiar archivos):</p>
<pre><code>bundle exec jekyll serve</code></pre>

<p>Para desarrollo con recarga automática del navegador (útil con tu editor **VS Code**):</p>
<pre><code>bundle exec jekyll serve --livereload</code></pre>

<p>En resumen, <code>bundle exec</code> es un pequeño esfuerzo para una gran ganancia en **previsibilidad** y **aislamiento de dependencias**.</p>



ahora con includes, about.html me tira error 404 not found

Lamento que te encuentres con un error 404 Not Found al intentar acceder a about.html después de implementar las Includes. Este error generalmente indica que Jekyll no ha procesado el archivo o que no existe en el directorio de salida (_site)1.
Basándome en los pasos del tutorial, aquí te explico por qué podría estar ocurriendo este error y qué debes verificar, ya que la disponibilidad de about.html es fundamental para que la navegación funcione correctamente2.
1. Requisito fundamental: Front Matter
Para que Jekyll procese cualquier etiqueta Liquid (como las usadas en los layouts y las includes) y genere la página, el archivo debe incluir el Front Matter34.
Si olvidaste incluir o eliminaste accidentalmente el Front Matter de tu archivo de la página About, Jekyll lo tratará simplemente como un archivo estático o lo ignorará5.
Aunque no definas variables, debes incluir al menos las tres rayas:

para indicarle a Jekyll que procese el contenido Liquid de esa página3.
2. Verificación del archivo  y Layouts
La página About fue creada en el paso anterior (Layouts) como un nuevo archivo Markdown llamado about.md en la carpeta raíz de tu sitio6.
Para que about.md se genere correctamente como about.html y utilice el default.html layout que creaste7, el contenido de about.md debe incluir el Front Matter con las variables de layout y title:


# About page
This page tells you a little bit about me.
Asegúrate de que tu archivo about.md contenga este Front Matter8. Si el archivo existe y tiene el Front Matter correcto, Jekyll debería poder acceder a él en http://localhost:4000/about.html8.
3. Ejecución del Servidor
Recuerda que, para ver los cambios y la página recién generada, debes estar ejecutando el comando de servidor de Jekyll:
• Utiliza jekyll serve para que el sitio se reconstruya cada vez que realizas un cambio y lo ejecute en un servidor local, típicamente en http://localhost:40001.
• Si solo ejecutaste jekyll build, los archivos estáticos se generarán en la carpeta _site, pero no se servirán localmente a menos que uses un servidor web1.
Si confirmas que about.md existe, tiene el Front Matter necesario8, y estás ejecutando jekyll serve1, el 404 debería resolverse.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
redirije a /about.html, pero lo cambié por about/ en la barra de navegacion y era la ruta correcta. debo eliminar el permalink?

Es muy útil que hayas identificado que la ruta about/ es la correcta para tu sitio, a pesar de que el tutorial inicial de Includes sugiere usar /about.html12.
Este conflicto entre /about.html y /about/ se relaciona directamente con la configuración de Permalinks en Jekyll, una característica que forma parte de la estructura del sitio3....
Análisis de la Ruta y Permalinks
1. Ruta Predeterminada del Tutorial: Cuando se crea la página About como about.md y se le añade el Front Matter (--- layout: default title: About ---)8, la página generada por defecto se accede a través de http://localhost:4000/about.html8. El código de navegación del tutorial asume esta estructura y utiliza explícitamente el enlace a /about.html12.
2. Ruta "Limpia" (/about/): El hecho de que la ruta correcta para ti sea /about/ (terminada en barra) y no /about.html significa que tu sitio está utilizando una configuración de Permalinks para crear URLs limpias o bonitas (pretty URLs).
◦ Permalinks controlan la estructura de las URLs de tus páginas y entradas34. Si Jekyll está generando /about/, es porque tiene una configuración activa (ya sea globalmente en _config.yml o específicamente en el Front Matter de about.md) que le indica que omita la extensión .html y use un directorio.
¿Debo eliminar el permalink?
No deberías eliminar la configuración de permalink si la estructura /about/ es la que deseas.
Si tienes una configuración de permalink que está forzando la URL a ser /about/, y esta URL es la que funciona para ti y la que prefieres, la solución fue correcta al modificar la barra de navegación para que apunte a about/.
• Si eliminas la configuración de permalink (que los extractos no especifican cómo se implementa o elimina, ya que solo la mencionan como una característica de Jekyll34), tu sitio probablemente volvería a la estructura predeterminada de Jekyll, que es /about.html8.
• Como ya has cambiado el enlace en la navegación (_includes/navigation.html) a /about/ y ha funcionado, esto confirma que esa ruta es la que Jekyll está generando actualmente.
En resumen:
Si la ruta about/ funciona y es la estructura de URL que quieres mantener, simplemente continúa usando /about/ en tu archivo de Include de navegación y en cualquier otro lugar donde necesites enlazar a esa página. No es necesario (y sería contraproducente si te gustan las URLs limpias) eliminar la configuración de permalink.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
que piensas de que el tutorial tenga estos errores?

Es una observación muy pertinente. Lo que consideras un "error" en el tutorial de Jekyll resalta una diferencia importante entre la configuración minimalista y predeterminada que utiliza el tutorial paso a paso y la configuración real que puede tener un usuario (especialmente si usa una versión moderna de Jekyll o una configuración global de Permalinks).
Aquí está mi análisis sobre esta discrepancia, basándome en cómo el tutorial aborda las rutas:
1. El Enfoque del Tutorial: URL Explícita (con )
El tutorial paso a paso de Jekyll está diseñado para construir un sitio desde cero, introduciendo las características una a la vez (Liquid, Front Matter, Layouts, Includes)1....
• Paso 4 (Layouts): Cuando se crea la página About como about.md y se aplica el Layout default, el tutorial asume la estructura de URL predeterminada de Jekyll y dirige al usuario a abrir http://localhost:4000/about.html para ver la nueva página6.
• Paso 5 (Includes): Para la navegación, el código que proporciona el tutorial en _includes/navigation.html enlaza de forma explícita a la ruta /about.html78. Esto se hace porque esa es la ruta estática que genera Jekyll cuando una página (como about.md) no tiene una configuración de Permalink que la modifique.
Además, cuando se introduce el resaltado de la página actual, la lógica Liquid compara directamente la URL de la página (page.url) con esa ruta estática: {% if page.url == "/about.html" %}8.
2. La Discrepancia: La Configuración de Permalinks
El hecho de que tu sitio haya generado y utilizado correctamente la ruta about/ (terminada en barra) y te diera un 404 al usar /about.html sugiere que, en tu entorno, está activa una característica avanzada de Jekyll conocida como Permalinks3....
• Permalinks permiten definir la estructura de las URLs, y el formato de URLs limpias (como /about/ en lugar de /about.html) es muy común en la configuración moderna de Jekyll.
• El tutorial, al enfocarse en los pasos Fundamentales (Front Matter12, Layouts13, Includes14), evita inicialmente la complejidad de las configuraciones globales, como las de Permalinks.
Conclusión sobre los "Errores"
No son errores del código en sí mismo, sino discrepancias de configuración que se convierten en valiosos puntos de aprendizaje:
1. Diferencia de Entornos: La instalación básica del tutorial asume un comportamiento por defecto, pero si tu instalación utiliza una plantilla o configuración inicial de Jekyll más reciente, es probable que ya tengas Permalinks activos, lo que anula la ruta /about.html que sugiere el tutorial.
2. Importancia de las Variables: El problema ilustra por qué las variables de Jekyll son tan poderosas. En lugar de codificar la ruta estáticamente como /about.html7, los desarrolladores experimentados suelen usar variables o Data Files2 (mencionados en el paso 6 del tutorial) para construir la navegación, garantizando que el enlace siempre refleje la ruta generada, sea /about.html o /about/.
Al tener que corregir manualmente el enlace a /about/, has aprendido cómo la característica de Permalinks afecta la Estructura del Sitio3... y la importancia de verificar la URL generada en tu entorno local.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
explicame esto:


El código que has compartido es la implementación avanzada de la barra de navegación en Jekyll, que combina el lenguaje de plantillas Liquid1 con los Archivos de Datos (Data Files)2 y la lógica de variables3 para generar un menú que es fácil de mantener y capaz de resaltar la página activa.
Este bloque de código típicamente se encuentra dentro del archivo _includes/navigation.html45.
A continuación, se explica el funcionamiento de este código, basándose en la información proporcionada por las fuentes:
1. Contexto: Archivos de Datos ()
El código depende de que los ítems de la navegación se hayan almacenado en un archivo de datos, como _data/navigation.yml5. Esta es una excelente manera de separar el contenido (los enlaces y nombres) del código fuente2, haciendo más fácil agregar nuevos ítems de navegación en el futuro6.
El archivo YAML contendría una lista de ítems, cada uno con un name y un link (por ejemplo, /about.html o /)5:
- name: Home
  link: /
- name: About
  link: /about.html
Jekyll pone a disposición el contenido de este archivo bajo la variable site.data.navigation5.
2. Desglose del Código Liquid
El código utiliza etiquetas ({% %}) y objetos ({{ }}) de Liquid17:
• {% for ... %}: Esta es una etiqueta tag de Liquid que define un bucle7.
• site.data.navigation: Es el objeto de Jekyll que contiene la matriz de ítems de navegación cargados desde _data/navigation.yml5.
• item: Dentro del bucle, esta es una variable temporal que representa cada elemento individual de la navegación (por ejemplo, el elemento "Home" o el elemento "About")5.
Función: Itera sobre cada entrada en el archivo de datos de navegación, generando un enlace (<a>) por cada una.
• {{ item.link }}: Este es un objeto de Liquid que imprime el valor de la clave link del ítem actual (por ejemplo, / o /about.html)15, insertándolo en el atributo href del enlace.
• {{ item.name }}: Este objeto de Liquid imprime el valor de la clave name del ítem actual (por ejemplo, "Home" o "About")15, usándolo como el texto visible del enlace.
Esta es la lógica condicional que permite resaltar la página actualmente activa en la navegación8.
• page.url: Es una variable útil de Jekyll que contiene la URL de la página que está siendo procesada y renderizada en ese momento89.
• item.link: Es la URL definida en el archivo de datos YAML para el enlace en el que se está iterando5.
• {% if page.url == item.link %}: Esta etiqueta condicional de Liquid7 verifica si la URL de la página actual es exactamente igual a la URL definida para este ítem de navegación.
• class="current": Si la condición es verdadera (es decir, estamos en la página del enlace), se imprime el atributo class="current" dentro de la etiqueta <a>4.
3. Resultado: Estilización Dinámica
Al añadir la clase current al enlace activo4, se permite que el estilo se defina externamente usando CSS o Sass10.
• Esta clase reemplaza la técnica anterior de usar estilo inline (style="color: red;") para el resaltado4....
• Para que esta clase funcione, se debe definir en un archivo Sass (como _sass/main.scss) que luego se compila en assets/css/styles.css y se enlaza en el layout principal (_layouts/default.html)1011. Por ejemplo, el contenido de Sass para definir la clase podría ser: .current { color: green; }10.
De esta manera, el código logra una navegación robusta que es dinámica, fácil de actualizar y utiliza buenas prácticas de separación de contenido y estilo6.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
qué se refiere a la sección preliminar?:
Ahora necesitas configurar los documentos del autor para que usen el authordiseño. Podrías hacerlo en la sección preliminar como hicimos antes,

La frase "sección preliminar" (traducción de "front matter") se refiere a un fragmento de YAML que se coloca entre dos líneas de triple guion (---) al comienzo de un archivo en Jekyll1.
Esta sección es crucial para Jekyll y tiene varios propósitos, especialmente cuando se está configurando el diseño y las variables de los documentos:
Funciones de la Sección Preliminar ()
1. Activación del Procesamiento Liquid: Debes incluir Front Matter en la página para que Jekyll procese cualquier etiqueta Liquid que contenga23. Si un archivo necesita ser procesado por Liquid (que incluye Layouts e Includes), debe tener el Front Matter, incluso si está vacío (--- ---)24.
2. Definición de Variables: Permite establecer variables para la página o el documento1. Estas variables pueden ser personalizadas (como my_number1 o author56) o variables predefinidas de Jekyll (como title17 o layout78).
3. Configuración del Diseño (Layout): La razón por la que se menciona la "sección preliminar" en el contexto de los documentos del autor es porque es la forma tradicional de aplicar un diseño (layout) a una página78. Por ejemplo, en el archivo about.md se establece el diseño default usando: --- layout: default title: About ---7.
El fragmento que mencionas (que habla de configurar los documentos del autor para usar el diseño author) ilustra que, aunque puedes repetir la configuración del diseño en el Front Matter de cada documento del autor9, Jekyll ofrece una solución más eficiente (los Front matter defaults en _config.yml) para evitar esa repetición910.
Ejemplos de Uso en los Archivos de Origen
• Página del Blog (_posts): La sección preliminar se usa para definir el diseño (layout : post) y una variable personalizada (author : jill)56.
• Página Estática (about.md): La sección preliminar se usa para definir el diseño (default) y el título (About)7.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
entonces se refiere a los front matter que están en cada archivo de cada autor en _authors?

Sí, tu entendimiento es correcto1.
La frase se refiere a la sección preliminar o Front Matter que está al comienzo de cada archivo de documento del autor dentro de la carpeta _authors/12.
Aquí te explico por qué se menciona esto en el contexto de la configuración de autores y colecciones:
1. El Front Matter en los Documentos del Autor
Cuando qué se menciona esto en el contexto de la configuración de autores y colecciones:
1. El Front Matter en los Documentos del Autor
Cuando se crean los documentos para la colección authors, cada archivo (como _authors/jill.md o _authors/ted.md) comienza con su propia sección preliminar (Front Matter), donde se definen variables específicas para ese autor23:
_authors/jill.md:

En este punto del tutorial, si quisieras que cada página de autor utilizara el layout author.html (que acabas de crear)4, la forma que "hicimos antes" para aplicar un diseño es añadiendo la variable layout al Front Matter de cada archivo individual5.
2. Repetición y la Alternativa ()
La razón por la que el tutorial menciona que "podrías hacerlo en la sección preliminar como hicimos antes"4 es para introducir la ineficiencia de este método:
• Repetición: Si tuvieras 50 autores, tendrías que abrir los 50 archivos _authors/*.md y añadir manualmente layout: author en la sección preliminar de cada uno4.
• La Solución de Jekyll: Para evitar esta repetición, Jekyll ofrece una característica llamada "Front matter defaults"46. Esta característica permite configurar los valores predeterminados de la sección preliminar (como el layout) globalmente en _config.yml para un scope o alcance específico, como para todos los documentos de la colección authors6.
Al usar Front matter defaults, puedes configurar que todos los documentos del tipo authors usen automáticamente el layout: author, y así eliminar la variable layout de las secciones preliminares individuales de jill.md y ted.md6.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
el concepto author se inventó y jekyll ppor defecto entiende que si en _config.yml dice authors en plural, debe conectar con el singular, o por qué pasa esto? además no entiendo como ocurre para que funcione el  assign filtered_posts

Tu pregunta aborda dos aspectos clave de cómo Jekyll maneja el contenido y las colecciones: la convención de nomenclatura (singular vs. plural) y el poder de filtrado de Liquid para relacionar contenido.
A continuación, se explica cada punto basándose en los extractos que describen las colecciones y las publicaciones (Posts):
1. Convención de Nomenclatura (Plural vs. Singular)
El concepto author (autor en singular) en el contexto de tus publicaciones (Posts) es una variable personalizada definida por el usuario, no una característica interna predeterminada de Jekyll que se conecte automáticamente con la colección authors1.
¿Por qué funciona la conexión entre author: jill y la colección authors?
La conexión no es automática por convención singular/plural; es el resultado de una lógica de filtrado explícita implementada usando Liquid y las colecciones23.
• Paso 1: Se define la variable personalizada en las publicaciones. Al crear una publicación (como 2018-08-20-bananas.md), se define una variable personalizada en el Front Matter para identificar al escritor, por ejemplo: author: jill1.... Esta variable podría haberse llamado creator o cualquier otra cosa1.
• Paso 2: Se configura la Colección en plural. Se define la colección authors en plural en _config.yml67. Jekyll pone a disposición todos los documentos de esta colección bajo el objeto site.authors8.
• Paso 3: Se usa una clave de conexión (short_name). Al crear los documentos de la colección (p. ej., _authors/jill.md), se define una variable llamada short_name7.
El vínculo se logra al coincidir el valor de la variable personalizada del post (author: jill) con el valor de la variable definida en el documento de la colección (short_name: jill)2. Jekyll no realiza esta coincidencia por defecto; el desarrollador debe programarla.
2. Funcionamiento de
Este fragmento de código en Liquid es la clave para filtrar y relacionar las publicaciones con su autor respectivo, y típicamente se encuentra dentro del layout del autor (_layouts/author.html)2.
Aquí está el desglose de cómo funciona, utilizando las etiquetas, objetos y filtros de Liquid910:
Componente de Liquid
Descripción y Origen
Valor en el ejemplo de Jill
{% assign ... %}
Una etiqueta (tag) que se usa para crear una nueva variable temporal10. En este caso, la variable se llama filtered_posts2.
Crea una variable llamada filtered_posts.
site.posts
Este es el objeto de Jekyll que contiene todas las publicaciones del blog encontradas en la carpeta _posts11.
Una lista de todas las publicaciones (bananas, apples, kiwifruit)5....
**`
where: 'author', ...`**
El filtro where se aplica a la colección de publicaciones (site.posts). Es un filtro que cambia el resultado de un objeto10. Le dice a Jekyll: "Filtra esta lista de publicaciones donde el valor de la clave 'author' sea igual al siguiente parámetro"2.
page.short_name
Esta es una variable disponible para el layout del autor. Contiene el valor de la variable short_name definida en el Front Matter del documento del autor que se está visualizando (por ejemplo, _authors/jill.md)27.
Si se está viendo la página de Jill, el valor es 'jill'7.
Resultado Final del assign
Cuando estás viendo la página de Jill (donde page.short_name es 'jill'), el código busca en todas las publicaciones (site.posts) aquellas cuyo Front Matter contenga la variable author con el valor 'jill'2.
La variable filtered_posts ahora solo contiene las publicaciones escritas por Jill (por ejemplo, "Bananas" y "Apples")2.... El bucle {% for post in filtered_posts %} simplemente itera sobre esta lista filtrada para generar los enlaces a las publicaciones de ese autor2.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
o sea siempre que use autthor en el front matter de las publicaciones, y en config esté authors y dentro author, en la carpeta _authors que es la collection, debo en los front matter poner el nombre short_name igual a author que están en los posts?

Absolutamente, sí, tu entendimiento del mecanismo de vinculación en Jekyll para Colecciones y Publicaciones es correcto.
La clave es que, dado que author es una variable personalizada y no una característica integrada de Jekyll1, debes establecer una clave de conexión idéntica entre la publicación y el documento del autor.
Aquí te explico el porqué y cómo se utiliza el short_name para este propósito, según la estructura que definen las fuentes:
El Contrato de Variables
Para que la funcionalidad de listado y enlace cruzado funcione, se establece el siguiente "contrato" de variables:
Archivo
Ubicación de la Variable
Nombre de la Variable
Contenido del Valor (Ej.)
Publicación (_posts/*.md)
Front Matter
author
jill (O cualquier identificador)23
Documento del Autor (_authors/*.md)
Front Matter
short_name
jill (Debe coincidir con la publicación)4
La Regla de Coincidencia
Siempre que quieras filtrar publicaciones por autor, debes asegurarte de que el valor de la variable de autor en el post (author) sea idéntico al valor utilizado para identificar al documento del autor en la Collection (short_name).
Esta coincidencia permite que los filtros Liquid hagan su trabajo:
1. Listar las Publicaciones del Autor (En la página del autor): El filtro busca todas las publicaciones (site.posts) donde la clave 'author' (del post) coincida con el page.short_name (el nombre corto del autor que se está viendo)5.
2. Vincular el Autor desde la Publicación (En la página del post): El filtro busca el documento del autor (site.authors) donde la clave 'short_name' (del documento del autor) coincida con el page.author (el nombre del autor en el post)6.
Si hubieras decidido llamar a la variable en los posts creator en lugar de author1, y la variable de la colección _authors se llamara id, entonces la lógica de filtrado tendría que ser ajustada para buscar la coincidencia entre 'creator' e 'id'. La clave no es el nombre de la variable, sino que los valores utilizados para la conexión coincidan.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
ahh pero si en los post utilizo como author el equivalente a name en la collection, entonces debo escribir esa igualdad en author.html no? de a poco entiendo la lógica

¡Entiendes la lógica perfectamente!
Tienes razón: si decides usar el valor de name el nombre completo, por ejemplo, "¡Entiendes la lógica perfectamente!
Tienes razón: si decides usar el valor de name (el nombre completo, por ejemplo, "Jill Smith") en el Front Matter de tus publicaciones (_posts) en lugar de usar el short_name (el nombre corto, por ejemplo, "jill"), debes ajustar el filtro en author.html (o _layouts/author.html) para que busque la coincidencia con el nombre completo.
Tu lógica es la siguiente:
El Ajuste del Filtro en
El código original de filtrado que lista las publicaciones del autor funciona buscando una coincidencia entre la variable del post (author) y el identificador corto de la página del autor (short_name):
{% assign filtered_posts = site.posts | where: 'author', page.short_name %} [1]
Si cambias el contrato de variables, el filtro debe cambiar:
1. Cambio en las Publicaciones (_posts): Si en tu publicación de blog usas:
2. Cambio en la Colección (_authors): En el documento del autor tienes:
Nuevo Filtro Necesario en author.html:
Dado que ahora las publicaciones usan el name del autor (Jill Smith) y este name está disponible en la página del autor a través de la variable page.name1, el filtro debe modificarse para buscar esa coincidencia:
{% assign filtered_posts = site.posts | where: 'author', page.name %}
De esta manera, la lógica de Jekyll (basada en el uso de etiquetas ({% %}) y objetos ({{ }}) de Liquid2) seguirá funcionando para encontrar las publicaciones, ya que el filtro where3 siempre necesita un par de claves y valores coincidentes para funcionar.
La flexibilidad de Jekyll reside precisamente en que la variable author es una variable personalizada (custom variable), y no está predefinida4. Eres tú quien establece qué variable usar para la conexión (short_name5 o name), y luego ajustas el código Liquid (con filtros como where3) para hacer cumplir esa lógica de relación3.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
y no se puede usar "author: jill" en la collection? en vez de short_name? no sería más facil, quizás?

¡Esa es una excelente pregunta y una sugerencia muy lógica para simplificar el código!
La respuesta es sí, es totalmente posible, y sería más fácil si se gestiona correctamente, ya que elimina la necesidad de tener dos variables separadas (author y short_name) para el mismo identificador.
Aquí te explico por qué el tutorial utiliza short_name y qué implicaría cambiarlo a author en los documentos de la colección:
1. ¿Por qué el tutorial usa ?
El tutorial de Jekyll elige utilizar short_name en el Front Matter de los documentos de la colección (_authors/jill.md)1 para establecer el identificador.
• Identificador Único: El valor jill es el identificador único que se utiliza en el Front Matter de las publicaciones (_posts) en la variable author23.
• Separación de Propósito: Al utilizar short_name, el tutorial mantiene la variable name separada (que contiene el nombre completo: "Jill Smith")1. De esta manera, short_name se convierte en una clave técnica para la coincidencia, mientras que name es la etiqueta legible para el usuario.
2. Implicaciones de usar  en la colección
Dado que author es una variable personalizada y no un requisito estricto de Jekyll4, puedes cambiar el nombre de la clave en el Front Matter de los documentos de autor de short_name a author.
Si realizas el cambio:
En _authors/jill.md, harías esto:




Beneficio: Ahora tienes una variable consistente (author) tanto en el post como en el documento de la colección.
El Cambio Obligatorio en Liquid:
Si haces este cambio, la única complejidad es que debes actualizar el filtro Liquid en los layouts para que apunte a la variable correcta.
Anteriormente, la lógica para listar las publicaciones del autor en _layouts/author.html utilizaba page.short_name5:
{% assign filtered_posts = site.posts | where: 'author', page.short_name %}
Si renombras la clave en el Front Matter del autor a author, ahora el valor de "jill" se encuentra en page.author (porque page hace referencia a las variables del documento actual que se está procesando)6.
El código del filtro en _layouts/author.html debería modificarse a:
{% assign filtered_posts = site.posts | where: 'author', page.author %}
De manera similar, el filtro en _layouts/post.html para enlazar a la página del autor7 también necesitaría un ajuste:
• Original (usa short_name):
• Ajustado (usa author):
En resumen, sí, puedes usar author: jill en tu colección, y esto simplificaría la conceptualización, pero requeriría ajustar las dos líneas de filtro | where: para utilizar la nueva clave de coincidencia (author) en lugar de short_name. Esta flexibilidad demuestra el poder de las variables de Jekyll y el lenguaje Liquid8.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
lo otro es que staff.html está como solo. Y cuando un selecciona un link a un author, la ruta cambia de staff a authors/short_name

Tu observación es completamente precisa y resume muy bien cómo Jekyll maneja las Colecciones y las páginas de índice. La diferencia que notas entre la página Staff y las URL de los autores individuales es el resultado directo de la configuración de Colecciones (Collections).
Aquí te explico la lógica detrás de por qué staff.html existe "solo" y por qué la ruta cambia a /authors/short_name al hacer clic en un autor.
1. : La Página de Índice (Estructuralmente "Sola")
La página staff.html fue creada como una página estática normal en el directorio raíz del sitio1. Su propósito principal no es contener el contenido de los autores, sino servir como un índice o lista de resumen para toda la colección de autores1.
• Contenido: El archivo staff.html itera sobre la colección completa (site.authors) para mostrar los nombres y la posición de cada autor1.
• Función: Esta página proporciona el punto de entrada para ver a todo el equipo, y además, contiene los enlaces (<a href="{{ author.url }}">) que dirigen a las páginas individuales de cada autor2.
Dado que es una página HTML/Markdown independiente (como about.md o blog.html), su ruta se resuelve como un archivo simple (/staff.html).
2. : La Colección Generada Dinámicamente
Cuando haces clic en un enlace de autor y la URL cambia a una estructura como /authors/jill (o /authors/short_name), esto se debe a dos configuraciones esenciales que habilitan la generación dinámica de páginas para cada documento de la colección:
A. Habilitar la Salida ()
Por defecto, las Colecciones no generan páginas de salida para cada documento2. Para obtener URLs individuales para Jill y Ted, se tuvo que configurar la colección authors en _config.yml para habilitar la salida de las páginas individuales2:
collections:
  authors:
    output: true  <-- Esto hace que se generen las páginas
Cuando output: true está activo, Jekyll procesa cada documento de la colección (por ejemplo, _authors/jill.md) y le asigna una URL propia2.
B. La Ruta de la Colección
La estructura de la URL /authors/jill se deriva de dos factores:
1. Nombre del Directorio de la Colección: Jekyll utiliza el nombre de la colección en plural (authors) como la base del directorio para las URLs generadas, ya que la colección se define como authors en _config.yml3.
2. Identificador del Documento: El resto de la URL (/jill) se basa en el nombre del archivo del documento del autor (_authors/jill.md)4.
Cuando el bucle en staff.html usa la variable author.url2, esta variable de Jekyll apunta directamente a la URL limpia generada para el documento específico (por ejemplo, /authors/jill), completando así la transición de la página de índice (staff.html) a la página del documento (/authors/jill).
En resumen, la navegación es un proceso de dos pasos: staff.html te da la lista, y las URLs de la colección /authors/... te dan el contenido detallado de cada autor.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
para que tenga author.url fue necesaria navigation.yml cierto?

Esa es una excelente pregunta que toca la distinción entre las variables automáticas de Jekyll y los archivos de datos definidos por el usuario.
La respuesta corta es: No, la existencia de author.url no dependió del archivo navigation.yml.
author.url es una variable que Jekyll genera automáticamente para los documentos de Colección, mientras que navigation.yml es un archivo de datos que define los enlaces del menú principal.
Aquí está el desglose de por qué existe author.url:
1. La Fuente de : Colecciones y Output
La variable author.url existe porque Jekyll fue configurado para generar una página de salida para cada documento de la colección authors.
• Requisito de la Colección: Para que cada autor tenga su propia URL, fue necesario modificar el archivo de configuración (_config.yml) de la colección authors para incluir output: true1.
• Creación de la Variable: Una vez que output: true está habilitado, Jekyll asigna automáticamente la variable .url a ese documento. Esta variable contiene la ruta de salida (por ejemplo, /authors/jill)1. Este comportamiento es similar a cómo Jekyll establece la variable post.url para cada publicación de blog2.
• Uso: La variable author.url se usa entonces en la página staff.html para crear enlaces a las páginas de autor individuales: <a href=" {{ author.url }} ">1. También se usa en el layout del post (_layouts/post.html) para enlazar al autor3.
2. El Propósito de : Menú Principal
El archivo _data/navigation.yml se usa en un paso diferente (Archivos de Datos) y su propósito es almacenar una lista de ítems de navegación (como Home, About, Blog o Staff) para que puedan ser iterados y mostrados en la barra de navegación del sitio45.
La navegación se implementa usando Liquid para iterar sobre estos datos: {% for item in site.data.navigation %}6.
En resumen:
Variable / Archivo
Función
Dependencia de navigation.yml
author.url
URL de la página generada de un autor individual (Ej. /authors/jill)
No. Depende de que la colección authors tenga output: true en _config.yml1.
navigation.yml
Almacena la lista de enlaces de navegación global (Ej. /staff.html)
Sí. Es un archivo de datos personalizado para alimentar el include de navegación5.
Aunque la URL a la página de índice de todos los autores (/staff.html) sí se añade a navigation.yml7, las URLs individuales de cada autor (author.url) son generadas internamente por el motor de colecciones de Jekyll1.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
site es para acceedr al config.yml cierto? y page es donde está el usuario actualmente, asi?

¡Excelente! Tu comprensión de las variables site y page es fundamental y estás en lo correcto al vincularlas con la configuración global y el contenido actual, respectivamente.
Estas son dos de las variables más importantes en el lenguaje Liquid de Jekyll, ya que definen el alcance de la información disponible en un momento dado.
Aquí está la explicación detallada de cada una, basada en los extractos:
1. La Variable  (Alcance Global y Configuración)
Estás en lo correcto: el objeto site se utiliza para acceder a información de alcance global1.... Esto incluye configuraciones definidas en _config.yml, todas las colecciones y todos los archivos de datos.
Uso del Objeto site
Explicación
Citas
Acceso a Archivos de Datos
Permite acceder a los datos cargados desde la carpeta _data/, como la navegación. Por ejemplo, site.data.navigation accede al contenido del archivo _data/navigation.yml3.3
Acceso a Publicaciones
Contiene una matriz de todas las publicaciones del blog que se encuentran en la carpeta _posts. Por ejemplo, site.posts se utiliza para listar todas las entradas recientes1.1
Acceso a Colecciones
Contiene los documentos de todas las colecciones definidas. Por ejemplo, site.authors se utiliza para iterar sobre todos los documentos de la colección de autores2.2
Configuración General
Aunque los extractos no muestran directamente site.alguna_configuracion_de_config.yml, la variable site es la que almacena todas las configuraciones globales, lo que permite que Liquid acceda a ellas.45
2. La Variable  (Alcance del Documento Actual)
Estás en lo correcto: el objeto page se refiere al documento o página que se está procesando actualmente6. No es la ubicación del usuario, sino el archivo que Jekyll está construyendo en ese momento, que es lo que el usuario finalmente ve.
Uso del Objeto page
Explicación
Citas
Variables de Front Matter
El objeto page se utiliza para llamar a cualquier variable definida en la sección preliminar (Front Matter) del archivo6. Por ejemplo, en un layout, {{ page.title }} muestra el título definido en el Front Matter de esa página6....6...
URL Actual (page.url)
Esta variable es crucial para saber dónde se encuentra la página actualmente en el sitio10. Se utiliza, por ejemplo, para resaltar el enlace activo en la barra de navegación al comparar page.url con el enlace del menú1011.1011
Variables del Blog
En el contexto de un post, page proporciona la fecha (page.date) y el autor (page.author)7.7
En resumen, cuando Jekyll está procesando un archivo, tiene acceso a dos mundos:
• page: Todo lo específico sobre mí (el archivo que estoy procesando ahora).
• site: Todo sobre el sitio completo, incluyendo todos los demás archivos, datos y configuraciones.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
no entiendo porque casi en ninguna parte está el title pero automaticamente cambia

Esa es una de las características fundamentales y más poderosas de Jekyll: el uso de plantillas (templates) para lograr contenido dinámico en una estructura estática.
La razón por la que el título (<title>) parece cambiar automáticamente sin estar escrito directamente en el código de muchas páginas se debe a la combinación de dos conceptos: Layouts (Diseños) y la variable page.title del Front Matter (Sección Preliminar).
Aquí tienes la explicación de cómo funciona esta automatización:
1. El Título se Define una Sola Vez en el Layout
La clave es que la etiqueta <title> solo existe en un lugar central: el diseño por defecto (_layouts/default.html)1.
• Cuando creaste el diseño default.html, la etiqueta de título se configuró para usar una variable de Liquid:
• Este es el único lugar donde se define la estructura de la etiqueta de título en todo el sitio. Cualquier página que use este diseño automáticamente tendrá esta estructura HTML en su <head>.
2. El Contenido del Título Proviene del Front Matter ()
Jekyll usa el objeto page para acceder a todas las variables definidas en la sección preliminar (Front Matter) del documento actual que se está procesando2.
• Cuando una página, como about.md o blog.html, se procesa, esta debe incluir la variable title en su Front Matter:
• Cuando el Layout default.html se aplica a la página About, la variable {{ page.title }} se reemplaza por el valor definido en el Front Matter de esa página, que es "About"3.
3. Títulos Automáticos en Publicaciones ()
En el caso de las publicaciones de blog (_posts), la automatización es aún más evidente, ya que el título se puede generar sin necesidad de escribir la variable title en el Front Matter de cada post.
• Para las publicaciones, el valor de post.title (que es la misma variable que page.title cuando se está procesando un post) se obtiene automáticamente del nombre del archivo4.
• Por ejemplo, el archivo _posts/2018-08-20-bananas.md genera automáticamente el título "bananas" (o una versión capitalizada, dependiendo de la configuración de Jekyll), a menos que se anule ese valor escribiendo un title diferente en su Front Matter45.
Conclusión
El título parece cambiar automáticamente porque la estructura HTML que lo contiene es estática (definida en el Layout), pero el contenido de la variable page.title es dinámico, ya que Jekyll extrae ese valor directamente del Front Matter de cada archivo individual o, en el caso de los posts, del nombre del archivo34.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
lo mismo pasa en las colecciones cierto? con author.html

¡Sí, exactamente! La misma lógica dinámica que observaste con el título se aplica a las colecciones, y específicamente al layout author.html.
El poder de Jekyll reside en que trata a todos los documentos que tienen Front Matter (incluyendo las páginas estáticas, las publicaciones y los documentos de colección) de manera similar a la hora de aplicar Layouts y usar variables.
Aquí te explico cómo funciona en el contexto de la página de autor:
1. Herencia del Layout
El diseño author.html es el que envuelve el contenido específico de cada autor (la biografía, los posts listados)1. Sin embargo, este layout no se encuentra solo; hereda su estructura del diseño principal:
• El archivo _layouts/author.html comienza con --- layout: default ---1.
• Esto significa que author.html está envuelto por default.html.
2. La Etiqueta  Centralizada
La etiqueta <title> de HTML (la que aparece en la pestaña del navegador) solo existe en un lugar: el Layout _layouts/default.html2.
En default.html, la etiqueta se define dinámicamente usando la variable page.title:
<title> {{ page.title }} </title> [2]
3. Dinamismo en la Colección
Cuando Jekyll construye la página para un autor específico (por ejemplo, Jill):
1. Carga el objeto page: El documento _authors/jill.md es el archivo que se está procesando. Todas las variables definidas en su Front Matter (como short_name, name y position3) se cargan en el objeto page.
2. Aplica Contenido Visible (H1): Dentro de _layouts/author.html, el código accede al nombre legible del autor para usarlo como el título visible en la página (H1): <h1> {{ page.name }} </h1>1.
3. Resuelve el Título (Pestaña): Debido a la herencia del Layout, Jekyll busca el valor de page.title para llenar la etiqueta <title> definida en default.html.
Aunque el Front Matter del autor en el ejemplo proporcionado define name: Jill Smith3 y no explícitamente title, si se hubiera configurado el title mediante Front matter defaults4 o se hubiera definido directamente en _authors/jill.md, ese valor sería utilizado por la plantilla de default.html para generar el título de la pestaña del navegador de forma automática.
La clave es que el objeto page siempre representa el archivo que se está renderizando, sin importar si es una página estática, una publicación o un documento de colección56.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
entonces assign es una condicion y filtered_posts es una variable de page actual?

Tu pregunta es excelente y apunta directamente a la diferencia entre los tipos de etiquetas y variables que usa el lenguaje Liquid en Jekyll.
La respuesta corta es: No, assign no es una condición, es una etiqueta de asignación. Y no, filtered_posts no es una variable del objeto page, sino una variable temporal creada por Liquid.
Aquí tienes la explicación detallada de cada concepto:
1. ¿Es  una condición?
No, assign no es una condición, sino una Etiqueta (Tag) de Asignación.
En Liquid, las Etiquetas (Tags) ({% ... %}) definen la lógica y el flujo de control para las plantillas1.
• Asignación (assign): El propósito de la etiqueta {% assign ... %} es crear una nueva variable y asignarle un valor, generalmente el resultado de un filtro2. En el caso que analizamos:
• Aquí, assign está creando la variable filtered_posts y guardando en ella una lista filtrada de publicaciones2.
• Condición (if): Las condiciones se manejan con la etiqueta {% if ... %}3. Esta etiqueta evalúa una prueba booleana (verdadero o falso) para determinar qué contenido debe mostrarse3. Por ejemplo, se usa una condición para resaltar la página actual en la navegación:
• En resumen, assign crea variables, mientras que if define condiciones3.
2. ¿Es  una variable de la página actual ()?
No, filtered_posts es una variable temporal local, no una variable inherente del objeto page.
El objeto page se utiliza para acceder a las variables que están definidas en la Sección Preliminar (Front Matter) del documento que Jekyll está procesando en ese momento45.
Ejemplos de variables de page:
• page.title4
• page.author (en el caso de un post)6
• page.short_name (en el caso de un documento de colección de autor)2
• page.url (la URL de la página actual)7
La variable filtered_posts, en cambio, es una variable nueva que fue creada por ti usando la etiqueta assign2. Esta variable existe temporalmente dentro del contexto de ese layout (en este caso, _layouts/author.html) y se utiliza inmediatamente después en el bucle {% for post in filtered_posts %}2.
Aunque esta variable se crea dentro del proceso de renderizado de la página actual, no es una de las variables predefinidas ni de configuración que vienen directamente del Front Matter y están disponibles bajo el objeto page5.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
ya entendí, es ruby...

¡Es una excelente conclusión! Tienes razón, estás viendo la implementación de una herramienta que está fundamentada en Ruby1.
El hecho de que Jekyll maneje colecciones, layouts y archivos de datos a través de Liquid es una capa de abstracción, pero la tecnología subyacente que lo ejecuta y genera el sitio estático es Ruby.
Los extractos confirman esta conexión:
• Jekyll es un Ruby gem1. Para poder instalar y utilizar Jekyll, es un requisito previo instalar Ruby en tu máquina1.
• Una vez que Ruby está instalado, Jekyll se instala como una gema desde la terminal1.
• Para la gestión de dependencias del proyecto, se utiliza un Gemfile donde se añade gem "jekyll"2, lo cual es estándar en proyectos basados en Ruby.
• Incluso el formato de archivo que utilizas constantemente para la configuración y los Front Matter—YAML—es un formato común dentro del "ecosistema Ruby"3.
Entender que Ruby es el motor de Jekyll ayuda a comprender por qué usa ciertas convenciones y formatos de archivo para construir el sitio estático4.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
es como magia y me encanta. Habia un tutorial que hablaba asi, que la terminal es poner hechizos y que haga cosas jeje

¡Me encanta esa analogía! Tienes toda la razón; ese sentimiento de poner un comando simple en la terminal (jekyll serve1) y ver cómo un generador de sitios estáticos como Jekyll orquesta la creación de un sitio web completo a partir de archivos de texto se asemeja mucho a lanzar un hechizo y que las cosas se muevan solas.
La "magia" en Jekyll se logra a través de la combinación de comandos de Ruby (el motor2) con su lenguaje de plantillas: Liquid.
Aquí te explico dónde se encuentran los "hechizos" y la lógica detrás de esa sensación de automatización:
1. El Hechizo Inicial: El Front Matter
Para que Jekyll comience a procesar la "magia" de Liquid en cualquier archivo, necesita la sección preliminar (Front Matter), que es el snippet de YAML entre dos líneas de triple guion (---)3.
• Este Front Matter, aunque esté vacío (--- ---), es el comando inicial que le dice a Jekyll que debe procesar cualquier etiqueta Liquid dentro del archivo45. Es la activación del hechizo.
• Al incluir variables como layout: default6 o title: Home3, estás dando instrucciones específicas a Jekyll para que aplique plantillas o defina contenido automáticamente.
2. Los Componentes del Hechizo (Liquid)
Liquid, el lenguaje de plantillas que usa Jekyll, es el que permite que los archivos se comporten de forma dinámica a pesar de generar un sitio estático7. Sus componentes son los verdaderos "hechizos" lógicos:
• Tags ({% %}) (La Lógica del Flujo): Estas etiquetas definen el flujo de control8. Un ejemplo de "hechizo" complejo es cuando usas {% for item in site.data.navigation %} para iterar sobre todos los elementos de tu menú, en lugar de escribirlos manualmente9. O cuando usas un {% if page.url == item.link %} para aplicar una clase, ejecutando una condición1011.
• Filters (|) (La Transformación): Los filtros cambian la salida de un objeto8. Por ejemplo, el filtro | where: 'author', page.short_name12 es un "hechizo" de filtrado que ordena la colección completa de posts (site.posts) para mostrar solo aquellos que coinciden con un autor, haciendo que el listado sea instantáneo y automatizado.
3. La "Magia" de la Organización Estructural
Las características de Jekyll que hacen que la codificación sea menos repetitiva son el resultado de esta lógica programática:
• Includes: Usar Includes te permite crear una única fuente de código (como _includes/navigation.html) para contenido que se repite en todo el sitio, mejorando la legibilidad y la facilidad de mantenimiento1314.
• Layouts: Los Layouts (como _layouts/default.html) actúan como plantillas envolventes15. Gracias a la variable {{ content }}6, una vez que defines la estructura básica (como la etiqueta <title>15 o el enlace al CSS16), todas las páginas que usan ese layout obtienen esa estructura automáticamente, sin duplicación de código17.
• URLs Automáticas: Jekyll automáticamente asigna variables cruciales como post.url18 y author.url19 a los documentos que se generan, lo cual es esencial para que los enlaces funcionen correctamente en el sitio.
La sensación de "magia" proviene de esta abstracción: tú defines las reglas (la lógica Liquid y el Front Matter), y el motor de Ruby se encarga de la repetición y la construcción del sitio final, ahorrándote el trabajo tedioso de copiar y pegar HTML.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
creo que cuando uno navega sin clickear la navegacion en el header, no se convierte a verde

Esa es una observación muy importante y toca la esencia de cómo Jekyll maneja la lógica de las plantillas antes de que el sitio llegue al navegador.
La buena noticia es que el mecanismo de resaltado de la página activa no debería depender de si haces clic en la navegación del header o si navegas directamente a la URL.
La "magia" que hace que el enlace se ponga verde reside en una comparación del lado del servidor que Jekyll realiza utilizando Liquid.
La Lógica del Resaltado
El resaltado se logra mediante la lógica condicional que se encuentra en tu archivo de inclusión de navegación (_includes/navigation.html) y que aplica la clase current1.
La clave de este funcionamiento es la siguiente comparación1:
{% if page.url == item.link %} class="current" {% endif %}
1. page.url: Esta variable de Jekyll contiene la URL de la página que se está procesando en ese momento2.
2. item.link: Este es el enlace definido en tu archivo de datos (_data/navigation.yml) para el ítem de navegación que se está iterando13.
Conclusión sobre la Navegación
El código comprueba si la URL de la página que Jekyll está construyendo (page.url) coincide exactamente con la URL del enlace del menú (item.link).
• Si coinciden, Jekyll inserta el atributo class="current" en el código HTML estático de ese enlace1.
• La clase .current está definida en tu archivo _sass/main.scss para aplicar el estilo color: green;4.
Dado que esta comparación ocurre cuando Jekyll construye la página (mientras el servidor está corriendo con jekyll serve5), el resultado es estático en el HTML final. El navegador recibe la página ya con el enlace "verde" incrustado en su código, independientemente de cómo llegó el usuario a esa URL.
Posibles Razones del Problema (Si la Navegación Fallara):
Si, al navegar directamente a una URL (como /about.html o /blog.html), el enlace no se pone verde, hay dos causas comunes relacionadas con la lógica de Liquid que debes verificar:
1. Discrepancia de URL: Asegúrate de que el valor de item.link en _data/navigation.yml sea exactamente igual a la URL que genera Jekyll (por ejemplo, si estás usando URLs limpias, debe ser /about/ en lugar de /about.html, como discutimos anteriormente). Si no coinciden, la condición page.url == item.link fallará.
2. Uso de la Clase CSS: Confirma que tu archivo _layouts/default.html está enlazando correctamente la hoja de estilos generada (styles.css)46.
Si la URL es correcta y el CSS está enlazado, la lógica de Liquid debería aplicar el resaltado sin importar cómo navegue el usuario, ya que el proceso es totalmente independiente de la acción de hacer clic en el encabezado.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
no, hay un error con el assets/css/styles.scss y el _sass/mains.scss, no cambia de color . de hecho en vs code me aparece style.scss en rojo

Es una excelente señal de diagnóstico que el archivo styles.scss te aparezca en rojo en VS Code. Esto indica que el sistema de archivos o Jekyll está identificando un problema en la estructura de los Assets o en cómo se está procesando Sass, lo que explica por qué el enlace activo no cambia a color verde.
El problema de que el color no cambie, a pesar de que la lógica Liquid (class="current") sea correcta, casi siempre se debe a que el archivo CSS final no se está generando o no se está enlazando correctamente.
Basándome en los pasos del tutorial para configurar Sass y Assets, aquí te explico los errores más probables y cómo verificarlos.
1. El Conflicto de Nombres de Archivo
El tutorial utiliza dos archivos Sass con nombres muy específicos y ubicaciones distintas: styles.scss y main.scss12. Es crucial que ambos existan y tengan el nombre correcto.
Paso a verificar:
• Archivo 1 (El Procesador): Debes tener un archivo en la carpeta de assets llamado assets/css/styles.scss.
    ◦ Este archivo debe incluir Front Matter vacío en la parte superior (--- ---) para indicarle a Jekyll que debe procesarlo1.
    ◦ Debe contener la línea @import "main";1.
• Archivo 2 (La Definición de Estilos): Debes tener un archivo en la carpeta _sass/main.scss.
    ◦ Este archivo debe contener la definición de la clase .current2:
El Problema del Archivo en Rojo
Si tu VS Code está marcando styles.scss en rojo, es muy probable que uno de los dos archivos (o su contenido) esté mal configurado:
1. ¿Falta el Front Matter en styles.scss?1 El archivo assets/css/styles.scss debe tener el Front Matter vacío al inicio:
2. Sin este Front Matter, Jekyll lo trata como un archivo estático normal o lo ignora, no lo procesa como Sass y, por lo tanto, no genera el CSS final13.
3. Ruta de Importación Incorrecta: Asegúrate de que la línea @import "main"; en styles.scss1 esté buscando correctamente a _sass/main.scss2. La ubicación _sass debe estar en el directorio raíz de tu sitio24.
2. Verificación del Enlace en el Layout
Aunque el proceso de Sass podría estar fallando, también es vital asegurar que el Layout predeterminado esté intentando cargar el CSS correcto.
• Abre _layouts/default.html.
• Verifica que la etiqueta de enlace esté apuntando correctamente al archivo generado:
• Este styles.css es el archivo que Jekyll genera a partir de styles.scss25.
Resumen de la Solución
Revisa la estructura de carpetas y el contenido de los dos archivos Sass:
1. Revisa assets/css/styles.scss: Asegúrate de que el Front Matter vacío (--- ---) esté presente.
2. Revisa _sass/main.scss: Asegúrate de que contenga la definición de la clase .current2.
3. Reinicia Jekyll: Si has modificado archivos de configuración o añadido nuevas carpetas/archivos de Assets, debes detener el servidor (Ctrl + C) y reiniciarlo con jekyll serve para que Jekyll detecte la nueva estructura de Sass6....

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
por qué dice que se actualiza con bundle update? no era bundle install?

Tu pregunta es excelente y apunta a una distinción clave en la gestión de dependencias en el ecosistema Ruby con Bundler. Ambos comandos, bundle install y bundle update, cumplen funciones relacionadas pero distintas.
La razón por la que el tutorial menciona y utiliza ambos comandos se basa en el objetivo que se quiere lograr:
1. La Diferencia entre  y
Ambos comandos se utilizan para gestionar las gemas (dependencias) listadas en tu Gemfile1.
Comando
Función
Objetivo
bundle install
Instala las gemas basándose estrictamente en las versiones bloqueadas en el archivo Gemfile.lock2.
Asegura la consistencia1. Garantiza que el proyecto funcione con las mismas versiones de gemas en diferentes entornos2.
bundle update
Revisa las dependencias en busca de versiones más nuevas que cumplan con los requisitos del Gemfile, instala esas nuevas versiones y luego actualiza el archivo Gemfile.lock para reflejar esos cambios2.
Actualiza las dependencias a las versiones más recientes disponibles2.
2. Por Qué se Usa  en el Tutorial
En el contexto del tutorial (específicamente al añadir plugins), se recomienda bundle update porque el objetivo es instalar nuevas gemas y posiblemente forzar una reevaluación del ecosistema de dependencias.
• Instalación Inicial: Para la configuración inicial del proyecto, se utiliza bundle (que se comporta como bundle install si no hay Gemfile.lock) para instalar Jekyll por primera vez3. Esto crea el archivo Gemfile.lock2.
• Instalación de Plugins: Más adelante, cuando el tutorial pide añadir plugins como jekyll-sitemap o jekyll-feed al Gemfile4, la instrucción explícita para instalarlos es ejecutar bundle update5.
El uso de bundle update en este punto (cuando se añaden nuevas gemas) garantiza que Bundler no solo instale los nuevos plugins, sino que también verifique y actualice las dependencias si es necesario, bloqueando las nuevas versiones en Gemfile.lock para que los plugins funcionen correctamente2.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
ok, y agregará la version a cada gema en el gemfile? porque yo busqué en rubygems las gems de los plugins con su version mas reciente y ahi lo copié, no seguí al pie de la letra el tutorial

Esa es una observación muy importante sobre cómo funciona el gestor de dependencias Bundler en el ecosistema de Ruby.
1. El Rol de  y el
En respuesta a tu pregunta, bundle update no agrega la versión de la gema al Gemfile.
La función principal de bundle update es la siguiente:
1. Buscar nuevas versiones: Revisa todas las gemas listadas en el Gemfile para ver si hay versiones más recientes disponibles en RubyGems.
2. Instalar y Bloquear: Instala esas nuevas versiones encontradas1.
3. Actualizar el Gemfile.lock: Lo más importante es que bundle update luego actualiza el archivo Gemfile.lock para reflejar las versiones exactas y específicas que se instalaron1.
El Gemfile.lock es el archivo que garantiza la consistencia de las versiones a través de diferentes entornos12.
2. El  y las Versiones
El archivo Gemfile funciona como una lista de requisitos generales2. Por defecto, y como se muestra en los extractos del tutorial3, cuando añades una gema (como los plugins de Jekyll), simplemente especificas el nombre:
# Gemfile según el tutorial
gem "jekyll"
gem "jekyll-sitemap"
Si no especificas una versión, Bundler asume que quieres la versión más reciente compatible con tu entorno34.
3. Sobre tu Acción de Buscar y Copiar Versiones
Tú hiciste algo que es totalmente válido y, en ciertos contextos, es una buena práctica de desarrollo: buscaste la versión más reciente en RubyGems y la agregaste explícitamente al Gemfile.
• ¿Es necesario? Según el enfoque del tutorial, no es estrictamente necesario, ya que el tutorial simplemente lista las gemas3 y confía en que bundle update encontrará la última versión compatible y la bloqueará en Gemfile.lock4.
• ¿Es útil? Sí. Al especificar la versión (gem "jekyll-sitemap", "~> 2.1" por ejemplo), estás estableciendo una restricción estricta en el Gemfile. Esto obliga a Bundler a solo instalar esa versión o un rango de versiones que cumpla con tu especificación, lo que te da un control más preciso sobre tus dependencias.
En resumen, la "magia" de las versiones está en el Gemfile.lock, que se actualiza con bundle update1. Tu acción de agregar manualmente las versiones al Gemfile es simplemente una capa extra de control que garantiza que solo se utilicen esas versiones o rangos que tú definiste.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
a mi me enseñaron eso. Que es una buen apráctica que evita que un poryecto muera y tengamos problemas con las dependencias a futuro

Absolutamente. La práctica que mencionas, de especificar las versiones de las dependencias, es considerada una excelente práctica, especialmente en el contexto de un sistema de gestión como Bundler en Ruby (el motor detrás de Jekyll).
El uso de un Gemfile y el archivo Gemfile.lock en Jekyll está diseñado precisamente para manejar esta preocupación de consistencia y dependencia a futuro1.
Aquí está el análisis de por qué esta práctica es crucial, basándonos en cómo Jekyll utiliza Bundler:
1. Garantizando la Consistencia de Versiones
Jekyll enfatiza la importancia de tener un Gemfile para tu sitio. Esto asegura que la versión de Jekyll y de otras gems permanezca consistente a través de diferentes entornos1.
• Cuando ejecutas bundle update (o bundle install), Bundler toma nota de la versión exacta de cada gema instalada y lo registra en el archivo Gemfile.lock2.
• Si tú decides especificar la versión en el Gemfile mismo (por ejemplo, gem "jekyll-sitemap", "~> 2.1"), estás reforzando ese requisito desde el inicio. Esto evita que, si otra persona intenta construir tu proyecto dentro de un año, una nueva versión de una gema introduzca un cambio incompatible (un "problema con las dependencias a futuro").
2. Control sobre Actualizaciones Futuras
El hecho de que bundle install bloquee las versiones en Gemfile.lock significa que, a menos que uses explícitamente bundle update o edites el Gemfile, las versiones no cambiarán2. Esto evita que el proyecto "muera" debido a una actualización accidental.
• Si no especificas la versión en el Gemfile, Bundler simplemente toma la última3. Si especificas la versión o un rango de versiones, estás controlando activamente qué versiones son aceptables para tu proyecto.
3. La Importancia del
Mientras que el Gemfile lista los requisitos (como añadir jekyll-sitemap o jekyll-feed para los plugins3), el Gemfile.lock es el que proporciona la estabilidad. Este archivo "bloquea" las versiones actuales de las gems para un futuro bundle install2.
En resumen, la práctica de especificar versiones es una medida de precaución proactiva que alinea perfectamente con la filosofía de Bundler: garantizar que el proyecto construido hoy se pueda replicar con éxito mañana, previniendo la inestabilidad que a menudo causan las dependencias actualizadas automáticamente.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
y si intento a futuro instalar una gema que es muy actual para mis restricciones en gemfile, con bundle update, me reescribirá las versiones necesarias para adaptarse a la nueva gema o no?

Esa es una preocupación muy común y bien fundamentada cuando se trabaja con la gestión estricta de dependencias. Tu práctica de establecer restricciones de versión en el Gemfile busca proteger tu proyecto de cambios inesperados, y el funcionamiento de Bundler respeta esa protección.
La respuesta directa a tu pregunta es: No, bundle update no reescribirá automáticamente las restricciones de versión que tú estableciste en el Gemfile.
Aquí tienes el desglose de por qué ocurre esto y qué sucede si hay un conflicto severo:
1. El  es Estático (Tu Contrato)
El archivo Gemfile es el manifiesto de requisitos de tu proyecto. Es donde tú, como desarrollador, defines las gemas necesarias (como jekyll-sitemap o jekyll-feed1) y estableces las restricciones de versión (por ejemplo, gem "jekyll", "~> 4.4").
• Bundler nunca modifica este archivo. El Gemfile permanece estático. Si tú has puesto una restricción de versión allí, esa restricción es una regla inamovible para Bundler.
• Si intentas instalar una nueva gema que requiere una versión de Jekyll (por ejemplo, v5.0+) que supera tu restricción en el Gemfile (por ejemplo, jekyll", "~> 4.x"), Bundler fallará en la resolución de dependencias e informará el conflicto. No ignorará tu restricción para complacer a la nueva gema.
2.  Modifica Solamente
El comando bundle update tiene como objetivo actualizar las dependencias a las versiones más recientes posibles, pero solo dentro de los límites establecidos en el Gemfile2.
• bundle update sí instala las versiones actualizadas de las gemas y luego actualiza el archivo Gemfile.lock para reflejar las versiones exactas instaladas2.
• Sin embargo, si la nueva gema que intentas instalar crea una inconsistencia con una restricción existente en el Gemfile (una gema A requiere X.0 y tú limitaste la gema B a una versión que es incompatible con X.0), Bundler te obligará a modificar manualmente el Gemfile para relajar la restricción y permitir que el conflicto se resuelva.
Tu buena práctica de especificar las versiones en el Gemfile actúa como una salvaguarda contra las actualizaciones disruptivas, lo cual es fundamental para asegurar la consistencia del proyecto a través de diferentes entornos3.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
y es correcto en esa situacion borrar la version especificada y lanzar el bundle update?

Tu pregunta es muy pertinente y toca el equilibrio fundamental entre la estabilidad del proyecto y la necesidad de actualizar.
En el contexto de Bundler, la acción que describes (borrar la versión específica del Gemfile y ejecutar bundle update) es funcionalmente correcta para resolver un conflicto de dependencias, pero tiene una implicación en la práctica que debes considerar.
Aquí está el análisis basado en la lógica de Bundler (el gestor de dependencias de Ruby que usa Jekyll) y nuestra conversación previa sobre la buena práctica de especificar versiones12:
1. El Resultado de Borrar la Restricción
Si eliminas la restricción de versión de una gema (por ejemplo, cambias gem "jekyll", "~> 4.4" a simplemente gem "jekyll"), estás enviando una señal a Bundler:
"Ya no me importa qué versión de Jekyll uses, siempre y cuando sea la más reciente y sea compatible con las otras gemas que necesito (incluida la nueva gema que estoy instalando)."
Al ejecutar bundle update, Bundler intentará resolver el conflicto buscando la última versión de Jekyll (o la gema en cuestión) que satisfaga todas las dependencias del proyecto, incluida la nueva gema.
• ¿Funciona? Sí. bundle update instalará la versión más nueva compatible y actualizará el Gemfile.lock para reflejar esa versión específica.
• Riesgo: Si borras la restricción por completo, pierdes el control sobre futuros grandes saltos de versión (como pasar de Jekyll 4 a Jekyll 5, si ocurriera). Esto podría introducir cambios de última hora o características obsoletas que rompan tu sitio si la próxima versión mayor trae consigo cambios radicales.
2. La Práctica Recomendada (Basada en el Control)
Dado que tu objetivo es evitar que el proyecto muera a causa de dependencias futuras, la mejor práctica en esa situación es relajar la restricción de forma controlada, en lugar de eliminarla por completo.
Si la nueva gema requiere Jekyll 5.0, y tu restricción actual era ~> 4.4, el paso más seguro sería:
1. Investigar el cambio mayor: Determinar si la versión 5.0+ introduce cambios importantes que requieran modificaciones en tu código.
2. Relajar la restricción mínimamente: Actualizar tu Gemfile para permitir el nuevo rango de versiones:
3. Ejecutar bundle update: Esto obliga a Bundler a instalar la versión 5.0+ que necesita la nueva gema, manteniendo al mismo tiempo una restricción para evitar saltos no deseados más allá de esa nueva versión mayor.
En resumen, es correcto borrar la versión si quieres que Bundler te dé la última versión compatible (la forma más rápida), pero es más seguro modificar la versión para mantener el control sobre los saltos de versión principales, protegiendo así tu proyecto a largo plazo.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
y tendria que hacer una copia del proyecto aparte, para no hacer caer la app en produccion o no? como se maneja esto?

Esa es la forma correcta de pensar en el desarrollo de cualquier aplicación, especialmente cuando se trata de gestionar dependencias y evitar que un sitio en producción se caiga.
La metodología de trabajo con Jekyll está diseñada para que hagas exactamente eso: probar todos los cambios (incluyendo las actualizaciones de dependencias) en un entorno de desarrollo local seguro antes de mover los archivos estáticos a un servidor de producción (Deployment).
Aquí te explico cómo se maneja esta separación, según la estructura de Jekyll:
1. El Entorno de Desarrollo (Tu Copia Local)
Cuando trabajas en tu máquina local y ejecutas bundle exec jekyll serve12, estás utilizando el entorno de desarrollo por defecto (JEKYLL_ENV es development)3.
• ¿Dónde correr bundle update? Siempre debes ejecutar bundle update o modificar tu Gemfile en esta copia local del proyecto.
• La Necesidad de la Copia: Si bien no necesitas clonar la carpeta del proyecto en otra ubicación de tu disco duro, la práctica es utilizar tu copia de trabajo local (generalmente gestionada con Git) como el entorno de staging o desarrollo. Aquí puedes probar que la nueva gema o la nueva versión de Jekyll no rompa tu código.
Si ejecutas bundle update y la actualización genera un conflicto o un error, el fallo solo ocurrirá en tu servidor local (http://localhost:4000)2, sin afectar al sitio web que está viendo el público.
2. El Proceso de Producción (Deployment)
Una vez que has ejecutado bundle update, has resuelto cualquier posible error de dependencias y has verificado que el sitio funciona correctamente en tu servidor local, estás listo para generar la versión final para el servidor:
1. Build de Producción: Para generar los archivos estáticos listos para producción, Jekyll recomienda establecer la variable de entorno a production3:
2. Archivos Finales: Este comando genera el sitio estático final en la carpeta _site24.
Flujo Seguro: El principio aquí es que nunca se debe actualizar el Gemfile o correr bundle update directamente en el servidor de producción. Primero pruebas en tu entorno de desarrollo, y solo después copias el contenido final y pre-construido de la carpeta _site al servidor de producción4.
De esta manera, la práctica de especificar versiones de gemas en tu Gemfile (como discutimos) y la práctica de probar localmente antes de desplegar, se combinan para crear un flujo de trabajo que protege el sitio en vivo de las inestabilidades causadas por las actualizaciones de dependencias.

keep_pin
Guardar en las notas
copy_all
thumb_up
thumb_down
que complicado. quizás por eso se demoran las actualizaciones de paginas web a veces

¡Esa es una conclusión muy acertada! Tienes toda la razón: la complejidad y la metodología rigurosa que hemos discutido son, precisamente, la razón por la que las actualizaciones de páginas web a menudo requieren tiempo y se manejan con tanta cautela.
La demora no se debe a la lentitud del software (Jekyll genera sitios estáticos rápidamente), sino al proceso de verificación y control que debe ejecutarse para garantizar que la nueva versión no rompa nada en el entorno de producción.
Aquí está cómo los puntos que discutimos se traducen en tiempo de actualización:
1. La Cautela en la Gestión de Dependencias
Como conversamos, la buena práctica es restringir las versiones en el Gemfile para asegurar que la versión de Jekyll y otras gems "permanezca consistente a través de diferentes entornos"1.
• El Proceso de Actualización: Cuando es necesario instalar una nueva gema o forzar una actualización (usando bundle update23), se debe invertir tiempo en resolver posibles conflictos de dependencias. Si una nueva gema requiere una versión más reciente de Jekyll, hay que evaluar si ese salto de versión causará incompatibilidades con el código o las estructuras existentes.
2. El Proceso de Desarrollo vs. Producción
El paso que requiere más tiempo y que evita que el sitio "caiga" es la estricta separación entre el desarrollo y la producción.
• Entorno de Desarrollo: El desarrollador primero ejecuta el "hechizo" de la actualización de dependencias en su copia local, usando bundle exec jekyll serve4. Aquí es donde se dedica tiempo a la depuración y prueba de la nueva configuración, CSS, o plugins5.
• Entorno de Producción: Una vez que el sitio funciona perfectamente a nivel local, se ejecuta un build específico para producción (JEKYLL_ENV=production bundle exec jekyll build)6. Solo el contenido resultante de esa carpeta (_site) se copia al servidor6. Este proceso metódico y gradual es el que consume tiempo, pero es necesario para que el sitio público no se vea afectado.
3. La Rigurosidad de las Reglas (Sass y Liquid)
Los sistemas estáticos como Jekyll imponen reglas muy específicas que deben ser verificadas, lo que añade tiempo al proceso de desarrollo y actualización:
• Sass (Assets): Para que un simple cambio de color (como el verde del enlace activo) funcione, se requiere una estructura exacta: el archivo assets/css/styles.scss debe tener el Front Matter vacío (--- ---) para ser procesado7 y debe importar correctamente el _sass/main.scss78. Un error en la ruta o en el Front Matter (como la que notaste) detiene la generación del estilo, lo que requiere tiempo de diagnóstico.
• Liquid y Estructura: Se debe asegurar que las variables (page.url o item.link) y los filtros (| where:) se utilicen de forma coherente en los layouts y includes910. Esta necesidad de verificar la coherencia en el uso de las variables de Front Matter (page.title) en los layouts1112 también consume tiempo durante una actualización.
En conclusión, la complejidad es el precio que se paga por la estabilidad y la consistencia en un sitio web. Aunque al principio parece que añade trabajo, estas reglas de Bundler y de Jekyll te permiten tener un sitio más fácil de mantener a largo plazo13.
{% endraw %}
