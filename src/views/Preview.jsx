import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

const tabList = ["Jessica", "TOM", "Sarah"];
const tabListContent = [
  {
    tabInner: [
      { img: "1", title: "Light Demo", routePath: "/home-one-light" },
      { img: "4", title: "Dark Demo", routePath: "/home-one-dark" },
    ],
  },
  {
    tabInner: [
      { img: "2", title: "Light Demo", routePath: "/home-three-light" },
      { img: "6", title: "Dark Demo", routePath: "/home-three-dark" },
    ],
  },
  {
    tabInner: [
      { img: "3", title: "Light Demo", routePath: "/home-two-light" },
      { img: "5", title: "Dark Demo", routePath: "/home-two-dark" },
    ],
  },
];

const Preview = () => {
  document.body.classList.add("preview");
  return (
    <div className="know_tm_intro">
      <div
        className="intro_bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "img/hero/4.jpg"})`,
        }}
      ></div>

      <div className="intro_content">
        <div className="intro_title">
          <img src="img/logo/dark.png" alt="" />
          <span>Modern CV / Resume / Portfolio / React Template</span>
        </div>

        <Tabs>
          <div className="filter">
            <TabList>
              {tabList.map((val, i) => (
                <Tab key={i}>{val}</Tab>
              ))}
            </TabList>
          </div>
          {/* End filter tablist */}

          <div className="demo">
            {tabListContent.map((tabContent, i) => (
              <TabPanel key={i}>
                <div className="list_inner">
                  {tabContent.tabInner.map((item, i) => (
                    <div className="in" key={i}>
                      <img src={`img/intro/${item.img}.jpg`} alt="" />
                      <h3>{item.title}</h3>
                      <Link
                        to={item.routePath}
                        className="know_tm_full_link"
                        target="_blank"
                        rel="noopener noreferrer"
                      ></Link>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
            {/* End Tab Content */}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Preview;
