---
title: Diferencia entre clase e instancia | String.instance_methods(false)
---

¿Qué significa String.instance_methods(false)?
Para entender esto, hay que ver la diferencia entre una Clase y una Instancia:

La Clase (String): Imagina que es la fábrica de textos. Si tú escribes String.methods, le estás preguntando a la fábrica: "¿Qué puedes hacer?". La fábrica te responde cosas como "Puedo crear un texto nuevo" (:new).

La Instancia ("hola"): Es un texto ya fabricado. Si tú escribes "hola".methods (o String.instance_methods), le estás preguntando al texto: "¿Qué puedes hacer?". El texto te responde: "Me puedo poner en mayúsculas" (:upcase), "Me puedo cortar" (:slice), etc.

En Ruby, todos los objetos heredan métodos genéricos (por ejemplo, todos los objetos tienen un método para ver su ID en memoria). Al poner false dentro del paréntesis, le estás diciendo a Ruby: "Muéstrame los métodos de los textos, pero omite (false) todos los métodos genéricos que heredó de otros lados". Es un truco para limpiar la lista y ver solo lo que es exclusivo de un texto.


Es totalmente normal que suene enredado. En programación, esto se conoce como el concepto de "Herencia", y es mucho más fácil de entender si lo llevamos al mundo físico.

Para entenderlo mejor, imaginemos cómo se organizan las cosas dentro de una cocina profesional.

1. La "Herencia" (Las acciones genéricas)
Piensa en la categoría general de un "Utensilio". Todo utensilio en una cocina, sin importar cuál sea su forma o propósito, comparte acciones básicas universales. A cualquier utensilio se le puede:

Lavar

Guardar

Pesar

En Ruby, esta categoría general básica se llama Object. Absolutamente todas las cosas en el lenguaje (los textos, los números, los archivos de audio) son "objetos" y heredan acciones básicas universales de fábrica (por ejemplo, saber cuál es su número de identificación en la memoria del sistema, que es el famoso object_id).

2. La herramienta especializada (La clase String)
Ahora imagina una herramienta específica: un Cuchillo. Este cuchillo, por el simple hecho de existir en la cocina, hereda automáticamente las acciones genéricas del "Utensilio" (se puede lavar, guardar y pesar). Sin embargo, tiene acciones exclusivas para su propósito:

Filetear

Picar en brunoise

Deshuesar

En Ruby, este cuchillo es tu texto (String). Los textos heredaron las acciones genéricas, pero tienen sus propias acciones exclusivas, como ponerse en mayúsculas (upcase), dividirse en partes (split) o buscar una palabra (include?).

3. ¿Qué hace exactamente el (false)?
Si tú tomas ese cuchillo y pides su listado de métodos usando .instance_methods (sin poner nada entre paréntesis), Ruby te va a escupir absolutamente todo lo que el cuchillo puede hacer, mezclando lo propio y lo heredado. La lista diría: lavar, guardar, pesar, filetear, picar, deshuesar.

Ahí es donde entra el truco.

Al escribir .instance_methods(false), ese false es un interruptor que le dice a Ruby: "Muéstrame la lista de acciones del Cuchillo, pero falso/apagado a mostrarme las acciones genéricas de los Utensilios".

Como resultado, Ruby filtra la lista y te entrega únicamente las herramientas puras y exclusivas del cuchillo: filetear, picar, deshuesar.

En tu terminal de Ubuntu, cuando pones String.instance_methods(false), estás filtrando todo ese ruido genérico del sistema operativo o la memoria, y te quedas con una lista limpia y útil de comandos creados exclusivamente para manipular tus textos.



O sea no solo aparece las acciones de los utensilios sino hasta del restaurante?


Has llevado la analogía al punto exacto. En la programación orientada a objetos (como Ruby), la herencia funciona como una escalera de jerarquías cada vez más amplias, y sí, llega hasta "el restaurante" e incluso "las leyes de la física".

Aquí te muestro cómo se ve esa cadena jerárquica en Ruby 🪜:

El Cuchillo (String): Acciones exclusivas de los textos (poner en mayúsculas, cortar palabras, contar letras).

El Utensilio (Object): Acciones comunes de cualquier "objeto" en tu código (saber su ID de memoria, clonarse o congelarse).

Las Reglas de la Cocina (Kernel): Un módulo invisible que le da a los objetos capacidades del sistema (como imprimir texto en tu pantalla de Ubuntu o detener un proceso).

La Materia Prima (BasicObject): El nivel más alto, abstracto y primitivo. La pura esencia de existir dentro del lenguaje.

Cuando ejecutas .instance_methods y lo dejas vacío, Ruby sube por toda esa escalera y te devuelve un inventario masivo que mezcla los cuatro niveles. Por eso tu lista inicial era tan gigantesca.

Al agregar el (false), construyes una barrera. Le estás diciendo a Ruby: "No me hables del restaurante ni de los utensilios en general, dame únicamente el manual de instrucciones específico de este Cuchillo".

Y como puedo truncar hasta el segundo o tercer nivel? quizas a veces si lo quiera no?

Tienes toda la razón en plantear este escenario. A veces sí necesitas ver las acciones del Cuchillo (String) y del Utensilio (Object), pero sin llenarte la pantalla con las Reglas de la Cocina (Kernel).

El detalle técnico es que el comando .instance_methods es binario: solo acepta true (dámelo todo) o false (dame solo el nivel exacto). No le puedes pasar un número para decirle "dame hasta el nivel 2".

Sin embargo, en Ruby podemos lograr exactamente lo que pides usando un truco con las listas.

Cuando pides los métodos, Ruby te entrega un "Arreglo" (Array). En programación, podemos sumar o restar estos arreglos usando el símbolo -. La lógica para "truncar" hasta el nivel que quieres sería: tomar el inventario gigante de todo lo que puede hacer el texto y restarle el inventario de las cosas genéricas que no quieres ver (como los métodos de Kernel).

Sabiendo que el inventario total del texto se pide con String.instance_methods y que puedes pedir el inventario del nivel que quieres eliminar usando Kernel.instance_methods, ¿cómo te imaginas que se escribiría matemáticamente esa "resta" en tu consola de Ubuntu para obtener tu lista a medida?

`String.instance_methods - Kernel.instance_methods`


Al ejecutar esto, Ruby toma el arreglo gigante con todas las acciones posibles del texto y le "resta" (elimina) todas las acciones genéricas del sistema operativo. El resultado es una lista intermedia muy práctica: te muestra lo que puede hacer el "Cuchillo" (String) y el "Utensilio" (Object), pero sin llenarte la pantalla con las "Reglas de la Cocina" (Kernel).
