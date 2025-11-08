<p>&nbsp;</p><!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Límites de Generación de Resúmenes de Audio: Gemini vs. NotebookLM</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #1a73e8; /* Azul de Google */
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
        }
        h2 {
            color: #4285f4;
            margin-top: 25px;
        }
        .limit-box {
            border: 1px solid #ddd;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 8px;
            background-color: #f9f9f9;
        }
        .limit-box h3 {
            margin-top: 0;
            color: #34a853; /* Verde de Google */
        }
        .note {
            font-size: 0.9em;
            color: #666;
            border-left: 3px solid #fbbc05; /* Amarillo de Google */
            padding-left: 10px;
            margin-top: 15px;
            background-color: #fffbe6;
            padding: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #e8f0fe;
        }
    </style>
</head>
<body>

    <h1>Límites de Generación de Resúmenes de Audio: Gemini vs. NotebookLM</h1>

    <p>Tanto Gemini como NotebookLM tienen límites en la generación de resúmenes de audio (a veces llamados "Audio Overviews" o "Audio Generaciones"), y estos límites dependen del plan del usuario.</p>

    <h2>Resumen de Límites por Plataforma</h2>

    <table>
        <thead>
            <tr>
                <th>Plataforma</th>
                <th>Plan</th>
                <th>Límite Diario</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Gemini (Aplicaciones)</strong></td>
                <td>Gratuito, Pro o Ultra</td>
                <td>Hasta <strong>20</strong> resúmenes de audio al día</td>
            </tr>
            <tr>
                <td><strong>NotebookLM</strong></td>
                <td>Versión Gratuita Estándar</td>
                <td>Hasta <strong>3</strong> generaciones de audio al día</td>
            </tr>
            <tr>
                <td><strong>NotebookLM</strong></td>
                <td>Capacidades Pro (Premium)</td>
                <td>Hasta <strong>20</strong> generaciones de audio al día</td>
            </tr>
        </tbody>
    </table>

    <hr>

    <div class="limit-box">
        <h2>Gemini (Aplicaciones) - Límites de Resúmenes de Audio (Audio Overviews)</h2>
        <p>Para las Aplicaciones de Gemini (no la API), los límites son uniformes:</p>
        <ul>
            <li><strong>Plan Gratuito:</strong> Hasta <strong>20</strong> resúmenes de audio al día.</li>
            <li><strong>Plan Pro o Ultra de Google AI:</strong> Hasta <strong>20</strong> resúmenes de audio al día.</li>
        </ul>
        <div class="note">
            <h3>Nota sobre la duración de la entrada de Audio:</h3>
            <p>El límite diario de 20 para la función "Audio Overviews" se aplica independientemente del plan (Pro, Ultra o Gratuito).</p>
            <p>Sin embargo, la duración máxima para cargar archivos de audio directamente para resumir es diferente:</p>
            <ul>
                <li><strong>Planes Pagados (Pro/Ultra):</strong> 3 horas de duración máxima total por <em>prompt</em>.</li>
                <li><strong>Plan Gratuito:</strong> 10 minutos de duración máxima total por <em>prompt</em>.</li>
            </ul>
        </div>
    </div>

    <hr>

    <div class="limit-box">
        <h2>NotebookLM - Límites de Generaciones de Audio (Audio Generations)</h2>
        <p>En NotebookLM, los límites se refieren a las "generaciones de audio":</p>
        <ul>
            <li><strong>Versión Gratuita Estándar:</strong> Hasta <strong>3</strong> generaciones de audio al día.</li>
            <li><strong>Capacidades Pro (Premium):</strong> Hasta <strong>20</strong> generaciones de audio al día.</li>
        </ul>
        <div class="note">
            <h3>Nota sobre el contenido:</h3>
            <p>NotebookLM utiliza tus fuentes (documentos, videos, etc.) para generar los resúmenes de audio. Los formatos de resumen pueden variar (por ejemplo, "Deep Dive," "The Brief," "The Critique," o "The Debate") e incluso se puede personalizar la duración ("Shorter," "Default," o "Longer").</p>
        </div>
    </div>

</body>
</html>
