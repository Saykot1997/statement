
import { Link } from 'react-router-dom'


function Banks() {

    return (
        <div className=' w-full h-[calc(100vh-64px)] bg-gray-100 overflow-y-scroll p-5 pt-3'>
            <div className='w-full grid grid-cols-3 gap-5'>
                {/* <Link to={`/banks/jamuna_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>Jamuna Bank</span>
                    </div>
                </Link> */}
                {/* <Link to={`/banks/ncc_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>NCC Bank</span>
                    </div>
                </Link> */}
                {/* <Link to={`/banks/bank_asia`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>Bank Asia</span>
                    </div>
                </Link> */}
                <Link to={`/banks/islamic_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>Islamic Bank</span>
                    </div>
                </Link>

                <Link to={`/banks/ebl_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>EBL Bank</span>
                    </div>
                </Link>

                <Link to={`/banks/ucb_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>UCB Bank</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Banks