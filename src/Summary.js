import React from 'react';
import Total from './Total'
import Options from './Options'

class  Summary extends React.Component {
    
    render () {
        const summary = Object.keys(this.props.state.selected).map((feature, idx) => 
            <Options 
            feature={feature}
            idx={idx}
            state={this.props.state}
            USCurrencyFormat={this.props.USCurrencyFormat}
            />);
    

    return (
        <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total
          state={this.props.state}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      </section>
    );
    }

}

  
export default Summary;