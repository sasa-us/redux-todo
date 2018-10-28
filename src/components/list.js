import React, {Component} from 'react';
import { connect} from 'react-redux';
import { getData } from '../actions'
class List extends Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {

        console.log('LIST', this.props.list);
        const listElement = this.props.list.map(item => {
            return <li key={item._id} className="collection-item">{item.title}</li>
        } );
        return (
            <div>
                <h1 className="center">To do List now with Redux</h1>
                <ul className="collection">
                    {listElement}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('map to props ', state);
    return {
        list: state.list.all
    };
}
export default connect(mapStateToProps, {getData: getData} )(List);