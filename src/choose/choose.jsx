import React from 'react';
import backDesign from '../asset/XMLID_266_.png';
import virtual from '../asset/Virtual Assets.png';
import secured from '../asset/Groupp.png';
import deliver from '../asset/Instant Deliver fund.png';
import licenced from '../asset/Authorized.png';
import finacial from '../asset/Group (1).png';
import people from '../asset/fast and relible we care.png';

const Choose = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="font-sans font-semibold text-customorange text-[22px] text-center pt-12">
          Why Choose Us
        </div>
        <div className="font-sans font-extrabold text-2xl lg:text-3xl text-darkBlue text-center py-4">
          Why choose Sendkolo?
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="col text-center">
            <div className="relative flex items-center justify-center">
              <img src={backDesign} alt="Background Design" className="w-full max-w-[189px] max-h-[158px]" />
              <img src={virtual} alt="Virtual Assets" className="absolute w-[94px] h-[94px]" />
            </div>
            <div className="font-sans font-bold text-darkBlue text-xl mt-6">
              First Virtual asset for Africa
            </div>
            <div className="font-sans font-medium text-customgray text-lg mt-2 max-w-[215px] mx-auto">
              Leverage the power of virtual assets to move your funds across borders
            </div>
          </div>

          <div className="col text-center">
            <div className="relative flex items-center justify-center">
              <img src={backDesign} alt="Background Design" className="w-full max-w-[189px] max-h-[158px]" />
              <img src={secured} alt="Secured" className="absolute w-[94px] h-[94px]" />
            </div>
            <div className="font-sans font-bold text-darkBlue text-xl mt-6">
              Zero fees and secured
            </div>
            <div className="font-sans font-medium text-customgray text-lg mt-2 max-w-[315px] mx-auto">
              Blockchain backed technology to send your funds at NO COST.
            </div>
          </div>

          <div className="col text-center">
            <div className="relative flex items-center justify-center">
              <img src={backDesign} alt="Background Design" className="w-full max-w-[189px] max-h-[158px]" />
              <img src={deliver} alt="Instant Delivery" className="absolute w-[94px] h-[94px]" />
            </div>
            <div className="font-sans font-bold text-darkBlue text-xl mt-6">
              Instant delivery
            </div>
            <div className="font-sans font-medium text-customgray text-lg mt-2 max-w-[315px] mx-auto">
              Funds are instantly delivered locally to mobile wallets (OM, MoMo) using the lightning network.
            </div>
          </div>

          <div className="col text-center">
            <div className="relative flex items-center justify-center">
              <img src={backDesign} alt="Background Design" className="w-full max-w-[189px] max-h-[158px]" />
              <img src={licenced} alt="Licenced" className="absolute w-[94px] h-[94px]" />
            </div>
            <div className="font-sans font-bold text-darkBlue text-xl mt-6">
              Licenced
            </div>
            <div className="font-sans font-medium text-customgray text-lg mt-2 max-w-[325px] mx-auto">
              We are an Authorized Digital Asset Service Provider. You are in safe hands!
            </div>
          </div>

          <div className="col text-center">
            <div className="relative flex items-center justify-center">
              <img src={backDesign} alt="Background Design" className="w-full max-w-[189px] max-h-[158px]" />
              <img src={finacial} alt="Financial Inclusion" className="absolute w-[94px] h-[94px]" />
            </div>
            <div className="font-sans font-bold text-darkBlue text-xl mt-6">
              Financial inclusion
            </div>
            <div className="font-sans font-medium text-customgray text-lg mt-2 max-w-[235px] mx-auto">
              Send as from Kolo! With bonus rates
            </div>
          </div>

          <div className="col text-center">
            <div className="relative flex items-center justify-center">
              <img src={backDesign} alt="Background Design" className="w-full max-w-[189px] max-h-[158px]" />
              <img src={people} alt="Fast and Reliable" className="absolute w-[94px] h-[94px]" />
            </div>
            <div className="font-sans font-bold text-darkBlue text-xl mt-6">
              Fast and reliable / We care
            </div>
            <div className="font-sans font-medium text-customgray text-lg mt-2 max-w-[345px] mx-auto">
              Our team works continuously to respond to your needs and save you time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
