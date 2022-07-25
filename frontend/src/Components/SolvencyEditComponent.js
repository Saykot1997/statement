import React from 'react'
import { Link } from 'react-router-dom'

function SolvencyEditComponent({ editMode, toggleEditMode, convertNumberToWord, convertWord }) {

    const printWebPage = () => {
        window.print()
    }

    return (
        <div>
            {
                editMode ?
                    <div className='absolute top-5 right-2 print:hidden'>
                        {
                            convertWord &&
                            <button onClick={convertNumberToWord} className="bg-green-500 px-2 py-[6px] rounded text-white hover:bg-green-700 mr-2">Convert Money</button>
                        }
                        <button onClick={toggleEditMode} className="bg-blue-500 px-2 py-[6px] rounded text-white hover:bg-blue-700 ">Save</button>
                        <button onClick={toggleEditMode} className="bg-red-500 ml-2 px-2 py-[6px] rounded text-white hover:bg-red-700 ">Cencel</button>
                    </div>
                    :
                    <div className='absolute top-5 right-2 print:hidden'>
                        <Link to="/" className=' bg-purple-500 px-2 py-[6px] rounded text-white hover:bg-purple-600 mr-2'>Previous</Link>
                        <button onClick={toggleEditMode} className=' bg-blue-500 px-2 py-[6px] rounded text-white hover:bg-blue-700'>Edit</button>
                        <button onClick={printWebPage} className=' bg-green-500 ml-2 px-2 py-[6px] rounded text-white hover:bg-green-700'>Print</button>
                    </div>
            }
        </div>
    )
}

export default SolvencyEditComponent