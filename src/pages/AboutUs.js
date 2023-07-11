import React from 'react';


function AboutUs() {
  let message = ``;
  return (
    <section className="section-white">

      <div className="container">

        <div className="row">

          <div className="col-md-12 text-center">

            <h2 id ="about-us" className="section-title">The Team Behind Calpal</h2>

            <p className="section-subtitle">{message}</p>

          </div>
          
          <div className="col-sm-6 col-md-4">

<div className="team-item">

  <img src="https://www.linkpicture.com/q/345454302_249964134275081_1706394919925166623_n.jpeg" className="team-img" alt="pic" />
  <h3>Goldie Rizova</h3>
  <div className="team-info"><p>Junior Engineer</p></div>
  <p>I am a Junior Software Engineer currently in a bootcamp.</p>

  <ul className="team-icon">

    <li><a href="https://www.twitter.com" className="twitter">
      <i className="fa fa-twitter"></i>
    </a></li>

    <li><a href="https://www.pinterest.com" className="pinterest">
      <i className="fa fa-pinterest"></i>
    </a></li>


  </ul>


</div>
</div>
<div className="col-sm-6 col-md-4">

<div className="team-item">

  <img src="" className="team-img" alt="pic" />
  <h3>Mohamed Elhelw</h3>
  <div className="team-info"><p>Junior Engineer</p></div>
  <p>I am a Junior Software Engineer currently in a bootcamp.</p>

  <ul className="team-icon">

    <li><a href="https://www.pinterest.com" className="twitter">
      <i className="fa fa-twitter"></i>
    </a></li>

    <li><a href="https://www.pinterest.com" className="pinterest">
      <i className="fa fa-pinterest"></i>
    </a></li>

 

  </ul>


</div>
</div>

<div className="col-sm-6 col-md-4">

<div className="team-item">

  <img src="" className="team-img" alt="pic" />

  <h3>Matt Wagner</h3>

  <div className="team-info"><p>Junior Engineer</p></div>

  <p>About me</p>

  <ul className="team-icon">

    <li><a href="https://www.pinterest.com" className="twitter"><i className="fa fa-twitter"></i></a></li>

    <li><a href="https://www.pinterest.com" className="pinterest"><i className="fa fa-pinterest"></i></a></li>



  </ul>

</div>

</div>

<div className="col-sm-6 col-md-4">

<div className="team-item">

  <img src="" className="team-img" alt="pic" />

  <h3>José Segura</h3>

  <div className="team-info"><p>Junior Engineer</p></div>

  <p> Junior Engineer</p>

  <ul className="team-icon">

    <li><a href="https://www.pinterest.com" className="twitter"><i className="fa fa-twitter"></i></a></li>

    <li><a href="https://www.pinterest.com" className="pinterest"><i className="fa fa-pinterest"></i></a></li>



  </ul>

</div>


</div>

</div>
<div className="col-sm-6 col-md-4">

<div className="team-item">

<img src="" className="team-img" alt="pic" />

<h3>Anthony Groce</h3>

<div className="team-info"><p>Junior Engineer</p></div>

<p>About me</p>

<ul className="team-icon">

  <li><a href="https://www.pinterest.com" className="twitter"><i className="fa fa-twitter"></i></a></li>

  <li><a href="https://www.pinterest.com" className="pinterest"><i className="fa fa-pinterest"></i></a></li>

 

</ul>

</div>

          

        </div>
        
      </div>
      

    </section>
  )
}

export default AboutUs;

          