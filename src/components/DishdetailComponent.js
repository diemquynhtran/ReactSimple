import React, {Component} from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, ListGroup, ListGroupItemText } from 'reactstrap';
class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return <div></div>
        };
    }

    renderComments(dish) {
        if(dish!=null) {
            return (
                <div className="container">
                    <h4>Comment</h4>
                    <ListGroup>
                        {dish.comments.map((comment) => (
                            <ListGroupItemText>
                                <p>{comment.comment}</p>
                                <p>
                                    --{comment.author}, {new Date(comment.date).toDateString()}
                                </p>
                            </ListGroupItemText>
                        ))}
                    </ListGroup>
                </div>
            )
        }
        else {
            return <div></div>
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selected)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selected)}
                    </div>
                
            </div>
            </div>
        )
    }
}

export default DishDetail;