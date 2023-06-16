import "./assets/components/Atoms/Button/ButtonAtom.css";


function ButtonAtom(props) {
  return (
    <>
    <div>
        <button ClassName={props.styles} onClick={props.onClick}> {props.button-text} </button>
    </div>
    </>
  )
}

export default ButtonAtom