import { useState } from 'react';

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

const CreateCarPage = () => {
	const [title, setTitle] = useState('');

	const [brand, setBrand] = useState('');

	const [model, setModel] = useState('');

	const [year, setYear] = useState('');

	const [price, setPrice] = useState('');

	const [city, setCity] = useState('');

	const [image, setImage] = useState('');

	const [fuel, setFuel] = useState('');

	const [transmission, setTransmission] = useState('');

	const [description, setDescription] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const newCar = {
			title,
			brand,
			model,
			year: Number(year),
			price: Number(price),
			city,
			image,
			fuel,
			transmission,
			description,
			isFavorite: false,
		};

		console.log(newCar);
	};

	return (
		<section className='create-car-page'>
			<h1 className='create-car-title'>Create Car</h1>

			<form className='create-car-form' onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<select
					value={brand}
					onChange={(e) => setBrand(e.target.value)}
				>
					<option value=''>Select Brand</option>

					{brands.map((brand) => (
						<option key={brand} value={brand}>
							{brand}
						</option>
					))}
				</select>

				<input
					type='text'
					placeholder='Model'
					value={model}
					onChange={(e) => setModel(e.target.value)}
				/>

				<input
					type='number'
					placeholder='Year'
					value={year}
					onChange={(e) => setYear(e.target.value)}
				/>

				<input
					type='number'
					placeholder='Price'
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>

				<select value={city} onChange={(e) => setCity(e.target.value)}>
					<option value=''>Select City</option>

					{cities.map((city) => (
						<option key={city} value={city}>
							{city}
						</option>
					))}
				</select>

				<input
					type='text'
					placeholder='Image URL'
					value={image}
					onChange={(e) => setImage(e.target.value)}
				/>

				<select value={fuel} onChange={(e) => setFuel(e.target.value)}>
					<option value=''>Select Fuel</option>

					{fuels.map((fuel) => (
						<option key={fuel} value={fuel}>
							{fuel}
						</option>
					))}
				</select>

				<select
					value={transmission}
					onChange={(e) => setTransmission(e.target.value)}
				>
					<option value=''>Select Transmission</option>

					{transmissions.map((transmission) => (
						<option key={transmission} value={transmission}>
							{transmission}
						</option>
					))}
				</select>

				<textarea
					placeholder='Description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					rows={6}
				/>

				<button type='submit' className='create-btn'>
					Create Car
				</button>
			</form>
		</section>
	);
};

export default CreateCarPage;
