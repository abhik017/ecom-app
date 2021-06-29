import React from 'react';
import { customerGetItems } from '../../actions/customer-homepage.action';
import { getItemsArray } from '../../reducers/customer-homepage.reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { ItemCard, NavBar } from '../../components';
import { Row, Col } from 'react-bootstrap';

class CustomerHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsArray: []
        }
    }
    componentDidMount() {
        this.props.customerGetItems();
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props !== prevProps) {
            this.setState({
                itemsArray: this.props.itemsArray
            })
        }
    }
    render() {
        const itemsArray = this.props.itemsArray;
        return(
            <>
            {/* {console.log(itemsArray)} */}
            <NavBar/>
            <div className="customer-homepage-container">
                <Row className="items">
                    {
                        itemsArray.map((item) => {
                            // <Col lg={3} md={4} sm={6} xs={12}>
                                <ItemCard/>
                            // </Col>
                        })
                    }
                </Row> 
            </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemsArray: getItemsArray(state)
    };
}



const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        ...bindActionCreators({
            customerGetItems
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerHomePage);