import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import CarsPage from '../pages/CarsPage';
import DashboardPage from '../pages/DashboardPage';
import SingleCarPage from '../pages/SingleCarPage';
import RegisterPage from '../pages/RegisterPage';
import AdminPage from '../pages/AdminPage';
import CreateCarPage from '../pages/CreateCarPage';

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
				path: '/create-car',
				element: <CreateCarPage />,
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
				path: 'register',
				element: <RegisterPage />,
			},
			{
				path: 'dashboard',
				element: <DashboardPage />,
			},
			{
				path: 'cars/:id',
				element: <SingleCarPage />,
			},
			{
				path: 'admin',
				element: <AdminPage />,
			},
		],
	},
]);
