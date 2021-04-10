import React, { useEffect, useState }  from 'react';
import { FormControlLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Pays from './Pays';
import Question from '../Data/Question.json'

const useStyles = makeStyles(theme => ({

    backButton: {
        marginRight: theme.spacing(8),
    },

}));

const Sante = () => {

    const classes = useStyles();
    const [valueMal, setValueMal] = useState('non');
    const [valueChrg, setValueChrg] = useState('non');
    const [valueQuest, setValueQuest] = useState('non');
    const [dataMaladies, setDataMaladies] = useState(Question);
    const [dataTypes, setDataTypes] = useState([]);
    const [dataCats, setDataCats] = useState('');


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

    const handleChangeQuest = (e) =>{
        setValueQuest(e.target.value);
    }

    const handleChangeType = (index) => {
        let tabs = [];
        dataMaladies.filter((maladie) =>{
            if(maladie.type === index){
                tabs.push(<option key={maladie.id} value={maladie.categorie}>{maladie.categorie}</option>);
            }
        })
        setDataTypes(tabs);
    }

    const handleChangeCat = (index) => {
        let tabs = [];
        dataMaladies.map((maladie) => {
            if(maladie.categorie === index){
                const maladies = maladie.maladie;
                maladies.map((nom) =>{
                    tabs.push(<option key={maladie.id} value={nom.nom}>{nom.nom}</option>);
                })
            }
        });
        setDataCats(tabs)
    }

    return(
        <>
        {valueQuest !== 'oui' ? (
            <FormControl>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Type de maladie vous avez ?</label>
                            <select className="form-control" onChange={e => handleChangeType(e.target.value)}>
                                <option>Selectionnez le type</option>
                                <option value="Chronique">Chronique</option>
                                <option value="Ponctuelle">Ponctuelle</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Catégorie :</label>
                            <select className="form-control" onChange={e => handleChangeCat(e.target.value)}>
                                <option>Selectionnez le type</option>
                                { dataTypes }
                                <option>Autre</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Maladie :</label>
                            <select className="form-control">
                                <option>Selectionnez le type</option>
                                { dataCats }
                                <option>Autre</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Autre</label>
                            <input type="text" className="form-control" disabled/>
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
                            <legend className="w-auto px-2" style={{fontSize: '16px'}}>Vous avez subit une chirurgie ?</legend>
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
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Coût d'évacuation (en ar)</label>
                            <input type="number" className="form-control" disabled={disabledEvac}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Poids</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <label>Taille</label>
                                <input type="number" className="form-control" />
                            </div>
                        </div>
                    </div>
            
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Nom de la Chirurgie ?</label>
                            <input type="text" className="form-control" disabled={disabledChg}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Coût de chirurgie (en ar)</label>
                            <input type="number" className="form-control" disabled={disabledChg}/>
                        </div>
                    </div>
                </div>
                <Pays />
                <div className="row">
                    <div className="col-md-12">
                        <fieldset className="form-group border p-3">
                            <legend className="w-auto px-2" style={{fontSize: '16px'}}>Voulez-vous répondre aux question suivantes ? </legend>
                            <RadioGroup aria-label="gender" name="gender1" value={valueQuest} onChange={handleChangeQuest}>
                                <div className="d-flex justify-content-around">
                                    <FormControlLabel value="oui" control={<Radio />} label="Oui" />
                                    <FormControlLabel value="non" control={<Radio />} label="Non" />
                                </div>
                            </RadioGroup>
                        </fieldset>
                    </div>
                </div>
            </FormControl>):(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center text-white mb-5">
                        <h1>Quelle est le</h1>
                    </div>
                    <div className="col-md-12 text-center ">
                        <div >
                            <Button
                                color="primary"
                                variant="contained"
                                className={classes.backButton}
                            >
                                OUI
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                            >
                                NON
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}

export default Sante;