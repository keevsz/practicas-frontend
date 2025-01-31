'use client';

import { Logo } from './logo';
import { SidebarRoutes } from './sidebar-routes';

export const Sidebar = () => {
	return (
		<div className='h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm dark:bg-primary-foreground'>
			<div className='p-6 flex flex-col items-center justify-center'>
				<Logo />
				<h1 className='font-bold'>Constructora WVS</h1>
			</div>
			<div className='flex flex-col w-full'>
				<SidebarRoutes />
			</div>
		</div>
	);
};
