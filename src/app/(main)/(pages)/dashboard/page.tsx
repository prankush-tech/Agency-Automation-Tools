import CardDashboard from '@/components/dashboard/CardDashboard';
import ChartDashboard from '@/components/dashboard/ChartDashboard';
import { DatePickerWithPresets } from '@/components/dashboard/DatePicker';
import UsersDashboard from '@/components/dashboard/UsersDashboard';
import React from 'react';


type Props = {};

const DashboardPage = (props: Props) => {
	return (
		<div className="felx felx-col gap-4 relative">
			<h1 className="text-xl lg:text-2xl sticky top-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center border-t border-x-2 font-bold rounded-t-2xl border-b">
				Dashboard
			</h1>
			<div className="pt-3 px-3 w-full flex justify-end ">
				<DatePickerWithPresets />
			</div>
			<CardDashboard/>
			
			<div className="flex flex-col lg:flex-row justify-center p-3 gap-4">
				<ChartDashboard/>
				<UsersDashboard/>
			</div>

		</div>
	);
};

export default DashboardPage;
