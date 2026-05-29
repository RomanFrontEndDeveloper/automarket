import { useState } from 'react';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard/CarCard';

const HomePage = () => {
	const [search, setSearch] = useState('');
	const [selectedBrand, setSelectedBrand] = useState('');

	const [selectedCity, setSelectedCity] = useState('');

	const [selectedFuel, setSelectedFuel] = useState('');

	const [selectedTransmission, setSelectedTransmission] = useState('');

	const filteredCars = cars.filter((car) => {
		const matchesSearch = car.title
			.toLowerCase()
			.includes(search.toLowerCase());

		const matchesBrand =
			selectedBrand === '' || car.brand === selectedBrand;

		const matchesCity = selectedCity === '' || car.city === selectedCity;

		const matchesFuel = selectedFuel === '' || car.fuel === selectedFuel;

		const matchesTransmission =
			selectedTransmission === '' ||
			car.transmission === selectedTransmission;

		return (
			matchesSearch &&
			matchesBrand &&
			matchesCity &&
			matchesFuel &&
			matchesTransmission
		);
	});

	const resetFilters = () => {
		setSearch('');
		setSelectedBrand('');
		setSelectedCity('');
		setSelectedFuel('');
		setSelectedTransmission('');
	};

	return (
		<section>
			<h1 className='page-title'>Find Your Perfect Car</h1>

			<input
				type='text'
				placeholder='Search car...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className='search-input'
			/>

			<div className='filters'>
				<select
					value={selectedBrand}
					onChange={(e) => setSelectedBrand(e.target.value)}
				>
					<option value=''>All Brands</option>
					<option value='BMW'>BMW</option>
					<option value='Audi'>Audi</option>
					<option value='Toyota'>Toyota</option>
					<option value='Mercedes'>Mercedes</option>
					<option value='Volkswagen'>Volkswagen</option>
					<option value='Honda'>Honda</option>
					<option value='Ford'>Ford</option>
					<option value='Tesla'>Tesla</option>
				</select>

				<select
					value={selectedCity}
					onChange={(e) => setSelectedCity(e.target.value)}
				>
					<option value=''>All Cities</option>
					<option value='Kyiv'>Kyiv</option>
					<option value='Lviv'>Lviv</option>
					<option value='Kharkiv'>Kharkiv</option>
					<option value='Odessa'>Odessa</option>
					<option value='Dnipro'>Dnipro</option>
					<option value='Vinnytsia'>Vinnytsia</option>
					<option value='Poltava'>Poltava</option>
					<option value='Ternopil'>Ternopil</option>
					<option value='Khmelnytskyi'>Khmelnytskyi</option>
					<option value='Zhytomyr'>Zhytomyr</option>
					<option value='Rivne'>Rivne</option>
					<option value='Ivano-Frankivsk'>Ivano-Frankivsk</option>
					<option value='Cherkasy'>Cherkasy</option>
					<option value='Uzhhorod'>Uzhhorod</option>
				</select>

				<select
					value={selectedFuel}
					onChange={(e) => setSelectedFuel(e.target.value)}
				>
					<option value=''>All Fuel</option>

					<option value='Petrol'>Petrol</option>

					<option value='Diesel'>Diesel</option>

					<option value='Hybrid'>Hybrid</option>

					<option value='Electric'>Electric</option>
				</select>

				<select
					value={selectedTransmission}
					onChange={(e) => setSelectedTransmission(e.target.value)}
				>
					<option value=''>All Transmission</option>

					<option value='Automatic'>Automatic</option>

					<option value='Manual'>Manual</option>
				</select>
				<button className='reset-btn' onClick={resetFilters}>
					Reset Filters
				</button>
			</div>

			<div className='cars-grid'>
				{filteredCars.map((car) => (
					<CarCard key={car.id} car={car} />
				))}
			</div>
		</section>
	);
};

export default HomePage;
