import "./_button.css";


function Button(props) {
  // eslint-disable-next-line react/prop-types
  const {className, onClick, children} = props
  return  <button className={className} onClick={onClick}> {children} </button>;
}

export default Button