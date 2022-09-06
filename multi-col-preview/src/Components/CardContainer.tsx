import './CardContainer.scss'
import {Card} from './Card'

type CardContainerProps = {}

export const CardContainer = (props: CardContainerProps) => {
	return (
		<>
			<main className='grid-container'>
				<Card className='grid-item card_one' />
				<Card className='grid-item card_two' />
				<Card className='grid-item card_three' />
			</main>
		</>
	)
}