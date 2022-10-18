import React, { useEffect, useState } from 'react'

function Index() {
    useEffect(
        () => {
            script()
        }, []

    )

    
    const [sentenceP,setSentenceP] = useState("Prenez place , les phrases vont s'écrire automatiquement sur l'ecran ")

    const script = () => {
        let i=0
        setInterval(()=>{
            const sentence = [
                "Prenez place , les phrases vont s'écrire automatiquement sur l'ecran ",
                "A la lecture de ses lignes, vous allez prendre une grande inspiration ",
                "Et maintenant vous expirez en vidant vos poumons ",
                "Inspirez",
                "Expirez",
                "Voila c’est très bien ",
                "Gardez ce calme et cette tranquilité tout en étant bien installer sur votre siège",
                "Vous etes détendu , particulierement détendu, rien ne peut alterer Votre tranquilité",
                "Je vous invite a ressentir cet état , le bienfait de cet état"
            ]    
            if(i > sentence.length  ){
                i = 0
                setSentenceP(sentence[0])
            }
            else {
                i++
                setSentenceP(sentence[i])
                console.log(i)
            }


        },7000)
            
    }


    return (
        <div className='relative min-h-[600px]'>
            <div className='sentence'></div>
            
            <p className='px-8 pt-[100px] items-center text-black text-center text-[30px]'>{sentenceP}</p>
                
            
          

        </div>)}

export default Index