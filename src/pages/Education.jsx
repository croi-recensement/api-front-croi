import React, { useEffect, useState } from 'react';
import Pays from './Pays';

const Education = props =>{

    const [hierarchie, setHierarchie] = useState(localStorage.getItem('pere') ? localStorage.getItem('pere') : localStorage.getItem('mere'));
    const [iterationVal, setIterationVal] = useState(1);

    const submitValidate = (e) => {
        e.preventDefault();
        setIterationVal(iterationVal + 1);
        switch(iterationVal){
            case 1:
                setHierarchie(localStorage.getItem('mere'))
                break;
            case 2:
                setHierarchie(localStorage.getItem('enfant'))
                break
            default:
                props.handleNext()
        }   
    }
    
    return(
            <>
            <fieldset className="form-group border p-5">
            <legend className="w-auto px-2" style={{fontSize: '16px'}}>EDUCATION ({hierarchie})</legend>
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Nom Ecole</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Nom Université</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Classe</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Carte Etudiant</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Adresse Ecole</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Adresse Université</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Diplôme</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Année Scolaire</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <Pays />
            </fieldset>
            <div className="row d-flex justify-content-center">
                <button onClick={submitValidate} className="btn btn-primary btnEnfants">VALIDER</button>
            </div>
        </>
    );
}

export default Education;