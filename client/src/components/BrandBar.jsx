import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index.js';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const BrandBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <Row className="d-flex">
            {device.brands.map(brand => {
                return <Card
                    style={{ width: 150, cursor: 'pointer' }}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    key={brand.id}
                    className="p-3">
                    {brand.name}
                </Card>
            })}
        </Row>
    );
});

export default BrandBar;