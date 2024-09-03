import { EditorState } from '@/providers/editor-providers'
import { ToolsType } from '@/providers/toolProviders'
import { useZency } from '@/store/zencyStore'
import React from 'react'
import ContentBasedOnTitle from './content-basedOntitle'


type Props = {
    state: EditorState
    nodeConnection: ToolsType
  }
  

const RenderOutputAccordion = ({ state, nodeConnection }: Props) => {

    const {
        googleFile,
        setGoogleFile,
        selectedSlackChannels,
        setSelectedSlackChannels,
      } = useZency()


  return (
    <ContentBasedOnTitle
    nodeConnection={nodeConnection}
    newState={state}
    file={googleFile}
    setFile={setGoogleFile}
    selectedSlackChannels={selectedSlackChannels}
    setSelectedSlackChannels={setSelectedSlackChannels}
  />
  )
}

export default RenderOutputAccordion