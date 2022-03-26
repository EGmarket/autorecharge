import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PersonalInfo from "../../components/about/PersonalInfo";
import Resume from "../../components/about/Resume";
import ServiceTwo from "../../components/service/ServiceTwo";
import TestimonialTwo from "../../components/testimonial/TestimonialTwo";
import PortfolioTwo from "../../components/portfolio/PortfolioTwo";
import BlogTwo from "../../components/blog/BlogTwo";
import HeaderThree from "../../components/header/HeaderThreeDark";
import Address from "../../components/Address";
import Contact from "../../components/Contact";
import SocialTwo from "../../components/SocialTwo";

const tabMenuList = [
  { icon: "icon-archive", title: "About Me" },
  { icon: "icon-contacs", title: "Resume" },
  { icon: "icon-briefcase", title: "Portfolio" },
  { icon: "icon-gear", title: "Service" },
  { icon: "icon-message", title: "Testimonial" },
  { icon: "icon-writing", title: "Blog" },
  { icon: "icon-letter", title: "Contact" },
];

const HomeTwoDark = () => {
  document.body.classList.add("dark");
  return (
    <>
      {/* <!-- BACKGROUND --> */}
      <div
        className="know_tm_fixed_background movingEffect"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "img/hero/5.jpg"})`,
        }}
      ></div>
      {/* <!-- /BACKGROUND --> */}

      {/* <!-- CONTENT --> */}
      <div className="know_tm_fixed_content">
        {/* <!-- TOPBAR --> */}
        <div className="know_tm_topbar">
          <div className="container">
            <HeaderThree />
          </div>
        </div>
        {/* <!-- /TOPBAR --> */}

        <div className="container">
          <Tabs>
            <div className="fixed_content_inner">
              <div className="content_left">
                {/* <!-- MENUBAR --> */}
                <div className="menubar">
                  <TabList>
                    {tabMenuList.map((menu, i) => (
                      <Tab key={i}>
                        <div className={`svg ${menu.icon}`}></div>
                        <span>{menu.title}</span>
                      </Tab>
                    ))}
                  </TabList>
                </div>
                {/* <!-- /MENUBAR --> */}

                {/* <!-- INFOBAR --> */}
                <div className="infobar">
                  <div className="bar_in">
                    <div className="image">
                      <img src="img/thumbs/10-9.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            process.env.PUBLIC_URL + "img/hero/3.jpg"
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="extra">
                      <div className="short">
                        <h3>Sarah Jessica</h3>
                        <span>Senior UI/UX Designer</span>
                      </div>
                      <div className="social">
                        <SocialTwo />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /INFOBAR --> */}
              </div>
              {/* End .content Left */}

              <div className="content_right">
                <div className="mainbar">
                  <div className="know_tm_main_section">
                    <TabPanel>
                      <PersonalInfo />
                    </TabPanel>
                  </div>
                  {/* End  .know_tm_main_section */}

                  <div className="know_tm_main_section">
                    <TabPanel>
                      <Resume />
                    </TabPanel>
                  </div>
                  {/* End  .know_tm_main_section */}

                  <div className="know_tm_main_section">
                    <TabPanel>
                      <PortfolioTwo />
                    </TabPanel>
                  </div>
                  {/* End  .know_tm_main_section */}

                  <div className="know_tm_main_section">
                    <TabPanel>
                      <ServiceTwo />
                    </TabPanel>
                  </div>
                  {/* End  .know_tm_main_section */}

                  <div className="know_tm_main_section">
                    <TabPanel>
                      <div
                        className="know_tm_testimonials"
                        data-aos="fade-right"
                      >
                        <div className="know_tm_main_title">
                          <span>Testimonials</span>
                          <h3>What people say about me</h3>
                        </div>
                        <div className="testimonials_list">
                          <TestimonialTwo />
                        </div>
                      </div>

                      {/* <!-- /TESTIMONIALS --> */}
                    </TabPanel>
                  </div>
                  {/* End  .know_tm_main_section */}

                  <div className="know_tm_main_section">
                    <TabPanel>
                      {/* <!-- NEWS --> */}
                      <div className="know_tm_news" data-aos="fade-right">
                        <div className="know_tm_main_title">
                          <span>Blog</span>
                          <h3>Latest tips, tricks &amp; Updates</h3>
                        </div>
                        {/* End .know_tm_main_title */}
                        <BlogTwo />
                      </div>
                      {/* <!-- /NEWS --> */}
                    </TabPanel>
                  </div>
                  {/* End  .know_tm_main_section */}

                  <div className="know_tm_main_section">
                    <TabPanel>
                      {/* <!-- CONTACT --> */}
                      <div className="know_tm_contact" data-aos="fade-right">
                        <div className="know_tm_main_title">
                          <span>Contact Me</span>
                          <h3>Contact me to get your work done</h3>
                        </div>
                        <div className="wrapper">
                          <div className="left">
                            <Address />
                          </div>
                          {/* End .left */}
                          <div className="right">
                            <div className="fields">
                              <Contact />
                            </div>
                          </div>
                          {/* End .right */}
                        </div>
                      </div>
                      {/* End .know_tm_contact */}
                      {/* <!-- /CONTACT --> */}
                    </TabPanel>
                  </div>
                  {/* End  .know_tm_main_section */}
                </div>
              </div>
              {/* End .content Right */}
            </div>
          </Tabs>
        </div>
      </div>
      {/* <!-- /CONTENT --> */}
    </>
  );
};

export default HomeTwoDark;
