import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { Context } from '../../index.js';
import { Dropdown, Row } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: new Date() }])
    }

    const removeinfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Dropdown className='mt-2 mb-2'>
                        <DropdownToggle>Выберите тип</DropdownToggle>
                        <DropdownMenu>
                            {device.types.map(type => {
                                return <DropdownItem key={type.id}>{type.name}</DropdownItem>
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <DropdownToggle>Выберите бренд</DropdownToggle>
                        <DropdownMenu>
                            {device.brands.map(brand => {
                                return <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <FormControl
                        className='mt-3'
                        placeholder={'Введите название устройства'}
                    ></FormControl>
                    <FormControl
                        className='mt-3'
                        placeholder={'Введите стоимость'}
                        type='number'
                    ></FormControl>
                    <FormControl
                        className='mt-3'
                        type='file'
                    ></FormControl>
                    <hr />
                    <Button onClick={addInfo} variant={'outline-dark'}>Добавить новое устройство</Button>
                    {info.map(i => {
                        return <Row className='mt-3' key={i.number}>
                            <Col md={4}>
                                <FormControl placeholder={' Введите характеристики'} />

                            </Col>
                            <Col md={4}>
                                <FormControl placeholder={'Введите описание'} />

                            </Col>
                            <Col md={4}>
                                <Button variant={'outline-danger'} onClick={() => removeinfo(i.number)}>Удалить</Button>

                            </Col>
                        </Row>
                    })}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;