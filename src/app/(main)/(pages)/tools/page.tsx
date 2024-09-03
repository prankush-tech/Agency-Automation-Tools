import { AllTools } from '@/lib/constants';
import React from 'react';
import ToolsCard from './_components/ToolsCard';
import { currentUser } from '@clerk/nextjs';
import { onDiscordConnect } from './_actions/discordConnection';
import { onNotionConnect } from './_actions/notionConnections';
import { onSlackConnect } from './_actions/slackconnection';
import { getUserData } from './_actions/getUser';

type Props = {
	searchParams?: { [key: string]: string | undefined }
  }
const Category =  async (props: Props) => {

	const {
		webhook_id,
		webhook_name,
		webhook_url,
		guild_id,
		guild_name,
		channel_id,
		access_token,
		workspace_name,
		workspace_icon,
		workspace_id,
		database_id,
		app_id,
		authed_user_id,
		authed_user_token,
		slack_access_token,
		bot_user_id,
		team_id,
		team_name,
	  } = props.searchParams ?? {
		webhook_id: '',
		webhook_name: '',
		webhook_url: '',
		guild_id: '',
		guild_name: '',
		channel_id: '',
		access_token: '',
		workspace_name: '',
		workspace_icon: '',
		workspace_id: '',
		database_id: '',
		app_id: '',
		authed_user_id: '',
		authed_user_token: '',
		slack_access_token: '',
		bot_user_id: '',
		team_id: '',
		team_name: '',
	  }

	  const user = await currentUser()
	  if (!user) return null

	  const onUserConnections = async () => {

		await onDiscordConnect(
		  channel_id!,
		  webhook_id!,
		  webhook_name!,
		  webhook_url!,
		  user.id,
		  guild_name!,
		  guild_id!
		)
		await onNotionConnect(
		  access_token!,
		  workspace_id!,
		  workspace_icon!,
		  workspace_name!,
		  database_id!,
		  user.id
		)
	
		await onSlackConnect(
		  app_id!,
		  authed_user_id!,
		  authed_user_token!,
		  slack_access_token!,
		  bot_user_id!,
		  team_id!,
		  team_name!,
		  user.id
		)
	
		const connections: any = {}
	
		const user_info = await getUserData(user.id)
	
		//get user info with all connections
		user_info?.connections.map((connection) => {
		  connections[connection.type] = true
		  return (connections[connection.type] = true)
		})
	
		// Google Drive connection will always be true
		// as it is given access during the login process
		return { ...connections, 'Google Drive': true }

	}
	const connections = await onUserConnections()
	
	return (
		<div className="felx felx-col gap-4 ">
			<h1 className="text-xl lg:text-2xl sticky top-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center border-t border-x-2 font-bold rounded-t-2xl border-b">
				<span>Tools connected</span>
			</h1>
			<div className="relative flex flex-col gap-4">
				<section className="flex flex-col gap-4  p-3 md:p-6 text-muted-foreground text-xs md:text-lg">
					Connect all your apps directly from here. You may need to connect these apps regularly to refresh
					verification.
					{AllTools.map((eachTool, index) => (
						<ToolsCard
							key={index}
							icon={eachTool.image}
							description={eachTool.description}
							title={eachTool.title}
							type={eachTool.title}
							connected={connections}
						/>
					))}
				</section>
			</div>
		</div>
	);
};

export default Category;
