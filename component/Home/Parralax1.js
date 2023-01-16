import React from 'react'

function Parralax1(props) {
    return (
        <>
            <section className={` flex justify-center parallax ${props.img}`}>
                <div className=' w-[100%] h-[100%] px-[50px] pt-[80px]'>
                    {props.img == 'image1' && <>
                    <h1 className='text-[40px] text-white'>Hypnose à Toulouse Cugnaux </h1>
                    <h2 className='text-[28px] text-white'>Prenez enfin soin de vous  </h2>
                    </>}
                    {/* <h2></h2> */}
                    <div className='mt-[80px] flex justify-center'>
                    <button className="mx-3 border-[#decb8c] text-[#6b89c9]  border-2 text-[[object Object]] buttonPrimary">En savoir + </button>
                    <button className="mx-3 border-[#decb8c] text-[#6b89c9]  border-2 text-[[object Object]] buttonPrimary">Prendre Rdv</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Parralax1