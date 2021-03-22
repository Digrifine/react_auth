import { Container } from 'react-bootstrap';
import './App.css';
import UserForm from './components/UserForm';

function App() {
	return (
		<Container>
			<h3 className="main__header">New user registration</h3>
			<UserForm />
		</Container>
	);
}

export default App;
