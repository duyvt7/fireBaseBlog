import React, {Component} from 'react';
import './traficlight.css'
import classNames from 'classnames'

const RED = 0;
const YELLOW = 1;
const  GREEN = 2;

class TraficLight extends Component{
    constructor(){
        super();
        this.state = {
            currentColor: GREEN
        };
        setInterval(()=>{
            
            this.setState({
                currentColor: this.getNextColor(this.state.currentColor)
            })
        },1000)
    }
    getNextColor(color){
        switch(color){
            case RED:
                return YELLOW
            case YELLOW:
                return GREEN
            default:
                return RED

        }
    }
    render(){
        const {currentColor} = this.state
        return(
            <div className='TraficLight'>
                <div className= {classNames('buld', 'red',{
                    active: currentColor === RED
                })} />
                <div className= {classNames('buld', 'yellow',{
                    active: currentColor === YELLOW
                })} />
                <div className= {classNames('buld', 'green',{
                    active: currentColor === GREEN
                })} />
            </div>
        )
    }
}
export default TraficLight;