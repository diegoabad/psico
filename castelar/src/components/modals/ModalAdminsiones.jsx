import React from 'react';
import s from './Modal.module.css';

export const ModalAdminsiones = ({ setOpenModal, clic }) => {
	function handleClose() {
		setOpenModal(false);
	}

	function handleChoose(value) {
		clic(value);
		setOpenModal(false);
	}

	return (
		<div className={s.overlay}>
			<div className={` ${s.modalAccept}`}>
				<div className={s.modalHeader}>
					<h3>¿Qué tipo de admisión desea añadir?</h3>
				</div>
				<img
					alt='Icono de cerrar'
					onClick={() => {
						handleClose();
					}}
					className={s.close}
					src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMNJREFUSEvtlN0NgkAQhD86sBMsQTuQSrUDLUE7sQQziSQn7h8mF1/gDbLMtzs7dwOdn6GzPhsgdfjvFp2AG/B0Wt0BB+DijRJNIPEzcAeOBkTiV2APTB4kAkhA3Y8GpBV/vKcwp8x2YEHkxtx5KK7CDKCaJUTfZEsqXgUsIXovia8FzLboP2/xX2GqWtR6LhFr8WZSM4CVFgl56Vo1QRTFKMIfkMpB8xbaQn46aOqk61WR3pSVgmzJFY2wZgOkFna36AUMCDQZmJpqFgAAAABJRU5ErkJggg=='
				/>
				<div className={s.containerBtn}>
					<div
						className={s.admisionBtn}
						onClick={() => handleChoose('psicologia')}
					>
						Psicologia
					</div>
					<div
						className={s.admisionBtn}
						onClick={() => handleChoose('psiquiatria')}
					>
						Psiquiatria
					</div>
				</div>
			</div>
		</div>
	);
};
