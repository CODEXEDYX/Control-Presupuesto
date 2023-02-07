import ListadoElementos from "./ListadoElementos"
import '../../src/css/HeaderDos.css'
const HeaderDos = ({
	forListadoA,
	setForListadoEditar,
	botonEliminar,
	formularioFiltroA,
	formularioFiltro,
}) => {
	return (
		<div className="cont_header_dos">
			{formularioFiltro ? (
				<>
					<h2 className="texto_header_dos">
						{formularioFiltroA.length ? "Gastos" : "No tienes ningún gasto"}
					</h2>
					{formularioFiltroA.map((forLista) => (
						<ListadoElementos
							key={forLista.id}
							forLista={forLista}
							setForListadoEditar={setForListadoEditar}
							botonEliminar={botonEliminar}
						/>
					))}
				</>
			) : (
				<>
					<h2 className="texto_header_dos">
						{forListadoA.length ? "Gastos" : "No tienes ningún gasto"}
					</h2>
					<p className="texto_parrafo_dos">
						{forListadoA.length
							? ""
							: "Aún no tienes ningún gasto agregue un gasto abajo a la derecha"}
					</p>
					{forListadoA.map((forLista) => (
						<ListadoElementos
							key={forLista.id}
							forLista={forLista}
							setForListadoEditar={setForListadoEditar}
							botonEliminar={botonEliminar}
						/>
					))}
				</>
			)}
		</div>
	)
}
export default HeaderDos
