import axios from 'axios';
import { useEffect, useState } from 'react';
import Details from './Details';
import SingleData from './SingleData';


const AllData = () => {
    const [detail, setDetail] = useState({});
    const [selected, setSelected] = useState(false)
    const [users, setUsers] = useState([]);

    console.log(users)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
    }, [])



    const handleDetailUser = id => {
        setSelected(true)

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setDetail(res.data))
    }



    return (
        <div className=''>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-12  mx-6 justify-center'>


                <div className="">
                    {
                        users.map((users, index) => <SingleData users={users} index={index} handleDetailUser={handleDetailUser}></SingleData>
                        )}
                </div>

                <div className="">
                    {
                        selected ? <Details detail={detail} /> : <p className='text-center font-bold text-3xl'>Select Any Product</p>
                    }
                </div>
            </div>



        </div>
    );
};

export default AllData;