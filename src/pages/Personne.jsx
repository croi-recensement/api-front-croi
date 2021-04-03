import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import validator from 'validator';


const Personne = (props) =>{

    const [data, setData] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [selectedValue, setSelectedValue] = useState('M');
    const [phone, setPhone] = useState('mg');
    const [errorMessagePassport, setErrorMessagePassport] = useState('');
    const [errorMessageNumber, setErrorMessageNumber] = useState('');

    
    const checkNumber = (number) =>{
        let numb = /^([0-9]{12})$/;

        return numb.test(number);
    }

    const handleChange = (index) => {
        //passport
        if (validator.isPassportNumber(index,'IN')) {
            setErrorMessagePassport('');
        }else{
            setErrorMessagePassport('Is Invalid Passport Number')
        }
        //cin
        if(checkNumber(index)){
            setErrorMessageNumber('')
        }else{
            setErrorMessageNumber('invalid numéro')
        }
    }

    return(
            <>
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
                    <div className="form-group">
                        <label>Date de Naissance</label>
                        <DatePicker 
                            selected={startDate} 
                            onChange={date => setStartDate(date)} 
                            className="form-control datePicker"
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
                        <label>Situation Marital</label>
                        <select className="form-control" aria-label="Disabled select example">
                            <option selected>Selection votre situation</option>
                            <option value="1">Célibataire</option>
                            <option value="2">Marié</option>
                            <option value="3">Séparé</option>
                            <option value="4">Divorcé</option>
                            <option value="5">Veuf</option>
                            <option value="6">Autre</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div><label>Sexe</label></div>
                        <Radio
                            checked={selectedValue === 'M'}
                            onChange={handleChange}
                            value="Masculin"
                            name="radio-button-demo"

                        />Masculin
                        <Radio
                            checked={selectedValue === 'F'}
                            onChange={handleChange}
                            value="Feminin"
                            name="radio-button-demo"
                            
                        />Féminin
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
                        <label>Autre Nationalité</label>
                        <input type="text" className="form-control" onChange={handleChange} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Type du document de voyage</label>
                        <select className="form-control" aria-label="Disabled select example">
                            <option selected>Selection votre document</option>
                            <option value="1">Passeport diplomatique</option>
                            <option value="2">Passeport officie</option>
                            <option value="3">Passeport ordinaire</option>
                            <option value="4">Passeport de service</option>
                            <option value="5">Passeport spécial</option>
                            <option value="6">Autre document</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>N° du Passport</label>
                        <input type="text" className="form-control" onChange={(e) => handleChange(e.target.value)} />
                        <p className="text-primary">{errorMessagePassport}</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>N° CIN</label>
                        <input type="text" className="form-control" onChange={(e) => handleChange(e.target.value)} />
                        <p className="text-primary">{errorMessageNumber}</p>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Personne;