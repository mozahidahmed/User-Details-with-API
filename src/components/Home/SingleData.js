import React,{useState} from 'react';
import Details from './Details';

const SingleData = ({ users,handleDetailUser}) => {
    const { name, id, address } = users;
    const [show, setShow] = useState(false);
    return (
        <div className="">
           
          <div className="grid  items-center ">
          <div className="flex gap-2 items-center">
                <div className="font-bold">{id}</div>
               
                <div className="">{name}</div>
                <div className="font-bold text-primary">||</div>
                <div className="">{address.city}</div>
                <div className="font-bold text-primary">||</div>
                <div className="">{address.street}</div>


            </div>

            <div  className="grid justify-end items-center">
               <h1 onClick={() => handleDetailUser(id)}> <span  htmlFor="my-modal" className="badge badge-outline skill-border-react p-4 font-bold hover:bg-red-600 hover:text-white " >Details</span></h1>
            </div>
          </div>
         
        </div>




    );
};

export default SingleData;