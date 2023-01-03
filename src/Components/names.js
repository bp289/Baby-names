
import '../App.css';

let data = require('../Data/babyNamesData.json')
function Names() {
    return (
        <div className='container'>
            {data.map( (e) => {
                if(e.sex === "m"){
                 return (<div className='m'>{e.name}</div>)
                }else{
                    return (<div className='f'>{e.name}</div>)
                }
            })}    
        </div>
    )
}

export default Names;