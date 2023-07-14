import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styless'

export function Header () {
    return (
        <Container>
            <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button">
                Nova transação
            </button>
            </Content>
        </Container>
    ) 
} 