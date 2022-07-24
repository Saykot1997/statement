import React from 'react'
import { Link } from "react-router-dom"

function EditButtonComponent({ editMode, toggleEditMode, GenerateTranjections }) {

    const printWebPage = () => {
        window.print()
    }

    return (
        <div className=''>
            {
                editMode ?
                    <div className='absolute top-3 right-2 print:hidden'>
                        <button onClick={toggleEditMode} className="bg-blue-500 px-2 py-[6px] rounded text-white hover:bg-blue-700 ">Save</button>
                        <button onClick={GenerateTranjections} className=' bg-green-500 px-2 py-[6px] rounded text-white hover:bg-green-700 ml-2'>Genarate Data</button>
                        <button onClick={toggleEditMode} className="bg-red-500 ml-2 px-2 py-[6px] rounded text-white hover:bg-red-700 ">Cencel</button>
                    </div>
                    :
                    <div className='absolute top-3 right-2 print:hidden'>
                        <Link to="/" className=' bg-purple-500 px-2 py-[6px] rounded text-white hover:bg-purple-600 mr-2'>Previous</Link>
                        <button onClick={toggleEditMode} className=' bg-blue-500 px-2 py-[6px] rounded text-white hover:bg-blue-700'>Edit</button>
                        <button onClick={printWebPage} className=' bg-green-500 ml-2 px-2 py-[6px] rounded text-white hover:bg-green-700'>Print</button>
                    </div>
            }
        </div>
    )
}

export default EditButtonComponent