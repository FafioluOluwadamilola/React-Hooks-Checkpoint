import React from 'react';
import Card from 'react-bootstrap/Card';
import './MovieCard.css'; // Import the CSS file

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Card className="card-container">
      <Card.Img variant="top" src={posterURL} className="card-image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Footer className="card-footer">Rating: {rating}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
