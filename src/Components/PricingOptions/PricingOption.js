import React from 'react';

const PricingOption = (props) => {
    const { name, Price } = props.option
    return (
        <div className='bg-white rounded-lg p-4'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h2>
            <p className='text-xl font-bold'>{Price}</p>
            <span className='text-xl font-bold text-gray-500'>/mo</span>
        </div>
    );
};

export default PricingOption;