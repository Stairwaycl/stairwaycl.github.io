---
layout: post
author: mirtha
---

<p>Si usas Blogger, notarás que al hacer una entrada, la vista de redacción, a pesar de ser fácil de usar, es limitadísimo. Por ejemplo, si quieres incluir <b>iconos modernos</b> (como los de <a href="https://fontawesome.com/" rel="" target="_blank">Font Awesome</a>) o <b>tablas estructuradas</b> para presentar información clave, necesitas dominar la <b>Vista HTML</b>&nbsp;ya que no te da la opción, y copiar de otro editor de texto como LibreOffjce no mantendrá el formato.</p>

<h2 style="font-size: 2em; margin-bottom: 0.5em;">Font Awesome en Blogger: Iconos y Tablas</h2>

<p style="margin-bottom: 0.5em; text-align: left;"><span style="font-size: medium;"><b><i>Nota: si AdSense está en proceso de aprobación, quizás salten errores que impidan modificar la plantilla</i></b></span></p>

<p>Si usas Blogger, notarás que al hacer una entrada, la vista de redacción, a pesar de ser fácil de usar, es limitadísimo. Por ejemplo, si quieres incluir <b>iconos modernos</b> (como los de <a href="https://fontawesome.com/" rel="" target="_blank">Font Awesome</a>) o <b>tablas estructuradas</b> para presentar información clave, necesitas dominar la <b>Vista HTML</b>&nbsp;ya que no te da la opción, y copiar de otro editor de texto como LibreOffjce no mantendrá el formato.</p>

<p>Aquí te explicamos cómo hacerlo y te guiamos en el proceso, resolviendo las confusiones más comunes.</p>

<hr />

<h2 style="font-size: 1.5em; margin-bottom: 0.5em;">1. Integrando Iconos (Font Awesome)</h2>

<p>Para usar iconos modernos de Font Awesome en Blogger, necesitas <b>enlazar la librería completa</b> y luego pegar su código HTML.</p>

<h3 style="font-size: 1.2em; margin-bottom: 0.5em;">A. Primer Paso: Enlazar la Librería (El Sustituto del "Gem" en Rails)</h3>

<p>A diferencia de entornos como Ruby on Rails (donde una Gem lo hace automáticamente), en Blogger debes pegar un enlace directo a la librería. Esta es la única forma de que el navegador "conozca" la fuente de iconos.</p>

<h4>Cómo obtener el enlace sin crear una cuenta (Usando CDN):</h4>

<p>Copia este código CDN (Content Delivery Network). Este enlace carga la librería de Font Awesome más reciente:</p>
<pre style="background-color: #f7f7f7; border: 1px solid rgb(221, 221, 221); overflow-x: auto; padding: 10px;"><code>&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" /&gt;</code></pre>

<p>Luego:</p>
<ol>
<li>Ve a tu <b>Panel de Blogger</b> &gt; <b>Tema</b> &gt; <b>Editar HTML</b>.</li>
<li>Busca la etiqueta de cierre del encabezado, <b><code>&lt;/head&gt;</code></b>.</li>
<li>Pega el código CDN <b>justo antes</b> de <code>&lt;/head&gt;</code>.</li>
<li><b>Guarda</b> los cambios.</li>
</ol>

<h3 style="font-size: 1.2em; margin-bottom: 0.5em;">B. Segundo Paso: Insertar el Icono (La Regla de la Vista HTML)</h3>

<p>Una vez que la librería está enlazada, ya puedes usar los códigos de los iconos.</p>

<h4>¿Necesito usar la Vista HTML en la entrada?</h4>

<p><b>Sí, definitivamente.</b> Es la regla de oro para cualquier código complejo en Blogger.</p>
<ul>
<li><b>Si usas Vista de Redacción:</b> Pegar <code>&lt;i class="fa-solid fa-user"&gt;&lt;/i&gt;</code> resultará en que el texto se muestre tal cual.</li>
<li><b>Si usas Vista HTML:</b> Le dices al navegador que <b>ejecute</b> ese código, permitiendo que el navegador busque la fuente Font Awesome (que enlazaste antes) y muestre el icono.</li>
</ul>

<h4>Pasos para insertar el icono:</h4>
<ol>
<li>Abre la entrada y, en el editor, haz clic en el icono del lápiz (esquina superior izquierda) y selecciona <b>Vista HTML</b>.</li>
<li>Busca el lugar exacto en el código donde quieres que aparezca el icono.</li>
<li><b>Pega el código</b> del icono (ejemplo: <code>&lt;i class="fa-solid fa-user"&gt;&lt;/i&gt;</code>).</li>
<li>Puedes volver a la <b>Vista de Redacción</b> para seguir escribiendo, y el icono debería ser visible.</li>
</ol>

<hr />

<h2 style="font-size: 1.5em; margin-bottom: 0.5em;">2. Insertando Tablas Estructuradas</h2>

<p>El editor de Blogger no tiene un botón para tablas, por lo que debes construirlas con código HTML.</p>

<h3 style="font-size: 1.2em; margin-bottom: 0.5em;">A. Generar el Código HTML de la Tabla</h3>

<p>El camino más rápido es usar un generador en línea:</p>
<ol>
<li>Busca en Google: <b>"generador de tablas html online"</b>.</li>
<li>Configura las filas y columnas que necesitas.</li>
<li>El generador te proporcionará el código HTML base. <b>Cópialo.</b></li>
</ol>

<h3 style="font-size: 1.2em; margin-bottom: 0.5em;">B. Insertar y Estilizar la Tabla</h3>

<p>Inserta la tabla de la misma manera que insertaste el icono: <b>siempre en la Vista HTML</b> de tu entrada.</p>

<p>Para que tu tabla se vea bien y sea <b>adaptable a celulares (responsiva)</b>, es recomendable añadir estilos.</p>

<h4>Ejemplo de Tabla con Estilos (Pega esto en la Vista HTML):</h4>

<pre style="background-color: #f7f7f7; border: 1px solid rgb(221, 221, 221); overflow-x: auto; padding: 10px;"><code>&lt;style&gt;
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
&lt;/style&gt;
&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Encabezado 1&lt;/th&gt;
      &lt;th&gt;Encabezado 2&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Dato de Ejemplo&lt;/td&gt;
      &lt;td&gt;Otro Dato&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>

<h4>Consejos Finales para Tablas:</h4>
<ul>
<li><b>Edición de Contenido:</b> Para cambiar el texto dentro de la tabla, debes editar el contenido en la <b>Vista HTML</b>, buscando el texto que está entre las etiquetas <code>&lt;td&gt;</code> y <code>&lt;th&gt;</code>.</li>
<li><b>Diseño Responsivo:</b> La inclusión de la etiqueta <code>&lt;style&gt;</code> anterior ayuda a que la tabla se ajuste correctamente en dispositivos móviles.</li>
</ul>

<hr />

<p><i>Dominar la <b>Vista HTML</b> es la clave para llevar el diseño y la funcionalidad de tu blog Blogger al siguiente nivel.&nbsp;</i>¿Qué otro elemento avanzado te gustaría incluir en tus entradas?</p>
