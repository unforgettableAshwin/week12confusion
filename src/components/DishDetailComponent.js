import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) { super(props); }

    render() {
        const comments = this.props.dish.comments.map((comment) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={comment.id}                            >
                        <CardBody>
                            <CardText>{comment.comment}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        const menu = "const menu ashwin";
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Card>
                            <CardBody>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-sm">
                        {comments}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;