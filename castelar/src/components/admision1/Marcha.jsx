import React, { useEffect } from 'react';
import Contenedor from './componente/Contenedor.jsx';

const Marcha = ({ setSemiologica, semiologica, paciente }) => {
	const initialStateValues = {
		marcha: '',
		observacionMarcha: '',
	};

	const [values, setValues] = React.useState(initialStateValues);

	useEffect(() => {
		if (paciente) {
			setValues({
				...values,
				marcha: paciente.marcha,
				observacionMarcha: paciente.observacionMarcha,
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
			titulo='Marcha'
			name='marcha'
			value={values.marcha}
			datos={[
				{ name: 'marcha_normal', label: 'Normal' },
				{ name: 'ataxica', label: 'Atáxica' },
				{ name: 'parquinsoniana', label: 'Parquinsoniana' },
				{ name: 'coreotetosica', label: 'Coreotetósica' },
				{ name: 'paretica', label: 'Parética' },
				{ name: 'hemiparetica', label: 'Hemiparética' },
				{ name: 'otro', label: 'Otro' },
			]}
			handleChange={handleChange}
			texto={false}
			multiline={true}
			entrada={{
				label: 'Observaciones',
				name: 'observacionMarcha',
				value: values.observacionMarcha,
				error:
					values.marcha === 'otro' && values.observacionMarcha === ''
						? true
						: false,
			}}
		></Contenedor>
	);
};

export default Marcha;
