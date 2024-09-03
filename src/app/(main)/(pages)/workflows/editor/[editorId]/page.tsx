import React from 'react'
import { useRouter } from 'next/navigation'
import EditorProvider from '@/providers/editor-providers'
import { ToolsProvider } from '@/providers/toolProviders'
import EditorCanvas from './_components/editorCanvas'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="h-full">
        <EditorProvider>
            <ToolsProvider>
              <EditorCanvas/>
            </ToolsProvider>
        </EditorProvider>
    </div>
  )
}

export default Page