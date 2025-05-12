export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Estrategias diversas para el desarrollo de estilos de aprendizaje en educación inicial',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Herramientas en la enseñanza matemática',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'La importancia de las herramientas en el aprendizaje matemático en la educación inicial',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Analogías para comprender la función de las herramientas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de herramientas: manipulativas, digitales y lúdicas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Adaptación de herramientas para diferentes tipos de aprendizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Comprender para enseñar: los estilos de aprendizaje en la educación infantil',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Seleccionar herramientas según el estilo de aprendizaje: una clave para la enseñanza efectiva',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Estrategias para combinar herramientas y favorecer la inclusión educativa',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cattaneo, L. (2012). Didáctica de la matemática: enseñar matemática, enseñar a enseñar matemática: ( ed.). Homo Sapiens Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67091',
    },
    {
      referencia:
        'Castro Martínez, E. (2016). Enseñanza y aprendizaje de las matemáticas en educación infantil: ( ed.). Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49142',
    },
    {
      referencia:
        'Novo Martín, M. L. (2021). Matemáticas en el Grado de Educación Infantil: la importancia del juego y los materiales manipulativos.',
      link: 'https://uvadoc.uva.es/handle/10324/51756',
    },
    {
      referencia:
        'Alsina, Á., & Bosch i Casas, E. (2025). Del GAMAR a la escuela: Principios sobre el uso de materiales manipulativos en el aula de matemáticas. Números: revista de didáctica de las matemáticas, 2025, vol. 119, p. 73-89.',
      link: 'https://dugi-doc.udg.edu/handle/10256/26564',
    },
    {
      referencia:
        'Edo, M., Baeza, M., Deulofeu, J., & Badillo, E. (2008). Estudio del paralelismo entre las fases de resolución de un juego y las fases de resolución de un problema. Union Rev. Iberoam. Educ. Matemática, 14, 61-75.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5913128',
    },
    {
      referencia:
        'Adolfo Ortiz Choez, W. Torres Villegas, I. D. L. A. & Ortiz Aguilar, W. (2019). La enseñanza de la Matemática y su influencia en el desarrollo del pensamiento: ( ed.). Editorial Académica Universitaria (Edacun).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/151749',
    },
    {
      referencia:
        'Bravo Benítez, M. (2006). Estrategias educativas en el aula: ( ed.). Ediciones Aljibe.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/60493',
    },
    {
      referencia:
        'Jarquín, F. A. (2016). Estilos de aprendizaje: PNL en NovaUniversitas. Perspectivas docentes, (60), 5-14.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6349227',
    },
    {
      referencia:
        'Navarro Espejo, A. (2016). Los estilos de aprendizaje en primaria: visual, auditivo y kinestésico. Publicaciones didácticas, 75, 21-46.',
      link: 'https://core.ac.uk/download/pdf/235858896.pdf',
    },
    {
      referencia:
        'Gallego, D. J., Alonso, C., & Barros, D. M. V. (2022). Estilos de Aprendizaje y Estilos de Enseñanza. Propuestas pedagógicas para la transformación de la educación. Revista de Estilos de Aprendizaje, 15(Especial), 1-4.',
      link: 'https://revistaestilosdeaprendizaje.com/article/view/5309',
    },
    {
      referencia:
        'Llera, J. B. (2011). La educación inclusiva. Padres y Maestros/Journal of Parents and Teachers, (338), 5-9.',
      link:
        'https://revistas.comillas.edu/index.php/padresymaestros/article/view/431',
    },
    {
      referencia:
        'Bocanegra Vilcamango, B. (Coord.). (2023). Aprender en el aula: (1 ed.). Editorial Transdigital.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/252915',
    },
    {
      referencia:
        'Martínez, V. (2017). Educación presencial versus educación a distancia. La cuestión universitaria, (9), 108-116.',
      link:
        'https://polired.upm.es/index.php/lacuestionuniversitaria/article/view/3582',
    },
    {
      referencia:
        'Tintaya, A. E. (2009). Desafíos y fundamentos de educación virtual. El Cid Editor.',
      link:
        'https://blogdeeducacionadistancia.wordpress.com/wp-content/uploads/2012/06/datos-fundamentales-de-la-edaluacion-virtual.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje experiencial',
      significado:
        'Método que permite a los estudiantes construir conocimientos a través de la experimentación y la interacción con su entorno.',
    },
    {
      termino: 'Aprendizaje inclusivo',
      significado:
        'Estrategia pedagógica que busca atender la diversidad de los estudiantes, garantizando la participación de todos en el proceso educativo.',
    },
    {
      termino: 'Aprendizaje kinestésico',
      significado:
        'Estilo de aprendizaje en el que los estudiantes comprenden mejor la información mediante la manipulación, el movimiento y la práctica activa.',
    },
    {
      termino: 'Aprendizaje lúdico',
      significado:
        'Enfoque educativo basado en el juego como herramienta para facilitar la enseñanza y el desarrollo de habilidades cognitivas y sociales.',
    },
    {
      termino: 'Aprendizaje visual',
      significado:
        'Estilo de aprendizaje en el que la información se asimila mejor a través de imágenes, gráficos, esquemas y otros recursos visuales.',
    },
    {
      termino: 'Contexto educativo',
      significado:
        'Entorno en el que se lleva a cabo el proceso de enseñanza-aprendizaje, que puede ser presencial, virtual o a distancia.',
    },
    {
      termino: 'Didáctica',
      significado:
        'Disciplina que estudia los métodos y estrategias para mejorar la enseñanza y optimizar los procesos de aprendizaje.',
    },
    {
      termino: 'Gamificación',
      significado:
        'Estrategia pedagógica que utiliza elementos del juego, como recompensas y desafíos, para motivar y mejorar el aprendizaje.',
    },
    {
      termino: 'Herramientas digitales',
      significado:
        'Recursos tecnológicos, como aplicaciones y plataformas interactivas, que facilitan la enseñanza y el aprendizaje en entornos virtuales.',
    },
    {
      termino: 'Herramientas manipulativas',
      significado:
        'Materiales concretos, como bloques y ábacos, que permiten a los estudiantes aprender matemáticas mediante la exploración táctil.',
    },
    {
      termino: 'Inclusión educativa',
      significado:
        'Principio que garantiza el acceso, la participación y el aprendizaje de todos los estudiantes, sin importar sus características o necesidades particulares.',
    },
    {
      termino: 'Interacción digital',
      significado:
        'Comunicación y participación en espacios virtuales a través de herramientas tecnológicas que facilitan el aprendizaje colaborativo.',
    },
    {
      termino: 'Metodologías activas',
      significado:
        'Estrategias de enseñanza que promueven la participación activa del estudiante en la construcción de su conocimiento.',
    },
    {
      termino: 'Recursos didácticos',
      significado:
        'Materiales y estrategias utilizados por los docentes para facilitar el aprendizaje y mejorar la comprensión de los contenidos.',
    },
    {
      termino: 'Resolución de problemas',
      significado:
        'Estrategia de enseñanza basada en la identificación, análisis y solución de situaciones problemáticas para desarrollar el pensamiento crítico.',
    },
    {
      termino: 'Simuladores educativos',
      significado:
        'Herramientas digitales que recrean situaciones reales o hipotéticas para facilitar el aprendizaje a través de la experimentación.',
    },
    {
      termino: 'Tecnología educativa',
      significado:
        'Conjunto de herramientas y recursos tecnológicos utilizados para mejorar los procesos de enseñanza y aprendizaje.',
    },
    {
      termino: 'Virtualidad educativa',
      significado:
        'Modalidad de enseñanza que utiliza plataformas y recursos digitales para ofrecer experiencias de aprendizaje en línea.',
    },
    {
      termino: 'Visualización matemática',
      significado:
        'Estrategia que utiliza representaciones gráficas y modelos visuales para facilitar la comprensión de conceptos matemáticos abstractos.',
    },
  ],
}
