import React, {Component} from 'react';
import request from 'superagent'

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ''
		}
		this.change = this.change.bind(this);
		//this vnutri klassa
		this.sendNewUser = this.sendNewUser.bind(this)

	}
	change(e) {
		this.setState({
			name: e.target.value
		})
	}
	sendNewUser( {
		request.post('/users')
				.send(this.state.name)
				.end((err, res) => {
					if(err) return console.log(err)

						console.log(res.body)
				})
	})

	render(){
		return(
			<div>
			 <input 
			 type="text"
			 className="nameInput"
			 value={this.state.name}
			 onChange={this.change} />

			  <input 
			  type="submit" 
			  value="Добавить" />
			</div>
			 )
	}
}