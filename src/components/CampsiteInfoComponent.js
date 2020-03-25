import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// declare a child class called CampsiteInfo
class CampsiteInfo extends Component {
    constructor(props) {
        super(props)
    }

    // create a method called renderCampsite that returns and displays a card using props from the campsite parameter
    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    // create a method called renderCampsite that returns and displays a card using props from the campsite parameter
    renderComments(comments) {
        if(comments) {
            return(
                    <div className="col-md-5 m-1">
                        <h4>Comments</h4>
                        {comments.map(comment => {
                                return (
                                <div key={comment.id}>
                                    <span>{comment.text}</span>
                                    <br/>
                                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </div>
                                )
                            })}
                    </div>
                )
            } else {
                return (
                <div></div>
                )
            }
        }

    render() {
        if(this.props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderCampsite(this.props.campsite)}
                        {this.renderComments(this.props.campsite.comments)}
                    </div>
                </div>
            ) 
        } else {
            return (
                <div></div>
            )
        }
    }
}

// export named module, component called CampsiteInfo
export default CampsiteInfo