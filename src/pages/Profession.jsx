import React, {useState} from 'react';
import { FormControlLabel } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

const Commerce = props =>{

    const [valueProf, setValueProf] = useState('commerce');

    const handleChangeProf = (e) => {
        setValueProf(e.target.value);
    }
    
    const submitValidate = () => {}
    
    return(
            <>
            <fieldset className="form-group border p-5">
            <legend className="w-auto px-2" style={{fontSize: '16px'}}>PROFESSION</legend>
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Dmaine d'activité ?</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Salaire</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Prime</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Loyé</label>
                            <input type="text" className="form-control" disabled="disabled"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <fieldset className="form-group border p-3">
                        <legend class="w-auto px-2" style={{fontSize: '16px'}}>Vous êtes ?</legend>
                        <RadioGroup aria-label="gender" name="gender1" value={valueProf} onChange={handleChangeProf}>
                            <div className="d-flex justify-content-around listeProf">
                                <FormControlLabel value="commerce" control={<Radio />} label="Commerce" />
                                <FormControlLabel value="importateur" control={<Radio />} label="Importateur/Exportateur" />
                                <FormControlLabel value="trader" control={<Radio />} label="Trader" />
                                <FormControlLabel value="revendeur" control={<Radio />} label="Revendeur" />
                                <FormControlLabel value="prestation" control={<Radio />} label="Préstation de Sérvice" />
                            </div>
                        </RadioGroup>
                        </fieldset>
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

export default Commerce;
