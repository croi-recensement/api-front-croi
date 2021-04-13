import React from 'react';

const Tabligh = props =>{

    const handleResponse = (e) => {
        e.preventDefault();
        props.handleNext()
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
                            <div className="">6- Combien y-a-t-il de mois sacrés dans le calendrier islamique ?</div>
                        </div>
                        <div>
                            <input type="radio" /> 5
                        </div>
                        <div>
                            <input type="radio" /> 4
                        </div>
                        <div>
                            <input type="radio" /> 3
                        </div>
                        <div>
                            <input type="radio" /> 2
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div className="row">
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
                <div className="col-md-6 col-sm-12">
                    <div className="d-flex align-self-auto flex-column">
                        <div>
                            <div className="">7- Quelle est la seule sourate qui ne commence pas par la formule de « Basmala » ?</div>
                        </div>
                        <div>
                            <input type="radio" /> Sourate Al Baqarah (La vache)
                        </div>
                        <div>
                            <input type="radio" /> Sourate At-Tawbah (Le repentir)
                        </div>
                        <div>
                            <input type="radio" /> Sourate Ya-Sin
                        </div>
                        <div>
                            <input type="radio" /> Sourate Al Ikhlas (La sincérité)
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="d-flex align-self-auto flex-column">
                        <div>
                            <div className="">3- Comment s’appelle le peuple qui a accueilli le prophète ﷺ à Médine suite à son départ de la Mecque ?</div>
                        </div>
                        <div>
                            <input type="radio" /> Les Quraych
                        </div>
                        <div>
                            <input type="radio" /> Les Ansars
                        </div>
                        <div>
                            <input type="radio" /> Les Banu Khuza'a
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="d-flex align-self-auto flex-column">
                        <div>
                            <div className="">8- Les anges sont faits </div>
                        </div>
                        <div>
                            <input type="radio" /> De lumière
                        </div>
                        <div>
                            <input type="radio" /> De feu
                        </div>
                        <div>
                            <input type="radio" /> D'argile sonnante
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="d-flex align-self-auto flex-column">
                        <div>
                            <div className="">4- D’après le prophète ﷺ, quel est le meilleure don qu'Allah a offert à l’Homme ?</div>
                        </div>
                        <div>
                            <input type="radio" /> L'amour
                        </div>
                        <div>
                            <input type="radio" /> La patience
                        </div>
                        <div>
                            <input type="radio" /> L'humilité
                        </div>
                        <div>
                            <input type="radio" /> La pudeur
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="d-flex align-self-auto flex-column">
                        <div>
                            <div className="">9- Lors du Hajj- pèlerinage- à quel endroit le pèlerin doit-il obligatoirement passer plusieurs nuits ? </div>
                        </div>
                        <div>
                            <input type="radio" /> Muzdalifa
                        </div>
                        <div>
                            <input type="radio" /> Minâ
                        </div>
                        <div>
                            <input type="radio" /> Arafat
                        </div>
                        <div>
                            <input type="radio" /> Médine
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="d-flex align-self-auto flex-column">
                        <div>
                            <div className="">5- Lors du voyage nocturne du prophète ﷺ aux cieux, combien de prières ont été initialement prescrites aux musulmans ?</div>
                        </div>
                        <div>
                            <input type="radio" /> 55
                        </div>
                        <div>
                            <input type="radio" /> 50
                        </div>
                        <div>
                            <input type="radio" /> 25
                        </div>
                        <div>
                            <input type="radio" /> 15
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="d-flex align-self-auto flex-column">
                        <div>
                            <div className="">10- Quel est le seul compagnon dont le nom est cité dans le Coran ? </div>
                        </div>
                        <div>
                            <input type="radio" /> Abu Huraira
                        </div>
                        <div>
                            <input type="radio" /> Zayd Ibn Al Harith
                        </div>
                        <div>
                            <input type="radio" /> Bilal Ibn Rabah
                        </div>
                        <div>
                            <input type="radio" /> Ali Ibn Abi Talib
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