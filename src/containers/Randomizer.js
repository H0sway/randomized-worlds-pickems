import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GroupTable from '../components/GroupTable';

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
    console.log('FREE HONG KONG!');
  }

  render() {
    console.log(this.state);
    const { groupA, groupB, groupC, groupD } = this.state;

    return (
      <div className="randomizer">
        <Button variant="danger" onClick={this.randomizePicks}>BLESS RNG</Button>

        <div className="groups-container">
          <Row>
            <Col xs={12} md={6}>
              <h2>Group A</h2>
              <GroupTable teams={groupA} />
            </Col>
            <Col xs={12} md={6}>
              <h2>Group B</h2>
              <GroupTable teams={groupB} />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <h2>Group C</h2>
              <GroupTable teams={groupC} />
            </Col>
            <Col xs={12} md={6}>
              <h2>Group D</h2>
              <GroupTable teams={groupD} />
            </Col>
          </Row>
        </div>
      </div>
    )
  }

};

export default Randomizer;
