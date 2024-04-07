import { ToolsType } from "@/providers/toolProviders"
import { EditorCanvasCardType } from "./types"


export const onDragStart = (
    event: any,
    nodeType: EditorCanvasCardType['type']
  ) => {
    event.dataTransfer.setData('application/reactflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }
  export const onSlackContent = (
    nodeConnection: ToolsType,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    nodeConnection.setSlackNode((prev: any) => ({
      ...prev,
      content: event.target.value,
    }))
  }
  
  export const onDiscordContent = (
    nodeConnection: ToolsType,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    nodeConnection.setDiscordNode((prev: any) => ({
      ...prev,
      content: event.target.value,
    }))
  }

  export const onNotionContent = (
    nodeConnection: ToolsType,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    nodeConnection.setNotionNode((prev: any) => ({
      ...prev,
      content: event.target.value,
    }))
  }

  export const onContentChange = (
    nodeConnection: ToolsType,
    nodeType: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (nodeType === 'Slack') {
      onSlackContent(nodeConnection, event)
    } else if (nodeType === 'Discord') {
      onDiscordContent(nodeConnection, event)
    } else if (nodeType === 'Notion') {
      onNotionContent(nodeConnection, event)
    }
  }  


  export const onAddTemplate = (
    nodeConnection: ToolsType,
    title: string,
    template: string
  ) => {
    if (title === 'Slack') {
      onAddTemplateSlack(nodeConnection, template)
    } else if (title === 'Discord') {
      onAddTemplateDiscord(nodeConnection, template)
    }
  }


  export const onAddTemplateSlack = (
    nodeConnection: ToolsType,
    template: string
  ) => {
    nodeConnection.setSlackNode((prev: any) => ({
      ...prev,
      content: `${prev.content} ${template}`,
    }))
  }
  
  export const onAddTemplateDiscord = (
    nodeConnection: ToolsType,
    template: string
  ) => {
    nodeConnection.setDiscordNode((prev: any) => ({
      ...prev,
      content: `${prev.content} ${template}`,
    }))
  }