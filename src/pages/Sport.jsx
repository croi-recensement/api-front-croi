import React from 'react';

const Sport = props =>{
    
    return(
            <>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Quel sport pratiqué vous ?</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Quel est la fréquence ?</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Quel est votre loisir ?</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="form-group">
                            <label>Dans quel club vous joué ?</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="form-group">
                            <label>En quel année vous commencé ?</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sport;