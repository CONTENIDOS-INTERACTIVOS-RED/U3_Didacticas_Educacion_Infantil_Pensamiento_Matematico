<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Herramientas en la enseñanza matemática'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p Desde los primeros años de vida, los niños y niñas construyen nociones matemáticas mediante la exploración, el juego y la interacción con su entorno. La educación infantil tiene la responsabilidad de potenciar este desarrollo a través de experiencias significativas que despierten la curiosidad y fomenten el razonamiento lógico.

    .row.mb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in", style="max-width: 400px;").my-4.my-lg-0.mx-auto
      .col-lg-8
        p(data-aos="fade-left").mb-4 ¿Se puede aprender matemáticas sin herramientas? Imaginar una clase sin materiales de apoyo sería como intentar construir una casa sin instrumentos. Desde contar con los dedos hasta utilizar apps digitales, las herramientas didácticas cumplen un rol fundamental, especialmente en la educación inicial (Cattaneo, 2012).
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-0 Las matemáticas, lejos de ser solo números y operaciones, representan un lenguaje para comprender el mundo. Sin embargo, su enseñanza puede resultar abstracta para muchos niños y niñas. Es aquí donde el uso adecuado de herramientas transforma esta experiencia en algo dinámico, accesible y significativo.
    
    

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] La importancia de las herramientas en el aprendizaje matemático en la educación inicial
    
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") ¿De qué manera se logra que los niños disfruten las matemáticas? La respuesta está en transformar esta asignatura en una experiencia significativa, donde no se trata solo de memorizar números, sino de desarrollar habilidades cognitivas como la lógica, el razonamiento y la resolución de problemas.
    
        .bg-color-3.p-4(data-aos="fade-left")
          p.mb-0 Desde edades tempranas, los niños interactúan espontáneamente con formas, tamaños y cantidades. Contar juguetes, clasificar objetos por color o comparar alturas ya implica pensamiento matemático. No obstante, para consolidar estos aprendizajes, se necesitan herramientas didácticas que guíen el paso de lo concreto a lo abstracto (Ortiz Choez et al., 2019).
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
    
    .row.bg-fondo-2.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        h2 Tipos de herramientas didácticas en matemáticas
        p.mb-4 Las herramientas que apoyan el aprendizaje matemático pueden agruparse en tres grandes categorías, cada una con funciones específicas que permiten adaptarse a los distintos estilos de aprendizaje:
        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Manipulativas
                p.text-small.px-4.text-center.pb-2 Materiales físicos como bloques, regletas o ábacos. Permiten explorar conceptos tangibles, desarrollar habilidades como la seriación, la clasificación y el conteo.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Digitales
                p.text-small.px-4.text-center.pb-2 Apps, juegos interactivos y simuladores. Aportan dinamismo, permiten personalizar actividades y estimulan el aprendizaje autónomo.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Lúdicas
                p.text-small.px-4.text-center.pb-2 Juegos de mesa, rimas, canciones o retos. El juego favorece la memoria, la atención y la participación activa en un entorno divertido.

    h2 Ejemplos clave de aplicación
    p.mb-4 La eficacia de las herramientas se potencia cuando se emplean en situaciones concretas del aula. Aquí algunos ejemplos que ilustran su uso:

    .row.mb-4
      .col-10.col-lg-6.mx-auto(data-aos="fade-right").mb-4
        .d-flex.align-items-start.bg-amarillo-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-4.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Bloques de construcción
            span Favorecen la comprensión de conceptos como conteo, suma o geometría al construir torres o figuras.
      .col-10.col-lg-6.mx-auto(data-aos="fade-left").mb-4
        .d-flex.align-items-start.bg-amarillo-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-5.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Ábaco
            span Visualiza operaciones básicas (suma/resta) al mover cuentas que representan cantidades.
      .col-10.col-lg-6.mx-auto(data-aos="fade-right").mb-4
        .d-flex.align-items-start.bg-amarillo-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-6.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Juegos de mesa
            span Juegos como <i>Uno o Monopoly</i> trabajan números, patrones y estrategia de forma divertida.
      .col-10.col-lg-6.mx-auto(data-aos="fade-left").mb-4
        .d-flex.align-items-start.bg-amarillo-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-7.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Software educativo
            span Apps con rompecabezas o lógica matemática estimulan el pensamiento crítico y la resolución de problemas.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Analogías para comprender la función de las herramientas

    p.mb-4 Para facilitar la comprensión de su importancia, se pueden usar comparaciones que conecten con la vida cotidiana:

    .row.mb-4.bg-gris-claro.p-4.py-xl-0.bg-full-width
      .col-xl-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.py-xl-4
        p.my-auto.px-4  ●	<b>La caja de herramientas:</b> Aprender matemáticas sin recursos es como construir sin martillo ni clavos. Las herramientas como el ábaco o los bloques permiten construir una base sólida del conocimiento.<br><br>●	<b>La cocina:</b> Un chef necesita utensilios para cocinar. De igual forma, los estudiantes requieren herramientas para “mezclar” y “cocinar” conceptos matemáticos de forma efectiva.

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        h2 Selección de herramientas según el contexto educativo
        p.mb-4 El entorno educativo (presencial, virtual o a distancia) influye en la elección de herramientas. Cada modalidad demanda estrategias particulares:
        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-9.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Presencial
              p.px-1.text-small.mb-0.text-center Uso de materiales físicos, dinámicas grupales, actividades con bloques, ábacos o tarjetas numéricas. Fomenta la interacción social.
          .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-10.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Virtual
              p.px-1.text-small.mb-0.text-center Uso de apps, simuladores, plataformas de juegos matemáticos. Favorece la retroalimentación inmediata y la personalización.
          .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-11.svg', style='width: 80px')
              p.text-bold.mb-4.text-center A distancia
              p.px-1.text-small.mb-0.text-center Actividades con objetos caseros: clasificar formas, contar elementos reciclados, construir figuras con materiales disponibles en casa. Promueve la autonomía.

    h2 Hacia una enseñanza matemática significativa
    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Más allá del tipo de herramienta, lo esencial es que estas permitan a los niños <b>explorar, crear y comprender</b> las matemáticas como algo cercano a su vida. Tocar, jugar y observar conceptos matemáticos <b>convierte el aprendizaje en una experiencia duradera y placentera.</b>
        .bg-azul.p-4
          span Reflexionar sobre el uso de estas herramientas permite <b>innovar, adaptarse y responder a las necesidades diversas del aula</b>, garantizando que cada estudiante desarrolle desde temprana edad una relación positiva con las matemáticas.
      .col-xl-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')

    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3
        h2 Tipos de herramientas: manipulativas, digitales y lúdicas

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .bg-azul-claro.p-4
          span ¿Cómo hacer que los niños y niñas disfruten aprendiendo matemáticas? 
        .d-flex.align-items-start.bg-azul-oscuro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-14.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Según <b>Castro (2016)</b>, en la educación inicial el aprendizaje se construye a partir de la exploración, la interacción y la curiosidad. En este contexto, las <b>herramientas didácticas</b> juegan un papel clave al transformar los conceptos matemáticos en experiencias <b>significativas, accesibles y contextualizadas.</b>
        p.mb-4 Seleccionar adecuadamente estos recursos no solo facilita la comprensión de nociones numéricas, geométricas o de medición, sino que también permite <b>responder a los diversos estilos de aprendizaje:</b> algunos estudiantes aprenden mejor al <i>tocar</i>, otros mediante estímulos <i>visuales o auditivos</i>, y muchos a través del <i>juego.</i>
        span La clasificación de herramientas didácticas en matemáticas es: 
    
    .row.mb-4
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Manipulativas")
            p Elementos físicos que permiten interactuar directamente con los conceptos matemáticos mediante exploración concreta y táctil.
          .div(titulo="Digitales")
            p Recursos tecnológicos que ofrecen experiencias visuales, auditivas e interactivas, ideales para entornos virtuales o de educación a distancia.
          .div(titulo="Lúdicas")
            p Juegos y dinámicas que estimulan el aprendizaje de manera entretenida, fortaleciendo habilidades matemáticas y fomentando la motivación.
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    .row.bg-fondo-2.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3 
        h2 Herramientas manipulativas: exploración táctil del conocimiento
        p.mb-4 Cuando se utilizan <b>objetos concretos</b>, los conceptos abstractos se vuelven tangibles. Estas herramientas fomentan el <b>aprendizaje experiencial</b>, el desarrollo de la <b>motricidad fina y el pensamiento lógico</b>. Son especialmente valiosas para estudiantes kinestésicos (Cascallana, 1988).
        .row.mb-4
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Bloques lógicos / regletas Cuisenaire
                p.text-small.px-4.text-center.pb-2 Exploración de seriación, clasificación y relaciones numéricas mediante tamaño y color.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Ábaco / contadores
                p.text-small.px-4.text-center.pb-2 Visualización del valor posicional y operaciones básicas como suma y resta.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Tangram / geoplano
                p.text-small.px-4.text-center.pb-2 Estímulo del pensamiento espacial, la geometría y la resolución de problemas.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Tarjetas numéricas / dominós
                p.text-small.px-4.text-center.pb-2 Refuerzo del reconocimiento de números y del cálculo mental.

    h2 Herramientas digitales: tecnología al servicio de las matemáticas

    p.mb-4 En contextos virtuales o con recursos limitados, estas herramientas aportan una experiencia de aprendizaje <b>visual, auditiva e interactiva</b>, además de fomentar la <b>autonomía</b> y la <b>personalización del ritmo</b> de estudio.

    .row.mb-4
      .col-10.col-lg-6.mx-auto(data-aos="fade-right").mb-4
        .d-flex.align-items-start.bg-amarillo-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-20.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold GeoGebra / Khan Academy Kids
            span Simulaciones y ejercicios visuales e interactivos para explorar conceptos.
      .col-10.col-lg-6.mx-auto(data-aos="fade-left").mb-4
        .d-flex.align-items-start.bg-amarillo-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-21.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Videos / tutoriales animados
            span Explicaciones claras y atractivas de temas abstractos (e.g., fracciones).
      .col-10.col-lg-6.mx-auto(data-aos="fade-right").mb-4
        .d-flex.align-items-start.bg-amarillo-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-22.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Simuladores / calculadoras virtuales
            span Práctica de operaciones sin necesidad de materiales físicos.
      .col-10.col-lg-6.mx-auto(data-aos="fade-left").mb-4
        .d-flex.align-items-start.bg-amarillo-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-23.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Prodigy Math / Matific
            span Plataformas con <i>gamificación</i>, retos y recompensas para motivar el aprendizaje.

    .row.bg-azul.bg-full-width.py-4.mb-4
      div.px-5.d-flex
        p.my-auto Estas herramientas deben <b>complementarse con experiencias concretas</b> para evitar una dependencia excesiva de lo digital y fomentar el pensamiento crítico.

    h2 Herramientas lúdicas: el juego como vía para aprender
    p.mb-4 El juego promueve el <b>aprendizaje espontáneo y motivador</b>, fortaleciendo no solo competencias matemáticas, sino también <b>habilidades sociales y emocionales</b>.

    .row.bg-fondo-2.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-24.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Bingo numérico / Sudoku infantil / Dominó de operaciones
              p.px-1.text-small.mb-0.text-center Refuerzo del cálculo mental y toma de decisiones.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-25.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Canciones / rimas matemáticas
              p.px-1.text-small.mb-0.text-center Estimulación auditiva para secuencias numéricas y patrones.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-26.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Acertijos / desafíos matemáticos
              p.px-1.text-small.mb-0.text-center Desarrollo del pensamiento lógico y la resolución de problemas.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-27.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Rayuela numérica / “Veo-veo” matemático
              p.px-1.text-small.mb-0.text-center Estímulo del trabajo en equipo e interacción grupal.

    h2 Integración de herramientas según el entorno educativo

    p.mb-4 Es esencial <b>adaptar las herramientas al contexto educativo</b> para maximizar su efectividad:

    .row.mb-4
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Presencial")
            p Herramientas manipulativas y lúdicas que favorecen la interacción directa y la experimentación.
          .div(titulo="Virtual")
            p Recursos digitales con componentes visuales e interactivos para fomentar la autonomía.
          .div(titulo="A distancia (sin conectividad)")
            p Actividades con materiales caseros: contar objetos, clasificar figuras, construir con elementos reciclados.
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')

    p.mb-4 Cada niño y niña tiene una forma particular de aprender. Por eso, <b>no existe una herramienta única o universal.</b> El reto del docente consiste en <b>combinar estratégicamente</b> recursos que se ajusten a las características del grupo y generen oportunidades de aprendizaje <b>reales y significativas</b>.

    .row.bg-gris.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto La aplicación de herramientas en la resolución de problemas matemáticos
          p.mb-5(data-aos="fade-up") Se invita a leer el documento La aplicación de herramientas en la resolución de problemas matemáticos , donde se aborda cómo diferentes tipos de herramientas —manipulativas, lúdicas, tecnológicas y visuales— pueden facilitar el desarrollo del pensamiento lógico y la comprensión de conceptos matemáticos desde la educación inicial.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_La aplicación_de_herramientas.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> La aplicación de herramientas en la resolución de problemas matemáticos
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')


    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/67064") González, A. (2016). La enseñanza de la matemática en el jardín de infantes a través de secuencias didácticas

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://produccioncientifica.ucm.es/documentos/62b68f89730a524af85b4321") Arteaga Martínez, B., & Macías Sánchez, J. (2016). Didáctica de las matemáticas en Educación Infantil: Aprender para enseñar

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://uvadoc.uva.es/handle/10324/7619") Prieto Abarquero, B. (2014). Materiales manipulativos en el proceso de enseñanza-aprendizaje de las matemáticas

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=LGgzMn02yU8") [Vídeo] Jose Angel Murcia: "Materiales Manipulativos para generar situaciones de aprendizaje en primaria" CREAMAT1

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=IQySWVt_hL4") [Vídeo] Luis Miguel Iglesias Albarrán: "Aprender y enseñar matemáticas con manipulativos virtuales" 27º Congreso NME Guatemala
              
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.image-out-bg
  position: relative
  &::after
    content: ''
    position: absolute
    bottom: 0%
    left: 0
    width: 100%
    height: 85%
    transform: translateY(-0%)
    background-color: #C3F3FB
    z-index: 0
  .col-lg-auto, .col-lg, .row
    z-index: 1


  @media screen and (max-width: bp-max-md)
    padding: 1rem

    &::after
      height: 100%
</style>
