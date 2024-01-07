import { Card } from "react-bootstrap";

function CardEmploye({imgSrc,fullName,profession,bio}) {
	return (
        <>
            <Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={imgSrc} />
					<Card.Body>
        				<Card.Title><h2>{fullName}</h2></Card.Title>
						<Card.Title><h5>{profession}</h5></Card.Title>
        				<Card.Text>{bio}</Card.Text>
					</Card.Body>
    		</Card>
        </>
    );
}
export default CardEmploye;