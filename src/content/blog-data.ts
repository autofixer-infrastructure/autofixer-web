// Centralized blog post data. Used by both /blog page and each /blog/<slug> page.
// Each page.tsx imports POSTS to render metadata + content, ensuring DRY.

export type BlogPost = {
  slug: string;
  title: string;
  description: string; // meta description 150-160 chars
  seoTitle?: string; // CTR-optimized title (50-60 chars) for SEO meta
  seoDescription?: string; // CTR-optimized description (140-160 chars) for SEO meta
  keywords: string;
  author: string;
  datePublished: string;
  h1: string;
  intro: string[];
  sections: Array<{
    id: string;
    h2: string;
    paragraphs: string[];
  }>;
  conclusion: string;
  ctaTitle: string;
  ctaText: string;
};

export const POSTS: BlogPost[] = [
  // ─── POST 1 ──────────────────────────────────────────────────────
  {
    slug: "5-errores-comunes-aire-acondicionado-auto",
    title: "5 Errores Comunes del Aire Acondicionado de Auto y Cómo Evitarlos",
    description:
      "Evita los 5 errores más comunes que cometen los conductores con el aire acondicionado de su auto. Aprende cómo prolongar la vida de tu A/C y ahorrar dinero con buenos hábitos.",
  seoTitle: "5 Errores del A/C Auto que lo Destruyen | Guia 2026",
  seoDescription: "Evita los 5 errores mas comunes que destruyen el aire acondicionado de tu auto. Tips de expertos Autofixer Santiago. Lectura 5 min. Cotiza gratis.",
    keywords:
      "errores aire acondicionado auto, malos hábitos A/C, mantenimiento preventivo aire acondicionado, filtro habitáculo",
    author: "Equipo Autofixer",
    datePublished: "2026-07-15",
    h1: "5 Errores Comunes del Aire Acondicionado de Auto y Cómo Evitarlos",
    intro: [
      "La mayoría de los problemas graves del aire acondicionado no nacen por un defecto del auto, sino por hábitos del conductor que pasan factura con los meses. En Autofixer, tras cientos de servicios a domicilio en Santiago, vemos los mismos cinco patrones una y otra vez.",
      "Lo bueno es que corregirlos no cuesta nada, sólo requiere información. En este artículo te mostramos los errores más comunes, por qué dañan tu sistema a largo plazo, y qué hacer en su lugar. Si tu A/C ya presenta alguno de estos síntomas, al final te dejamos el camino directo a un diagnóstico profesional.",
    ],
    sections: [
      {
        id: "error-invierno",
        h2: "1) No encender el A/C en invierno ni en modo deshielo",
        paragraphs: [
          "Muchos conductores apagan el A/C por completo en invierno creyendo que así cuidan el sistema. En realidad hacen lo contrario: el compresor y las mangueras se lubrican con cada uso, y al pasar meses inactivos las juntas se resecan y aparecen microfugas.",
          "Además, el A/C no sólo enfría: también deshumidifica. En modo deshielo es la forma más rápida de desempañar los vidrios en días fríos y húmedos. Si lo apagas, los vidrios se empañan más y pierdes visibilidad.",
          "Qué hacer: usa el A/C al menos una vez por semana durante 10–15 minutos, incluso en invierno. Actívalo en modo deshielo para aprovechar la deshumidificación y mantener lubricado el sistema. Tu A/C y tus vidrios te lo agradecerán.",
        ],
      },
      {
        id: "error-recargar",
        h2: "2) Recargar gas refrigerante sin antes revisar fugas",
        paragraphs: [
          "Si tu A/C dejó de enfriar y alguien te ofrece 'recargar gas' sin hacer un diagnóstico previo, no aceptes. Recargar un sistema con fuga es tirar el dinero: en pocas semanas el gas se habrá escapado y volverás al taller.",
          "Un servicio profesional siempre incluye: (1) test de fugas con detector electrónico o tinte UV, (2) vacío del sistema para eliminar humedad, (3) recarga con la cantidad exacta de gas según placa del fabricante, (4) verificación de presiones en alta y baja.",
          "Qué hacer: pide siempre un diagnóstico previo con informe. En Santiago, una inspección profesional con detector de fugas toma 20 minutos y puede ahorrarte una recarga perdida de $40.000 o más. Si quieres profundizar en qué cubre ese diagnóstico, revisa nuestra [[link:/problemas|guía de problemas comunes del A/C]].",
        ],
      },
      {
        id: "error-olores",
        h2: "3) Ignorar los malos olores hasta que empeoran",
        paragraphs: [
          "Un olor a humedad al encender el A/C parece inofensivo, pero es señal de bacterias y hongos creciendo en el evaporador. Si lo dejas pasar, en pocas semanas el olor se vuelve permanente y afecta la calidad del aire que respiras tú y tu familia.",
          "Respirar aire contaminado del A/C puede causar alergias, irritación de garganta y problemas respiratorios, especialmente en niños y personas asmáticas. La solución es una sanitización profunda con productos antibacteriales aplicados por nebulización dentro del habitáculo.",
          "Qué hacer: si notas olores extraños, no esperes. Una sanitización toma menos de 30 minutos y elimina el 99% de los microorganismos. Combínala con el cambio del filtro de habitáculo para un aire realmente limpio.",
        ],
      },
      {
        id: "error-ventanas",
        h2: "4) Usar el A/C con ventanas abiertas o en recirculación equivocada",
        paragraphs: [
          "Un error clásico: circular con las ventanas abiertas y el A/C encendido al máximo. El sistema trabaja forzado para mantener la temperatura contra una corriente de aire caliente que entra por las ventanas, el compresor sufre y el consumo de combustible sube hasta un 15%.",
          "En ciudad, usa recirculación: hace que el A/C enfríe más rápido y con menos esfuerzo. En carretera, usa aire exterior: evita que los vidrios se empañen y renueva el aire del habitáculo en trayectos largos.",
          "Qué hacer: regla simple — ventanas cerradas siempre con A/C encendido. Recirculación en ciudad (menos de 30 min continuos), aire exterior en carretera o cada 30 min para renovar aire. Tu A/C enfría mejor, gasta menos combustible y dura más.",
        ],
      },
      {
        id: "error-filtro",
        h2: "5) No cambiar el filtro de habitáculo cada 15.000 km",
        paragraphs: [
          "El filtro de habitáculo (también llamado filtro de polen) es lo que limpia el aire que entra al vehículo. Se satura de polvo, polen y contaminantes cada 10.000–15.000 km. Es el repuesto más barato y el más olvidado.",
          "Un filtro saturado reduce el flujo de aire del A/C, hace que el sistema trabaje forzado, y recircula polvo y alérgenos en vez de filtrarlos. En ciudades con alta contaminación como Santiago, el impacto es aún mayor.",
          "Qué hacer: cambia el filtro de habitáculo cada 15.000 km o una vez al año, lo que llegue primero. Es un repuesto de bajo costo ($8.000 a $15.000) y puedes pedir el cambio junto a tu servicio de A/C. Si quieres revisar qué cubre un servicio completo, revisa nuestra [[link:/problemas|guía de problemas comunes]].",
        ],
      },
    ],
    conclusion:
      "Evitar estos cinco errores no cuesta nada y prolonga la vida útil de tu sistema de aire acondicionado por años. Buenos hábitos + mantenimiento preventivo regular = menos visitas al taller y más ahorro. Si tu A/C ya presenta síntomas como aire tibio, ruidos o malos olores, no esperes a que se vuelva una falla mayor. [[link:/cotizar|Cotiza un diagnóstico profesional]] a domicilio y recibe un informe claro. Servicio en Santiago con respuesta en menos de 2 horas.",
    ctaTitle: "¿Tu A/C ya presenta alguno de estos síntomas?",
    ctaText:
      "Pide un diagnóstico profesional a domicilio. En menos de 2 horas un técnico certificado evalúa tu sistema y te entrega un presupuesto cerrado, sin sorpresas.",
  },
  // ─── POST 2 ──────────────────────────────────────────────────────
  {
    slug: "cada-cuanto-servicio-ac-auto",
    title: "¿Cada Cuánto Hacerle Servicio al Aire Acondicionado del Auto?",
    description:
      "Frecuencia recomendada de mantenimiento del A/C automotriz: recarga, sanitización, cambio de filtro. Calendario por kilometraje y por uso. Consejos de técnicos certificados.",
  seoTitle: "Cada Cuanto Hacerle Servicio al A/C del Auto | Guia 2026",
  seoDescription: "Frecuencia ideal de mantenimiento del aire acondicionado automotriz: recarga, sanitizacion, cambio de filtro. Calendario por uso. Autofixer Santiago.",
    keywords:
      "mantenimiento aire acondicionado auto, cada cuanto servicio A/C, filtro habitáculo, sanitización A/C, frecuencia mantenimiento automotriz",
    author: "Equipo Autofixer",
    datePublished: "2026-07-18",
    h1: "¿Cada Cuánto Hacerle Servicio al Aire Acondicionado del Auto?",
    intro: [
      "Una de las preguntas más frecuentes que recibimos: ¿cada cuánto hay que hacerle service al aire acondicionado del auto? La respuesta corta: depende del uso, pero hay un calendario base que aplica al 90% de los conductores en Santiago.",
      "En este artículo te explicamos las frecuencias recomendadas para cada tipo de servicio: recarga de gas, sanitización, cambio de filtro, revisión general. Si sigues este calendario, tu A/C te durará muchos años sin sorpresas.",
    ],
    sections: [
      {
        id: "calendario-anual",
        h2: "Calendario de mantenimiento del A/C por kilometraje",
        paragraphs: [
          "El A/C automotriz tiene 4 mantenimientos principales con frecuencias distintas. Aquí va el calendario que aplicamos en Autofixer para clientes que hacen uso normal del vehículo en Santiago (10.000–20.000 km/año):",
          "1) Revisión general: cada 12 meses o 15.000 km. Incluye inspección de compresor, mangueras, condensador y verificación de presiones. Es rápida (20 minutos) y la hacemos en cada visita técnica.",
          "2) Cambio de filtro de habitáculo: cada 12 meses o 15.000 km. Si conduces经常 en zonas con alta contaminación o mucho polvo, cámbialo cada 10.000 km.",
          "3) Sanitización del sistema: cada 12 a 18 meses, o antes si notas olores. Es clave para evitar bacterias y hongos en el evaporador.",
          "4) Recarga de gas refrigerante: solo cuando se necesite, normalmente cada 3 a 5 años. No es un mantenimiento programado, sino correctivo.",
        ],
      },
      {
        id: "uso-pesado",
        h2: "Si usas el A/C a diario o conduces mucho en ciudad",
        paragraphs: [
          "Los conductores que usan el A/C a diario en el tráfico de Santiago (2+ horas diarias) deben acortar los intervalos. El sistema trabaja más, el filtro se satura antes y la probabilidad de olores aumenta.",
          "En estos casos, el calendario recomendado es: revisión cada 6 meses, cambio de filtro cada 10.000 km, sanitización cada 12 meses sin falta, y recarga solo cuando se necesite (que puede ser cada 2–3 años en lugar de cada 5).",
          "La señal más clara de que necesitas servicio antes de tiempo: el A/C tarda más de 3 minutos en enfriar el habitáculo, aparece olor a humedad, o notas que el aire no sale tan frío como antes.",
        ],
      },
      {
        id: "uso-ocasional",
        h2: "Si usas el auto solo los fines de semana o para trayectos cortos",
        paragraphs: [
          "Si tu auto es de uso ocasional (fines de semana, trayectos cortos), el A/C sufre un problema diferente: la inactividad. Mangueras y juntas se resecan, y los primeros 5 minutos de uso suelen ser los más exigentes para el compresor.",
          "Recomendación: enciende el A/C al menos 10 minutos una vez por semana, incluso en invierno, para mantener lubricado el sistema. El resto del mantenimiento sigue el calendario estándar (anual).",
          "Si tu auto pasa semanas sin uso, considera arrancar el motor 5 minutos cada semana y encender el A/C durante ese tiempo. Es más importante que cambiar el aceite.",
        ],
      },
      {
        id: "senales-cuando",
        h2: "Señales claras de que necesitas service antes de tiempo",
        paragraphs: [
          "Estas 5 señales indican que tu A/C necesita atención inmediata, sin importar el calendario:",
          "1) Aire sale tibio en lugar de frío: falta de gas, problema en el compresor o en el condensador. Requiere diagnóstico.",
          "2) Olor a humedad o rancio: bacterias en el evaporador. Solución: sanitización + cambio de filtro.",
          "3) Ruidos al encender el A/C: clic, zumbido o traqueteo. Puede ser embrague del compresor, correa o un objeto extraño.",
          "4) A/C tarda más de 3 minutos en enfriar: pérdida gradual de gas o bajo rendimiento del compresor.",
          "5) Ventanas se empañan con el A/C encendido: problema en el sistema de deshumidificación, generalmente el filtro está saturado.",
        ],
      },
    ],
    conclusion:
      "El mantenimiento del A/C no es complicado ni caro si sigues un calendario regular. Revisión anual, cambio de filtro anual, sanitización cada 12–18 meses, y recarga solo cuando se necesite. Si tu A/C presenta alguna de las señales de alerta, no esperes al próximo service. [[link:/cotizar|Cotiza un diagnóstico a domicilio]] y recibe un informe claro en menos de 2 horas. Servicio en toda Santiago con técnicos certificados.",
    ctaTitle: "¿Hace más de un año que no le haces service al A/C?",
    ctaText:
      "Pide tu revisión anual a domicilio. Un técnico certificado evalúa el estado de tu sistema y te entrega un presupuesto claro para los próximos 12 meses.",
  },
  // ─── POST 3 ──────────────────────────────────────────────────────
  {
    slug: "por-que-tu-aire-acondicionado-no-enfria",
    title: "Por Qué Tu Aire Acondicionado No Enfría: 5 Pruebas Caseras Antes de Llamar al Técnico",
    description:
      "5 pruebas caseras en 5 minutos para diagnosticar por qué tu A/C no enfría. Sin herramientas especiales. Cuándo sí necesitas un técnico profesional a domicilio.",
  seoTitle: "Por que tu Aire Acondicionado no Enfria | 5 Pruebas | 2026",
  seoDescription: "5 pruebas caseras en 5 minutos para saber por que tu A/C no enfria. Sin herramientas. Cuando llamar al tecnico. Autofixer Santiago.",
    keywords:
      "A/C no enfría, aire acondicionado auto no funciona, pruebas A/C auto, diagnóstico casero aire acondicionado",
    author: "Equipo Autofixer",
    datePublished: "2026-07-20",
    h1: "Por Qué Tu Aire Acondicionado No Enfría: 5 Pruebas Caseras Antes de Llamar al Técnico",
    intro: [
      "Tu A/C no enfría y la primera reacción es pensar en una falla cara. Antes de asumir lo peor, hay 5 pruebas caseras que puedes hacer en 5 minutos para tener una idea de qué pasa. Algunas las puedes resolver tú mismo; otras te indicarán claramente cuándo necesitas un técnico.",
      "En este artículo te guiamos paso a paso. Al final sabrás si es algo simple (filtro, recirculación, gas) o algo que requiere atención profesional. Si las pruebas confirman una falla, te dejamos el camino directo a un diagnóstico a domicilio.",
    ],
    sections: [
      {
        id: "prueba-termometro",
        h2: "1) Mide la temperatura del aire con un termómetro (regla de los 10°C)",
        paragraphs: [
          "Esta es la prueba más objetiva. Enciende el A/C al máximo, recirculación activada, y coloca un termómetro de ambiente en la salida de aire central (la rejilla del medio del tablero). Espera 5 minutos a que se estabilice.",
          "La regla de los 10°C: si afuera hay 30°C, en la rejilla deberías medir entre 4°C y 8°C. Si el aire sale a 15°C o más, hay un problema (falta de gas, compresor débil, condensador tapado).",
          "Si no tienes termómetro, una prueba táctil funciona: el aire debe sentirse frío al punto de ser casi incómodo de mantener la mano en la rejilla por más de 10 segundos. Si puedes mantener la mano sin problema, no está enfriando bien.",
        ],
      },
      {
        id: "prueba-compresor",
        h2: "2) Escucha el compresor: ¿hace clic al encender el A/C?",
        paragraphs: [
          "El compresor es el corazón del A/C y emite un sonido característico al activarse. Con el motor encendido y el A/C apagado, sube la velocidad del motor a 1.500 rpm y enciende el A/C. Deberías escuchar un 'clic' metálico claro seguido de un zumbido continuo.",
          "Si no escuchas nada: el embrague del compresor puede estar fallando, o hay un problema eléctrico (relé, fusible, cableado).",
          "Si escuchas clic pero el aire sigue tibio: el compresor gira pero no comprime. Posible falta de gas o válvula de expansión trabada. Requiere técnico.",
          "Si escuchas un chillido agudo: la correa del A/C está gastada o mal tensada. Solución: cambio de correa.",
        ],
      },
      {
        id: "prueba-visual",
        h2: "3) Inspecciona visualmente las mangueras del compresor",
        paragraphs: [
          "Abre el capó y localiza el compresor (en la parte superior del motor, conectado por correas). Identifica las dos mangueras: una de alta presión (más delgada, sale del compresor) y otra de baja presión (más gruesa, entra al compresor).",
          "Con el motor y A/C encendidos, ambas mangueras deben estar frías o tibias. La de alta presión debe estar más caliente que la de baja. Si alguna está helada con escarcha visible, hay problema de flujo (filtro secador tapado o exceso de humedad).",
          "Revisa también las conexiones por si hay aceite o tinte UV visible: eso indica una fuga. Si ves manchas de aceite verdoso/amarillento en las uniones, hay una fuga activa que debe repararse antes de recargar gas.",
        ],
      },
      {
        id: "prueba-filtro",
        h2: "4) Revisa el filtro de habitáculo: ¿está tapado?",
        paragraphs: [
          "El filtro de habitáculo está generalmente detrás de la guantera o debajo del capó del lado del acompañante. Si no lo has cambiado en más de un año o 15.000 km, probablemente está saturado.",
          "Un filtro tapado reduce drásticamente el flujo de aire. El A/C no enfría menos, simplemente no circula suficiente aire frío al habitáculo. Solución: cambiar el filtro (es de bajo costo y toma 5 minutos).",
          "Mientras lo revisas, fíjate si hay hojas, polvo o insectos. Si está muy sucio, cámbialo. Aprovecha para revisar la condición general del habitáculo y la presencia de olores.",
        ],
      },
      {
        id: "prueba-recirculacion",
        h2: "5) Prueba el A/C en diferentes velocidades del ventilador",
        paragraphs: [
          "Con el A/C encendido, prueba las 4 velocidades del ventilador (1, 2, 3, 4). En velocidad 1 y 2 el aire debe ser notablemente más frío que en velocidad 3 y 4 (porque a más velocidad, más aire caliente entra al evaporador).",
          "Si en velocidad baja el aire es tibio y en alta es casi frío, el problema puede ser de recirculación: el sistema está tomando aire exterior caliente en vez de recircular el frío del habitáculo.",
          "Otra prueba útil: con el auto al sol, enciende el A/C en recirculación, velocidad máxima, y ventanas cerradas por 3 minutos. Si en ese tiempo el aire no se enfría, hay una falla que requiere diagnóstico profesional.",
        ],
      },
    ],
    conclusion:
      "Estas 5 pruebas caseras te dan una idea clara de qué pasa con tu A/C en 5 minutos. Si el filtro está sucio, cámbialo. Si la correa chilla, al taller. Pero si las pruebas apuntan a falta de gas, compresor o cualquier otra falla interna, el siguiente paso es un diagnóstico profesional. [[link:/cotizar|Pide un diagnóstico a domicilio]] y un técnico certificado evalúa tu sistema con equipo profesional en menos de 2 horas. Servicio en toda Santiago.",
    ctaTitle: "¿Las pruebas confirman una falla?",
    ctaText:
      "Un técnico certificado a domicilio revisa tu A/C con equipo profesional: detector de fugas, manómetros, vacío del sistema. Diagnóstico claro en 20 minutos.",
  },
  // ─── POST 4 ──────────────────────────────────────────────────────
  {
    slug: "r134a-vs-r1234yf-gases-refrigerantes",
    title: "R134a vs R1234yf: Qué Gas Usa Tu Auto y Por Qué Importa",
    description:
      "Diferencias entre R134a y R1234yf, los dos gases refrigerantes del A/C automotriz. Cuál usa tu auto, costos, equipos necesarios. Guía para conductores en Chile.",
  seoTitle: "R134a vs R1234yf | Que Gas Usa Tu Auto | Guia 2026",
  seoDescription: "Diferencias entre R134a y R1234yf, los dos gases del A/C automotriz. Cual usa tu auto, cuanto cuesta la recarga y por que importa. Autofixer.",
    keywords:
      "R134a, R1234yf, gas refrigerante auto, diferencia gases A/C, carga gas aire acondicionado, gas automotriz Chile",
    author: "Equipo Autofixer",
    datePublished: "2026-07-22",
    h1: "R134a vs R1234yf: Qué Gas Usa Tu Auto y Por Qué Importa",
    intro: [
      "Si alguna vez te preguntaste por qué hay autos que usan un gas y otros otro, este artículo es para ti. R134a y R1234yf son los dos gases refrigerantes que usan los sistemas de aire acondicionado automotriz hoy, y mezclarlos puede dañar tu auto seriamente.",
      "Te explicamos las diferencias técnicas (sin entrar en química compleja), cómo saber qué gas usa tu vehículo, y por qué es crítico usar el correcto. Al final, una guía de precios actualizada a 2026.",
    ],
    sections: [
      {
        id: "que-es-r134a",
        h2: "¿Qué es el R134a y por qué se usó tanto?",
        paragraphs: [
          "El R134a (tetrafluoroetano) es el gas refrigerante que se usó en autos desde 1995 hasta aproximadamente 2017. Es eficiente, relativamente barato y fue el estándar mundial por más de 20 años.",
          "El problema: su potencial de calentamiento global (GWP) es 1.430, es decir, si se libera a la atmósfera, contribuye al efecto invernadero 1.430 veces más que el CO2. Esto llevó a regulaciones internacionales a migrar a un gas con menor impacto.",
          "En Chile, la mayoría de los autos entre 1995 y 2017 usan R134a. Si tu auto es de esa época, casi seguro usa este gas.",
        ],
      },
      {
        id: "que-es-r1234yf",
        h2: "¿Qué es el R1234yf y por qué se está usando ahora?",
        paragraphs: [
          "El R1234yf (tetrafluoropropeno) es el gas que reemplazó al R134a en autos nuevos. Su GWP es de apenas 4, es decir, 350 veces menos impacto ambiental que su antecesor. Por eso los fabricantes lo adoptaron masivamente desde 2018.",
          "Técnicamente, el R1234yf es ligeramente menos eficiente que el R134a (enfriá un poco menos por la misma cantidad), pero su bajo impacto ambiental compensó esa diferencia. Además, requiere equipo certificado para su manejo, lo que limita los talleres que pueden trabajar con él.",
          "En Chile, los autos 2018 en adelante pueden usar R1234yf, especialmente europeos (BMW, Mercedes, Audi, Volkswagen) y muchos asiáticos. Si tu auto es 2018 o posterior, revisa la etiqueta debajo del capó para confirmar.",
        ],
      },
      {
        id: "como-saber-gas",
        h2: "¿Cómo sé qué gas usa mi auto?",
        paragraphs: [
          "Tres formas rápidas de saberlo:",
          "1) Busca la etiqueta debajo del capó: todos los vehículos tienen una etiqueta blanca o amarilla en el compartimento del motor que dice 'R134a' o 'R1234yf'. Generalmente está en el lateral del capó, cerca del compresor o en la tapa del radiador.",
          "2) Revisa el manual del propietario: en la sección de 'Especificaciones técnicas' o 'Sistema de aire acondicionado' está claramente indicado.",
          "3) Año del vehículo como referencia: si es 2017 o anterior, casi seguro R134a. Si es 2018 o posterior, depende de la marca y modelo. Los europeos y la mayoría de asiáticos usan R1234yf.",
          "En Autofixer, antes de cualquier servicio verificamos directamente en tu vehículo qué gas usa. Nunca asumimos.",
        ],
      },
      {
        id: "puedo-mezclar",
        h2: "¿Puedo mezclar R134a y R1234yf?",
        paragraphs: [
          "No, nunca. Mezclar los dos gases provoca una reacción química que puede dañar el compresor, las mangueras y otros componentes del sistema. La reparación puede superar los $400.000.",
          "Además, los equipos de recarga son distintos: el R1234yf requiere un equipo certificado con conexión específica (más cara), mientras que el R134a usa el equipo tradicional que todos los talleres tienen.",
          "En Autofixer trabajamos con ambos gases y tenemos el equipo certificado para R1234yf. Antes de cualquier servicio, verificamos qué gas usa tu vehículo y te avisamos si encontramos una carga incorrecta.",
        ],
      },
      {
        id: "precios-santiago",
        h2: "Precios de carga de gas en Santiago 2026",
        paragraphs: [
          "Los precios varían según tipo de gas, cantidad requerida y vehículo. En Santiago, referencias actualizadas a julio 2026:",
          "R134a (autos 1995–2017): carga completa entre $35.000 y $55.000, dependiendo de la cantidad de gas (entre 500g y 900g según vehículo). El gas en sí es barato, la mano de obra y el equipo son el costo principal.",
          "R1234yf (autos 2018+): carga completa entre $65.000 y $110.000. Es más caro porque el gas es 3–4 veces más costoso por kilo, y muchos talleres no tienen el equipo certificado (Autofixer sí lo tiene).",
          "Considera que en ambos casos, antes de recargar siempre se debe hacer test de fugas y vacío del sistema. Un servicio 'barato' que omita estos pasos te costará más a mediano plazo.",
        ],
      },
    ],
    conclusion:
      "R134a y R1234yf son los dos gases refrigerantes automotrices actuales, cada uno con su época y propósito. Lo más importante es usar el que tu auto necesita. Si cargas el gas equivocado, puedes dañar el compresor y las mangueras, una reparación que puede superar los $400.000. En Autofixer trabajamos con ambos gases, equipo certificado y gas original. Si tienes dudas sobre cuál usa tu auto, lo verificamos antes de cualquier servicio. [[link:/cotizar|Cotiza tu recarga de gas]] y obtén precio exacto en minutos. Si tu A/C no enfría bien, revisa nuestra [[link:/problemas|guía de problemas comunes]].",
    ctaTitle: "¿No sabes qué gas usa tu auto?",
    ctaText:
      "Verificamos el gas correcto de tu vehículo y te damos cotización exacta. Servicio a domicilio en Santiago con equipo certificado para R134a y R1234yf.",
  },
  // ─── POST 5 (NUEVO) ──────────────────────────────────────────────
  {
    slug: "como-saber-si-mi-ac-necesita-recarga",
    title: "¿Cómo Saber si Mi A/C Necesita Recarga? 3 Pruebas Caseras",
    description:
      "Descubre en 3 pasos si tu auto necesita recarga de gas A/C. Pruebas caseras sin herramientas especiales. Cuándo ir al técnico y qué esperar del servicio.",
  seoTitle: "Como Saber si tu A/C Necesita Recarga | 3 Pruebas 2026",
  seoDescription: "Descubre en 3 pasos si tu A/C necesita recarga de gas. Pruebas caseras sin herramientas. Costo de la recarga en Santiago. Autofixer.",
    keywords:
      "A/C necesita recarga, cómo saber si falta gas, prueba aire acondicionado, recarga gas auto Santiago",
    author: "Equipo Autofixer",
    datePublished: "2026-07-24",
    h1: "¿Cómo Saber si Mi A/C Necesita Recarga? 3 Pruebas Caseras",
    intro: [
      "Si tu A/C no enfría como antes, lo primero que piensas es 'necesita recarga'. Pero no siempre es así: a veces el problema es otro y recargar gas sin诊断 es tirar el dinero. Antes de asumir, hay 3 pruebas caseras que te aclaran la situación en minutos.",
      "En este artículo te enseñamos esas pruebas, cómo interpretarlas y cuándo sí necesitas recarga. Al final, una guía de precios actualizada para Santiago 2026.",
    ],
    sections: [
      {
        id: "regla-termometro",
        h2: "1. La regla del termómetro: mide la diferencia de temperatura",
        paragraphs: [
          "Esta es la prueba más confiable y la que usan los técnicos para una primera evaluación. Necesitas un termómetro de ambiente (cualquiera sirve, incluso el del refrigerador).",
          "Procedimiento: con el auto al sol, enciende el A/C al máximo, recirculación, ventanas cerradas. Espera 5 minutos y mide la temperatura del aire en la rejilla central del tablero. La temperatura exterior también la mides con el mismo termómetro (o con la app del clima).",
          "Regla: la diferencia entre temperatura exterior y la del aire de la rejilla debe ser de al menos 10°C. Si afuera hay 30°C, en la rejilla deberías medir menos de 20°C (idealmente entre 4°C y 10°C). Si la diferencia es menor a 8°C, hay un problema: falta de gas, compresor débil o condensador tapado. Recarga probablemente.",
          "Si la diferencia es mayor a 10°C pero notas que tarda mucho en enfriar (más de 3 minutos), el sistema está bien de gas pero el rendimiento es bajo. La causa suele ser filtro de habitáculo saturado o recirculación mal configurada.",
        ],
      },
      {
        id: "visor-compresor",
        h2: "2. Revisa el visor de cristal líquido del compresor (si tu auto lo tiene)",
        paragraphs: [
          "Muchos autos modernos tienen un pequeño visor (mirilla) en la línea de alta presión del A/C, generalmente cerca del compresor. Es un círculo de cristal que te permite ver el estado del refrigerante sin necesidad de equipo.",
          "Con el A/C encendido y el motor a 1.500 rpm, observa el visor por 30 segundos:",
          "✓ Si ves líquido transparente burbujeando: el sistema tiene suficiente gas pero hay aire o humedad. Solución: vacío y recarga.",
          "✓ Si ves espuma blanca o burbujeo constante: hay humedad en el sistema o falta de gas. Requiere diagnóstico profesional.",
          "✓ Si ves líquido claro y limpio, sin burbujas: el sistema está en buen estado. Probablemente no necesita recarga.",
          "Si tu auto no tiene visor (muchos modelos no lo incluyen), sáltate esta prueba y pasa a la siguiente.",
        ],
      },
      {
        id: "test-tiempo",
        h2: "3. El test del tiempo: ¿cuánto tarda en enfriar el habitáculo?",
        paragraphs: [
          "Esta prueba es más subjetiva pero muy útil cuando no tienes termómetro. Con el auto al sol (o en un día caluroso), enciende el A/C al máximo, recirculación, ventanas cerradas, y cronometra cuánto tarda en sentirse realmente frío el aire de las rejillas.",
          "Tiempos normales: 1 a 2 minutos para sentir aire frío. 2 a 3 minutos para que el habitáculo se enfríe. Más de 3 minutos indica bajo rendimiento, generalmente por falta de gas o filtro saturado.",
          "Si tarda más de 5 minutos y la regla del termómetro muestra diferencia menor a 8°C, la recarga es casi segura. Pero antes de hacerla, asegúrate de que el técnico haga un test de fugas: recargar un sistema con fuga es perder el dinero en pocas semanas.",
        ],
      },
      {
        id: "cuando-tecnico",
        h2: "¿Cuándo ir directo al técnico?",
        paragraphs: [
          "Estas señales confirman que necesitas un técnico sin hacer más pruebas:",
          "1) Aire sale tibio o caliente con el A/C al máximo, y la regla del termómetro muestra diferencia menor a 5°C.",
          "2) El compresor no hace el clic característico al encender el A/C.",
          "3) Ves manchas de aceite o tinte UV en las mangueras bajo el capó (señal de fuga activa).",
          "4) Escuchas ruidos metálicos o chillidos al usar el A/C.",
          "En estos casos, no intentes recargar tú mismo ni en un 'recargador express' de gasolinera. Necesitas un diagnóstico profesional que incluya test de fugas, vacío del sistema, recarga con la cantidad exacta y verificación de presiones.",
          "En Autofixer el servicio a domicilio incluye todo eso, con informe claro y precio cerrado. Si quieres profundizar en qué cubre un diagnóstico profesional, revisa nuestra [[link:/problemas|guía de problemas comunes del A/C]].",
        ],
      },
    ],
    conclusion:
      "Estas 3 pruebas caseras te dicen en menos de 10 minutos si tu A/C necesita recarga o si el problema es otro. Si la respuesta es recarga, no vayas a un 'recargador express': necesitas un técnico que haga test de fugas y vacío del sistema antes, o perderás el dinero. [[link:/cotizar|Cotiza un servicio profesional a domicilio]] en Santiago y recibe un diagnóstico claro con precio cerrado en menos de 2 horas.",
    ctaTitle: "¿Las pruebas confirman que falta gas?",
    ctaText:
      "Servicio profesional a domicilio: test de fugas, vacío del sistema, recarga con equipo certificado. Precio cerrado por escrito en menos de 2 horas.",
  },
  // ─── POST 6 (NUEVO) ──────────────────────────────────────────────
  {
    slug: "cuanto-cuesta-cargar-gas-aire-acondicionado-auto-santiago",
    title: "¿Cuánto Cuesta Cargar Gas de Aire Acondicionado en Santiago? Guía 2026",
    description:
      "Precios de carga de gas A/C en Santiago 2026. R134a desde $35.000, R1234yf desde $90.000. Cotiza con precio cerrado a domicilio, sin sorpresas.",
  seoTitle: "Cuanto Cuesta Cargar Gas A/C Auto en Santiago | 2026",
  seoDescription: "Precios 2026 de carga de gas A/C en Santiago. R134a desde $35.000, R1234yf desde $90.000. Cotiza con Autofixer, garantia 90 dias.",
    keywords:
      "precio carga gas A/C Santiago, cuánto cuesta recargar aire acondicionado, precio R134a Chile, precio R1234yf, recarga gas a domicilio",
    author: "Equipo Autofixer",
    datePublished: "2026-07-25",
    h1: "¿Cuánto Cuesta Cargar Gas de Aire Acondicionado en Santiago? Guía 2026",
    intro: [
      "Una de las preguntas más comunes en Santiago: ¿cuánto cuesta cargar el gas del aire acondicionado del auto? La respuesta depende de varios factores, pero hay rangos claros que aplican al 90% de los vehículos. Te los damos sin rodeos.",
      "Esta guía está actualizada a julio 2026 e incluye precios de referencia para R134a y R1234yf, los dos gases que usan los autos hoy. También te explicamos qué incluye un servicio profesional y qué evitar.",
    ],
    sections: [
      {
        id: "tabla-precios",
        h2: "1. Tabla de precios por tipo de gas (R134a vs R1234yf)",
        paragraphs: [
          "Precios de referencia en Santiago, julio 2026, para servicio profesional a domicilio con equipo certificado:",
          "R134a (autos 1995–2017): carga completa desde $35.000 a $55.000 CLP. El rango depende de la cantidad de gas que requiera el vehículo (entre 500g y 900g según modelo) y si incluye o no test de fugas previo.",
          "R1234yf (autos 2018+): carga completa desde $90.000 a $140.000 CLP. Es más caro porque el gas cuesta 3 a 4 veces más por kilo y requiere equipo certificado (que pocos talleres tienen).",
          "Recarga parcial (entre 100g y 300g): desde $18.000 CLP para R134a y $45.000 CLP para R1234yf. Solo recomendada si el sistema perdió una cantidad menor y no hay fuga activa.",
          "Estos precios NO incluyen reparación de fugas. Si se detecta una, el costo adicional se cotiza aparte según gravedad y se presenta antes de proceder.",
        ],
      },
      {
        id: "factores-precio",
        h2: "2. Factores que suben o bajan el precio",
        paragraphs: [
          "Varios factores influyen en el precio final:",
          "Tipo de gas: R1234yf es más caro que R134a por costo del gas mismo y por el equipo certificado requerido.",
          "Cantidad de gas: cada vehículo tiene una cantidad específica según placa del fabricante. Autos más grandes (SUV, vans) requieren más gas que autos compactos.",
          "Comuna de atención: en Santiago atendemos toda la región metropolitana, pero comunas más lejanas (Melipilla, Talagante, Colina) pueden tener un recargo de desplazamiento de $5.000 a $15.000.",
          "Horario: servicios nocturnos, fines de semana o festivos pueden tener un recargo del 15% al 25%. Atención normal de lunes a sábado 9:00 a 19:00 sin recargo.",
          "Si el sistema tiene fuga: el test de fugas está incluido, pero la reparación de la fuga en sí es trabajo adicional cotizado aparte. Una fuga en una manguera puede costar $25.000 a $50.000; una en el evaporador puede superar los $200.000.",
        ],
      },
      {
        id: "incluye-diagnostico",
        h2: "3. ¿El precio incluye diagnóstico? ¿Y garantía?",
        paragraphs: [
          "En un servicio profesional, el precio de la recarga DEBE incluir varios elementos. Si te ofrecen 'carga de gas barata' sin estos, desconfía:",
          "✓ Test de fugas con detector electrónico o tinte UV: detecta microfugas antes de recargar. Sin esto, recargas un sistema con fuga y el gas se escapa en semanas.",
          "✓ Vacío del sistema: se hace una bomba de vacío por 20 a 30 minutos para eliminar humedad y aire. Sin vacío, el gas nuevo se mezcla con aire y baja su eficiencia.",
          "✓ Recarga con cantidad exacta: según placa del fabricante del vehículo. Ni más ni menos.",
          "✓ Verificación de presiones en alta y baja: con manómetros se confirma que el sistema trabaja correctamente.",
          "✓ Informe por escrito: qué se hizo, qué se encontró, y recomendaciones.",
          "En Autofixer, además, todo servicio incluye 90 días de garantía por escrito. Si el problema vuelve dentro de ese período, volvemos sin costo.",
        ],
      },
      {
        id: "taller-vs-domicilio",
        h2: "4. Comparativa: taller tradicional vs servicio a domicilio",
        paragraphs: [
          "Precios de referencia para carga de R134a en Santiago (julio 2026):",
          "Taller tradicional: $25.000 a $45.000 por la carga (muchos NO incluyen test de fugas ni vacío). Suma $5.000 a $15.000 si los pides aparte. Tu tiempo: dejar el auto 3 a 5 horas, o volver al otro día.",
          "Servicio a domicilio (Autofixer): $35.000 a $55.000 TODO incluido. Tu tiempo: 1 hora en tu casa u oficina, mientras sigues con tus cosas.",
          "La diferencia de precio se compensa con la conveniencia y la calidad: en Autofixer el servicio siempre incluye test de fugas, vacío, cantidad exacta, verificación de presiones, informe y garantía. En talleres tradicionales, muchas veces 'te ahorras' $10.000 pero no te hacen estos pasos, y el gas se escapa en semanas.",
          "Si tienes un día libre y quieres ahorrar, el taller tradicional es una opción válida, siempre que confirmes que hacen el proceso completo. Si valoras tu tiempo y quieres certeza, el servicio a domicilio vale la pena.",
        ],
      },
    ],
    conclusion:
      "Cargar gas A/C en Santiago cuesta entre $35.000 y $140.000 CLP en 2026, según tipo de gas y vehículo. El precio incluye test de fugas, vacío, recarga exacta, verificación de presiones y garantía. Evita 'recargas express' que omiten estos pasos: a mediano plazo te costarán más. [[link:/cotizar|Cotiza tu servicio a domicilio]] y recibe precio cerrado por escrito en menos de 2 horas. Si quieres saber cómo detectar si tu A/C necesita recarga, revisa nuestra [[link:/blog/como-saber-si-mi-ac-necesita-recarga|guía de 3 pruebas caseras]].",
    ctaTitle: "¿Necesitas cotización para cargar gas?",
    ctaText:
      "Cotiza online y recibe precio cerrado por escrito. Servicio a domicilio en Santiago con equipo certificado, garantía 90 días y respuesta en menos de 2 horas.",
  },
];
