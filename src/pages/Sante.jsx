import React from 'react';
import Pays from './Pays';

const Sante = props =>{
    
    return(
            <>
            <legend className="text-center mb-5">{props.title}</legend>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Quel Type de maladie vous avez ?</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Donnée le Nom du Maladie</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Dans quel pays ?</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Quelle est le nom du Chirurgie ?</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Coût d'évacuation</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Coût de chirurgie</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <fieldset className="form-group border p-3">
                            <legend class="w-auto px-2">Vous avez subit une chirurgie ?</legend>
                            <div className="row d-flex justify-content-around">
                                <div className="col-md-2">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                            Oui
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                            Non
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <fieldset className="form-group border p-3">
                            <legend className="w-auto px-2">Vous êtes évacué par ce maladie ?</legend>
                            <div className="row d-flex justify-content-around">
                                <div className="col-md-2">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                            Oui
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                            Non
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sante;