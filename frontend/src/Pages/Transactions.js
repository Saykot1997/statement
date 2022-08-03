
import { Link } from 'react-router-dom'

function Transactions() {

    return (
        <div className=' w-full h-[calc(100vh-64px)] bg-gray-100 overflow-y-scroll p-5 pt-3'>
            <div className='w-full grid grid-cols-3 gap-5'>

                <Link to={`/transactions/ebl_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>EBL Bank</span>
                    </div>
                </Link>
                <Link to={`/transactions/islamic_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>Islamic Bank</span>
                    </div>
                </Link>
                <Link to={`/transactions/ucb_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>UCB Bank</span>
                    </div>
                </Link>
                <Link to={`/transactions/uco_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>UCO Bank</span>
                    </div>
                </Link>
                <Link to={`/transactions/canara_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>Canara Bank</span>
                    </div>
                </Link>
                <Link to={`/transactions/city_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>City Bank</span>
                    </div>
                </Link>
                <Link to={`/transactions/one_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>One Bank</span>
                    </div>
                </Link>
                <Link to={`/transactions/scb_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>SCB Bank</span>
                    </div>
                </Link>
                <Link to={`/transactions/southeast_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>Southeast Bank</span>
                    </div>
                </Link>
                <Link to={`/transactions/uttra_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>Uttra Bank</span>
                    </div>
                </Link>
                <Link to={`/transactions/ab_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>AB Bank</span>
                    </div>
                </Link>
                <Link to={`/transactions/asia_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>Bank Asia</span>
                    </div>
                </Link>
                <Link to={`/transactions/jamuna_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>Jamuna Bank</span>
                    </div>
                </Link>
                <Link to={`/transactions/ncc_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>NCC Bank</span>
                    </div>
                </Link>
                <Link to={`/transactions/agrani_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>Agrani Bank</span>
                    </div>
                </Link>
                <Link to={`/transactions/alfalah_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>Alfalah Bank</span>
                    </div>
                </Link>
                <Link to={`/transactions/sbac_bank`}>
                    <div className=' bg-white p-5 rounded shadow flex items-center justify-between hover:bg-gray-50'>
                        <span className=' font-medium '>SBAC Bank</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Transactions