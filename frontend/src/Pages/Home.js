import { Link } from 'react-router-dom'

function Home() {

    return (
        <div className=' w-full h-[calc(100vh-64px)] bg-gray-100 overflow-y-scroll p-5 pt-3'>
            <p className=' text-center font-medium mb-5'>Statements Formats</p>
            <div className=' w-full grid grid-cols-3 gap-5'>
                <Link to={`/jamuna_bank_one`}>
                    <div className=' bg-white rounded px-5 py-3 shadow'>
                        <p className=' text-center font-medium'>Jamuna Bank One</p>
                    </div>
                </Link>
                <Link to={`/jamuna_bank_two`}>
                    <div className=' bg-white rounded px-5 py-3 shadow'>
                        <p className=' text-center font-medium'>Jamuna Bank Two</p>
                    </div>
                </Link>
                <Link to={`/jamuna_bank_three`}>
                    <div className=' bg-white rounded px-5 py-3 shadow'>
                        <p className=' text-center font-medium'>Jamuna Bank Three</p>
                    </div>
                </Link>
                <Link to={`/islami_bank_one`}>
                    <div className=' bg-white rounded px-5 py-3 shadow'>
                        <p className=' text-center font-medium'>Islami Bank One</p>
                    </div>
                </Link>
                <Link to={`/bank_asia_one`}>
                    <div className=' bg-white rounded px-5 py-3 shadow'>
                        <p className=' text-center font-medium'>Bank Asia One</p>
                    </div>
                </Link>
                <Link to={`/bank_asia_two`}>
                    <div className=' bg-white rounded px-5 py-3 shadow'>
                        <p className=' text-center font-medium'>Bank Asia Two</p>
                    </div>
                </Link>
                <Link to={`/ncc_bank_one`}>
                    <div className=' bg-white rounded px-5 py-3 shadow'>
                        <p className=' text-center font-medium'>NCC Bank One</p>
                    </div>
                </Link>
                <Link to={`/ncc_bank_two`}>
                    <div className=' bg-white rounded px-5 py-3 shadow'>
                        <p className=' text-center font-medium'>NCC Bank Two</p>
                    </div>
                </Link>
                <Link to={`/ncc_bank_two`}>
                    <div className=' bg-white rounded px-5 py-3 shadow'>
                        <p className=' text-center font-medium'>HSBC Bank One</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home