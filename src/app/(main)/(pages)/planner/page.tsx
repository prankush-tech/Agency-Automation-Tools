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

// Typing the dynamic import explicitly
const Excalidraw: React.ComponentType<any> = dynamic(() => import('@excalidraw/excalidraw').then(mod => mod.Excalidraw), { ssr: false });

const ExcalidrawPage = (props: Props) => {
  const plannerTheme = useplannerTheme((state: any) => state.plannerTheme);

  return (
    <div className="flex justify-center h-[85%] items-center">
      {/* <Excalidraw theme={plannerTheme} UIOptions={UIOptions}>
        <WelcomeScreen>
          <WelcomeScreen.Hints.ToolbarHint>
            <p>ToolBar Hints</p>
          </WelcomeScreen.Hints.ToolbarHint>
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.HelpHint />
        </WelcomeScreen>
      </Excalidraw> */}
    </div>
  );
};

export default ExcalidrawPage;
