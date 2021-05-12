function SetNom(nom) {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_NOM',
            nom
        });
    }
}

function SetPrenom(prenom) {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_PRENOM',
            prenom
        });
    }
}

function SetLieuNaissance(lieuNaissance) {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_LIEU_NAISSANCE',
            lieuNaissance
        });
    }
}

function SetDateNaissance(dateNaissance) {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_DATE_NAISSANCE',
            dateNaissance
        });
    }
}

function SetNationalite(nationalite) {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_NATIONALITE',
            nationalite
        });
    }
}

function SetCin(cin) {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_CIN',
            cin
        });
    }
}

function SetPhone(phone) {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_PHONE',
            phone
        });
    }
}

function SetDocument(document) {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_DOCUMENT',
            document
        });
    }
}

function SetPassport(passport) {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_PASSPORT',
            passport
        });
    }
}

function SetMarital(marital) {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_MARITAL',
            marital
        });
    }
}

function SetNombreEnfant(nombreEnfant) {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_NOMBRE_ENFANT',
            nombreEnfant
        });
    }
}

export { 
    SetNom, 
    SetPrenom, 
    SetLieuNaissance, 
    SetDateNaissance, 
    SetNationalite,
    SetCin,
    SetPhone,
    SetDocument,
    SetPassport,
    SetMarital,
    SetNombreEnfant
};