import React from 'react';

const Finished = () =>{
    return(
        <div className="container">
            <style>{cssstyle}</style>
            <div>
            <p>Merci pour votre colaboration, à bientôt</p>
            </div>
        </div>
    )
}

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 100%;
}
p{
    color: #fff;
    font-size: 20px;
    line-height: 30px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}

.slick-next:before, .slick-prev:before {
    color: #000;
}
`

export default Finished;