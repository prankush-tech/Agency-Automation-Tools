'use client';
import React from 'react';
import { useplannerTheme } from '@/store/plannerStore';
import { Excalidraw, WelcomeScreen, convertToExcalidrawElements } from "@excalidraw/excalidraw";
// import "@excalidraw/excalidraw/index.css";

//@ts-ignore
  console.info(convertToExcalidrawElements([{
    type: "rectangle",
    id: "rect-1",
    width: 186.47265625,
    height: 141.9765625,
  },]));

type Props={}

const UIOptions = {
  canvasActions: {
    changeViewBackgroundColor: false
  }
};



const ExcalidrawPage = (props: Props) => {
  const plannerTheme = useplannerTheme((state: any) => state.plannerTheme);

  return (
    <div className="flex justify-center h-[85%] items-center">
      <Excalidraw theme={plannerTheme} UIOptions={UIOptions}>
        <WelcomeScreen>
          <WelcomeScreen.Hints.ToolbarHint>
            <p>ToolBar Hints</p>
          </WelcomeScreen.Hints.ToolbarHint>
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.HelpHint />
        </WelcomeScreen>
      </Excalidraw>
    </div>
  );
};

export default ExcalidrawPage;
