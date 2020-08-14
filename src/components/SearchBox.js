import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
			<div className='pa2'>
				<input 
				className='pa2 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search Users' 
				onChange={searchChange}
				/>
			</div>
		);
}

export default SearchBox;