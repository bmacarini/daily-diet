import { Container, Logo, Avatar } from './styles';

import logoImg from '@assets/logo.png';
import userImg from '@assets/user.png';

export function HeaderUser() {

    return (
        <Container>
            <Logo 
                source={logoImg}
            />
            <Avatar
                source={userImg}
            />
        </Container>
    )
}