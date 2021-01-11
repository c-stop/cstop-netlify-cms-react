import React from "react";
import { Link } from "react-router-dom";
import "./Cta.sass"

export default function Cta() {
	return (
		<>
			<div className="container">
				<div className="cta-wrap">
					<div>
						<div className="cta-text">
							<div className="heading-jumbo-small">
								Minimize the risk of Covid-19 on your projects
								<br />
							</div>
							<div className="paragraph-bigger cc-bigger-light">
								With our informed leaders and trained Covid-19 teams, You can minimize
								the risk of br/inging an infection home.
								<br />
							</div>
						</div>
						<Link to="/quote" className="Button">
							<div>Ask Our Team</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
