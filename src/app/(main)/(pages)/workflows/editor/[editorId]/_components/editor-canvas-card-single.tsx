import { EditorCanvasCardType } from '@/lib/types';
import React, { useMemo } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEditor } from '@/providers/editor-providers';
import { Position, useNodeId } from 'reactflow';
import EditorCanvasIconHelper from './editor-canvas-card-icon-helper';
import CustomHandle from './custom.handle';
import { Badge } from '@/components/ui/badge';
import clsx from 'clsx';

type Props = {};

const EditorCanvasCardSingle = ({ data }: { data: EditorCanvasCardType }) => {
	const { dispatch, state } = useEditor();
	const nodeId = useNodeId();

	const logo = useMemo(
		() => {
			return <EditorCanvasIconHelper classString="" type={data.type} />;
		},
		[data]
	);

	return (
		<React.Fragment>
			{data.type !== 'Trigger' &&
				data.type !== 'Google Drive' && (
					<CustomHandle type="target" position={Position.Top} style={{ zIndex: 100 }} />
				)}

			<Card
				onClick={(e) => {
					e.stopPropagation();
					const val = state.editor.elements.find((n) => n.id === nodeId);
					if (val)
						dispatch({
							type: 'SELECTED_ELEMENT',
							payload: {
								element: val
							}
						});
				}}
				className="relative max-w-[400px] dark:border-muted-foreground/70"
			>
				<CardHeader className="flex flex-row items-center gap-4">
					<div>{logo}</div>
					<div>
						<CardTitle className="text-md">{data.title}</CardTitle>
						<CardDescription>
							<p className="text-xs text-muted-foreground/50">
								<b className="text-muted-foreground/80">ID: </b>
								{nodeId}
							</p>
							<p>{data.description}</p>
						</CardDescription>
					</div>
				</CardHeader>
				<Badge variant="secondary" className="absolute right-2 top-2">
					{data.type}
				</Badge>
				<div
          className={clsx('absolute left-3 top-4 h-2 w-2 rounded-full', {
            'bg-[#e2f24b]': Math.random() < 0.6,
            'bg-neutral-50': Math.random() >= 0.6 && Math.random() < 0.8,
            'bg-red-500': Math.random() >= 0.8,
          })}
        ></div>
			</Card>
			<CustomHandle type="source" position={Position.Bottom} id="a" />
		</React.Fragment>
	);
};

export default EditorCanvasCardSingle;
