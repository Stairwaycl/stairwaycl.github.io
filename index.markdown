---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Diseños Originales de Logotipos | Gatica y Mongelos SpA
description: "Creamos logos memorables. Diseño profesional, enfoque único y derechos de autor reservados para tu marca."
image: /assets/images/favicon.ico
---


<section class="hero-section text-center pt-5 pb-5">
  <div class="container">
    <h1 class="display-4 fw-light">Diseñamos el logo que tu marca merece.</h1>
      <p class="lead">Un logo profesional es la clave para conectar con tus clientes. Descubre nuestro portafolio y da el primer paso.</p>
        <a href="#planes-promo" class="btn btn-primary btn-lg mt-3 shadow-lg">
                VER PRECIOS Y PACKS
        </a>
  </div>
</section>

# Prediseños

<div class="logo-gallery">
  {% assign image_files = site.static_files | where: "image", true %}
  {% for myimage in image_files %}
    <img class="gallery-item" src="{{ myimage.path }}" alt="{{ myimage.name }}">
  {% endfor %}
</div>

<section class="py-4">
        <div class="container text-center">
            <p class="text-secondary mb-0"><strong>+</strong> Logotipos Diseñados | <strong>5+</strong> Años de Experiencia</p>
        </div>
    </section>

<section id="servicios" class="py-5">
        <div class="container text-center">
            <h2 class="display-5 fw-bold mb-5 pt-5">Más que un Dibujo: Diseñamos Marcas con Estrategia</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="icon-box">
                        <i class="bi bi-vector-pen fs-1 text-primary mb-3"></i> <h3 class="h5 fw-bold">Diseño a la Medida</h3>
                        <p>Olvídate de las plantillas. Creamos un concepto 100% original para tu negocio.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="icon-box">
                        <i class="bi bi-folder2-open fs-1 text-primary mb-3"></i>
                        <h3 class="h5 fw-bold">Entrega Completa</h3>
                        <p>Obtén todos los archivos vectoriales (PDF, EPS, SVG) y de diversas resoluciónes (PNG, JPG) que necesitas para web e impresión sin coste extra.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="icon-box">
                        <i class="bi bi-clock-history fs-1 text-primary mb-3"></i>
                        <h3 class="h5 fw-bold">Proceso Transparente</h3>
                        <p>Sabrás exactamente en qué etapa estamos. Te garantizamos revisiones claras y plazos de entrega fijos.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

<section id="planes-promo" class="py-5  container ">
  <div class="container text-center pb-5 rounded-4 " style="background-color: #e1e1e1;">
      <h2 class="display-5 fw-bold mb-5 text-primary pt-4">¡PROMOCIÓN LANZAMIENTO! Precios Exclusivos</h2>
      <p class="lead mb-5 text-danger fw-bold">Precios válidos por tiempo limitado para los primeros clientes. ¡Aprovecha el valor vectorial!</p>

      <div class="row g-4 justify-content-center">

          <div class="col-md-4">
              <div class="card shadow-sm h-100">
                  <div class="card-header bg-success text-white">
                      <h4 class="my-0 fw-normal">Pack Básico SII</h4>
                  </div>
                  <div class="card-body">
                      <h1 class="card-title pricing-card-title text-success">$9.990<small class="text-muted fw-light">/pago único</small></h1>
                      <ul class="list-unstyled mt-3 mb-4 text-start mx-3">
                          <li>✅ Diseño de logo (1 propuesta).</li>
                          <li>✅ Entrega en **JPG listo para SII** (< 10KB).</li>
                          <li>✅ Archivo PNG (Fondo transparente).</li>
                          <li class="text-muted">❌ No incluye archivos vectoriales editables.</li>
                          <li class="text-muted">❌ No incluye archivos vectoriales editables.</li>
                      </ul>
                      <a href="https://m.me/106648708512872" class="w-100 btn btn-lg btn-outline-success">Lo Necesito Ahora</a>
                  </div>
              </div>
          </div>

          <div class="col-md-4">
              <div class="card border-primary shadow h-100">
                  <div class="card-header bg-primary text-white">
                      <h4 class="my-0 fw-normal">Pack Profesional Completo</h4>
                  </div>
                  <div class="card-body">
                      <h1 class="card-title pricing-card-title text-primary">$19.990<small class="text-muted fw-light">/pago único</small></h1>
                      <ul class="list-unstyled mt-3 mb-4 text-start mx-3">
                          <li>✅ **Diseño 100% Original a la Medida.**</li>
                          <li>✅ **Archivos Vectoriales Editables** (PDF, EPS, SVG).</li>
                          <li>✅ Múltiples formatos rasterizados (JPG, PNG).</li>
                          <li>✅ Máxima calidad para web e impresión.</li>
                          <li>✅ Incluye soporte post-entrega básico.</li>
                      </ul>
                      <a href="https://m.me/106648708512872" class="w-100 btn btn-lg btn-primary">¡El más Popular!</a>
                  </div>
              </div>
          </div>

          <div class="col-md-4">
              <div class="card shadow-sm h-100">
                  <div class="card-header bg-secondary text-white">
                      <h4 class="my-0 fw-normal">Solo Vectorización</h4>
                  </div>
                  <div class="card-body">
                      <h1 class="card-title pricing-card-title text-secondary">$14.990<small class="text-muted fw-light">/pago único</small></h1>
                      <ul class="list-unstyled mt-3 mb-4 text-start mx-3">
                          <li>✅ Convierte tu imagen actual a vectores.</li>
                          <li>✅ **Archivos Vectoriales Editables** (PDF, EPS, SVG).</li>
                          <li>✅ Tu logo escalará sin perder calidad.</li>
                          <li><br></li>
                          <li><br></li>
                      </ul>
                      <a href="https://m.me/106648708512872" class="w-100 btn btn-lg btn-outline-secondary">Cotizar Vectorización</a>
                  </div>
              </div>
          </div>

      </div>
  </div>
</section>

<section class="py-5 bg-dark text-white text-center">
<div class="container">
    <h3 class="mb-4 display-6 fw-bold">¿Listo para Dejar de Ser Invisible?</h3>
    <p class="lead mb-4">Empecemos a diseñar la cara profesional de tu negocio hoy mismo. La marca de tus sueños está a un clic de distancia.</p>
    <a href="https://m.me/106648708512872" class="btn btn-warning btn-lg fw-bold">Solicita tu Cotización Personalizada Aquí</a>
</div>
</section>
