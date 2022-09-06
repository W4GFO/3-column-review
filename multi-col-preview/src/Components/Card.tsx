import './Card.scss'

import suv from '../Images/icon-suvs.svg'
import lux from '../Images/icon-luxury.svg'
import sed from '../Images/icon-sedans.svg'

import {DataInfo, Entries} from '../defs'

type CardProps = {
	className:string
}

export const Card = ({className} : CardProps) => {
	function getInfoData(className:string) {
		var info:DataInfo = {title:"", about:"", imgName:"", btnTitle:"", altTag:""}

		if(className.includes('_one') ) {
			info = Entries[0]
			info.imgName = sed
		}
		else if (className.includes('_two') ) {
			info = Entries[1]
			info.imgName = suv
		}
		else if (className.includes('_three') ) {
			info = Entries[2]
			info.imgName = lux
		}

		return info
	}

	const element:DataInfo = getInfoData(className)

	return (
		<>
			<div className={className}>
				<img src={element.imgName} alt={element.altTag} />
				<article>
					<header>{element.title}</header>
					<p>{element.about}</p>
				</article>
				<button onClick={() => {console.log('Learning More!')}}>{element.btnTitle}</button>
			</div>
		</>
	)
}