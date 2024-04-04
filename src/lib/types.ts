import { ToolsType } from '@/providers/toolProviders';
import { z } from 'zod';

export const EditProfileSchema = z.object({
	email: z.string().email('Required'),
	name: z.string().min(1, 'Required')
});

export const WorkflowFormSchema = z.object({
  name: z.string() .min(1, 'Required'),
  description: z.string().min(1, 'Required'),
  })


export type ToolTypes = 'Google Drive' | 'Notion' | 'Slack' | 'Discord';

export type Tools = {
	title: ToolTypes;
	description: string;
	image: string;
	connectionKey: keyof ToolsType;
	accessTokenKey?: string;
	alwaysTrue?: boolean;
	slackSpecial?: boolean;
};


export type EditorNodeType={
	id: string
  type: EditorCanvasCardType['type']
  position: {
    x: number
    y: number
  }
  data: EditorCanvasCardType
}

export type EditorCanvasTypes =
  | 'Email'
  | 'Condition'
  | 'AI'
  | 'Slack'
  | 'Google Drive'
  | 'Notion'
  | 'Custom Webhook'
  | 'Google Calendar'
  | 'Trigger'
  | 'Action'
  | 'Wait'


export type EditorCanvasCardType = {
	title: string
	description: string
	completed: boolean
	current: boolean
	metadata: any
	type: EditorCanvasTypes
  }



//actions for reducer funtions in editor workflows

export type EditorNode = EditorNodeType

export type EditorActions =
  | {
      type: 'LOAD_DATA'
      payload: {
        elements: EditorNode[]
        edges: {
          id: string
          source: string
          target: string
        }[]
      }
    }
  | {
      type: 'UPDATE_NODE'
      payload: {
        elements: EditorNode[]
      }
    }
  | { type: 'REDO' }
  | { type: 'UNDO' }
  | {
      type: 'SELECTED_ELEMENT'
      payload: {
        element: EditorNode
      }
    }
