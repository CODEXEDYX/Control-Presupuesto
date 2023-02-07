
import '../../src/css/FormularioFiltro.css'
const FormularioFiltro = ({ setFormularioFiltro, formularioFiltro }) => {
	return (
		<div className="cont_formulario_filtro">
			<form className="formulario_filtro" action="">
				<div className="formulario_grupo_filtro">
					<label htmlFor="filtro">Filtrar Gasto</label>
					<select
						id="filtro"
						value={formularioFiltro}
						onChange={(e) => setFormularioFiltro(e.target.value)}
					>
						<option value="">--Todas las categorias--</option>
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
			</form>
		</div>
	)
}
export default FormularioFiltro
