import eliminar from "../../src/img/eliminar.png"
import '../../src/css/Error.css'
const Error = ({ tol, error }) => {
	return (
		<div role="alert" className={`caja_error ${error ? "activo_error" : ""}`}>
			<img src={eliminar} alt="error" />
			<p className="texto_error">{tol}</p>
		</div>
	)
}
export default Error
