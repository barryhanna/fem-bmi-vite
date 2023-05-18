import Icon from '../Icon';

const ImproveBMICard = ({ icon, children }) => {
    return <div className='improve-bmi__card'>
        <pre>{JSON.stringify(icon, null, 2)}</pre>
        <Icon type={icon} />
        {children}
    </div>
}

export default ImproveBMICard;