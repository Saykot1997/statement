
import logo from "../Photos/bankasia.jpg"

function BankAsiaTwo() {
    return (

        <div className=' w-full min-h-screen p-5 print:p-0'>
            <div className='flex flex-col justify-center  items-center'>
                <img src={logo} alt="" className=' w-60' />
                <p className=" uppercase font-medium text-lg">limited</p>
            </div>
            <div>
                <p className=' text-lg font-semibold print:font-medium'>BA/STR/GB/</p>
                <p className=' text-xl text-gray-600'>16.05.2022</p>
            </div>
            <div className=' flex justify-center mt-10'>
                <span className='text-xl font-semibold print:font-medium underline uppercase'>To Whome It May Concern</span>
            </div>

            <div className=' mt-10'>
                <p >This is to certify that <span className=' font-medium uppercase'>mohd. mominur rahman</span> Address:33/1 SARAT GUPTA ROAD, NARINDA DHAKA has been maintaining a currant account bearing no <span className=" font-medium">0005-0330374567</span> with an available balance of total TK- <span className=" font-medium">510,000.897/-</span> (Local Currency) which is equevalent to <span className=" font-medium">USD-89342/-</span> .The party is reported to financiallu sound & dslvent.</p>
                <p className=" my-10">This certificate has been issued without prejudice and/or any responsibility on the part of this Bank or any of its officials.</p>
            </div>

            <div className='mt-28'>
                <div className=' flex justify-between w-full'>
                    <div className=' w-1/2'>
                        <p className=' font-semibold'>Authorized Signature</p>
                    </div>
                    <div className=' w-1/2'>
                        <p className=' font-semibold'>Authorized Signature</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankAsiaTwo