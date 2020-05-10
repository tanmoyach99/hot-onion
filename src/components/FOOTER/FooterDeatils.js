import React, { useState, useEffect } from 'react';

import Footer from './Footer';
import { chooseData } from '../../fakefoods/foods';

const  FooterDeatils = () => {
  const [chooseItems, setChooseItems] = useState([])
  useEffect(()=> {
    setChooseItems(chooseData)
  },[])
  return (
    <section className="why-choose-us py-5">
    <div className="container">
        <div className="section-title w-50 pb-4 " >
            <button className="align-items-center btn btn-danger" style={{marginTop:"100px",marginLeft:"500px", marginBottom:"30px",width:"200px",borderRadius:"15px"}}>checkout your food </button>
            <h2 >Why you choose us</h2>
            <p className="pr-5" >Barton waited twenty always repair in within we do. An delighted offering crusty mu is
                dagwood's at. Boy prosperous increasing surround </p>
        </div>
        <div className="row" >
            {chooseItems.map(item => <Footer key={item.id} item={item} />)}
        </div>
    </div>
</section>
  );
};

export default FooterDeatils;
