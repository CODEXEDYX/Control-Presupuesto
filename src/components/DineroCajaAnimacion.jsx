import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import triste from "../../src/img/triste.png"
import '../../src/css/DineroCajaAnimacion.css'
const DineroCajaAnimacion = ({
	setDineroCajaAnimacio,
	setAnimacionDinero,
	dineroCajaAnimacion,
	setForListadoA,
	setContenidoDos,
	setNumero,
	setFormularioFiltroA,
}) => {
	const handleReset = (_) => {
		if (handleReset) {
			setNumero(0)
			setContenidoDos(false)
			setForListadoA([])
			setFormularioFiltroA([])
		}
	}

	const handleEliminar = (_) => {
		if (handleEliminar) {
			setTimeout(() => {
				setAnimacionDinero(false)
			}, 1000)
			setDineroCajaAnimacio(false)
		}
	}

	const handleSeguir = (_) => {
		if (handleSeguir) {
			setTimeout(() => {
				setAnimacionDinero(false)
			}, 1000)
			setDineroCajaAnimacio(false)
		}
	}

	return (
		<div role="alertdialog" aria-modal="true" className="cont_dinero_caja_animacion">
			<figure
			role="dialog"
				className={` ${dineroCajaAnimacion ? "caja_dinero_activo_animacion" : ""}`}
			>
				<div className="caja_dinero_animacion_texto">
					<h2>¿Deseas resetear por completo la app?</h2>
					<img role="img" loading="lazy" src={triste} alt="emoji triste" />
				</div>
				<p>
					Al reiniciarr Todos sus datos serán eliminados permanentemente. Esta acción no
					se puede deshacer
				</p>
				<figcaption>
					<FontAwesomeIcon
						onClick={handleEliminar}
						title="Salir"
						color="#ffff"
						icon={faXmark}
						fontSize={30}
					/>
				</figcaption>
				<div className="dinero_caja_animacion_boton">
					<button onClick={handleReset} className="reiniciar_app" type="button">
						Resetear por completo la <strong>app</strong>
					</button>
					<button onClick={handleSeguir} className="salir" type="button">
						Seguir utilizando la app
					</button>
				</div>
			</figure>
		</div>
	)
}
export default DineroCajaAnimacion
