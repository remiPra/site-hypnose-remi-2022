import React, { useEffect } from 'react'

function ComponentDeuxTraitBleu({title}) {

    useEffect(()=>{
        console.log(title)
    },[])

    return (
        <div  data-aos="fade-down" className="section1header mt-10 lg:mt-0" style={{ position: 'relative' }}>
            <div className="traitBleu"></div>
            {/* <h2 className=' text-[20px] lg:text-[30px] w-[80%] md:w-[60%] '></h2> */}
            <h2 className=' text-[20px] lg:text-[30px] w-[80%] md:w-[60%] '>{title}</h2>
        </div>
    )
}

export default ComponentDeuxTraitBleu