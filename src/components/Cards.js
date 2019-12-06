import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Cards extends React.Component {
    render() {
        const profile = this.props;

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="#" /*{profile.avatar_url}*/ />
                <Card.Body>
                    <Card.Title>{profile.name}</Card.Title>
                    <Card.Text>
                        {profile.company}
                    </Card.Text>

                </Card.Body>
            </Card>
        );
    }
}

export default Cards;