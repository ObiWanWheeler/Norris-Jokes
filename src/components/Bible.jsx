import React from 'react';
import './Bible.css';

class Bible extends React.Component {

    render() {
        return (
            <div className={"Bible"} onClick={this.props.onClick}>
                <img className={"bible-img"} src={"https://freesvg.org/img/Anonymous_Closed_Bible.png"} alt={"bible"}/>
            </div>
        );
    }
};

export default Bible;