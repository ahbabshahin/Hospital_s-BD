import React from 'react';
import clock from '../../../Asset/clock.svg'
import marker from '../../../Asset/marker.svg'
import phone from '../../../Asset/phone.svg'
import Card from './Card';

const Cards = () => {

    
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-accent'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-accent'
        },
    ]



    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            cardData.map(card => <Card
                key={card.id}
                card={card}
            ></Card>)
        }
    </div>
    );
};

export default Cards;