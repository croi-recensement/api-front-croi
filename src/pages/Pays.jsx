import React, {useState} from 'react';
import { getCountry, getProvince, getRegion } from '../services/DataPays';

const Pays = props =>{
    const countries = getCountry();

    const [country, setCountry] = useState('');
    const [province, setProvince] = useState('');
    const [region, setRegion] = useState('');
    const [disabled, setDisabled] = useState('disabled');

    const handleChangeContr = (e) => {
        setCountry(e.target.value)
    }

    const handleChangeProv = (e) => {
        setProvince(e.target.value)
        if(country == "Madagascar")
        setDisabled('')
    }

    const handleChangeReg = (e) => {
        setRegion(e.target.value)
    }

    const handleChangeQuart = (e) =>{

    }

    const provinces = getProvince(country);
    const regions = getRegion(province);
    
    return(
            <>
            <div className="row">
                <div className="col-md-3">
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
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Provaince</label>
                        <select className="form-control" onChange={handleChangeProv}>
                            <option value="">Selectionner un province</option>
                            {provinces.map((itemsProv, key) => {
                                return <option key={key} value={itemsProv}>{itemsProv}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
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
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Quartier</label>
                        <select className="form-control" onChange={handleChangeQuart} disabled = {disabled}>
                            <option>Selectionner un quartier</option>
                            
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pays;