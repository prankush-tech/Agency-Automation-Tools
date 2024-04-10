import { nodeMapper } from '@/lib/types';
import { EditorState } from '@/providers/editor-providers';
import { ToolsType } from '@/providers/toolProviders';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import axios from 'axios';
import { AccordionContent } from '@radix-ui/react-accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { onContentChange } from '@/lib/editor-utils';
import GoogleFileDetails from './googleFileDetails';
import GoogleDriveFiles from './googledriveFiles';
import ActionButton from './action-button';
import { getFileMetaData } from '@/app/(main)/(pages)/tools/_actions/googleConnections';

export interface Option {
	value: string;
	label: string;
	disable?: boolean;
	/** fixed option that can't be removed. */
	fixed?: boolean;
	/** Group the options by providing key. */
	[key: string]: string | boolean | undefined;
}

interface GroupIcon {
	[key: string]: Option[];
}

type Props = {
	nodeConnection: ToolsType;
	newState: EditorState;
	file: any;
	setFile: (file: any) => void;
	selectedSlackChannels: Option[];
	setSelectedSlackChannels: (value: Option[]) => void;
};

const ContentBasedOnTitle = ({
	nodeConnection,
	newState,
	file,
	setFile,
	selectedSlackChannels,
	setSelectedSlackChannels
}: Props) => {
	const { selectedNode } = newState.editor;
	const title = selectedNode.data.title;

	useEffect(() => {
	    const reqGoogle = async () => {
	      const response: { data: { message: { files: any } } } = await axios.get(
	        '/api/drive'
	      )
	      if (response) {
	        console.log(response.data.message.files[0])
	        toast.message("Fetched File")
	        setFile(response.data.message.files[0])
	      } else {
	        toast.error('Something went wrong')
	      }
	    }
	    reqGoogle()
	  }, [])



	const nodeConnectionType: any = nodeConnection[nodeMapper[title]];
	if (!nodeConnectionType) return <p>Not connected</p>;

	const isConnected =
		title === 'Google Drive'
			? !nodeConnection.isLoading
			: !!nodeConnectionType[
					`${title === 'Slack'
						? 'slackAccessToken'
						: title === 'Discord' ? 'webhookURL' : title === 'Notion' ? 'accessToken' : ''}`
				];

	if (!isConnected) return <p>Not connected</p>;

	return (
		<AccordionContent>
			<Card>
				{title === 'Discord' && (
					<CardHeader>
						<CardTitle>{nodeConnectionType.webhookName}</CardTitle>
						<CardDescription>{nodeConnectionType.guildName}</CardDescription>
					</CardHeader>
				)}
				<div className="flex flex-col gap-3 px-6 py-3 pb-20">
					<p>{title === 'Notion' ? 'Values to be stored' : 'Message'}</p>

					{title === 'Discord' || title === 'Slack' || title === 'Notion'? (
						<Input
							type="text"
							className="border h-[4rem]"
							placeholder="Send a message..."
							value={nodeConnectionType.content}
							onChange={(event) => onContentChange(nodeConnection, title, event)}
						/>
					) : null}

					{JSON.stringify(file) !== '{}' &&
					title !== 'Google Drive' && (
						<Card className="w-full">
							<CardContent className="px-2 py-3">
								<div className="flex flex-col gap-4">
									<CardDescription>Drive File</CardDescription>
									<div className="flex flex-wrap gap-2">
										<GoogleFileDetails nodeConnection={nodeConnection} title={title} gFile={file} />
									</div>
								</div>
							</CardContent>
						</Card>
					)}
					{title === 'Google Drive' && <GoogleDriveFiles />}
					<ActionButton
						currentService={title}
						nodeConnection={nodeConnection}
						channels={selectedSlackChannels}
						setChannels={setSelectedSlackChannels}
					/>
				</div>
			</Card>
		</AccordionContent>
	);
};

export default ContentBasedOnTitle;
