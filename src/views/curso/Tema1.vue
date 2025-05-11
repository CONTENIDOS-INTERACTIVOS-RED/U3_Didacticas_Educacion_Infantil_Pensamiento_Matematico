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
    



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/49416" target="_blank" rel="noopener noreferrer") Cabañas Cañizares, M. R. (2015). Enseñanzas iniciales: nivel I. Ámbito de comunicación y competencia matemática. Matemáticas 2. Adquiero mi casa: (ed.). Ministerio de Educación y Formación Profesional de España.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistasojs.ucaldas.edu.co/index.php/latinoamericana/article/view/8373" target="_blank" rel="noopener noreferrer") Valderrama, V. C., & Arrubla, S. R. Q. (2022). El juego como estrategia pedagógica para el desarrollo del pensamiento lógico matemático en la primera infancia. Latinoamericana de Estudios Educativos, 18(2), 221-239.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.uva.es/index.php/edmain/article/view/5823" target="_blank" rel="noopener noreferrer") Castro, E., Cañadas, M. C., & Castro-Rodríguez, E. (2013). Pensamiento numérico en edades tempranas. Edma 0-6: Educación matemática en la infancia, 2(2), 1-11.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://pucrs.emnuvens.com.br/porescrito/article/view/24109" target="_blank" rel="noopener noreferrer") Felicetti, V. L., & Robayo, A. P. (2016). Didáctica y pensamiento matemático en educación infantil. Educação por escrito, 7(2), 253-262.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=BG2DgyzpPgU" target="_blank" rel="noopener noreferrer") Martín, A. 2020. (2022, 2 de febrero). 6 Ideas Matemáticas OAOA: INCLUSIÓN JERÁRQUICA. CONSTRUCCIÓN DEL 2 Y EL 3. 2 febrero 2022

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=3jz9ug41gro" target="_blank" rel="noopener noreferrer") universidadurjc. (2019, 7 de mayo). Enseñanza y aprendizaje de las matemáticas. Presentación 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

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
