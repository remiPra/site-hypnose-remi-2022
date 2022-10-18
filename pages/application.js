import React from 'react'
import TextComponent from '../component/Application/TextComponent';
import Header from '../component/Home/Header'
import Parralax1 from '../component/Home/Parralax1';



function application() {

   

    const img1 = 'image1';
    const video = "LSRNmhLS76o"
    return (
        <>
            <Header index="application" />
            <Parralax1 img={img1} />
            <TextComponent/>
            <div>
                <p className='sentence'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s</p>
            </div>
   
        </>
    )
}

export default application