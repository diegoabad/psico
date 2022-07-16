import React, { useEffect } from 'react';
import Contenedor from './componente/Contenedor.jsx';

const orientacion = ({ setSemiologica, semiologica, paciente }) => {
	const initialStateValues = {
		orientacion: '',
		observacionOrientacion: '',
	};

	const [values, setValues] = React.useState(initialStateValues);

	useEffect(() => {
		if (paciente) {
			setValues({
				...values,
				orientacion: paciente.orientacion,
				observacionOrientacion: paciente.observacionOrientacion,
			});
		}
		setSemiologica({ ...semiologica, ...values });
	}, []);

	useEffect(() => {
		setSemiologica({ ...semiologica, ...values });
	}, [values]);

	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	return (
		<Contenedor
			titulo='Orientación'
			name='orientacion'
			value={values.orientacion}
			datos={[
				{ name: 'en_tiempo', label: 'En tiempo' },
				{ name: 'en_espacio', label: 'En espacio' },
				{ name: 'otro', label: 'Otro' },
			]}
			handleChange={handleChange}
			texto={false}
			multiline={true}
			entrada={{
				label: 'Observaciones',
				name: 'observacionOrientacion',
				value: values.observacionOrientacion,
				error:
					values.orientacion === 'otro' && values.observacionOrientacion === ''
						? true
						: false,
			}}
		></Contenedor>
	);
};

export default orientacion;
