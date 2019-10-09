import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

class Randomizer extends Component {
  constructor() {
    super();
    this.state = {
      groupA: ['G2 Esports', 'Griffin', 'Cloud 9', 'Hong Kong Attitude'],
      groupB: ['FunPlus Phoenix', 'J Team', 'GAM Esports', 'Splyce'],
      groupC: ['SK Telecom T1', 'Fnatic', 'Royal Never Give Up', 'Clutch Gaming'],
      groupD: ['Team Liquid', 'ahq e-Sports Club', 'Invictus Gaming', 'DAMWON Gaming']
    };

    this.randomizePicks = this.randomizePicks.bind(this);
  }

  randomize(group) {
    let counter = group.length;

    while (counter > 0) {
      let i = Math.floor(Math.random() * counter);
      counter--;

      let temp = group[counter];
      group[counter] = group[i];
      group[i] = temp;
    };

    return group;
  }

  randomizePicks() {
    const { groupA, groupB, groupC, groupD } = this.state;

    const newA = this.randomize(groupA);
    const newB = this.randomize(groupB);
    const newC = this.randomize(groupC);
    const newD = this.randomize(groupD);

    this.setState({
      groupA: newA,
      groupB: newB,
      groupC: newC,
      groupD: newD,
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="randomizer">
        <Button variant="outline-danger" onClick={this.randomizePicks}>RANDOM</Button>
      </div>
    )
  }

};

export default Randomizer;
