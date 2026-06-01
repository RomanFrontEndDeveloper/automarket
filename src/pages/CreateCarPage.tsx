import { useState } from 'react';
import Toast from '../components/Toast';

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

	const [toast, setToast] = useState('');

	const showToast = (message: string) => {
		setToast(message);

		setTimeout(() => {
			setToast('');
		}, 3000);
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!title.trim()) {
			showToast('Title is required');
			return;
		}

		if (!brand) {
			showToast('Select brand');
			return;
		}

		if (!model.trim()) {
			showToast('Model is required');
			return;
		}

		if (!year) {
			showToast('Year is required');
			return;
		}

		if (Number(year) <= 0) {
			showToast('Invalid year');
			return;
		}

		if (!price) {
			showToast('Price is required');
			return;
		}

		if (Number(price) <= 0) {
			showToast('Invalid price');
			return;
		}

		if (!city) {
			showToast('Select city');
			return;
		}

		if (!image.trim()) {
			showToast('Image URL is required');
			return;
		}

		if (!fuel) {
			showToast('Select fuel');
			return;
		}

		if (!transmission) {
			showToast('Select transmission');
			return;
		}

		if (!description.trim()) {
			showToast('Description is required');
			return;
		}

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

		showToast('Car created successfully');
	};

	return (
		<section className='create-car-page'>
			<h1 className='create-car-title'>Create Car</h1>

			{toast && <Toast message={toast} />}

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
