import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import { Context } from '../index.js';
import DeviceItem from './DeviceItem.jsx';

const DeviceList = () => {
    const { device } = useContext(Context)
    return (
        <Row>
            {device.devices.map(device => {
                return <DeviceItem key={device.id} device={device} />
            })}
        </Row>
    );
};

export default DeviceList;