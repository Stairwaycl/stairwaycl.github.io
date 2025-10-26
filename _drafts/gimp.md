---
layout: post
author: erwin
---

<h1>Ajustar un objeto en GIMP 🎨</h1>

<p>Si has importado una imagen o has aislado un objeto y quieres que este ocupe todo el espacio de tu área de trabajo (el lienzo), debes **seleccionar la capa a mano derecha abajo, y luego ir a herramientas - hHerramientas de Transformación - Escalar**.</p>

<h2>Requisitos Previos</h2>
<div class="step">
    <p>Asegúrate de que la imagen o el elemento que deseas agrandar se encuentre en una **capa independiente** dentro de tu proyecto. Esta capa será la que escalaremos.</p>
</div>

<h2>Paso 1: Seleccionar la Herramienta Escala</h2>
<div class="step">
    <ol>
        <li>En el panel de Capas (normalmente a la derecha), haz clic en la capa de la imagen o el elemento que deseas escalar para asegurarte de que está activa. Si tiene canal alfa, asegurate de cambiar de canal alfa a selección</li>
        <li>Accede a la herramienta de transformación de la siguiente manera:
            <p class="menu">Menú Principal &gt; Herramientas &gt; Herramientas de Transformación &gt; Escala</p>
            <p>O utiliza el atajo de teclado: <span class="shortcut">Shift + T</span>.</p>
    </li></ol>
</div>

<h2>Paso 2: Definir el Tamaño de la Capa</h2>
<div class="step">
    <p> El objeto se seleccionará con un cuadro con los vertices y aristas ajustables (tienen cuadritos para seleccionar y jalar a la dimensión deseada). Primero, verifica las dimensiones de tu lienzo (se muestran en la parte superior de la ventana o en <span class="menu">Imagen &gt; Tamaño del lienzo...</span>). Luego, ajusta la capa a esas medidas:</p>
    <ol>
        <li>Asegúrate que el ícono e la cadena entre el alto y ancho en el cuadito que apareció luego de ingresar a la herramienta escalar, esté cerrado, para mantener las proporciones de la imagen.</li>
        <li>En el campo de **Ancho (Width)** y en el campo de **Alto (Height)** verifica que las medidas son las deseadas.</li>
    </ol>
    <p class="tip">💡 **Consejo:** Por defecto, GIMP intenta mantener la proporción. Si las proporciones de tu imagen no coinciden con las del lienzo (por ejemplo, escalar un cuadrado a un rectángulo), se deformará. Si quieres mantener las proporciones, solo introduce la medida más grande (Ancho o Alto) y GIMP calculará la otra automáticamente (asegúrate de que el ícono de la cadena esté cerrado).</p>
</div>

<h2>Paso 3: Aplicar la Escala</h2>
<div class="step">
    <p>Una vez que las dimensiones son correctas, haz clic en el botón **Escalar (Scale)** en la ventana de diálogo para aplicar la transformación.</p>
    <p>Tu elemento ahora se habrá agrandado y ocupará todo el espacio del lienzo, ajustándose a la "página".</p>
</div>



<article>
        <h1>Instalación Esencial: Cómo Descargar e Instalar GIMP en Linux OS 🎨</h1>
        <p class="summary">GIMP (GNU Image Manipulation Program) es el editor de imágenes y diseño más potente del ecosistema de código abierto. Si trabaja con miniaturas para su canal de YouTube, edita gráficos para sus blogs (**stairwaycl**, **npcrecer**) o necesita manipular archivos de imagen para sus proyectos de **Ruby on Rails**, GIMP es indispensable. Aquí le mostramos la forma más eficiente y recomendada para instalarlo en su **Linux OS**.</p>

        <h2>1. Instalación Mediante el Gestor de Paquetes (Método APT/DNF)</h2>

        <p>Este es el método preferido en Linux, ya que instala la versión estable desde los repositorios de su sistema, garantizando la compatibilidad con sus librerías. Abra su terminal y use el comando correspondiente a su distribución:</p>

        <h3>Para Sistemas Basados en Debian/Ubuntu (APT)</h3>
        <p>Utilice estos comandos para actualizar su lista de paquetes e instalar GIMP:</p>

        <pre><code>
# 1. Actualizar la lista de paquetes
sudo apt update

# 2. Instalar GIMP
sudo apt install gimp
        </code></pre>

        <h3>Para Sistemas Basados en Fedora/RHEL (DNF)</h3>
        <p>En distribuciones que usan DNF como gestor de paquetes:</p>

        <pre><code>
sudo dnf install gimp
        </code></pre>

        ---

        <h2>2. Instalación Universal Mediante Flatpak (Última Versión Estable)</h2>

        <p>Si desea asegurarse de tener la versión más reciente que el equipo de GIMP haya lanzado (a menudo más nueva que la versión de los repositorios de su sistema), Flatpak es la mejor opción. Este paquete se ejecuta de forma aislada, evitando conflictos en su sistema.</p>

        <p><strong>Nota:</strong> Si ya instaló Inkscape con Flatpak, ya tiene configurado el repositorio **Flathub**.</p>

        <ol>
            <li><strong>Instalar la aplicación GIMP</strong> (si ya tiene Flatpak configurado):
                <pre><code>flatpak install flathub org.gimp.GIMP</code></pre>
            </li>
            <li>**Para ejecutarlo** (si no aparece en el menú de aplicaciones):
                <pre><code>flatpak run org.gimp.GIMP</code></pre>
            </li>
        </ol>

        <p>Tras la instalación, busque **GIMP** en el menú de aplicaciones de su entorno de escritorio. Tendrá la herramienta lista para editar cualquier gráfico o fotografía que necesite para sus proyectos digitales.</p>
    </article>
