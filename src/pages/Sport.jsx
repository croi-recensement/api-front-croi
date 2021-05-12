import React, { useState } from 'react';
import { FormControlLabel } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

const Sport = props =>{

    const [valueSport, setValueSport] = useState('non');
    const [valueLoisir, setValueLoisir] = useState('non');
    const [disabledSport, setDisabledSport] = useState('disabled');
    const [disabledLoisir, setDisabledLoisir] = useState('disabled');
    const [hierarchie, setHierarchie] = useState(localStorage.getItem('pere') ? localStorage.getItem('pere') : localStorage.getItem('mere'));
    const [iterationVal, setIterationVal] = useState(1);

    const handleChangeSport = (e) => {
        if(e.target.value === 'oui'){
            setDisabledSport('');
        }else{
            setDisabledSport('disabled');
        }
        setValueSport(e.target.value);
    }

    const handleChangeLoisir = (e) => {
        if(e.target.value === 'oui'){
            setDisabledLoisir('');
        }else{
            setDisabledLoisir('disabled');
        }
        setValueLoisir(e.target.value);
    }

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
            <legend className="w-auto px-2" style={{fontSize: '16px'}}>SPORT ({hierarchie})</legend>
            <div className="row">
                <div className="col-md-6">
                    <fieldset className="form-group border p-3">
                        <legend class="w-auto px-2" style={{fontSize: '16px'}}>Vous pratiquez le Sport ?</legend>
                        <RadioGroup aria-label="gender" name="gender1" value={valueSport} onChange={handleChangeSport}>
                            <div className="d-flex justify-content-around">
                                <FormControlLabel value="oui" control={<Radio />} label="Oui" />
                                <FormControlLabel value="non" control={<Radio />} label="Non" />
                            </div>
                        </RadioGroup>
                    </fieldset>
                </div>
                <div className="col-md-6">
                    <fieldset className="form-group border p-3">
                        <legend class="w-auto px-2" style={{fontSize: '16px'}}>Vous avez du loisir ?</legend>
                        <RadioGroup aria-label="gender" name="gender1" value={valueLoisir} onChange={handleChangeLoisir}>
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
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Quel sport pratiqué vous ?</label>
                                <input type="text" className="form-control" disabled={disabledSport}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Quel est la fréquence ?</label>
                                <input type="text" className="form-control" disabled={disabledSport}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Quel est votre loisir ?</label>
                        <input type="text" className="form-control" disabled={disabledLoisir}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Année pour sport</label>
                        <input type="number" className="form-control" disabled={disabledSport}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Année pour loisir</label>
                        <input type="number" className="form-control" disabled={disabledLoisir}/>
                    </div>
                </div>
            </div>
            </fieldset>
            <div className="row d-flex justify-content-center">
                <button onClick={submitValidate} className="btn btn-primary btnEnfants">VALIDER</button>
            </div>
        </>
    );
}

export default Sport;