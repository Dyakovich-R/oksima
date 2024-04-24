import '../styles/navigation.scss';

export const Navigation = () => {
  return (
    <section className="navigation">
      <div className="navigation__container">
        <div className="navigation__group">
          <div className="navigation__group--logo"></div>

          <nav className="navigation__nav">
            <ul className="navigation__nav--list">
              <li className="navigation__nav--item">About us</li>
              <li className="navigation__nav--item">Features</li>
              <li className="navigation__nav--item">Blog</li>
              <li className="navigation__nav--item">Contact</li>
            </ul>
            <button className="navigation__nav--button">Download App</button>
          </nav>
        </div>

        <div className="navigation__content">
          <div className="navigation__content--group">
            <h1 className="navigation__content--title">
              Introducing <b>Abstract</b> <br /> App landing page
            </h1>
            <h3 className="navigation__content--text">
              A perfect landing page to showcase your new App.
            </h3>
          </div>
          <div className="navigation__content--image"></div>
        </div>
      </div>

			<div className='navigation__image'/>
    </section>
  );
};
