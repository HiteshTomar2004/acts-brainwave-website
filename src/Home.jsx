import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import timelineHeading from "./assets/timeline-heading.png";
import elementImg from "./assets/element.png";
import smileyImg from "./assets/smiley.png";
import sprayImg from "./assets/spray.png";
import prizeHeading from "./assets/prize-heading.png";
import lineLeft from "./assets/line-left.png";
import lineRight from "./assets/line-right.png";
import prizeCards from "./assets/prize-cards.png";
import registrationHeading from "./assets/registration-heading.png";
import posterFrame from "./assets/poster-frame.png";
import registerBtn from "./assets/register-btn.png";
import iconPrize from "./assets/icon-prize.png";
import iconOffline from "./assets/icon-offline.png";
import iconClock from "./assets/icon-clock.png";
import iconParticipants from "./assets/icon-participants.png";
import decorStickers from "./assets/decor-stickers.png";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";
import line from "./assets/line.png";
import actslogo from "./assets/actslogo.png";
import keepOut from "./assets/keepout.png";

import myLogo from './assets/logos/logo2.png'
import tyre from './assets/stickers/tyre.png'
import spray from './assets/stickers/spray.png'
import spark from './assets/stickers/sparkblaze3.png'
import pose from './assets/stickers/pose.png'
import keepout from './assets/stickers/keepout.png'
import crown from './assets/stickers/crown.png'
import punk from './assets/stickers/punk.png'
import caution from './assets/stickers/caution.png'
import tag from './assets/stickers/green.png'
import register from './assets/images/register.png'
import join from './assets/images/joincomm.png'
import biglogo from './assets/logos/biglogo.png'
import coin from './assets/stickers/coin-half.png'
import smile from './assets/stickers/smile.png'
import lightning from './assets/stickers/lightning.png'
import specialdeal from './assets/stickers/specialdeal.png'
import triangle from './assets/stickers/skull_triangle.png'
import wheel from './assets/stickers/wheel.png'
import spark2 from './assets/stickers/sparkblaze2.png'
import check from './assets/stickers/check.png'
import qrcode from './assets/stickers/QRcode.png'
import timerbg from './assets/images/timerbg.png'
import date from './assets/images/date.png'
import MyLogo from './assets/logos/logo.png'
import Faq from './assets/images/FAQdesk.png'
import Faq2 from './assets/images/FAQ.png'
import decor from './assets/stickers/decor.png'
import instagram from "./assets/images/instagram.png";
import linkedin from "./assets/images/linkedin.png";
import gmail from "./assets/images/gmail.png";
import linktree from "./assets/images/linktree.png";
import "./index.css";

const events = [
  { side: "left", name: "Registrations Open", date: "28 / 06 / 2026", info: "Sign up on the official portal" },
  { side: "right", name: "Team Formation", date: "10 / 07 / 2026", info: "Build your squad of 2–4 members" },
  { side: "left", name: "Problem Statements", date: "20 / 07 / 2026", info: "Problem sets released to all teams" },
  { side: "right", name: "Round 1 — Prelims", date: "01 / 08 / 2026", info: "Online qualifying round" },
  { side: "left", name: "Round 2 — Semis", date: "10 / 08 / 2026", info: "Top 50 teams advance" },
  { side: "right", name: "Grand Finale", date: "16 / 08 / 2026", info: "Live event · ₹20 Lakh prize pool" },
];

// ===== Single event row =====
function EventRow({ event }) {
  const [lineVisible, setLineVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const rowRef = useRef(null);
  const isLeft = event.side === "left";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true);
          setTimeout(() => setTextVisible(true), 900);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -30% 0px" }
    );
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rowRef} style={{ position: "relative", display: "flex", alignItems: "center", minHeight: "140px" }}>
      {/* Dot */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        width: "14px", height: "14px", borderRadius: "50%",
        backgroundColor: "#c8ff00",
        boxShadow: "0 0 10px #c8ff00, 0 0 20px rgba(200,255,0,0.4)",
        opacity: lineVisible ? 1 : 0,
        transition: "opacity 0.4s ease",
        zIndex: 20,
      }} />

      {/* Horizontal line */}
      <div style={{
        position: "absolute", top: "50%", transform: "translateY(-50%)",
        height: "2px", backgroundColor: "#c8ff00",
        boxShadow: "0 0 6px #c8ff00",
        right: isLeft ? "calc(50% + 14px)" : "auto",
        left: isLeft ? "auto" : "calc(50% + 14px)",
        width: lineVisible ? "38%" : "0%",
        transition: "width 0.8s ease-out",
        zIndex: 10,
      }} />

      {/* Text above line */}
      <div style={{
        position: "absolute", top: "50%", transform: "translateY(-120%)",
        right: isLeft ? "calc(50% + 20px)" : "auto",
        left: isLeft ? "auto" : "calc(50% + 20px)",
        textAlign: isLeft ? "right" : "left",
        opacity: textVisible ? 1 : 0,
        transition: "opacity 0.5s ease",
        zIndex: 20,
      }}>
        <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", letterSpacing: "3px", color: "#ffffff", margin: 0 }}>
          {event.name}
        </p>
        <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "0.75rem", color: "#c8ff00", letterSpacing: "2px", margin: "2px 0 0" }}>
          {event.date}
        </p>
        <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", margin: "3px 0 0" }}>
          {event.info}
        </p>
      </div>
    </div>
  );
}

// ===== Timeline Section =====
function TimelineSection() {
  return (
    <section id="timeline" className="relative w-full">
      <div style={{
        position: "relative",
        width: "100%",
        backgroundColor: "transparent",
        minHeight: "100vh",
        overflowX: "hidden",
        paddingBottom: "120px",
      }}>

        {/* Google Fonts */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Share+Tech+Mono&display=swap" />

        {/* ── BACKGROUND ELEMENTS ── */}
        <img src={elementImg} alt="" style={{
          position: "absolute",
          top: "20%",
          right: "-30px",
          width: "280px",
          opacity: 0.55,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
        }} />

        <img src={smileyImg} alt="" style={{
          position: "absolute",
          bottom: "60px",
          left: "-35px",
          width: "140px",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
        }} />

        <img src={sprayImg} alt="" style={{
          position: "absolute",
          bottom: "10px",
          right: "250px",
          width: "130px",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
        }} />

        {/* ── HEADING ── */}
        <div style={{ textAlign: "center", paddingTop: "60px", paddingBottom: "60px", position: "relative", zIndex: 2 }}>
          <img
            src={timelineHeading}
            alt="TIMELINE"
            style={{ width: "min(700px, 90vw)", margin: "0 auto", display: "block" }}
          />
        </div>

        {/* ── VERTICAL SPINE LINE ── */}
        <div style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "160px",
          bottom: "100px",
          width: "2px",
          backgroundColor: "rgba(200,255,0,0.3)",
          zIndex: 2,
        }} />

        {/* ── EVENT ROWS ── */}
        <div style={{
          position: "relative",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 20px",
          zIndex: 3,
        }}>
          {events.map((event, index) => (
            <EventRow key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Prize Pool Section =====
function PrizeSection() {
  return (
    <section id="prizes" className="relative w-full">
      <div style={{
        backgroundColor: "transparent",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}>

        {/* ── HEADING ROW: line + PRIZE POOL + line ── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          padding: "0",
          gap: "12px",
          boxSizing: "border-box",
          marginBottom: "40px",
        }}>
          <img src={lineLeft} alt="" style={{
            flex: 1, minWidth: 0, height: "12px", objectFit: "fill",
          }} />

          <img src={prizeHeading} alt="PRIZE POOL" style={{
            width: "clamp(180px, 28vw, 340px)",
            flexShrink: 0,
            height: "auto",
          }} />

          <img src={lineRight} alt="" style={{
            flex: 1, minWidth: 0, height: "12px", objectFit: "fill",
          }} />
        </div>

        {/* ── PRIZE CARDS ── */}
        <div style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center",
          padding: "0",
          boxSizing: "border-box",
        }}>
          <img src={prizeCards} alt="Prize Cards" style={{
            width: "100%",
            maxWidth: "950px",
            height: "auto",
            display: "block",
          }} />
        </div>
      </div>
    </section>
  );
}

// ===== Registration Section =====
function RegistrationSection() {
  const REGISTER_LINK = "https://www.ipu.ac.in/";

  return (
    <section id="register" className="relative w-full">
      <div className="relative min-h-screen w-full overflow-hidden">
        <img
          src={decorStickers}
          alt=""
          className="absolute bottom-0 left-0 w-full object-cover pointer-events-none select-none"
        />

        <div className="relative z-10 flex justify-center pt-6">
          <img
            src={registrationHeading}
            alt="Registration"
            className="w-[700px] max-w-[90%]"
          />
        </div>

        <div className="relative z-10 flex items-center justify-center gap-10 mt-28">
          {/* LEFT */}
          <div className="flex flex-col items-center gap-6">
            <a href={REGISTER_LINK} target="_blank" rel="noreferrer">
              <img
                src={registerBtn}
                alt="Register"
                className="w-[300px] hover:scale-110 transition"
              />
            </a>

            <div
              className="relative w-[320px] h-[320px] bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${posterFrame})` }}
            >
              <img
                src={actslogo}
                alt="Poster"
                className="w-[240px] h-[240px] object-contain"
              />
            </div>
          </div>

          <img
            src={line}
            alt="line"
            className="h-[420px] w-auto"
          />

          <div className="grid grid-cols-2 gap-4">
            <div
              className="relative w-[200px] h-[180px] bg-cover bg-center"
              style={{ backgroundImage: `url(${card1})` }}
            >
              <img
                src={iconPrize}
                alt=""
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-28"
              />
            </div>

            <div
              className="relative w-[200px] h-[180px] bg-cover bg-center"
              style={{ backgroundImage: `url(${card2})` }}
            >
              <img
                src={iconOffline}
                alt=""
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-28"
              />
            </div>

            <div
              className="relative w-[200px] h-[180px] bg-cover bg-center"
              style={{ backgroundImage: `url(${card3})` }}
            >
              <img
                src={iconClock}
                alt=""
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-28"
              />
            </div>

            <div
              className="relative w-[200px] h-[180px] bg-cover bg-center"
              style={{ backgroundImage: `url(${card4})` }}
            >
              <img
                src={iconParticipants}
                alt=""
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-28"
              />
            </div>
          </div>
        </div>

        {/* Bottom Keep Out Strip */}
        <div className="absolute bottom-0 left-0 w-full">
          <img
            src={keepOut}
            alt="Keep Out"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

// ===== Main page =====
export default function Home() {
  const targetDate = new Date("August 21, 2026 00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-full text-white">

      <div className="fixed inset-0 bg-black/85 -z-40" />

      {/* =============================================================== */}
      {/*                            NAVBAR                              */}
      {/* =============================================================== */}

      <Navbar />

      {/* =============================================================== */}
      {/*                        HERO SECTION                            */}
      {/* Assigned To :                                                  */}
      {/* Instructions:                                                  */}
      {/* 1. Write ONLY inside this section.                             */}
      {/* 2. Do not modify any code outside this block.                  */}
      {/* 3. Use relative positioning whenever possible.                 */}
      {/* 4. Do NOT add another background.                             */}
      {/* 5. Keep the design responsive.                                */}
      {/* =============================================================== */}

      

      <section id="hero" className="relative w-full overflow-hidden">
  <div className="relative w-full aspect-[412/915] lg:aspect-[1440/900]">

    {/* ================= Decorative Stickers ================= */}

    <img className="absolute h-[26.21vw] -right-[8.74vw] lg:right-[-0.28vw] lg:h-[13.89vw] popup" src={wheel} />
    <img className="absolute h-[19.42vw] left-[30.1vw] lg:left-[20.72vw] lg:h-[8.56vw] popup" src={specialdeal} />
    <img className="absolute h-[3.61vw] lg:left-[61.11vw] lg:h-[7.78vw] lg:top-[-1.11vw] hidden lg:block popup" src={lightning} />

    {/* Adjusted spark2 to stay in its design spot */}
    <img className="absolute h-[31.07vw] top-[200.97vw] left-[35.92vw] lg:left-[30.56vw] lg:top-[48.61vw] lg:h-[13.89vw] popup" src={spark2} />

    {/* FIXED: Brought the missing white spark sticker back to its top-left quadrant position */}
    <img className="absolute h-[16.5vw] top-[27.18vw] left-[4.85vw] lg:top-[18.06vw] lg:left-[10.44vw] lg:h-[7.5vw] popup" src={spark} />

    <img className="absolute h-[25.24vw] top-[170vw] lg:top-[29.44vw] lg:h-[14.17vw] popup" src={check} />

    <img className="absolute h-[21.36vw] top-[176.7vw] -right-[7.77vw] lg:top-[27.5vw] lg:right-[-0.28vw] lg:h-[8.61vw] popup" src={qrcode} />

    <img className="absolute h-[29.13vw] top-[34.95vw] rotate-6 -right-[8.74vw] lg:top-[9.17vw] lg:right-[-6.67vw] lg:h-[16.67vw] popup" src={triangle} />

    <img className="absolute h-[38.83vw] top-[55.34vw] -left-[3.88vw] lg:top-[16.67vw] lg:h-[15.83vw] lg:left-[-2.22vw] popup" src={coin} />

    <img className="absolute -rotate-10 top-[199.03vw] -right-[7.77vw] h-[28.16vw] lg:h-[16.67vw] lg:right-[-5.56vw] lg:top-[34.72vw] popup" src={smile} />

    {/* FIXED: Repositioned Crown to match Figma (Higher up, further right, proper scaling) */}
    <img className="absolute top-[19.42vw] left-[77.67vw] h-[21.36vw] lg:top-[13vw] lg:left-[78%] lg:h-[11vw] popup" src={crown} />

    <img className="absolute -rotate-11 top-[166.02vw] right-[1.94vw] w-[10.68vw] lg:top-[22.78vw] lg:right-[5.28vw] lg:w-[5.56vw] popup" src={pose} />

    <img className="absolute h-[34.95vw] top-[-5.83vw] -left-[26.21vw] lg:left-[-8.33vw] lg:top-[-1.94vw] lg:h-[18.06vw]" src={keepout} />

    <img className="absolute top-[185.15vw] -left-[5.83vw] h-[39.81vw] lg:h-[20vw] lg:-left-[0.56vw] lg:top-[34.17vw] popup" src={spray} />

    <img className="absolute right-[0.97vw] -top-[11.65vw] h-[33.01vw] lg:right-[5.28vw] lg:-top-[8.61vw] lg:h-[20.83vw] popup" src={punk} />

    {/* Mobile caution */}
    <img
      className="absolute block lg:hidden max-w-[118vw] h-[12.62vw] top-[212vw] popup"
      src={caution}
      alt=""
    />

    {/* Desktop caution */}
    <img
      className="absolute hidden lg:block left-1/2 -translate-x-1/2 top-[43.2vw] w-full max-w-[1800px] h-auto popup"
      src={caution}
      alt=""
    />

    <img
      className="absolute w-[12.62vw] left-[25.24vw] top-[171.26vw] lg:top-[31.67vw] lg:left-[16.11vw] lg:w-[5.28vw] popup"
      src={tag}
      alt=""
    />

    {/* ================= CENTER CONTENT ================= */}

    <div className="absolute inset-0 flex justify-center mt-[75.42vw] lg:mt-[7.5vw]">

      <div className="flex flex-col items-center gap-[3.5vw] lg:gap-[0.2vw]">

        {/* Logo */}
        <img
          src={myLogo}
          className="block lg:hidden w-[58.25vw] fade-in"
          alt=""
        />
        <img
          src={biglogo}
          className="hidden lg:block w-[50vw] fade-in"
          alt=""
        />

        {/* Date */}
        <img
          src={date}
          className="w-[35.19vw] lg:w-[17.36vw]"
          alt=""
        />

        {/* Timer */}
        <div className="relative">
          <img
            src={timerbg}
            className="w-[67.96vw] lg:w-[29.44vw]"
            alt=""
          />
          <div
            className="
          absolute inset-0
          flex items-center justify-center
          text-black
          font-mono
          font-bold
          text-[6.31vw]
          lg:text-[3vw]
        "
          >
            {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row gap-[3vw] lg:gap-[1.8vw]">

          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links"
          >
            <img
              src={register}
              className="h-[11.65vw] lg:h-[5.56vw] popup"
              alt=""
            />
          </a>

          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links"
          >
            <img
              src={join}
              className="h-[11.65vw] lg:h-[5.56vw] popup"
              alt=""
            />
          </a>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* =============================================================== */}
      {/*                      ABOUT BRAINWAVE                           */}
      {/* =============================================================== */}
      <section id="about" className="relative w-full">
        {/* ================= ABOUT START ================= */}


        {/* ================= ABOUT END =================== */}
      </section>

      {/* =============================================================== */}
      {/*                    HIGHLIGHTS / GALLERY                        */}
      {/* =============================================================== */}
      <section id="gallery" className="relative w-full">
        {/* =============== GALLERY START =============== */}


        {/* ================ GALLERY END ================= */}
      </section>

      {/* =============================================================== */}
      {/*                      COUNTDOWN TIMER                           */}
      {/* =============================================================== */}
      <section id="countdown" className="relative w-full">
        {/* ============== COUNTDOWN START ============== */}


        {/* =============== COUNTDOWN END =============== */}
      </section>

      {/* TIMELINE SECTION */}
      <div className='relative min-h-screen'>
        <TimelineSection />
      </div>

      {/* PRIZE POOL SECTION */}
      <PrizeSection />

      {/* REGISTRATION SECTION */}
      <RegistrationSection />

      {/* =============================================================== */}
      {/*                         SPONSORS                              */}
      {/* =============================================================== */}
      <section id="sponsors" className="relative w-full">
        {/* =============== SPONSORS START ============== */}


        {/* ================ SPONSORS END =============== */}
      </section>

      {/* =============================================================== */}
      {/*                    MENTORS / JUDGES                           */}
      {/* =============================================================== */}
      <section id="mentors" className="relative w-full">
        {/* =============== MENTORS START =============== */}


        {/* ================ MENTORS END ================ */}
      </section>

      {/* =============================================================== */}
      {/*                            FAQ                                */}
      {/* =============================================================== */}
      <section id="faq" className="relative w-full">
        <div className="w-full h-full  relative">
          <div className=''>
            <img className='hidden lg:block' src={Faq} alt='faq' />
            <img className='block lg:hidden h-8' src={Faq2} alt='faq' />
          </div>
          <div className='main-content'>
            <ul className="accordion">
              <li>
                <input type="radio" name="accordion" id="first" />
                <label htmlFor="first">What is Netflix?</label>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                </div>
              </li>
              <li>
                <input type="radio" name="accordion" id="second" />
                <label htmlFor="second">what is the cost for netflix subscription?</label>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                </div>
              </li>
              <li>
                <input type="radio" name="accordion" id="Third" />
                <label htmlFor="Third">Where can I watch?</label>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                </div>
              </li>
              <li>
                <input type="radio" name="accordion" id="forth" />
                <label htmlFor="forth">How to cancel the subscription?</label>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                </div>
              </li>
              <li>
                <input type="radio" name="accordion" id="fifth" />
                <label htmlFor="fifth">What can I watch on Netflix?</label>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                </div>
              </li>
              <li>
                <input type="radio" name="accordion" id="sixth" />
                <label htmlFor="sixth">is Netflix good for kids?</label>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                </div>
              </li>
            </ul>
          </div>
          <img className='absolute h-14 top-220 left-1 lg:top-210 lg:left-8 lg:h-27' src={MyLogo} alt='logo' />
          <img className='absolute h-20 top-215 lg:h-25 lg:top-206 -right-1' src={decor} alt='decor' />
          <div className="social-links absolute top-220 right-5 lg:top-210 lg:right-15 flex flex-row gap-1 items-center">
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
              <img className='w-9 lg:w-12' src={linktree} alt="linktree" />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <img className='w-9 lg:w-12' src={instagram} alt="Instagram" />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <img className='w-9 lg:w-12' src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <img className='w-9 lg:w-12' src={gmail} alt="gmail" />
            </a>
          </div>
        </div>
      </section>

      {/* =============================================================== */}
      {/*                           FOOTER                              */}
      {/* =============================================================== */}
      <footer id="footer" className="relative w-full">
        {/* ================= FOOTER START ============== */}


        {/* ================== FOOTER END =============== */}
      </footer>

    </main>
  );
}