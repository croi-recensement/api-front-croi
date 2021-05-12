import React from 'react';

const Tabligh = props =>{

    const handleResponse = (e) => {
        e.preventDefault();
        props.handleNext()
    }

    const submitValidate = () => {
        
    }
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="d-flex align-self-auto flex-column">
                        <div>
                            <div className="">1- Quel est le prophète le plus cité dans le coran ?</div>
                        </div>
                        <div>
                            <input type="radio" /> Issa عليه السلام (Jesus)
                        </div>
                        <div>
                            <input type="radio" /> Moussa عليه السلام (Moïse)
                        </div>
                        <div>
                            <input type="radio" /> Ibrahim عليه السلام (Abraham)
                        </div>
                        <div>
                            <input type="radio" /> Mohammed ﷺ
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="d-flex align-self-auto flex-column">
                        <div>
                            <div className="">2- Quels sont les mois sacrés ?</div>
                        </div>
                        <div>
                            <input type="radio" /> Ramadan, Dhul Hijah, Safar et Chawwal
                        </div>
                        <div>
                            <input type="radio" /> Ramadan, Chaabane, Dhul Hijjah et Safar
                        </div>
                        <div>
                            <input type="radio" /> Dhul Hijjah, Radjab, Mouharram et Dhul Qi'dah
                        </div>
                        <div>
                            <input type="radio" /> Mouharram, Ramadan, Dhul Hijjah et Chawwal
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center m-5">
                <button type="button" className="btn btn-primary btn-circle btn-xl" onClick={handleResponse}>Réponse</button>
            </div>
        </div>
    );
}

export default Tabligh;