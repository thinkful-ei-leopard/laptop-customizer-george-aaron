import React from 'react';
import Summary from './Summary';

class  Total extends React.Component {


// {/* <section className="main__summary"><h2>Your cart</h2> */}


render  ()  {
    const total = Object.keys(this.props.state.selected).reduce((acc, curr) => acc + this.props.state.selected[curr].cost,0);


   return ( <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {this.props.USCurrencyFormat.format(total)}
      </div>
    </div>)

    }}

export default Total;