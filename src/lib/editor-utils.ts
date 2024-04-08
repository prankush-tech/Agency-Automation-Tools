import { ToolsType } from "@/providers/toolProviders"
import { EditorCanvasCardType } from "./types"
import { EditorState } from "@/providers/editor-providers"
import { Option } from "@/store/zencyStore"
import { getSlackConnection, listBotChannels } from "@/app/(main)/(pages)/tools/_actions/slackconnection"
import { getDiscordConnectionUrl } from "@/app/(main)/(pages)/tools/_actions/discordConnection"
import { getNotionConnection, getNotionDatabase } from "@/app/(main)/(pages)/tools/_actions/notionConnections"


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



  export const fetchBotSlackChannels = async (
    token: string,
    setSlackChannels: (slackChannels: Option[]) => void
  ) => {
    await listBotChannels(token)?.then((channels) => setSlackChannels(channels))
  }
  



  export const onConnections = async (
    nodeConnection: ToolsType,
    editorState: EditorState,
    googleFile: any
  ) => {
    if (editorState.editor.selectedNode.data.title == 'Discord') {
      const connection = await getDiscordConnectionUrl()
      if (connection) {
        nodeConnection.setDiscordNode({
          webhookURL: connection.url,
          content: '',
          webhookName: connection.name,
          guildName: connection.guildName,
        })
      }
    }
    if (editorState.editor.selectedNode.data.title == 'Notion') {
      const connection = await getNotionConnection()
      if (connection) {
        nodeConnection.setNotionNode({
          accessToken: connection.accessToken,
          databaseId: connection.databaseId,
          workspaceName: connection.workspaceName,
          content: {
            name: googleFile.name,
            kind: googleFile.kind,
            type: googleFile.mimeType,
          },
        })
  
        if (nodeConnection.notionNode.databaseId !== '') {
          const response = await getNotionDatabase(
            nodeConnection.notionNode.databaseId,
            nodeConnection.notionNode.accessToken
          )
        }
      }
    }
    if (editorState.editor.selectedNode.data.title == 'Slack') {
      const connection = await getSlackConnection()
      if (connection) {
        nodeConnection.setSlackNode({
          appId: connection.appId,
          authedUserId: connection.authedUserId,
          authedUserToken: connection.authedUserToken,
          slackAccessToken: connection.slackAccessToken,
          botUserId: connection.botUserId,
          teamId: connection.teamId,
          teamName: connection.teamName,
          userId: connection.userId,
          content: '',
        })
      }
    }
  }