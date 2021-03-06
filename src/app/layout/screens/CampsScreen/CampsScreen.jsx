import React from 'react'
import ContentContainer from '../ContentContainer'
import ContentSection from '../ContentSection'
import ScreenContainer from '../ScreenContainer'
import './CampScreen.css'
import Video2 from '../videos/video2.mp4'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ImageSliderData } from './Data'
import { ImageSlider } from '../../components'

export const CampLink = styled(Link)`
	display: block;
	text-decoration: none;
	text-align: center;
	color: #fff;
	background: var(--secondary-color);
	border-radius: 10px;
	padding: 15px 25px;
	margin-top: 24px;
`
export const Faerben = styled.span`
	color: var(--text-color);
	font-weight: bold;
`

const CampsScreen = () => {
	return (
		<ScreenContainer>
			<ContentContainer>
				<ReactPlayer
					url={Video2}
					muted={true}
					controls={false}
					playing={true}
					playsinline={true}
					width="100%"
					height="100%"
				/>
				<ContentSection>
					<div className="Container-title2-camps">Tenniscamps</div>
					<div className="Container-main-camps">
						<div className="Container-info4-camps">
							<div className="Container-info-title-camps">
								<b>Informationen zu den Tenniscamps</b>
							</div>
							<div className="Container-info-text-camps">
								{' '}
								Um intensiver, vollumfänglich und täglich
								trainieren zu können, bietet die Tennis Academy
								Yasar in den Baden-Württembergischen Schulferien
								diverse <Faerben>Tenniscamps</Faerben> an.
								<br />
								<br />
								Hier wird in Gruppen mit einem qualifizierten
								Trainer Technik, Taktik und Matchsituation
								intensiv trainiert. Ebenso wird die körperliche
								Fitness gestärkt, die für die erforderliche
								Kraft, Koordination, Beweglichkeit, Ausdauer und
								Schnelligkeit sorgt.
								<br />
								<br />
								Auf unseren Anlagen ist sowohl ein{' '}
								<Faerben>Indoor Training</Faerben> in der
								Tennishalle beim Injoy Fitness in Stockach
								möglich als auch ein{' '}
								<Faerben>Outdoor Training</Faerben> beim TC
								Stockach.
								<br />
								<br />
								Bei Bedarf stellen wir euch die Schläger von
								unserem Sponsor Tecnifibre gerne zur Verfügung.
								Diese müssen nach dem Training wieder zurück
								gebracht werden.
								<br />
								<br />
								Bitte bringt euer eigenes Essen und Trinken mit
								zum Training.
								<br />
								<br />
								<Faerben>Wir freuen uns auf Euch!</Faerben>
								<br />
								<br />
								<div className="Info-text-title0-camps">
									<b>
										Zielgruppe: Die Jüngsten (4-6 Jahre)
										&nbsp;
										<i className="fas fa-child"></i>
									</b>
									<hr />
								</div>
								<ul className="liste0-camps">
									<li>
										Grundlagentraining für die motorische
										Entwicklung. Es werden spielerisch
										Ballgefühl, Koordination und soziales
										Verhalten im Einzel- und Gruppentraining
										vermittelt.
									</li>
								</ul>
								<br />
								<br />
								<div className="Info-text-title0-camps">
									<b>
										Zielgruppe: Die Kleinen (6-8 Jahre)
										&nbsp;
										<i className="fas fa-child"></i>
									</b>
									<hr />
								</div>
								<ul className="liste0-camps">
									<li>
										Weiterentwicklung der motorischen
										Fähigkeiten. Es werden die ersten
										Tennisschläge unter altersgerechten
										Spielbedingungen (Kleinfeld,
										druckreduzierte Bälle etc.) erlernt.
									</li>
								</ul>
								<br />
								<br />
								<div className="Info-text-title0-camps">
									<b>
										Zielgruppe: Die Talentierten (7-10
										Jahre) &nbsp;
										<i className="fas fa-child"></i>
									</b>
									<hr />
								</div>
								<ul className="liste0-camps">
									<li>
										Erweitertes Schlagtraining mit ersten
										taktischen Inhalten. Das spielerische
										Erlernen der Zählweise beim
										Punkte-Ausspielen soll den Übergang vom
										Kleinfeld zum Mid-Court und später ins
										Großfeld erleichtern.
									</li>
								</ul>
								<br />
								<br />
								<div className="Info-text-title0-camps">
									<b>
										Zielgruppe: Mannschaftsspieler &
										Turnierspieler &nbsp;
										<i className="fas fa-users"></i>
									</b>
									<hr />
								</div>
								<ul className="liste0-camps">
									<li>
										Gezieltes Technik- und Taktiktraining
										anhand von Spielsituationen, (Einzel-
										und Doppel-) Matchtraining sowie
										Stärkung der mentalen Fähigkeiten.
									</li>
								</ul>
							</div>
						</div>

						<div className="Container-info5-camps">
							<div className="Container-info-title-camps">
								<b>Termine & Kosten</b>
							</div>

							<div className="Container-info-text0-camps">
								<div className="Info-text-title0-camps">
									<b>
										Unsere nächsten Tenniscamps &nbsp;
										<i className="fas fa-calendar-alt"></i>
									</b>
									<hr />
								</div>
								<ul className="liste0-camps">
									<li>
										Pfingsten: Camp 1 | 24.05. – 28.05.2021
									</li>
									<li>Sommer: Camp 2 | 02.08 – 06.08.2021</li>
									<li>Sommer: Camp 3 | 06.09 – 10.09.2021</li>
									<li>
										Herbst: Camp 4 | 01.11. – 04.11.2021
									</li>
								</ul>
								<br />
								<div className="Info-text-title0-camps">
									<b>
										Tenniscamps Kosten &nbsp;
										<i className="fas fa-coins"></i>
									</b>
									<hr />
								</div>
								<ul className="liste0-camps">
									<li>Camp 1 | 200€</li>
									<li>Camp 2 | 200€</li>
									<li>Camp 3 | 200€</li>
									<li>Camp 4 | 160€</li>
								</ul>
								<br />
								Die Bezahlung erfolgt bei den Tenniscamps, Bar
								am ersten Tag. Alternativ ist auch eine
								Überweisung an folgendes Konto möglich:
								<br />
								<br />
								<ul className="liste0-camps">
									<b>
										<li>Kontoinhaber: Ajdin Yasar</li>
										<li>Sparkasse Hegau-Bodensee</li>
										<li>
											IBAN: DE87 6925 0035 1055 3931 83
										</li>
										<li>BIC: SOLADES1SNG</li>
										<br />
									</b>
									Als Verwendungszweck bitte das jeweilige
									Camp mit der entsprechenden Nummer angeben.
								</ul>
								<br />
								<div className="Info-text-title0-camps">
									<b>
										Tenniscamps Trainingszeiten &nbsp;
										<i className="fas fa-clock"></i>
									</b>
									<hr />
								</div>
								<ul className="liste0-camps">
									<li>Trainingsbeginn: 09:00 - 11:00 Uhr</li>
									<li>Pause: 11:00 - 11:30 Uhr</li>
									<li>Trainingsende: 11:30 - 13:30 Uhr</li>
								</ul>
							</div>
							<div className="Container-button-camps">
								<CampLink to="/anmeldungcamps">
									Zur Anmeldung
								</CampLink>
							</div>
						</div>
					</div>
					<ImageSlider
						slides={ImageSliderData}
						incrementRate={5000}
					/>
				</ContentSection>
			</ContentContainer>
		</ScreenContainer>
	)
}

export default CampsScreen
