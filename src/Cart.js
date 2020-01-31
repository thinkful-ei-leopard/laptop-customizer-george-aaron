import React from './react';
import Summary from './Summary'



    const summary = Object.keys(this.state.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.state.selected[feature];
        console.log(feature)