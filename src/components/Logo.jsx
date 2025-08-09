import Dealrize from '../assets/Logo/Dealrize.png'
const Logo = ({
    className = '',
    width = '',
    height = '',
    ...props
}) => {
  return (
    <img {...props} className={`${className}`} src={Dealrize} alt="Logo" width={width? width:'100px'  } height={height?height:''}/>
  )
}

export default Logo