import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import triste from "../../src/img/triste.png"
import '../../src/css/DineroCajaAnimacion.css'
const DineroCaja = ({
	dineroCaja,
	setDineroCaja,
	disponible,
	setDisponible,
	setForListadoA,
	setContenidoDos,
	setNumero,
	setFormularioFiltroA,
}) => {
	const handleSalir = (_) => {
		if (handleSalir) {
			setDisponible(false)
			setDineroCaja(false)
		}
	}

	const handleReset = (_) => {
		if (handleReset) {
			setNumero(0)
			setContenidoDos(false)
			setForListadoA([])
			setFormularioFiltroA([])
		}
	}

	const handleSeguir = (_) => {
		if (handleSeguir) {
			setDineroCaja(false)
			setDisponible(false)
		}
	}

	return (
		<div
		role="alertdialog"
		aria-modal="true"
			className={`cont_dinero_caja ${disponible < 0 ? "cont_dinero_activos" : ""}`}
		>
			<figure
				role="dialog"
				className={`caja_dinero_caja ${dineroCaja ? "cont_dinero_activo" : ""}`}
			>
				<div className="caja_dinero_texto">
					<h2>
						¡Superaste el limite de tu <strong>dinero</strong>!
					</h2>
					<img role="img" loading="lazy" src={triste} alt="emoji triste" />
				</div>
				<p>
					<span>
						Superaste el límite de tu <strong>dinero</strong>, estás en negativo
					</span>
					, elimina un ahorro que tengas para seguir en positivo o Reinicia. Al resetear
					Todos sus datos serán eliminados permanentemente. Esta acción no se puede
					deshacer.
				</p>
				<div className="caja_dinero">
					<button onClick={handleReset} type="button" className="reiniciar_app">
						Resetear por completo la<strong>App</strong>
					</button>
					<button type="button" onClick={handleSeguir} className="salir">
						Seguir utilizando la app
					</button>
				</div>
				<figcaption>
					<FontAwesomeIcon
						onClick={handleSalir}
						className="icono_caja_dinero"
						fontSize={30}
						color="#f8f9fa"
						icon={faXmark}
						title="Salir"
					/>
				</figcaption>
			</figure>
		</div>
	)
}
export default DineroCaja
