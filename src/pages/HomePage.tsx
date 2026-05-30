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

	const brands = [
		'BMW',
		'Audi',
		'Toyota',
		'Mercedes',
		'Volkswagen',
		'Honda',
		'Ford',
		'Tesla',
	];

	const cities = [
		'Kyiv',
		'Lviv',
		'Kharkiv',
		'Odessa',
		'Dnipro',
		'Vinnytsia',
		'Poltava',
		'Ternopil',
		'Khmelnytskyi',
		'Zhytomyr',
		'Rivne',
		'Ivano-Frankivsk',
		'Cherkasy',
		'Uzhhorod',
	];

	const fuels = ['Petrol', 'Diesel', 'Hybrid', 'Electric'];

	const transmissions = ['Automatic', 'Manual'];

	const carsPerPage = 3;

	const filteredCars = cars
		.filter((car) => {
			const matchesSearch = car.title
				.toLowerCase()
				.includes(search.toLowerCase());

			const matchesBrand =
				selectedBrand === '' || car.brand === selectedBrand;

			const matchesCity =
				selectedCity === '' || car.city === selectedCity;

			const matchesFuel =
				selectedFuel === '' || car.fuel === selectedFuel;

			const matchesTransmission =
				selectedTransmission === '' ||
				car.transmission === selectedTransmission;

			const matchesMinPrice =
				minPrice === '' || car.price >= Number(minPrice);

			const matchesMaxPrice =
				maxPrice === '' || car.price <= Number(maxPrice);

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

	const startIndex = (currentPage - 1) * carsPerPage;

	const endIndex = startIndex + carsPerPage;

	const paginatedCars = filteredCars.slice(startIndex, endIndex);

	const totalPages = Math.ceil(filteredCars.length / carsPerPage);

	const resetFilters = () => {
		setSearch('');
		setSelectedBrand('');
		setSelectedCity('');
		setSelectedFuel('');
		setSelectedTransmission('');
		setMinPrice('');
		setMaxPrice('');
		setSortBy('');
		setCurrentPage(1);
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

					{brands.map((brand) => (
						<option key={brand} value={brand}>
							{brand}
						</option>
					))}
				</select>

				<select
					value={selectedCity}
					onChange={(e) => {
						setSelectedCity(e.target.value);

						setCurrentPage(1);
					}}
				>
					<option value=''>All Cities</option>

					{cities.map((city) => (
						<option key={city} value={city}>
							{city}
						</option>
					))}
				</select>

				<select
					value={selectedFuel}
					onChange={(e) => {
						setSelectedFuel(e.target.value);

						setCurrentPage(1);
					}}
				>
					<option value=''>All Fuel</option>

					{fuels.map((fuel) => (
						<option key={fuel} value={fuel}>
							{fuel}
						</option>
					))}
				</select>

				<select
					value={selectedTransmission}
					onChange={(e) => {
						setSelectedTransmission(e.target.value);

						setCurrentPage(1);
					}}
				>
					<option value=''>All Transmission</option>

					{transmissions.map((transmission) => (
						<option key={transmission} value={transmission}>
							{transmission}
						</option>
					))}
				</select>

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
				{paginatedCars.length === 0 ? (
					<h2>No cars found 😥</h2>
				) : (
					paginatedCars.map((car) => (
						<CarCard
							key={car.id}
							car={car}
							onToggleFavorite={toggleFavorite}
						/>
					))
				)}
			</div>

			<div className='pagination'>
				<button
					onClick={() => setCurrentPage(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Prev
				</button>

				<span>
					Page {currentPage} / {totalPages}
				</span>

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
