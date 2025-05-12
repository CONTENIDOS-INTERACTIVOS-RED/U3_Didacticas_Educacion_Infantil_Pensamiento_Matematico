<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Adaptación de herramientas para diferentes tipos de aprendizaje'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-gris-claro.p-4(data-aos="fade-right")
          p.mb-0 ¿Aprendemos todos de la misma manera? Basta con observar una clase para notar que cada estudiante procesa la información de forma diferente. Algunos necesitan ver imágenes o esquemas para comprender mejor, otros retienen conocimientos al escuchar explicaciones detalladas, mientras que hay quienes aprenden haciendo, moviéndose y experimentando con sus propias manos.
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 En la educación inicial, reconocer esta diversidad es clave para garantizar experiencias de aprendizaje significativas. Adaptar las herramientas didácticas a los distintos estilos de aprendizaje—visual, auditivo y kinestésico—permite que cada niño y niña desarrolle su potencial en un entorno que responda a sus necesidades. ¿Cómo se logra esta adaptación? ¿Qué estrategias pueden emplearse para ofrecer experiencias inclusivas y efectivas?
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-32.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Se invita a explorar la importancia de elegir y modificar herramientas didácticas para que cada estudiante pueda aprender de la manera que le resulte más natural. Al comprender cómo se procesa la información según los estilos de aprendizaje, se podrá transformar la enseñanza en una experiencia más accesible, dinámica y enriquecedora. ¡Es momento de descubrir cómo hacer del aprendizaje un camino que todos puedan recorrer con éxito!
      

      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Comprender para enseñar: los estilos de aprendizaje en la educación infantil
      
      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 ¿Por qué algunas personas recuerdan mejor una explicación cuando la leen, mientras que otras necesitan escucharla o experimentarla con sus propias manos? Esta pregunta nos introduce en una de las claves esenciales de la educación inicial: la existencia de <b>diferentes estilos de aprendizaje.</b>
          .bg-azul-oscuro.p-4
            span Cada niño y niña tiene una manera particular de <b>recibir, procesar y retener la información</b>. Reconocer estas diferencias permite al docente diseñar estrategias más <b>efectivas e inclusivas</b>. Como señala <b>Sáez (2018)</b>, comprender para enseñar implica conocer cómo aprenden los estudiantes, para así adaptar la enseñanza a sus características individuales.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

      p.mb-4 En el contexto de la educación infantil, atender los estilos de aprendizaje es fundamental para construir un entorno motivador, accesible y centrado en las necesidades reales de los niños y niñas. Los principales estilos de aprendizaje son: 

      ImagenInfografica.color-secundario.mb-4.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-34.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='38%' y='26%' numero='+')
          .h5.mb-2 Visual
          p  Se basa en la interpretación de imágenes, esquemas, colores y gráficos. Favorece la organización mediante mapas conceptuales o cuadros sinópticos. Ejemplo: enseñar los colores con tarjetas brillantes y dibujos, o utilizar videos educativos.
        .tarjeta.bg-white.p-4(x='61%' y='28%' numero='+')
          .h5.mb-2 Auditivo
          p Se desarrolla mediante la escucha activa. La entonación, el ritmo y la repetición fortalecen la memoria. Ejemplo: narrar un cuento con sonidos y música que refuercen la comprensión.
        .tarjeta.bg-white.p-4(x='38%' y='78%' numero='+')
          .h5.mb-2 Kinestésico
          p Relacionado con el movimiento, la manipulación y la experimentación. El aprendizaje ocurre tocando, construyendo y actuando. Ejemplo: resolver problemas con bloques o realizar experimentos.
        .tarjeta.bg-white.p-4(x='61%' y='78%' numero='+')
          .h5.mb-2 Lectura / Escritura
          p Enfocado en el texto escrito. Se aprende mejor leyendo y escribiendo sobre el contenido. Ejemplo: leer un libro ilustrado y luego redactar una historia sobre el animal favorito.
      
      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          h2 Integración de estilos en el aula
          p.mb-4 Ningún niño o niña responde exclusivamente a un solo estilo. En realidad, cada persona utiliza una combinación de formas de aprendizaje que varía según el <b>contexto y el contenido.</b>
          .bg-gris-oscuro.p-4.mb-4
            span Por ello, el mayor desafío —y también la mayor oportunidad— en educación inicial es <b>diseñar experiencias que integren múltiples estilos</b>, permitiendo que todos los estudiantes participen activamente y desarrollen su potencial de forma equilibrada.
          span Algunos ejemplos de integración didáctica son:

      .row.position-relative.mb-0.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Ciclo del agua
                p ●	<i>Visual</i>: video explicativo del proceso.<br>●	<i>Auditivo</i>: discusión guiada sobre las etapas.<br>●	<i>Kinestésico</i>: demostración con agua y una planta.<br>●	<i>Lectura/escritura</i>: folleto informativo para leer y completar.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Vida marina:
                p ●	Visual: imágenes de animales marinos.<br>●	Auditivo: narraciones sobre sus hábitats y comportamientos.<br>●	Kinestésico: modelos tridimensionales para explorar con las manos.<br>●	Lectura/escritura: libro sobre el océano para leer y comentar.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')

      .d-flex.align-items-start.bg-morado.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-38.svg', alt='Texto descriptivo de la imagen')
        .my-auto.px-4.px-xl-0
          p.pe-xl-3.mb-0.text-white Al comprender cómo aprende cada niño y niña, se abren nuevas puertas para diseñar propuestas pedagógicas <b>significativas, equitativas y personalizadas</b>. Integrar los distintos estilos de aprendizaje no solo favorece la adquisición de contenidos, sino que garantiza el acceso a <b>experiencias educativas inclusivas, motivadoras y transformadoras.</b>
      

      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Seleccionar herramientas según el estilo de aprendizaje: una clave para la enseñanza efectiva
      
      .row.mb-4
        .col-10.col-lg-6.col-xl-4.mx-auto.bg-amarillo.p-4.d-flex(data-aos='fade-up')
          span En la educación infantil, es común observar que algunos niños y niñas aprenden mejor al ver <i>imágenes y gráficos</i>, mientras que otros requieren escuchar explicaciones detalladas o manipular objetos para comprender un concepto. Esta diversidad responde a los <b>diferentes estilos de aprendizaje</b>, que influyen directamente en cómo cada estudiante procesa, retiene y aplica el conocimiento. 
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
        .col-10.col-lg-6.col-xl-4.mx-auto.bg-azul.p-4.d-flex(data-aos='fade-up')
          span Para que la enseñanza sea verdaderamente efectiva, es esencial que el docente <b>sepa cconozca estos estilos y seleccione herramientas didácticas adecuadas</b> para cada uno. De esta forma, se favorece el desarrollo integral de los niños y niñas y se generan experiencias significativas, inclusivas y personalizadas.

      h2 Estilos de aprendizaje y herramientas recomendadas

      p.mb-4 A continuación se presentan los principales estilos de aprendizaje en la educación infantil, junto con sus características y herramientas didácticas recomendadas:

      .row.bg-azul-oscuro.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          .row
            .col-12.col-xl-6
              p.mb-4 Para estudiar esta temática, lo invitamos a escuchar el siguiente <i>podcast.</i>
              TarjetaAudio.color-secundario.bg-white.mb-3(
                texto='Juego simbólico'
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
                @audio-hover='mostrarIndicadorTarjetaAudio = false'
              )
            .col-xl-6.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')

      h2 La integración de estilos: enseñanza inclusiva y efectiva
      p.mb-4 Aunque algunos niños y niñas muestran una preferencia clara por uno de estos estilos, la mayoría combina diferentes formas de aprender dependiendo de la actividad y del entorno (Gallego, Alonso & Barros, 2022). Por eso, es fundamental que la enseñanza en educación infantil sea flexible e integradora, incorporando elementos visuales, auditivos, kinestésicos y de lectura/escritura en una misma experiencia.
      p.mb-4 Algunos ejemplos de integración didáctica son:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Cuento participativo
                p ● Visual: ilustraciones del cuento.<br>● Auditivo: narración con efectos de voz.<br>● Kinestésico: dramatización de personajes.<br>● Lectura/escritura: escritura creativa para cambiar el final.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Matemáticas iniciales
                p ● Visual: tarjetas numéricas.<br>● Auditivo: canciones numéricas.<br>● Kinestésico: uso de regletas y bloques.<br>● Lectura/escritura: trazar números en arena o papel.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')

      p.mb-4 Esta integración no solo favorece el aprendizaje de todos los estudiantes, sino que también <b>estimula la creatividad, la autonomía y el pensamiento crítico</b> desde los primeros años.

      h2 Adaptación de herramientas a diferentes entornos educativos

      p.mb-4 Además del estilo de aprendizaje, es importante <b>ajustar las herramientas al entorno en el que se desarrolla la enseñanza</b>:

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Presencial")
              p Combinación de materiales físicos, juegos colaborativos y actividades manipulativas que promuevan la participación activa.
            .div(titulo="En línea")
              p Cuentos interactivos, canciones grabadas, actividades descargables y <i>videos</i> animados para mantener el interés y facilitar el acceso autónomo.
            .div(titulo="A distancia (sin conectividad)")
              p Actividades prácticas con materiales del hogar, como construir figuras con objetos cotidianos o contar elementos de la casa, involucrando a las familias.

      .d-flex.align-items-start.bg-azul.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-44.svg', alt='Texto descriptivo de la imagen')
        .my-auto.px-4.px-xl-0
          p.pe-xl-3.mb-0 Seleccionar herramientas didácticas según el estilo de aprendizaje no es solo una estrategia pedagógica eficaz, sino un acto de <b>inclusión y equidad</b>. Al diseñar propuestas que integren lo visual, auditivo, kinestésico y lecto-escrito, se atiende la diversidad del aula, se fortalece la motivación y se garantiza que cada niño y niña tenga acceso a una educación <b>significativa, cercana y enriquecedora.</b>

      #t_2_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.3
          h2 Estrategias para combinar herramientas y favorecer la inclusión educativa

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 ¿Es posible diseñar experiencias de aprendizaje que respondan a la diversidad de habilidades, estilos y ritmos de cada estudiante? <b>Llera (2011)</b> sostiene que la educación inclusiva parte del principio de que todos <i>los niños y niñas tienen derecho a aprender en igualdad de condiciones</i>, independientemente de sus características individuales.
          .bg-amarillo.p-4.mb-4
            span En un aula —sea <b>presencial, virtual o a distancia</b>— conviven múltiples formas de aprender, lo que representa un desafío pedagógico. En este contexto, la <b>combinación estratégica de herramientas didácticas</b> (manipulativas, digitales y lúdicas) se convierte en una vía eficaz para garantizar experiencias de aprendizaje significativas y accesibles para todos.
          span Los principios para una enseñanza inclusiva son:
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-10.col-xl-4.mx-auto.mb-4
          .d-flex.align-items-start.bg-amarillo-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-46.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-2.text-bold Combinar herramientas
              span Ofrecer múltiples formas de representación, expresión y participación.
        .col-10.col-xl-4.mx-auto.mb-4
          .d-flex.align-items-start.bg-amarillo-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-47.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-2.text-bold Reconocer la diversidad
              span Verla como una oportunidad, no como una barrera.
        .col-10.col-xl-4.mx-auto
          .d-flex.align-items-start.bg-amarillo-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-48.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-2.text-bold Diseñar estrategias variadas
              span Atender estilos de aprendizaje y necesidades individuales.

      h2 Estrategias inclusivas basadas en la combinación de herramientas.

      p.mb-4 Las estaciones de trabajo permiten que los estudiantes roten por distintos espacios, abordando un mismo contenido desde diferentes enfoques. Esta estrategia atiende a los estilos de aprendizaje de manera simultánea <b>(Bravo, 2006)</b>. Por ejemplo, enseñanza de los números a través de estaciones: 

      .row.bg-fondo-2.bg-full-width.py-4.mb-4
        div.px-5
          .row.mb-0
            .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Visual
                  p.text-small.px-4.text-center.pb-2 Tarjetas con números grandes y representaciones gráficas.
            .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-up")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Auditiva
                  p.text-small.px-4.text-center.pb-2 Canciones y rimas numéricas.
            .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-up")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Kinestésica
                  p.text-small.px-4.text-center.pb-2 Juegos de mesa con bloques de conteo.
            .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-left")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Lectura/escritura
                  p.text-small.px-4.text-center.pb-2 Libros con trazos y reconocimiento numérico.

      p.mb-4 Esta estrategia permite que cada niño y niña interactúe con el contenido <b>según su estilo de aprendizaje</b>, reforzando la comprensión significativa.

      h2(data-aos="fade-down") Tecnología asistiva: apoyo para el acceso equitativo

      p.mb-4 Martínez, Távara y Achachagua (2024) destacan que la tecnología asistiva es fundamental para garantizar el acceso al aprendizaje de estudiantes con discapacidades sensoriales, motrices o del lenguaje. Estas herramientas deben combinarse con recursos tradicionales y digitales para asegurar una experiencia inclusiva.

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Visual")
              p Lectores de pantalla, materiales en braille, alto contraste.
            .div(titulo="Auditiva")
              p Subtítulos, transcripciones, narraciones visuales.
            .div(titulo="Motriz")
              p Teclados ampliados, ratones adaptados.
            .div(titulo="Comunicación")
              p Aplicaciones de CAA, tableros de imágenes.

      .bg-full-width.bg-azul.p-4.mb-4
        p.mb-0.px-4 Estas herramientas permiten que todos los estudiantes participen activamente, ya sea a través de pizarras digitales accesibles o cuentos interactivos con narración.

      h2 Materiales accesibles: recursos adaptados para todos

      p.mb-4 Diseñar materiales accesibles permite que todos los estudiantes interactúen con los contenidos de <b>forma equitativa</b>, favoreciendo la comprensión y la expresión.
      
      .row.mb-0
        .col-10.col-lg-6.col-xl-3.mx-auto(data-aos="fade-right").mb-4
          .d-flex.align-items-start.bg-amarillo-oscuro.p-2.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-54.svg', alt='Texto descriptivo de la imagen')
            .my-auto.px-4
              p.pe-xl-3.mb-2.text-bold Texto
              span Con pictogramas o símbolos visuales.
        .col-10.col-lg-6.col-xl-3.mx-auto(data-aos="fade-up").mb-4
          .d-flex.align-items-start.bg-amarillo-oscuro.p-2.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-55.svg', alt='Texto descriptivo de la imagen')
            .my-auto.px-4
              p.pe-xl-3.mb-2.text-bold Visual
              span Uso de alto contraste, texto grande.
        .col-10.col-lg-6.col-xl-3.mx-auto(data-aos="fade-down").mb-4
          .d-flex.align-items-start.bg-amarillo-oscuro.p-2.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-56.svg', alt='Texto descriptivo de la imagen')
            .my-auto.px-4
              p.pe-xl-3.mb-2.text-bold Sensorial
              span Materiales táctiles, plastilina, texturas.
        .col-10.col-lg-6.col-xl-3.mx-auto(data-aos="fade-left").mb-4
          .d-flex.align-items-start.bg-amarillo-oscuro.p-2.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-57.svg', alt='Texto descriptivo de la imagen')
            .my-auto.px-4
              p.pe-xl-3.mb-2.text-bold Comunicativo
              span Tableros con imágenes, recursos visuales de apoyo.

      .row.bg-fondo-2.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          p.mb-4 Estos materiales pueden integrarse a las actividades cotidianas del aula para fomentar la participación activa de todos los niños y niñas.

          h2 Colaboración entre pares: aprender juntos para incluir
          p.mb-4 El trabajo colaborativo <b>fomenta la inclusión social y académica</b>, fortaleciendo vínculos y generando espacios de apoyo mutuo.

          .row.mb-4
            .col-10.col-md-6.col-lg-4.col-xl-4.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Tutoría entre pares
                  p.text-small.px-4.text-center.pb-2 Un estudiante apoya a otro en una habilidad específica.
            .col-10.col-md-6.col-lg-4.col-xl-4.mb-4.mx-auto(data-aos="fade-up")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Grupos heterogéneos
                  p.text-small.px-4.text-center.pb-2 Se potencian distintas fortalezas en tareas grupales.
            .col-10.col-md-6.col-lg-4.col-xl-4.mb-4.mx-auto(data-aos="fade-left")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Dramatizaciones o juegos de roles
                  p.text-small.px-4.text-center.pb-2 Favorecen la interacción entre distintos estilos de aprendizaje.

      .row.bg-morado.bg-full-width.py-4.mb-4
        div.px-5.d-flex

          p.my-auto.text-white <b>Ejemplo:</b> En una actividad de lectura compartida, un niño puede leer mientras otro ilustra la historia, integrando estilos auditivos y visuales.

      h2 Adaptación de herramientas a diferentes entornos educativos

      p.mb-4 Además de los estilos de aprendizaje, es esencial considerar el <b>contexto educativo</b> en que se aplican estas herramientas:

      .row.mb-4
        .col-12.col-xl-8
          .d-flex.align-items-start.bg-amarillo-oscuro.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-61.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-2.text-bold Presencial
              span Materiales físicos, interacción directa, juegos colaborativos.
          .d-flex.align-items-start.bg-amarillo-oscuro.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-62.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-2.text-bold Virtual
              span Plataformas interactivas, videos, canciones grabadas, recursos descargables.
          .d-flex.align-items-start.bg-amarillo-oscuro.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-63.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-2.text-bold A distancia (sin conectividad)
              span Guías impresas con actividades prácticas usando elementos del hogar (ej. frijoles, botones para contar).
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-64.png', alt='Texto que describa la imagen').h-100
      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-65.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Por ejemplo, en educación a distancia se pueden enviar actividades que utilicen materiales cotidianos, mientras que en el aula virtual se puede trabajar con simuladores y videos explicativos.
          .bg-azul-oscuro.p-4.mb-4(data-aos='fade-up')
            span La inclusión educativa requiere de <b>estrategias flexibles, diversas y adaptadas</b> a las necesidades de cada estudiante. Combinar herramientas manipulativas, digitales y lúdicas permite no solo atender a los diferentes estilos de aprendizaje, sino también construir entornos donde <b>todos los niños y niñas se sientan valorados, respetados y motivados para aprender.</b>
          span Desde el uso de estaciones de trabajo hasta la implementación de tecnología asistiva y la colaboración entre pares, cada estrategia aporta a la creación de una educación <b>más equitativa, accesible y enriquecedora</b>, promoviendo el desarrollo de habilidades esenciales para la vida y la participación plena en la sociedad.

      .row.bg-gris.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Explorando el uso de herramientas en diferentes contextos educativos
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Explorando el uso de herramientas en diferentes contextos educativos , donde se aborda cómo las características del entorno —presencial, virtual o a distancia— influyen en la selección y efectividad de las herramientas didácticas. 
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Explorando_el_uso_de_herramientas.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Explorando el uso de herramientas en diferentes contextos educativos
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-66.png', alt='Texto que describa la imagen')


      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>
      
      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/116192") Drummond, M. J. Peacock, A. & Swann, M. (2016). Generar aprendizajes sin limitaciones

              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://dialnet.unirioja.es/servlet/articulo?codigo=3610165") Ortiz-De-Urbina-Criado, M., Medina Salgado, S., & Calle Durán, C. D. L. (2010). Herramientas para el aprendizaje colaborativo: una aplicación práctica del juego de rol

              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://revistaestilosdeaprendizaje.com/article/view/945") Gil, D. J. G., & Diego, M. C. G. (2012). Los estilos de aprendizaje en la formación inicial del docente. Revista de estilos de Aprendizaje, 5(9)

              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.usfq.edu.ec/sites/default/files/2020-07/0006_para_el_aula_04.pdf") Borja, C. (2019). ¿Qué Es La Tecnología Asistiva?. Quito, Ecuador: USFQ

              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=pmMVyxqswXc") [Vídeo] Angel Alsina Pastells: Matemáticas: Estrategias y propuestas didácticas

              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=LhUEu5kQY7E") [Vídeo] ¿Qué herramientas digitales utilizar para la enseñanza de la matemática?
                
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Herramientas Didácticas para la Matemática',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Por qué es importante el uso de herramientas en el aprendizaje matemático en la educación inicial?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque ayudan a los niños y niñas a memorizar fórmulas matemáticas sin necesidad de comprenderlas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque favorecen la exploración, la manipulación y la construcción del conocimiento matemático.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Porque sustituyen la enseñanza del docente, facilitando el aprendizaje autónomo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque permiten evaluar a los estudiantes únicamente a través de ejercicios digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes herramientas pertenece al grupo de las herramientas manipulativas en la enseñanza matemática?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicaciones móviles y juegos en línea.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Regletas, bloques lógicos y geoplanos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Videos explicativos y tutoriales en línea.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Infografías y presentaciones digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Para un estudiante con un estilo de aprendizaje kinestésico, ¿qué tipo de herramientas son más adecuadas?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Juegos interactivos en plataformas digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mapas conceptuales y esquemas visuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Materiales manipulativos como ábacos y tangram.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Podcasts y audiolibros sobre conceptos matemáticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es un desafío común en el uso de herramientas didácticas en la educación a distancia?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La falta de interacción en tiempo real y el acceso limitado a materiales específicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La dificultad para utilizar herramientas digitales en el aula presencial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La sobrecarga de materiales físicos en el hogar de los estudiantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La falta de interés de los niños en las actividades matemáticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cómo se puede evaluar la efectividad de una herramienta didáctica en cualquier modalidad educativa?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Observando la interacción de los niños con la herramienta y su impacto en la comprensión del contenido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aplicando siempre el mismo recurso sin realizar ajustes según el contexto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Preguntando solo a los docentes sobre la utilidad de la herramienta sin involucrar a los estudiantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evaluando únicamente el resultado final de las actividades matemáticas sin considerar el proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
