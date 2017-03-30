import {connect} from 'react-redux';
import App from '../components/app.js';
import {fetchUsers} from '../action/index.js';

const mapStateToProps = (state) => {
	console.log(state);
	return {
		usersList: state.reducer.usersList,
		error: state.reducer.error
	}
}

const mapDispatchToProps = dispatch => ({
	fetchUsersPending: () => dispath.(fetchUsers.fetchUsersPending())

});

export default connect(mapStateToProps, mapDispatchToProps)(App);