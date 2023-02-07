import manoAbajo from "../../src/img/abajo.png"
import '../../src/css/ManoAbajo.css'
const ManoAbajo = (_) => {
	return (
		<div className="caja_mano_abajo">
			<img
				role="img"
				loading="lazy"
				className="mano"
				src={manoAbajo}
				alt="mano aci abajo"
			/>
		</div>
	)
}

export default ManoAbajo
