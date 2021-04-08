import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { purple } from '@material-ui/core/colors';

import Steppers from '../components/Steppers';
import Personne from '../pages/Personne';
import Logement from '../pages/Logement';
import Education from '../pages/Education';
import Sante from '../pages/Sante';
import Sport from '../pages/Sport';
import Social from '../pages/Social';
import Profession from '../pages/Profession';
import Tabligh from '../pages/Tabligh';
import Finished from '../pages/Finished';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(8),
  },
  buttonProgress: {
    color: purple[50],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  }
}));

const getSteps = () => {
    return ['Personne', 'Logement', 'Education', 'Santé', 'Sport', 'Social', 'Profession', 'Tabligh'];
}


const Inscription = (props) =>{
    const steps = getSteps();
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const timer = React.useRef();

    useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);

    const handleNext = () => {
      if (!loading) {
        setSuccess(false);
        setLoading(true);
        timer.current = window.setTimeout(() => {
          setSuccess(true);
          setLoading(false);
        }, 2000);
      }
  
      //if(success)
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    const handleBack = () =>{
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    }
  
    const handleReset = () =>{
      setActiveStep(0);
    }

    const getStepContent = (stepIndex) => {

        switch (stepIndex) {
          case 0:
            return <Personne handleNext={handleNext}/>
          case 1:
            return <Logement handleNext={handleNext}/>
          case 2:
            return <Education handleNext={handleNext}/>
          case 3:
              return <Sante />
          case 4:
              return <Sport />
          case 5:
            return <Social />
          case 6:
            return <Profession />
          case 7:
            return <Tabligh  />
          default:
            return <Finished />
        }
      }


    return(
          <>
            <div className={classes.root}>
              <div className="container-fluid mb-5 col-md-12 col-xs-6">
                  <Steppers getSteps={getSteps} activeStep={activeStep} />
              </div>

                  <form className="bg-success container-fluid p-5 ">
                    <fieldset>
                      {activeStep === steps.length ? (
                        <div>
                          <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                          <div className="form-group text-center mt-5">
                            <Button onClick={handleReset} variant="contained">Reset</Button>
                          </div>
                        </div>
                      ): (
                          <div>
                            { steps[activeStep] === 'Tabligh'  ? (
                                <div>
                                  <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                </div>
                            ): (
                              <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div className="form-group text-center mt-5">
                                  <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                    variant="contained"
                                    color="primary"
                                  >
                                    Retour
                                  </Button>
                                  <Button variant="contained" color="secondary" onClick={handleNext}>
                                      {activeStep === steps.length - 1 ? 'fini !!!' : 'Etape ' + (activeStep + 1)}
                                      {loading && <CircularProgress size={24} className={classes.buttonProgress} color="secondary"/>}
                                  </Button>
                                  
                                </div>
                              </div>
                            )}
                          </div>
                      )}
                    </fieldset>    
                  </form>             
            </div>
          </>
    );
}

export default Inscription;