import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from 'reactstrap';

const CardGrid = ({ recipe }) => {
  return (
    <Card className="mt-4">
      <CardImg top src={`http://localhost:8000/image/${recipe.image}`} alt={recipe.image} style={{ height: '270px', objectFit: 'cover' }}/>
      <CardBody>
        <CardTitle>
          <h2>
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
          </h2>
        </CardTitle>
        <CardSubtitle>Category : {recipe.category.name}</CardSubtitle>
        <CardText>{recipe.step}</CardText>
      </CardBody>
    </Card>
  )
}

export default CardGrid;