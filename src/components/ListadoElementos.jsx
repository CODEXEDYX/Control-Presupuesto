import ahoro from "../../src/img/ahoro.png"
import comida from "../../src/img/comida.png"
import casa from "../../src/img/casa.png"
import gastos from "../../src/img/gasto.png"
import ocio from "../../src/img/ocio.png"
import salud from "../../src/img/salud.png"
import hotel from "../../src/img/hotel.png"
import edificio from "../../src/img/edificio.png"
import subscripción from "../../src/img/subscripcion.png"
import '../../src/css/ListadoElemntos.css'
import { fechas } from "../helper"
import { dinero } from "../helper"
import { useState } from "react"
import {
	SwipeAction,
	SwipeableList,
	SwipeableListItem,
	LeadingActions,
	TrailingActions,
} from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"

const imagenes = {
	ahoro: ahoro,
	comida: comida,
	casa: casa,
	gastos: gastos,
	ocio: ocio,
	salud: salud,
	hotel: hotel,
	edificio: edificio,
	subscripción: subscripción,
}

const ListadoElementos = ({ forLista, setForListadoEditar, botonEliminar }) => {
	const [listadoElementos, setListadoElementos] = useState(false)
	const { nombre, numero, select, id, fecha } = forLista

	setTimeout(() => {
		setListadoElementos(true)
	}, 500)

	const trailingActions = (_) => (
		<TrailingActions>
			<SwipeAction destructive={true} onClick={() => botonEliminar(id)}>
				Eliminar
			</SwipeAction>
		</TrailingActions>
	)

	const leadingActions = (_) => (
		<LeadingActions>
			<SwipeAction onClick={() => setForListadoEditar(forLista)}>Editar</SwipeAction>
		</LeadingActions>
	)

	return (
		<>
			<SwipeableList>
				<SwipeableListItem
					leadingActions={leadingActions()}
					trailingActions={trailingActions()}
				>
					<div
						className={`cont_listado_elementos cont_header_dos ${
							listadoElementos ? "activo_listado_elementos" : ""
						}`}
					>
						<div className="caja_listado_img">
							<img role="img" loading="lazy" src={imagenes[select]} alt="" />
						</div>

						<div className="caja_listado_elementos_lista">
							<div className="caja_parrafo_elementos">
								<p className="parrafo_nombre">{nombre}</p>
								<p className="parrafo_select">{select}</p>
							</div>
							<p className="fecha_lista">{fechas(fecha)}</p>
						</div>

						<div className="caja_listado_elementos_dinero">
							<p className="numero_dinero_lista">{dinero(numero)}</p>
						</div>
						<div className="caja_listado_boton">
							<button
								onClick={() => setForListadoEditar(forLista)}
								className="listado_boton_editar"
							>
								Editar
							</button>
							<button onClick={() => botonEliminar(id)} className="listado_boton_eliminar">
								Eliminar
							</button>
						</div>
					</div>
				</SwipeableListItem>
			</SwipeableList>
		</>
	)
}
export default ListadoElementos
