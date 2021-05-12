import React, {useState} from 'react';
import { 
    getCountry, 
    getProvince, 
    getRegion, 
    getDistrict, 
    getCommune,
    getQuartier
} from '../services/DataPays';

const Pays = props =>{
    const countries = getCountry();

    const [country, setCountry]     = useState('');
    const [region, setRegion]       = useState('');
    const [province, setProvince]   = useState('');
    const [district, setDistrict]   = useState('');
    const [commune, setCommune]     = useState('');
    const [quartier, setQuartier]   = useState('')
    const [disabled, setDisabled]   = useState('disabled');

    const handleChangeContr = (e) => {
        setCountry(e.target.value)
    }

    const handleChangeProv = (e) => {
        setProvince(e.target.value)
        if(country === "Madagascar")
        setRegion('')
        setDisabled('')
        setDistrict('')
        setCommune('')
        setQuartier('')
        
    }

    const handleChangeReg = (e) => {
        setRegion(e.target.value)
    }

    const handleChangeCom = (e) => {
        setCommune(e.target.value)
    }

    const handleChangeDist = (e) =>{
        setDistrict(e.target.value)
    }

    const handleChangeQuart = (e) =>{
        setQuartier(e.target.value)
    }


    const provinces     = getProvince(country);
    const regions       = getRegion(province);
    const districts     = getDistrict(region);
    const communes      = getCommune(district);
    const quartiers     = getQuartier(commune);
    return(
            <>
            <div className="row">
                <div className="col-md-2">
                    <div className="form-group">
                        <label>Pays</label>
                        <select className="form-control" onChange={handleChangeContr}>
                            <option value="">Selectionner un pays</option>
                            {countries.map((itemsContr, key) => {
                                return <option key={key} value={itemsContr}>{itemsContr}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group">
                        <label>Province</label>
                        <select className="form-control" onChange={handleChangeProv}>
                            <option value="">Selectionner un province</option>
                            {provinces.map((itemsProv, key) => {
                                return <option key={key} value={itemsProv}>{itemsProv}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group">
                        <label>Région</label>
                        <select className="form-control" onChange={handleChangeReg} disabled = {disabled}>
                            <option value="">Selectionner un région</option>
                                {regions.map((items, key) => {
                                    return <option key={key} value={items}>{items}</option>
                                })}
                        </select>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group">
                        <label>District</label>
                        <select className="form-control" onChange={handleChangeDist} disabled = {disabled}>
                            <option value="">Selectionner un disctrict</option>
                            {districts.map((items, key) => {
                                    return <option key={key} value={items}>{items}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group">
                        <label>Commune</label>
                        <select className="form-control" onChange={handleChangeCom} disabled = {disabled}>
                            <option value="">Selectionner un commune</option>
                            {communes.map((items, key) => {
                                    return <option key={key} value={items}>{items}</option>
                            })} 
                        </select>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group">
                        <label>Fokotany</label>
                        <select className="form-control" onChange={handleChangeQuart} disabled = {disabled}>
                            <option>Selectionner un Fokotany</option>
                            {quartiers.map((items, key) => {
                                    return <option key={key} value={items}>{items}</option>
                            })} 
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pays;