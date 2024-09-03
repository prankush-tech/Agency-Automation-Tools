'use client'
import React from 'react'
import {
  Calendar,
  CircuitBoard,
  Database,
  GitBranch,
  HardDrive,
  Mail,
  MousePointerClickIcon,
  Plus,
  Slack,
  Timer,
  Webhook,
  Zap,
} from 'lucide-react'
import { EditorCanvasTypes } from '@/lib/types'

type Props = { type: EditorCanvasTypes, classString:string }


const EditorCanvasIconHelper = ({ type,classString }: Props) => {
  switch (type) {
    case 'Email':
      return (
        <Mail
          className={ `flex-shrink-0 ${classString}`} 
          size={25}
        />
      )
    case 'Condition':
      return (
        <GitBranch
          className={ `flex-shrink-0 ${classString}`} 
          size={25}
        />
      )
    case 'AI':
      return (
        <CircuitBoard
          className={ `flex-shrink-0 ${classString}`} 
          size={25}
        />
      )
    case 'Slack':
      return (
        <Slack
          className={ `flex-shrink-0 ${classString}`} 
          size={25}
        />
      )
    case 'Google Drive':
      return (
        <HardDrive
          className={ `flex-shrink-0 ${classString}`} 
          size={25}
        />
      )
    case 'Notion':
      return (
        <Database
          className={ `flex-shrink-0 ${classString}`} 
          size={25}
        />
      )
    case 'Custom Webhook':
      return (
        <Webhook
          className={ `flex-shrink-0 ${classString}`} 
          size={25}
        />
      )
    case 'Google Calendar':
      return (
        <Calendar
          className={ `flex-shrink-0 ${classString}`} 
          size={25}
        />
      )
    case 'Trigger':
      return (
        <MousePointerClickIcon
          className={ `flex-shrink-0 ${classString}`} 
          size={25}
        />
      )
    case 'Action':
      return (
        <Zap
          className={ `flex-shrink-0 ${classString}`} 
          size={25}
        />
      )
    case 'Wait':
      return (
        <Timer
          className={ `flex-shrink-0 ${classString}`} 
          size={25}
        />
      )
    default:
      return (
        <Zap
          className={ `flex-shrink-0 ${classString}`} 
          size={25}
        />
      )
  }
}

export default EditorCanvasIconHelper