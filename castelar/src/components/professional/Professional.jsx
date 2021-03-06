import React, { useEffect, useState } from 'react';
import NavProfessional from './NavProfessional';
import BodyProfessional from './BodyProfessional';
import { useSelector, useDispatch } from 'react-redux';
import { allProfessional } from '../../redux/actions/index';
import s from './Professional.module.css';

export default function Professional() {
	const dispatch = useDispatch();
	const professionals = useSelector((state) => state.allProfessional);
	const [pros, setPros] = useState([]);
	const [copyPros, setCopyPros] = useState([]);
	const [flagSearch, setFlagSearch] = useState(false);
	useEffect(() => {
		dispatch(allProfessional());
	}, []);

	useEffect(() => {
		const pro = professionals.filter((p) => p.calendar === true);
		setPros(pro);
		setCopyPros(pro);
	}, [professionals]);

	return (
		<div className={s.professionalContainer}>
			<NavProfessional
				setPros={setPros}
				copyPros={copyPros}
				setFlagSearch={setFlagSearch}
			/>
			<BodyProfessional arrayProfessionals={pros} flagSearch={flagSearch} />
		</div>
	);
}
