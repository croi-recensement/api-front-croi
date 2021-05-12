import React, { useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';
import { connect, useStore } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import validator from 'validator';
import { Multiselect } from "multiselect-react-dropdown";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCountry } from '../../services/DataPays';

const Personne = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [phone, setPhone] = useState('');
    const [sexe, setSexe] = useState('masculin');
    const [herarchier, setHerarchie] = useState('PERE');
    const [errorMessagePassport, setErrorMessagePassport] = useState('');
    const [errorMessageNumber, setErrorMessageNumber] = useState('');
    const [iterationVal, setIterationVal] = useState(1);
    const [iterationRes, setIterationRes] = useState(1);
    const [meres, setMeres] = useState('');
    const [enfants, setEnfants] = useState('');
    const [enfant, setEnfant] = useState('');
    const [enfantMulti, setEnfantMulti] = useState(false);

    /** STATE PERSONNE */
    const [nom,setNom] = useState('');
    const [prenom,setPrenom] = useState('');
    const [cin,setCin] = useState('');
    const [dateNaissance,setDateNaissance] = useState('');
    const [lieuNaissance,setLieuNaissance] = useState('');
    const [nationalite,setNationalite] = useState('');
    const [document,setDocument] = useState('');
    const [marital,setMarital] = useState('');
    const [passport,setPassport] = useState('');
    const [nombreEnfant,setNombreEnfant] = useState('');

        
    /** END STATE */


    const countries = getCountry();

    const [objArray, setObjArray] = useState([
        { key: "Passeport diplomatique"},
        { key: "Passeport officie"},
        { key: "Passeport ordinaire"},
        { key: "Passeport ordinaire"},
        { key: "Passeport de service"},
        { key: "Passeport spécial"},
        { key: "Autre document"},
    ]);

    const checkNumber = (number) =>{
        let numb = /^([0-9]{12})$/;

        return numb.test(number);
    }

    const handleChangePassport = (index) => {
        if (validator && validator.isPassportNumber(index,'IN')) {
            setErrorMessagePassport('');
            setPassport(index)
        }else{
            setErrorMessagePassport('Is Invalid Passport Number')
        }
    }

    const handleChangeNumber = (index) => {
        if(checkNumber(index)){
            setErrorMessageNumber('')
            setCin(index)
        }else{
            setErrorMessageNumber('invalid numéro')
        }
    }

    const handleChangeDate = (date) => {
        setStartDate(date)
        let birthday = Moment(date);
        setDateNaissance(birthday)
        let today = Moment().format();
        const age = Moment(today).diff(birthday, 'years');
        if(age > 18){
            setEnfantMulti(false);
            setEnfant('')
        }
    }

    const handleChangePhone = (data) => {
        setPhone(data);
    }

    const handleChange = (e) => {
        let data = e.target.value;
        setNom(data);
        setPrenom(data);
        setLieuNaissance(data);
        setNationalite(data);
        setDocument(data);
        setMarital(data);
        setNombreEnfant(data);
    }

    const submitValidate = (e) => {
        e.preventDefault();
        setIterationVal(iterationVal + 1);
       /*if(
            nom != "" && prenom != "" &&
            lieuNaissance != "" && dateNaissance != "" &&
            nationalite != "" && cin != "" && phone != "" &&
            document != "" && passport != "" && marital != "" &&
            nombreEnfant != ""
        ){ */
            switch(iterationVal){
                case 1:
                    if(marital === "marie"){
                        setHerarchie('MERE');
                        setMeres('disabled');
                        setEnfants('')
                        /** SEND DATA PERE **/
                        localStorage.setItem('pere', 'PERE');
                        localStorage.setItem('mere', 'MERE');
                        toast(`Enregistrement réussit pour ${herarchier}`);
                    }else{
                        if(nombreEnfant > 0){
                            setHerarchie('ENFANTS');
                            setEnfants('');
                            setEnfant('disabled');
                            setEnfantMulti(true)
                            /** SEND DATA PERE **/
                            localStorage.setItem('enfant', 'ENFANT');
                            toast(`Enregistrement réussit pour ${herarchier}`);
                        }else{
                            /** SEND DATA PERE **/
                            localStorage.setItem('pere', 'PERE');
                            toast(`Enregistrement réussit pour ${herarchier}`);
                            props.handleNext()
                        }
                    }
                    break;
                case 2:
                    if(nombreEnfant > 0){
                        setHerarchie('ENFANTS');
                        setEnfants('disabled')
                        setEnfant('disabled')
                        setEnfantMulti(true)
                        /** SEND DATA MERE **/
                        localStorage.setItem('mere', 'MERE');
                        localStorage.setItem('enfant', 'ENFANT');
                        toast(`Enregistrement réussit pour ${herarchier}`);
                    }else{
                        /** SEND DATA MERE **/
                        localStorage.setItem('mere', 'MERE');
                        toast(`Enregistrement réussit pour ${herarchier}`);
                        props.handleNext()
                    }
                    break;
                default :
                    props.handleNext()
            }
       /* }else{
            toast("Veuillez renseigner tous les champs");
        }*/
        
    }

    /*const submitEnfants = (e) => {
        e.preventDefault();
        setIterationRes(iterationRes + 1);
        let nbr = nombreEnfant - iterationRes;
        for(let i = 1; i <= nombreEnfant; i++){
            if(i == (nombreEnfant - nbr)){
                toast(`Enregistrement réussit ${herarchier}-${i}`);
                console.log(i)
                if(i == nombreEnfant){
                    props.handleNext();
                }
            }
        }
    }*/


    return(
        <>
        <ToastContainer />
        <fieldset className="form-group border p-5">
        <legend className="w-auto px-2" style={{fontSize: '16px'}}>{herarchier}</legend>
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
                        onChange={date => handleChangeDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className= "form-control datepicker"
                    />
                </div>
            </div>
        </div>
        <div className="row"> 
            <div className="col-md-6">
                <div className="form-group">
                    <label>Nationalité</label>
                    <Multiselect 
                        options={countries} 
                        isObject={false} 
                        selectionLimit="3"
                        placeholder="Nationalité"
                    />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>N° CIN</label>
                    <input type="text" className="form-control" onChange={(e) => handleChangeNumber(e.target.value)} disabled={enfant}/>
                    <div className="text-primary">{errorMessageNumber}</div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                <label>Phone</label>
                    <PhoneInput
                        country={'mg'}
                        value={phone}
                        onChange={handleChangePhone}
                        className="form-control phoneInput"
                        disabled={enfant}
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
                        disable={enfantMulti}
                    />
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>N° du Passport</label>
                    <input type="text" 
                        className="form-control" 
                        onChange={(e) => handleChangePassport(e.target.value)}
                        disabled={enfant}
                    />
                    <div className="text-primary">{errorMessagePassport}</div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="form-group">
                    <label>Situation Marital</label>
                    <select className="form-control" aria-label="Disabled select example" onChange={handleChange} disabled={meres}>
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
            <div className="col-md-3">
                <div className="form-group">
                    <label>Nombre d'enfant</label>
                    <input type="number" className="form-control" onChange={handleChange} disabled={enfants}/>
                </div>
            </div>
        </div>
        </fieldset>
        <div className="row d-flex justify-content-center">
            <button onClick={submitValidate} className="btn btn-primary btnEnfants">VALIDER</button>
        </div>
    </>
    )
}

export default Personne;