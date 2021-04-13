import React, {useState} from 'react';
import { FormControlLabel } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import validator from 'validator';
import { Multiselect } from "multiselect-react-dropdown";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { getCountry } from '../../services/DataPays';

const Parents = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [sexe, setSexe] = useState('HOMME');
    const [phone, setPhone] = useState('mg');
    const [nbrEnfant, setNbrEnfant] = useState('disabled');
    const [sitMart, setSitMart] = useState('');
    const [errorMessagePassport, setErrorMessagePassport] = useState('');
    const [errorMessageNumber, setErrorMessageNumber] = useState('');
    const countries = getCountry();
    const [objArray, setObjArray] = useState([
        { key: "Passeport diplomatique"},
        { key: "Passeport officie"},
        { key: "Passeport ordinaire"},
        { key: "Passeport ordinaire"},
        { key: "Passeport de service"},
        { key: "Passeport spécial"},
        { key: "Autre document"},
    ])
    
    const checkNumber = (number) =>{
        let numb = /^([0-9]{12})$/;

        return numb.test(number);
    }

    const handleChangePassport = (index) => {
        if (validator && validator.isPassportNumber(index,'IN')) {
            setErrorMessagePassport('');
        }else{
            setErrorMessagePassport('Is Invalid Passport Number')
        }
    }

    const handleChangeNumber = (index) => {
        if(checkNumber(index)){
            setErrorMessageNumber('')
        }else{
            setErrorMessageNumber('invalid numéro')
        }
    }

    const handleChange = (index) => {}

    const handleSituation = (e) => {
        const data = e.target.value;
        if(data && data === "marie"){
            setSexe('FEMME');
            setNbrEnfant('')
        }
    }

    const handleEnfant = () => {
        setSexe('ENFANTS')
        setSitMart('disabled')
    }


    return(
        <fieldset className="form-group border p-5">
        <legend className="w-auto px-2" style={{fontSize: '16px'}}>{sexe}</legend>
        <div className="row">
            <div className="col-md-3">
                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" className="form-control" onChange={handleChange} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>Prénom</label>
                    <input type="text" className="form-control" onChange={handleChange} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>Lieu de Naissance</label>
                    <input type="text" className="form-control" onChange={handleChange} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group birthday">
                    <label>Date de Naissance</label>
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        className= "form-control datepicker"
                    />
                </div>
            </div>
        </div>
        <div className="row"> 
            <div className="col-md-3">
                <div className="form-group">
                    <label>Nationalité Actuelle</label>
                    <input type="text" className="form-control" onChange={handleChange} />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>Autre Nationalité</label>
                    <Multiselect 
                        options={countries} 
                        isObject={false} 
                        selectionLimit="2"
                        placeholder="Nationalité"
                    />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>N° CIN</label>
                    <input type="text" className="form-control" onChange={(e) => handleChangeNumber(e.target.value)} />
                    <div className="text-primary">{errorMessageNumber}</div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                <label>Phone</label>
                    <PhoneInput
                        country={'mg'}
                        value={phone}
                        onChange={handleChange}
                        className="form-control phoneInput"
                    />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <div className="form-group">
                    <label>Document du voyage</label>
                    <Multiselect
                        options={objArray}
                        displayValue="key"
                        selectionLimit="1"
                        placeholder="Passport"
                    />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>N° du Passport</label>
                    <input type="text" className="form-control" onChange={(e) => handleChangePassport(e.target.value)} />
                    <div className="text-primary">{errorMessagePassport}</div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>Nombre d'enfant</label>
                    <input type="number" className="form-control" onChange={handleEnfant} disabled={nbrEnfant}/>
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>Situation Marital</label>
                    <select className="form-control" aria-label="Disabled select example" onChange={handleSituation} disabled={sitMart}>
                        <option selected>Selection votre situation</option>
                        <option value="celibat">Célibataire</option>
                        <option value="marie">Marié</option>
                        <option value="separe">Séparé</option>
                        <option value="divorce">Divorcé</option>
                        <option value="veuf">Veuf</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
            </div>
        </div>
        </fieldset>
    )
}

export default Parents;