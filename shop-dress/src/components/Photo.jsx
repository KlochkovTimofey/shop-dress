import React from 'react';
import '../App.css';
import logo2 from '../components/img/logo2.jpg'
import logo3 from '../components/img/logo3.jpg'
import logo4 from '../components/img/logo4.jpg'
function Photo(props) {
    return(
        <div className="members">
            <div className="member">
                <img src={logo2}/>
                <h3>{props.name}</h3>
                <p className="position">{props.conditions}</p>
                <p className="description">{props.price}</p>
                <button>Добавить в корзину</button>
            </div>
            
        </div>    
    )
}

export default Photo;