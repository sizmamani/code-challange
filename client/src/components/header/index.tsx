import { Header } from './style';
import LogoImage from '../../assets/images/logo.png';

export const TopHeader = () => {
    return (
        <Header>
            <img src={LogoImage} alt='logo' width={87} />
        </Header>
    )
}