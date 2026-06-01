type Props = {
	message: string;
};

const Toast = ({ message }: Props) => {
	return <div className='toast'>{message}</div>;
};

export default Toast;
