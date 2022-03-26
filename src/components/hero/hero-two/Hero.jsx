import React from "react";
import SocialThree from "../../SocialThree";

const heroContent = {
  congratText: `I'm`,
  name: "Tom Anderson",
  description: ` A passionate UI/UX Designer and Web Developer based In NYC,
  USA`,
};

const Hero = () => {
  return (
    // <!-- HERO -->
    <div className="know_tm_hero_second">
      <div className="background_shape"></div>
      <div className="hero_content">
        <div className="container">
          <div className="content_inner">
            <div className="main_info">
              <div className="left">
                <span className="subtitle">{heroContent.congratText}</span>
                <h3 className="name">{heroContent.name}</h3>
                <p className="text">{heroContent.description}</p>
                <div className="social">
                  <SocialThree />
                </div>
              </div>
              {/* End .left */}

              <div className="right">
                <div className="image">
                  <img src="img/thumbs/47-60.jpg" alt="item" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/hero/2.jpg"
                      })`,
                    }}
                  ></div>
                  <span className="first anim_translate"></span>
                  <span className="second anim_left2"></span>
                  <span className="third anim_right2"></span>
                </div>
              </div>
            </div>
            {/* End main_info */}
          </div>
        </div>
      </div>

      {/* <!-- Hero Shapes --> */}
      <span className="one anim_circle">
        <img className="svg" src="img/svg/shapes/11.svg" alt="shape" />
      </span>
      <span className="two anim_scale2">
        <img className="svg" src="img/svg/shapes/10.svg" alt="shape" />
      </span>
      <span className="three anim_scale2">
        <img className="svg" src="img/svg/shapes/6.svg" alt="shape" />
      </span>
      <span className="four anim_scale2">
        <img className="svg" src="img/svg/shapes/6.svg" alt="shape" />
      </span>
      <span className="five anim_circle">
        <img className="svg" src="img/svg/shapes/11.svg" alt="shape" />
      </span>
      <span className="six anim_scale2">
        <img className="svg" src="img/svg/shapes/10.svg" alt="shape" />
      </span>
      <span className="seven anim_scale2">
        <img className="svg" src="img/svg/shapes/6.svg" alt="shape" />
      </span>
      <span className="eight anim_scale2">
        <img className="svg" src="img/svg/shapes/10.svg" alt="shape" />
      </span>
      <span className="nine anim_scale2">
        <img className="svg" src="img/svg/shapes/6.svg" alt="shape" />
      </span>
      <span className="ten anim_scale2">
        <img className="svg" src="img/svg/shapes/10.svg" alt="shape" />
      </span>
      <span className="eleven anim_circle">
        <img className="svg" src="img/svg/shapes/11.svg" alt="shape" />
      </span>
      <span className="twelve anim_circle">
        <img className="svg" src="img/svg/shapes/11.svg" alt="shape" />
      </span>
      <span className="thirteen anim_scale2">
        <img className="svg" src="img/svg/shapes/6.svg" alt="shape" />
      </span>
      <span className="fourteen anim_circle">
        <img className="svg" src="img/svg/shapes/11.svg" alt="shape" />
      </span>
      <span className="fifteen anim_scale2">
        <img className="svg" src="img/svg/shapes/6.svg" alt="shape" />
      </span>
      <span className="sixteen anim_scale2">
        <img className="svg" src="img/svg/shapes/10.svg" alt="shape" />
      </span>
      <span className="seventeen anim_scale2">
        <img className="svg" src="img/svg/shapes/10.svg" alt="shape" />
      </span>
      <span className="eighteen anim_scale2">
        <img className="svg" src="img/svg/shapes/10.svg" alt="shape" />
      </span>
      {/* <!-- /Hero Shapes --> */}
    </div>
    // <!-- /HERO -->
  );
};

export default Hero;
