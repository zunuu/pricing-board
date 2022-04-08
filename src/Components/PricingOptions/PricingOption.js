import React from 'react';

const PricingOption = (props) => {
    const { name, Price } = props.option
    return (
        <div className='bg-white rounded-lg p-5'>
            <h2 className='bg-indigo-300 py-4 rounded text-2xl mb-3 font-bold'>{name}</h2>
            <span className='text-2xl font-bold'>{Price}</span>
            <span className='text-2xl  font-bold text-gray-500'>/mo</span>
        </div>
    );
};

export default PricingOption;