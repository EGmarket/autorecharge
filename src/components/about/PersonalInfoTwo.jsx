import React from "react";

const personalDetails = [
  { title: "Name", info: "Jessica Parker" },
  { title: "Birthday", info: "April 22, 1990" },
  { title: "Mail", info: "hello@anderson.com" },
  { title: "Phone", info: "+123 456 7890" },
  { title: "Address", info: "20, Bardeshi, Dhaka" },
  { title: "Nationality", info: "Bangladeshi" },
];

const aboutContentInfo = {
  meta: "About Me",
  title: "World leading UI/UX designer",
  subTitle: "A passionate UI/UX Designer and Web Developer based In NYC, USA",
  description: `Hi! My name is Jessica Parker. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.`,
};

const PersonalInfoTwo = () => {
  return (
    <div className="know_tm_about">
      <div className="left" data-aos="fade-right">
        <div className="left_inner">
          <div className="image">
            <img src="img/thumbs/35-44.jpg" alt="" />
            <div
              className="main"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "img/about/2.jpg"
                })`,
              }}
            ></div>
          </div>
          {/* End .image */}

          <div className="details">
            <ul>
              {personalDetails.map((value, i) => (
                <li key={i}>
                  <h3>{value.title}</h3>
                  <span>{value.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* End .left */}

      <div className="right" data-aos="fade-right">
        <div className="know_tm_main_title">
          <span>{aboutContentInfo.meta}</span>
          <h3>{aboutContentInfo.title}</h3>
        </div>
        <div className="bigger_text">
          <p>{aboutContentInfo.subTitle}</p>
        </div>
        <div className="text">
          <p>{aboutContentInfo.description}</p>
        </div>
        <div className="know_tm_button">
          <a href="img/cv/1.jpg" download>
            Download CV
          </a>
        </div>
      </div>
      {/* End .right */}
    </div>
  );
};

export default PersonalInfoTwo;
