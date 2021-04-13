import React from 'react';
import Pays from './Pays';

const Education = props =>{
    
    return(
            <>
            <fieldset className="form-group border p-5">
            <legend className="w-auto px-2" style={{fontSize: '16px'}}>EDUCATION</legend>
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
        </>
    );
}

export default Education;