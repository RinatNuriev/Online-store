import React, { useContext } from 'react';
import { Context } from '../index.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useHistory } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts.js';
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setIsUser({})
        user.setIsAuth(false)

    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>Купить</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button onClick={() => history.push(ADMIN_ROUTE)} variant={"outline-light"}>Админ панель</Button>
                        <Button onClick={() => logOut()} variant={"outline-light"} style={{ marginLeft: '20px' }} >Выйти</Button>
                    </Nav> :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизируйтесь</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
})

export default NavBar;