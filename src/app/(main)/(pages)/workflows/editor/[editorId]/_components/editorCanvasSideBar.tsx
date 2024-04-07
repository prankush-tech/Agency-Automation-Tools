'use client'
import { EditorCanvasTypes, EditorNodeType } from '@/lib/types'
import { useEditor } from '@/providers/editor-providers'
import { useNodeConnections } from '@/providers/toolProviders'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from "@/components/ui/separator"
import { EditorCanvasDefaultCardTypes } from '@/lib/constants'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
import EditorCanvasIconHelper from './editor-canvas-card-icon-helper'
import { onDragStart } from '@/lib/editor-utils'



type Props = {
    nodes: EditorNodeType[]
}

const EditorCanvasSidebar = ({nodes}: Props) => {

    const { state } = useEditor()
    const { nodeConnection } = useNodeConnections()

  return (
    <Tabs
        defaultValue="actions"
        className="h-screen overflow-scroll pb-24"
      >
        <TabsList className="bg-transparent flex">
          <TabsTrigger className='border shadow-sm' value="actions">Actions</TabsTrigger>
          <TabsTrigger className='border shadow-sm' value="settings">Settings</TabsTrigger>
        </TabsList>
        <Separator />
        <TabsContent
          value="actions"
          className="flex flex-col gap-4 p-4"
        >
            {Object.entries(EditorCanvasDefaultCardTypes)
            .filter(
              ([_, cardType]) =>
                (!nodes.length && cardType.type === 'Trigger') ||
                (nodes.length && cardType.type === 'Action')
            )
            .map(([cardKey, cardValue]) => (
              <Card
                key={cardKey}
                draggable
                className="w-full cursor-grab border-black bg-[#e2f24b]"
                onDragStart={(event) =>
                    onDragStart(event, cardKey as EditorCanvasTypes)
                }
              >
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                  <EditorCanvasIconHelper  type={cardKey as EditorCanvasTypes} classString={"dark:invert"} />
                  <CardTitle className="text-sm text-neutral-900">
                    {cardKey}
                    <CardDescription className='test-xs text-neutral-900' >{cardValue.description}</CardDescription>
                  </CardTitle>
                </CardHeader> 
              </Card>
            ))}
        </TabsContent>
        </Tabs> 
  )
}

export default EditorCanvasSidebar