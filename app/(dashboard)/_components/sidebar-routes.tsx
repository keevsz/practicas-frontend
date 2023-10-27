'use client';

import { BarChart, Layout, List, Users2, Settings2, Users2Icon } from 'lucide-react';
import { SidebarItem } from './sidebar-item';

const routes = [
	{
		icon: Layout,
		label: 'Dashboard',
		href: '/',
	},
	{
		icon: Users2Icon,
		label: 'Usuarios',
		href: '/users',
	},
	{
		icon: List,
		label: 'Roles',
		href: '/roles',
	},
	{
		icon: BarChart,
		label: 'Proyectos',
		href: '/projects',
	},
	{
		icon: List,
		label: 'Tareas',
		href: '/tasks',
	},
	{
		icon: Users2,
		label: 'Colaboradores',
		href: '/collaborators',
	},
	{
		icon: Settings2,
		label: 'Configuración',
		href: '/settings',
	},
];

export const SidebarRoutes = () => {
	return (
		<div className='flex flex-col w-full'>
			{routes.map((route) => (
				<SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
			))}
		</div>
	);
};
