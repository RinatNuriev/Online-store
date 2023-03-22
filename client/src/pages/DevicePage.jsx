import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import bigstar from '../assets/bigstar.svg'
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';


const devicePage = () => {
    // const device = { id: 1, name: '12 Pro', price: 20000, rating: 5, img: 'img' }
    // const description = [
    //     { id: 1, title: 'Memory', description: '5 gb' },
    //     { id: 2, title: 'Camera', description: '20mpx' },
    //     { id: 1, title: 'Processor', description: 'M-4' }
    // ]


    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()
   
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container>
            <Row className='mt-4'>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center '>
                        <h2 className='text-center'>{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{ background: `url(${bigstar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex align-items-center justify-content-around'
                        style={{ width: 300, height: 300, fontSize: 32, border: 'solid lightgray 5px' }}>
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>

                </Col>
            </Row>
            <Row className='d-flex flex-column m-1'>
                <h1>Характеристики</h1>
                {device.info.map((info) => {
                    return <Row key={info.id} style={{ background: info.id % 2 === 0 && 'lightgray', padding: 10 }}>
                        {info.title} : {info.description}
                    </Row>
                })}
            </Row>
        </Container>
    );
};

export default devicePage;