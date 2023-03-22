import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite'
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from '../index.js';


const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ListGroup>
            {device.types.map(type => {
                return <ListGroup.Item
                style={{cursor: 'pointer'}}
                    onClick={() => device.setSelectedType(type)}
                    active={type.id === device.selectedType.id}
                    key={type.id}>
                    {type.name}
                </ListGroup.Item>
            })}
        </ListGroup>
    );
});

export default TypeBar;