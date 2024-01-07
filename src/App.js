import React, { Component } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardEmploye from "./components/CardEmploye";

class App extends Component {
  // Constructeur du composant, initialise le state
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Moussa Sarré",
        bio: "Je suis un jeune développeur passionné par la création d'applications web modernes. J'explore constamment de nouvelles technologies et je suis motivé pour relever des défis techniques.",
        imgSrc: "https://media.istockphoto.com/id/1369136607/fr/photo/%C3%A9tudiant-homme-noir-mill%C3%A9naire-positif-avec-des-livres-sur-le-jaune.jpg?s=612x612&w=0&k=20&c=JBRyjQLWN8sq5mYRWUqLAWkW8lMTvQewCa9CxsEp1Qo=",
        profession: "Développeur Fullstack JS",
      },
      showCard: false,
      time: 0
    };
  }

  // Méthode du cycle de vie : appelée après le rendu initial du composant
  componentDidMount() {
    // Initialisation de l'intervalle pour mettre à jour le temps chaque seconde
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1
      }));
    }, 1000);
  }

  // Méthode du cycle de vie : appelée avant le démontage du composant
  componentWillUnmount() {
    // Nettoyage de l'intervalle pour éviter les fuites de mémoire
    clearInterval(this.intervalId);
  }

  // Méthode de rendu du composant
  render() {
    // Extraction des données du state pour une utilisation plus facile
    const profile = this.state.person;
    const show = this.state.showCard;

    return (
      <div className="App vh-100 container d-flex flex-column justify-content-center align-items-center ">
        <div>
          {/* Bouton pour afficher/cacher le profil en inversant la valeur de showCard */}
          <Button
            style={{ width: '18rem' }}
            className="m-2"
            onClick={() => this.setState({ showCard: !show })}
          >
            Afficher le Profile
          </Button>
        </div>
        
        {/* Affiche le composant CardEmploye uniquement si showCard est vrai */}
        {show && <CardEmploye {...profile}></CardEmploye>}

        {/* Affiche le temps écoulé en secondes */}
        <div>Temps: {this.state.time} secondes</div>
      </div>
    );
  }
}

export default App;
