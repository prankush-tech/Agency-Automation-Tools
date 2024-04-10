'use server'
import { db } from '@/lib/database'

export const onCreateNodesEdges = async (
  flowId: string,
  nodes: string,
  edges: string,
  flowPath: string
) => {
  const flow = await db.workflows.update({
    where: {
      id: flowId,
    },
    data: {
      nodes,
      edges,
      flowPath: flowPath,
    },
  })
  console.log(flow)
  if (flow) return { message: 'flow saved' }
}

export const onFlowPublish = async (workflowId: string, state: boolean) => {
  console.log(state)
  const published = await db.workflows.update({
    where: {
      id: workflowId,
    },
    data: {
      publish: state,
    },
  })

  if (published.publish) return 'Workflow published'
  return 'Workflow unpublished'
}