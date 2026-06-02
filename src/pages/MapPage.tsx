import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngTuple } from 'leaflet';
import { Link } from 'react-router-dom';

import { cars } from '../data/cars';

const center: LatLngTuple = [49.422983, 26.987133];

const MapPage = () => {
	return (
		<div style={{ height: '600px' }}>
			<MapContainer
				center={center}
				zoom={9}
				style={{
					height: '100%',
					width: '100%',
				}}
			>
				<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

				{cars.map((car) => (
					<Marker key={car.id} position={[car.lat, car.lng]}>
						<Popup>
							<Link
								to={`/cars/${car.id}`}
								style={{
									textDecoration: 'none',
									color: 'inherit',
								}}
							>
								<img
									src={car.image}
									alt={car.title}
									className='popup-image'
								/>

								<h3>{car.title}</h3>

								<p>{car.city}</p>

								<p>${car.price}</p>

								<p
									style={{
										color: 'blue',
										fontWeight: 'bold',
									}}
								>
									View details →
								</p>
							</Link>
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
};

export default MapPage;
