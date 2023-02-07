import Formulario from "./Formulario"
import react from "../../src/img/react.png"
import Dinero from "./Dinero"
import '../../src/css/Header.css'
const Header = ({
	numero,
	setNumero,
	contenidoDos,
	setContenidoDos,
	forListadoA,
	setForListadoA,
	setFormularioFiltroA,
}) => {
	return (
		<div className="cont_header">
			<div className="caja_header">
				<h2 className="texto_header">
					<strong>Planificador de gastos</strong>
				</h2>
				<img
					role="img"
					loading="lazy"
					className="img_header"
					src={react}
					alt="log react"
				/>
			</div>
			{contenidoDos ? (
				<>
					<Dinero
						numero={numero}
						forListadoA={forListadoA}
						setForListadoA={setForListadoA}
						setContenidoDos={setContenidoDos}
						setNumero={setNumero}
						setFormularioFiltroA={setFormularioFiltroA}
					/>
				</>
			) : (
				<>
					<Formulario
						numero={numero}
						setContenidoDos={setContenidoDos}
						setNumero={setNumero}
					/>
				</>
			)}
		</div>
	)
}
export default Header
