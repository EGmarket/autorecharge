import React from "react";
import Video from "../../video/Video";

const heroContent = {
  congratText: `আপনি কি মোবাইল রিচার্জের ব্যবসা করবেন ভাবছেন ? কিন্তু সীম ম্যানেজ করতে পারছেন না ?`,
  name: "তাহলে আপনি সঠিক যায়গায় এসেছেন",
  description: `আমরাই দিচ্ছি মোবাইল রিচার্জ API এবং মোবাইল রিচার্জ সার্ভার`,
};

const Hero = () => {
  return (
    // <!-- HERO -->
    <div className="know_tm_hero">
      <div className="background_shape"></div>
      <div className="hero_content">
        <div className="container">
          <div className="content_inner">
            <div className="main_info">
              <div className="left">
                <span className="subtitle">{heroContent.congratText}</span>
                <h3 className="name">{heroContent.name}</h3>
                <p className="text">{heroContent.description}</p>
                <Video />
              </div>
              {/* End .left */}

              <div className="right">
                <div className="image">
                  <img src="img/thumbs/47-60.jpg" alt="item" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/hero/1.jpg"
                      })`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            {/* End main_info */}
          </div>
        </div>
      </div>

      {/* <!-- Hero Shapes --> */}
      <span className="one anim_scale">
        <img className="svg" src="img/svg/shapes/9.svg" alt="item" />
      </span>
      <span className="two anim_moveLeft">
        <img className="svg" src="img/svg/shapes/dot.svg" alt="item" />
      </span>
      <span className="three anim_moveTop">
        <img className="svg" src="img/svg/shapes/dot-2.svg" alt="item" />
      </span>
      <span className="four anim_circle">
        <img className="svg" src="img/svg/shapes/1.svg" alt="item" />
      </span>
      <span className="five anim_circle">
        <img className="svg" src="img/svg/shapes/8.svg" alt="item" />
      </span>
      <span className="six anim_circle">
        <img className="svg" src="img/svg/shapes/3.svg" alt="item" />
      </span>
      <span className="seven anim_right">
        <img className="svg" src="img/svg/shapes/4.svg" alt="item" />
      </span>
      <span className="eight anim_scale">
        <img className="svg" src="img/svg/shapes/9.svg" alt="item" />
      </span>
      <span className="nine anim_circle">
        <img className="svg" src="img/svg/shapes/3.svg" alt="item" />
      </span>
      <span className="ten anim_moveLeft">
        <img className="svg" src="img/svg/shapes/4.svg" alt="item" />
      </span>
      <span className="eleven anim_scale">
        <img className="svg" src="img/svg/shapes/9.svg" alt="item" />
      </span>
      <span className="twelve anim_extra">
        <img className="svg" src="img/svg/shapes/2.svg" alt="item" />
      </span>
      <span className="thirteen anim_circle">
        <img className="svg" src="img/svg/shapes/5.svg" alt="item" />
      </span>
      <span className="fourteen anim_scale">
        <img className="svg" src="img/svg/shapes/9.svg" alt="item" />
      </span>
      <span className="fifteen anim_circle">
        <img className="svg" src="img/svg/shapes/3.svg" alt="item" />
      </span>
      <span className="sixteen anim_scale">
        <img className="svg" src="img/svg/shapes/9.svg" alt="item" />
      </span>
      <span className="seventeen anim_circle">
        <img className="svg" src="img/svg/shapes/5.svg" alt="item" />
      </span>
      <span className="eighteen anim_scale">
        <img className="svg" src="img/svg/shapes/9.svg" alt="item" />
      </span>
      <span className="nineteen anim_scale">
        <img className="svg" src="img/svg/shapes/9.svg" alt="item" />
      </span>
      <span className="twenty anim_circle">
        <img className="svg" src="img/svg/shapes/1.svg" alt="item" />
      </span>
      {/* <!-- /Hero Shapes --> */}
    </div>
    // <!-- /HERO -->
  );
};

export default Hero;
