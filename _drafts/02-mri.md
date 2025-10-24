<h1>MRI y la Arquitectura de Ruby: Entendiendo el Motor y la Necesidad de C</h1>

<p>Hemos definido la Gema como un "Taller Especializado", pero ¿quién es la entidad principal que coordina a todos estos talleres? Aquí es donde entra el concepto del <strong>MRI</strong>, la implementación del lenguaje Ruby que usamos por defecto, y por qué a veces necesitamos recurrir a otros lenguajes como C.</p>

<hr>

<h2 id="ruby-vs-mri">1. No es lo Mismo: Ruby (El Lenguaje) vs. MRI (El Motor)</h2>
<p>Existe una diferencia fundamental entre el lenguaje (el conjunto de reglas de sintaxis) y el programa que lo ejecuta (el motor).</p>

<h3>La Gran Empresa Constructora (MRI)</h3>
<ul>
    <li><strong>El Lenguaje Ruby:</strong> Es el <strong>Plano Maestro</strong> y el vocabulario técnico que se usa para diseñar el edificio.</li>
    <li><strong>MRI (C-Ruby):</strong> Es la <strong>Gran Empresa Constructora</strong> principal, la más común, escrita en el lenguaje C. Es el motor que lee tus planos (código Ruby) y los convierte en acciones que la computadora puede entender y ejecutar.</li>
</ul>
<p>Cuando instalas Ruby con <strong>rbenv</strong>, generalmente estás instalando y gestionando distintas versiones de **MRI**.</p>

<h3>Otras Implementaciones</h3>
<p>Aunque MRI es el estándar, existen otros "motores" (implementaciones), como **JRuby** (escrito en Java), pensadas para necesidades específicas, pero el <strong>MRI</strong> sigue siendo el punto de referencia.</p>

<hr>

<h2 id="binarios">2. Archivos Binarios: Código Listo para Ejecutar</h2>
<p>Un <strong>archivo binario</strong> es código que ha sido compilado a un formato que la computadora puede ejecutar directamente (una secuencia de 1s y 0s), a diferencia del código fuente (como tu archivo <code>.rb</code>) que es legible por humanos.</p>
<ul>
    <li>Los archivos binarios son el resultado final que permite a la Gran Empresa (MRI) ejecutar una tarea sin tener que "leer un plano" cada vez.</li>
    <li>En Linux, muchas librerías de terceros se presentan como archivos binarios <code>.so</code> (Shared Object).</li>
</ul>

<hr>

<h2 id="extensiones">3. ¿Por qué las Gemas Necesitan C?</h2>
<p>Algunas gemas clave (como las que manejan bases de datos o realizan cálculos intensivos) no pueden ser 100% Ruby si quieren alcanzar el máximo rendimiento.</p>
<ul>
    <li>Estos son los Talleres Especializados que construyen piezas muy específicas (<strong>extensiones nativas</strong>).</li>
    <li>Utilizan el lenguaje **C** para que su código se ejecute a la velocidad del motor de la Gran Empresa (MRI), sin pasar por capas de traducción adicionales.</li>
</ul>
<p>Esta necesidad de integrar código C es lo que nos lleva al problema de la compilación, un tema que resolveremos completamente en la próxima y última entrada.</p>
