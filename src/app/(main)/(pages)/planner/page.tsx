'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { WelcomeScreen } from '@excalidraw/excalidraw';
import { useplannerTheme } from '@/store/plannerStore';

type Props = {};

const UIOptions = {
	canvasActions: {
		changeViewBackgroundColor: false
	}
};

const Excalidraw = dynamic(
	async () => {
		const excalidraw = await import('@excalidraw/excalidraw');
		return excalidraw.Excalidraw;
	},
	{
		ssr: false
	}
);

const ExcalidrawPage = (props: Props) => {
	const plannerTheme = useplannerTheme((state: any) => state.plannerTheme);

	return (
		<div className="flex justify-center h-[85%] items center">
			<Excalidraw theme={plannerTheme} UIOptions={UIOptions}>
				<WelcomeScreen>
					<WelcomeScreen.Hints.ToolbarHint>
						<p> ToolBar Hints </p>
					</WelcomeScreen.Hints.ToolbarHint>
					<WelcomeScreen.Hints.MenuHint />
					<WelcomeScreen.Hints.HelpHint />
				</WelcomeScreen>
			</Excalidraw>
		</div>
	);
};

export default ExcalidrawPage;
