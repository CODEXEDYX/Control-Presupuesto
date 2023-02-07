import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"
import Error from "./Error"
import '../../src/css/FormularioDos.css'
const FormularioDos = ({
	setAnimaForDos,
	setForDos,
	animaForDos,
	forInfo,
	forListadoEditar,
	setForListadoEditar,
}) => {
	const [nombre, setNombre] = useState("")
	const [numero, setNumero] = useState("")
	const [select, setSelelct] = useState("")
	const [error, setError] = useState(false)
	const [id, setId] = useState("")
	const [fecha, setFecha] = useState("")

	useEffect(() => {
		if (Object.keys(forListadoEditar).length > 0) {
			setNombre(forListadoEditar.nombre)
			setNumero(forListadoEditar.numero)
			setSelelct(forListadoEditar.select)
			setId(forListadoEditar.id)
			setFecha(forListadoEditar.fecha)
		}
	}, [forListadoEditar])

	const handleEliminar = (_) => {
		if (handleEliminar) {
			setForListadoEditar({})
			setAnimaForDos(false)
			setTimeout(() => {
				setForDos(false)
			}, 1000)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if ([nombre, numero, select].includes("")) {
			setError(true)
			setTimeout(() => {
				setError("")
			}, 2000)
			return
		}
		forInfo({
			nombre,
			numero,
			select,
			id,
			fecha,
		})

		setAnimaForDos(false)
		setTimeout(() => {
			setForDos(false)
		}, 1000)

		setError(false)
		setNombre("")
		setNumero("")
		setSelelct("")
	}

	return (
		<div className="cont_formulario_dos">
			<form
				onSubmit={handleSubmit}
				className={`formulario_dos ${animaForDos ? "activo_formulario_dos" : ""}`}
			>
				<legend>{forListadoEditar.id ? "Editar gasto" : "Nuevo gasto"}</legend>
				<hr></hr>
				<div className="formulario_grupo_dos">
					<label htmlFor="nombre">Nombre del gasto</label>
					<input
						type="text"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
						id="nombre"
						placeholder="Añade el nombre del gasto"
					/>
				</div>

				<div className="formulario_grupo_dos">
					<label htmlFor="dinero">Cantidad</label>
					<input
						value={numero}
						onChange={(e) => setNumero(Number(e.target.value))}
						type="number"
						id="dinero"
						placeholder="Añade la cantidad del gasto:ej 300"
					/>
				</div>

				<div className="formulario_grupo_dos">
					<label htmlFor="select">Categoria</label>
					<select id="select" value={select} onChange={(e) => setSelelct(e.target.value)}>
						<option value="">{forListadoEditar.id ? "" : "Select"}</option>
						<option value="ahoro">Ahoro</option>
						<option value="comida">Comida</option>
						<option value="casa">Casa</option>
						<option value="gastos">Gastos Varios</option>
						<option value="ocio">Ocio</option>
						<option value="salud">Salud</option>
						<option value="hotel">Hotel</option>
						<option value="edificio">Edificio</option>
						<option value="subscripción">Subscripción</option>
					</select>
				</div>
				<button type="submit">
					{forListadoEditar.id ? "Guaradar cambios" : "Enviar formulario"}
				</button>
				<Error error={error} tol="Todos los campos son obligatorios" />
			</form>
			<FontAwesomeIcon
				onClick={handleEliminar}
				className="icono_formulario_dos"
				icon={faXmark}
			/>
		</div>
	)
}
export default FormularioDos
