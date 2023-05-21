import Icon from '../Icon';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    gap: 1rem;
`;

const BMILimitationCard = ({icon, title, children}) => {
    return <div>
    <Header><Icon type={icon} /> <h2>{title}</h2></Header>
    <div className="card__body">
        {children}
    </div>
</div>
}

export default BMILimitationCard;