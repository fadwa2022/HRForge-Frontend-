import React from 'react';
import img from "@/helpers/home/assets/img/depositphotos_598023856-stock-photo-portrait-cheerful-businesswoman-sitting-desk.jpg";
import { Link } from 'react-router-dom';

const HeroArea = () => {
  return (
    <main id="main">

    <section id="hero" class="hero">

      <img src={img} alt="" data-aos="fade-in"/>

      <div class="container">
        <div class="row">
          <div class="col-lg-10">
            <h2 data-aos="fade-up" data-aos-delay="100">You can access your own space</h2>
            <p data-aos="fade-up" data-aos-delay="200">If there are any issues,you can contact us</p>
          </div>
          <div class="col-lg-5">
            <form action="#" class="sign-up-form d-flex" data-aos="fade-up" data-aos-delay="300">
              <div   type="text" class="form-control">email : rh@gmail.com</div>
              <Link to='/auth/login' className='btn btn-primary'>Sign In</Link>
            </form>
          </div>
        </div>
      </div>

    </section>
  

  </main>

  );
};

export default HeroArea;
