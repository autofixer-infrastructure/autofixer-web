interface SchemaProps {
  schema: Record<string, unknown>
}

export function SchemaMarkup({ schema }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
