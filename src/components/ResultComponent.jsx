import React, {Component} from 'react';

// function Name(props){
//     console.log(props);
// }
// const Name = (props) => {}

class ResultComponent extends Component{
    render(){
        let {resultAttrib} = this.props
        return(
            <div className="result">
                <p>
                    {resultAttrib}
                </p>
            </div>
        )
    }
}

export default ResultComponent;