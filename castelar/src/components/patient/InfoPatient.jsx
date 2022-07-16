import React, { useState, useEffect } from 'react';
import s from './Patient.module.css';
import { useSelector, useDispatch } from 'react-redux';
import ModalFiliatorio from '../modals/ModalFiliatorios';
import { getMenuSolapa, editFiliatorios } from '../../redux/actions/index';
import PatientFiliatorio from './solapas/PatientFiliatorio';
import PatientGeneral from './solapas/PatientGeneral';
import { ModalAdminsiones } from '../modals/ModalAdminsiones';

export default function InfoPatient() {
	const solapa = useSelector((state) => state.solapaPaciente);
	const menuSolapa = useSelector((state) => state.menuSolapa);
	const paciente = useSelector((state) => state.pacienteActual);
	const dispatch = useDispatch();
	const [openFiliatorio, setOpenFiliatorio] = useState(false);
	const [form, setForm] = useState('filiatorios');
	const [estadoSolapa, setEstadoSolapa] = useState('');
	const [editar, setEditar] = useState(false);
	const [ad, setAd] = useState(false);
	useEffect(() => {
		setEstadoSolapa(solapa);
	}, [solapa]);

	const handleClick = (flag) => {
		if (flag) {
			if (flag == 'psicologia') {
				setForm('admision_psicologica');
				dispatch(editFiliatorios(false));
			} else {
				setForm('admision');
				dispatch(editFiliatorios(false));
			}
		}
		if (estadoSolapa === 'Datos Filiatorios') {
			setForm('filiatorios');
			setEditar(true);
			dispatch(editFiliatorios(true));
		}

		if (estadoSolapa === 'Psicología') {
			setForm('psicologia');
			dispatch(editFiliatorios(false));
		}

		if (estadoSolapa === 'Psiquiatría') {
			setForm('psiquiatria');
			dispatch(editFiliatorios(false));
		}
		if (estadoSolapa === 'Semiología') {
			setForm('semiologia');
			dispatch(editFiliatorios(false));
		}
		if (estadoSolapa === 'Nutrición') {
			setForm('nutricion');
			dispatch(editFiliatorios(false));
		}
		if (estadoSolapa === 'Clínica') {
			setForm('ingreso');
			dispatch(editFiliatorios(false));
		}
		if (estadoSolapa === 'Musicoterapia') {
			setForm('musicoterapia');
			dispatch(editFiliatorios(false));
		}
		if (estadoSolapa === 'Ed. Física') {
			setForm('ed_fisica');
			dispatch(editFiliatorios(false));
		}
		if (estadoSolapa === 'Área Social') {
			setForm('area_social');
			dispatch(editFiliatorios(false));
		}
		if (estadoSolapa === 'T. Contextuales') {
			setForm('contextual');
			dispatch(editFiliatorios(false));
		}
		if (estadoSolapa === 'Medicación') {
			setForm('medicacion');
			dispatch(editFiliatorios(false));
		}
		/* Otras especialidades*/
		/* 	if (estadoSolapa === 'Área Social') {
			setForm('area_social');
			dispatch(editFiliatorios(false));
		} */

		/*T.Ocupacional falta en el menu*/
		/* 	if (estadoSolapa === 'Musicoterapia') {
			setForm('musicoterapia');
			dispatch(editFiliatorios(false));
		} */

		setOpenFiliatorio(true);
	};

	return (
		<div className={s.containerInfoPatient}>
			{!menuSolapa ? (
				<div
					onClick={() => {
						dispatch(getMenuSolapa(!menuSolapa));
					}}
					className={`${s.containerMenuInfoPaciente} ${s.menuActive}`}
				>
					<img
						className={`${s.menuInfoPaciente}`}
						alt='Menu info paciente'
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFJJREFUSEtjZKAxYKSx+QyjFhAMYfoH0e/v3/8TdBYeBaycnCiOxvABzS2gxPXY9NI/DmjuA5rHAc0toHkQDX0LaB4HNLdg6MfBqA/QQ4DmpSkATVQYGarCjvAAAAAASUVORK5CYII='
					/>
				</div>
			) : (
				<div
					onClick={() => {
						dispatch(getMenuSolapa(!menuSolapa));
					}}
					className={`${s.containerMenuInfoPaciente} ${s.menuDisabled}`}
				>
					<img
						className={`${s.menuInfoPaciente}`}
						alt='Menu info paciente'
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAGlJREFUSEtjZKAxYKSx+QyjFhAMYfoH0e/v3/8TdBYeBaycnCiOxvABzS2gxPXY9NI/DmjuA1LjAD1S0R1IcSSTbAHNg2joW0Agkh1ZOTkPkOJLUiOZcgtIcR0xaodhTibG26SoGfpBBACfpxoZcSBZ0QAAAABJRU5ErkJggg=='
					/>
				</div>
			)}
			{solapa === 'Biografia' ? (
				<div className={s.containerButtonPDF}>
					<div className={s.buttonPDF}>
						<img
							alt='Crear PDF'
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPZJREFUSEvtlmsNwjAURs9VggRAATgACeCAYABQwiSAAyzMARih5CMdjDHoY1nCD27SbMna7/Q+ejujZ7Oe9XkDOOfmwAYYBeCFmS1DG2wDnIFBaKH/HoS0AVyEuHa+j4FkAczMnHOLGEg2QLuPgXQCxEA6A5oQha+ewyzAtyL4A4JH5LdC5A+UepL6k+wAXIE1oJZS+LZyqlxL8sADtHgLTP0YAmNAJ1kQPSddABKfAUcPkEcaEhZc4ppztxwPqua3q4VI76XXVGt/WBIgWDItE34CkHLhNH0ozezlJvx0ZSppqpYUuwArM1MpP3OSopAzt/e/ihvHrYgZEE0L5wAAAABJRU5ErkJggg=='
						/>
					</div>
				</div>
			) : (
				''
			)}

			{solapa === 'Psicología' ||
			solapa === 'Psiquiatría' ||
			solapa === 'Nutrición' ||
			solapa === 'Clínica' ||
			solapa === 'Área Social' ||
			solapa === 'Ed. Física' ||
			solapa === 'Musicoterapia' ||
			solapa === 'T. Contextuales' ? (
				<div className={s.btnStandard} onClick={handleClick}>
					<imgClínica
						alt='Agregar Evolución'
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXFJREFUSEu9VdFRwzAUkyYBJoBOACPABLAB7SS0EwATUDaACWg3aCd5Pd09B+fFrnOlwXf5yMV5kt6TZWLixYnrowlgZk8AbgHc+CNOG3/WJD+PkawCmNk9gBcAlw2VOwALkuvSviKAmS0BPPsPewB6/yIp5jAzqbkDMAdw4fuWJBcRZAAQiouZileXmQlESrVWJPXerR6At+XDv84S45YRXNGP73vI2xUB1E9JLjI3M1MRkiXlScmO5FUi1W10t7wC2JMsDvYYgM8mEexU5ABvAB5r7L1AVYF/TyreScrev+fAzOSQawDV3o9QIHdpFhuSswgwYJcKtoaczySSyFs0OcA5W7QlqXb1ZjD5kJU9OmQ9H+f9HzHkuk2Dj/9y0Hrn6H+jwlXkSTonuTpb2KVCIVHVV4F+h7jWJaSTm2JlkKQ9F0WWnqwqnPK+JkT3hZSOv3CCc+QuPfK1okRrm12ZxcKDNG3Fwanfm5f+qYXTfwfi7uIZoIUoYQAAAABJRU5ErkJggg=='
					/>
					<span>Evolucionar</span>
				</div>
			) : (
				''
			)}

			{solapa === 'Semiología' ? (
				<div className={s.btnStandard} onClick={handleClick}>
					<imgClínica
						alt='Nueva Admision'
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXFJREFUSEu9VdFRwzAUkyYBJoBOACPABLAB7SS0EwATUDaACWg3aCd5Pd09B+fFrnOlwXf5yMV5kt6TZWLixYnrowlgZk8AbgHc+CNOG3/WJD+PkawCmNk9gBcAlw2VOwALkuvSviKAmS0BPPsPewB6/yIp5jAzqbkDMAdw4fuWJBcRZAAQiouZileXmQlESrVWJPXerR6At+XDv84S45YRXNGP73vI2xUB1E9JLjI3M1MRkiXlScmO5FUi1W10t7wC2JMsDvYYgM8mEexU5ABvAB5r7L1AVYF/TyreScrev+fAzOSQawDV3o9QIHdpFhuSswgwYJcKtoaczySSyFs0OcA5W7QlqXb1ZjD5kJU9OmQ9H+f9HzHkuk2Dj/9y0Hrn6H+jwlXkSTonuTpb2KVCIVHVV4F+h7jWJaSTm2JlkKQ9F0WWnqwqnPK+JkT3hZSOv3CCc+QuPfK1okRrm12ZxcKDNG3Fwanfm5f+qYXTfwfi7uIZoIUoYQAAAABJRU5ErkJggg=='
					/>
					<span>Agregar</span>
				</div>
			) : (
				''
			)}

			{solapa === 'Admisiones' ? (
				<div className={s.btnStandard} onClick={() => setAd(true)}>
					<imgClínica
						alt='Nueva Admision'
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXFJREFUSEu9VdFRwzAUkyYBJoBOACPABLAB7SS0EwATUDaACWg3aCd5Pd09B+fFrnOlwXf5yMV5kt6TZWLixYnrowlgZk8AbgHc+CNOG3/WJD+PkawCmNk9gBcAlw2VOwALkuvSviKAmS0BPPsPewB6/yIp5jAzqbkDMAdw4fuWJBcRZAAQiouZileXmQlESrVWJPXerR6At+XDv84S45YRXNGP73vI2xUB1E9JLjI3M1MRkiXlScmO5FUi1W10t7wC2JMsDvYYgM8mEexU5ABvAB5r7L1AVYF/TyreScrev+fAzOSQawDV3o9QIHdpFhuSswgwYJcKtoaczySSyFs0OcA5W7QlqXb1ZjD5kJU9OmQ9H+f9HzHkuk2Dj/9y0Hrn6H+jwlXkSTonuTpb2KVCIVHVV4F+h7jWJaSTm2JlkKQ9F0WWnqwqnPK+JkT3hZSOv3CCc+QuPfK1okRrm12ZxcKDNG3Fwanfm5f+qYXTfwfi7uIZoIUoYQAAAABJRU5ErkJggg=='
					/>
					<span>Nueva Admision</span>
				</div>
			) : (
				''
			)}

			{solapa === 'Medicación' ? (
				<div className={s.btnStandard} onClick={handleClick}>
					<imgClínica
						alt='Nuevo Plan de Medicacion'
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXFJREFUSEu9VdFRwzAUkyYBJoBOACPABLAB7SS0EwATUDaACWg3aCd5Pd09B+fFrnOlwXf5yMV5kt6TZWLixYnrowlgZk8AbgHc+CNOG3/WJD+PkawCmNk9gBcAlw2VOwALkuvSviKAmS0BPPsPewB6/yIp5jAzqbkDMAdw4fuWJBcRZAAQiouZileXmQlESrVWJPXerR6At+XDv84S45YRXNGP73vI2xUB1E9JLjI3M1MRkiXlScmO5FUi1W10t7wC2JMsDvYYgM8mEexU5ABvAB5r7L1AVYF/TyreScrev+fAzOSQawDV3o9QIHdpFhuSswgwYJcKtoaczySSyFs0OcA5W7QlqXb1ZjD5kJU9OmQ9H+f9HzHkuk2Dj/9y0Hrn6H+jwlXkSTonuTpb2KVCIVHVV4F+h7jWJaSTm2JlkKQ9F0WWnqwqnPK+JkT3hZSOv3CCc+QuPfK1okRrm12ZxcKDNG3Fwanfm5f+qYXTfwfi7uIZoIUoYQAAAABJRU5ErkJggg=='
					/>
					<span>Nuevo Plan de Medicación</span>
				</div>
			) : (
				''
			)}

			{solapa === 'Datos Filiatorios' ? (
				<div className={s.btnStandard} onClick={handleClick}>
					<img
						alt='Editar filiatorios'
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARJJREFUSEvVlV0RwjAQhHcVFBQADpAACpDA4ABHIAEHIAEcgAMcLHOdtpOGhKR/D+Sl02my393eNUdMvDixPkYDSDoDuJG0Z7NaAEkbACcAy0RmB1eoEt9XZ1rffMATwKKjuAVzB1A45xqID5BtIpllnaQlyaektdnjQIYDKlt2ALYk7w7k6NrXKwPP87cDmZG092iRkxZ54rWQia588dJulybpJyAibhKtzumVQa641cJqUkOyMugiDuBKcp4NyBU3QUlWi8Jt82QGdV28ny/oeaiGfQDRgo4BiIpXFn11YTKDLtd5rwz+DlC2WZeoA3sfJO12LVdo4NhESs2EWAwvAHabXoKAgZEHj2cNliHgyQEfturGGQ9ytQYAAAAASUVORK5CYII='
					/>
					<span>Editar</span>
				</div>
			) : (
				''
			)}

			<h1 className={s.infoMainTitle}>{solapa}</h1>
			<div className={s.infoMainBody}>
				{solapa === 'Datos Filiatorios' ? <PatientFiliatorio /> : ''}
				{solapa === 'Psicología' ||
				solapa === 'Psiquiatría' ||
				solapa === 'Admisiones' ||
				solapa === 'Nutrición' ||
				solapa === 'Clínica' ||
				solapa === 'Semiología' ||
				solapa === 'Área Social' ||
				solapa === 'Ed. Física' ||
				solapa === 'Musicoterapia' ||
				solapa === 'T. Contextuales' ? (
					<PatientGeneral estadoSolapa={estadoSolapa} />
				) : (
					''
				)}
			</div>

			{ad ? <ModalAdminsiones setOpenModal={setAd} clic={handleClick} /> : ''}

			{openFiliatorio ? (
				<ModalFiliatorio
					form={form}
					setForm={setForm}
					setOpenFiliatorio={setOpenFiliatorio}
					paciente={paciente[form]}
					editar={editar}
				/>
			) : null}
		</div>
	);
}
