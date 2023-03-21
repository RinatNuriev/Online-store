import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { Button } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location);

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}>


            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <FormControl
                        className='mt-3'
                        placeholder='Введите почту'
                    />
                    <FormControl
                        className="mt-3 "
                        placeholder='Введите пароль'
                    />

                    <Row className="d-flex justify-content-between mt-3">

                        <Button style={{ width: 395, margin: 'auto' }} className="mb-3" variant={"outline-success"}>
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрирутесь</NavLink>
                            </div> :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Авторизируйтесь</NavLink>
                            </div>
                        }

                    </Row>

                </Form>

            </Card>



        </Container>
    );
};

export default Auth;