import React from 'react';
import FeatureList from './FeatureList'


class Feature extends React.Component {
  render() {
  const features = Object.keys(this.props.features).map((feature, idx) => 
    <FeatureList 
      key={idx} 
      feature={feature} 
      idx={idx} 
      features={this.props.features} 
      state={this.props.state} 
      USCurrencyFormat={this.props.USCurrencyFormat}
      updateFeature = {this.props.updateFeature}
      />
  );
  return(
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  )
  };
}

export default Feature;