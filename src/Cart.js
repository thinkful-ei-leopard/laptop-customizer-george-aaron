import React from './react';
import Summary from './Summary'

function Cart(props) {
const total = Object.keys(this.state.selected).reduce((acc, curr) => acc + this.state.selected[curr].cost,0);


return  (<section className="main__summary"><h2>Your cart</h2>

    {Object.keys(this.state.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = this.state.selected[feature];


return <Summary USCurrencyFormat={props.USCurrencyFormat} featureHash={featureHash} selectedOption={selectedOption} feature={feature}/>;

    })}

    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {props.USCurrencyFormat.format(total)}
      </div>
    </div>
  </section>)


}

export default Cart;