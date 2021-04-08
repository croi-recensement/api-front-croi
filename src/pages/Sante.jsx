import React, { useState } from 'react';
import { FormControlLabel } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Pays from './Pays';

const Sante = props =>{

    const [valueMal, setValueMal] = useState('non');
    const [valueChrg, setValueChrg] = useState('non');
    const [disabledEvac, setDisabledEvac] = useState('disabled');
    const [disabledChg, setDisabledChg] = useState('disabled');

    const handleChangeMaladie = (e) => {
        if(e.target.value === 'oui'){
            setDisabledEvac('');
        }else{
            setDisabledEvac('disabled');
        }
        setValueMal(e.target.value);
    }

    const handleChangeChirg = (e) => {
        if(e.target.value === 'oui'){
            setDisabledChg('')
        }else{
            setDisabledChg('disabled')
        }
        setValueChrg(e.target.value);
    }
    
    return(
            <>
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Type de maladie vous avez ?</label>
                        <select className="form-control">
                            <option>Selectionnez le type</option>
                            <option>Chronique</option>
                            <option>Ponctuelle</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Quelle est nom du Maladie</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>taille (en m)</label>
                        <input type="number" className="form-control" />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Poids (en kg)</label>
                        <input type="number" className="form-control" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <fieldset className="form-group border p-3">
                        <legend className="w-auto px-2" style={{fontSize: '16px'}}>Vous êtes évacué par ce maladie ?</legend>
                        <RadioGroup aria-label="gender" name="gender1" value={valueMal} onChange={handleChangeMaladie}>
                            <div className="d-flex justify-content-around">
                                <FormControlLabel value="oui" control={<Radio />} label="Oui" />
                                <FormControlLabel value="non" control={<Radio />} label="Non" />
                            </div>
                        </RadioGroup>
                    </fieldset>
                </div>
                <div className="col-md-6">
                    <fieldset className="form-group border p-3">
                        <legend class="w-auto px-2" style={{fontSize: '16px'}}>Vous avez subit une chirurgie ?</legend>
                        <RadioGroup aria-label="gender" name="gender1" value={valueChrg} onChange={handleChangeChirg}>
                            <div className="d-flex justify-content-around">
                                <FormControlLabel value="oui" control={<Radio />} label="Oui" />
                                <FormControlLabel value="non" control={<Radio />} label="Non" />
                            </div>
                        </RadioGroup>
                    </fieldset>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Coût d'évacuation (en ar)</label>
                        <input type="number" className="form-control" disabled={disabledEvac}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Quelle est le nom du Chirurgie ?</label>
                        <input type="text" className="form-control" disabled={disabledChg}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Coût de chirurgie (en ar)</label>
                        <input type="number" className="form-control" disabled={disabledChg}/>
                    </div>
                </div>
            </div>
            <Pays />
        </>
    );
}

export default Sante;