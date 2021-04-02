import React from 'react';

const Pays = props =>{
    
    return(
            <>
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Pays d'origine</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Provaince</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Région</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Quartier</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pays;