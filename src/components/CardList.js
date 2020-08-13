import React from 'react';
import Card from './Card';
const CardList = ({robots, setModalShow, setUserId, setCurrentuser}) => {
	
	return(
		<div>
			{
				robots.map(user => {
				return  (
					<Card 
						key={user.id} 
						id={user.id} 
						name={user.name} 
						email={user.email}
						setModalShow={setModalShow}
						setUserId={setUserId}
						setCurrentuser={setCurrentuser}
					/>
				)
				})
			}
		</div>
	)
}

export default CardList;