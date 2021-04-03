import React from 'react';

const Commerce = props =>{
    
    return(
            <>
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Quel est votre domaine d'activité ?</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Vos salaire ?</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>votre prime</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Vous payé le loyé</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <fieldset className="form-group border p-3">
                        <legend class="w-auto px-2" style={{fontSize: '16px'}}>Vous êtes ?</legend>
                        <div className="row">
                            <div className="col-md-2">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                        Commerce
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                        Importateur/Exportateur
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                        Trader
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                        Revendeur
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                        Presta de Service
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

export default Commerce;
