import React from 'react';
import PricingOption from '../PricingOptions/PricingOption';

const Pricing = () => {
    const PricingOptions = [
        { id: 1, name: 'Free', Price: 0 },
        { id: 2, name: 'Regular', Price: 9.99 },
        { id: 3, name: 'Premimum', Price: 19.99 }
    ]
    return (
        <div className='bg-indigo-300 p-5 mt-8'>
            <h1 className='text-white text-6xl pt-1 font-mono'>Best Deals of the Town</h1>
            <div className='grid md:grid-cols-3 gap-4 mt-8'>
                {
                    PricingOptions.map(option => <PricingOption key={option.id}
                        option={option}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;