import React, { Component } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardEmploye from "./components/CardEmploye";

class App extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
			person: {
				fullName: "Moussa Sarré",
				bio:
				"Je suis un jeune développeur passionné par la création d'applications web modernes. J'explore constamment de nouvelles technologies et je suis motivé pour relever des défis techniques.",
				imgSrc:
				"https://media.istockphoto.com/id/1369136607/fr/photo/%C3%A9tudiant-homme-noir-mill%C3%A9naire-positif-avec-des-livres-sur-le-jaune.jpg?s=612x612&w=0&k=20&c=JBRyjQLWN8sq5mYRWUqLAWkW8lMTvQewCa9CxsEp1Qo=",
				profession: "Développeur Fullstack JS",
			},
			showCard: false,
			time: 0
    };
	}

	componentDidMount() {
		this.intervalId = setInterval(() => {
			this.setState((prevState) => ({
				time: prevState.time + 1
			}));
		}, 1000);
	}
	
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}
	

	render() {
    	const profile = this.state.person;
    	const show = this.state.showCard;
    	return (
    		<div className="App vh-100 container d-flex flex-column justify-content-center align-items-center ">
        		<div>
    				<Button
            			style={{ width: '18rem' }}
						className="m-2"
						onClick={() => this.setState({ showCard: !show })}>
            		Afficher le Profile
        			</Button>
        		</div>
        		{show && <CardEmploye {...profile}></CardEmploye>}
        		<div>Temps: {this.state.time} secondes</div>
    		</div>
    	        );
	}
}

export default App;
