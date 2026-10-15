import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'

export function RichText({ data }: { data: SerializedEditorState }) {
  if (!data) return null

  return (
    <div className="prose-she">
      <PayloadRichText data={data} />
    </div>
  )
}
