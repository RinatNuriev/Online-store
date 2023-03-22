import React, { useContext, useEffect, useState } from 'react';
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
import { fetchTypes, fetchBrand, createDevices } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({ show, onHide }) => {

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrand().then(data => device.setBrands(data))
    }, [])

    const { device } = useContext(Context)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [type, setType] = useState(null)
    const [info, setInfo] = useState([])

    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: new Date() }])
    }

    const removeinfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', 'img')
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevices(formData).then(data => onHide())
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
                        <DropdownToggle>{device.selectedType.name || 'Выберите тип'}</DropdownToggle>
                        <DropdownMenu>
                            {device.types.map(type => {
                                return <DropdownItem onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</DropdownItem>
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <DropdownToggle>{device.selectedBrand.name || 'Выберите бренд'}</DropdownToggle>
                        <DropdownMenu>
                            {device.brands.map(brand => {
                                return <DropdownItem onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</DropdownItem>
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <FormControl
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='mt-3'
                        placeholder={'Введите название устройства'}
                    ></FormControl>
                    <FormControl
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className='mt-3'
                        placeholder={'Введите стоимость'}
                        type='number'
                    ></FormControl>
                    <FormControl
                        className='mt-3'
                        type='file'
                        onChange={selectFile}
                    ></FormControl>
                    <hr />
                    <Button onClick={addInfo} variant={'outline-dark'}>Добавить новое устройство</Button>
                    {info.map(i => {
                        return <Row className='mt-3' key={i.number}>
                            <Col md={4}>
                                <FormControl
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    value={i.title}
                                    placeholder={' Введите характеристики'} />

                            </Col>
                            <Col md={4}>
                                <FormControl
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    value={i.description}
                                    placeholder={'Введите описание'} />

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
                <Button variant={'outline-success'} onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;