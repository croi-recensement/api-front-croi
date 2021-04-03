import React, {useState} from 'react';
import Pays from './Pays';

const Logement = props =>{

    const [errorMessageEmail, setErrorMessageEmail] = useState('');

    const checkEmail = (email) =>{
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email);
    }

    const handleChange = (index) => {
        if(checkEmail(index)){
            setErrorMessageEmail('');
        }else{
            setErrorMessageEmail('Adresse e-mail non valide');
        }
    }

    return(
            <>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Adresse Pérmanente</label>
                            <input type="text" className="form-control" onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Adresse Temporaire</label>
                            <input type="text" className="form-control" onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Votre Adresse Email</label>
                            <input type="text" className="form-control" onChange={(e) => handleChange(e.target.value)} />
                            <p className="text-primary">{errorMessageEmail}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <fieldset className="form-group border p-3">
                            <legend class="w-auto px-2" style={{fontSize: '16px'}}>Vous avez une maison alloué ?</legend>
                            <div className="row d-flex justify-content-around">
                                <div className="col-md-2">
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                            Oui
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
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
                            <legend class="w-auto px-2" style={{fontSize: '16px'}}>Vous êtes propriétaire ?</legend>
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
            <Pays />
        </>
    );
}

export default Logement;