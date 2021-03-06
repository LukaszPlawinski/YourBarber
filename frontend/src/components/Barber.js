import React from 'react'
import {Card,Button} from 'react-bootstrap';

function Barber({barber}) {
     return (
          <Card className="p-4 my-3 mx-3">
               <a href={`/barber/${barber._id}`}>
                    <Card.Img src={barber.image}/>
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                         Some quick example text to build on the card title and make up the bulk of
                         the cards content.
                    </Card.Text>
                    <Button variant="outline-warning">Go somewhere</Button>
                    </Card.Body>
               </a>
          </Card>
     )
}

export default Barber
