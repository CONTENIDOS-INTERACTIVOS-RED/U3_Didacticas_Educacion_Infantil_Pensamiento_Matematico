<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Adaptación de herramientas para diferentes tipos de aprendizaje'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .bg-color-8.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") ¿Aprendemos todos de la misma manera? Basta con observar una clase para notar que cada estudiante procesa la información de forma diferente. Algunos necesitan ver imágenes o esquemas para comprender mejor, otros retienen conocimientos al escuchar explicaciones detalladas, mientras que hay quienes aprenden haciendo, moviéndose y experimentando con sus propias manos.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/1.png', alt='')


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-lg-5.mb-4 En la educación inicial, reconocer esta diversidad es clave para garantizar experiencias de aprendizaje significativas. Adaptar las herramientas didácticas a los distintos estilos de aprendizaje—visual, auditivo y kinestésico—permite que cada niño y niña desarrolle su potencial en un entorno que responda a sus necesidades. ¿Cómo se logra esta adaptación? ¿Qué estrategias pueden emplearse para ofrecer experiencias inclusivas y efectivas?
      
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Se invita a explorar la importancia de elegir y modificar herramientas didácticas para que cada estudiante pueda aprender de la manera que le resulte más natural. Al comprender cómo se procesa la información según los estilos de aprendizaje, se podrá transformar la enseñanza en una experiencia más accesible, dinámica y enriquecedora. ¡Es momento de descubrir cómo hacer del aprendizaje un camino que todos puedan recorrer con éxito!
      

      
      
      

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>
      
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/219649" target="_blank" rel="noopener noreferrer") Flinn, E. Mulligan, A. & Thompson, H. (2022). Ideas STEM para primaria: más de 60 actividades que combinan matemáticas, ciencia, diseño y tecnología. (1 ed.). Narcea Ediciones.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://ocu.uniovi.es/pluginfile.php/3649/mod_resource/content/1/esquema%20corporal%20y%20estructura%20y%20espacial.pdf" target="_blank" rel="noopener noreferrer") Bascón, M. A., & FÍSICA, E. (2011). La percepción corporal y espacial. Revista digital innovación y experiencias educativas, 1-8.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://revistascientificas.cuc.edu.co/culturaeducacionysociedad/article/view/2227" target="_blank" rel="noopener noreferrer") Pisciotti, A. P., Torres-Ospino, M., Torres-Rojas, M., Rojas-De Sánchez, N., Bastidas-Miranda, N., Vilardy-Torres, A., ... & Oliveros, Y. O. (2018). Laboratorio Ludo-Matemático, Herramienta Potenciadora Del Pensamiento Geométrico-Métrico En Preescolar. Cultura Educación Sociedad, 9(3), 521-528.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://dialnet.unirioja.es/servlet/tesis?codigo=220135" target="_blank" rel="noopener noreferrer") Cabrales, A. C. (2017). Comprobación experimental de las habilidades básicas de pensamiento espacial y procesos de comunicación en alumnos de preescolar colombianos (Doctoral dissertation, Universidad Internacional de La Rioja).

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=CUK4q618KvA" target="_blank" rel="noopener noreferrer") Martín, A. 2020. (2021, 27 de mayo). U.12.1.5 POLIEDROS. Educación infantil 1 CILINDRO
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=AiOBgZEWrCY" target="_blank" rel="noopener noreferrer") Matemáticas y más temáticas. (2020, 19 de octubre). Clasificaciones y seriaciones | Didáctica de la Matemática en Ed. Infantil

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el principal beneficio del uso de materiales manipulativos en la enseñanza del pensamiento matemático en la infancia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Permiten que los niños memoricen fórmulas matemáticas rápidamente.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Favorecen la exploración y comprensión de conceptos matemáticos de forma concreta.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Reducen el tiempo necesario para enseñar operaciones matemáticas.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Evitan la necesidad de realizar actividades prácticas en clase.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué estrategia es más adecuada para desarrollar el pensamiento espacial en niños de educación infantil?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Presentar ejercicios escritos con problemas de geometría.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Utilizar geoplanos, tangram y actividades de construcción.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Memorizar fórmulas para calcular áreas y perímetros.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Usar únicamente aplicaciones digitales sin interacción con materiales físicos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes estrategias fomenta el desarrollo del pensamiento aleatorio y variacional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Utilizar juegos con dados, ruletas y actividades de probabilidad.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Enseñar operaciones matemáticas solo con ejercicios escritos.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Explicar conceptos sin permitir la experimentación.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evaluar a los niños únicamente con exámenes escritos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál es la principal ventaja de la resolución de problemas en la enseñanza de las matemáticas en la primera infancia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Facilita la memorización de reglas matemáticas sin necesidad de práctica.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Desarrolla habilidades de razonamiento lógico y creatividad en los niños.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Reduce la necesidad de interacción con materiales concretos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evita que los niños enfrenten desafíos matemáticos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cómo puede integrarse la tecnología en la enseñanza del pensamiento matemático en la educación infantil?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Usando aplicaciones y juegos interactivos que refuercen conceptos matemáticos.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Sustituyendo completamente las actividades prácticas por actividades digitales.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Evitando el uso de materiales físicos y promoviendo solo el aprendizaje virtual.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Limitando el acceso a la tecnología hasta niveles superiores.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
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
