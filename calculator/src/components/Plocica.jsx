import '../App.css';

const Plocica = (props) => {
    return (
        <button className="plocica" 
        onClick={props.click}>
            {props.value}
        </button>
    )
}
export default Plocica;