import { EditorCanvasCardType } from '@/lib/types';
import React, { useMemo } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEditor } from '@/providers/editor-providers';
import { Position, useNodeId } from 'reactflow';
import EditorCanvasIconHelper from './editor-canvas-card-icon-helper';
import CustomHandle from './custom.handle';

type Props = {};

const EditorCanvasCardSingle = ({ data }: { data: EditorCanvasCardType }) => {
	const { dispatch, state } = useEditor();
	const nodeId = useNodeId();

	const logo = useMemo(
		() => {
			return <EditorCanvasIconHelper type={data.type} />;
		},
		[ data ]
	);

	return (
		<React.Fragment>
			{data.type !== 'Trigger' &&
			data.type !== 'Google Drive' && (
				<CustomHandle type="target" position={Position.Top} style={{ zIndex: 100 }} />
			)}
		</React.Fragment>
	);
};

export default EditorCanvasCardSingle;
