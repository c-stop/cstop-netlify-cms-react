import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./ClientLogos.sass"

export default function ClientLogos() {


	const settings = {
		infinite: true,
		className: "center",
      	centerMode: true,
		autoplay: false,
		dots: true,
		speed: 800,
		variableWidth: true,
		cssEase: "linear",
		slidesToShow: 3,
		slidesToScroll: 3,
		rows: 2,
		adaptiveHeight: true,
	};

	return (
		<div className="section">
			<div className="section-heading-wrap">
				<h2 className="heading-jumbo-small">OUR CLIENTS</h2>
			</div>

			<Slider {...settings}>

				<img
					src="./cstop_apple.jpg"
					loading="lazy"
					id="w-node-bbf2de7b2e8a-2b4c63ca"
					alt=""
					className="client-logo-img"
				/>
				<img
					src="images/cstop_zenni.jpg"
					className="client-logo-img"
					loading="lazy"
					alt=""
				/>
				<img
					src="images/cstop_proof.jpg"
					className="client-logo-img"
					loading="lazy"
					alt=""
				/>
				<img
					src="images/cstop_singleCare.jpg"
					className="client-logo-img"
					loading="lazy"
					alt=""
				/>
				<img
					src="images/cstop_us.jpg"
					className="client-logo-img"
					loading="lazy"
					alt=""
				/>
				<img
					src="images/cstop_toyota.jpg"
					className="client-logo-img"
					loading="lazy"
					alt=""
				/>
				<img
					src="images/cstop_sagAftra.jpg"
					className="client-logo-img"
					loading="lazy"
					alt=""
				/>
				<img
					src="images/cstop_ImageLocations.jpg"
					className="client-logo-img"
					loading="lazy"
					alt=""
				/>
				<img
					src="images/cstop_Quixote.jpg"
					className="client-logo-img"
					loading="lazy"
					alt=""
				/>
				<img
					src="images/cstop_prettyBird.jpg"
					className="client-logo-img"
					loading="lazy"
					alt=""
				/>
				<img
					src="images/cstop_partizan.jpg"
					className="client-logo-img"
					loading="lazy"
					alt=""
				/>
				<img
					src="images/cstop_IATSE.jpg"
					className="client-logo-img"
					loading="lazy"
					alt=""
				/>
				<img
					src="images/cstop_fb.jpg"
					className="client-logo-img"
					loading="lazy"
					id="w-node-3fb85b1e232e-2b4c63ca"
					alt=""
				/>
				<img
					src="images/cstop_1820.jpg"
					className="client-logo-img"
					loading="lazy"
					id="w-node-c7d10338b1f9-2b4c63ca"
					alt=""
				/>
				<img
					src="images/cstop_alteredLa.png"
					className="client-logo-img"
					loading="lazy"
					id="w-node-35a111ae09e5-2b4c63ca"
					alt=""
				/>
			</Slider>
			<div className="divider"></div>
		</div>
	);
}
