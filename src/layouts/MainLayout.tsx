import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
	return (
		<div className='layout'>
			<Header />

			<main className='main'>
				{/* <h2>hhhhh</h2> буде зображатися на всіх сторінках */}
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};

export default MainLayout;
