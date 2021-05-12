import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Question from '../Data/Question.json';
import Typography from '@material-ui/core/Typography';

import Sante from '../pages/Sante';

const dataQuestion = (props) =>{
    let tabs = [];
    Question.map((maladie) => {
      if(maladie.categorie === props.categorie){
       let datas = maladie.maladie;
        datas.map((nom) => {
            if(nom.nom === props.maladie){
              tabs.push(nom.questions)
            }
        })
      }
    })
    return tabs[0];
}

const Sliders = (props) => {
  let settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const questions = dataQuestion(props);
  const [count, setCount] = useState(1);
  const [result, setResult] = useState('');
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if(questions[0] !== "" && result === ""){
      setResult(questions[0].quest);
      return true;
    }
    if(questions.length == 1){
      props.handleNext()
    }
  })

  const handleNext = (e) =>{
    e.preventDefault();
    setCount(count + 1)
    questions.map(question =>{
      if(question.id == count){
        setResult(question.quest)
      }
    })
    if((questions.length - 1) < count ){
      
    }
  }

  return (
    <div className="containers">
      <fieldset className="form-group border p-5 field">
        <legend class="w-auto px-2" style={{fontSize: '16px'}}>QUESTIONS</legend>
        <style>{cssstyle}</style>
        <Slider {...settings}>
              <div className="question">
                <span>{result}</span>
              </div>
        </Slider>
          <div className="d-flex justify-content-around mt-5">
            <button onClick={handleNext} className="btn btn-primary btnOui">OUI</button>
            <button onClick={handleNext} className="btn btn-primary btnOui">NON</button>
          </div>
      </fieldset>
    </div>
  );
}

const cssstyle = `
.containers {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 100%;
}
.question{
    text-align: center;
    font-size: 16px;
    color: #fff;
}
.btnHide{
  display: none !important;
}
button{
  marginRight: 20px;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`
export default Sliders;