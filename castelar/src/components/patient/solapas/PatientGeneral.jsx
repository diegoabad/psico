import React, { useState, useEffect } from 'react';
import s from './PatientGeneral.module.css';
import { useSelector } from 'react-redux';
import { transformDate } from '../../../functions/transformDate';
import TablaEvo from './TablaEvo';
import FiltrosTabla from './FiltrosTabla';
import { arrayProfessional } from '../../../functions/arrayProfessional';
export default function PatientFiliatorio({ estadoSolapa }) {
	const pac = useSelector((state) => state.pacienteActual);
	const [evoluciones, setEvoluciones] = useState([]);
	const [evoCopy, setEvoCopy] = useState([]);
	const arrPro = useSelector((state) => state.allProfessional);
	const [doctors, setDoctors] = useState([]);
	useEffect(() => {
		if (estadoSolapa === 'Admisiones') {
			setDoctors(arrayProfessional(arrPro, pac.admision));
			setEvoCopy(pac.admision);
			setEvoluciones(evoCopy);
		}

		if (estadoSolapa === 'Psicología') {
			setDoctors(arrayProfessional(arrPro, pac.psicologia));
			setEvoCopy(pac.psicologia);
			setEvoluciones(evoCopy);
		}

		if (estadoSolapa === 'Semiología') {
			setDoctors(arrayProfessional(arrPro, pac.semiologia));
			setEvoCopy(pac.semiologia);
			setEvoluciones(evoCopy);
		}

		if (estadoSolapa === 'Psiquiatría') {
			setDoctors(arrayProfessional(arrPro, pac.psiquiatria));
			setEvoCopy(pac.psiquiatria);
			setEvoluciones(evoCopy);
		}

		if (estadoSolapa === 'Nutrición') {
			setDoctors(arrayProfessional(arrPro, pac.nutricion));
			setEvoCopy(pac.nutricion);
			setEvoluciones(evoCopy);
		}

		if (estadoSolapa === 'Clínica') {
			setDoctors(arrayProfessional(arrPro, pac.ingreso));
			setEvoCopy(pac.ingreso);
			setEvoluciones(evoCopy);
		}

		if (estadoSolapa === 'Área Social') {
			setDoctors(arrayProfessional(arrPro, pac.area_social));
			setEvoCopy(pac.area_social);
			setEvoluciones(evoCopy);
		}

		if (estadoSolapa === 'Ed. Física') {
			setDoctors(arrayProfessional(arrPro, pac.ed_fisica));
			setEvoCopy(pac.ed_fisica);
			setEvoluciones(evoCopy);
		}

		if (estadoSolapa === 'Musicoterapia') {
			setDoctors(arrayProfessional(arrPro, pac.musicoterapia));
			setEvoCopy(pac.musicoterapia);
			setEvoluciones(evoCopy);
		}

		if (estadoSolapa === 'T. Contextuales') {
			setDoctors(arrayProfessional(arrPro, pac.contextual));
			setEvoCopy(pac.contextual);
			setEvoluciones(evoCopy);
		}
	}, [estadoSolapa, evoCopy]);

	return (
		<div className={s.containerTable}>
			{estadoSolapa === 'Psicología' ||
			estadoSolapa === 'Psiquiatría' ||
			estadoSolapa === 'Nutrición' ||
			estadoSolapa === 'Clínica' ||
			estadoSolapa === 'Área Social' ||
			estadoSolapa === 'Ed. Física' ||
			estadoSolapa === 'Musicoterapia' ||
			estadoSolapa === 'Semiología' ||
			estadoSolapa === 'Admisiones' ||
			estadoSolapa === 'T. Contextuales' ? (
				<FiltrosTabla
					pacienteActual={evoCopy}
					setEvoluciones={setEvoluciones}
					allDoctors={doctors}
					solapa={estadoSolapa}
				/>
			) : (
				''
			)}

			{estadoSolapa === 'Psicología' ||
			estadoSolapa === 'Psiquiatría' ||
			estadoSolapa === 'Nutrición' ||
			estadoSolapa === 'Clínica' ||
			estadoSolapa === 'Área Social' ||
			estadoSolapa === 'Ed. Física' ||
			estadoSolapa === 'Musicoterapia' ||
			estadoSolapa === 'Semiología' ||
			estadoSolapa === 'Admisiones' ||
			estadoSolapa === 'T. Contextuales' ? (
				<TablaEvo pac={evoluciones} solapa={estadoSolapa} />
			) : null}
		</div>
	);
}
