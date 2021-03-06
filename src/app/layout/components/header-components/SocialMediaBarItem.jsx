import React from 'react'
import styled from 'styled-components'

const AniketosSocialMediaBarItem = styled.a`
	text-decoration: none;
	font-size: 2rem;
	color: var(--secondary-color);
	cursor: pointer;

	transition: transform 0.1s ease-in;

	&:hover {
		transform: translateY(-10%);
		color: var(--accent-color);
	}
`

const SocialMediaBarItem = ({ icon, to }) => {
	return (
		<AniketosSocialMediaBarItem href={to} target="_blank">
			<i className={'fab fa-' + icon}></i>
		</AniketosSocialMediaBarItem>
	)
}

export default SocialMediaBarItem
