import Icon from '../Icon';

const ImproveBMICard = ({ icon, children }) => {
    return <div className='improve-bmi__card'>
        <Icon type={icon} />
        {children}
    </div>
}

export default ImproveBMICard;