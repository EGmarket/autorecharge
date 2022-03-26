import React from "react";
import HeaderFour from "../../components/header/HeaderFour";
import Hero from "../../components/hero/hero-two/Hero";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import PersonalInfo from "../../components/about/PersonalInfoTwo";
import Resume from "../../components/about/Resume";
import Portfolio from "../../components/portfolio/Portfolio";
import Service from "../../components/service/Service";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/Blog";
import Address from "../../components/Address";
import Contact from "../../components/Contact";
import Footer from "../../components/footer/Footer";

const HomeThreeLight = () => {
  document.body.classList.add("light");
  return (
    <>
      {/* <!-- TOPBAR --> */}
      <div className="know_tm_topbar">
        <div className="container">
          <HeaderFour />
        </div>
      </div>
      {/* <!-- /TOPBAR --> */}

      {/* <!-- HERO --> */}
      <Hero />
      {/* <!-- /Hero --> */}

      {/* <!-- MAIN  CONTENT --> */}
      <div className="know_tm_extra_menu">
        <div className="container">
          <div className="menu_list">
            <ul className="unordered">
              <Accordion allowZeroExpanded>
                <AccordionItem className="unorderest_li">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="list_in">
                        <div className="list_icon">
                          <div className="svg icon-archive"></div>
                        </div>
                        <div className="center">
                          <span>About Me</span>
                        </div>
                        <div className="down_icon">
                          <div className="svg icon-down"></div>
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  {/* End  AccordionItemHeading */}
                  <AccordionItemPanel>
                    <div className="details_wrapper">
                      <PersonalInfo />
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                {/* Edn item */}

                <AccordionItem className="unorderest_li">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="list_in">
                        <div className="list_icon">
                          <div className="svg icon-contacs"></div>
                        </div>
                        <div className="center">
                          <span>Resume</span>
                        </div>
                        <div className="down_icon">
                          <div className="svg icon-down"></div>
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  {/* End  AccordionItemHeading */}
                  <AccordionItemPanel>
                    <div className="details_wrapper">
                      <Resume />
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                {/* Edn item */}

                <AccordionItem className="unorderest_li">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="list_in">
                        <div className="list_icon">
                          <div className="svg icon-briefcase"></div>
                        </div>
                        <div className="center">
                          <span>Portfolio</span>
                        </div>
                        <div className="down_icon">
                          <div className="svg icon-down"></div>
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  {/* End  AccordionItemHeading */}
                  <AccordionItemPanel>
                    <div className="details_wrapper">
                      <Portfolio />
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                {/* Edn item */}

                <AccordionItem className="unorderest_li">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="list_in">
                        <div className="list_icon">
                          <div className="svg icon-briefcase"></div>
                        </div>
                        <div className="center">
                          <span>Service</span>
                        </div>
                        <div className="down_icon">
                          <div className="svg icon-down"></div>
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  {/* End  AccordionItemHeading */}
                  <AccordionItemPanel>
                    <div className="details_wrapper">
                      <Service />
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                {/* Edn item */}

                <AccordionItem className="unorderest_li">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="list_in">
                        <div className="list_icon">
                          <div className="svg icon-message"></div>
                        </div>
                        <div className="center">
                          <span>Testimonials</span>
                        </div>
                        <div className="down_icon">
                          <div className="svg icon-down"></div>
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  {/* End  AccordionItemHeading */}
                  <AccordionItemPanel>
                    <div className="details_wrapper">
                      <div className="know_tm_testimonials">
                        <div className="know_tm_main_title">
                          <span>Testimonials</span>
                          <h3>What people say about me</h3>
                        </div>
                        <div className="testimonials_list">
                          <Testimonial />
                        </div>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                {/* Edn item */}

                <AccordionItem className="unorderest_li">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="list_in">
                        <div className="list_icon">
                          <div className="svg icon-writing"></div>
                        </div>
                        <div className="center">
                          <span>Blog</span>
                        </div>
                        <div className="down_icon">
                          <div className="svg icon-down"></div>
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  {/* End  AccordionItemHeading */}
                  <AccordionItemPanel>
                    <div className="details_wrapper">
                      <div className="know_tm_news">
                        <div className="know_tm_main_title">
                          <span>Blog</span>
                          <h3>Latest tips, tricks &amp; Updates</h3>
                        </div>
                        {/* End .know_tm_main_title */}
                        <Blog />
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                {/* Edn item */}

                <AccordionItem className="unorderest_li">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="list_in">
                        <div className="list_icon">
                          <div className="svg icon-letter"></div>
                        </div>
                        <div className="center">
                          <span>Contact</span>
                        </div>
                        <div className="down_icon">
                          <div className="svg icon-down"></div>
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  {/* End  AccordionItemHeading */}
                  <AccordionItemPanel>
                    <div className="details_wrapper">
                      <div className="know_tm_contact">
                        <div className="know_tm_main_title">
                          <span>Contact Me</span>
                          <h3>Contact me to get your work done</h3>
                        </div>
                        <div className="wrapper">
                          <div
                            className="left"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                          >
                            <Address />
                          </div>
                          {/* End .left */}
                          <div
                            className="right"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                          >
                            <div className="fields">
                              <Contact />
                            </div>
                          </div>
                          {/* End .right */}
                        </div>
                      </div>
                      {/* End .know_tm_contact */}
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                {/* Edn item */}
              </Accordion>
              {/* End Accordion */}
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- MAIN  CONTENT --> */}

      {/* <!-- COPYRIGHT --> */}
      <div className="know_tm_copyright">
        <div className="container">
          <Footer />
        </div>
      </div>
      {/* <!-- /COPYRIGHT --> */}
    </>
  );
};

export default HomeThreeLight;
