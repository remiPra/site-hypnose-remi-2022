import React, { useEffect, useState,Fragment } from 'react'
import NavBarMobileHypose from '../../component/NavBarMobileHypnose'

function Index() {
    
    const [sentenceP, setSentenceP] = useState(<Fragment>Prenez place , les phrases <span className='effectBleu'>lignes</span> vont s'écrire automatiquement sur l'ecran </Fragment>)

    const script = () => {
        setShowOn(true)
        let i = 0
        setInterval(() => {
            const sentence = [
                "Prenez place , les phrases <span className='effectBleu'>lignes</span> vont s'écrire et défilleront automatiquement sur l'ecran ",
                <Fragment><ul><li>	Perdre du poids superflu me rendra optimiste et heureux</li>
                <li>Il y a toujours quelque chose de mieux à faire que de manger</li>
                <li>La marche vous rappelle que vous êtes sur la bonne voie pour atteindre votre objectif.</li>
                </ul></Fragment>,
                "Vous n'avez a vous occupez de rien , juste a prendre conscience sur vous", 
                <Fragment>
                    A la lecture de ses <span className='effectBleu'>lignes</span>, vous allez ralentir pour prendre une inspiration plus lente et une expiration apaisante , plus calme ",
                </Fragment>,
                "Voila c’est très bien ",
                "Gardez ce calme et cette tranquilité tout en étant bien installer sur votre siège",
                "Vous etes détendu , particulierement détendu, rien ne peut alterer Votre tranquilité",
                "Je vous invite a ressentir cet état , le bienfait de cet état",
                `Vous dérivez vers une relaxation très profonde`,
                `Vous êtes assis confortablement , votre esprit subconscient est maintenant ouvert et réceptif aux suggestions que vous êtes sur le point de lire.`,
                `Je sais que vous vous sentez mal à l'aise avec votre poids depuis un certain temps maintenant et que vous avez décidé qu'il était temps de faire quelque chose à ce sujet.`,
                `J’ai une bonne nouvelle , vous allez perdre ses kilos superflu.`,
                `Après avoir pris cette décision, vous vous sentez tellement plus optimiste quant à la perspective de perdre du poids, et c'est parce que vous avez décidé d'être réaliste quant à vos objectifs.`,
                `Vous allez perdre cet excès de poids, pas dans une semaine ou deux, pas au cours des prochains mois, des maintenant.`,
                `Vos pensées sur la nourriture commencent à changer et vous constatez que peu importe ce que vous aviez l'habitude de manger ou de boire dans le passé, vous n'en avez plus besoin ou ne voulez plus autant.`,
                `Vous trouvez qu'il y a toujours quelque chose de mieux à faire que de manger - et vous mangez de moins en moins chaque jour, simplement parce que la nourriture ne joue plus un rôle important dans votre vie.`,
                `La marche vous rappelle que vous êtes sur la bonne voie pour atteindre votre objectif.`,
                `Cela vous rappelle que vous êtes sur la bonne voie pour atteindre votre poids, votre forme et votre taille idéaux, et cela vous fait du bien : vous vous sentez merveilleusement bien.`,
                `A partit d’aujourd’hui , lorsque vous voulez manger plus que de raisons rappeler vous ses 3 indications :`,
                  `Perdre du poids superflu me rendra optimiste et heureux
                Il y a toujours quelque chose de mieux à faire que de manger
                La marche vous rappelle que vous êtes sur la bonne voie pour atteindre votre objectif.
                `,
                `Repetez ses phrases une dernière fois pour que votre subcosncient l'intègre`,
                <Fragment><ul><li>	Perdre du poids superflu me rendra optimiste et heureux</li>
                -	<li>Il y a toujours quelque chose de mieux à faire que de manger</li>
                -	<li>La marche vous rappelle que vous êtes sur la bonne voie pour atteindre votre objectif.</li>
                </ul></Fragment>,
            
            ]
            if (i > sentence.length) {
                i = 0
                setSentenceP(sentence[0])
            }
            else {
                i++
                setSentenceP(sentence[i])
                console.log(i)
            }
        }, 12000)

    }
    const [showOn,setShowOn] = useState(false)


    return (<>
      <NavBarMobileHypose />
        {showOn == false ? (<>
        <div className='relative min-h-[600px]'>
            <div className='px-8 pt-[30px] md:pt-[100px] items-center text-[#6b89c9] text-center' >
                <h1 data-aos="fade-down" className='text-[40px]'>Hypnose rapide pour perdre du poids</h1>
                <p data-aos="fade-down" data-aos-delay="200" className='mt-5 text-[25px]' >
                    Cette courte séance aura pour but de vous apportez la sensation de ce que peut apporter l'hypnose dans le but de la perte de poids</p>
                <button data-aos="fade-down" data-aos-delay="1500" className='mt-5 border-[#decb8c] text-[#6b89c9]  border-2  buttonPrimary' onClick={script} >Commencez le voyage </button>
            </div>
        </div>
        </>) : (<>
        <div className='relative min-h-[600px]'>
            <div className='sentence'>
                <div className='px-8 pt-[100px] items-center text-[#6b89c9] text-center text-[22px] md:text-[30px]' >{<Fragment>{sentenceP}</Fragment>}</div>
            </div>
        </div>
        </>)}
    </>
    )
}

export default Index