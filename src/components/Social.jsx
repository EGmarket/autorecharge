import React from "react";

const socialShare = [
  {
    img: "facebook",
    link: "https://www.facebook.com/",
  },
  { img: "twitter", link: "https://twitter.com/" },
  {
    img: "instagram",
    link: "https://www.instagram.com/",
  },
  {
    img: "youtube",
    link: "https://www.youtube.com/",
  },
];
const Social = () => {
  return (
    <ul>
      {socialShare.map((item, i) => (
        <li key={i}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              className="svg"
              src={`img/svg/social/${item.img}.svg`}
              alt="brand"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
