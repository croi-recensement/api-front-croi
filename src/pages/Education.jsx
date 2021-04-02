import React from 'react';
import Pays from './Pays';

const Education = props =>{
    
    return(
            <>
            <legend className="text-center mb-5">{props.title}</legend>
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
        </>
    );
}

export default Education;