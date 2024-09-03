import React from 'react';
import { Tools } from '@/lib/types';
import { EditorState } from '@/providers/editor-providers';
import { useNodeConnections } from '@/providers/toolProviders';
import { useZency } from '@/store/zencyStore';
import { AccordionContent } from '@/components/ui/accordion';
import ToolsCard from '@/app/(main)/(pages)/tools/_components/ToolsCard';
import MultipleSelector from '@/components/ui/multipleSelector';

type Props = {};

const RenderToolsAccordion = ({ connection, state }: { connection: Tools; state: EditorState }) => {
	const { title, image, description, connectionKey, accessTokenKey, alwaysTrue, slackSpecial } = connection;

	const { nodeConnection } = useNodeConnections();
	const { slackChannels, selectedSlackChannels, setSelectedSlackChannels } = useZency();

	const connectionData = (nodeConnection as any)[connectionKey];

	const isConnected =
		alwaysTrue || (nodeConnection[connectionKey] && accessTokenKey && connectionData[accessTokenKey!]);

	return (
    <AccordionContent key={title}>
      {state.editor.selectedNode.data.title === title && (
        <>
          <ToolsCard
            title={title}
            icon={image}
            description={description}
            type={title}
            connected={{ [title]: isConnected }}
          />
          {slackSpecial && isConnected && (
            <div className="p-6">
              {slackChannels?.length ? (
                <>
                  <div className="mb-4 ml-1">
                    Select the slack channels to send notification and messages:
                  </div>
                  <MultipleSelector
                    value={selectedSlackChannels}
                    onChange={setSelectedSlackChannels}
                    defaultOptions={slackChannels}
                    placeholder="Select channels"
                    emptyIndicator={
                      <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                        no results found.
                      </p>
                    }
                  />
                </>
              ) : (
                'No Slack channels found. Please add your Slack bot to your Slack channel'
              )}
            </div>
          )}
        </>
      )}
    </AccordionContent>
  )
};

export default RenderToolsAccordion;
