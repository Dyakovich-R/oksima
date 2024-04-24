import React from 'react';
import '../styles/navigation.scss';

export const Navigation = () => {
  return (
    <section class="navigation">
      <div class="navigation__container">
        <div class="navigation__group">
          <div class="navigation__group--logo"></div>

          <nav class="navigation__nav">
            <ul class="navigation__nav--list">
              <li class="navigation__nav--item">About us</li>
              <li class="navigation__nav--item">Features</li>
              <li class="navigation__nav--item">Blog</li>
              <li class="navigation__nav--item">Contact</li>
            </ul>
            <button class="navigation__nav--button">Download App</button>
          </nav>
        </div>

        <div class="navigation__content">
          <div class="navigation__content--group">
            <h1 class="navigation__content--title">
              Introducing <b>Abstract</b> <br /> App landing page
            </h1>
            <h3 class="navigation__content--text">
              A perfect landing page to showcase your new App.
            </h3>
          </div>
          <div class="navigation__content--image"></div>
        </div>
      </div>

			<div className='navigation__image'/>
    </section>
  );
};
