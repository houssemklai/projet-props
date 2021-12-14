import PropTypes from 'prop-types';




function FullName({Name,handlealert}){
    
    return(
        <div>
<h1> {Name} </h1>
<button  onClick={handlealert}> alert me </button>
        </div>
    )
}
export default FullName
FullName.defaultProps={
    name :"skander"
}
FullName.propTypes={
    Name:PropTypes.string
}