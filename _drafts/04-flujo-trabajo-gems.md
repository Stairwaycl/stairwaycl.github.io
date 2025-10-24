<h1>El Ingeniero y el Compilador: El Flujo de Trabajo de las Gemas</h1>

<p>Definimos a <strong>MRI</strong> como la Gran Empresa Constructora y a las **Gemas** como sus Talleres Especializados. Para que la construcción funcione, necesitamos entender los roles del equipo, especialmente la diferencia entre quien da la orden de contratar (Bundler) y quien ejecuta la tarea especializada (el Compilador).</p>

<hr>

<h2 id="programador">1. Tú Eres el Ingeniero de Proyectos 👷</h2>
<p>El programador es el arquitecto y director del proyecto.</p>

<ul>
    <li>Define el alcance del proyecto y escribe las instrucciones de alto nivel (el **Código Ruby**) que el motor MRI debe seguir.</li>
    <li>Contrata al **Jefe de Logística (Bundler)** a través del contrato (`Gemfile`) para asegurar que todos los Talleres (Gemas) necesarios estén disponibles en la versión correcta.</li>
</ul>

<hr>

<h2 id="bundler">2. Bundler: El Jefe de Logística (Gestor de Contratos) 📝</h2>
<p>Bundler no es una herramienta de construcción, sino de **coordinación**.</p>
<ul>
    <li>Su rol es leer el contrato (`Gemfile`), buscar e instalar las Gemas desde el **Almacén Central (`rubygems.org`)**.</li>
    <li>**Inicia la Construcción:** Cuando una Gema necesita compilar código de bajo nivel, el Jefe de Logística (Bundler) es quien da la orden de que el Capataz entre en acción.</li>
</ul>

<hr>

<h2 id="compilador">3. El Compilador: El Capataz Constructor 🛠️</h2>
<p>El compilador (como GCC) es la herramienta especializada que se activa solo cuando es estrictamente necesario, realizando la transformación de bajo nivel.</p>

<h3>La Tarea del Capataz</h3>
<p>Cuando Bundler da la orden de instalar una Gema con código C:</p>
<ol>
    <li>El Capataz Constructor (el **Compilador**) es invocado.</li>
    <li>Recibe los Planos de Bajo Nivel (**Código C**).</li>
    <li>**Consulta el Manual:** El Capataz debe leer las **Cabeceras de Desarrollo (`.h`)** de la Gran Empresa (MRI) para saber cómo conectar la nueva pieza.</li>
    <li>Convierte los planos en una pieza funcional (el **Archivo Binario**).</li>
</ol>
<p>Si el Manual de Especificaciones (`.h` files) falta en su Linux, el Capataz no puede terminar la pieza, causando el fallo de compilación. Por eso, el Jefe de Logística (Bundler) te avisará de inmediato.</p>

<hr>

<h2 id="conclusion">Conclusión </h2>
<p>La arquitectura de Ruby es una sinfonía de roles: el Ingeniero planea, el Jefe de Logística contrata, la Gran Empresa ejecuta, y el Capataz asegura que las piezas especializadas se construyan con precisión.</p>
