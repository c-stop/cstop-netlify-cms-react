import React from "react";
import sammMedia from "../../img/clients/cstop_sammMedia.jpg";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

export default function Testimonials() {
	const settings = {
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		speed: 1500,
		autoplaySpeed: 2000,
		variableWidth: true,
		cssEase: "linear",
	};

	return (
		<div className="testimonial-container">
			<div className="label cc-light">Hear it from our clients</div>
			<div className="heading-jumbo-small" style={{marginBottom:"2rem"}}>
				Testimonials <br />
			</div>
			<Slider {...settings}>
				<div className="testimonial-item" style={{marginTop:"2rem"}}>
					<img src={sammMedia} loading="lazy" alt="" className="image-6" style={{margin:" 0 auto"}}/>
					<div>
						<h4 className="heading" style={{textAlign:"center", marginTop:"1rem"}}>SAMM Media ~ André de la Cruz</h4>
						<blockquote className="block-quote">
							&quot; My AD introduced me to Josh and Pepper for my July 27th TV
							commercial in Los Angeles. As we went through the planning stages of my
							shoot, I was impressed with their capabilities and knowledge of the
							health and safety standards as outlined by the unions. Plus, it’s super
							advantageous to have Pepper with a production background and Josh a set
							medic – they are the perfect combo running your production HSS team. They
							pay close attention to the details and plan to the minutia to make sure
							your shoot goes as planned. They worked with us closely to make sure we
							formulated a production plan from check in, identifying department pods,
							br/eakfast and lunch areas, crew zoning and access, and 12+ hours of
							overall sanitation. My crew and I enjoyed having them and thankful for
							keeping us healthy, clean and safe! &quot;
						</blockquote>
					</div>
				</div>
			</Slider>
		</div>
	);
}
