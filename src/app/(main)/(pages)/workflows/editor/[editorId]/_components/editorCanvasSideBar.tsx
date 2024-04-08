'use client'
import { EditorCanvasTypes, EditorNodeType } from '@/lib/types'
import { useEditor } from '@/providers/editor-providers'
import { useNodeConnections } from '@/providers/toolProviders'
import React, { useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from "@/components/ui/separator"
import { AllTools, EditorCanvasDefaultCardTypes } from '@/lib/constants'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
import EditorCanvasIconHelper from './editor-canvas-card-icon-helper'
import { fetchBotSlackChannels, onConnections, onDragStart } from '@/lib/editor-utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import RenderToolsAccordion from './render-accordion'
import RenderOutputAccordion from './render-outputAccordion'
import { useZency } from '@/store/zencyStore'


type Props = {
    nodes: EditorNodeType[]
}

const EditorCanvasSidebar = ({nodes}: Props) => {

    const { state } = useEditor()
    const { nodeConnection } = useNodeConnections()
    const { googleFile, setSlackChannels } = useZency()

    useEffect(() => {
      if (state) {
        onConnections(nodeConnection, state, googleFile)
      }
    }, [state])
  
    useEffect(() => {
      if (nodeConnection.slackNode.slackAccessToken) {
        fetchBotSlackChannels(
          nodeConnection.slackNode.slackAccessToken,
          setSlackChannels
        )
      }
    }, [nodeConnection])


  return (
    <aside>

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

        <TabsContent
          value="settings"
          className="-mt-6"
          >
          <div className="px-2 py-4 text-center text-xl font-bold">
            {state.editor.selectedNode.data.title}
          </div>


          <Accordion type="multiple">
            <AccordionItem
              value="Options"
              className="border-y-[1px] px-2"
              >
              <AccordionTrigger className="!no-underline">
                Account
              </AccordionTrigger>
              <AccordionContent>
                {AllTools.map((connection) => (
                  <RenderToolsAccordion
                  key={connection.title}
                  state={state}
                  connection={connection}
                  />
                  ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="Expected Output"
              className="px-2"
              >
              <AccordionTrigger className="!no-underline">
                Action
              </AccordionTrigger>
              <RenderOutputAccordion
                state={state}
                nodeConnection={nodeConnection}
              />
            </AccordionItem>
          </Accordion>
          </TabsContent>
        </Tabs> 
      </aside>
  )
}

export default EditorCanvasSidebar