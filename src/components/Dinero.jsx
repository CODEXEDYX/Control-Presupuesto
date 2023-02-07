import { dinero } from "../helper"
import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import DineroCaja from "./DineroCaja"
import DineroCajaAnimacion from "./DineroCajaAnimacion"
import TextoInfoListadoElemento from "./TextoInfoListadoElemento"
import '../../src/css/Dinero.css'
const Dinero = ({
	numero,
	forListadoA,
	setForListadoA,
	setContenidoDos,
	setNumero,
	setFormularioFiltroA,
}) => {
	const [disponible, setDisponible] = useState(0)
	const [gasto, setGasto] = useState(0)

	const [progres, setProgres] = useState(0)

	const [dineroCaja, setDineroCaja] = useState(false)

	const [dineroCajaAnimacion, setDineroCajaAnimacio] = useState(false)
	const [animacionDineroCaja, setAnimacionDinero] = useState(false)

	const handleReset = (_) => {
		if (handleReset) {
			setTimeout(() => {
				setDineroCajaAnimacio(true)
			}, 100)
			setAnimacionDinero(true)
		}
	}

	setTimeout(() => {
		setDineroCaja(true)
	}, 100)

	useEffect(() => {
		const gastoDisponible = forListadoA.reduce(
			(tol, forLista) => forLista.numero + tol,
			0,
		)

		const disponibleGasto = numero - gastoDisponible

		const progresBar = (((numero - disponibleGasto) / numero) * 100).toFixed(2)

		setTimeout(() => {
			setProgres(progresBar)
		}, 1000)

		setDisponible(disponibleGasto)
		setGasto(gastoDisponible)
	}, [forListadoA])

	return (
		<>
			<div className="cont_dinero">
				<div className="caja_progres">
					<CircularProgressbar
						strokeWidth={9}
						value={progres}
						text={`${progres}% Gastado `}
						className="circular_progressbar"
						styles={buildStyles({
							trailColor: "#212529",
							pathColor: disponible > 100 ? "#009cff" : "#e34949",
							textSize: "10px",
							textColor: "#f8f9fa",
						})}
					/>
				</div>
				<div className="caja_dinero">
					<div className="caja_reset_dinero">
						<button type="button" onClick={handleReset} className="reset_dinero">
							Resetear App
						</button>
					</div>
					<p>
						Presupuesto:<span>{dinero(numero)}</span>
					</p>
					<p>
						Disponible:
						<span className={` ${disponible < 0 ? "disponible_rojo" : ""}`}>
							{dinero(disponible)}
						</span>
					</p>
					<p>
						Gastado:<span>{dinero(gasto)}</span>
					</p>
				</div>
				{forListadoA.length ? <></> : <TextoInfoListadoElemento />}
			</div>
			{dineroCaja && (
				<DineroCaja
					dineroCaja={dineroCaja}
					setDineroCaja={setDineroCaja}
					disponible={disponible}
					setDisponible={setDisponible}
					setForListadoA={setForListadoA}
					setContenidoDos={setContenidoDos}
					setNumero={setNumero}
					setFormularioFiltroA={setFormularioFiltroA}
				/>
			)}
			{animacionDineroCaja && (
				<DineroCajaAnimacion
					setDineroCajaAnimacio={setDineroCajaAnimacio}
					setAnimacionDinero={setAnimacionDinero}
					dineroCajaAnimacion={dineroCajaAnimacion}
					setForListadoA={setForListadoA}
					setContenidoDos={setContenidoDos}
					setNumero={setNumero}
					setFormularioFiltroA={setFormularioFiltroA}
				/>
			)}
		</>
	)
}
export default Dinero
