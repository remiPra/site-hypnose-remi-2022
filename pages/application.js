import React from 'react'
import TextComponent from '../component/Application/TextComponent';
import Header from '../component/Home/Header'
import Parralax1 from '../component/Home/Parralax1';

const sentence = [
    // Induction
    `Vous dérivez vers une relaxation très profonde`,
    `Vous êtes assis confortablement , votre esprit subconscient est maintenant ouvert et réceptif aux suggestions que vous êtes sur le point de lire.`,
    `Je sais que vous vous sentez mal à l'aise avec votre poids depuis un certain temps maintenant et que vous avez décidé qu'il était temps de faire quelque chose à ce sujet.`
]


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
                <p className='sentence'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s</p>
                <p className='sentence'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s</p>
            </div>
   
        </>
    )
}

export default application