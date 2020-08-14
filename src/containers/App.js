import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import UserModal from '../components/UserModal'
import ErrorBoundry from '../components/ErrorBoundry';
import 'react-calendar/dist/Calendar.css';
import { users } from '../components/users';

class App extends Component {
	constructor() {
		super()
		this.state = {
			users: users,
			searchfield: '',
			modalShow: false,
			userId: 0,
			date: new Date(),
			currentuser: {},
			timedatas: []
		}
	}


	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}


	setModalShow = (value) => {
    	this.setState({modalShow: value})
  	}


  	setUserId = (id) => {
	  	for (var i = 0; i < this.state.users.length; i++) {
	  		if (this.state.users[i].id === id) {
	  			var currentuser = this.state.users[i]
	  				for (var j = 0; j < currentuser.activity_periods.length; j++) {
	  					if (currentuser.activity_periods[j].date === String(this.state.date).substr(4,11)) {
	  						var timedatas = currentuser.activity_periods[j].time
	  					}
	  					this.setState({timedatas: timedatas, currentuser: currentuser, userId: id})
	  				}
	  		}
	  	}
	 }


	// onChange = date => this.setState({ date })


	onClickDay = (date) => {
		for (var k = 0; k < this.state.currentuser.activity_periods.length; k++) {
	  		if (this.state.currentuser.activity_periods[k].date === String(date).substr(4,11)) {
	  			var timedatas = this.state.currentuser.activity_periods[k].time
	  		}
	  	this.setState({timedatas: timedatas, date: date})			
	  	}
	}

	
  	newDate = () => console.log(this.state.date)


	render() {
			const {users, searchfield} = this.state;
			const filteredUsers = users.filter(user => {
				return user.name.toLowerCase().includes(searchfield.toLowerCase())
			})
			return !users.length ?
			<h1>Loading</h1> :
			(
			  	<div className='tc'>
					<h2 className="f2">Users Data</h2>
					<SearchBox searchChange={this.onSearchChange} />

					<Scroll>
						<ErrorBoundry>
				  			<CardList users={filteredUsers} setModalShow={this.setModalShow} setUserId={this.setUserId} />
				  			<UserModal
          						show={this.state.modalShow}
          						onHide={() => this.setModalShow(false)}
          						date={this.state.date}
          						timedatas={this.state.timedatas}
          						onChange={this.onChange}
          						onClickDay={this.onClickDay}
          						currentuser={this.state.currentuser}
        					/>
				  		</ErrorBoundry>
				  	</Scroll>
			  	</div>
		)
		}
}

export default App;