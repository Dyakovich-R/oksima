import React from 'react';
import '../styles/tradeDesign.scss';

export const TradeDesign = () => {
  return (
    <>
      <div className="trade-row">
        <section className="trade">
          <div className="trade__container">
            <div className="trade__icon" />
            <h2 className="trade__title">Modern & Trendy Design</h2>
            <h3 className="trade__desc">
              Dictas scaevola democritum cu his, magna abhorreant dissentias ut
            </h3>
            <div className="trade__button">
              Learn More
              <div className="trade__button--arrow" />
            </div>
          </div>
        </section>

        <section className="trade">
          <div className="trade__container">
            <div className="trade__heath" />
            <h2 className="trade__title">Save your Time</h2>
            <h3 className="trade__desc">
              oporte petrioque sit et, eum ne prima nemore perfecto. Eu cibo
              quidam eleifend per.
            </h3>
            <div className="trade__button">
              Learn More
              <div className="trade__button--arrow" />
            </div>
          </div>
        </section>

        <section className="trade">
          <div className="trade__container">
            <div className="trade__time" />
            <h2 className="trade__title">Made with Love</h2>
            <h3 className="trade__desc">
              Inimicus hendrerit an duo, feugiat adipiscing everti nostrum id.
            </h3>
            <div className="trade__button">
              Learn More
              <div className="trade__button--arrow" />
            </div>
          </div>
        </section>

        <section className="trade--design">
          <div className="trade--design__container">
            <h2 className="trade--design__title">
              Modern &<br /> Trendy Design
            </h2>
            <h3 className="trade--design__desc">
              Dictas scaevola democritum cu his, magna abhorreant dissentias
              utDictas scaevola democritum cu his.
            </h3>
            <div className="trade--design__button">
              Learn More
              <div className="trade--design__button--arrow" />
            </div>
          </div>

          <div className="trade--design__image" />
          <div className="trade--design__card" />

          <div className="trade--design__card2">
            <div className="trade--design__card2--group">
              <div className="trade--design__card2--text">Outcome Stats </div>
              <div className="trade--design__card2--icon" />
            </div>
            <div className="trade--design__card2--desc">Last month</div>
            <div className="trade--design__card2--icon2" />
            <div className="trade--design__card2--price">3.5K</div>
          </div>
        </section>
      </div>
    </>
  );
};
