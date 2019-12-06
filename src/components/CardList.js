import React from 'react';
import Cards from './Cards';
import Container from 'react-bootstrap/Container';

class CardList extends React.Component {
    render() {
        return (
            <Container>
                {this.props.profiles.map(profile => <Cards {...profile}/>)}
            </Container>
        );
    }
}

export default CardList;