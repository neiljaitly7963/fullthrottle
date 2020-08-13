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
			robots: users,
			searchfield: '',
			modalShow: false,
			userId: 0,
			date: new Date(),
			currentuser: {},
			timedatas: [{
                          "startime":"",
                          "endtimne":''
                      }]
		}
	}

	// componentDidMount(){
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then(response => response.json())
	// 	.then(users => this.setState({robots:users}));
	// }

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	setModalShow = (value) => {
    	this.setState({modalShow: value})
  	}

  	setUserId = (id) => {
  		for (var i = 0; i < this.state.robots.length; i++) {
  			if (this.state.robots[i].id === id) {
  				this.setState({currentuser: this.state.robots[i]}, () => {
  					  		for (var j = 0; j < this.state.currentuser.activity_periods.length; j++) {
  								if (this.state.currentuser.activity_periods[j].date === String(this.state.date).substr(4,11)) {
  									this.setState({timedatas: this.state.currentuser.activity_periods[j].time}, () => console.log(this.state.timedatas[0]))
  								}
  							}
  				})
  			}
  		}





  		this.setState({userId: id})
  	}


  	onChange = (date) => {
  		this.setState({ date })
  		console.log(this.state.date)
  	}

	render() {
			const {robots, searchfield} = this.state;
			const filteredRobots = robots.filter(robot => {
				return robot.name.toLowerCase().includes(searchfield.toLowerCase())
			})
			return !robots.length ?
			<h1>Loading</h1> :
			(
			  	<div className='tc'>
					<h1 className="f2">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />

					<Scroll>
						<ErrorBoundry>
				  			<CardList robots={filteredRobots} setModalShow={this.setModalShow} setUserId={this.setUserId} />
				  			<UserModal
          						show={this.state.modalShow}
          						onHide={() => this.setModalShow(false)}
          						userId={this.state.userId}
          						users={this.state.robots}
          						date={this.state.date}
          						currentuser={this.state.currentuser}
          						timedatas={this.state.timedatas}
          						onChange={this.onChange}
        					/>
				  		</ErrorBoundry>
				  	</Scroll>
			  	</div>
		)
			
		}
}

export default App;