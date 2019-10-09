import React from 'react';

import { ListGroup } from 'react-bootstrap';

const GroupTable = (props) => {
  const teams = props.teams;

  return (
    <div className="group-table">
      <ListGroup>
        <ListGroup.Item>{teams[0]}</ListGroup.Item>
        <ListGroup.Item>{teams[1]}</ListGroup.Item>
        <ListGroup.Item>{teams[2]}</ListGroup.Item>
        <ListGroup.Item>{teams[3]}</ListGroup.Item>
      </ListGroup>
    </div>
  )
};

export default GroupTable;
