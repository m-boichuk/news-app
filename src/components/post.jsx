import React, { PropTypes } from 'react';



const post = props => {
    return (
        <div class="post">
        <div style={{backgroundImage: `url(${props.image})`}} className='post__image'></div>
        <div className='post__info'>
            <h2  className='post__title'>{props.title}</h2>
            <p className='post__description'>
            {props.description}
            </p>

        </div>

                
        </div>
    );

}


post.propTypes = {

};


export default post;
