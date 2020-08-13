import React from 'react';
import Button from 'react-bootstrap/Button'

const Card = ({name, email, id, setModalShow, setUserId}) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow'>
			<img alt='photo1' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
				<Button variant="primary" onClick={() => {
					setUserId(id);
					setModalShow(true);
				}}>Details</Button>
			</div>
		</div>
		)
}

export default Card;