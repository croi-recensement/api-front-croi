export default function Person(state = {
    nom: '',
    prenom: '',
    lieuNaissance: '',
    dateNaissance: '',
    nationalite: '',
    cin: '',
    phone: '',
    document: '',
    passport: '',
    marital: 'marie',
    nombreEnfant: 0
}, 
action){
    switch(action.type){
        case 'SET_NOM':
            return {
                ...state,
                nom: action.nom,
            };
        case 'SET_PRENOM':
            return {
                ...state,
                prenom: action.prenom,
            };
        case 'SET_LIEU_NAISSANCE':
            return {
                ...state,
                lieuNaissance: action.lieuNaissance,
            };
        case 'SET_DATE_NAISSANCE':
            return {
                ...state,
                dateNaissance: action.dateNaissance,
            };
        case 'SET_NATIONALITE':
            return {
                ...state,
                nationalite: action.nationalite,
            };
        case 'SET_CIN':
            return {
                ...state,
                cin: action.cin,
            };
        case 'SET_PHONE':
            return {
                ...state,
                phone: action.phone,
            };
        case 'SET_DOCUMENT':
            return {
                ...state,
                document: action.document,
            };
        case 'SET_PASSPORT':
            return {
                ...state,
                passport: action.passport,
            };
        case 'SET_MARITAL':
            return {
                ...state,
                marital: action.marital,
            };
        case 'SET_NOMBRE_ENFANT':
            return {
                ...state,
                nombreEnfant: action.nombreEnfant,
            };
        default:
            return state;
    }
}