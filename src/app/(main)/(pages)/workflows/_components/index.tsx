import React from 'react';
import Workflow from './workflow';

interface Props {}

const Workflows = (props: Props) => {
	return (
		<div className="relative flex flex-col gap-4">
			<section className="flex flex-col gap-4 m-2">
				<Workflow
					id="123"
					name="Automation Workflow"
					description="Creating a test workflow"
					publish={false}
				/>
			</section>
		</div>
	);
};

export default Workflows;
