import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import $ from "jquery";

import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { backskills, FrontSkills, StateMangement } from "../Data/Skill";
import { myservices } from "../Data/Services";
import { myportfolio } from "../Data/Portfolio";

const Main = () => {
  const [Backend, setBackend] = useState([]);
  const [Frontend, setFrontend] = useState([]);
  const [Statemanage, setStatemanage] = useState([]);
  const [services, setServices] = useState([]);
  const [Projects, setProjects] = useState([]);
  const [Eventtrigger, setEventtrigger] = useState(false);

  //set data from the files
  useEffect(() => {
    setBackend(backskills);
    setFrontend(FrontSkills);

    setStatemanage(StateMangement);
    setServices(myservices);
    setProjects(myportfolio);
  }, []);

  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener("scroll", handleKeyDown);
    };
  }, []);

  //header shadow on scroll
  const scrollheadershadow = () => {
    if (window.scrollY >= 460) {
      scrollupelement.classList.add("showscroll");
    } else {
      scrollupelement.classList.remove("showscroll");
    }
  };

  //header shadow on scroll + scroll top
  const handleKeyDown = (e) => {
    const scrollupelement = document.getElementById("scrolltop-icon");
    const scrollupshadow = document.getElementById("mobile-nav");

    if (window.scrollY >= 460) {
      scrollupelement.classList.add("showscroll");
      scrollupshadow.classList.add("mobile-header-shadow");
    } else {
      scrollupelement.classList.remove("showscroll");
      scrollupshadow.classList.remove("mobile-header-shadow");
    }
  };

  const toggleskill = (e) => {
    const mytarget = e.target.parentNode.parentNode.closest(".skill-content");
    mytarget.classList.toggle("skill_close");
    mytarget.children[0].children[2].classList.toggle("rotate-90");
  };

  const handleDocClick = (e) => {
    console.log("Event clicked");
    if (e.target.classList.contains("service-model-toclose")) {
      // hideservicemodal()
      setEventtrigger(false);
      for (let i = 0; i <= 2; i++) {
        const mytarget1 = document.getElementsByClassName("service-modal")[i];
        mytarget1 && mytarget1.classList.remove("modal-visible");
      }
    }
  };

  useEffect(() => {
    const docbody = document.getElementsByTagName("body")[0];
    if (Eventtrigger === true) {
      docbody.addEventListener("click", handleDocClick);
    } else if (Eventtrigger === false) {
      docbody.removeEventListener("click", handleDocClick);
    }
    return () => {
      docbody.removeEventListener("click", handleDocClick);
    };
  }, [Eventtrigger]);

  const toggleservicemodal = (e) => {
    setEventtrigger(true);
    // const mytarget1 = e.target.parentNode.parentNode.querySelector('.relative')
    const mytarget1 = e.target
      .closest(".service-content")
      .querySelector(".service-modal");
    mytarget1.classList.add("modal-visible");
  };

  const hideservicemodal = (e) => {
    setEventtrigger(false);
    // let mytarget1 = e.target.closest('.service-content').querySelector('.service-modal')
    // mytarget1.classList.remove('modal-visible')
    // console.log(mytarget1.classList);

    // for (let i = 0; i <= 2; i++) {
    //   let mytarget1 = document.getElementsByClassName('service-model-toclose')[i]
    //   console.log(mytarget1.classList);

    //   mytarget1 && mytarget1.classList.remove('modal-visible')
    //   console.log(mytarget1.classList);

    // }
  };

  const ProjectActive = (e) => {
    // console.log(e.target);
    let allSiblings = [...e.target.parentElement.children].filter(
      (child) => child !== e.target
    );
    // console.log(allSiblings);
    e.target.classList.add("Project-active");
    allSiblings.forEach((sibling) => {
      sibling.classList.remove("Project-active");
    });

    let value = e.target.attributes[0].value;

    if (value == "all") {
      $(".project-box").show("1000");
      // const value2 = document.querySelectorAll('.project-box')
      // value2.style.display = 'block';
    } else {
      $(".project-box")
        .not("." + value)
        .hide("1000");
      $(".project-box")
        .filter("." + value)
        .show("1000");
    }
  };

  const copyphone = (e) => {
    const phone = e.target.innerHTML.replace("-", "");
    navigator.clipboard.writeText(phone);
  };

  return (
    <>
      {/* MAIN HERO */}
      <main className="main w-full" id="Home">
        <section className="home section w-full" id="home">
          <div className="home_container container grid mx-auto px-sm-padding md:px-lg-padding xl:px-xl-padding">
            <div
              className="home_content grid w-full md:mt-20  md:grid-cols-[.5fr_3fr_2fr] lg:grid-cols-[0.5fr_5fr_4fr] 
              xl:grid-cols-[0.8fr_4fr_3fr]
            pt-5 items-center "
            >
              {/* social links */}
              <div className="home_social text-[1.35rem] md:order-1 md:self-start lg:self-center">
                <a
                  href="https://www.linkedin.com/in/zohaib-rustam-3a8a67194/"
                  target="_blank"
                  rel="noreferrer"
                  className="home_social-icon"
                >
                  <i className="uil uil-linkedin-alt"></i>
                </a>

                <a
                  href="https://github.com/SufiandevV"
                  target="_blank"
                  rel="noreferrer"
                  className="home_social-icon"
                >
                  <i className="uil uil-github-alt"></i>
                </a>
              </div>
              {/* home image */}
              <div className="home_img xs:mx-auto md:order-3 ">
                <svg
                  viewBox="0 0 200 187"
                  className="w-[200px] xs:w-[300px] md:w-[300px] lg:w-[400px] xl:w-[400px]  fill-first-color"
                >
                  <mask id="mask0" mask-type="alpha">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                          130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                          97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                          0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                          165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                          129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                          -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                    <image
                      className="w-full h-full object-cover rounded-3xl shadow-xl mx-auto"
                      x={0}
                      y={-1}
                      preserveAspectRatio="xMidYMid slice"
                      href="/zaibi.jpeg"
                    />
                  </g>
                </svg>
              </div>
              {/* front description */}
              <div className="Home_Details col-span-2 md:col-span-1 md:order-2 ">
                <h1 className="text-[2.2rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] text-[#000036] ">
                  Hi, I&apos;m Zohaib Rustam{" "}
                </h1>
                <h3 className="text-h3-font-size font-medium text-text-color mb-5">
                  MERN Stack Developer{" "}
                </h3>
                <div className="mb-2">
                  {/* 6+ Months experience in MERN Stack / Next js development. Designing and developing functional components, user interfaces, APIs, Optimizing, Securing and testing web functionality and efficiencies.  */}
                  {/* <b>Founder and CEO <a target="_blank" href="https://www.Technorexsol.com" rel="noopener noreferrer">@Technorexsol.com</a></b> <br /> */}
                  {/* <p>Providing Custom Full Stack Web development services. Using Latest Web technologies React JS, MERN Stack, Next JS.</p> */}
                  <p>
                    A MERN Stack Developer with <b>1 year Experience</b>.
                    Designing and developing components, user interfaces,
                    API&apos;s. Testing and Optimizing web functionality and
                    efficiencies.Committed to elevating digital experiences
                    through the fusion of innovation and precision.
                  </p>
                </div>
                <a className="button mt-10" href="#Contact">
                  Contact Me <i className="uil uil-message"></i>
                </a>
              </div>
            </div>
            {/* scroll down button */}
            <div className="hover:translate-y-[2px] ml-20 xl:ml-31 md:block duration-200 w-fit hidden mt-12">
              <a
                href="#About"
                className="text-text-color hover:text-first-color-alt "
              >
                <i className="uil uil-mouse-alt text-[2rem]"></i>
                <span className="text-title-color font-medium mr-1 text-small-font-size ml-1">
                  Scroll Down{" "}
                </span>
                <i className="uil uil-arrow-down text-[1.25rem]"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ABOUT ME */}
      <section id="About" className="pt-[4rem]">
        <div className="px-sm-padding md:px-lg-padding xl:px-xl-padding ">
          <h1 className="text-big-font-size text-center">About Me</h1>
          <p className="section_subtitle">My Introduction</p>

          <div className="grid container mt-[67px] mx-auto justify-center md:grid-cols-[1.3fr_2fr] md:mx-auto">
            <div>
              <img
                className="rounded-3xl shadow-xl mx-auto object-cover
                 w-[270px] h-[250px] 
                 lg:w-[280px] h-[300px] "
                src="/zaibi.jpeg"
                alt="About image"
              />
            </div>

            <div>
              <p className="text-center md:text-left mt-3">
                Hands-on experience as a MERN stack developer worked with
                different freelance organizations, Startups and Web Development
                Agencies. Working on a range of web applications allowed me to
                develop the operational, technical, creative, Logic Building and
                problem solving skills
              </p>

              <div className="about_info flex justify-evenly mt-8">
                <div>
                  <h2 className="!font-extrabold text-h1-font-size text-center">
                    04+
                  </h2>
                  <p className="text-center">
                    Months <br /> Experience
                  </p>
                </div>
                <div>
                  <h2 className="!font-extrabold text-h1-font-size text-center">
                    5+
                  </h2>
                  <p className="text-center">
                    Collaborated
                    <br /> Projects
                  </p>
                </div>
                <div>
                  <h2 className="!font-extrabold text-h1-font-size text-center">
                    3+
                  </h2>
                  <p className="text-center">
                    Satisfied
                    <br /> Employers
                  </p>
                </div>
              </div>

              <div className="about-button w-fit mx-auto  mt-10">
                <a href="/Sufian_Resume.pdf" className="button button-flex">
                  {" "}
                  Download CV
                  <i className="uil uil-download-alt ml-2 text-h2-font-size"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="Experience" className="pt-[4rem] mt-10">
        <div className="px-sm-padding md:px-lg-padding xl:px-xl-padding ">
          <h1 className="text-big-font-size text-center">My Experience</h1>
          <p className="section_subtitle">Industry Experience</p>

          <div className="blocks flex w-full justify-center flex-col gap-6">
            <div className="row1 w-full flex gap-6 flex-col md:flex-row">
              <div className="service-content-exp bg-first-color text-white w-full md:w-1/2 rounded-lg h-56 p-8 flex flex-col flex-grow gap-2">
                <p className="text-xs">Oct 2023 - Feb 2024</p>
                <h3 className="text-white text-xl">MERN Stack Developer</h3>
                <p className="text-sm">
                  Collaborated on WP Site Launcher. Designing pixel perfect
                  reusable modules. Conceptualizing and Coding logics.
                  Integrating backend API. Optimizing and testing code and
                  functionalities.
                </p>
                <a
                  href="https://knowledge.tech/"
                  className="mt-1 cursor-pointer mb-1"
                >
                  @ Knowledge Streams
                </a>
              </div>

              <div className="service-content-exp bg-white w-full md:w-1/2 rounded-lg h-56 p-8 flex flex-col flex-grow gap-2">
                <p className="text-xs">March 2023 - September 2023</p>
                <h3 className="text-xl">Front End Developer</h3>
                <p className="text-sm">
                  Crafting compelling user experiences as a Front-End Web
                  Developer, specializing in designing and managing React Sites.
                  Proficient in developing clean and well-documented MVC
                  structures.
                </p>
                <a
                  href="https://pitb.gov.pk/nep-nics"
                  className="mt-1 cursor-pointer mb-1"
                >
                  @ NIC NEPNIC
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY SKILLS */}
      <section className="container mx-auto">
        <div
          id="Skills"
          className="pt-32 px-sm-padding md:px-lg-padding xl:px-xl-padding"
        >
          <h1 className="section_title">My Skills</h1>
          <p className="section_subtitle">My Technical Level</p>

          <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 xl:justify-between ">
            <div
              onClick={toggleskill}
              className="skill-content mx-5 skill_close cursor-pointer w-full 
            sm:w-[350px] lg:w-[430px] "
            >
              <div className="skill-header flex">
                <i className="uil uil-brackets-curly text-3xl self-center text-first-color"></i>
                <div className="ml-5 w-[100%]">
                  <h1 className="text-h2-font-size">Frontend Development</h1>
                  <p>1 year Experience</p>
                </div>
                <i className="uil ml-auto uil-angle-down duration-300 text-4xl self-center text-first-color"></i>
              </div>

              {Frontend?.map((s) => {
                return (
                  <div key={s?.name} className="skills-list mt-5 ">
                    <div className="flex justify-between text-normal-font-size text-text-color">
                      <div>{s?.name}</div>
                      <div>{s?.percentage}%</div>
                    </div>

                    <div className="Progress mt-2 ">
                      <div className="skill-bar rounded-lg bg-slate-200 h-2">
                        <span
                          style={{ width: `${s.percentage}%` }}
                          className={`skill-percentage rounded-lg bg-first-color duration-200 h-2 block `}
                        ></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              onClick={toggleskill}
              className="skill-content mx-5 skill_close cursor-pointer w-full 
              sm:w-[350px] lg:w-[430px]
            "
            >
              <div className="skill-header flex xl:mt-4">
                <i className="uil uil-server-network text-3xl self-center text-first-color"></i>
                <div className="ml-5 w-[100%]">
                  <h1 className="text-h2-font-size">Backend Development</h1>
                  <p>1 year Experience</p>
                </div>
                <i className="uil uil-angle-down duration-300 ml-auto text-4xl self-center text-first-color"></i>
              </div>

              {Backend?.map((s) => {
                return (
                  <div key={s?.name} className="skills-list mt-5 ">
                    <div className="flex justify-between text-normal-font-size text-text-color">
                      <div>{s?.name}</div>
                      <div>{s?.percentage}%</div>
                    </div>

                    <div className="Progress mt-2 ">
                      <div className="skill-bar rounded-lg bg-slate-200 h-2">
                        <span
                          style={{ width: `${s.percentage}%` }}
                          className={`skill-percentage rounded-lg bg-first-color duration-200 h-2 block `}
                        ></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              onClick={toggleskill}
              className="skill-content mx-5  skill_close cursor-pointer w-full 
            sm:w-[350px] lg:w-[430px]
            "
            >
              <div className="skill-header flex justify-center xl:mt-4 3xl:mt-0">
                <i className="uil uil-atom text-3xl self-center text-first-color"></i>
                <div className="ml-5 w-[100%]">
                  <h1 className="text-h2-font-size">State Management</h1>
                  <p>1 year Experience</p>
                </div>
                <i className="uil uil-angle-down duration-300 ml-auto text-4xl self-center text-first-color"></i>
              </div>

              {Statemanage?.map((s) => {
                return (
                  <div key={s?.name} className="skills-list mt-5 ">
                    <div className="flex justify-between text-normal-font-size text-text-color">
                      <div>{s?.name}</div>
                      <div>{s?.percentage}%</div>
                    </div>

                    <div className="Progress mt-2 ">
                      <div className="skill-bar rounded-lg bg-slate-200 h-2">
                        <span
                          style={{ width: `${s.percentage}%` }}
                          className={`skill-percentage rounded-lg bg-first-color duration-200 h-2 block `}
                        ></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MY SERVICES */}
      <section
        id="Services"
        className="px-sm-padding md:px-lg-padding xl:px-xl-padding container mx-auto pt-16"
      >
        <div>
          <h1 className="section_title">My Services</h1>
          <p className="section_subtitle">Services I Provide</p>
        </div>

        <div className="service_container container grid grid-cols-2 md:grid-cols-3">
          {services?.map((s) => {
            return (
              <div
                key={s?.Name}
                style={{ cursor: "pointer" }}
                onClick={toggleservicemodal}
                className="service-content rounded-lg duration-300 bg-container-color"
              >
                <div className="relative hover:cursor-pointer">
                  <i
                    className={`${s.Icon} text-h1-font-size text-first-color mb-3`}
                  ></i>
                  <h3 className="text-h3-font-size mb-3 font-medium">
                    {s.Name}
                  </h3>

                  <span className="service-modal-button group button-small cursor-pointer text-small-font-size inline-block rounded-lg font-medium  text-first-color hover:fill-first-color-alt duration-200">
                    View more
                    <i className="uil uil-arrow-right ml-2 text-normal-font-size duration-300 group-hover:ml-4 "></i>
                  </span>
                </div>

                {/* SERVICE MODEL POPUP */}
                <div className="service-modal service-model-toclose opacity-0 invisible duration-300 z-z-modal flex justify-center items-center fixed top-0 left-0 right-0 bottom-0">
                  <div className="service-modal-content relative bg-container-color rounded-lg p-[1.5rem] ">
                    <div className="flex justify-between pb-5 md:space-x-10">
                      <h4 className="text-h2-font-size font-medium mb-2 text-title-color w-fit">
                        {s.Name}
                      </h4>
                      <div
                        onClick={hideservicemodal}
                        className="flex w-20 items-center -mt-5 -mr-5 cursor-pointer"
                      >
                        {/* <i className='uil uil-times service-model-close  text-[1.5rem] text-first-color '></i>
                          <h2 >Close</h2> */}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {s?.Bullets.map((B, i) => {
                        return (
                          <li
                            key={[B]}
                            className="service-modal-service flex whitespace-nowrap"
                          >
                            <i className="uil uil-check-circle text-first-color mr-2 text-2xl"></i>
                            <p className="self-center">{B}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="Portfolio"
        className="px-sm-padding md:px-lg-padding xl:px-xl-padding pt-16"
      >
        <div>
          <h1 className="section_title">My Portfolio</h1>
          <p className="section_subtitle">Take a look at my Previous work</p>
        </div>

        <ul className="project-filter flex flex-wrap  justify-center items-center border-1 m-10">
          <li
            data-filter="all"
            onClick={ProjectActive}
            className="list Project-active rounded-lg duration-200"
          >
            ALL
          </li>
          <li
            data-filter="Frontend"
            onClick={ProjectActive}
            className="list rounded-lg duration-200"
          >
            Frontend Projects
          </li>
          <li
            data-filter="FullStack"
            onClick={ProjectActive}
            className="list rounded-lg duration-200"
          >
            Full Stack Projects
          </li>
          {/* <li data-filter="CMS" onClick={ProjectActive} className="list rounded-lg duration-200">CMS Projects</li> */}
        </ul>

        <div
          className="project-container"
          // grid
          // grid-cols-2
          // md:grid-cols-3
          // lg:grid-cols-4
          // xl:w-[85.8%] 2xl:w-[85.8%]
        >
          {Projects?.map((p) => {
            return (
              <div
                key={p.Name}
                className="rounded-md  overflow-hidden portfolio-item ml-5 mr-5"
              >
                <div
                  className={`project-box group relative ${p.Class}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bg-gray-900 flex flex-col bottom-0 text-white text-center pt-2 z-10 duration-200 h-10 group-hover:h-40  overflow-hidden absolute w-full">
                    <p className="text-lg">{p.Name}</p>
                    <p className="text-left pl-3 text-xs mt-3">
                      {p.Description}
                    </p>

                    <a
                      href={p.Url}
                      target="_blank"
                      rel="noreferrer"
                      className="portfolio-demo-button border border-1 w-[120px] whitespace-nowrap demo-button"
                    >
                      <i className="uil uil-arrow-right  opacity-0 "></i>
                      View Demo
                    </a>
                  </div>
                  <img
                    className={`group-hover:scale-105 duration-200`}
                    src={`${p.Image}`}
                    alt={`${p.Name}`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className='project-container 
        flex flex-row text-center justify-center 
        space-x-8 space-y-8
        
        '>
          <a href="" className='project-box all'>
            <img src="/project.png" alt="" />
          </a>

          <a href="" className='project-box all'>
            <img src="/profile.png" alt="" />
          </a>

          <a href="" className='project-box Frontend'>
            <img src="/testimonial1.jpg" alt="" />
          </a>

          <a href="" className='project-box FullStack'>
            <img src="/testimonial2.jpg" alt="" />
          </a>

          <a href="" className='project-box FullStack'>
            <img src="/testimonial3.jpg" alt="" />
          </a>

        </div> */}
      </section>

      {/* HAVE A PROJECT? */}
      <section id="Project" className="mt-10">
        <div className="project_bg bg-first-color pt-[3rem] md:pt-0  ">
          <div className="project_container py-10 flex flex-col container mx-auto md:flex-row justify-center  ">
            <div className="project-data self-center flex flex-col ">
              <h2 className="text-h2-font-size mb-[.75rem] text-center text-white">
                Need PDF or Resume?
              </h2>
              <p className="text-white text-center mt-2">
                Click Below to Download my latest resume into your local
                computer
              </p>
              <a
                href="/Sufian_Resume.pdf"
                download
                className="button button-white w-fit  mx-auto mt-5"
              >
                Download
                <i className="uil uil-message ml-2"></i>
              </a>
            </div>

            {/* <img src="/project.png" alt="my image in project" /> */}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* REFERENCES */}
      {/* <section id='Testimonials' className='max-w-[1280px] mx-auto'>

        <div className='mt-16'>
          <h1 className='section_title'>Employer Testimonials</h1>
          <p className='section_subtitle'>What Employers say</p>
        </div>

        <Swiper

          slidesPerView='auto'
          spaceBetween={20}
          pagination={{
            dynamicBullets: true,

          }}
          grabCursor={true}
          loop={true}
          centeredSlides={false}
          breakpoints={{
            720: {
              slidesPerView: 2,
              spaceBetween: 20,
            }
          }}
          touchEventsTarget="container"

          modules={[Pagination]}
          className="testimonialswiper "
        >
          <SwiperSlide>
            <div id='testimonial1' className='px-10'>

              <div className='py-8'>
                <div className='top-line flex '>
                  <div className=' rounded-full shadow-md'>
                    <img className='w-16 h-16 rounded-full' src="testimonial1.jpg" alt="testimonial1" />
                  </div>

                  <div className='ml-4'>
                    <h1 className='text-h3-font-size font-medium'>Sara Smith</h1>
                    <p className='text-normal-font-size text-text-color-light'>client</p>
                  </div>

                  <div className='ml-auto'>
                    <i className="uil uil-star"></i>
                    <i className="uil uil-star"></i>
                    <i className="uil uil-star"></i>
                    <i className="uil uil-star"></i>
                    <i className="uil uil-star"></i>
                  </div>

                </div>

                <div className='py-10'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sed consequatur ratione sapiente modi eligendi voluptates alias at vel quaerat.</p>
                </div>

              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>

            <div id='testimonial1' className='px-10'>

              <div className='py-8'>
                <div className='top-line flex '>
                  <div className=' rounded-full shadow-md'>
                    <img className='w-16 h-16 rounded-full' src="testimonial2.jpg" alt="testimonial1" />
                  </div>

                  <div className='ml-4'>
                    <h1 className='text-h3-font-size font-medium'>Andrew </h1>
                    <p className='text-normal-font-size text-text-color-light'>client</p>
                  </div>

                  <div className='ml-auto'>
                    <i className="uil uil-star"></i>
                    <i className="uil uil-star"></i>
                    <i className="uil uil-star"></i>
                    <i className="uil uil-star"></i>
                    <i className="uil uil-star"></i>
                  </div>

                </div>

                <div className='py-10'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sed consequatur ratione sapiente modi eligendi voluptates alias at vel quaerat.</p>
                </div>

              </div>

            </div>
          </SwiperSlide>


        </Swiper>


      </section> */}

      {/* CONTACT ME */}
      <section
        id="Contact"
        className="container mx-auto pt-10 px-sm-padding md:px-lg-padding xl:px-xl-padding"
      >
        <div className="Contact section ">
          <div className="container">
            <h2 className="text-center section_title">Contact Me</h2>
            <span className="section_subtitle">Get in Touch</span>

            <div className="row flex flex-col md:flex-row justify-between">
              <div className="contact_info_all w-[100%]">
                <div>
                  <div className="contact_info flex mb-[2rem]">
                    <i className="uil uil-phone contact_icon text-4xl text-first-color mr-2"></i>
                    <div>
                      <h3 className="contact_title">Call Me</h3>
                      <p
                        onClick={copyphone}
                        className="contact_subtitle hover:cursor-pointer"
                      >
                        +92-3097850095
                      </p>
                    </div>
                  </div>

                  <div className="contact_info flex mb-[2rem]">
                    <i className="uil uil-envelope-check contact_icon text-4xl text-first-color mr-2"></i>

                    <div>
                      <h3 className="contact_title">Email Me</h3>
                      <a
                        href="mailto:khanzaibi191@gmail.com"
                        className="contact_subtitle"
                      >
                        khanzaibi191@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="contact_info flex mb-[2rem]">
                    <i className="uil uil-map-marker contact_icon text-4xl text-first-color mr-2"></i>
                    <div>
                      <h3 className="contact_title">Location</h3>
                      <span className="contact_subtitle">
                        Rawalpindi, Pakistan
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact_form w-[100%]">
                <form>
                  <div className="contact_inputs space-y-5">
                    <div className="contact_content">
                      <label className="contact_label">Name</label>
                      <input type="text" className="contact_input" />
                    </div>
                    <div className="contact_content">
                      <label className="contact_label">Email</label>
                      <input type="email" className="contact_input" />
                    </div>
                    <div className="contact_content">
                      <label className="contact_label">Message</label>
                      <textarea
                        name=""
                        id=""
                        cols="0"
                        rows="5"
                        className="contact_input"
                      ></textarea>
                    </div>
                    <div>
                      <a href="#" className="button button--flex shadow">
                        Send Message{" "}
                        <i className="uil uil-message button_icon"></i>{" "}
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer mt-[2.5rem] text-white ">
        <div className="footer_bg bg-first-color-second ">
          <div className="footer_container container grid px-sm-padding md:px-lg-padding xl:px-xl-padding">
            <div>
              <h1 className="text-h1-font-size mb-[0.25rem] text-white">
                {" "}
                Zohaib Rustam
              </h1>
              <span className="text-normal-font-size ">
               MERN Stack Developer
              </span>
            </div>

            <ul className="footer_links flex flex-col gap-y-6 my-6 text-h3-font-size">
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>

            <div className="footer_social space-x-5 text-h1-font-size ">
              <a
                href="https://www.linkedin.com/in/sufian-masood-b68630224/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="uil uil-linkedin"></i>
              </a>

              <a
                href="https://github.com/SufiandevV"
                target="_blank"
                rel="noreferrer"
              >
                <i className="uil uil-github-alt"></i>
              </a>
            </div>

            <div className="text-small-font-size text-center text-text-color-light mt-2">
              <p>Zohaib Rustam &#169;. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>

      {/* scroll up button */}
      <div
        id="scrolltop-icon"
        className="scrolltop-icon duration-200 fixed right-10 bottom-0  h-10 w-10 bg-first-color flex justify-center items-center text-white opacity-90
      md:-bottom-10 md:right-20
      "
      >
        <a href="#" className="scrollup" id="scroll-up">
          <i className="uil uil-arrow-up scrollup_icon text-h2-font-size "></i>
        </a>
      </div>
    </>
  );
};

export default Main;
