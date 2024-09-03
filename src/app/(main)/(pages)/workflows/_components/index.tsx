import React from 'react';
import Workflow from './workflow';
import { onGetWorkflows } from '../_actions/workflowsConnection';
import MoreCredits from './moreCredits';

interface Props { }

const Workflows = async (props: Props) => {

	const workflows = await onGetWorkflows()


	return (
		<div className="relative flex flex-col gap-4">
			<section className="flex flex-col gap-4 m-2">
				<MoreCredits/>
				{workflows?.length ? (
					workflows.map((flow) => (
						<Workflow
							key={flow.id}
							{...flow}
						/>
					))
				) : (
					<div className="mt-28 flex text-muted-foreground items-center justify-center">
						No Workflows
					</div>
				)}
			</section>
		</div>
	);
};

export default Workflows;
