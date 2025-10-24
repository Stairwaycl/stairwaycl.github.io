<h1>Ajustar una Imagen (Capa) al "Porte de Página" en GIMP 🎨</h1>

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


<article>
        <h1>Guía Rápida: Cómo Descargar e Instalar Inkscape en Linux OS 🐧</h1>
        <p class="summary">Inkscape es la herramienta estándar de código abierto para la edición y creación de gráficos vectoriales (como los SVG) que tanto necesitamos para proyectos web con Jekyll o Ruby on Rails. Como usuarios de **Linux OS**, tenemos varias formas de instalarlo. El mejor método es siempre usar el gestor de paquetes de su distribución.</p>

        <h2>1. Instalación Mediante el Gestor de Paquetes (Recomendado)</h2>

        <p>Este es el método más seguro y estable, ya que utiliza los paquetes oficiales de su distribución, asegurando la compatibilidad y la gestión automática de las dependencias. Abra su terminal para usar los comandos que correspondan a su sistema:</p>

        <h3>Para Distribuciones Basadas en Debian/Ubuntu (APT)</h3>
        <p>Si utiliza Ubuntu, Mint o cualquier sistema basado en Debian, siga estos dos pasos. El primer comando asegura que su lista de paquetes esté actualizada.</p>

        <pre><code>
# 1. Actualizar la lista de paquetes
sudo apt update

# 2. Instalar Inkscape
sudo apt install inkscape
        </code></pre>

        <h3>Para Distribuciones Basadas en Fedora/RHEL (DNF)</h3>
        <p>En sistemas que utilizan el gestor de paquetes DNF, el comando es ligeramente diferente:</p>

        <pre><code>
sudo dnf install inkscape
        </code></pre>

        ---

        <h2>2. Instalación Universal Mediante Flatpak (Última Versión)</h2>

        <p>Si su distribución es más nueva, o si desea asegurarse de tener siempre la versión más reciente de Inkscape, el paquete Flatpak es el método universal recomendado. Flatpak aísla la aplicación del resto del sistema, lo que reduce los conflictos.</p>

        <p><strong>Nota:</strong> Asumimos que ya tiene Flatpak configurado en su Linux OS.</p>

        <ol>
            <li><strong>Añadir el repositorio Flathub</strong> (si no lo ha hecho antes):
                <pre><code>flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo</code></pre>
            </li>
            <li><strong>Instalar la aplicación Inkscape</strong>:
                <pre><code>flatpak install flathub org.inkscape.Inkscape</code></pre>
            </li>
        </ol>

        <p>Una vez completada la instalación (por cualquiera de los métodos), Inkscape debería aparecer en el menú de aplicaciones de su entorno de escritorio. ¡Ahora puede empezar a crear y editar sus gráficos vectoriales!</p>
    </article>


<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 750px; margin: auto; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">

    <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Herramienta Educativa: Publicar Contenido Interactivo en su Blog</h2>

    <p>Una forma avanzada y segura de compartir material educativo, como mapas conceptuales, diagramas o presentaciones, es mediante la función de **Insertar** o **Embed Code** que ofrecen plataformas populares como Canva, Miro o Lucidchart.</p>

    <p>Esta técnica utiliza la etiqueta HTML <code>&lt;iframe&gt;</code> para crear una "ventana" del contenido original que se muestra directamente dentro de su publicación de blog.</p>

    <hr style="border: 0; border-top: 1px dashed #ccc; margin: 20px 0;">

    <h3 style="color: #007bff;">Ventajas de la Interactividad para el Lector</h3>
    <ul style="list-style-type: square; padding-left: 20px;">
        <li><b>Zoom y Navegación:</b> El lector puede utilizar las funciones nativas de **zoom y panorámica** del diseño. Esto es fundamental para explorar diagramas grandes o con texto muy detallado, todo sin salir del blog.</li>
        <li><b>Contenido Dinámico:</b> Si usted actualiza el diseño original en la plataforma (ej: en Canva), la versión incrustada en el blog se **actualiza automáticamente**.</li>
        <li><b>Experiencia de Usuario:</b> Ofrece una experiencia más profesional y dinámica que el simple uso de imágenes estáticas.</li>
    </ul>

    <h3 style="color: #007bff;">El Aspecto Crítico: Seguridad y Permisos</h3>
    <p>Para que la herramienta sea educativa y segura, el creador debe controlar las autorizaciones. Es vital configurar el permiso de uso compartido correctamente:</p>
    <ul style="list-style-type: square; padding-left: 20px;">
        <li>Antes de copiar el código <b>Embed</b>, el permiso de visualización debe estar configurado como <b>"Solo Lectura"</b> (o <i>"View Only"</i>).</li>
        <li>Este ajuste permite la interacción (zoom/navegación) pero **impide** cualquier edición, modificación o alteración del archivo original, garantizando la integridad de su material.</li>
    </ul>

    <p>Esta estrategia convierte su blog en una poderosa fuente para distribuir material visual complejo de forma segura e interactiva.</p>

</div>



<h2 style="font-size: 24px; color: #333; text-align: center;">Jekyll y Cusdis: El Salto a la Web Rápida y sin Fricciones para tu Monetización</h2>
<h3 style="font-size: 18px; color: #666; font-weight: normal; text-align: center; margin-bottom: 30px;">Máximo control con código abierto y la forma más eficiente de gestionar comentarios libres.</h3>

<p style="line-height: 1.7; text-align: justify; margin-bottom: 20px;">
    Como creadores digitales en <strong>stairwaycl</strong>, nuestra prioridad es la **eficiencia y el control total** sobre nuestra infraestructura para asegurar la sostenibilidad digital. Aunque las plataformas tradicionales facilitan el inicio, el desarrollador que busca optimizar cada milisegundo de carga y cada línea de código, inevitablemente mira hacia los **Generadores de Sitios Estáticos (SSG)**.
</p>

<p style="line-height: 1.7; text-align: justify; margin-bottom: 20px;">
    Para quienes ya trabajamos con el ecosistema **Ruby on Rails** y desarrollamos en **VS Code** bajo **Linux OS**, la elección natural es **Jekyll**. Esta transición no solo alinea tu flujo de trabajo de desarrollo, sino que también te da la libertad de integrar servicios de monetización como AdSense de la manera más limpia posible.
</p>

<h2 style="font-size: 20px; color: #3f689e; border-bottom: 2px solid #3f689e; padding-bottom: 5px; margin-top: 30px;">1. La Ventaja Técnica de Usar Jekyll</h2>

<ul style="line-height: 1.7; margin-left: 25px; margin-bottom: 20px;">
    <li><strong>Control Absoluto:</strong> Con Jekyll, no hay capas intermedias ni <em>widgets</em> que compliquen las ediciones del código. Insertas scripts de monetización y analíticas directamente en tu plantilla, asegurando que tu código siempre haga exactamente lo que deseas.</li>
    <li><strong>Velocidad Crucial:</strong> Los sitios estáticos son intrínsecamente más rápidos que cualquier CMS con base de datos. La velocidad es un factor determinante para el **SEO** y, por ende, para el éxito de tus ingresos digitales.</li>
    <li><strong>Despliegue Profesional:</strong> Trabajas con VS Code y Git, compilando y probando en tu entorno **Linux**, lo que te permite mantener la máxima calidad de código antes de publicar.</li>
</ul>

<h2 style="font-size: 20px; color: #3f689e; border-bottom: 2px solid #3f689e; padding-bottom: 5px; margin-top: 30px;">2. Cusdis: El Sistema de Comentarios del Futuro Estático</h2>

<p style="line-height: 1.7; text-align: justify; margin-bottom: 20px;">
    El reto de un sitio estático es la interactividad. ¿Cómo recibir *feedback* de nuestros lectores sin añadir una base de datos pesada o sacrificar la velocidad? Elegimos **Cusdis** por ser la solución ideal: un sistema de comentarios <strong>ligero, gratuito y que permite la publicación libre y anónima</strong> (sin cuentas de GitHub o de terceros).
</p>

<h3 style="font-size: 18px; color: #00897b;">Integración Sencilla Usando Liquid</h3>

<p style="line-height: 1.7; text-align: justify; margin-bottom: 10px;">
    Solo necesitas incluir el script principal una vez en la sección <code>&lt;head&gt;</code> de tu plantilla (reemplazando <code>[TU_CUSDIS_APP_ID]</code> con tu ID):
</p>

<pre style="background-color: #f4f4f4; padding: 10px; border: 1px solid #ddd; overflow-x: auto;">
<code>&lt;script async defer src="https://cusdis.com/js/widget/v2.js"
    data-host="https://cusdis.com"
    data-app-id="[TU_CUSDIS_APP_ID]"&gt;
&lt;/script&gt;
</code></pre>

<p style="line-height: 1.7; text-align: justify; margin-bottom: 10px; margin-top: 20px;">
    Y luego, insertar el contenedor de comentarios en tu layout de publicaciones (<code>_layouts/post.html</code>) usando variables **Liquid** para que Cusdis identifique la página correctamente:
</p>

<pre style="background-color: #f4f4f4; padding: 10px; border: 1px solid #ddd; overflow-x: auto;">
<code>&lt;div id="cusdis_thread"
    data-host="https://cusdis.com"
    data-app-id="[TU_CUSDIS_APP_ID]"
    data-page-id="{{ page.url }}"
    data-page-title="{{ page.title | escape }}"
    data-page-url="{{ site.url }}{{ page.url }}"&gt;
&lt;/div&gt;
</code></pre>

<h2 style="font-size: 20px; color: #3f689e; border-bottom: 2px solid #3f689e; padding-bottom: 5px; margin-top: 30px;">Lleva tu Estrategia al Siguiente Nivel</h2>

<p style="line-height: 1.7; text-align: justify; margin-bottom: 20px;">
    Jekyll, junto con herramientas ligeras como Cusdis, te proporciona la base más sólida para construir un proyecto digital sostenible y escalable. Te permite enfocarte en crear el contenido de valor (ya sean los relatos con reflexión de <strong>npcrecer</strong> o los análisis técnicos de <strong>stairwaycl</strong>) mientras tu infraestructura trabaja a la máxima velocidad para ti.
</p>


 <h1>La Brújula de los Municipios: Entendiendo el Decreto Ley N° 3.063 sobre Rentas Municipales</h1>

    <p>El desarrollo de cada comuna en Chile —desde las calles limpias de Providencia hasta la infraestructura de un municipio rural— se financia gracias a una norma que, aunque tiene más de cuatro décadas, sigue siendo la piedra angular: el <strong>Decreto Ley N° 3.063 de 1979</strong>, más conocido como la <strong>Ley de Rentas Municipales</strong>.</p>

    <p>Esta ley no solo establece los ingresos que deben percibir los municipios, sino que también define las obligaciones tributarias de miles de empresas, profesionales y ciudadanos. Si usted tiene un negocio o paga su Permiso de Circulación, este decreto lo afecta directamente.</p>

    <hr>

    <h2>El Corazón de la Ley: La Patente Comercial</h2>

    <p>El tema más relevante de este decreto, especialmente para emprendedores y empresas, es la <strong>Patente Comercial</strong>. Esta contribución grava el ejercicio de toda actividad lucrativa (comercial, industrial, profesional o de cualquier otra naturaleza) que se realice en un lugar determinado.</p>

    <p>El Artículo 24 del DL N° 3.063 establece la fórmula de cálculo, que es a la vez simple y variable:</p>

    <h3>1. La Tasa Variable: El Rango Clave</h3>

    <p>El valor anual de la patente se calcula como un porcentaje del <strong>Capital Propio Tributario</strong> de cada contribuyente, con una banda de variación:</p>

    <p>$$\text{Tasa Anual} = \text{Entre el **2,5 por mil** (0,0025) y el **5 por mil** (0,005)}$$</p>

    <ul>
        <li><strong>¿Quién decide la tasa?</strong> El Alcalde y el Concejo Municipal son quienes fijan la tasa dentro de este rango. Por eso, comunas como <strong>Providencia</strong> o <strong>Las Condes</strong> suelen aplicar el máximo (5‰) para aumentar su recaudación, mientras que otras municipalidades, buscando ser más atractivas para la inversión, aplican el mínimo (2,5‰).</li>
    </ul>

    <h3>2. Los Límites Infranqueables: UTM</h3>

    <p>Para que el sistema sea equitativo y sustentable, el Decreto Ley 3.063 establece límites claros utilizando la <strong>Unidad Tributaria Mensual (UTM)</strong>:</p>

    <ul>
        <li><strong>Piso Legal (Mínimo a pagar):</strong> La patente anual nunca puede ser inferior a <strong>1 UTM</strong>. Esto significa que incluso si su cálculo con el 2,5‰ o el 5‰ resulta en un monto muy bajo (como en el ejemplo de $5.000$ que discutimos antes), usted deberá pagar el valor de 1 UTM.</li>
        <li><strong>Techo Legal (Máximo a pagar):</strong> La patente anual no puede ser superior a <strong>8.000 UTM</strong> (aunque la Ley original mencionaba 4.000, las modificaciones posteriores la han elevado). Este límite protege a las grandes corporaciones de pagar montos exorbitantes.</li>
    </ul>

    <table>
        <thead>
            <tr>
                <th>Concepto</th>
                <th>Valor Anual</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Tasa</strong></td>
                <td>2,5‰ a 5‰ del Capital Propio Tributario</td>
            </tr>
            <tr>
                <td><strong>Mínimo</strong></td>
                <td>1 UTM</td>
            </tr>
            <tr>
                <td><strong>Máximo</strong></td>
                <td>8.000 UTM</td>
            </tr>
        </tbody>
    </table>

    <hr>

    <h2>Más Allá de la Patente: Otras Rentas Esenciales</h2>

    <p>Aunque la Patente Comercial es el impuesto más debatido, el DL N° 3.063 define una amplia gama de ingresos que son vitales para el funcionamiento de cada comuna:</p>

    <h3>1. Permisos de Circulación (Artículo 12) 🚗</h3>
    <p>Este es el segundo ingreso más importante. El decreto establece que los vehículos que transitan por las vías públicas están gravados con un <strong>impuesto anual por permiso de circulación</strong>, el cual va a beneficio exclusivo de la municipalidad donde se paga.</p>

    <h3>2. Ingresos Propios y el Fondo Común Municipal (FCM) 🤝</h3>
    <p>El Decreto Ley 3.063 también regula la distribución de otros ingresos, como el <strong>Impuesto Territorial</strong> (Contribuciones). Las municipalidades perciben el rendimiento total de este impuesto en su comuna, pero deben aportar una parte significativa al <strong>Fondo Común Municipal (FCM)</strong>.</p>
    <p>El FCM es un mecanismo de solidaridad fundamental en Chile: las comunas con mayores ingresos (como las que cobran el 5‰ de patente y tienen alto valor de propiedades) aportan más al Fondo, y este se redistribuye a las comunas con menores ingresos para financiar sus gastos y proyectos.</p>

    <h3>3. Derechos y Servicios Varios</h3>
    <p>La ley faculta a los municipios para cobrar derechos por servicios como:</p>
    <ul>
        <li><strong>Servicio de Aseo Domiciliario:</strong> Un cobro por la extracción de residuos sólidos.</li>
        <li><strong>Derechos de Propaganda:</strong> Cobros por la instalación de letreros, carteles o avisos publicitarios visibles desde la vía pública.</li>
        <li><strong>Otros Derechos:</strong> Cobros por instalaciones en bienes nacionales de uso público o multas municipales.</li>
    </ul>

    <p>En resumen, el Decreto Ley N° 3.063 es el mapa financiero que permite a cada municipalidad operar y mantener la calidad de vida de sus habitantes. Entender sus disposiciones, especialmente el cálculo de la patente, es crucial para la planificación financiera de cualquier negocio en Chile.</p>


empresa en un dia



 <header>
        <h1>USB-C vs. Qi: El Estándar Unificado y la Carga por Inducción en tu Flujo de Trabajo</h1>
        <p>Por StairwayCL | Tecnología y Eficiencia Energética</p>
    </header>

    <main>
        <section id="introduccion">
            <p>La alimentación de nuestros dispositivos es un pilar fundamental en el ecosistema digital. Dos tecnologías dominan la escena: el conector universal **USB-C** y la carga inalámbrica **Qi**. Ambos buscan simplificar la vida del usuario, pero ofrecen ventajas y desventajas muy distintas para quienes dependen de la eficiencia, como los programadores de **Ruby on Rails** y los editores de video en **Openshot** en su **Linux OS**.</p>
        </section>

        <hr>

        <section id="usb-c">
            <h2>⚡ USB-C (USB Type-C): Más que un Conector, un Ecosistema</h2>
            <p>El USB-C se ha convertido rápidamente en el estándar de facto, gracias a su versatilidad y sus capacidades avanzadas. No es solo un conector físico, sino una puerta de acceso a la alta potencia y la transferencia rápida de datos.</p>

            <ul>
                <li><strong>Diseño Reversible y Universal:</strong> Su característica más popular. No importa cómo lo conectes, lo cual mejora drásticamente la experiencia de usuario.</li>
                <li><strong>USB Power Delivery (USB-PD):</strong> Es la joya de la corona. Este protocolo permite que el cargador y el dispositivo (ya sea tu *smartphone* o tu *notebook*) **negocien** la potencia necesaria de forma segura. Esto significa que un solo cargador de **65W o más** con USB-C puede alimentar toda tu oficina digital.</li>
                <li><strong>Transferencia de Datos Ultra Rápida:</strong> Soporta estándares avanzados como USB 3.2 y Thunderbolt, esenciales para mover grandes archivos de video de **Openshot** o la base de código de **VS Code**.</li>
                <li><strong>Modo Alternativo (Alt Mode):</strong> Permite transmitir video (DisplayPort, HDMI) a través del mismo cable, simplificando la conexión a monitores externos.</li>
            </ul>
            <p>Para el usuario de **Linux**, el soporte de USB-C y USB-PD es generalmente excelente y nativo, lo que garantiza una gestión de energía sin problemas.</p>
        </section>

        <hr>

        <section id="qi">
            <h2>🔋 Qi (Carga Inalámbrica): Comodidad a un Costo</h2>
            <p>El estándar Qi, que utiliza inducción electromagnética, se centra en la comodidad de no usar cables.</p>

            <ul>
                <li><strong>Comodidad Extrema:</strong> Simplemente dejas el teléfono en una base y comienza a cargar. Es ideal para un escritorio ordenado o una mesita de noche.</li>
                <li><strong>Menor Eficiencia y Velocidad:</strong> Aquí reside su principal desventaja. La transferencia de energía por inducción genera más calor y suele ser **más lenta** que la carga por cable. El calor, a su vez, puede degradar la salud de la batería a largo plazo.</li>
                <li><strong>Movilidad Limitada:</strong> No puedes usar el teléfono de forma activa y cómoda mientras está cargando, ya que debe permanecer en contacto con la base.</li>
            </ul>
        </section>

        <hr>

        <section id="conclusion">
            <h2>✅ Decisión para la Productividad Digital</h2>
            <p>Ambas tecnologías tienen su lugar. **Qi** es excelente para la comodidad en el hogar, pero el **USB-C** es fundamental para el trabajo digital:</p>

            <p class="resumen-final" style="margin-top: 20px; padding: 15px; border: 1px solid #28a745; background-color: #e6f9ed; border-radius: 5px;">
                Si la prioridad es la **velocidad de carga**, la **máxima eficiencia** y la **versatilidad** para alimentar tu *notebook* y tus periféricos, el cargador y los cables **USB-C con USB-PD** son la inversión más inteligente para sostener digitalmente tu producción de contenido.
            </p>
        </section>
    </main>



 <header>
        <h1>Ubuntu Congelado: Solución Rápida para Cuando el Dock o Barra de Favoritos No Responde</h1>
        <p>Por StairwayCL | Linux OS y Solución de Problemas</p>
    </header>

    <main>
        <section id="introduccion">
            <p>Trabajando en nuestro entorno **Linux OS**, a veces nos encontramos con un problema frustrante: el escritorio parece congelado, la barra de favoritos (el *dock*) no responde y no podemos hacer clic en las aplicaciones. Esto no es un fallo catastrófico del sistema, sino un bloqueo del **GNOME Shell**, la capa gráfica que dibuja el escritorio de Ubuntu.</p>
            <p>La buena noticia es que no tienes que reiniciar tu *notebook*. Puedes reiniciar solo el entorno gráfico y volver a tu trabajo en **VS Code** o **Openshot** en segundos.</p>
        </section>

        <hr>

        <section id="causa-y-diagnostico">
            <h2>🛑 ¿Por Qué Se Bloquea el Dock?</h2>
            <p>Este problema ocurre cuando el proceso que maneja la interfaz gráfica (GNOME Shell) se atasca. Las causas más comunes incluyen:</p>
            <ul>
                <li>Una **extensión de GNOME** que falló.</li>
                <li>Un pico de consumo de recursos (por ejemplo, al renderizar un video pesado o compilar un proyecto grande de **Ruby on Rails**).</li>
                <li>Un problema temporal con el *driver* de video.</li>
            </ul>
        </section>

        <hr>

        <section id="solucion-rapida">
            <h2>✅ La Solución Mágica: Reiniciar GNOME Shell</h2>
            <p>El atajo de teclado es la forma más limpia y rápida de resolver el problema sin interrumpir los procesos o archivos que tienes abiertos.</p>

            <h3>Método 1: Comando de Reinicio Rápido</h3>
            <p>Si la pantalla no está completamente congelada y aún puedes interactuar a nivel de sistema:</p>
            <ol>
                <li>Presiona la combinación de teclas: <strong><code>Alt + F2</code></strong>. (Esto debería abrir una pequeña ventana de comando de ejecución).</li>
                <li>Escribe la letra <strong><code>r</code></strong> (de *restart* o reiniciar) en esa ventana.</li>
                <li>Presiona <strong><code>Enter</code></strong>.</li>
            </ol>
            <p>Verás un parpadeo, y el escritorio debería recargarse. El *dock* y el resto de elementos gráficos volverán a funcionar inmediatamente.</p>

            <h3>Método 2: Reinicio Forzado desde la Terminal (Si Alt + F2 no funciona)</h3>
            <p>Si la combinación de teclas anterior no funciona, deberás usar una consola de texto pura:</p>
            <ol>
                <li>Presiona <strong><code>Ctrl + Alt + F3</code></strong>. (Esto te llevará a una terminal de texto, una Consola Virtual).</li>
                <li>Inicia sesión con tu **usuario** y **contraseña** de Linux.</li>
                <li>Ejecuta el siguiente comando para enviar una señal de reinicio al proceso de GNOME Shell:
                    <pre><code>killall -3 gnome-shell</code></pre>
                </li>
                <li>Vuelve a tu entorno gráfico presionando <strong><code>Ctrl + Alt + F2</code></strong> (o F1, F7, dependiendo de tu distribución específica).</li>
            </ol>
        </section>

        <hr>

        <section id="conclusion">
            <p>Conocer estos comandos de reinicio del entorno gráfico es esencial para cualquier usuario productivo de **Linux OS**. Te permiten resolver fallos de la interfaz sin perder el trabajo en curso ni pasar por la larga secuencia de reinicio del sistema, manteniendo así tu flujo de trabajo de sustento digital eficiente.</p>
        </section>
    </main>


 <header>
        <h1>Favicon Perfecto: Usa iLoveIMG para Redimensionar y Comprimir tu Icono a Menos de 100 KB</h1>
        <p>Por StairwayCL | SEO y Optimización Web</p>
    </header>

    <main>
        <section id="introduccion">
            <p>El Favicon (el pequeño icono que aparece en la pestaña del navegador) es crucial para la identidad de tu marca. Sin embargo, si subes una imagen de logo demasiado grande, afectará la velocidad de carga de tu blog y, por extensión, tu SEO. La clave está en la **optimización**. </p>
            <p>Utilizar herramientas en línea como **iLoveIMG** es la forma más rápida y efectiva de asegurarte de que tu icono sea cuadrado, tenga la resolución correcta y, lo más importante, pese menos de **100 KB**.</p>
        </section>

        <hr>

        <section id="por-que-optimizar">
            <h2>🚫 ¿Por Qué el Peso del Icono Afecta la Carga?</h2>
            <p>Aunque parezca insignificante, un archivo pesado obliga al navegador de tus visitantes a realizar una descarga mayor. La optimización de imágenes es una práctica fundamental del SEO técnico, la misma que aplicamos al optimizar las imágenes de las entradas de nuestro canal de YouTube o de los blogs **npcrecer** y **Consejos en Hogar**.</p>

            <p class="nota-tecnica" style="margin-top: 15px; padding: 10px; border-left: 4px solid #007bff; background-color: #f7f9fc;">
                <strong>Recuerda:</strong> El tamaño ideal para subir el Favicon en Blogger es una imagen **cuadrada** (ej. 100x100px o 300x300px) en formato **PNG** (para soportar transparencia).
            </p>
        </section>

        <hr>

        <section id="pasos-iloveimg">
            <h2>🛠️ Tutorial Rápido: Optimiza tu Icono con iLoveIMG</h2>
            <p>El proceso es un flujo de dos pasos esenciales: primero ajusta las dimensiones, y luego reduce el peso.</p>

            <h3>Paso 1: Redimensionar tu Imagen</h3>
            <ol>
                <li>Ve a la herramienta **"Redimensionar IMAGEN"** de iLoveIMG.</li>
                <li>Sube tu imagen de logo grande.</li>
                <li>Selecciona la opción para redimensionar **"por píxeles"**.</li>
                <li>Introduce un valor cuadrado, como **100** para el Ancho y **100** para el Alto. Asegúrate de mantener la relación de aspecto si tu logo ya es cuadrado.</li>
                <li>Descarga el archivo redimensionado.</li>
            </ol>

            <h3>Paso 2: Comprimir el Archivo Final</h3>
            <ol>
                <li>Ahora ve a la herramienta **"Comprimir IMAGEN"** de iLoveIMG.</li>
                <li>Sube el archivo que acabas de redimensionar.</li>
                <li>iLoveIMG lo analizará y reducirá su peso manteniendo la calidad.</li>
                <li>Descarga el archivo final. <strong>Verifica que el peso sea inferior a 100 KB</strong> (en muchos casos será inferior a 10 KB, ¡lo cual es perfecto!).</li>
            </ol>
        </section>

        <hr>

        <section id="conclusion">
            <p>Una vez que tienes el archivo final optimizado, súbelo a la configuración de Favicon de tu blog en Blogger. Con el icono ajustado y comprimido, te aseguras de ofrecer la mejor experiencia de usuario y contribuyes a la velocidad de tu sitio, un factor clave para el **sustento digital** que buscamos a través de la web.</p>
        </section>
    </main>



 <header>
        <h1>Tipos de Parlantes: Cómo Elegir los Adecuados para la Producción de Contenido Digital (Evita Errores de Mezcla)</h1>
        <p>Por StairwayCL | Producción Multimedia y Audio</p>
    </header>

    <main>
        <section id="introduccion">
            <p>Si produces audio, ya sea grabando narraciones en <strong>Audacity</strong> o editando el sonido final en <strong>Openshot</strong>, la herramienta más importante no es el micrófono ni la interfaz de audio (como la Scarlett 2i4), sino el parlante con el que escuchas. El tipo de altavoz que utilices define si tu mezcla final sonará bien en todos los dispositivos o solo en tu estudio. </p>
        </section>

        <hr>

        <section id="parlantes-por-uso">
            <h2>🎧 Tipos de Parlantes Según su Uso: La Diferencia Fundamental</h2>
            <p>Debemos distinguir claramente entre los parlantes diseñados para escuchar y los diseñados para crear:</p>

            <h3>1. Monitores de Estudio: La Opción Profesional</h3>
            <ul>
                <li><strong>Descripción:</strong> Están diseñados para ofrecer una respuesta de frecuencia lo más <strong>plana y neutral posible</strong>. No están hechos para sonar "bonito", sino para ser honestos, revelando con precisión todos los defectos de tu mezcla.</li>
                <li><strong>Uso:</strong> Son esenciales para la <strong>mezcla y masterización</strong> de audio. Si tu mezcla suena bien en un monitor de estudio, sonará bien en cualquier otro lugar.</li>
                <li><strong>Tipos:</strong> Los más comunes para un estudio casero son los <strong>Activos</strong>, ya que tienen el amplificador integrado y se conectan directamente a la interfaz.</li>
            </ul>

            <h3>2. Parlantes Hi-Fi o de Consumo: El Error Común</h3>
            <ul>
                <li><strong>Descripción:</strong> Están diseñados para la <strong>escucha placentera</strong>. Suelen realzar ciertas frecuencias, especialmente los <strong>bajos</strong> y los agudos, para hacer que la música suene más impactante.</li>
                <li><strong>Riesgo en Producción:</strong> Si mezclas tu audio en un sistema Hi-Fi, el parlante ya está exagerando los bajos. Como resultado, tú tenderás a reducirlos en Audacity. Cuando el público escuche tu narración con parlantes neutrales, el audio sonará <strong>"delgado"</strong> y sin cuerpo.</li>
            </ul>
        </section>

        <hr>

        <section id="parlantes-por-tecnologia">
            <h2>🔊 Clasificación por Tecnología: Los Transductores</h2>
            <p>Cada parlante está compuesto por unidades individuales llamadas transductores, encargados de manejar distintos rangos de frecuencias:</p>

            <table>
                <thead>
                    <tr>
                        <th>Transductor</th>
                        <th>Función</th>
                        <th>Características</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Woofer</strong></td>
                        <td>Reproduce las <strong>frecuencias bajas</strong> (graves).</td>
                        <td>Son los conos más grandes, esenciales para mover el aire necesario en los subgraves.</td>
                    </tr>
                    <tr>
                        <td><strong>Midrange</strong></td>
                        <td>Reproduce las <strong>frecuencias medias</strong>.</td>
                        <td>Vitales para la claridad de las <strong>voces</strong> (narraciones) y la mayoría de los instrumentos musicales.</td>
                    </tr>
                    <tr>
                        <td><strong>Tweeter</strong></td>
                        <td>Reproduce las <strong>frecuencias altas</strong> (agudos).</td>
                        <td>Son los más pequeños, añaden el brillo y la nitidez al sonido final.</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <hr>

        <section id="clasificacion-vias">
            <h2>📏 Clasificación por Vías (Número de Transductores)</h2>
            <p>Los monitores de estudio se distinguen por cómo dividen la señal de audio (mediante un <em>crossover</em>) entre sus transductores:</p>
            <ul>
                <li><strong>2 Vías (Two-Way):</strong> El diseño más estándar. La señal se divide en dos: una para el woofer (que maneja graves y medios) y otra para el tweeter (agudos). Es un excelente punto de partida.</li>
                <li><strong>3 Vías (Three-Way):</strong> Ofrecen una mejor separación, con un transductor dedicado para el woofer (solo graves), otro para el midrange (solo medios/voces) y el tweeter (agudos). Esto aumenta la precisión, pero también el costo.</li>
            </ul>
        </section>

        <hr>

        <section id="conclusion">
            <p>Para la producción de tu canal de YouTube, la recomendación es invertir en unos buenos <strong>Monitores de Estudio Activos de 2 Vías</strong>. Este paso garantiza que el audio de tus series (sobre el Orjot Tzadikim, interpretación de sueños o ciencia ficción mágica) tenga la calidad y consistencia necesarias para ser monetizado digitalmente con éxito.</p>
        </section>
    </main>


 <header>
        <h1>Focusrite Scarlett 2i4: Calidad de Estudio, 4 Salidas y Compatibilidad Nativa con Linux</h1>
        <p>Por StairwayCL | Tecnología y Producción Multimedia</p>
    </header>

    <main>
        <section id="introduccion">
            <p>Para la producción de contenido digital de alta calidad, como las narraciones de nuestro canal de YouTube, la interfaz de audio es el puente entre el micrófono y tu **Linux OS**. La **Focusrite Scarlett 2i4** destaca por ofrecer calidad de estudio, versatilidad de 4 salidas y, lo más importante para los usuarios de sistemas abiertos, una excelente compatibilidad.</p>
            <p>Este dispositivo **2 entradas / 4 salidas** es ideal para quien busca grabar voz y música simultáneamente con alta fidelidad, asegurando que el audio para **Audacity** sea limpio y profesional.</p>
        </section>

        <hr>

        <section id="especificaciones-clave">
            <h2>🎤 Especificaciones Clave para el Creador de Contenido</h2>
            <p>La **Scarlett 2i4** está diseñada para el flujo de trabajo de producción, ofreciendo un control total sobre las entradas de audio y las salidas de monitoreo:</p>

            <ul>
                <li><strong>2 Preamplificadores Focusrite:</strong> Estos preamplificadores de bajo ruido garantizan que la señal de tu micrófono sea capturada con claridad y color natural, fundamental para el tono de voz de las narraciones.</li>
                <li><strong>Entradas Combo (XLR/Jack 1/4"):</strong> Permite conectar cualquier micrófono dinámico o de condensador, e instrumentos de línea (como un teclado o sintetizador MIDI).</li>
                <li><strong>Alimentación Phantom (+48V):</strong> Esencial si utilizas micrófonos de condensador para tus grabaciones de voz, ya que requieren esta alimentación para funcionar.</li>
                <li><strong>4 Salidas (2 Balanceadas TRS, 2 No Balanceadas RCA):</strong> Esta es su ventaja clave. Puedes conectar tus monitores de estudio a las salidas principales (1 y 2) y usar las salidas adicionales (3 y 4) para enviar una mezcla de monitoreo a un amplificador de auriculares o a otro equipo de mezcla.</li>
                <li><strong>MIDI I/O:</strong> Incluye conexiones MIDI In y Out, perfectas si necesitas integrar controladores externos para crear la música de fondo o los efectos de sonido de tus proyectos.</li>
            </ul>
        </section>

        <hr>

        <section id="compatibilidad-linux">
            <h2>🖥️ Compatibilidad "Plug and Play" con Linux OS y Audacity</h2>
            <p>Siendo usuario de **Linux OS**, la compatibilidad nativa es un requisito fundamental. La Scarlett 2i4 (particularmente las generaciones más antiguas) es un dispositivo **USB Class Compliant** (compatible con la clase USB estándar), lo que se traduce en:</p>

            <ul>
                <li><strong>No se requieren *drivers* oficiales:</strong> El kernel de Linux (a través de ALSA) detecta y configura la interfaz automáticamente. Es un verdadero *“plug and play”* que funciona directamente con tu sistema.</li>
                <li><strong>Control por Hardware:</strong> Los controles esenciales de la 2i4 (ganancia de micrófono, *Phantom Power*, etc.) están en el **panel frontal**. Esto elimina la dependencia de un *software* de control (como "Focusrite Control") que Focusrite no soporta oficialmente en Linux.</li>
                <li><strong>Integración con Audacity:</strong> Puedes seleccionar fácilmente la Scarlett 2i4 como tu dispositivo de entrada y salida dentro de las preferencias de **Audacity** para empezar a grabar inmediatamente con baja latencia.</li>
            </ul>
            <p class="nota-linux" style="margin-top: 15px; padding: 10px; border-left: 4px solid #cc0000; background-color: #fcebeb;">
                <strong>Nota:</strong> Aunque el funcionamiento básico es nativo, el soporte oficial de Focusrite es para Windows y Mac. Los usuarios avanzados de Linux pueden encontrar herramientas de la comunidad para configuraciones específicas, pero la funcionalidad de grabación esencial está asegurada.
            </p>
        </section>

        <hr>

        <section id="conclusion">
            <p>La **Scarlett 2i4** ofrece el equilibrio ideal entre las prestaciones necesarias para la producción multimedia profesional (cuentos infantiles, series de reflexión, etc.) y la fiabilidad de uso en tu **Linux OS**. Es una inversión sólida que facilita una producción de audio de alta calidad para sostener tu negocio digital.</p>
        </section>
    </main>


 <header>
        <h1>Conectores de Notebooks: Cómo Elegir el Correcto y Proteger tu Flujo de Trabajo en Linux</h1>
        <p>Por StairwayCL | Hardware y Productividad</p>
    </header>

    <main>
        <section id="introduccion">
            <p>El cargador de tu *notebook* es más que un simple accesorio; es la fuente de vida que asegura el rendimiento continuo de tu sistema operativo Linux y de herramientas de alta demanda como **Openshot**. Tras comprender la importancia de la potencia (W), es fundamental identificar los tipos de conectores y aplicar medidas de seguridad para proteger tu inversión digital.</p>
        </section>

        <hr>

        <section id="tipos-conectores">
            <h2>🔌 Tipos de Conectores Más Comunes</h2>
            <p>Más allá de la potencia, el conector físico es lo que más ha evolucionado, especialmente con la estandarización moderna. Asegurarse de tener el conector correcto es el primer paso para una carga estable.</p>

            <table>
                <thead>
                    <tr>
                        <th>Tipo de Conector</th>
                        <th>Descripción</th>
                        <th>Uso Principal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>**Cilíndrico (Barrel)**</td>
                        <td>El conector redondo tradicional, con un diámetro exterior y uno interior específicos.</td>
                        <td>La mayoría de las *notebooks* antiguas y muchas actuales (Dell, HP, Acer).</td>
                    </tr>
                    <tr>
                        <td>**USB-C (USB Type-C) / Thunderbolt**</td>
                        <td>El conector ovalado moderno, reversible y estandarizado. Permite cargar, transferir datos y video con un solo cable.</td>
                        <td>La mayoría de los modelos ultradelgados y nuevos, incluyendo muchas *notebooks* con **Linux OS**.</td>
                    </tr>
                    <tr>
                        <td>**Punta Fina o Rectangular**</td>
                        <td>Conectores propietarios que usan un pin central o una forma rectangular específica.</td>
                        <td>Marcas como Lenovo (punta fina o rectangular) y algunos modelos de HP.</td>
                    </tr>
                </tbody>
            </table>

            <p class="nota-usb-c" style="margin-top: 15px; padding: 10px; border-left: 4px solid #007bff; background-color: #f7f9fc;">
                <strong>Consejo para el USB-C:</strong> Si usas un cargador USB-C genérico, siempre verifica que soporte la potencia (**W**) que necesita tu *notebook*. Por ejemplo, para editar videos en Openshot se recomienda un cargador de **65W o más** para asegurar el máximo rendimiento sin agotar la batería.
            </p>
        </section>

        <hr>

        <section id="seguridad-linux">
            <h2>🔥 Seguridad y Monitoreo de Carga en Linux</h2>
            <p>Para un usuario que depende de su equipo, como usted, que edita, programa (Ruby on Rails) y mantiene proyectos con **VS Code** en **Linux**, la seguridad eléctrica y la monitorización son vitales:</p>

            <ul>
                <li>
                    <strong>Protección de Sobretensión:</strong> Conéctalo a un **protector de sobretensión**, no directamente a la pared. Esto es crucial para evitar daños por fluctuaciones eléctricas, especialmente en la placa base y el disco de almacenamiento.
                </li>
                <li>
                    <strong>Temperatura:</strong> Evita cubrir el ladrillo (el transformador) con ropa o ponerlo bajo alfombras mientras está funcionando. El calor es el principal enemigo de la electrónica y una alta temperatura reduce la vida útil del cargador.
                </li>
                <li>
                    <strong>Diagnóstico en Linux:</strong> Utiliza las herramientas de tu sistema operativo. En **Linux**, puedes usar comandos como <code>upower</code> o herramientas gráficas para monitorear el estado de carga de la batería y la energía que está recibiendo desde el cargador, asegurando que no haya déficits de potencia.
                </li>
            </ul>
        </section>

        <hr>

        <section id="conclusion">
            <p>El conector y la seguridad eléctrica son tan importantes como la potencia que consumes. Al prestar atención a estos detalles, garantizas una operación fluida para tu edición de video con Openshot y la máxima longevidad para tu *notebook*.</p>
        </section>
    </main>



 <article>
        <h1>Etiquetas Canónicas: Por Qué No Son Opcionales en SEO (Y Qué Significa "Página Alternativa") 🔍</h1>
        <p class="summary">Si ha revisado Google Search Console (GSC) recientemente, es posible que haya visto el mensaje: "Página alternativa con etiqueta canónica adecuada". Lejos de ser un error, este es un estado crucial que demuestra que su sitio web está **protegiendo su autoridad SEO**. Explicamos por qué la etiqueta canónica es obligatoria en la práctica para cualquier blog, incluyendo **stairwaycl**.</p>

        <h2>¿Qué Significa el Mensaje de GSC?</h2>

        <p>El mensaje **"Página alternativa con etiqueta canónica adecuada"** es una señal positiva. Significa que Google ha encontrado una URL secundaria de su contenido, pero que usted (o su plataforma, como Blogger) le ha dado la instrucción correcta para que la ignore.</p>

        <ul>
            <li>**Página Alternativa:** Es una URL que contiene su mismo contenido, pero que no es la principal (por ejemplo, una página de archivo, una página de etiquetas o una URL con parámetros de seguimiento como <code>?utm_source=...</code>).</li>
            <li>**Etiqueta Canónica:** Es el código <code>&lt;link rel="canonical" href="..."&gt;</code> que se encuentra en el <code>&lt;head&gt;</code> del HTML. Esta etiqueta le dice al motor de búsqueda: **"La versión principal de este contenido está en esta otra dirección."**</li>
        </ul>

        <p>Google respeta esta instrucción y marca la página como **"Descubierta: actualmente sin indexar"**, lo cual es el resultado esperado.</p>

        <hr>

        <h2>Por Qué la Etiqueta Canónica es una Obligación Estratégica</h2>

        <p>Si bien la etiqueta canónica no es un requisito técnico para que su sitio funcione, es un **requisito absoluto** para mantener una buena salud SEO y consolidar la autoridad de sus entradas.</p>

        <h3>1. Eliminación del Contenido Duplicado</h3>
        <p>Este es el principal beneficio. En sistemas de blog como **Blogger** o **Jekyll**, una sola entrada puede ser accesible a través de múltiples URLs:</p>
        <ul>
            <li>La URL limpia y permanente (la que queremos indexar).</li>
            <li>La URL de la página de etiquetas (ej., /tag/tecnologia).</li>
            <li>La URL de la página de archivo por mes o categoría.</li>
        </ul>
        <p>Sin la etiqueta canónica, Google podría indexar todas estas versiones, lo cual diluiría la fuerza de su entrada original o, peor aún, podría activar una penalización por **contenido duplicado**. El canónico resuelve esto **consolidando** la autoridad.</p>

        <h3>2. Consolidación de la Autoridad (PageRank)</h3>
        <p>Imagine que un enlace externo apunta accidentalmente a la URL de archivo de su entrada (ejemplo: `/archivo/2025/entrada-svg`). Sin el canonical, el crédito (o *PageRank*) de ese enlace se quedaría en la URL de archivo.</p>
        <p>Gracias a la etiqueta canónica, el crédito de ese enlace se transfiere y **consolida** en la URL principal, ayudando a que esa entrada se posicione mejor en los resultados de búsqueda. Es esencialmente un sistema de votación unificado.</p>

        <h3>3. Prevención de Indexación No Deseada</h3>
        <p>El estado que vio en GSC demuestra que la etiqueta funciona como un mecanismo de **"noindex inteligente"**. Le dice a Google que no indexe la versión secundaria, pero sí le proporciona la URL de la versión que debe indexar. Esto es mucho más limpio que simplemente bloquear el rastreo en el <code>robots.txt</code>.</p>

        <p><strong>En resumen:</strong> Si su GSC muestra "Página alternativa con etiqueta canónica adecuada", puede estar tranquilo. El sistema está funcionando para asegurar que el esfuerzo que invierte en su contenido (**Narraciones para Crecer**, **stairwaycl**, etc.) se centre en la URL correcta y le dé el máximo rendimiento SEO.</p>

    </article>



article>
        <h1>SVG para Bloggers Avanzados: Cómo Obtener Nitidez Perfecta (Y Por Qué No Necesitas Condicionales) 🚀</h1>
        <p class="summary">Si manejas la plantilla HTML de tu blog de Blogger, utilizas **Jekyll** o **Ruby on Rails**, o simplemente buscas que tu iconografía se vea cristalina en cualquier pantalla, el formato SVG es indispensable. Te mostramos cómo superar la limitación de Blogger e implementar esta tecnología de forma profesional.</p>

        <h2>1. Entendiendo la Superioridad del SVG</h2>
        <p>El formato **SVG** (*Scalable Vector Graphics*) es un formato de imagen basado en **XML** que define gráficos mediante puntos, líneas y formas geométricas (gráficos **vectoriales**), no píxeles (gráficos ráster como PNG o JPG).</p>

        <h3>Características Clave:</h3>
        <ul>
            <li><strong>Escalabilidad Perfecta:</strong> Al estar definido por fórmulas matemáticas, el SVG puede **agrandarse o achicarse infinitamente** sin perder calidad ni pixelarse. Es ideal para logotipos e iconos en diseño adaptable.</li>
            <li><strong>Basado en XML:</strong> Es un archivo de texto plano, lo que facilita su lectura por humanos y motores de búsqueda. Además, sus elementos pueden ser manipulados y animados con **CSS** y **JavaScript**.</li>
        </ul>

        <p><strong>Ejemplo Simplificado:</strong> Un SVG que dibuja un círculo es simplemente código que indica el centro, el radio y el color, no un mapa de puntos de color fijo.</p>

        <pre><code>
&lt;svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;circle cx="50" cy="50" r="40" fill="red" /&gt;
&lt;/svg&gt;
        </code></pre>

        <hr>

        <h2>2. El Desafío en Blogger y la Solución del Enlace Externo</h2>

        <p>Aunque el SVG es el futuro, la interfaz nativa de Blogger para subir el **favicon** solo acepta los formatos más antiguos y compatibles: **PNG** e **ICO**. Esto nos obliga a ser creativos si queremos la nitidez del SVG.</p>

        <h3>Pasos para la Implementación Avanzada:</h3>
        <ol>
            <li><strong>Vectorización (si es necesario):</strong> Si tienes tu logo en PNG, usa una herramienta como **Inkscape** (en tu **Linux OS**) para hacer la **vectorización** y obtener el archivo <code>.svg</code>.</li>
            <li><strong>Alojamiento Externo:</strong> Sube tu archivo **<code>favicon.svg</code>** a un servidor o servicio de *hosting* externo (CDN, GitHub, etc.) para obtener una **URL pública** que apunte directamente al archivo.</li>
            <li><strong>Edición de la Plantilla:</strong> Navega a **Tema** y luego haz clic en **Editar HTML** en tu panel de Blogger.</li>
            <li><strong>Inclusión del Tag:</strong> Dentro de la sección <code>&lt;head&gt;</code> de la plantilla (idealmente, justo antes de <code>&lt;/head&gt;</code>), añade la etiqueta de enlace, reemplazando la URL de ejemplo:</li>
        </ol>

        <pre><code>
&lt;!-- Opción Vectorial SVG, agregada manualmente con URL externa --&gt;
&lt;link rel="icon" type="image/svg+xml" href="[URL_COMPLETA_DE_TU_ARCHIVO.svg]"&gt;
        </code></pre>

        <hr>

        <h2>3. Máxima Compatibilidad: El Uso de Múltiples Formatos (Sin Condicionales)</h2>

        <p>Una preocupación válida es: ¿Qué pasa si un navegador antiguo o un sistema operativo no soporta el SVG? ¿Necesito código condicional para decirle qué hacer?</p>

        <p>La respuesta es **NO se necesita código condicional (if/else)**. Los navegadores modernos están diseñados para escanear las etiquetas `<link>` disponibles y automáticamente **elegir la mejor opción que soporte**.</p>

        <p>La práctica estándar es incluir el SVG, el PNG y el ICO en ese orden para crear una jerarquía de *fallback* (reserva) perfecta:</p>

        <pre><code>
&lt;!-- 1. MÁXIMA PRIORIDAD: SVG para calidad y escalado. Lo usará si es compatible. --&gt;
&lt;link rel="icon" type="image/svg+xml" href="[URL_DE_TU_LOGO].svg"&gt;

&lt;!-- 2. FALLBACK MODERNO: PNG para transparencia de canal alfa y navegadores modernos. --&gt;
&lt;link rel="icon" type="image/png" sizes="32x32" href="[URL_DE_TU_LOGO]-32x32.png"&gt;

&lt;!-- 3. FALLBACK CLÁSICO: ICO, el estándar más compatible (necesario para sistemas operativos). --&gt;
&lt;link rel="shortcut icon" href="[URL_DE_TU_LOGO].ico"&gt;

&lt;!-- Opcional: Icono táctil para dispositivos Apple --&gt;
&lt;link rel="apple-touch-icon" href="[URL_DE_TU_LOGO]-180x180.png"&gt;
        </code></pre>

        <p>Al listar los formatos del más avanzado al más clásico, garantiza que su ícono SVG se muestre siempre que sea posible, mientras que los archivos PNG o ICO (que usted ya sabe que es un contenedor de múltiples tamaños) actuarán como la reserva automática. ¡Guarde su plantilla y actualice la identidad visual de su blog!</p>

    </article>


Una oficina virtual es un servicio que proporciona a una empresa una dirección comercial y tributaria legítima y todos los servicios de apoyo administrativo necesarios, sin requerir que el empresario ni su personal trabajen físicamente en ese lugar.

Es un producto comercial que se ajusta a los requerimientos que el SII exige para el domicilio tributario.

1. El Código Tributario: El Requisito Base
La ley que manda la existencia de un domicilio es el Código Tributario. Su artículo 68 (y otras normas) establece que todo contribuyente debe declarar su domicilio para el Inicio de Actividades y debe comunicar cualquier modificación


 <header>
        <h1>Cómo Obtener tu Patente Comercial de forma Online para Servicios Digitales</h1>
        <p>Por StairwayCL | Asesoría Legal y Tributaria Digital</p>
    </header>

    <main>
        <section id="introduccion">
            <p>Si manejas un negocio de servicios digitales (como nosotros) y utilizas una oficina virtual, el trámite de Patente Comercial es uno de los requisitos legales más importantes. Tras un <a href="https://stairwaycl.blogspot.com/2025/10/cambio-de-domicilio-en-sii.html" target="_blank">cambio de domicilio tributario</a> ante el <a href="https://homer.sii.cl/" target="_blank">SII</a> (por ejemplo, de Macul a Providencia), el siguiente paso es la solicitud municipal, la cual, afortunadamente, se realiza casi en su totalidad de forma <b>online</b>.</p>
        </section>

        <hr />

        <section id="clave-oficina-virtual">
            <h2>Clave: El Enfoque de la Oficina Virtual</h2>
            <p>Debido a que tu actividad es <b>100% digital</b> y <b>no tiene atención de público</b>, la Municipalidad facilita el proceso. El trámite se enfoca en la legalidad de tu domicilio tributario y la naturaleza de tu giro.</p>

            <ol>
                <li><strong>El SII como Motor:</strong> El documento más importante que necesitas es el comprobante de <b>Modificación de Domicilio Tributario</b> aprobado por el SII, que acredita la nueva jurisdicción en Providencia.</li>

                <li><strong>No se Requieren Locales:</strong> Se considera una Patente de <b>oficina, sin atención de público</b>, lo que elimina la necesidad de presentar complejos certificados de recepción final de obras.</li>

                <li><strong>Pago Único:</strong> Solo debes pagar la patente en la comuna donde tienes tu domicilio tributario formal (Providencia). No debes pagar en tu residencia particular (Valdivia).</li>
            </ol>
        </section>

        <hr />

        <section id="pasos-online">
            <h2>Pasos para la Solicitud Digital en Providencia 💻</h2>
            <p>El trámite de solicitud debe iniciarse a través del portal de trámites online de la Municipalidad de Providencia. (<strong>Buscar en Google:</strong> "Solicitud de Patente Comercial e Industrial Providencia").</p>

            <h3>Documentación a Digitalizar y Adjuntar</h3>
            <p>Antes de ingresar la solicitud, ten estos documentos digitalizados (PDF o imagen):</p>
            <ul>
                <li><strong>Acreditación Tributaria (Clave):</strong> Copia del comprobante del trámite ante el SII que demuestra la existencia de tu actividad y, fundamentalmente, la **Modificación de Domicilio** que traslada tu base de operaciones a Providencia. *Nota: La municipalidad requiere que este documento refleje el domicilio actual en su comuna, incluso si tu Inicio de Actividades original fue en otra fecha.*</li>
                <li><strong>Acreditación del Inmueble:</strong> Contrato de Arriendo o Subarriendo notarial de la oficina virtual.</li>
                <li><strong>Declaración Jurada Simple:</strong> Indicando que la actividad **no es contaminante/molesta** y, crucialmente, que **no requiere atención de público**.</li>
                <li><strong>Identificación:</strong> Cédula de Identidad del representante legal y RUT de la empresa.</li>
            </ul>

            <h3>Proceso de Solicitud</h3>
            <p>Una vez que envías la solicitud y los documentos a través del portal, el proceso sigue estas etapas, notificándote por correo:</p>
            <ol>
                <li><strong>Revisión de Factibilidad:</strong> La Municipalidad revisa la documentación y la compatibilidad del giro con la zonificación del inmueble.</li>
                <li><strong>Notificación de Giro:</strong> Si es aprobada, recibirás la notificación del monto a pagar (el valor de la patente).</li>
                <li><strong>Pago Online:</strong> Realizas el pago digitalmente a la Municipalidad.</li>
                <li><strong>Obtención de Patente:</strong> Se emite el Decreto Exento y recibes la Patente Comercial en formato digital, autorizando tu operación legal.</li>
            </ol>
        </section>

        <hr />

        <section id="transicion-macul">
            <h2>¿Y la Patente Anterior de Macul? ❌</h2>
            <p>Si ya formalizaste el cambio ante el SII, **no necesitas mover documentos o pedir certificados de cese en la Municipalidad de Macul**.</p>
            <ul>
                <li><strong>Enfoque en el Destino:</strong> Providencia solo necesita la documentación que acredite tu legalidad en la nueva comuna (la aprobación del SII).</li>
                <li><strong>Libre de Deudas:</strong> La única precaución es asegurar que hayas **pagado todas las patentes en Macul** hasta el momento en que realizaste el cambio de domicilio. Esto evita que la nueva municipalidad solicite un certificado de no-deuda.</li>
            </ul>
        </section>

    </main>

    <footer>
        <p>Recuerda que la Patente se paga anualmente. Mantén tu documentación legal al día para enfocarte en el crecimiento de tu negocio digital. ¿Tienes dudas sobre el cálculo del capital propio?</p>
    </footer>


 <header>
        <h1>Cómo Obtener tu Patente Comercial de forma Online para Servicios Digitales</h1>
        <p>Por StairwayCL | Asesoría Legal y Tributaria Digital</p>
    </header>

    <main>
        <section id="introduccion">
            <p>Si manejas un negocio de servicios digitales (como nosotros) y utilizas una oficina virtual, el trámite de Patente Comercial es uno de los requisitos legales más importantes. Tras un <a href="https://stairwaycl.blogspot.com/2025/10/cambio-de-domicilio-en-sii.html" target="_blank">cambio de domicilio tributario</a> ante el <a href="https://homer.sii.cl/" target="_blank">SII</a> (por ejemplo, de Macul a Providencia), el siguiente paso es la solicitud municipal, la cual, afortunadamente, se realiza casi en su totalidad de forma <b>online</b>.</p>
        </section>

        <hr />

        <section id="clave-oficina-virtual">
            <h2>Clave: El Enfoque de la Oficina Virtual</h2>
            <p>Debido a que tu actividad es <b>100% digital</b> y <b>no tiene atención de público</b>, la Municipalidad facilita el proceso. El trámite se enfoca en la legalidad de tu domicilio tributario y la naturaleza de tu giro.</p>

            <ol>
                <li><strong>El SII como Motor:</strong> El documento más importante que necesitas es el comprobante de <b>Modificación de Domicilio Tributario</b> aprobado por el SII, que acredita la nueva jurisdicción en Providencia.</li>

                <li><strong>No se Requieren Locales:</strong> Se considera una Patente de <b>oficina, sin atención de público</b>, lo que elimina la necesidad de presentar complejos certificados de recepción final de obras.</li>

                <li><strong>Pago Único:</strong> Solo debes pagar la patente en la comuna donde tienes tu domicilio tributario formal (Providencia). No debes pagar en tu residencia particular (Valdivia).</li>
            </ol>
        </section>

        <hr />

        <section id="pasos-online">
            <h2>Pasos para la Solicitud Digital en Providencia 💻</h2>
            <p>El trámite de solicitud debe iniciarse a través del portal de trámites online de la Municipalidad de Providencia. (<strong>Buscar en Google:</strong> "Solicitud de Patente Comercial e Industrial Providencia").</p>

            <h3>Documentación a Digitalizar y Adjuntar</h3>
            <p>Antes de ingresar la solicitud, ten estos documentos digitalizados (PDF o imagen):</p>
            <ul>
                <li><strong>Acreditación Tributaria (Clave):</strong> Copia del comprobante del trámite ante el SII que demuestra la existencia de tu actividad y, fundamentalmente, la **Modificación de Domicilio** que traslada tu base de operaciones a Providencia. *Nota: La municipalidad requiere que este documento refleje el domicilio actual en su comuna, incluso si tu Inicio de Actividades original fue en otra fecha.*</li>
                <li><strong>Acreditación del Inmueble:</strong> Contrato de Arriendo o Subarriendo notarial de la oficina virtual.</li>
                <li><strong>Declaración Jurada Simple:</strong> Indicando que la actividad **no es contaminante/molesta** y, crucialmente, que **no requiere atención de público**.</li>
                <li><strong>Identificación:</strong> Cédula de Identidad del representante legal y RUT de la empresa.</li>
            </ul>

            <h3>Proceso de Solicitud</h3>
            <p>Una vez que envías la solicitud y los documentos a través del portal, el proceso sigue estas etapas, notificándote por correo:</p>
            <ol>
                <li><strong>Revisión de Factibilidad:</strong> La Municipalidad revisa la documentación y la compatibilidad del giro con la zonificación del inmueble.</li>
                <li><strong>Notificación de Giro:</strong> Si es aprobada, recibirás la notificación del monto a pagar (el valor de la patente).</li>
                <li><strong>Pago Online:</strong> Realizas el pago digitalmente a la Municipalidad.</li>
                <li><strong>Obtención de Patente:</strong> Se emite el Decreto Exento y recibes la Patente Comercial en formato digital, autorizando tu operación legal.</li>
            </ol>
        </section>

        <hr />

        <section id="transicion-macul">
            <h2>¿Y la Patente Anterior de Macul? ❌</h2>
            <p>Si ya formalizaste el cambio ante el SII, **no necesitas mover documentos o pedir certificados de cese en la Municipalidad de Macul**.</p>
            <ul>
                <li><strong>Enfoque en el Destino:</strong> Providencia solo necesita la documentación que acredite tu legalidad en la nueva comuna (la aprobación del SII).</li>
                <li><strong>Libre de Deudas:</strong> La única precaución es asegurar que hayas **pagado todas las patentes en Macul** hasta el momento en que realizaste el cambio de domicilio. Esto evita que la nueva municipalidad solicite un certificado de no-deuda.</li>
            </ul>
        </section>

    </main>

    <footer>
        <p>Recuerda que la Patente se paga anualmente. Mantén tu documentación legal al día para enfocarte en el crecimiento de tu negocio digital. ¿Tienes dudas sobre el cálculo del capital propio?</p>
    </footer>



Cómo Crear Enlaces de Anclaje Deslizantes en Blogger
No necesitas JavaScript ni código complicado, solo HTML. Sigue estos dos sencillos pasos, usando la vista de edición HTML de tu entrada de Blogger:

1. Marcar el Destino (Punto Final) con un ID
Primero, identifica el punto exacto en el texto al que quieres que el lector sea redirigido. Luego, envuelve ese elemento (generalmente un encabezado o un párrafo) con un atributo id.

Por ejemplo, si quieres que se deslice hasta el subtítulo "Conclusión":

HTML

<h2 id="final">Conclusión y Pasos Siguientes</h2>
El id="final" es la "etiqueta" o el marcador que estás creando. Es vital que el valor del id sea único en toda la página.

2. Crear el Enlace de Anclaje (Punto de Partida)
Ahora, en la palabra o frase donde quieres que el usuario haga clic, crea un enlace normal, pero en lugar de usar una URL externa, usa el símbolo de almohadilla (#) seguido del nombre del ID que creaste en el paso 1.

Por ejemplo, si quieres que la palabra "Resumen" sirva como enlace:

HTML

<p>Puedes ir directamente al <a href="#final">Resumen del Artículo</a>.</p>
El href="#final" le dice al navegador: "No vayas a otra página, busca el elemento que tiene el id="final" dentro de esta misma página".

Funcionamiento del Deslizamiento
La mayoría de los navegadores web modernos aplicarán un desplazamiento suave (smooth scroll) de forma automática cuando se usa un enlace de anclaje (#id). Si el desplazamiento no es suave, es algo que se puede corregir con una pequeña línea de CSS, pero en Blogger y navegadores actuales, generalmente funciona sin problemas por defecto.

Uso práctico en tu blog:

Podrías usar esto para crear un Índice de Contenidos al inicio de una entrada larga de stairwaycl o Consejos en el Hogar, permitiendo a los lectores saltar directamente a las secciones que les interesan.


 <header>
        <h1>Acer e Intel: La Alianza Estratégica que Impulsa tu Computador</h1>
        <p>Por StairwayCL | Tecnología e Informática</p>
    </header>

    <main>
        <section id="introduccion">
            <p>Al buscar un nuevo computador, es inevitable encontrar marcas como **Acer** junto a especificaciones de procesadores como **Intel Core i7**. Esta relación no es casual: ejemplifica la alianza clave entre los **fabricantes de hardware** (OEMs) y los **proveedores de componentes** que definen el rendimiento de tu equipo.</p>
        </section>

        <hr />

        <section id="rol-de-intel">
            <h2>Intel: El Cerebro y la Arquitectura 🧠</h2>
            <p>Intel es, primariamente, un fabricante de **microprocesadores (CPU)**, el "cerebro" de cualquier computador. Su rol es crítico:</p>
            <ul>
                <li><strong>Define el Rendimiento:</strong> La serie de procesadores **Intel Core** (i3, i5, i7, i9) determina la velocidad, la eficiencia y la capacidad de tu equipo para manejar tareas complejas.</li>
                <li><strong>Estándares de Plataforma:</strong> Intel también suministra otros componentes esenciales como chipsets, tarjetas Wi-Fi y soluciones gráficas integradas, creando una plataforma de hardware cohesiva que Acer utiliza como base.</li>
                <li><strong>Programa "Intel Evo":</strong> En los últimos años, Intel ha impulsado estándares de calidad y rendimiento (como la iniciativa Evo) que las marcas como Acer adoptan para garantizar una experiencia superior en portátiles.</li>
            </ul>
        </section>

        <hr />

        <section id="rol-de-acer">
            <h2>Acer: El Integrador y Diseñador 🖥️</h2>
            <p>**Acer** es uno de los mayores fabricantes globales de PCs (OEM - *Original Equipment Manufacturer*). Su rol es integrar la tecnología de Intel en un producto final competitivo:</p>
            <ul>
                <li><strong>Diseño y Segmentación:</strong> Acer se encarga del diseño físico (carcasa, teclado, pantalla), la gestión térmica y la elección de componentes secundarios (RAM, almacenamiento, batería). Ofrecen líneas diversas, desde la serie **Aspire** para uso diario, hasta **Predator** para *gaming*.</li>
                <li><strong>Optimización:</strong> La clave de un buen fabricante como Acer es la optimización: lograr que los potentes procesadores Intel funcionen de manera estable sin sobrecalentarse y que el consumo de energía sea eficiente.</li>
                <li><strong>Estrategia de Mercado:</strong> Al ser un gran comprador de chips Intel, Acer puede ofrecer una amplia gama de productos a precios competitivos, llegando a un público masivo que busca una buena relación calidad-precio.</li>
            </ul>
        </section>

        <hr />

        <section id="conclusion-lector">
            <h2>Conclusión: ¿Qué Significa Para el Lector?</h2>
            <p>Para el consumidor, esta alianza significa que al elegir un equipo **Acer con procesador Intel**, está confiando en una combinación establecida: la **innovación y el rendimiento** del microprocesador (Intel) se integra en una **solución de hardware optimizada y con diseño atractivo** (Acer). Entender esta dinámica es clave para tomar una decisión de compra informada. </p>
        </section>

    </main>

    <footer>
        <p>En tu próxima compra, ¿priorizarás la potencia de la CPU (Intel) o las características externas y el precio (Acer)?</p>
    </footer>



<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: auto;">
  <h1 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
    Guía de Control Parental en Huawei P30 Lite con Google Family Link
  </h1>

  <p>Si estás intentando configurar el Control Parental de **Google Family Link** en un dispositivo Huawei P30 Lite y no encuentras la opción en la ruta de "Configuración > Cuenta de Google", no te preocupes. Esto sucede por la capa de personalización de Huawei (EMUI). La solución es simple y se basa en tres métodos clave:</p>

  <h2 style="color: #0070c0;">
    Paso 1: Entender cómo funciona Family Link (La regla de los dos dispositivos)
  </h2>
  <p>Para que la supervisión funcione, debes instalar la aplicación **Family Link (para padres)** en tu teléfono. El dispositivo del niño (P30 Lite) queda supervisado al iniciar sesión con su cuenta. Las configuraciones de límites de tiempo y restricciones **se gestionan siempre desde tu teléfono** y se aplican automáticamente al P30 Lite.</p>

  <h2 style="color: #0070c0;">
    Paso 2: Encontrar la función de control en el P30 Lite
  </h2>
  <p>En el P30 Lite, la función de control parental de Google suele estar oculta bajo el propio sistema de gestión de Huawei:</p>
  <ul>
    <li><strong>Ruta de Huawei:</strong> Ve a <strong>Ajustes</strong> y busca <strong>Bienestar Digital</strong> o <strong>Digital Balance</strong>. Esta es la herramienta nativa de Huawei que te permite ver el tiempo de uso y establecer límites básicos de tiempo de pantalla.</li>
    <li><strong>Ruta de Google:</strong> Busca en <strong>Ajustes > Google > Niños y Familia</strong> o <strong>Controles parentales</strong>. Si no aparece, usa el siguiente método.</li>
  </ul>

  <h2 style="color: #0070c0;">
    Paso 3: Controlar la Play Store (Es la restricción más importante)
  </h2>
  <p>Family Link te da control total sobre la tienda de aplicaciones. <strong>No la bloquea, la supervisa.</strong></p>
  <p><strong>Para configurarlo:</strong></p>
  <ol>
    <li>Abre la app <strong>Google Play Store</strong> en el P30 Lite del niño.</li>
    <li>Toca el <strong>ícono de perfil</strong> (esquina superior derecha).</li>
    <li>Selecciona <strong>Configuración (Ajustes)</strong>.</li>
    <li>Selecciona <strong>Familia</strong> o <strong>Controles parentales</strong>.</li>
  </ol>
  <p>Desde allí, puedes:</p>
  <ul>
    <li>Establecer una **calificación por edad** para filtrar juegos y aplicaciones.</li>
    <li>Configurar para que tu hijo **siempre necesite tu aprobación** para descargar cualquier aplicación, gratuita o de pago.</li>
  </ul>

  <h2 style="color: #0070c0;">
    Respuesta a tu pregunta clave: ¿Se bloquea Play Store?
  </h2>
  <p><strong>No, no se bloquea</strong>. Family Link te da el poder de **aprobar o denegar cada descarga** que intente hacer tu hijo, y de filtrar por calificación de edad, manteniendo la tienda segura y funcional bajo tu supervisión.</p>
</div>



  <header>
        <h1>Jekyll vs. Blogger: ¿Por Qué tu Contenido Se Visualiza Inmediatamente en Sitios Estáticos?</h1>
        <p>Por StairwayCL | Tecnología y Arquitectura Web</p>
    </header>

    <main>
        <section id="introduccion">
            <p>Si manejas tanto **Jekyll** con GitHub Pages como **Blogger**, probablemente has notado algo curioso: al publicar una nueva entrada, el contenido de Jekyll parece estar en línea casi de forma **instantánea**, mientras que Blogger puede tardar unos minutos en reflejar la actualización. Esto no es una ilusión, es una diferencia fundamental en la forma en que cada plataforma construye y sirve tu sitio web.</p>
        </section>

        <hr>

        <section id="la-clave-sitios-estaticos">
            <h2>La Clave: Generación Estática vs. Dinámica ⚙️</h2>
            <p>La diferencia de velocidad se reduce a la arquitectura de la web que utiliza cada plataforma:</p>

            <h3>Jekyll: El Constructor Estático 🧱</h3>
            <p>Jekyll es un **Generador de Sitios Estáticos (SSG)**. Esto significa que:</p>
            <ul>
                <li><strong>Pre-compilación:</strong> Cuando escribes tu entrada en Markdown y la subes a GitHub (el proceso de <code>git push</code>), Jekyll compila *todo* el contenido en archivos HTML, CSS y JavaScript **finales**.</li>
                <li><strong>Servicio Directo:</strong> GitHub Pages (que actúa como tu *hosting*) simplemente toma esos archivos HTML listos y los sirve al navegador del usuario. No hay bases de datos que consultar ni código de servidor que ejecutar en el momento de la solicitud.</li>
                <li><strong>Resultado:</strong> La latencia es mínima. Tan pronto como la compilación de GitHub termina, el contenido está disponible globalmente, dando una sensación de **inmediatez total**.</li>
            </ul>

            <h3>Blogger: El Sistema Dinámico Tradicional 💾</h3>
            <p>Blogger es un **Sistema de Gestión de Contenidos (CMS)** basado en una arquitectura dinámica, similar a WordPress. Aunque es muy rápido, su proceso es más complejo:</p>
            <ul>
                <li><strong>Procesamiento en el Servidor:</strong> Cuando publicas, Blogger debe almacenar la entrada en una **base de datos**.</li>
                <li><strong>Cálculo Dinámico:</strong> Cada vez que un usuario visita tu página, el servidor de Blogger debe consultar la base de datos, mezclar la información con la plantilla de diseño y **generar el archivo HTML** para esa solicitud.</li>
                <li><strong>Propagación de Caché:</strong> Este proceso de generación, almacenamiento y distribución a través de sus **servidores de caché** globales (CDN) puede tardar unos minutos en propagarse completamente, causando el pequeño retraso que percibes.</li>
            </ul>
        </section>

        <hr>

        <section id="velocidad-vs-flexibilidad">
            <h2>Velocidad de Despliegue vs. Flexibilidad</h2>
            <p>Ambos sistemas tienen sus méritos, pero si tu enfoque es la **velocidad de despliegue** y la **eficiencia técnica** (como es el caso en StairwayCL), Jekyll lleva la delantera.</p>
            <ul>
                <li>**Usa Jekyll cuando:** Priorices la seguridad, la velocidad de carga (ya que son solo archivos estáticos) y la publicación inmediata para artículos y documentación técnica.</li>
                <li>**Usa Blogger cuando:** Necesites una interfaz de edición más visual y una gestión de usuarios más sencilla sin manejar Git.</li>
            </ul>
        </section>

        <hr>

        <section id="llamada-a-la-accion">
            <h2>El Último Paso: Notificar a Google (Sitemaps)</h2>
            <p>A pesar de la velocidad de Jekyll, recuerda que la **indexación** por parte de Google (el aparecer en los resultados de búsqueda) es un proceso separado. Un Sitemap correcto le asegura a Google que conoces todas tus páginas, optimizando aún más el tiempo de rastreo. ¡Nunca lo omitas!</p>
        </section>

    </main>

    <footer>
        <p>¿Prefieres la inmediatez de la web estática o la gestión de la dinámica? Comparte tu flujo de trabajo con nosotros.</p>
    </footer>


header>
        <h1>Qué es un Sitemap y Por Qué es Vital para el SEO de tu Sitio (Jekyll o Blogger)</h1>
        <p>Por StairwayCL | Tecnología e Informática</p>
    </header>

    <main>
        <section id="que-es">
            <h2>¿Qué es un Sitemap? 🤔</h2>
            <p>Imagina que tu sitio web es una casa con muchas habitaciones y pasillos. Un **sitemap** es como un plano o un índice que le entregas a un robot de Google para que sepa exactamente dónde está cada habitación y no se pierda. Es un archivo de texto o XML que contiene una lista de todas las URLs (páginas) de tu sitio que consideras importantes.</p>
        </section>

        <section id="por-que-importa">
            <h2>¿Por qué es tan Importante para tu SEO? 🚀</h2>
            <p>Un sitemap es crucial, especialmente para sitios nuevos o pequeños, porque acelera el proceso de **rastreo e indexación**. Mientras que Google puede encontrar tus páginas siguiendo enlaces, el sitemap le da un mapa directo, asegurando que no pase por alto ninguna. Es una herramienta técnica simple que optimiza la comunicación con los motores de búsqueda.</p>
            <ul>
                <li>**Descubrimiento más rápido:** Le ayuda a Google a encontrar tus páginas más rápido.</li>
                <li>**Indexación eficiente:** Asegura que Google sepa cuáles URLs debe priorizar.</li>
                <li>**Diagnóstico:** En Google Search Console, el sitemap te muestra si hay errores con las URLs que enviaste.</li>
            </ul>
        </section>

        <section id="como-crear">
            <h2>Cómo Crear y Enviar tu Sitemap 🛠️</h2>
            <p>La buena noticia es que si usas plataformas como Jekyll o Blogger, el proceso es en gran medida automático.</p>
            <ul>
                <li><strong>Jekyll:</strong> Los temas modernos de Jekyll suelen tener un sitemap.xml ya configurado. Simplemente revisa que el archivo exista en la raíz de tu proyecto.</li>
                <li><strong>Blogger:</strong> Blogger genera un sitemap automáticamente. Solo tienes que usar la URL: <code>tudominio.blogspot.com/sitemap.xml</code>.</li>
            </ul>
            <p>Una vez que tengas la URL de tu sitemap, el último paso es enviarlo a **Google Search Console**. En la sección "Sitemaps" de tu cuenta, ingresas la URL de tu archivo. Si aparece como **"Correcto"**, ¡felicidades! Has completado el paso técnico. Ahora el enfoque se mueve a la calidad del contenido para que Google decida indexarlo.</p>
        </section>

    </main>

    <footer>
        <p>Para más consejos sobre tecnología, programación y SEO, visita la sección de StairwayCL.</p>
    </footer>


oye cómo es que se pueden vender dominios web?







Google Search

Esa es una excelente pregunta. Vender un dominio web, especialmente uno con potencial o una extensión popular, puede ser un proceso lucrativo. El negocio se llama "domaineering" y funciona de manera muy similar a la venta de bienes raíces.



Aquí te explico los pasos clave y las plataformas para vender un dominio web:



1. Pasos Clave para Vender tu Dominio

El proceso de venta se divide en tres etapas principales: valoración, publicación y transferencia.



A. Valoración del Dominio (Poner el Precio)

Antes de publicar, necesitas saber cuánto vale tu dominio. El precio de un dominio se basa en:



Extensión (TLD): Los dominios .com suelen ser los más caros. Los dominios de código de país como .cl o extensiones populares como .net también tienen buen valor.



Longitud y Recordabilidad: Los dominios más cortos y fáciles de recordar (p. ej., de 1 a 3 palabras) valen más.



Palabras Clave: Si el dominio contiene palabras clave de alto valor comercial (como "autos", "seguros", "cripto"), aumenta su precio.



Tráfico/Historial (Si aplica): Si el dominio ya tiene tráfico web o un historial limpio (no fue usado para spam), su valor sube.



Herramientas para ayudar con el precio: Puedes usar herramientas de valoración como GoDaddy Domain Appraisal o consultar los precios de ventas históricas en bases de datos como NameBio para hacerte una idea realista.



B. Publicación y Venta

Una vez que tienes el precio, debes llevar el dominio a un mercado de compradores.



Elige una Plataforma: La forma más fácil y segura es usar un mercado de dominios o una casa de subastas (ver la sección de Plataformas).



Publica el Listado: Sube tu dominio a la plataforma, estableces un precio fijo o lo pones a subasta.



Configura el "Parking": Muchas plataformas te dan un DNS especial para que, cuando alguien escriba tu dominio en el navegador, vea automáticamente una página que diga: "Este dominio está en venta." (Esto se llama "Parking").



Negociación: Recibirás ofertas. Tendrás que negociar para llegar a un acuerdo.



C. Transferencia Segura

La transferencia es la parte crítica y la razón por la que siempre debes usar una plataforma de terceros (servicio de custodia o escrow):



Acuerdo: El comprador y tú aceptan el precio final.



Pago: El comprador deposita el dinero en la plataforma (no directamente a ti).



Transferencia: La plataforma te da las instrucciones para cambiar el registro de propiedad del dominio a favor del comprador (esto se hace desde tu registrador, como GoDaddy, Namecheap o NIC Chile).



Liberación del Pago: Una vez que la plataforma verifica que el dominio está en manos del comprador, te libera el dinero (descontando su comisión).



2. Plataformas Recomendadas para Vender Dominios

Para garantizar una venta segura y con gran visibilidad, lo mejor es usar un mercado de dominios reconocido:



Plataforma	Tipo de Venta Principal	Enfoque

Sedo	Precio fijo y Subastas	Uno de los mercados más grandes y antiguos a nivel global. Tienen servicio de escrow.

Afternic	Red de revendedores	Es propiedad de GoDaddy y lista tu dominio como "premium" en una enorme red de registradores.

Flippa	Subastas de activos digitales	Muy popular para vender no solo dominios, sino sitios web, aplicaciones y negocios digitales completos.

GoDaddy Auctions	Subastas	Ideal si buscas una subasta con mucha visibilidad, dado que GoDaddy es el registrador más grande.

Dominios.cl	Listado Local (Chile)	Específico para vender dominios .cl. Conecta con compradores chilenos y gestiona la venta localmente.



Exportar a Hojas de cálculo

Consejo: Puedes publicar un mismo dominio en varias plataformas (excepto en las que lo prohíban, como BrandBucket). Esto aumenta tus posibilidades de venta.















entonces godaddy no es el dueño de los dominios cuando uno compra un dominio? o nic.cl?





Esa es una excelente pregunta que toca un punto fundamental en el registro de dominios. La respuesta corta es: No, ni GoDaddy ni NIC Chile son los dueños de los dominios, sino los administradores del registro.



Cuando tú "compras" un dominio, en realidad lo que haces es alquilar o registrar el derecho exclusivo de usar ese nombre por un periodo determinado (generalmente 1, 2, 5 o 10 años).



Aquí te explico la función de cada entidad:



El Rol de los Registradores y los Propietarios

1. El Propietario (Tú)

Eres el titular de la Licencia: El dueño real o titular administrativo del dominio eres tú (o tu empresa). Eres quien tiene los derechos exclusivos para usar, configurar y, si quieres, vender ese nombre durante el período que pagaste.



Tu Nombre y Datos aparecen en el registro público WHOIS (a menos que uses un servicio de privacidad).



2. El Administrador Central (NIC Chile)

NIC Chile es la entidad encargada de la administración de la extensión de dominio territorial de Chile, que es .cl.



Es la Autoridad Única del .cl: NIC Chile es quien lleva el registro maestro de todos los dominios que terminan en .cl.



No vende directamente a cualquiera: Ellos administran la base de datos y establecen las reglas para el registro de los .cl. Si quieres registrar un .cl, tienes que hacerlo a través de ellos o de un agente registrador autorizado por ellos.



No es el dueño del dominio, solo lo inscribe y se asegura de que nadie más pueda usarlo mientras tú pagues la cuota de renovación.



3. El Agente Registrador (GoDaddy)

GoDaddy es uno de los registradores de dominios más grandes del mundo.



Es el Intermediario Comercial: GoDaddy actúa como un vendedor minorista y un gestor para los dominios. Ellos simplifican el proceso de registro y renovación para ti.



Te registran los Dominios Globales: Son el registrador principal de extensiones globales como .com, .net, .org, etc.



Son Agentes Registradores de NIC Chile: También pueden actuar como agentes autorizados para registrar un dominio .cl en tu nombre, facilitando la transacción y la gestión, aunque el registro final siempre queda en la base de datos de NIC Chile.



Conclusión

Ni GoDaddy ni NIC Chile son los dueños de tu dominio; ellos te dan las herramientas para que tú seas el dueño (el titular de la licencia) y se encargan de mantenerlo activo y configurado.



Si dejas de pagar la renovación, la licencia expira y el dominio vuelve a estar disponible para que cualquier otra persona lo registre.















y entonces a quien se lo estoy comprando?





Esa es la pregunta clave que aclara el proceso. La respuesta es que te lo estás comprando a ti mismo, o más precisamente, estás comprando el derecho exclusivo de uso a la organización que administra ese dominio.



Aquí te lo explico de forma sencilla:



1. ¿A quién le pagas el Dinero?

Le pagas al Agente Registrador (como GoDaddy, Namecheap, o un proveedor de hosting local).



Función del Registrador: Actúan como una tienda o un banco. Ellos reciben tu dinero, te brindan herramientas de gestión y se encargan de comunicarle a la autoridad global o local que tú eres el nuevo titular.



Comisión: Una parte de lo que pagas es la tarifa por el registro y sus servicios, y otra parte se destina a la autoridad central.



2. ¿Quién te otorga el Derecho?

El derecho exclusivo de uso del nombre te lo otorga la Autoridad o Entidad Administradora de la extensión:



Para .cl: El derecho te lo otorga NIC Chile.



Para .com, .net, .org y la mayoría de las extensiones globales: El derecho te lo otorga ICANN (Corporación de Internet para la Asignación de Nombres y Números) a través de un registro central llamado Registro de Dominios (como Verisign para los .com).



Resumen del Flujo

Piensa en ello como si compraras una patente o una marca en el mundo digital:



Tú (el Comprador) decides el nombre.



Le pagas al Registrador (GoDaddy).



El Registrador notifica a la Autoridad Central (NIC Chile o ICANN).



La Autoridad Central te inscribe como el Propietario/Titular del dominio en la base de datos pública (WHOIS) por el tiempo que pagaste.



En esencia, no compras la propiedad para siempre, sino que alquilas el nombre para tu uso exclusivo por un período, y el Registrador es tu facilitador en esa transacción.















y se puede comprar en icann directo asi como en nic.cl?





Esa es una excelente pregunta que ayuda a entender la jerarquía del sistema de dominios.



La respuesta corta es No, no puedes comprar un dominio directamente a ICANN.



La principal diferencia es su rol en el ecosistema de Internet:



Diferencia entre ICANN y NIC Chile

1. ICANN (El Regulador Global)

Rol: ICANN es la organización sin fines de lucro que coordina la asignación de identificadores únicos en Internet (incluidos los nombres de dominio globales como .com, .net, .org). Es el gran jefe, el regulador.



Función de Venta: ICANN no vende dominios al público. En cambio, autoriza a grandes empresas llamadas Registries (Registros) para administrar las bases de datos de cada extensión (.com, .net, etc.).



A quién le compras: Tú compras a los Registrars (Registradores) como GoDaddy o Namecheap, que son los intermediarios que ICANN ha acreditado para vender al público.



2. NIC Chile (El Administrador Local)

Rol: NIC Chile es la entidad que administra los dominios .cl (la extensión de Chile).



Función de Venta: A diferencia de ICANN, NIC Chile sí actúa como el Registrador Principal para la extensión que administra. Es decir, tú sí puedes registrar un dominio .cl directamente con ellos.



A quién le compras:



Directo: A NIC Chile (para dominios .cl).



Indirecto: A un Agente Registrador que tenga un acuerdo con NIC Chile para vender dominios .cl (como algunos proveedores de hosting o registradores internacionales).



Conclusión

La estructura es distinta para las extensiones globales y las locales:



Extensión	Autoridad Principal	¿Vende Directamente?	Intermediarios Requeridos

.com, .net, .org	ICANN (Regulador)	No	Sí (Registradores como GoDaddy)

.cl	NIC Chile (Administrador)	Sí	No (puedes ir directo)



Exportar a Hojas de cálculo

Entonces, para un dominio .cl, tienes la opción de ir directamente a la fuente (NIC Chile); para un dominio .com, estás obligado a usar un intermediario acreditado por ICANN.















que debo hacer para ser un registrador?







Google Search

Convertirse en un registrador de dominios es un paso importante, pero requiere una inversión financiera, técnica y operativa considerable. Hay dos caminos principales que puedes seguir, dependiendo de qué dominios quieras vender:



Ser Revendedor (Reseller): La opción más sencilla y menos costosa para empezar.



Ser Registrador Acreditado por ICANN: La opción más compleja para vender dominios globales (.com, .net, etc.).



Aquí te detallo los requisitos y pasos para cada uno:



Opción 1: Ser Revendedor (Reseller) de Dominios

Esta es la ruta que toma la mayoría de las empresas de hosting pequeñas y medianas que desean ofrecer dominios a sus clientes sin pasar por la compleja acreditación de ICANN.



Requisitos y Proceso:

Acuerdo Comercial: Firmas un contrato de revendedor con un Registrador de Dominios ya acreditado (como GoDaddy, Namecheap o empresas que ofrecen programas de reseller).



Inversión Inicial: Es mínima o nula. A veces solo se necesita un depósito para tu cuenta.



Gestión Técnica: El Registrador se encarga de toda la infraestructura técnica compleja (las conexiones con los Registries, la ICANN, etc.). Tú solo usas su sistema o API.



Margen de Ganancia: El Registrador te cobra un precio mayorista por cada dominio, y tú lo vendes a tus clientes a un precio minorista, quedándote con la diferencia.



Beneficio: Es una forma rápida de empezar a vender dominios globales (.com) y locales (.cl), ya que el Registrador ya hizo todo el trabajo de acreditación.



Opción 2: Ser un Registrador Acreditado por ICANN (Venta Directa de .com, .net, etc.)

Esta es la opción para empresas que desean tener control directo sobre el proceso de registro y renovaciones de dominios genéricos de alto nivel (gTLD), como .com, .net o los nuevos gTLD (.site, .tech, etc.).



El proceso de acreditación es riguroso y requiere demostrar solidez financiera y técnica.



A. Requisitos Financieros y Tarifas de ICANN

Convertirse en un registrador acreditado requiere una inversión económica significativa ante ICANN:



Tasa de Solicitud No Reembolsable: $3.500 USD (se paga al enviar la solicitud).



Cuota de Acreditación Anual: $4.000 USD (se paga al ser aprobado y anualmente después).



Cuota Variable (Trimestral): Una porción de los costos operativos de ICANN (el monto varía, ya que se divide entre todos los registradores).



Tasa Basada en Transacciones (Trimestral): Una tarifa fija que se cobra por cada nueva registración, renovación o transferencia (actualmente es de aproximadamente $0.20 USD por transacción).



B. Requisitos Operacionales y Técnicos

ICANN exige que la empresa solicitante demuestre la capacidad para gestionar la infraestructura crítica de Internet:



Solvencia Técnica: Debes demostrar que tienes la infraestructura técnica (servidores, API, software) para gestionar un alto volumen de registros, actualizaciones y consultas de clientes.



Solvencia Operacional: Debes tener la capacidad de contratar personal calificado suficiente para gestionar el volumen de registraciones proyectado y la atención al cliente (ICANN sugiere el equivalente a cinco empleados a tiempo completo).



Plan de Negocios: Debes presentar un plan de negocios exhaustivo y verificable que demuestre la viabilidad de la operación.



Acuerdos y Pólizas: Debes firmar el Acuerdo de Acreditación de Registradores (RAA) con ICANN y demostrar que tienes la capacidad de obtener un seguro de responsabilidad comercial.



C. Pasos del Proceso de Acreditación ICANN

Revisión de Criterios: Revisa los Criterios de Calificación y las Consideraciones Financieras detalladas por ICANN.



Llenar la Solicitud: Completa el formulario de Solicitud de Acreditación de Registrador de ICANN.



Pago y Envío: Envía la solicitud junto con la tarifa no reembolsable de $3.500 USD.



Revisión y Aprobación: ICANN revisa tu solicitud, realiza investigaciones y, si es aprobada, te informa por correo electrónico.



Firma del RAA: Firmas el Acuerdo de Acreditación de Registradores y pagas la cuota de acreditación anual.



3. Acreditación para .CL (Agente Registrador de NIC Chile)

Si tu enfoque principal es Chile, puedes aplicar para ser un Agente Registrador de NIC Chile. Este programa fue diseñado precisamente para que las empresas chilenas e internacionales puedan vender dominios .cl sin necesidad de pasar por NIC Chile para cada registro.



Este proceso requiere una acreditación específica con NIC Chile, donde debes cumplir con requisitos técnicos, financieros y operativos que te autoricen a realizar operaciones de inscripción y renovación de dominios .cl. Muchas empresas que ya son registradores ICANN (Opción 2) también se acreditan con NIC Chile para poder ofrecer el dominio local.















no reembolsable quiere decir que si te rechazan se dejan la plata?





Absolutamente. El término "no reembolsable" es muy claro en este contexto:



Si envías tu solicitud para ser registrador acreditado por ICANN, debes adjuntar la Tasa de Solicitud de $3.500 USD.



Si ICANN, después de revisar toda tu información técnica, financiera y legal, decide que no cumples con los criterios y rechaza tu solicitud, ellos se quedan con esa plata. No te devuelven los $3.500 USD.



Es una tarifa administrativa por el tiempo y el costo de evaluar tu propuesta, independientemente del resultado. Por eso, antes de solicitar la acreditación con ICANN, es crucial asegurarse de cumplir con todos los requisitos financieros y técnicos que exigen.

















entonces como seria para hacerlo con nic.cl?





¡Muy buena pregunta! El proceso para convertirte en Agente Registrador de dominios .CL (la opción equivalente a ser un "vendedor directo" en el contexto chileno) es distinto y lo gestiona directamente NIC Chile.



Aquí te explico cómo funciona el programa de Agentes Registradores de NIC Chile y cuáles son los pasos generales:



Proceso para ser Agente Registrador de Dominios .CL

El objetivo del programa es incorporar a empresas (chilenas o internacionales) para que actúen como revendedores autorizados, facilitando la inscripción y renovación de dominios .cl al público final.



1. Requisitos Preliminares (Similares a ICANN, pero en escala local)

Aunque NIC Chile no exige las mismas tarifas gigantescas de ICANN, sí pide requisitos de estabilidad y capacidad técnica:



Solidez Financiera y Legal: Debes ser una entidad legalmente constituida que pueda operar en Chile o en el extranjero.



Capacidad Técnica: Debes demostrar la infraestructura técnica necesaria para interactuar con los sistemas de NIC Chile (generalmente a través de APIs) y manejar el flujo de registros, renovaciones y consultas.



Seguridad: Debes garantizar que la gestión de los datos de los usuarios y las transacciones sea segura y cumpla con los estándares.



2. Postulación y Acreditación

El proceso de acreditación para convertirse en Agente Registrador se divide en fases:



Revisión de Condiciones: Debes revisar los documentos oficiales de NIC Chile que detallan las condiciones, obligaciones y el contrato que rige la relación entre la empresa postulante y NIC Chile.



Solicitud Formal: Presentas una solicitud formal, a menudo en línea, donde detallas la información legal, financiera y técnica de tu empresa.



Fase de Pruebas Técnicas: Este es un paso crucial. NIC Chile exige que demuestres que tu sistema puede interactuar con su plataforma de registro de forma correcta y segura. Debes pasar satisfactoriamente las pruebas de inscripción, renovación y gestión de dominios.



Aprobación y Firma de Contrato: Una vez que superas las pruebas y cumples con todos los requisitos, firmas un contrato de Agente Registrador con NIC Chile.



3. Operación y Tarifas

Conexión Directa: Como Agente Registrador, tienes acceso directo al sistema de registro de .cl, lo que te permite ofrecer el servicio a tus clientes en tiempo real.



Tarifas Mayoristas: A diferencia de las personas que compran en el sitio web de NIC Chile, tú como Agente Registrador obtienes los dominios a un precio mayorista. Tu ganancia se genera al venderlos al público a un precio minorista que tú mismo defines.



En resumen:



Para los dominios globales (como .com), la acreditación es con ICANN y es extremadamente cara y compleja.



Para los dominios locales (como .cl), la acreditación es con NIC Chile a través de su programa de Agentes Registradores, el cual es mucho más accesible para empresas que quieren operar en el mercado chileno.



¿Te interesaría que busquemos la página oficial de NIC Chile con los requisitos para la postulación al programa de Agentes Registradores?


-------------------
 con 100 vitas del blog cuanto se gana en adsense?





El dinero que se puede ganar con 100 visitas a un blog a través de Adsense es muy bajo y difícil de predecir.



No hay una cantidad fija, pero podemos usar un cálculo aproximado para darte una idea del rango.



Cómo se calculan las ganancias

La ganancia no depende solo de la cantidad de visitas, sino de varios factores clave:



RPM (Ingresos por cada Mil Impresiones): Este es el indicador más importante. El RPM te dice cuánto ganas por cada 1,000 visitas que ven tus anuncios. El RPM varía mucho según el nicho de tu blog (el tema que tratas).



RPM bajo: Nichos como los cuentos infantiles o la ficción (Narraciones para Crecer) suelen tener un RPM de entre $1 y $5. Los anunciantes en estos nichos no suelen pagar mucho por los clics.



RPM alto: Nichos como finanzas, tecnología o asesoría legal y tributaria (stairwaycl) pueden tener un RPM de entre $10 y $50 o más. Los anunciantes aquí pagan mucho más por cada clic.



CTR (Tasa de Clics): Es el porcentaje de visitantes que hacen clic en los anuncios. Un CTR promedio es de alrededor del 1%.



Ubicación de los Anuncios: Si los anuncios están bien ubicados, las personas harán más clics, lo que aumenta las ganancias.



Cálculo Estimado para 100 Visitas

Usando un CTR promedio del 1% y un RPM de $2 (típico para un nicho de RPM bajo):



Visitas: 100



Impresiones de Anuncios: 100 (si cada visita ve un anuncio)



RPM: $2



Cálculo: (100 impresiones / 1,000) * $2 = $0.20 USD



Con 100 visitas, tus ganancias serían de unos pocos centavos, probablemente entre $0.10 y $0.50 USD.



Incluso si tu blog tiene un RPM alto (por ejemplo, $20), la ganancia para 100 visitas seguiría siendo de solo $2 USD aproximadamente.



Conclusión

Ganar dinero con Adsense es un juego de volumen. Necesitas una gran cantidad de tráfico para ver ingresos significativos. El verdadero potencial no está en las primeras 100 visitas, sino en alcanzar las 10,000 o 100,000 visitas al mes, que es donde las ganancias se vuelven un sustento digital real.

-----------------

 que es la postergacion del pago de iva en el sii codigo 756 ? del f29. aparecio luego de haber comprado el mes anterior un arriendo de oficina virtual







Google Search

El código 756 en el Formulario 29 (F29) del Servicio de Impuestos Internos (SII) de Chile corresponde a la opción para solicitar la Postergación del Pago del Impuesto al Valor Agregado (IVA).



Este es un beneficio orientado principalmente a Micro, Pequeñas y Medianas Empresas (Mipyme) que les permite aplazar el pago del IVA determinado en el F29 por hasta dos meses después de su fecha de vencimiento original, sin que se generen reajustes, intereses ni multas, siempre que se declare dentro del plazo legal.



¿En qué consiste y cómo se activa?

Activación: Se activa al momento de declarar el F29 por internet, seleccionando la casilla de "Postergación Pago del IVA" (código 756).



Traspaso: Al seleccionar esta opción, el sistema del SII traspasa automáticamente el monto total del IVA determinado a pagar (que normalmente está en el código 89) al código 755 (Postergación Pago del IVA).



Nuevo Vencimiento: El SII emite un giro con un nuevo vencimiento que será el día 12 o 20 del mes subsiguiente a la declaración (dependiendo del tipo de contribuyente, por ejemplo, el 20 para facturadores electrónicos).



Requisitos Generales para acceder

Para optar a la postergación, las empresas deben cumplir con ciertos requisitos establecidos por el SII, entre los que se encuentran:



Estar acogido a ciertos regímenes tributarios (como el Régimen Propyme o General).



Tener un promedio anual de ingresos del giro que no supere las 100.000 UF en los últimos tres años comerciales (este monto puede variar según la ley vigente).



No registrar morosidad reiterada de impuestos (por ejemplo, tres períodos de IVA impagos en un período de doce meses).



Realizar la declaración del F29 dentro del plazo legal a través de internet.



Nota sobre la Oficina Virtual

El hecho de haber comprado el mes anterior un arriendo de oficina virtual (que es un gasto que te permite operar y, a menudo, usar su dirección comercial y servicios) no es lo que activa directamente el código 756.



Lo que sí te puede haber ocurrido es que:



Eres una Mipyme y cumples con los requisitos para la postergación.



Al declarar el F29 (donde debe haber registrado el IVA Crédito por el arriendo de la oficina), el sistema del SII te mostró automáticamente la opción de postergar el pago del remanente de IVA, debido a que cumples con el perfil de Mipyme.



Si no seleccionaste la opción, el código 756 simplemente aparecerá como un casillero disponible en el formulario. Si lo seleccionaste, el monto total a pagar de IVA se traspasó a un giro con una nueva fecha de vencimiento.















pero el 89 esta vacio, el 77 tiene 9mil pesos







Google Search

Es muy importante la distinción que haces, ya que confirma la naturaleza de tu declaración y aclara por qué el código 756 no implica un pago este mes.



La clave está en la relación entre el IVA Débito (impuesto de tus ventas) y el IVA Crédito (impuesto de tus compras, incluido el arriendo de la oficina virtual).



Significado de los Códigos en tu F29:

Código	Nombre	Condición	Monto	Implicación

89	IVA Determinado	Débitos > Créditos	Vacío	No tienes IVA a pagar al Fisco este mes.

77	Remanente Crédito Fiscal	Créditos > Débitos	$9.000	Tienes un saldo de $9.000 a tu favor.



Exportar a Hojas de cálculo

¿Qué significa tu situación ($9.000 en el Código 77)?

Que el código 77 tenga un monto de $9.000 y el código 89 esté vacío significa lo siguiente:



Crédito Fiscal es Mayor que Débito Fiscal: En este período, el IVA que pagaste en tus compras (IVA Crédito Fiscal, incluido el de la oficina virtual) fue superior al IVA que cobraste en tus ventas y servicios (IVA Débito Fiscal).



Remanente a Favor: Los $9.000 son tu "Remanente de Crédito Fiscal". Este monto se traspasa automáticamente para ser utilizado como un crédito en tu próxima declaración de IVA (F29) del mes siguiente.



No hay Pago de IVA: Como tienes un saldo a favor, el resultado del IVA es cero, y por lo tanto, no tienes que realizar un pago de IVA este mes.



Relación con la Postergación (Código 756)

El beneficio de Postergación de Pago del IVA (código 756) solo aplica cuando el resultado de la operación arroja un impuesto a pagar (es decir, si el código 89 tuviera un monto positivo).



Si el código 89 estuviera lleno: Y lo seleccionaras, el monto se movería al código 755 y se postergaría el pago.



Dado que el código 89 está vacío: Aunque el sistema te muestre la opción 756 (porque eres un contribuyente calificado, como una Mipyme), el beneficio de postergación es irrelevante porque no hay IVA que pagar ni que postergar.



En resumen: No te preocupes. El monto en el código 77 es una buena noticia, ya que significa que tienes un saldo a favor para el próximo mes, y por eso no tienes que realizar ningún pago de IVA por este período.















eso es porque no tengo ventas entonces? y como es es que está a mi favor? en la declaracion anual del otro año me devolveran dinero? por qué pasa eso? las empresas efectivamente compran sin iva a pesar de que no vendan?









Google Search

Excelente pregunta, que toca el corazón de cómo funciona el Impuesto al Valor Agregado (IVA) para las empresas.



Tienes remanente de $9.000 porque la ley del IVA en Chile permite a las empresas comprar con el IVA y usarlo como crédito, incluso si aún no han generado ventas (IVA Débito).



Aquí tienes el desglose de tus preguntas:



1. ¿Eso es porque no tengo ventas entonces?

No necesariamente que no tengas ventas, sino que tus compras fueron mayores que tus ventas (o solo tuviste compras).



Si no tuviste ventas (Débito Fiscal = $0): Al registrar el IVA de tus compras (IVA Crédito Fiscal, como el arriendo de la oficina), se genera automáticamente un saldo a tu favor, ya que $9.000 (IVA Crédito) es mayor que $0 (IVA Débito).



Si tuviste ventas, pero pocas: Si tu IVA Débito fue menor a tu IVA Crédito, también se genera un remanente. Por ejemplo: compraste por $100.000 de IVA Crédito y vendiste por $91.000 de IVA Débito. La diferencia de $9.000 es tu remanente.



En ambos casos, el resultado es que el Fisco (SII) te debe a ti el saldo, lo que se conoce como Remanente de Crédito Fiscal (código 77).



2. ¿Cómo es que está a mi favor? / ¿Las empresas efectivamente compran sin IVA a pesar de que no vendan?

Las empresas no compran "sin IVA", sino que compran con IVA, pero ese impuesto se convierte en un Crédito Fiscal para ellas.



Tú pagaste el IVA: Cuando pagaste el arriendo de la oficina virtual, la empresa te cobró el valor neto más el 19% de IVA (Impuesto al Valor Agregado). Tú pagaste el 100%.



El IVA se convierte en "Crédito": El IVA que pagas en tus compras relacionadas con tu giro (el arriendo de oficina es una de ellas) es un mecanismo legal que te permite el Estado para no pagar IVA dos veces. Por eso, ese monto se registra como un Crédito que puedes usar para compensar el IVA que cobres en tus ventas (Débito Fiscal).



Saldo a Favor: Si tu Crédito Fiscal es mayor que el Débito Fiscal, la diferencia queda a tu favor.



En esencia, el Fisco no te devolverá el IVA pagado hasta que no lo uses para compensar futuras ventas, que es la forma en que se liquida el impuesto mensualmente.



3. ¿En la declaración anual del otro año me devolverán dinero?

Regla General: No. El remanente de IVA no se pierde, pero se arrastra mes a mes para compensar futuros IVA a pagar.



El IVA es un impuesto de declaración mensual. El Remanente de Crédito Fiscal que tienes ahora ($9.000) se debe sumar a tus créditos del próximo mes para compensar tu IVA a pagar futuro. Este proceso de arrastre se puede hacer indefinidamente.



Excepciones (Cuándo SÍ se puede pedir la devolución):



El SII solo permite la devolución del remanente de IVA en casos muy específicos, siendo los más comunes:



IVA por Activo Fijo (Art. 27 bis): Si el remanente se generó principalmente por grandes compras de Activo Fijo (maquinaria, equipos, inmuebles) y se ha mantenido por dos o más períodos consecutivos, puedes solicitar la devolución mediante el Formulario 3280.



Empresas Exportadoras: Los exportadores tienen un régimen especial y pueden solicitar la devolución mensual del remanente, ya que sus ventas al exterior no llevan IVA.



A menos que ese remanente de $9.000 sea por la compra de un Activo Fijo, lo más probable es que simplemente se arrastre y compense tus futuros pagos de IVA. No tiene que esperar a la Declaración Anual de Renta para usarse.















no entiendo. entonces si compro un notebook con factura, e devolveran el iva el otro año?







Google Search

Es una pregunta excelente y muy específica, que nos permite aclarar la diferencia entre "crédito" y "devolución" en el IVA.



La respuesta corta es: Probablemente no te devolverán el dinero en efectivo, sino que lo usarás como un "descuento" en tus futuros pagos de IVA.



Veamos cómo se aplica el IVA del notebook (que se considera un Activo Fijo para tu empresa):



1. ¿Qué pasa con el IVA de la compra del Notebook?

El IVA (19%) que pagaste por el notebook con factura se convierte inmediatamente en Crédito Fiscal.



Este crédito se suma a tu remanente actual (los $9.000 que ya tienes).



Si tus compras (incluido el notebook) siguen siendo mayores a tus ventas, tu remanente será aún mayor y se verá reflejado en el código 77 de tu próximo F29.



Este remanente se arrastra mes a mes y se usa para compensar cualquier IVA a pagar (Débito Fiscal) que tengas en el futuro.



2. ¿Cuándo me devuelven el dinero en efectivo (la excepción)?

La única forma de que el Servicio de Impuestos Internos (SII) te devuelva el IVA de esa compra en efectivo es si cumples con los requisitos del Artículo 27 bis de la Ley de IVA, que está diseñado específicamente para compras de Activo Fijo (bienes que usarás para generar renta, como un notebook, maquinaria o un inmueble).



Para esto, se deben cumplir las siguientes condiciones clave:



Origen del Remanente: El remanente de IVA debe provenir de la adquisición de bienes destinados a formar parte de tu Activo Fijo (como el notebook).



Arrastre de Remanente: Debes haber mantenido ese remanente sin poder utilizarlo para compensar ventas por al menos dos períodos tributarios consecutivos.



Solicitud Formal: Después de esos dos meses de arrastre, puedes solicitar la devolución del remanente generado por el activo fijo a través del Formulario 3280 del SII.



Conclusión para tu caso:

Lo normal: Los $9.000 del arriendo más el IVA del notebook se seguirán acumulando en el código 77 hasta que tu empresa genere suficientes ventas (IVA Débito) que superen tus compras. En ese momento, el remanente se usará para no pagar el IVA de tus ventas.



La excepción (la devolución): Si pasan dos meses y ese remanente sigue creciendo porque no has tenido ventas, y gran parte de él se debe a la compra del notebook (Activo Fijo), sí podrías solicitar la devolución del IVA asociado a esa compra por medio del Formulario 3280.



Es decir, el IVA del notebook no se "pierde" ni "caduca", sino que la ley te da un mecanismo para recuperarlo: primero mediante compensación futura, y luego (si no se puede compensar) mediante devolución.















y esa devolucion ocurre el proximo año?







Google Search

No, la devolución del IVA por Activo Fijo no es un trámite que ocurra automáticamente solo una vez al año (como la Operación Renta). Es un trámite que puedes iniciar en cualquier momento del año, apenas cumplas los requisitos.



Aquí te explico los plazos clave:



El Plazo para la Devolución del IVA por Activo Fijo (Art. 27 Bis)

La clave para solicitar la devolución en efectivo es el tiempo de arrastre del remanente, no el final del año tributario.



Concepto	Plazo y Condición	Explicación

Tiempo Mínimo de Arrastre	2 meses consecutivos	Para el caso del notebook (Activo Fijo), debes tener el Remanente de Crédito Fiscal originado por esa compra acumulado sin poder usarse por al menos dos meses seguidos.

Momento de la Solicitud	Al mes siguiente (el tercero)	La solicitud formal (Formulario 3280) se presenta en el mes siguiente a aquel en que se cumplan los dos meses de arrastre.

Plazo del SII para Resolver	20 días hábiles	Una vez que el SII reciba la totalidad de tus antecedentes, tiene un plazo de 20 días hábiles para resolver si aprueba o rechaza la devolución.



Exportar a Hojas de cálculo

Ejemplo Práctico con tu Notebook:



Mes 1 (Octubre): Compras el notebook y el IVA genera un gran remanente (Cód. 77) en tu F29.



Mes 2 (Noviembre): No tienes suficientes ventas, por lo que el remanente de octubre se arrastra a tu F29 de noviembre, sumándose a los nuevos créditos.



Mes 3 (Diciembre): Si tu remanente sigue existiendo, ¡ya cumpliste con los dos meses de arrastre! En el mes de diciembre (al presentar el F29 de noviembre), puedes ingresar la solicitud de devolución (F3280) en el sitio web del SII.



Como ves, si compras el notebook ahora en octubre, podrías solicitar la devolución en diciembre de este mismo año, no tienes que esperar hasta la Operación Renta del próximo año.















entonces tendria que no tener ventas en 2 meses para eso?





La forma más sencilla de resumirlo es: Sí, en esencia, debes tener un saldo de IVA a tu favor (remanente) durante al menos dos meses consecutivos.



No es que debas tener cero ventas, sino que la clave es que el IVA que pagas en tus compras (Crédito Fiscal) sea consistentemente mayor que el IVA que cobras en tus ventas (Débito Fiscal), generando así un saldo a tu favor que no se pueda agotar.



Aquí el detalle:



Condición para solicitar el 27 bis (Activo Fijo)

Para poder solicitar la devolución por la compra del notebook (Activo Fijo, Art. 27 bis), el SII exige que:



Remanente de Cr

e

ˊ

 dito Fiscal>0

Y que este saldo no se haya podido utilizar para compensar IVA a pagar por dos períodos tributarios consecutivos.



Escenario	Explicación	¿Cumple?

Escenario 1: Cero Ventas	No tienes ventas (Débito Fiscal = $0), pero sí compras (Crédito Fiscal > $0). El Remanente es positivo y se mantiene.	Sí. (Es el caso más claro).

Escenario 2: Pocas Ventas	Tienes ventas, pero el IVA que cobras es menor que el IVA que pagas.

Cr

e

ˊ

 dito Fiscal>D

e

ˊ

 bito Fiscal

El Remanente es positivo y se mantiene.	Sí.



Exportar a Hojas de cálculo

Si durante los dos meses posteriores a la compra del notebook el remanente se mantiene acumulado porque no has tenido suficientes ingresos para compensarlo, cumples con la condición y puedes solicitar la devolución del IVA asociado a ese activo fijo.



Si en el primer o segundo mes tienes muchas ventas y tu Débito Fiscal es mayor que tu Crédito Fiscal, el remanente se agota y tendrás que esperar a otra situación donde se acumule por dos meses consecutivos.















y se puede retirar en efectivo o la empresa necesita una cuenta empresarial?







Google Search

En este punto es muy importante distinguir entre la empresa y la persona (socio o representante legal).



La devolución de impuestos (como el Art. 27 Bis) se hace a la Tesorería General de la República (TGR), quien es el organismo que finalmente paga el dinero.



Lo más recomendable y rápido es el depósito bancario, pero existen otras opciones:



1. Depósito Bancario (La Opción Preferida)

¿Se necesita una cuenta empresarial? Sí, en el Formulario 3280 debes indicar una cuenta bancaria para el depósito. Idealmente, debe ser una cuenta bancaria a nombre de la persona jurídica (la empresa) que está solicitando la devolución.



Velocidad: Es el método más rápido. La Tesorería (TGR) suele pagar mediante depósito bancario en un plazo de 10 a 20 días hábiles tras la aprobación de la solicitud.



Tipos de cuenta: La TGR acepta depósitos en cuenta corriente, cuenta vista, cuenta de ahorro o Cuenta RUT. Sin embargo, dado que la devolución es para la empresa, la cuenta debe estar asociada al RUT de la empresa.



2. Cobro en Efectivo o Cheque (Opciones Secundarias)

¿Se puede retirar en efectivo? Sí, pero generalmente esto ocurre cuando el depósito bancario es rechazado (por error en el número de cuenta, cuenta cerrada, etc.).



Monto y Lugar: Si el depósito es rechazado y el monto es inferior a $3.000.000, el dinero suele quedar disponible para retiro en las cajas del Banco Estado o Serviestado, presentando la cédula de identidad del representante legal.



Cheque: Si el monto de la devolución es muy grande (superior a $3.000.000) o no se puede depositar, la TGR puede optar por emitir un cheque y enviarlo al domicilio tributario registrado.



Resumen:



Como la devolución es para la empresa, debes tener o utilizar una cuenta bancaria asociada al RUT de la empresa para el depósito. Cobrar en efectivo es posible, pero solo como una medida de contingencia si el depósito falla, y con un límite de monto.

















y hay alguna tarjeta para empresas que sea digital y facil de obtener?







Google Search

Es una excelente pregunta, ya que la tendencia actual en Chile es facilitar el acceso a productos financieros para pymes y emprendedores a través de canales digitales.



Si buscas una opción digital, fácil de obtener (sin muchos requisitos de antigüedad o ventas) y que te permita recibir la devolución del IVA, las mejores opciones suelen ser las cuentas digitales ofrecidas por la banca tradicional y las Fintech (empresas de tecnología financiera) que incluyen una tarjeta virtual.



Aquí te presento las categorías y algunos ejemplos de opciones fáciles de obtener para tu empresa (Persona Jurídica o Pyme):



1. Cuentas Vistas/Prepago Digitales para Empresas (Sin costo o de bajo costo)

Estas son las opciones más rápidas de obtener, ya que suelen tener pocos requisitos de antigüedad o venta mínima y se abren 100% online:



Opción	Tipo de Cuenta y Tarjeta	Facilidad de Obtención	Ventajas Destacadas

Cuenta FAN Emprende (Banco de Chile)	Cuenta Vista 100% digital. Incluye Tarjeta de Débito física.	Apertura 100% en línea para Personas Jurídicas. Sin requisitos de antigüedad ni mínimo de ventas.	Cero costo de mantención. Ofrece acceso a soluciones y beneficios del Banco de Chile para pymes.

ScotiaZero Empresas (Scotiabank)	Cuenta Corriente Digital (Plan Básico). Incluye Tarjeta de Débito.	Apertura 100% online. Plan sin costo de mantención para empresas sin antigüedad ni ventas, con un tope de abonos mensual.	Es una cuenta corriente (que suele ser más difícil de obtener) con costo $0 en su plan inicial.

Kredito (Fintech)	Cuenta Vista Digital. Incluye Tarjeta Mastercard Prepago Virtual (y a veces física).	Se promociona como 100% digital e inmediata para Personas Jurídicas y sin requisitos de venta o antigüedad.	Permite tener límites de saldo más altos que otras tarjetas prepago. Ideal para compras online con la tarjeta virtual.

Tapp Empresas (Caja Los Andes)	Tarjeta Prepago (Cuenta Digital).	Fácil de obtener a través de su aplicación.	Funciona bien como una tarjeta de gastos operacionales sencilla.



Exportar a Hojas de cálculo

2. Tarjetas Corporativas de Gestión de Gastos (Fintech)

Estas son plataformas diseñadas específicamente para el control de gastos de la empresa y siempre incluyen tarjetas virtuales:



Cardda: Ofrece una plataforma integral para la gestión de gastos con tarjetas físicas y virtuales ilimitadas. La principal ventaja es el control de presupuestos y la automatización, ideal para separar los gastos del notebook y otros insumos.



Global66: Se enfoca en servicios internacionales y ofrece una Tarjeta Corporativa Mastercard Prepago Virtual para compras nacionales e internacionales.



Recomendación Personalizada

Dado que necesitas una cuenta para la devolución del IVA y mencionaste un notebook (que probablemente usarás para compras online), te sugiero buscar primero una opción que te entregue una cuenta bancaria a nombre de tu RUT (persona jurídica) para el depósito, y que a la vez te dé una tarjeta virtual rápida:



Revisa las opciones bancarias digitales (FAN Emprende o ScotiaZero): Al ser bancos establecidos, te aseguras de que el proceso de depósito de la TGR será directo y reconocido. Además, obtendrás una cuenta en el RUT de tu empresa.



Complementa con una solución Fintech (Kredito o Cardda): Si la opción bancaria tarda o no te convence su tarjeta digital, puedes usar una Fintech (como Kredito) para la operatividad diaria de compras online, ya que su tarjeta virtual suele ser más rápida de activar y tiene menos restricciones para los pagos digitales.



En todos estos casos, la clave es que la apertura del producto sea 100% en línea y con bajos requisitos iniciales, lo que la hace fácil y rápida de obtener.
-------------------------
Audacity, OpenShot OBS Studio
Qué es Indexación en GSC?https://search.google.com/
----
 Esto requiere de una combinación de JavaScript, HTML y CSS para funcionar correctamente en Blogger. Dado que Blogger puede ser restrictivo con los scripts y estilos externos, el código se debe integrar en un widget de HTML/JavaScript.



Aquí tienes el código completo para un carrusel muy básico que muestra tu mensaje. Este carrusel se desliza automáticamente con un intervalo y es simple para asegurar la compatibilidad.



Código del Carrusel (HTML, CSS y JavaScript)

Este código está diseñado para ser pegado directamente en un widget de HTML/JavaScript en el diseño de tu blog.

Cómo implementarlo en Blogger

Ve al Panel de control de tu blog.



Haz clic en Diseño o Layout.



Selecciona Añadir un Gadget (o Add a Gadget) en la ubicación donde quieres que aparezca el carrusel (por ejemplo, en la barra lateral o al inicio del contenido).



En la lista de gadgets, elige HTML/JavaScript.



Pega todo el código de arriba (incluyendo las etiquetas <style>, <div> y <script>) en el campo Contenido.



Ponle un título, por ejemplo: "Mensaje de Teshuvá", o déjalo en blanco si no quieres título.



Haz clic en Guardar.



Notas Importantes

Mensaje Único: Actualmente, el carrusel solo tiene un mensaje. Si copias y pegas un segundo <div class="teshuva-carousel-slide">...</div> dentro del <div id="teshuvaCarouselTrack">, el JavaScript comenzará a rotar entre el primer y el segundo mensaje automáticamente.



Compatibilidad: El uso de document.addEventListener('DOMContentLoaded', ...) asegura que el script solo se ejecute cuando toda la página esté cargada, lo que previene errores comunes en Blogger.



Estilo (CSS): La parte <style> define la apariencia. Puedes modificar colores (background-color, color), fuente (font-size), y el tamaño (max-width, height) para que se ajuste mejor al diseño de tu blog.



necesito que tome toda la pantalla y que sea fondo transparente y letras rosas



Posicionamiento de Pantalla Completa:



position: fixed;: Esto saca el elemento del flujo normal del documento y lo posiciona con respecto a la ventana del navegador.



top: 0; left: 0;: Lo ancla a la esquina superior izquierda.



width: 100vw; height: 100vh;: vw (viewport width) y vh (viewport height) son unidades que representan un porcentaje del ancho y alto de la ventana del navegador, respectivamente. 100vw es el 100% del ancho del viewport, y 100vh es el 100% del alto.



z-index: 9999;: Asegura que el carrusel esté por encima de casi cualquier otro elemento de tu blog.



pointer-events: none;: ¡Importante! Esto hace que el carrusel sea "transparente" a los eventos del ratón. Es decir, aunque esté visualmente sobre otros elementos, podrás hacer clic o interactuar con los elementos que están debajo de él. Esto es crucial para que los usuarios puedan seguir usando tu blog.



Fondo Transparente:



background-color: rgba(0, 0, 0, 0); en .teshuva-carousel-container y .teshuva-carousel-slide: rgba permite especificar un canal alfa (transparencia). Un valor de 0 significa completamente transparente.



Letras Rosas:



color: #FF69B4;: Se ha cambiado el color del texto a un rosa fuerte (#FF69B4, que es "Hot Pink"). Puedes cambiarlo por otro código hexadecimal de rosa si prefieres.



text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);: He añadido una pequeña sombra al texto para mejorar la legibilidad, especialmente si el fondo de tu blog tiene colores claros o variables.



Centrado del Mensaje:



En .teshuva-carousel-container, he usado display: flex; justify-content: center; align-items: center; para centrar perfectamente el contenido del carrusel (el track) en medio de la pantalla.



Lo mismo se aplica a .teshuva-carousel-slide para centrar el texto dentro de cada "slide".



Tamaño de Fuente Adaptativo:



He añadido @media queries para reducir el tamaño de la fuente en pantallas más pequeñas (tablets y móviles) para que el mensaje no ocupe demasiado espacio en dispositivos móviles.



Desplazamiento en vw:



En el JavaScript, track.style.transform = 'translateX(' + offset + 'vw)'; ahora usa vw en lugar de % para el desplazamiento. Esto es más consistente con el ancho 100vw de los slides.



Implementación en Blogger:

Sigue los mismos pasos que antes:



Ve al Panel de control de tu blog.



Haz clic en Diseño o Layout.



Selecciona Añadir un Gadget (o Add a Gadget).



Elige HTML/JavaScript.



Pega todo el código actualizado en el campo Contenido.



Haz clic en Guardar.



pero es un header. Está gigante, y está encima de todo. Creo que deberia ser relative





Tienes razón, si el carrusel con el mensaje es un elemento de encabezado o una barra de anuncios y quieres que:



Se integre en el flujo normal de tu blog (no flotando sobre todo).



Ocupe el ancho completo de la pantalla.



Esté en la parte superior (como un header).



...entonces cambiar el posicionamiento de fixed a relative o absolute (dependiendo del comportamiento que busques en relación a otros elementos de la plantilla de Blogger) es lo más adecuado.



El código anterior usaba position: fixed y height: 100vh, lo cual lo hacía gigante y lo ponía por encima de todo (z-index: 9999) y te impedía hacer clic en el contenido subyacente (pointer-events: none).



Aquí tienes el código modificado para un header que ocupa el ancho completo, tiene una altura manejable y respeta el flujo de tu blog:



Código Modificado para un Header (Relativo)

Pega este código en un widget HTML/JavaScript en la parte superior de tu diseño de Blogger (por ejemplo, justo debajo del Navbar o Banner principal).







el mensaje no se mueve. agregale esto al carrusel :



Apóyanos



link.mercadopago.cl/npcrecer







Absolutamente. Vamos a solucionar el problema de que el mensaje no se mueve y a crear un segundo header para incluir el mensaje de apoyo con el enlace de Mercado Pago.



El problema de movimiento ocurre porque el JavaScript detecta que solo hay un slide. Para que el carrusel funcione, necesita al menos dos elementos (<div class="teshuva-carousel-slide">).



Aquí tienes el código completo para dos headers separados (o dos widgets), ambos con movimiento y fondo transparente, letras rosas:







2. Carrusel de Apoyo (Mercado Pago)

Este es el nuevo header. Incluye dos slides diferentes: uno con el texto de apoyo y otro con el enlace. El enlace es clicable al estar dentro de una etiqueta <a>.



¡Importante!

He cambiado el id del track a teshuvaCarouselTrack2 en el HTML y en el JavaScript para que funcione de forma independiente al primer carrusel.



Cómo Implementar los Dos Headers

Debes pegar cada bloque de código (HTML, CSS y JS juntos) en un widget de HTML/JavaScript separado dentro de tu diseño de Blogger, asegurándote de colocarlos en el orden que deseas que aparezcan en la parte superior de tu blog.



Crea el Primer Gadget: Pega el Código 1 (Carrusel de Teshuvá) en un nuevo gadget y guárdalo.



Crea el Segundo Gadget: Pega el Código 2 (Carrusel de Apoyo) en un segundo nuevo gadget y guárdalo.



Nota sobre los Estilos (CSS):



Para evitar duplicidad, solo necesitas pegar la etiqueta <style> una vez. Lo ideal es que la pegues junto con el Código 1. El Código 2 solo necesita el div (HTML) y el script (JavaScript) para funcionar, ya que reutiliza las clases CSS definidas anteriormente.



Implementación Optimizada:

Gadget 1 (Teshuvá y Estilos): Pega todo el Código 1.



Gadget 2 (Apoyo): Solo pega el div y el script del Código 2 (excluye la etiqueta <style>).



Con esto, ambos carruseles deberían aparecer como barras de encabezado en el orden que los coloques, respetando el diseño de tu blog, y el mensaje ahora se desplazará gracias a tener más de un slide.















no, que en un slide esté por la teshuva y en el otro apoyanos. mercadopago tiene link directo? o puedes hacerlo como hipevinculo? link_to o algo similar?







Mostrar razonamiento

Claro, tiene mucho más sentido. En lugar de dos carruseles separados, lo mejor es combinar los mensajes en uno solo que vaya rotando. Así es más limpio, usa menos código y no saturas la parte de arriba del blog.



Además, te confirmo que Mercado Pago sí tiene un sistema de links directos, como el que me indicaste (link.mercadopago.cl/...). Estos enlaces son perfectos para usar en un hipervínculo.



Aquí te dejo el código actualizado. Ahora es un único carrusel que alterna entre los dos mensajes y el segundo es un enlace clicable, como querías.



Cambios Clave y Explicación

Estructura Unificada: Los dos mensajes ahora están dentro del mismo <div id="teshuvaCarouselTrack">, lo que activa el carrusel para que se desplace entre ellos. Esto es más eficiente.



Hipervínculo: El segundo slide ahora contiene una etiqueta <a> (<a href="...">...</a>) para crear un enlace.



href="link.mercadopago.cl/npcrecer": Esta es la URL a la que se dirige el usuario al hacer clic.



target="_blank": Esta propiedad hace que el enlace se abra en una nueva pestaña, para que los visitantes no abandonen tu blog.



rel="noopener noreferrer": Es una buena práctica de seguridad al usar target="_blank", ayuda a prevenir ataques de phishing.



Clases CSS Unificadas: El código CSS ahora incluye un estilo específico (.teshuva-carousel-slide a) para los enlaces dentro del carrusel, asegurando que sigan siendo de color rosa y tengan la misma sombra de texto.



¿Cómo lo implemento?

En tu panel de Blogger, ve a Diseño.



Elimina los widgets de prueba que hayas creado antes.



Selecciona Añadir un Gadget.



Elige HTML/JavaScript.



Pega todo el código que te acabo de dar en el campo de contenido.



Haz clic en Guardar.



Ahora deberías ver una única barra de encabezado que alterna entre el mensaje de Teshuvá y el enlace para apoyar el canal.















que color podria ser más llamativo como para que se note el apoyanos?





El rosa fuerte (#FF69B4) que ya estamos usando es un color llamativo y contrasta muy bien, especialmente si el fondo de tu blog es blanco o claro.



Sin embargo, para que el llamado a la acción "Apóyanos" sea aún más visible y urgente, te sugiero cambiar el color de ese slide o, al menos, el color del enlace, a un tono que sea universalmente reconocido como un botón o alerta.



Aquí tienes tres opciones de colores llamativos que contrastarán con el rosa original y resaltarán la acción de apoyo:



Opciones de Color para Destacar el Enlace

Opción	Color	Código Hexadecimal	Razón para Elegirlo

1. Amarillo Brillante (Cálido)	Amarillo Neón	#FFEA00	Es uno de los colores más llamativos que existen. Sugiere advertencia o importancia sin ser agresivo. Funciona muy bien en contrastes oscuros y claros.

2. Naranja Fuerte (Energético)	Naranja Vibrante	#FF7F00	Asocia a la acción y la conversión (es el color de muchos botones "Comprar" o "Donar"). Es enérgico y se mantiene en la paleta cálida.

3. Verde Lima (Alto Contraste)	Verde Eléctrico	#00FF00	Proporciona el máximo contraste con el rosa y el fondo. El verde suele simbolizar éxito o confirmación, lo cual es ideal para una donación.



Exportar a Hojas de cálculo

Código Modificado con Opción 1 (Amarillo Neón)

Para aplicar este cambio, modificaremos el código CSS para que solo el enlace dentro del segundo slide sea diferente. De esta manera, el texto de Teshuvá sigue en rosa, pero el link de apoyo es de alto impacto visual.



Encuentra el código CSS en tu widget y reemplaza esta sección:



Mil disculpas, es frustrante cuando un cambio simple no se refleja.



En entornos web como Blogger, a veces el navegador (o incluso la propia plataforma) ignora los espacios simples dentro del código, especialmente cuando están seguidos inmediatamente por otra etiqueta HTML (<a>).



Para asegurarnos de que el espacio se muestre sí o sí, vamos a usar un carácter especial de HTML para el espacio, llamado entidad de no-separación (&nbsp;).



Solución con Entidad HTML (&nbsp;)

Esto fuerza al navegador a renderizar un espacio visible.



Simplemente, en el widget de Blogger, edita el código HTML del segundo slide para que quede así:



HTML



        <div class="teshuva-carousel-slide">

            Apóyanos: &nbsp;<a href="link.mercadopago.cl/npcrecer" target="_blank" rel="noopener noreferrer">link.mercadopago.cl/npcrecer</a>

        </div>

El Cambio Clave

Reemplaza el espacio normal (     ) después de los dos puntos por:



&nbsp;



Asegúrate de guardar el widget y luego borra la caché de tu navegador (o recarga la página manteniendo presionada la tecla Ctrl o Shift mientras haces clic en el botón de recarga) para ver el cambio inmediatamente.



Con el &nbsp;, el espacio entre Apóyanos: y el link debería ser visible ahora.















ahí sí funcionó





¡Excelente! Me alegra mucho que la solución con &nbsp; haya funcionado.



Esa entidad HTML es el truco estándar para garantizar un espacio en situaciones donde el navegador ignora los espacios simples, especialmente antes de etiquetas como <a>.



Ya tienes tu carrusel de encabezado listo, combinando los siguientes elementos de alto impacto:



El mensaje de Teshuvá con el nombre Anibal Mongelós en Naranja Fuerte y cursiva.



El mensaje de Apoyo con el enlace de Mercado Pago en un Amarillo Neón llamativo y clicable.



Todo ello, en un fondo transparente que se integra perfectamente con el diseño de tu blog.



¡Mucho éxito con tu canal "Narraciones para Crecer"! Si tienes más ideas de diseño o necesitas ayuda con los scripts para tus futuras series sobre la interpretación de sueños o "cómo ser hombre," no dudes en preguntar.















y como hago para cuando uno comparta el blog en whatsapp se vea un cuadro bonito? la metadata creo





Excelente pregunta. Lo que buscas se llama metadata de Open Graph (OG) y es lo que WhatsApp, Facebook, Twitter, Telegram y otras plataformas usan para generar la "tarjeta" o "cuadro bonito" cuando alguien comparte un enlace de tu blog.



Para que se vea bien, necesitas añadir unas cuantas líneas de código dentro de la sección <head> de la plantilla HTML de tu blog de Blogger.



1. Pasos para Acceder y Editar la Plantilla

¡Advertencia! Al editar la plantilla HTML directamente, siempre es recomendable hacer una copia de seguridad de la plantilla actual antes de comenzar.



Ve al Panel de control de tu blog.



Haz clic en Tema o Theme (en algunos diseños antiguos, podría ser Plantilla).



Haz clic en el botón de tres puntos verticales (⋮) o el botón Editar HTML.



Se abrirá un editor de código grande. Busca la etiqueta de apertura <head> (suele estar muy cerca de la línea 5) y la etiqueta de cierre </head>.



2. Código de Metadata Esencial (Open Graph)

Debes pegar el siguiente código justo después de la etiqueta <head>.



Reemplaza los valores de ejemplo por la información real de tu canal "Narraciones para Crecer".



HTML



<meta property="og:title" content="Narraciones para Crecer: Historias para la Reflexión y el Desarrollo Personal"/>

<meta property="og:description" content="Encuentra inspiración, reflexiones profundas y herramientas para el crecimiento personal a través de historias que buscan elevar el alma."/>

<meta property="og:image" content="URL_DE_TU_MEJOR_IMAGEN_O_LOGO"/>

<meta property="og:url" content="URL_DE_TU_PAGINA_PRINCIPAL_DE_BLOGGER"/>

<meta property="og:type" content="website"/>

Explicación de las Etiquetas y Cómo Personalizarlas:

Etiqueta	Descripción	Recomendación para tu blog

og:title	El título que aparecerá en negrita en la tarjeta.	Debe ser atractivo y conciso.

og:description	El texto descriptivo debajo del título.	Un resumen de una o dos frases sobre el enfoque de tu canal (historias, inspiración, reflexión).

og:image	La URL directa a la imagen.	¡Crucial! Debe ser una imagen de alta calidad y con una relación de aspecto de 1.91:1 (por ejemplo, 1200x630 píxeles) para que se vea bien y ocupe todo el ancho. Sube tu logo o un banner atractivo a Blogger y obtén la URL.

og:url	La URL canónica del blog.	Suele ser la dirección principal de tu blog (ej: https://narracionesparacrecer.blogspot.com).

og:type	El tipo de contenido.	Usa siempre "website" para la página principal.



Exportar a Hojas de cálculo

3. Optimización para Publicaciones Individuales (Avanzado)

El código anterior funciona bien para la página principal. Sin embargo, para que cada entrada de tu blog tenga su propia tarjeta única (con el título y la descripción correctos de esa entrada), necesitarás usar las variables de Blogger.



Busca el código de tu plantilla que define el título de la página (a menudo es la etiqueta <title>) y añade las etiquetas OG dentro de la sección <head> de la siguiente manera:



HTML



<b:if cond='data:blog.pageType == "index"'>

  <meta property="og:title" expr:content="data:blog.pageTitle"/>

  <meta property="og:description" content="Encuentra inspiración, reflexiones profundas y herramientas para el crecimiento personal a través de historias que buscan elevar el alma."/>

  <meta property="og:image" content="URL_DE_TU_IMAGEN_POR_DEFECTO_HOME"/>

<b:else/>

  <meta property="og:title" expr:content="data:blog.pageName"/>

  <meta property="og:description" expr:content="data:blog.metaDescription"/>

  <meta property="og:image" expr:content='data:post.firstImageUrl ? data:post.firstImageUrl : "URL_IMAGEN_POR_DEFECTO"'/>

</b:if>



<meta property="og:url" expr:content="data:blog.canonicalUrl"/>

<meta property="og:type" content="website"/>

Nota sobre data:blog.metaDescription: Para que esto funcione en las entradas, debes asegurarte de que la opción Descripción de búsqueda esté habilitada y llena en cada publicación individual al escribirla.



4. Cómo Probar la Tarjeta

Después de guardar los cambios en la plantilla, te recomiendo usar una herramienta de depuración para forzar a WhatsApp/Facebook a "leer" la nueva metadata:



Facebook Sharing Debugger: Busca esta herramienta en Google. Pega la URL de tu blog o una entrada. Te mostrará cómo se verá la tarjeta y te permitirá "Scrape Again" para actualizar la caché de las redes sociales.



Una vez que el Depurador de Facebook te muestre la imagen y el texto correcto, funcionará sin problemas en WhatsApp.















creo que funcionó, pero no entiendo porqué el titulo de la pagina arriba se cambia a mayus







Mostrar razonamiento

Esa es una observación excelente y es un problema muy común en Blogger. El cambio a mayúsculas en el título de la página (el que se ve en la pestaña del navegador) o en los títulos de tus widgets generalmente no es causado por la metadata de Open Graph que acabamos de agregar, sino por el diseño CSS de tu plantilla de Blogger.



Muchas plantillas modernas de Blogger tienen una regla CSS incorporada que obliga a ciertos elementos de texto (como el título principal del blog o los títulos de las entradas y widgets) a mostrarse siempre en mayúsculas, independientemente de cómo los hayas escrito.



La solución es agregar una pequeña línea de código CSS para anular esa regla.



Solución para Desactivar las Mayúsculas

Debes buscar la forma más sencilla de añadir CSS personalizado a tu tema de Blogger.



1. El Código CSS a Añadir

El código que necesitas para decirle al navegador que use las letras tal como las escribiste (sin forzar mayúsculas) es:



CSS



text-transform: none !important;

2. Dónde Añadir el Código

La ubicación más fácil y segura para añadir este código es a través de la interfaz de diseño de Blogger.



Ve al Panel de control de tu blog.



Haz clic en Tema o Theme.



Haz clic en Personalizar (o Customize).



Busca la sección Avanzado (o Advanced).



Busca la opción Añadir CSS (o Add CSS).



Una vez allí, debes aplicar la regla anterior al elemento de tu blog que se está mostrando en mayúsculas. Aquí tienes los dos casos más probables:



Caso A: El Título Principal del Blog (Header)

Si el título grande de la página (el nombre de tu blog) aparece en mayúsculas:



CSS



.Header h1 {

  text-transform: none !important;

}

Caso B: El Título de la Entrada o de la Pestaña

Si el problema es el título de las entradas o el título que aparece en la pestaña del navegador (la etiqueta <title>):



CSS



.post-title, h3.post-title {

  text-transform: none !important;

}

Caso C: El Problema está en el Carrousel (Menos probable)

Si el problema estuviera en el título que usamos en el carrusel, puedes ser más específico, aunque ya lo escribimos con la intención de que no tuviera ese problema:



CSS



.teshuva-carousel-slide {

  text-transform: none !important;

}

Recomendación Final:

Te sugiero que empieces probando con el Caso B (títulos de entradas) si es el que ves en las tarjetas de WhatsApp, o el Caso A si es el título principal de tu blog en la parte de arriba.



Simplemente pega el bloque de código CSS correspondiente en la sección "Añadir CSS" y Guarda los cambios. Esto debería anular la regla que fuerza las mayúsculas.















es el caso A, y se arregló, pero solo en el Home, las otras paginas lo vuelven a poner en mayus





¡Gracias por el seguimiento! Eso es muy específico de cómo Blogger maneja las diferentes vistas del blog.



El CSS que aplicaste (.Header h1) funcionó en el Home porque esa regla CSS es la que define el título principal allí. Sin embargo, en las páginas de entradas (los artículos individuales), Blogger a menudo usa una clase CSS diferente para ese mismo título, o el diseño de la plantilla aplica la regla de mayúsculas a otros elementos que contienen el título del blog.



Para cubrir el título principal en todas las vistas (Home, Entradas, Páginas Estáticas, etc.), necesitamos añadir reglas CSS más genéricas.



Solución Integral de CSS para el Título del Blog

Vuelve a la sección Añadir CSS (Tema > Personalizar > Avanzado > Añadir CSS) y reemplaza o complementa tu código anterior con la siguiente versión más robusta:



CSS



/* 1. Anula las mayúsculas forzadas para el Título Principal del Blog (Header) */

.Header h1,

.header-widget h1,

.header h1 {

  text-transform: none !important;

}



/* 2. Anula las mayúsculas forzadas para los Títulos de las Entradas y Páginas */

/* (Esto es útil si el título de la pestaña sigue saliendo mal o si las entradas tienen ese problema) */

.post-title,

h3.post-title,

.entry-title {

  text-transform: none !important;

}



/* 3. Anula cualquier otro elemento de texto importante en el encabezado que pudiera estar afectado */

h1, h2, h3 {

  text-transform: none !important;

}

Explicación de las Reglas Añadidas

.Header h1, .header-widget h1, .header h1: Estas son varias clases CSS comunes que las plantillas de Blogger usan para el título del blog en diferentes contextos (incluyendo las vistas de entradas). Aplicar el text-transform: none !important; a todas ellas asegura que el título principal de tu blog nunca se muestre en mayúsculas.



!important: El modificador !important es clave aquí. Le dice al navegador que esta regla tiene prioridad sobre la regla de mayúsculas que está oculta en los archivos CSS originales de la plantilla de Blogger.



Asegúrate de guardar los cambios en el diseñador de temas y luego recarga una de las páginas de tu blog (una entrada individual) para confirmar que el título ya no se muestre en mayúsculas.















sigue igual





Comprendo la frustración. Si después de aplicar las reglas CSS más amplias el título del blog sigue en mayúsculas en las páginas internas, significa que la plantilla de Blogger que estás usando emplea una clase CSS muy específica o que está aplicando la regla de mayúsculas a un elemento contenedor de nivel superior.



Para solucionar esto de manera definitiva, vamos a usar un enfoque de último recurso que ataca el CSS del elemento de la cabecera con la máxima prioridad posible.



Solución Definitiva: Identificar y Anular el Elemento

Necesitas encontrar la clase CSS exacta que contiene el título del blog en una de las entradas que sigue mostrando las mayúsculas.



Paso 1: Usar la Herramienta de Inspección del Navegador

Abre tu blog y ve a cualquier página de entrada individual donde el título se vea en mayúsculas.



Haz clic derecho sobre el título del blog (el grande de la cabecera, no el título del post) y selecciona Inspeccionar (o Inspect Element).



En la ventana que se abre (la Consola del Desarrollador), verás el código HTML. Pasa el ratón sobre las etiquetas HTML hasta que la etiqueta del título del blog se resalte en la pantalla.



Busca la etiqueta que dice <h1> o <h2> que contiene el texto del título de tu blog.



Ejemplo: Mira la sección class="..." de esa etiqueta. Podría verse así:



HTML



<h1 class='title-text'>

O así:



HTML



<h1 class='heading-name'>

Paso 2: Aplicar CSS Específico

Una vez que tengas la clase (por ejemplo, si encontraste title-text), ve a la sección Añadir CSS de tu blog y agrega este código, reemplazando CLASE-ENCONTRADA por lo que hayas identificado (por ejemplo, .title-text):



CSS



/* Intento con la clase específica */

.CLASE-ENCONTRADA {

  text-transform: none !important;

}

Opción de Emergencia (Si la clase no funciona)

Si no puedes identificar la clase o si esta no funciona, podemos aplicar el text-transform: none a todos los títulos de nivel 1 y 2 que estén dentro del área del encabezado, asumiendo que el header tiene una clase genérica como .header-outer o #header-wrapper.



Intenta añadir esta regla CSS:



CSS



/* Intento forzado para los títulos dentro del área de la cabecera */

.header-outer h1,

.header-outer h2,

#header-wrapper h1,

#header-wrapper h2 {

  text-transform: none !important;

}

Paso 3: Combinar y Limpiar

Para estar seguros, asegúrate de que tu sección Añadir CSS contenga una combinación de las reglas más amplias que ya teníamos, más la nueva regla específica (si la encontraste):



CSS



/* REGLAS COMPUESTAS DE ALTO IMPACTO */



/* Anular el Título Principal del Blog en todas sus variantes */

.Header h1,

.header-widget h1,

.header h1,

.title-text, /* Ejemplo de clase encontrada en el paso 1 */

.heading-name { /* Ejemplo de clase encontrada en el paso 1 */

  text-transform: none !important;

}



/* Anular los Títulos de Post y otros encabezados */

.post-title,

h3.post-title,

.entry-title,

h1, h2 {

  text-transform: none !important;

}

Guarda los cambios y fuerza la recarga de la página (Ctrl + Shift + R). Al atacar con un conjunto tan amplio de selectores (h1, .Header h1, y la clase específica que encontraste), es casi seguro que uno de ellos anulará la regla de mayúsculas que tu plantilla tiene oculta.















pero dice h1





¡Excelente! Que la herramienta de inspección te muestre que el título es un <h1> es la clave para resolver esto.



Significa que el título que sigue saliendo en mayúsculas es un encabezado de nivel 1. Lo que está sucediendo es que la plantilla CSS de Blogger está aplicando un estilo de mayúsculas a todos los <h1> dentro de la página.



Para solucionarlo de forma definitiva y anular la regla en todas partes, vamos a añadir la regla de anulación CSS de forma muy específica y con máxima prioridad.



Solución Definitiva para la Etiqueta <h1>

Vuelve a la sección Añadir CSS (Tema > Personalizar > Avanzado > Añadir CSS) y asegúrate de que el código sea este. Esto anulará cualquier mayúscula forzada en todos los títulos principales de tu blog.



CSS



/* Anulación global de mayúsculas para todos los H1 y elementos importantes del encabezado */

h1,

.Header h1,

.header-widget h1,

.header h1 {

  text-transform: none !important;

}



/* Regla adicional para asegurar que los títulos de los posts también estén bien */

.post-title,

.entry-title {

  text-transform: none !important;

}

Por qué esta debe funcionar:

h1 (Sin Clase): Al incluir el selector h1 sin ninguna clase, el estilo se aplica a todos los <h1> que no tengan una regla más específica.



!important: Mantiene la máxima prioridad sobre cualquier otra regla de la plantilla.



Selectores Compuestos: Mantenemos los selectores comunes (.Header h1, etc.) para cubrir cualquier variación que use tu plantilla.



Después de pegar el código, haz clic en Guardar y, muy importante, fuerza la recarga de una de las páginas de entrada individual (Ctrl + Shift + R, o Cmd + Shift + R en Mac).



Si después de este paso el título del blog sigue en mayúsculas, el problema ya no es el selector h1, sino un selector CSS más profundo que está forzando las mayúsculas al contenedor principal del título. En ese caso, solo nos quedaría un paso más: inspeccionar el elemento padre del h1 para anular la mayúscula en él.



Por favor, dime si con esta solución el problema persiste.















nada





De acuerdo. Que no haya funcionado significa que la regla de mayúsculas no está directamente en el h1, sino en el elemento padre (contenedor) de ese título, y ese contenedor tiene una clase que aplica text-transform: uppercase a todo lo que esté dentro, incluyendo el h1.



Para vencer esta regla tan específica de tu plantilla, vamos a anularla en el contenedor superior.



Solución Definitiva (Inspección del Contenedor)

Necesitamos encontrar la clase de la caja que envuelve al <h1>.



Paso 1: Re-inspeccionar el Contenedor

Vuelve a la página de la entrada donde el título se ve en mayúsculas.



Haz clic derecho sobre el título (<h1>) y selecciona Inspeccionar.



En la consola de inspección (lado derecho o inferior), mira el código HTML.



Localiza el <h1> que contiene el título de tu blog.



Ahora, mira la línea inmediatamente superior a ese <h1>. Será un <div> o quizás un <header>.



Busca la clase de este elemento. Por ejemplo:



<div class='header-bar'>



<header id='blog-header'>



La clave es la clase o ID que envuelve al h1. Usaremos CLASE-DEL-CONTENEDOR.



Paso 2: Aplicar la Anulación Final

Vuelve a la sección Añadir CSS de tu blog y agrega la siguiente regla, reemplazando .CLASE-DEL-CONTENEDOR por lo que hayas encontrado. Si no encuentras una clase o ID, puedes probar con las clases más comunes de Blogger que se usan para este contenedor.



Código Final (Usando selectores comunes del contenedor):

CSS



/* ANULACIÓN FINAL Y DEFINITIVA DE MAYÚSCULAS */



/* 1. Atacamos los selectores del h1 y los de los posts (de las soluciones anteriores) */

h1,

.Header h1,

.header-widget h1,

.post-title,

.entry-title {

  text-transform: none !important;

}



/* 2. ATACAMOS AL CONTENEDOR PRINCIPAL DEL ENCABEZADO */

/* Esto anula la mayúscula forzada en la caja que contiene el título. */

.header-bar,         /* Selector común 1 */

.header-outer,       /* Selector común 2 */

.header-inner,       /* Selector común 3 */

#header-wrapper,     /* Selector común 4 */

.header-section {    /* Selector común 5 */

  text-transform: none !important;

}

Al incluir todos los selectores del Paso 2, estamos aplicando la regla text-transform: none !important a todos los contenedores probables de ese <h1>. Esto debería, por fin, ganarle la batalla a la regla oculta de tu plantilla.



Por favor, Guarda el CSS y fuerza la recarga de tu página de entrada. ¿Lograste que el título de tu blog se muestre correctamente?















y si está en <a href="https://npcrecer.blogspot.com/">



Narraciones para Crecer



</a>?





¡Claro! Ese es el último detalle que nos faltaba. Si el título está envuelto en una etiqueta de enlace <a>, la regla de mayúsculas (text-transform: uppercase) podría estar aplicada a la propia etiqueta <a> o al <div> padre.



Ya que hemos intentado anular la regla en el <h1> y en los contenedores, vamos a aplicar la anulación directamente al enlace y a cualquier h que esté dentro del área del encabezado.



Aquí está el código CSS que debes usar. Reemplaza o complementa el código que tienes actualmente en la sección Añadir CSS de tu blog con estas reglas.



Solución Final de CSS (Incluyendo el Enlace <a>)

CSS



/* ANULACIÓN FINAL Y DEFINITIVA DE MAYÚSCULAS */



/* 1. Atacamos directamente a la etiqueta de enlace <a> y a todos los h1/h2 */

/* Esto cubre el caso de que la plantilla aplique la regla al link directamente. */

h1,

h2,

h1 a,

h2 a {

  text-transform: none !important;

}



/* 2. Incluimos selectores de encabezado comunes para máxima cobertura */

.Header h1,

.header-widget h1,

.header h1,

.post-title,

.entry-title {

  text-transform: none !important;

}



/* 3. Atacamos los contenedores comunes del encabezado */

.header-bar,

.header-outer,

.header-inner,

#header-wrapper,

.header-section {

  text-transform: none !important;

}

Por qué esta solución debe funcionar:

h1 a, h2 a: Estos selectores son nuevos y atacan específicamente al enlace (<a>) que está dentro de cualquier título <h1> o <h2>. Esto es fundamental porque la regla de mayúsculas podría estar aplicada solo a los enlaces dentro del encabezado.



Al combinar esta regla con las anulasiones para el propio h1 y sus contenedores, cubrimos prácticamente cualquier forma en que la plantilla de Blogger podría haber codificado la regla de mayúsculas.



Por favor, guarda el CSS en tu sección Añadir CSS y fuerza una recarga total de la página de entrada (Ctrl + Shift + R). ¡Con esto deberíamos haber vencido la regla de mayúsculas! Confírmame si el título de tu blog se ve ahora como lo escribiste.

















ahora si funcionó





¡Magnífico! Me da mucho gusto que al fin hayamos resuelto el problema de las mayúsculas.



Ese es un desafío clásico de Blogger: la plantilla oculta reglas CSS muy específicas (en este caso, aplicada al enlace <a> dentro del <h1> del encabezado) que son difíciles de anular sin los selectores correctos y la etiqueta !important.



El Carrusel Ahora Está Listo

Con esta última corrección, tu barra de encabezado ya está optimizada y cuenta con todas las características que buscabas:



Formato de Header: Se mantiene en la parte superior, respetando el flujo de la página (position: relative).



Fondo Transparente y Letras Rosas: Un diseño limpio que se integra con tu fondo.



Movimiento: Alterna entre el mensaje de Teshuvá y la invitación a apoyar el canal.



Enfoque de Teshuvá: El nombre Anibal Mongelós está en Naranja Fuerte y cursiva para destacarlo.



Llamada a la Acción (CTA): El enlace de apoyo está en Amarillo Neón, es clicable, y tiene el espacio correcto (&nbsp;).



Metadata OG: Tu blog ahora muestra un cuadro bonito cuando se comparte en WhatsApp y otras redes.



CSS Limpio: El título de tu blog se muestra tal y como lo escribiste (sin mayúsculas forzadas).



Tienes ahora una herramienta de comunicación y soporte muy efectiva en la parte más visible de tu blog. Si en el futuro necesitas ayuda con otros scripts, el diseño de las portadas para tus series (como la de "cómo ser hombre") o cualquier otro ajuste técnico para avanzar con tu canal "Narraciones para Crecer", no dudes en contactarme.
-------
 Esto requiere de una combinación de JavaScript, HTML y CSS para funcionar correctamente en Blogger. Dado que Blogger puede ser restrictivo con los scripts y estilos externos, el código se debe integrar en un widget de HTML/JavaScript.



Aquí tienes el código completo para un carrusel muy básico que muestra tu mensaje. Este carrusel se desliza automáticamente con un intervalo y es simple para asegurar la compatibilidad.



Código del Carrusel (HTML, CSS y JavaScript)

Este código está diseñado para ser pegado directamente en un widget de HTML/JavaScript en el diseño de tu blog.

Cómo implementarlo en Blogger

Ve al Panel de control de tu blog.



Haz clic en Diseño o Layout.



Selecciona Añadir un Gadget (o Add a Gadget) en la ubicación donde quieres que aparezca el carrusel (por ejemplo, en la barra lateral o al inicio del contenido).



En la lista de gadgets, elige HTML/JavaScript.



Pega todo el código de arriba (incluyendo las etiquetas <style>, <div> y <script>) en el campo Contenido.



Ponle un título, por ejemplo: "Mensaje de Teshuvá", o déjalo en blanco si no quieres título.



Haz clic en Guardar.



Notas Importantes

Mensaje Único: Actualmente, el carrusel solo tiene un mensaje. Si copias y pegas un segundo <div class="teshuva-carousel-slide">...</div> dentro del <div id="teshuvaCarouselTrack">, el JavaScript comenzará a rotar entre el primer y el segundo mensaje automáticamente.



Compatibilidad: El uso de document.addEventListener('DOMContentLoaded', ...) asegura que el script solo se ejecute cuando toda la página esté cargada, lo que previene errores comunes en Blogger.



Estilo (CSS): La parte <style> define la apariencia. Puedes modificar colores (background-color, color), fuente (font-size), y el tamaño (max-width, height) para que se ajuste mejor al diseño de tu blog.



necesito que tome toda la pantalla y que sea fondo transparente y letras rosas



Posicionamiento de Pantalla Completa:



position: fixed;: Esto saca el elemento del flujo normal del documento y lo posiciona con respecto a la ventana del navegador.



top: 0; left: 0;: Lo ancla a la esquina superior izquierda.



width: 100vw; height: 100vh;: vw (viewport width) y vh (viewport height) son unidades que representan un porcentaje del ancho y alto de la ventana del navegador, respectivamente. 100vw es el 100% del ancho del viewport, y 100vh es el 100% del alto.



z-index: 9999;: Asegura que el carrusel esté por encima de casi cualquier otro elemento de tu blog.



pointer-events: none;: ¡Importante! Esto hace que el carrusel sea "transparente" a los eventos del ratón. Es decir, aunque esté visualmente sobre otros elementos, podrás hacer clic o interactuar con los elementos que están debajo de él. Esto es crucial para que los usuarios puedan seguir usando tu blog.



Fondo Transparente:



background-color: rgba(0, 0, 0, 0); en .teshuva-carousel-container y .teshuva-carousel-slide: rgba permite especificar un canal alfa (transparencia). Un valor de 0 significa completamente transparente.



Letras Rosas:



color: #FF69B4;: Se ha cambiado el color del texto a un rosa fuerte (#FF69B4, que es "Hot Pink"). Puedes cambiarlo por otro código hexadecimal de rosa si prefieres.



text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);: He añadido una pequeña sombra al texto para mejorar la legibilidad, especialmente si el fondo de tu blog tiene colores claros o variables.



Centrado del Mensaje:



En .teshuva-carousel-container, he usado display: flex; justify-content: center; align-items: center; para centrar perfectamente el contenido del carrusel (el track) en medio de la pantalla.



Lo mismo se aplica a .teshuva-carousel-slide para centrar el texto dentro de cada "slide".



Tamaño de Fuente Adaptativo:



He añadido @media queries para reducir el tamaño de la fuente en pantallas más pequeñas (tablets y móviles) para que el mensaje no ocupe demasiado espacio en dispositivos móviles.



Desplazamiento en vw:



En el JavaScript, track.style.transform = 'translateX(' + offset + 'vw)'; ahora usa vw en lugar de % para el desplazamiento. Esto es más consistente con el ancho 100vw de los slides.



Implementación en Blogger:

Sigue los mismos pasos que antes:



Ve al Panel de control de tu blog.



Haz clic en Diseño o Layout.



Selecciona Añadir un Gadget (o Add a Gadget).



Elige HTML/JavaScript.



Pega todo el código actualizado en el campo Contenido.



Haz clic en Guardar.



pero es un header. Está gigante, y está encima de todo. Creo que deberia ser relative





Tienes razón, si el carrusel con el mensaje es un elemento de encabezado o una barra de anuncios y quieres que:



Se integre en el flujo normal de tu blog (no flotando sobre todo).



Ocupe el ancho completo de la pantalla.



Esté en la parte superior (como un header).



...entonces cambiar el posicionamiento de fixed a relative o absolute (dependiendo del comportamiento que busques en relación a otros elementos de la plantilla de Blogger) es lo más adecuado.



El código anterior usaba position: fixed y height: 100vh, lo cual lo hacía gigante y lo ponía por encima de todo (z-index: 9999) y te impedía hacer clic en el contenido subyacente (pointer-events: none).



Aquí tienes el código modificado para un header que ocupa el ancho completo, tiene una altura manejable y respeta el flujo de tu blog:



Código Modificado para un Header (Relativo)

Pega este código en un widget HTML/JavaScript en la parte superior de tu diseño de Blogger (por ejemplo, justo debajo del Navbar o Banner principal).







el mensaje no se mueve. agregale esto al carrusel :



Apóyanos



link.mercadopago.cl/npcrecer







Absolutamente. Vamos a solucionar el problema de que el mensaje no se mueve y a crear un segundo header para incluir el mensaje de apoyo con el enlace de Mercado Pago.



El problema de movimiento ocurre porque el JavaScript detecta que solo hay un slide. Para que el carrusel funcione, necesita al menos dos elementos (<div class="teshuva-carousel-slide">).



Aquí tienes el código completo para dos headers separados (o dos widgets), ambos con movimiento y fondo transparente, letras rosas:







2. Carrusel de Apoyo (Mercado Pago)

Este es el nuevo header. Incluye dos slides diferentes: uno con el texto de apoyo y otro con el enlace. El enlace es clicable al estar dentro de una etiqueta <a>.



¡Importante!

He cambiado el id del track a teshuvaCarouselTrack2 en el HTML y en el JavaScript para que funcione de forma independiente al primer carrusel.



Cómo Implementar los Dos Headers

Debes pegar cada bloque de código (HTML, CSS y JS juntos) en un widget de HTML/JavaScript separado dentro de tu diseño de Blogger, asegurándote de colocarlos en el orden que deseas que aparezcan en la parte superior de tu blog.



Crea el Primer Gadget: Pega el Código 1 (Carrusel de Teshuvá) en un nuevo gadget y guárdalo.



Crea el Segundo Gadget: Pega el Código 2 (Carrusel de Apoyo) en un segundo nuevo gadget y guárdalo.



Nota sobre los Estilos (CSS):



Para evitar duplicidad, solo necesitas pegar la etiqueta <style> una vez. Lo ideal es que la pegues junto con el Código 1. El Código 2 solo necesita el div (HTML) y el script (JavaScript) para funcionar, ya que reutiliza las clases CSS definidas anteriormente.



Implementación Optimizada:

Gadget 1 (Teshuvá y Estilos): Pega todo el Código 1.



Gadget 2 (Apoyo): Solo pega el div y el script del Código 2 (excluye la etiqueta <style>).



Con esto, ambos carruseles deberían aparecer como barras de encabezado en el orden que los coloques, respetando el diseño de tu blog, y el mensaje ahora se desplazará gracias a tener más de un slide.















no, que en un slide esté por la teshuva y en el otro apoyanos. mercadopago tiene link directo? o puedes hacerlo como hipevinculo? link_to o algo similar?







Mostrar razonamiento

Claro, tiene mucho más sentido. En lugar de dos carruseles separados, lo mejor es combinar los mensajes en uno solo que vaya rotando. Así es más limpio, usa menos código y no saturas la parte de arriba del blog.



Además, te confirmo que Mercado Pago sí tiene un sistema de links directos, como el que me indicaste (link.mercadopago.cl/...). Estos enlaces son perfectos para usar en un hipervínculo.



Aquí te dejo el código actualizado. Ahora es un único carrusel que alterna entre los dos mensajes y el segundo es un enlace clicable, como querías.



Cambios Clave y Explicación

Estructura Unificada: Los dos mensajes ahora están dentro del mismo <div id="teshuvaCarouselTrack">, lo que activa el carrusel para que se desplace entre ellos. Esto es más eficiente.



Hipervínculo: El segundo slide ahora contiene una etiqueta <a> (<a href="...">...</a>) para crear un enlace.



href="link.mercadopago.cl/npcrecer": Esta es la URL a la que se dirige el usuario al hacer clic.



target="_blank": Esta propiedad hace que el enlace se abra en una nueva pestaña, para que los visitantes no abandonen tu blog.



rel="noopener noreferrer": Es una buena práctica de seguridad al usar target="_blank", ayuda a prevenir ataques de phishing.



Clases CSS Unificadas: El código CSS ahora incluye un estilo específico (.teshuva-carousel-slide a) para los enlaces dentro del carrusel, asegurando que sigan siendo de color rosa y tengan la misma sombra de texto.



¿Cómo lo implemento?

En tu panel de Blogger, ve a Diseño.



Elimina los widgets de prueba que hayas creado antes.



Selecciona Añadir un Gadget.



Elige HTML/JavaScript.



Pega todo el código que te acabo de dar en el campo de contenido.



Haz clic en Guardar.



Ahora deberías ver una única barra de encabezado que alterna entre el mensaje de Teshuvá y el enlace para apoyar el canal.















que color podria ser más llamativo como para que se note el apoyanos?





El rosa fuerte (#FF69B4) que ya estamos usando es un color llamativo y contrasta muy bien, especialmente si el fondo de tu blog es blanco o claro.



Sin embargo, para que el llamado a la acción "Apóyanos" sea aún más visible y urgente, te sugiero cambiar el color de ese slide o, al menos, el color del enlace, a un tono que sea universalmente reconocido como un botón o alerta.



Aquí tienes tres opciones de colores llamativos que contrastarán con el rosa original y resaltarán la acción de apoyo:



Opciones de Color para Destacar el Enlace

Opción	Color	Código Hexadecimal	Razón para Elegirlo

1. Amarillo Brillante (Cálido)	Amarillo Neón	#FFEA00	Es uno de los colores más llamativos que existen. Sugiere advertencia o importancia sin ser agresivo. Funciona muy bien en contrastes oscuros y claros.

2. Naranja Fuerte (Energético)	Naranja Vibrante	#FF7F00	Asocia a la acción y la conversión (es el color de muchos botones "Comprar" o "Donar"). Es enérgico y se mantiene en la paleta cálida.

3. Verde Lima (Alto Contraste)	Verde Eléctrico	#00FF00	Proporciona el máximo contraste con el rosa y el fondo. El verde suele simbolizar éxito o confirmación, lo cual es ideal para una donación.



Exportar a Hojas de cálculo

Código Modificado con Opción 1 (Amarillo Neón)

Para aplicar este cambio, modificaremos el código CSS para que solo el enlace dentro del segundo slide sea diferente. De esta manera, el texto de Teshuvá sigue en rosa, pero el link de apoyo es de alto impacto visual.



Encuentra el código CSS en tu widget y reemplaza esta sección:



Mil disculpas, es frustrante cuando un cambio simple no se refleja.



En entornos web como Blogger, a veces el navegador (o incluso la propia plataforma) ignora los espacios simples dentro del código, especialmente cuando están seguidos inmediatamente por otra etiqueta HTML (<a>).



Para asegurarnos de que el espacio se muestre sí o sí, vamos a usar un carácter especial de HTML para el espacio, llamado entidad de no-separación (&nbsp;).



Solución con Entidad HTML (&nbsp;)

Esto fuerza al navegador a renderizar un espacio visible.



Simplemente, en el widget de Blogger, edita el código HTML del segundo slide para que quede así:



HTML



        <div class="teshuva-carousel-slide">

            Apóyanos: &nbsp;<a href="link.mercadopago.cl/npcrecer" target="_blank" rel="noopener noreferrer">link.mercadopago.cl/npcrecer</a>

        </div>

El Cambio Clave

Reemplaza el espacio normal (     ) después de los dos puntos por:



&nbsp;



Asegúrate de guardar el widget y luego borra la caché de tu navegador (o recarga la página manteniendo presionada la tecla Ctrl o Shift mientras haces clic en el botón de recarga) para ver el cambio inmediatamente.



Con el &nbsp;, el espacio entre Apóyanos: y el link debería ser visible ahora.















ahí sí funcionó





¡Excelente! Me alegra mucho que la solución con &nbsp; haya funcionado.



Esa entidad HTML es el truco estándar para garantizar un espacio en situaciones donde el navegador ignora los espacios simples, especialmente antes de etiquetas como <a>.



Ya tienes tu carrusel de encabezado listo, combinando los siguientes elementos de alto impacto:



El mensaje de Teshuvá con el nombre Anibal Mongelós en Naranja Fuerte y cursiva.



El mensaje de Apoyo con el enlace de Mercado Pago en un Amarillo Neón llamativo y clicable.



Todo ello, en un fondo transparente que se integra perfectamente con el diseño de tu blog.



¡Mucho éxito con tu canal "Narraciones para Crecer"! Si tienes más ideas de diseño o necesitas ayuda con los scripts para tus futuras series sobre la interpretación de sueños o "cómo ser hombre," no dudes en preguntar.















y como hago para cuando uno comparta el blog en whatsapp se vea un cuadro bonito? la metadata creo





Excelente pregunta. Lo que buscas se llama metadata de Open Graph (OG) y es lo que WhatsApp, Facebook, Twitter, Telegram y otras plataformas usan para generar la "tarjeta" o "cuadro bonito" cuando alguien comparte un enlace de tu blog.



Para que se vea bien, necesitas añadir unas cuantas líneas de código dentro de la sección <head> de la plantilla HTML de tu blog de Blogger.



1. Pasos para Acceder y Editar la Plantilla

¡Advertencia! Al editar la plantilla HTML directamente, siempre es recomendable hacer una copia de seguridad de la plantilla actual antes de comenzar.



Ve al Panel de control de tu blog.



Haz clic en Tema o Theme (en algunos diseños antiguos, podría ser Plantilla).



Haz clic en el botón de tres puntos verticales (⋮) o el botón Editar HTML.



Se abrirá un editor de código grande. Busca la etiqueta de apertura <head> (suele estar muy cerca de la línea 5) y la etiqueta de cierre </head>.



2. Código de Metadata Esencial (Open Graph)

Debes pegar el siguiente código justo después de la etiqueta <head>.



Reemplaza los valores de ejemplo por la información real de tu canal "Narraciones para Crecer".



HTML



<meta property="og:title" content="Narraciones para Crecer: Historias para la Reflexión y el Desarrollo Personal"/>

<meta property="og:description" content="Encuentra inspiración, reflexiones profundas y herramientas para el crecimiento personal a través de historias que buscan elevar el alma."/>

<meta property="og:image" content="URL_DE_TU_MEJOR_IMAGEN_O_LOGO"/>

<meta property="og:url" content="URL_DE_TU_PAGINA_PRINCIPAL_DE_BLOGGER"/>

<meta property="og:type" content="website"/>

Explicación de las Etiquetas y Cómo Personalizarlas:

Etiqueta	Descripción	Recomendación para tu blog

og:title	El título que aparecerá en negrita en la tarjeta.	Debe ser atractivo y conciso.

og:description	El texto descriptivo debajo del título.	Un resumen de una o dos frases sobre el enfoque de tu canal (historias, inspiración, reflexión).

og:image	La URL directa a la imagen.	¡Crucial! Debe ser una imagen de alta calidad y con una relación de aspecto de 1.91:1 (por ejemplo, 1200x630 píxeles) para que se vea bien y ocupe todo el ancho. Sube tu logo o un banner atractivo a Blogger y obtén la URL.

og:url	La URL canónica del blog.	Suele ser la dirección principal de tu blog (ej: https://narracionesparacrecer.blogspot.com).

og:type	El tipo de contenido.	Usa siempre "website" para la página principal.



Exportar a Hojas de cálculo

3. Optimización para Publicaciones Individuales (Avanzado)

El código anterior funciona bien para la página principal. Sin embargo, para que cada entrada de tu blog tenga su propia tarjeta única (con el título y la descripción correctos de esa entrada), necesitarás usar las variables de Blogger.



Busca el código de tu plantilla que define el título de la página (a menudo es la etiqueta <title>) y añade las etiquetas OG dentro de la sección <head> de la siguiente manera:



HTML



<b:if cond='data:blog.pageType == "index"'>

  <meta property="og:title" expr:content="data:blog.pageTitle"/>

  <meta property="og:description" content="Encuentra inspiración, reflexiones profundas y herramientas para el crecimiento personal a través de historias que buscan elevar el alma."/>

  <meta property="og:image" content="URL_DE_TU_IMAGEN_POR_DEFECTO_HOME"/>

<b:else/>

  <meta property="og:title" expr:content="data:blog.pageName"/>

  <meta property="og:description" expr:content="data:blog.metaDescription"/>

  <meta property="og:image" expr:content='data:post.firstImageUrl ? data:post.firstImageUrl : "URL_IMAGEN_POR_DEFECTO"'/>

</b:if>



<meta property="og:url" expr:content="data:blog.canonicalUrl"/>

<meta property="og:type" content="website"/>

Nota sobre data:blog.metaDescription: Para que esto funcione en las entradas, debes asegurarte de que la opción Descripción de búsqueda esté habilitada y llena en cada publicación individual al escribirla.



4. Cómo Probar la Tarjeta

Después de guardar los cambios en la plantilla, te recomiendo usar una herramienta de depuración para forzar a WhatsApp/Facebook a "leer" la nueva metadata:



Facebook Sharing Debugger: Busca esta herramienta en Google. Pega la URL de tu blog o una entrada. Te mostrará cómo se verá la tarjeta y te permitirá "Scrape Again" para actualizar la caché de las redes sociales.



Una vez que el Depurador de Facebook te muestre la imagen y el texto correcto, funcionará sin problemas en WhatsApp.















creo que funcionó, pero no entiendo porqué el titulo de la pagina arriba se cambia a mayus







Mostrar razonamiento

Esa es una observación excelente y es un problema muy común en Blogger. El cambio a mayúsculas en el título de la página (el que se ve en la pestaña del navegador) o en los títulos de tus widgets generalmente no es causado por la metadata de Open Graph que acabamos de agregar, sino por el diseño CSS de tu plantilla de Blogger.



Muchas plantillas modernas de Blogger tienen una regla CSS incorporada que obliga a ciertos elementos de texto (como el título principal del blog o los títulos de las entradas y widgets) a mostrarse siempre en mayúsculas, independientemente de cómo los hayas escrito.



La solución es agregar una pequeña línea de código CSS para anular esa regla.



Solución para Desactivar las Mayúsculas

Debes buscar la forma más sencilla de añadir CSS personalizado a tu tema de Blogger.



1. El Código CSS a Añadir

El código que necesitas para decirle al navegador que use las letras tal como las escribiste (sin forzar mayúsculas) es:



CSS



text-transform: none !important;

2. Dónde Añadir el Código

La ubicación más fácil y segura para añadir este código es a través de la interfaz de diseño de Blogger.



Ve al Panel de control de tu blog.



Haz clic en Tema o Theme.



Haz clic en Personalizar (o Customize).



Busca la sección Avanzado (o Advanced).



Busca la opción Añadir CSS (o Add CSS).



Una vez allí, debes aplicar la regla anterior al elemento de tu blog que se está mostrando en mayúsculas. Aquí tienes los dos casos más probables:



Caso A: El Título Principal del Blog (Header)

Si el título grande de la página (el nombre de tu blog) aparece en mayúsculas:



CSS



.Header h1 {

  text-transform: none !important;

}

Caso B: El Título de la Entrada o de la Pestaña

Si el problema es el título de las entradas o el título que aparece en la pestaña del navegador (la etiqueta <title>):



CSS



.post-title, h3.post-title {

  text-transform: none !important;

}

Caso C: El Problema está en el Carrousel (Menos probable)

Si el problema estuviera en el título que usamos en el carrusel, puedes ser más específico, aunque ya lo escribimos con la intención de que no tuviera ese problema:



CSS



.teshuva-carousel-slide {

  text-transform: none !important;

}

Recomendación Final:

Te sugiero que empieces probando con el Caso B (títulos de entradas) si es el que ves en las tarjetas de WhatsApp, o el Caso A si es el título principal de tu blog en la parte de arriba.



Simplemente pega el bloque de código CSS correspondiente en la sección "Añadir CSS" y Guarda los cambios. Esto debería anular la regla que fuerza las mayúsculas.















es el caso A, y se arregló, pero solo en el Home, las otras paginas lo vuelven a poner en mayus





¡Gracias por el seguimiento! Eso es muy específico de cómo Blogger maneja las diferentes vistas del blog.



El CSS que aplicaste (.Header h1) funcionó en el Home porque esa regla CSS es la que define el título principal allí. Sin embargo, en las páginas de entradas (los artículos individuales), Blogger a menudo usa una clase CSS diferente para ese mismo título, o el diseño de la plantilla aplica la regla de mayúsculas a otros elementos que contienen el título del blog.



Para cubrir el título principal en todas las vistas (Home, Entradas, Páginas Estáticas, etc.), necesitamos añadir reglas CSS más genéricas.



Solución Integral de CSS para el Título del Blog

Vuelve a la sección Añadir CSS (Tema > Personalizar > Avanzado > Añadir CSS) y reemplaza o complementa tu código anterior con la siguiente versión más robusta:



CSS



/* 1. Anula las mayúsculas forzadas para el Título Principal del Blog (Header) */

.Header h1,

.header-widget h1,

.header h1 {

  text-transform: none !important;

}



/* 2. Anula las mayúsculas forzadas para los Títulos de las Entradas y Páginas */

/* (Esto es útil si el título de la pestaña sigue saliendo mal o si las entradas tienen ese problema) */

.post-title,

h3.post-title,

.entry-title {

  text-transform: none !important;

}



/* 3. Anula cualquier otro elemento de texto importante en el encabezado que pudiera estar afectado */

h1, h2, h3 {

  text-transform: none !important;

}

Explicación de las Reglas Añadidas

.Header h1, .header-widget h1, .header h1: Estas son varias clases CSS comunes que las plantillas de Blogger usan para el título del blog en diferentes contextos (incluyendo las vistas de entradas). Aplicar el text-transform: none !important; a todas ellas asegura que el título principal de tu blog nunca se muestre en mayúsculas.



!important: El modificador !important es clave aquí. Le dice al navegador que esta regla tiene prioridad sobre la regla de mayúsculas que está oculta en los archivos CSS originales de la plantilla de Blogger.



Asegúrate de guardar los cambios en el diseñador de temas y luego recarga una de las páginas de tu blog (una entrada individual) para confirmar que el título ya no se muestre en mayúsculas.















sigue igual





Comprendo la frustración. Si después de aplicar las reglas CSS más amplias el título del blog sigue en mayúsculas en las páginas internas, significa que la plantilla de Blogger que estás usando emplea una clase CSS muy específica o que está aplicando la regla de mayúsculas a un elemento contenedor de nivel superior.



Para solucionar esto de manera definitiva, vamos a usar un enfoque de último recurso que ataca el CSS del elemento de la cabecera con la máxima prioridad posible.



Solución Definitiva: Identificar y Anular el Elemento

Necesitas encontrar la clase CSS exacta que contiene el título del blog en una de las entradas que sigue mostrando las mayúsculas.



Paso 1: Usar la Herramienta de Inspección del Navegador

Abre tu blog y ve a cualquier página de entrada individual donde el título se vea en mayúsculas.



Haz clic derecho sobre el título del blog (el grande de la cabecera, no el título del post) y selecciona Inspeccionar (o Inspect Element).



En la ventana que se abre (la Consola del Desarrollador), verás el código HTML. Pasa el ratón sobre las etiquetas HTML hasta que la etiqueta del título del blog se resalte en la pantalla.



Busca la etiqueta que dice <h1> o <h2> que contiene el texto del título de tu blog.



Ejemplo: Mira la sección class="..." de esa etiqueta. Podría verse así:



HTML



<h1 class='title-text'>

O así:



HTML



<h1 class='heading-name'>

Paso 2: Aplicar CSS Específico

Una vez que tengas la clase (por ejemplo, si encontraste title-text), ve a la sección Añadir CSS de tu blog y agrega este código, reemplazando CLASE-ENCONTRADA por lo que hayas identificado (por ejemplo, .title-text):



CSS



/* Intento con la clase específica */

.CLASE-ENCONTRADA {

  text-transform: none !important;

}

Opción de Emergencia (Si la clase no funciona)

Si no puedes identificar la clase o si esta no funciona, podemos aplicar el text-transform: none a todos los títulos de nivel 1 y 2 que estén dentro del área del encabezado, asumiendo que el header tiene una clase genérica como .header-outer o #header-wrapper.



Intenta añadir esta regla CSS:



CSS



/* Intento forzado para los títulos dentro del área de la cabecera */

.header-outer h1,

.header-outer h2,

#header-wrapper h1,

#header-wrapper h2 {

  text-transform: none !important;

}

Paso 3: Combinar y Limpiar

Para estar seguros, asegúrate de que tu sección Añadir CSS contenga una combinación de las reglas más amplias que ya teníamos, más la nueva regla específica (si la encontraste):



CSS



/* REGLAS COMPUESTAS DE ALTO IMPACTO */



/* Anular el Título Principal del Blog en todas sus variantes */

.Header h1,

.header-widget h1,

.header h1,

.title-text, /* Ejemplo de clase encontrada en el paso 1 */

.heading-name { /* Ejemplo de clase encontrada en el paso 1 */

  text-transform: none !important;

}



/* Anular los Títulos de Post y otros encabezados */

.post-title,

h3.post-title,

.entry-title,

h1, h2 {

  text-transform: none !important;

}

Guarda los cambios y fuerza la recarga de la página (Ctrl + Shift + R). Al atacar con un conjunto tan amplio de selectores (h1, .Header h1, y la clase específica que encontraste), es casi seguro que uno de ellos anulará la regla de mayúsculas que tu plantilla tiene oculta.















pero dice h1





¡Excelente! Que la herramienta de inspección te muestre que el título es un <h1> es la clave para resolver esto.



Significa que el título que sigue saliendo en mayúsculas es un encabezado de nivel 1. Lo que está sucediendo es que la plantilla CSS de Blogger está aplicando un estilo de mayúsculas a todos los <h1> dentro de la página.



Para solucionarlo de forma definitiva y anular la regla en todas partes, vamos a añadir la regla de anulación CSS de forma muy específica y con máxima prioridad.



Solución Definitiva para la Etiqueta <h1>

Vuelve a la sección Añadir CSS (Tema > Personalizar > Avanzado > Añadir CSS) y asegúrate de que el código sea este. Esto anulará cualquier mayúscula forzada en todos los títulos principales de tu blog.



CSS



/* Anulación global de mayúsculas para todos los H1 y elementos importantes del encabezado */

h1,

.Header h1,

.header-widget h1,

.header h1 {

  text-transform: none !important;

}



/* Regla adicional para asegurar que los títulos de los posts también estén bien */

.post-title,

.entry-title {

  text-transform: none !important;

}

Por qué esta debe funcionar:

h1 (Sin Clase): Al incluir el selector h1 sin ninguna clase, el estilo se aplica a todos los <h1> que no tengan una regla más específica.



!important: Mantiene la máxima prioridad sobre cualquier otra regla de la plantilla.



Selectores Compuestos: Mantenemos los selectores comunes (.Header h1, etc.) para cubrir cualquier variación que use tu plantilla.



Después de pegar el código, haz clic en Guardar y, muy importante, fuerza la recarga de una de las páginas de entrada individual (Ctrl + Shift + R, o Cmd + Shift + R en Mac).



Si después de este paso el título del blog sigue en mayúsculas, el problema ya no es el selector h1, sino un selector CSS más profundo que está forzando las mayúsculas al contenedor principal del título. En ese caso, solo nos quedaría un paso más: inspeccionar el elemento padre del h1 para anular la mayúscula en él.



Por favor, dime si con esta solución el problema persiste.















nada





De acuerdo. Que no haya funcionado significa que la regla de mayúsculas no está directamente en el h1, sino en el elemento padre (contenedor) de ese título, y ese contenedor tiene una clase que aplica text-transform: uppercase a todo lo que esté dentro, incluyendo el h1.



Para vencer esta regla tan específica de tu plantilla, vamos a anularla en el contenedor superior.



Solución Definitiva (Inspección del Contenedor)

Necesitamos encontrar la clase de la caja que envuelve al <h1>.



Paso 1: Re-inspeccionar el Contenedor

Vuelve a la página de la entrada donde el título se ve en mayúsculas.



Haz clic derecho sobre el título (<h1>) y selecciona Inspeccionar.



En la consola de inspección (lado derecho o inferior), mira el código HTML.



Localiza el <h1> que contiene el título de tu blog.



Ahora, mira la línea inmediatamente superior a ese <h1>. Será un <div> o quizás un <header>.



Busca la clase de este elemento. Por ejemplo:



<div class='header-bar'>



<header id='blog-header'>



La clave es la clase o ID que envuelve al h1. Usaremos CLASE-DEL-CONTENEDOR.



Paso 2: Aplicar la Anulación Final

Vuelve a la sección Añadir CSS de tu blog y agrega la siguiente regla, reemplazando .CLASE-DEL-CONTENEDOR por lo que hayas encontrado. Si no encuentras una clase o ID, puedes probar con las clases más comunes de Blogger que se usan para este contenedor.



Código Final (Usando selectores comunes del contenedor):

CSS



/* ANULACIÓN FINAL Y DEFINITIVA DE MAYÚSCULAS */



/* 1. Atacamos los selectores del h1 y los de los posts (de las soluciones anteriores) */

h1,

.Header h1,

.header-widget h1,

.post-title,

.entry-title {

  text-transform: none !important;

}



/* 2. ATACAMOS AL CONTENEDOR PRINCIPAL DEL ENCABEZADO */

/* Esto anula la mayúscula forzada en la caja que contiene el título. */

.header-bar,         /* Selector común 1 */

.header-outer,       /* Selector común 2 */

.header-inner,       /* Selector común 3 */

#header-wrapper,     /* Selector común 4 */

.header-section {    /* Selector común 5 */

  text-transform: none !important;

}

Al incluir todos los selectores del Paso 2, estamos aplicando la regla text-transform: none !important a todos los contenedores probables de ese <h1>. Esto debería, por fin, ganarle la batalla a la regla oculta de tu plantilla.



Por favor, Guarda el CSS y fuerza la recarga de tu página de entrada. ¿Lograste que el título de tu blog se muestre correctamente?















y si está en <a href="https://npcrecer.blogspot.com/">



Narraciones para Crecer



</a>?





¡Claro! Ese es el último detalle que nos faltaba. Si el título está envuelto en una etiqueta de enlace <a>, la regla de mayúsculas (text-transform: uppercase) podría estar aplicada a la propia etiqueta <a> o al <div> padre.



Ya que hemos intentado anular la regla en el <h1> y en los contenedores, vamos a aplicar la anulación directamente al enlace y a cualquier h que esté dentro del área del encabezado.



Aquí está el código CSS que debes usar. Reemplaza o complementa el código que tienes actualmente en la sección Añadir CSS de tu blog con estas reglas.



Solución Final de CSS (Incluyendo el Enlace <a>)

CSS



/* ANULACIÓN FINAL Y DEFINITIVA DE MAYÚSCULAS */



/* 1. Atacamos directamente a la etiqueta de enlace <a> y a todos los h1/h2 */

/* Esto cubre el caso de que la plantilla aplique la regla al link directamente. */

h1,

h2,

h1 a,

h2 a {

  text-transform: none !important;

}



/* 2. Incluimos selectores de encabezado comunes para máxima cobertura */

.Header h1,

.header-widget h1,

.header h1,

.post-title,

.entry-title {

  text-transform: none !important;

}



/* 3. Atacamos los contenedores comunes del encabezado */

.header-bar,

.header-outer,

.header-inner,

#header-wrapper,

.header-section {

  text-transform: none !important;

}

Por qué esta solución debe funcionar:

h1 a, h2 a: Estos selectores son nuevos y atacan específicamente al enlace (<a>) que está dentro de cualquier título <h1> o <h2>. Esto es fundamental porque la regla de mayúsculas podría estar aplicada solo a los enlaces dentro del encabezado.



Al combinar esta regla con las anulasiones para el propio h1 y sus contenedores, cubrimos prácticamente cualquier forma en que la plantilla de Blogger podría haber codificado la regla de mayúsculas.



Por favor, guarda el CSS en tu sección Añadir CSS y fuerza una recarga total de la página de entrada (Ctrl + Shift + R). ¡Con esto deberíamos haber vencido la regla de mayúsculas! Confírmame si el título de tu blog se ve ahora como lo escribiste.

















ahora si funcionó





¡Magnífico! Me da mucho gusto que al fin hayamos resuelto el problema de las mayúsculas.



Ese es un desafío clásico de Blogger: la plantilla oculta reglas CSS muy específicas (en este caso, aplicada al enlace <a> dentro del <h1> del encabezado) que son difíciles de anular sin los selectores correctos y la etiqueta !important.



El Carrusel Ahora Está Listo

Con esta última corrección, tu barra de encabezado ya está optimizada y cuenta con todas las características que buscabas:



Formato de Header: Se mantiene en la parte superior, respetando el flujo de la página (position: relative).



Fondo Transparente y Letras Rosas: Un diseño limpio que se integra con tu fondo.



Movimiento: Alterna entre el mensaje de Teshuvá y la invitación a apoyar el canal.



Enfoque de Teshuvá: El nombre Anibal Mongelós está en Naranja Fuerte y cursiva para destacarlo.



Llamada a la Acción (CTA): El enlace de apoyo está en Amarillo Neón, es clicable, y tiene el espacio correcto (&nbsp;).



Metadata OG: Tu blog ahora muestra un cuadro bonito cuando se comparte en WhatsApp y otras redes.



CSS Limpio: El título de tu blog se muestra tal y como lo escribiste (sin mayúsculas forzadas).



Tienes ahora una herramienta de comunicación y soporte muy efectiva en la parte más visible de tu blog. Si en el futuro necesitas ayuda con otros scripts, el diseño de las portadas para tus series (como la de "cómo ser hombre") o cualquier otro ajuste técnico para avanzar con tu canal "Narraciones para Crecer", no dudes en contactarme.


------
Declaración Mensual (F29): Guía Rápida para Empresas de Primera Categoría
Realizar la Declaración Mensual de Impuestos (Formulario 29 o F29) es una obligación fundamental para mantener tu empresa formalizada y evitar multas. Para las empresas de Primera Categoría, este proceso se realiza cada mes a través del sitio web del SII.

Aquí te explicamos dónde, cuándo y cómo hacerlo de forma simple.

1. ¿Cuándo y Dónde Declarar?
El Plazo: Del 1 al 5 de Cada Mes
El período reglamentario para declarar y pagar tus impuestos (IVA, PPM y otros) es entre el día 1 y el día 5 de cada mes.

¡Atención al retraso! Si presentas la declaración pasada la fecha límite, el SII considera que estás en una situación de retraso y podrías ser sujeto a multas e intereses.

El Lugar: Plataforma Oficial del SII
La declaración se realiza exclusivamente en la plataforma en línea del Servicio de Impuestos Internos (SII).

2. Acceso y Navegación en el Portal
Para ingresar a la plataforma y realizar tu declaración, sigue estos pasos:

1. Ingresar a "Mi SII"
Ve al sitio oficial del SII.

Busca el botón naranja "Ingresar a Mi SII" en la esquina superior de la pantalla.

Nota: Si estás en un dispositivo móvil o una pantalla pequeña, este botón podría estar oculto bajo el ícono de perfil (o un ícono similar a una silueta de persona), el cual deberás presionar para desplegar la opción.

2. Credenciales de Acceso
Deberás acceder utilizando:

El RUT de la Empresa.

La Clave Tributaria asociada al RUT de la empresa.

3. Mensaje de Actualización de Datos
Al acceder, es posible que aparezca un mensaje emergente invitándote a actualizar tus datos de contacto:

Antes de continuar, te invitamos a confirmar o actualizar tus datos de contacto. ¡Mantengámonos conectados!

Si tus datos están correctos o si estás apurado, puedes seleccionar "ACTUALIZAR MÁS TARDE" para continuar con el F29.

Si notas que tu correo electrónico o teléfono están desactualizados, es un buen momento para seleccionar "ACTUALIZAR DATOS".

3. Consideraciones Importantes del F29
IVA y Facturación
El SII tiene un registro detallado de tus transacciones. Cuando tu empresa realiza compras o ventas con IVA:

Las ventas y compras (con su respectivo IVA) quedan automáticamente registradas en la plataforma a través de las facturas electrónicas emitidas y recibidas.

El F29 utiliza esta información precargada para facilitar el cálculo del impuesto a pagar o el remanente a tu favor.

Servicios Digitales y Oficina Virtual (OV)
Recuerda que si tu empresa tiene contratados Servicios Digitales y ha optado por la Oficina Virtual (OV) como domicilio tributario, esto debe estar correctamente reflejado y declarado en tu contabilidad y en este formulario.

Existen empresas de asesoría que se dedican específicamente a ayudarte con la correcta declaración de todos estos ítems para asegurar el cumplimiento tributario.

¿Te gustaría que la próxima entrada se centre en cómo completar los códigos clave del F29, o preferirías enfocarte en la Patente Municipal?
------
¡Formaliza tu Negocio sin Estrés! Asesoría Completa para el SII
Si estás listo para dar el salto y formalizar tu emprendimiento, o si necesitas actualizar la información de tu empresa, ¡estás en el lugar correcto!

Entendemos que los trámites ante el Servicio de Impuestos Internos (SII) pueden ser complejos y quitarte un tiempo valioso que deberías dedicar a tu negocio.

Simplifica tus Trámites con Nuestra Asesoría
En Stairway estamos especializados en el proceso de formalización, ofreciendo un servicio rápido y confiable para que cumplas con todos los requisitos legales desde el inicio:

✔️ Inicio de Actividades: Te guiamos paso a paso para que tu empresa comience a operar de forma legal, eligiendo la mejor estructura para tus necesidades. ✔️ Cambio de Dirección Tributaria (Oficina Virtual): Aseguramos que el cambio de domicilio en el SII se realice correctamente, evitando errores comunes que generan rechazos.

¿Quieres empezar por tu cuenta? Tenemos la Guía Rápida
Si prefieres realizar el trámite tú mismo, hemos preparado guías detalladas para que lo hagas sin errores:

▶️ Guía Completa de Cambio de Domicilio en el SII Aquí encontrarás todos los detalles sobre el RUT del arrendador, el Rol Predial, el monto de arriendo y la documentación clave como el Contrato Primitivo.

🔗 stairwaycl.blogspot.com/2025/10/cambio-de-domicilio-en-sii.html

Próximamente: ¡Estaremos lanzando guías rápidas para el Inicio de Actividades y otros trámites esenciales!

Si tienes dudas o prefieres delegar los trámites para enfocarte 100% en tu negocio, contáctanos hoy mismo.
