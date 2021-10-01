import React, {Component} from 'react';
import './traficlight.css'

const RED = 0;
const YELLOW = 1;
const  GREEN = 2;

class TraficLight extends Component{
    constructor(){
        super();
        this.currentColor = RED;
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
        return(
            <div className='TraficLight'>
                <div className='buld red' />
                <div className='buld yellow' />
                <div className='buld green' />
            </div>
        )
    }
}
export default TraficLight;