---
layout: post
title: Chrome "Se Vuelve Loco" al Redimensionar en Ubuntu
author: erwin
date: 2025-10-22
tag: ubuntu
image: /assets/images/posts/penguin-chrome.png
---

## 🐞 El Problema: Chrome "Se Vuelve Loco" al Redimensionar en Ubuntu

Si eres usuario de Ubuntu (o de cualquier distribución con GNOME Shell) y utilizas Google Chrome, es posible que hayas encontrado un *bug* visual muy específico:

Al intentar dividir la pantalla o anclar la ventana de Chrome usando los atajos de teclado (`Super` + `Izquierda` o `Super` + `Derecha`), la ventana no se ajusta correctamente. En su lugar, experimenta un parpadeo rápido, *tearing* o parece "enloquecer". Este es un problema aislado de Chrome, ya que otras aplicaciones funcionan perfectamente.

---

## ✅ La Solución Definitiva: Ciclo de Encendido y Apagado (ON/OFF)

La causa más probable es que la **caché de la Aceleración por Hardware** de Chrome se haya corrompido, creando un conflicto con el compositor de Ubuntu (GNOME). La solución es forzar a Chrome a **eliminar ese estado corrupto** y crear uno nuevo sin problemas.

### Paso 1: Desactivar la Aceleración por Hardware

1.  Abre una nueva pestaña en Google Chrome.
2.  Copia y pega la siguiente URL en la barra de direcciones y presiona `Enter`:

    ```
    chrome://settings/system
    ```

3.  Localiza y **DESACTIVA** la opción:
    **"Utilizar aceleración por *hardware* cuando esté disponible"**

4.  Asegúrate de **Reiniciar** Chrome cuando se te solicite (es fundamental para que el cambio se aplique y el estado corrupto se elimine).

### Paso 2: Volver a Activar la Aceleración

1.  Una vez que Chrome se haya reiniciado, vuelve a la misma URL de configuración:

    ```
    chrome://settings/system
    ```

2.  Vuelve a **ACTIVAR** la opción:
    **"Utilizar aceleración por *hardware* cuando esté disponible"**

3.  **Reinicia Chrome por segunda vez** para que el módulo de aceleración se cargue con la nueva configuración limpia.

### 🏆 Resultado

Al completar este ciclo de OFF y ON, la función de aceleración por *hardware* se restablece a un estado funcional. Prueba ahora el atajo `Super` + `Izquierda`. La ventana de Chrome debería redimensionarse de forma inmediata y estable, manteniendo el rendimiento de tu GPU.
