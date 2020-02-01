import React from 'react';
import Form from './Form'

class FeatureList extends React.Component {
  render() {
  const featureHash = this.props.feature + '-' + this.props.idx;
    const options = this.props.features[this.props.feature].map(item =>
    <Form
      item={item}
      feature={this.props.feature}
      features = {this.props.features} 
      state = {this.props.state} 
      USCurrencyFormat = {this.props.USCurrencyFormat}
      updateFeature = {this.props.updateFeature}
    />
    );
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  };

} 


export default FeatureList