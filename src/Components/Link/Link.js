import React from 'react';
const Link = (props) => {
    const { name, link } = props.routeeeeee
    return (
        <li className='mr-12'>
            <a href={link}>{name}</a>
        </li>
    );
};

export default Link;