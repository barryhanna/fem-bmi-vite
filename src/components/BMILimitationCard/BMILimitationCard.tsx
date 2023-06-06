import Icon from '../Icon';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    align-items: center;

    h2 {
        text-align: left;
        margin-inline: 0;
    }
`;

const BMILimitationCard = ({ icon, title, children }) => {
    return <div className='limitations-of-bmi__card'>
        <Header><Icon type={icon} /> <h2>{title}</h2></Header>
        <div className="limitations-of-bmi__card-body">
            {children}
        </div>
    </div>
}

export default BMILimitationCard;
