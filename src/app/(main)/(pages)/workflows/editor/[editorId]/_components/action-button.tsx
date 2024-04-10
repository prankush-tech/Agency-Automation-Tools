import React, { useCallback } from 'react';
import { Option } from './content-basedOntitle';
import { ToolsType } from '@/providers/toolProviders';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { postContentToWebHook } from '@/app/(main)/(pages)/tools/_actions/discordConnection';
import { onCreateNodeTemplate } from '../../../_actions/workflowsConnection';
import { toast } from 'sonner';
import { onCreateNewPageInDatabase } from '@/app/(main)/(pages)/tools/_actions/notionConnections';
import { postMessageToSlack } from '@/app/(main)/(pages)/tools/_actions/slackconnection';


type Props = {
    currentService: string;
    nodeConnection: ToolsType;
    channels?: Option[];
    setChannels?: (value: Option[]) => void;
};

const ActionButton = ({ currentService, nodeConnection, channels, setChannels }: Props) => {
    
    const pathname = usePathname();
    console.log(nodeConnection)
    const onSendDiscordMessage = useCallback(async () => {
            const response = await postContentToWebHook(
              nodeConnection.discordNode.content,
              nodeConnection.discordNode.webhookURL
            )

            if (response.message == 'success') {
              nodeConnection.setDiscordNode((prev: any) => ({
                ...prev,
                content: '',
              }))
            }
          }, [nodeConnection.discordNode])

          const onStoreNotionContent = useCallback(async () => {

            const response = await onCreateNewPageInDatabase(
              nodeConnection.notionNode.databaseId,
              nodeConnection.notionNode.accessToken,
              nodeConnection.notionNode.content
            )

            
            if (response){
              nodeConnection.setNotionNode((prev: any) => ({
                ...prev,
                content: '',
              }))
              toast.success("Message Send")
            }
          }, [nodeConnection.notionNode])

          const onStoreSlackContent = useCallback(async () => {
            const response = await postMessageToSlack(
              nodeConnection.slackNode.slackAccessToken,
              channels!,
              nodeConnection.slackNode.content
            )
            if (response.message == 'Success') {
              toast.success('Message sent successfully')
              nodeConnection.setSlackNode((prev: any) => ({
                ...prev,
                content: '',
              }))
              setChannels!([])
            } else {
              toast.error(response.message)
            }
          }, [nodeConnection.slackNode, channels])

          const onCreateLocalNodeTempate = useCallback(async () => {


            

            if (currentService === 'Discord') {
              const response = await onCreateNodeTemplate(
                nodeConnection.discordNode.content,
                currentService,
                pathname.split('/').pop()!
              )

              if (response) {
                toast.message(response)
              }
            }
            if (currentService === 'Slack') {
              console.log(nodeConnection.slackNode.content)
              const response = await onCreateNodeTemplate(
                nodeConnection.slackNode.content,
                currentService,
                pathname.split('/').pop()!,
                channels,
                nodeConnection.slackNode.slackAccessToken
              )

              console.log(response)
              if (response) {
                toast.message(response)
              }
            }

            if (currentService === 'Notion') {
              const response = await onCreateNodeTemplate(
                JSON.stringify(nodeConnection.notionNode.content),
                currentService,
                pathname.split('/').pop()!,
                [],
                nodeConnection.notionNode.accessToken,
                nodeConnection.notionNode.databaseId
              )

              if (response) {
                toast.message(response)
              }
            }
          }, [nodeConnection, channels])

        const renderActionButton = () => {
            switch (currentService) {
              case 'Discord':
                return (
                  <>
                    <Button
                      variant="outline"
                      onClick={onSendDiscordMessage}
                    >
                      Test Message
                    </Button>
                    <Button
                      onClick={onCreateLocalNodeTempate}
                      variant="outline"
                    >
                      Save Template
                    </Button>
                  </>
                )

              case 'Notion':
                return (
                  <>
                    <Button
                      variant="outline"
                      onClick={onStoreNotionContent}
                    >
                      Test
                    </Button>
                    <Button
                      onClick={onCreateLocalNodeTempate}
                      variant="outline"
                    >
                      Save Template
                    </Button>
                  </>
                )

              case 'Slack':
                return (
                  <>
                    <Button
                      variant="outline"
                      onClick={onStoreSlackContent}
                    >
                      Send Message
                    </Button>
                    <Button
                      onClick={onCreateLocalNodeTempate}
                      variant="outline"
                    >
                      Save Template
                    </Button>
                  </>
                )

              default:
                return null
            }
          }

      return renderActionButton()
    return(
        <div className="">Action Button</div>
    )
};

export default ActionButton;
