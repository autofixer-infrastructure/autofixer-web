export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto tarda el servicio a domicilio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La mayoría de los servicios se completan entre 45 minutos y 2 horas dependiendo de la complejidad. El diagnóstico inicial toma aproximadamente 20-30 minutos. En casos simples como una carga de gas, el trabajo puede estar listo en 1 hora.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta el diagnóstico a domicilio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El diagnóstico tiene un costo referencial de $15.000 a $25.000 dependiendo del tipo de vehículo. Sin embargo, si contratas el servicio con nosotros, el diagnóstico es GRATIS. No cobramos por ir hasta tu ubicación.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué métodos de pago aceptan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aceptamos efectivo, transferencia bancaria y pagos con tarjeta de crédito/débito. El pago se realiza una vez aprobado el presupuesto y finalizado el servicio a satisfacción.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La garantía de 90 días cubre todo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La garantía de 90 días cubre mano de obra y sellado de fugas. Los repuestos tienen garantía del fabricante (generalmente 6 meses a 1 año según el repuesto). Si la misma falla se repite dentro del período de garantía, retornamos sin costo adicional.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo sé si mi auto necesita gas o tiene una fuga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las señales más comunes son: el aire sale tibio en vez de frío, el compresor se enciende y apaga constantemente, hay olor extraño cuando enciendes el A/C, o escuchas ruido inusual del compresor. Lo mejor es agendar un diagnóstico para saber con certeza.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Atienden vehículos de todas las marcas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, trabajamos con todas las marcas y modelos de vehículos: Chevrolet, Toyota, Hyundai, Kia, Nissan, Ford, Volkswagen, BMW, Mercedes-Benz, y cualquier otra marca que circule en Chile.',
      },
    },
  ],
}

export function FAQSchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
