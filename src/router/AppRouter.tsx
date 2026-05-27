import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import CarsPage from '../pages/CarsPage';
import DashboardPage from '../pages/DashboardPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'cars',
				element: <CarsPage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'profile',
				element: <ProfilePage />,
			},
			{
				path: 'dashboard',
				element: <DashboardPage />,
			},
		],
	},
]);
