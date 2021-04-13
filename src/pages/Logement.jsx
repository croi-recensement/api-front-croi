import React, {useState} from 'react';
import { FormControlLabel } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import  Radio from '@material-ui/core/Radio';
import Pays from './Pays';

const Logement = props =>{

    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [valueProps, setValueProps] = useState('non');
    const [valueMais, setValueMais] = useState('non');
    const [disabled, setDisabled] = useState('disabled');

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

    const handleChangeProps = (e) => {
        setValueProps(e.target.value)
    }
    
    const handleChangeMais = (e) => {
        if(e.target.value === 'non'){
            setDisabled('disabled');
        }else{
            setDisabled('');
        }
        setValueMais(e.target.value);
    }

    return(
            <>
        <fieldset className="form-group border p-5">
            <legend className="w-auto px-2" style={{fontSize: '16px'}}>LOGEMENTS</legend>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Adresse Pérmanente</label>
                        <input type="text" className="form-control" onChange={handleChange} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Adresse Temporaire</label>
                        <input type="text" className="form-control" onChange={handleChange} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Votre Adresse Email</label>
                        <input type="text" className="form-control" onChange={(e) => handleChange(e.target.value)} />
                        <p className="text-primary">{errorMessageEmail}</p>
                    </div>
                </div>
                
            </div>
            <div className="row">
                <div className="col-md-6">
                    <fieldset className="form-group border p-3">
                        <legend className="w-auto px-2" style={{fontSize: '16px'}}>Vous êtes propriétaire ?</legend>
                        <RadioGroup aria-label="gender" name="gender1" value={valueProps} onChange={handleChangeProps}>
                            <div className="d-flex justify-content-around">
                                <FormControlLabel value="oui" control={<Radio />} label="Oui" />
                                <FormControlLabel value="non" control={<Radio />} label="Non" />
                            </div>
                        </RadioGroup>
                    </fieldset>
                </div>
                <div className="col-md-6">
                    <fieldset className="form-group border p-3">
                        <legend class="w-auto px-2" style={{fontSize: '16px'}}>Vous avez une maison alloué ?</legend>
                        <RadioGroup aria-label="gender" name="gender1" value={valueMais} onChange={handleChangeMais}>
                            <div className="d-flex justify-content-around">
                                <FormControlLabel value="oui" control={<Radio />} label="Oui" />
                                <FormControlLabel value="non" control={<Radio />} label="Non" />
                            </div>
                        </RadioGroup>
                    </fieldset>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Montant loyé</label>
                        <input type="number" className="form-control" onChange={handleChange} disabled={disabled}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Montant Syndic</label>
                        <input type="number" className="form-control" onChange={handleChange} disabled={disabled}/>
                    </div>
                </div>
            </div>
            <Pays />
            </fieldset>
        </>
    );
}

export default Logement;