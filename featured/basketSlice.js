import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items:['rerere',"rezrrz"],
    memory:'hello',
    cardBelline:
    [
        {
            id: 1,
            numero: "1",
            titre: "Le Commencement",
            description: "le départ d'une nouvelle situation"
            , selected: false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id: 2,
            numero: "2",
            titre: "La Réussite",
            description: "Succées dans tous les domaines"
            , selected: false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id: 3,
            numero: "3",
            titre: "La Progression",
            description: "progression, après obstacle"
            , selected: false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id: 4,
            numero: "4",
            titre: "La Reconnaissance",
            description: "promoton dans le travail , dans la santé peut faire penser a une nouvelle étape positive dans la guérison"
            , selected: false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg" 
        },
        {
            id: 5,
            numero: "5",
            titre: "L'amitié",
            description: "Amitié constructrice dans le travail et dans la vie familiale , personne apportant une aide  "
            , selected: false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg" 
        },
        {
            id: 5,
            numero: "5",
            titre: "L'amitié",
            description: "Amitié constructrice dans le travail et dans la vie familiale , personne apportant une aide  "
            , selected: false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg" 
        },
    ]
    ,
    cardSecret4 : [
        {
            id:1,
            description: "réussite , bohneur , atténue influence négative carte a coté"
            , numero: "1"
            ,selected:false
            , titre: "Le Soleil"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:2,
            description: "Confiance , Bien être intérieur , voie spirituel"
            , numero: "2"
            ,selected:false
            , titre: "La Rose"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:3,
            description: "evenement arrivant au printemps "
            , numero: "2"
            ,selected:false

            , titre: "Le Printemps arrive"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:4,
            description: "foyer , famille , atténue effect néfaste carte a gauche"
            , numero: "1"
            ,selected:false

            , titre: "le feu familial"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:5,
            description: "evenement en ville ou déplacement vers la ville "
            , numero: "2"
            ,selected:false

            , titre: "La Ville citadine"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:6,
            description: "rencontre , flash amoureux "
            , numero: "2"
            ,selected:false
            , titre: "Ames Soeurs"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:7,
            description: "evenement bénéfique pour consultant.e , imprévu "
            , numero: "1"
            ,selected:false

            , titre: "Jeu de hasard"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:8,
            description: "Chagrin , pleurs "
            , numero: "2"
            ,selected:false

            , titre: "La Migale"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:9,
            description: "lenteur , retard"
            , numero: "2"
            ,selected:false

            , titre: "L'escargot"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:9,
            description: "lenteur , retard"
            , numero: "2"
            ,selected:false

            , titre: "L'escargot"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:9,
            description: "lenteur , retard"
            , numero: "2"
            ,selected:false

            , titre: "L'escargot"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:10,
            description: "Transport , Voyage,Deplacement"
            , numero: "2"
            ,selected:false

            , titre: "Voyage"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:11,
            description: "Force , Courage,Energie grandissante"
            , numero: "2"
            ,selected:false

            , titre: "Le Lion "
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:13,
            description: "Pensée , Mental , Psychée"
            , numero: "2"
            ,selected:false

            , titre: "Le Mentaliste"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:14,
            description: "Changement bénéfiques , Mutation , Amplifie les effets bénéfiques des cartes voisines "
            , numero: "2"
            ,selected:false

            , titre: "Le Papillon"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:15,
            description: "rencontre torride , éphémères"
            , numero: "2"
            ,selected:false

            , titre: "Symboles Sexuels"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:16,
            description: "Prudence transport  , Vigilance , Fatigue"
            , numero: "2"
            ,selected:false

            , titre: "La Route Sinueuse"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:17,
            description: "Protection , Soutien"
            , numero: "2"
            ,selected:false

            , titre: "L etoile"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:18,
            description: "Maternité , grossesse"
            , numero: "2"
            ,selected:false

            , titre: "La Cicogne"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:19,
            description: "Grosse rentrée d'argent , nouveau bien acquis"
            , numero: "2"
            ,selected:false

            , titre: "L'Or"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:21,
             titre: "Les 3 lunes",
            description: "Evenements importants  , 30jours , Changements"
            , numero: "21"
            ,selected:false

            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:22,
            description: "Spiritualité,occulte,tarologue"
            , numero: "2"
            ,selected:false

            , titre: "La bougie"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:23,
            description: "Moyen financier  , effort , recompenses"
            , numero: "2"
            ,selected:false

            , titre: "Les Outils"
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:24,
            titre: "Le point d'exclamation",
            description: "carte de confirmation"
            , numero: "2"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:25,
            titre: "Le desert",
            description: "Attention, solitude , echec"
            , numero: "2"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:26,
            titre: "L oiseau",
            description: "Message , nouvelle , réponse"
            , numero: "2"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:28,
            titre: "Le cadeau",
            description: "Belle surprise"
            , numero: "2"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:29,
            titre: "La poignée de main",
            description: "Réconciliation , paix , harmonie  "
            , numero: "2"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:30,
            titre: "La Balance ",
            description: "Reflexion , tempérance , reflexion"
            , numero: "2"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:31,
            titre: "Le Chien ",
            description: "Fidélité , Soutien , Confort"
            , numero: "31"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:32,
            titre: "Le Serpent ",
            description: "Perfidies , Jalousie , Mensonges"
            , numero: "32"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:33,
            titre: "Le Médecin ",
            description: "Soin , Medecin , manque d'energie"
            , numero: "33"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:34,
            titre: "L Ecureuil ",
            description: "Economie d'argent , imrevu financier , reflexion argent"
            , numero: "34"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:35,
            titre: "Le Sthetoscope ",
            description: "Opération , Intervention "
            , numero: "35"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:36,
            titre: "Le Coeur partagé ",
            description: "Besoin de reconnaissance , Amour , ego "
            , numero: "36"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:37,
            titre: "Le Coquillage ",
            description: "Vacance , Plage , Repos"
            , numero: "37"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:38,
            titre: "L'éléphant ",
            description: "Bohneur , Chance , Opportunité"
            , numero: "38"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:39,
            titre: "Le rat ",
            description: "Petite maladie"
            , numero: "39"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:40,
            titre: "Les papiers  ",
            description: "Démarches administratives"
            , numero: "40"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        {
            id:41,
            titre: "L'Hiver  ",
            description: "evenemen en hiver"
            , numero: "41"
            ,selected:false
            , url: "https://i.ibb.co/0fYnfQt/carte-1.jpg"
        },
        
    ],
    cardSelectedOuiNon:[],
    cardSecret4Selected:[],
    // /////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    menu:true
}

export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
        menuTrue:(state,action)=>{
            state.menu = true
        },
        menuFalse:(state,action)=>{
            state.menu = false
        },

        addCardSecret4 :(state,action)=>{
            state.cardSecret4Selected=[...state.cardSecret4Selected,action.payload]
        },
        removeCardSelectedOuiNon:(state,action)=>{
            state.cardSelectedOuiNon=[]
        },
        initMemory:(state,action)=>{
            state.cardSecret4 = action.payload
        },
        addCardSelectedOuiNon:(state,action)=>{
            state.cardSelectedOuiNon = action.payload
        },
        changeCardSelected:(state,action)=>{
           state.cardSecret4 =  state.cardSecret4.map((user) => {
                
                if(user.id === action.payload.id){
                   return {
                      ...user,selected:true                     
                   }
                } else {
                   return user
                }
             }) 
        },
        resetCardSelected:(state)=>{
           state.cardSecret4 =  state.cardSecret4.map((user) => {
                console.log(user)
                if(user.selected == true){
                   return {
                      ...user,selected:false                     
                   }
                } else {
                   return user
                }
             }) 
        },


    }
})

export const {addBasket,
    removeCardSelectedOuiNon,initMemory,changeCardSelected,
    addCardSelectedOuiNon,addCardSecret4,resetCardSelected,
    menuTrue,menuFalse    
} = basketSlice.actions

export const selectMenuBool = state => state.basket.menu
export const selectBasketItems = state => state.basket.items
export const selectBasketMemory = state => state.basket.memory
export const selectBasketCardSecret4 = state => state.basket.cardSecret4
export const selectBasketCardSecretBelline = state => state.basket.cardBelline
export const selectBasketCardSecret4Selected = state => state.basket.cardSecret4Selected
export const selectBasketCardSelectedOuiNon = state => state.basket.cardSelectedOuiNon

export default basketSlice.reducer