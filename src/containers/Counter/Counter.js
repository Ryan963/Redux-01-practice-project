import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
   

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter}  />
                <hr/>
                <button onClick= {() => this.props.onStoreResults(this.props.ctr)}>Store results</button>
                <ul>
                    {this.props.storedResults.map(strResults => (
                        <li onClick= {() => this.props.onDeleteResults(strResults.id)} key= {strResults.id}>{strResults.value}</li>
                    ))}
                    
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, number: 5}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, number: 5}),
        onStoreResults: (result) => dispatch({type: actionTypes.STORE_RESULTS, result}),
        onDeleteResults: (id) => dispatch({type: actionTypes.DELETE_RESULTS, id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);