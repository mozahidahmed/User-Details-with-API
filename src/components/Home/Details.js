import React from 'react';

const Details = ({ detail }) => {
    console.log('dfgdfgdg', detail)






    return (
        <div>
            
            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title  font-medium">
                    <h1 className='font-bold'>  Description</h1>
                    <h1 className=''> Id:  <span className='font-bold text-primary'>           {detail?.id}</span> </h1>
                    <h1 className=''> Name:  <span className='font-bold text-primary'>         {detail?.name}</span> </h1>
                    <h1 className=''> Email:  <span className='font-bold text-primary'>        {detail?.email}</span> </h1>
                    <h1 className=''> website:  <span className='font-bold text-primary'>      {detail?.website}</span> </h1>
                    <h1 className=''> Company:        <span className='font-bold text-primary'>{detail?.company?.name}</span> </h1>
                    <p className='mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, est numquam distinctio provident facilis labore natus sapiente in asperiores, repudiandae aliquam dolores itaque libero nisi totam suscipit expedita fugiat eos.</p>
                </div>
                <div className="collapse-content">

                </div>
            </div>
        </div>
    );
};

export default Details;