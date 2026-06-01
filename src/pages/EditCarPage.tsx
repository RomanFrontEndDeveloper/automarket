import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { cars } from '../data/cars';
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

const EditCarPage = () => {
	const { id } = useParams();

	const car = cars.find((car) => car.id === Number(id));

	const [title, setTitle] = useState(car?.title || '');

	const [brand, setBrand] = useState(car?.brand || '');

	const [model, setModel] = useState(car?.model || '');

	const [year, setYear] = useState(car?.year || 0);

	const [price, setPrice] = useState(car?.price || 0);

	const [city, setCity] = useState(car?.city || '');

	const [image, setImage] = useState(car?.image || '');

	const [fuel, setFuel] = useState(car?.fuel || '');

	const [transmission, setTransmission] = useState(car?.transmission || '');

	const [description, setDescription] = useState(car?.description || '');

	const [toast, setToast] = useState('');

	const showToast = (message: string) => {
		setToast(message);

		setTimeout(() => {
			setToast('');
		}, 3000);
	};

	if (!car) {
		return <h2>Car not found</h2>;
	}

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

		if (year <= 0) {
			showToast('Invalid year');
			return;
		}

		if (price <= 0) {
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

		const updatedCar = {
			id: car.id,
			title,
			brand,
			model,
			year,
			price,
			city,
			image,
			fuel,
			transmission,
			description,
			isFavorite: car.isFavorite,
		};

		console.log(updatedCar);

		showToast('Car updated successfully');
	};

	return (
		<section className='create-car-page'>
			<h1 className='create-car-title'>Edit Car</h1>

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
					onChange={(e) => setYear(Number(e.target.value))}
				/>

				<input
					type='number'
					placeholder='Price'
					value={price}
					onChange={(e) => setPrice(Number(e.target.value))}
				/>

				<select value={city} onChange={(e) => setCity(e.target.value)}>
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
					{transmissions.map((transmission) => (
						<option key={transmission} value={transmission}>
							{transmission}
						</option>
					))}
				</select>

				<textarea
					placeholder='Description'
					rows={6}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>

				<button type='submit' className='create-btn'>
					Save Changes
				</button>
			</form>
		</section>
	);
};

export default EditCarPage;
