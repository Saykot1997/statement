import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='w-[200px] h-[calc(100vh-64px)] shadow px-2'>
            <ul>
                <Link to="/addbanks" className=' py-2 px-5 block hover:bg-gray-100 my-2 rounded font-medium'>
                    <li>Add Banks</li>
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar