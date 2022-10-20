import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar({setFormOpen}) {
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='assets/logo.png' alt='logo' style={{marginRight: 15}} />
                    Re-vents
                </Menu.Item>
                <Menu.Item name='Events' />
                <Menu.Item>
                    <Button positive content='Create Event' onClick={() => setFormOpen(true)} />
                </Menu.Item>
                <Menu.Item position="right">
                    <Button basic inverted content='Login' />
                    <Button basic inverted content='Register' style={{marginLeft: 15}} />
                </Menu.Item>
            </Container>
        </Menu>
    )
}