import { useEffect, useState } from 'react';
import { cars as mockCars } from '../data/cars';
import CarCard from '../components/CarCard/CarCard';
import type { Car } from '../types/car.types';

const HomePage = () => {
	const [search, setSearch] = useState('');
	const [selectedBrand, setSelectedBrand] = useState('');

	const [selectedCity, setSelectedCity] = useState('');

	const [selectedFuel, setSelectedFuel] = useState('');

	const [selectedTransmission, setSelectedTransmission] = useState('');

	const [sortBy, setSortBy] = useState('');

	const [minPrice, setMinPrice] = useState('');

	const [maxPrice, setMaxPrice] = useState('');

	const [currentPage, setCurrentPage] = useState(1);

	const [cars, setCars] = useState<Car[]>(() => {
		const savedCars = localStorage.getItem('cars');

		return savedCars ? JSON.parse(savedCars) : mockCars;
	});

	useEffect(() => {
		localStorage.setItem('cars', JSON.stringify(cars));
	}, [cars]);

	const carsPerPage = 3;

	const filteredCars = cars
		.filter((car) => {
			// 🔍 пошук по title
			const matchesSearch = car.title
				.toLowerCase()
				.includes(search.toLowerCase());

			// 🚗 бренд
			let matchesBrand = true;

			if (selectedBrand !== '') {
				matchesBrand = car.brand === selectedBrand;
			}

			// 🏙 місто
			let matchesCity = true;

			if (selectedCity !== '') {
				matchesCity = car.city === selectedCity;
			}

			// ⛽ паливо
			let matchesFuel = true;

			if (selectedFuel !== '') {
				matchesFuel = car.fuel === selectedFuel;
			}

			// ⚙ коробка передач
			let matchesTransmission = true;

			if (selectedTransmission !== '') {
				matchesTransmission = car.transmission === selectedTransmission;
			}
			///////////////
			let matchesMinPrice = true;

			if (minPrice !== '') {
				matchesMinPrice = car.price >= Number(minPrice);
			}

			let matchesMaxPrice = true;

			if (maxPrice !== '') {
				matchesMaxPrice = car.price <= Number(maxPrice);
			}
			// повертаємо тільки машини,
			// які пройшли всі перевірки
			return (
				matchesSearch &&
				matchesBrand &&
				matchesCity &&
				matchesFuel &&
				matchesTransmission &&
				matchesMinPrice &&
				matchesMaxPrice
			);
		})
		.sort((a, b) => {
			if (sortBy === 'cheap') {
				return a.price - b.price;
			}

			if (sortBy === 'expensive') {
				return b.price - a.price;
			}

			if (sortBy === 'newest') {
				return b.year - a.year;
			}

			return 0;
		});

	///////////////////////////

	const startIndex = (currentPage - 1) * carsPerPage;

	const endIndex = startIndex + carsPerPage;

	const paginatedCars = filteredCars.slice(startIndex, endIndex);

	const resetFilters = () => {
		setSearch('');
		setSelectedBrand('');
		setSelectedCity('');
		setSelectedFuel('');
		setSelectedTransmission('');
		setMinPrice('');
		setMaxPrice('');
		setSortBy('');
	};

	const toggleFavorite = (id: number) => {
		const updatedCars = cars.map((car) => {
			if (car.id === id) {
				return {
					...car,
					isFavorite: !car.isFavorite,
				};
			}

			return car;
		});

		setCars(updatedCars);
	};

	return (
		<section>
			<h1 className='page-title'>Find Your Perfect Car</h1>

			<input
				type='text'
				placeholder='Search car...'
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
					setCurrentPage(1);
				}}
				className='search-input'
			/>

			<div className='filters'>
				<select
					value={selectedBrand}
					onChange={(e) => {
						setSelectedBrand(e.target.value);
						setCurrentPage(1);
					}}
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
					onChange={(e) => {
						setSelectedCity(e.target.value);
						setCurrentPage(1);
					}}
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
					onChange={(e) => {
						setSelectedFuel(e.target.value);
						setCurrentPage(1);
					}}
				>
					<option value=''>All Fuel</option>

					<option value='Petrol'>Petrol</option>

					<option value='Diesel'>Diesel</option>

					<option value='Hybrid'>Hybrid</option>

					<option value='Electric'>Electric</option>
				</select>

				<select
					value={selectedTransmission}
					onChange={(e) => {
						setSelectedTransmission(e.target.value);
						setCurrentPage(1);
					}}
				>
					<option value=''>All Transmission</option>

					<option value='Automatic'>Automatic</option>

					<option value='Manual'>Manual</option>
				</select>

				{/* перенос на новий рядок */}
				<div className='line-break'></div>
				<input
					type='number'
					placeholder='Min price'
					value={minPrice}
					onChange={(e) => {
						setMinPrice(e.target.value);
						setCurrentPage(1);
					}}
				/>

				<input
					type='number'
					placeholder='Max price'
					value={maxPrice}
					onChange={(e) => {
						setMaxPrice(e.target.value);
						setCurrentPage(1);
					}}
				/>

				<select
					value={sortBy}
					onChange={(e) => {
						setSortBy(e.target.value);
						setCurrentPage(1);
					}}
				>
					<option value=''>Sort By</option>

					<option value='cheap'>Cheap First</option>

					<option value='expensive'>Expensive First</option>

					<option value='newest'>Newest</option>
				</select>

				<button className='reset-btn' onClick={resetFilters}>
					Reset Filters
				</button>
			</div>

			<div className='cars-grid'>
				{paginatedCars.map((car) => (
					<CarCard
						key={car.id}
						car={car}
						onToggleFavorite={toggleFavorite}
					/>
				))}
			</div>

			<div className='pagination'>
				<button
					onClick={() => setCurrentPage(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Prev
				</button>

				<span>Page {currentPage}</span>

				<button
					onClick={() => setCurrentPage(currentPage + 1)}
					disabled={endIndex >= filteredCars.length}
				>
					Next
				</button>
			</div>
		</section>
	);
};

export default HomePage;
