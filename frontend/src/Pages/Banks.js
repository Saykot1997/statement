
import { Link } from 'react-router-dom'


function Banks() {

    return (
        <div className=' w-full h-[calc(100vh-64px)] bg-gray-100 overflow-y-scroll p-5 pt-3'>

            <div className='w-full grid grid-cols-3 gap-5'>
                <div className=' bg-white p-5 rounded shadow flex items-center justify-between'>
                    <Link to={`/banks/jamuna_bank`}>
                        <span className=' font-medium '>Jamuna Bank</span>
                    </Link>
                </div>
                <div className=' bg-white p-5 rounded shadow flex items-center justify-between'>
                    <Link to={`/banks/ncc_bank`}>
                        <span className=' font-medium '>NCC Bank</span>
                    </Link>
                </div>
                <div className=' bg-white p-5 rounded shadow flex items-center justify-between'>
                    <Link to={`/banks/bank_asia`}>
                        <span className=' font-medium '>Bank Asia</span>
                    </Link>
                </div>
                <div className=' bg-white p-5 rounded shadow flex items-center justify-between'>
                    <Link to={`/banks/islamic_bank`}>
                        <span className=' font-medium '>Islamic Bank</span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Banks