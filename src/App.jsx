import Header from "./components/Header"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import { useState, useEffect } from "react"
import FormularioDos from "./components/FormularioDos"

import { nanoid } from "nanoid"
import HeaderDos from "./components/HeaderDos"
import FormularioFiltro from "./components/FormularioFiltro"
import ManoAbajo from "./components/ManoAbajo"


const App = (_) => {
	const [numero, setNumero] = useState(JSON.parse(localStorage.getItem('numero')) ?? 0)

	const [contenidoDos, setContenidoDos] = useState(JSON.parse(localStorage.getItem('contenidoDos')) ?? false)

	const [forListadoA, setForListadoA] = useState(JSON.parse(localStorage.getItem('forListadoA')) ?? [])

	const [forDos, setForDos] = useState(false)

	const [animaForDos, setAnimaForDos] = useState(false)

	const [forListadoEditar, setForListadoEditar] = useState({})

	const [formularioFiltro, setFormularioFiltro] = useState("")

	const [formularioFiltroA, setFormularioFiltroA] = useState([])


	useEffect(() => {
	localStorage.setItem('numero',JSON.stringify(numero))
	}, [numero])

	useEffect(() => {
	localStorage.setItem("contenidoDos", JSON.stringify(contenidoDos))
	}, [contenidoDos])


	useEffect(() => {
	localStorage.setItem("forListadoA", JSON.stringify(forListadoA))
	}, [forListadoA])
	
	const botonEliminar = (id) => {
		const eliminar = forListadoA.filter((bootnEliminar) => bootnEliminar.id !== id)
		setFormularioFiltroA(eliminar)
		setForListadoA(eliminar)
	}

	useEffect( _ => {
		if (Object.keys(forListadoEditar).length > 0) {
			setTimeout(() => {
				setAnimaForDos(true)
			}, 400)
			setForDos(true)
		}
	}, [forListadoEditar])

	const handleIconoPlus = _ => {
		if (handleIconoPlus) {
			setForListadoEditar({})
			setTimeout(() => {
				setAnimaForDos(true)
			}, 400)
			setForDos(true)
		}
	}

	const forInfo = (valor) => {
		if (valor.id) {
			const gastoEdiatarElentos = forListadoA.map((gastoEditar) => gastoEditar.id === valor.id ? valor : gastoEditar)
			setForListadoA(gastoEdiatarElentos)
			setFormularioFiltroA(gastoEdiatarElentos)
			setForListadoEditar({})
		return
		} 
		valor.fecha = Date.now()
		valor.id = nanoid(36)
		setForListadoA([...forListadoA, valor])
	}

	useEffect(() => {
		if(formularioFiltro) {
			const formularioFiltros = forListadoA.filter((forLista) => forLista.select === formularioFiltro,)
			setFormularioFiltroA(formularioFiltros)
		}
	}, [formularioFiltro])

	return (
	<main role="main">
		<section className="cont_1">
			<Header
				numero={numero}
				setNumero={setNumero}
				setContenidoDos={setContenidoDos}
				contenidoDos={contenidoDos}
				forListadoA={forListadoA}
				setForListadoA={setForListadoA}

				setFormularioFiltroA={setFormularioFiltroA}
			/>
			{contenidoDos && (
				<>
					{forListadoA.length ? (
						<>
						<FormularioFiltro
						formularioFiltro={formularioFiltro}
						setFormularioFiltro={setFormularioFiltro}
						
						/>
						</>
						) : null}
					<HeaderDos
						forListadoA={forListadoA}
						setForListadoEditar={setForListadoEditar}
						botonEliminar={botonEliminar}
						formularioFiltro={formularioFiltro}
						formularioFiltroA={formularioFiltroA}
					/>
				</>
			)}
		</section>
		{contenidoDos && (
			<>
				{forDos && (
					<FormularioDos
						setAnimaForDos={setAnimaForDos}
						setForDos={setForDos}
						animaForDos={animaForDos}
						forInfo={forInfo}
						setForListadoEditar={setForListadoEditar}
						forListadoEditar={forListadoEditar}
					/>
				)}
				<div onClick={handleIconoPlus} className="caja_icono">
					<FontAwesomeIcon className="icono" icon={faPlus} />
				</div>

				{forListadoA.length ? (
				<></>
				) : (
				<ManoAbajo/>
				)}
			</>
		)}
	</main>
)
}
export default App
