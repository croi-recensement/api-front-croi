import React from 'react';

const Social = props =>{

    const submitValidate = () => {
        
    }
    
    return(
            <>
            <fieldset className="form-group border p-5">
            <legend className="w-auto px-2" style={{fontSize: '16px'}}>SOCIAL</legend>
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Aide pour éducation</label>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Aide pour nouriture</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Aide pour financement</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Aide pour la santé</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Aide visal</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Aide pour sportive</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>aide pour travail</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Aide social</label>
                            <input type="text" className="form-control" />
                        </div>
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

export default Social;