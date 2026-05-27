---
title: Editor de texto en Rails? Action Text
---

Los que conocemos Jekyll, tenemos un ayudante llamado jekyll-admin gem, que soluciona la edición de texto con su editor integrado. 

Al migrar a Rails nos encontramos con una herramienta integrada: Action Text. Es una herramienta que genera un editor llamado Trix (creado por los mismos fundadores de Rails) y se encarga de guardar todo el formato HTML y las imágenes de manera segura en la base de datos.

Una buena práctica es revisar la guides de Rails, pero dejaremos el comando aquí:

```
rails action_text:install
```

*Me surgió la duda de como hacer para poner los botones de copiar el código fácil en los post. Lo escribiremos posterior en otro post.*

Luego hay que agregar en el model `rich_text_area :content`,  y luego cambiar en _form en el view `text_area` por `rich_text_area`

Si ya tenías escrito algo en tu cuadro de texto en form, no te asustes si al editar alguno desaparece, ya que no has perdido tu información, solo ha cambiado la base de datos a la que acceden los botones (ya que lo cambiaste por rich_text_area.

Para leer el valor de la columna vieja de texto plano sin que Rails se confunda con el nuevo texto enriquecido, se utiliza un método especial en el modelo llamado read_attribute(:content). Con esto, podemos recorrer cada nota y copiar el texto viejo al sistema nuevo.

```
Note.all.each do |note|
  note.update(content: note.read_attribute(:content))
end
```

Para usarlo, ejecuta `rails c`. y copias lo anterior y presionas Enter.

Una vez que termine el proceso, puedes escribir exit para salir de la consola.
