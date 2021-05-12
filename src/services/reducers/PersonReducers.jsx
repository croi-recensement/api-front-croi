import { getData } from "../Utils";

//------------------------------------------------------------------//
//--------------------------- Selectors ----------------------------//
//------------------------------------------------------------------//
export function getNom(state, errorIfNotFound = false) {
  return getData(
    state,
    'Person.nom',
    errorIfNotFound && 'No person first name found'
  );
}

export function getPrenom(state, errorIfNotFound = false) {
    return getData(
      state,
      'Person.prenom',
      errorIfNotFound && 'No person last name found'
    );
}

export function getLieuNaissance(state, errorIfNotFound = false) {
    return getData(
      state,
      'Person.lieuNaissance',
      errorIfNotFound && 'No person country birthday found'
    );
}

export function getDateNaissance(state, errorIfNotFound = false) {
    return getData(
      state,
      'Person.dateNaissance',
      errorIfNotFound && 'No person birthday found'
    );
}

export function getNationalite(state, errorIfNotFound = false) {
    return getData(
      state,
      'Person.nationalite',
      errorIfNotFound && 'No person nationality found'
    );
}

export function getCin(state, errorIfNotFound = false) {
    return getData(
      state,
      'Person.cin',
      errorIfNotFound && 'No person cin found'
    );
}

export function getPhone(state, errorIfNotFound = false) {
    return getData(
      state,
      'Person.phone',
      errorIfNotFound && 'No person phone number found'
    );
}

export function getDocument(state, errorIfNotFound = false) {
    return getData(
      state,
      'Person.document',
      errorIfNotFound && 'No person document found'
    );
}

export function getPassport(state, errorIfNotFound = false) {
    return getData(
      state,
      'Person.passport',
      errorIfNotFound && 'No person passport found'
    );
}

export function getMarital(state, errorIfNotFound = false) {
    return getData(
      state,
      'Person.marital',
      errorIfNotFound && 'No person situation found'
    );
}

export function getNombreEnfant(state, errorIfNotFound = false) {
    return getData(
      state,
      'Person.nombreEnfant',
      errorIfNotFound && 'No person count of children found'
    );
}