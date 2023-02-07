import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Error from "./Error"
import '../../src/css/Formulario.css'
const Formulario = ({ setNumero, numero, setContenidoDos }) => {
	const [icono, setIcono] = useState("")
	const [error, setError] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!Number(numero) || Number(numero) < 0) {
			setError(true)
			setTimeout(() => {
				setError("")
			}, 3000)
			return
		}
		setError(false)
		setContenidoDos(true)
	}

	const handleIcono = (_) => {
		if (!Number(numero) || Number(numero) < 0) {
			setIcono(false)
			return
		}
		setIcono(true)
	}

	return (
		<div className="cont_header cont_formulario">
			<form
				onMouseOver={handleIcono}
				onKeyUp={handleIcono}
				onSubmit={handleSubmit}
				className="formulario"
				action=""
			>
				<div className="formulario_grupo">
					<span>
						<label htmlFor="numero">Definir Presupesto</label>
					</span>
					<span>
						<input
							type="number"
							placeholder="Introduzca el presupesto"
							value={numero}
							onChange={(e) => setNumero(Number(e.target.value))}
							id="numero"
						/>
					</span>
					<span>
						<FontAwesomeIcon
							className={`icono_formulario ${icono ? "activo_icono" : ""}`}
							icon={faCircleCheck}
						/>
					</span>
				</div>
				<span>
					<button type="submit">
						<span>Añadir</span>
					</button>
				</span>
			</form>
			<span>
				<Error tol="No es un presupuesto válido" error={error} />
			</span>
		</div>
	)
}
export default Formulario
