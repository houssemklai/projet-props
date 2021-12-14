function Profission(props){
    console.log(props)
    return(
        <div>
<h1> {props.Profission} </h1>
{props.children}
        </div>

    )
}
export default Profission