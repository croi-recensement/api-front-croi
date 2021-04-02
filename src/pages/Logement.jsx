import React, {useState} from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const Logement = props =>{
    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [pays, setPays] = useState('');
    const [region, setRegion] = useState('');

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
        setPays(index);
    }

    
    return(
            <>
            <legend className="text-center mb-5">{props.title}</legend>
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
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Pays</label>
                        <CountryDropdown
                            value={pays}
                            onChange={(e) => handleChange(e.target.value)}
                            className="form-control" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Provaince</label>
                        <RegionDropdown
                            country="Madagascar"
                            value={region}
                            onChange={(e) => handleChange(e.target.value)}
                            className="form-control" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Logement;