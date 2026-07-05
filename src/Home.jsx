import Navbar from "./components/Navbar";
import Dither from "./components/Dither";
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
import { useState, useEffect } from 'react'
import "./index.css"


export default function Home() {
  const targetDate = new Date("August 21, 2026 00:00:00").getTime();
  
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
  
      if (difference <= 0) {
        return {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
      }
  
      return {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(
          Math.floor((difference / (1000 * 60)) % 60)
        ).padStart(2, "0"),
        seconds: String(
          Math.floor((difference / 1000) % 60)
        ).padStart(2, "0"),
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
    <main className="relative min-h-screen w-full overflow-x-hidden text-white">

      {/* ========================================================== */}
      {/*                  GLOBAL WEBSITE BACKGROUND                 */}
      {/* ========================================================== */}

      <div className="fixed inset-0 -z-50">

        <Dither
          waveColor={[0.9372549019607843,0.9686274509803922,0.24705882352941178]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />

      </div>

      {/* ========================================================== */}
      {/*                        DARK OVERLAY                        */}
      {/* ========================================================== */}

      <div className="fixed inset-0 bg-black/85 -z-40" />

      {/* =============================================================== */}
      {/*                            NAVBAR                              */}
      {/* =============================================================== */}

      <Navbar />



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                        HERO SECTION                            */}
      {/*                                                                */}
      {/* Assigned To :                                                  */}
      {/*                                                                */}
      {/* Instructions:                                                  */}
      {/* 1. Write ONLY inside this section.                             */}
      {/* 2. Do not modify any code outside this block.                  */}
      {/* 3. Use relative positioning whenever possible.                 */}
      {/* 4. Do NOT add another background.                             */}
      {/* 5. Keep the design responsive.                                */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="hero" className="relative w-full">

        <div className='relative'>
                    <img className='absolute h-27 -right-9 lg:-right-1 lg:h-50 popup' src={wheel}/>
                    <img className='absolute h-20 left-31 lg:left-109 lg:h-38 popup' src={specialdeal}/>
                    <img className='absolute h-13 lg:left-220 lg:h-28 lg:-top-9 hidden lg:block popup' src={lightning}/>
                    <img className='absolute h-32 top-214 left-37 lg:left-110 lg:top-175 lg:h-50 popup' src={spark2}/>
                    <img className='absolute h-17 top-28 left-18 lg:top-29 lg:left-52 lg:h-27 popup' src={spark}/>
                    <img className='absolute h-26 top-190 lg:top-126 lg:h-51 popup' src={check}/>
                    <img className='absolute h-22 top-179 -right-8 lg:top-129 lg:-right-1 lg:h-31 popup' src={qrcode}/>
                    <img className='absolute h-30 top-36 rotate-6 -right-9 lg:top-63 lg:-right-24 lg:h-60 popup' src={triangle}/>
                    <img className='absolute h-40 top-57 -left-4 lg:top-60 lg:h-57 lg:-left-8 popup' src={coin}/>
                    <a
                    href="https://yourwebsite.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='social-links'
                    ><img className='absolute h-16 top-163 left-35 lg:top-160 lg:left-220 lg:h-22 popup' src={join}/></a>
                    <img className='absolute h-19 top-126 left-11 lg:top-123 lg:left-111 lg:h-39 popup' src={timerbg}/>
                    <div className="absolute top-129 left-33 lg:top-130 lg:left-154 popup text-black font-mono font-bold text-4xl lg:text-[75px]">
                      {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
                    </div>
                    <img className='absolute h-9 top-121 left-40 lg:h-16 lg:top-117 lg:left-172 popup' src={date}/>
                    <img className='absolute -rotate-10 top-212 -right-8 h-29 lg:h-60 lg:-right-20 lg:top-165 popup' src={smile}/>
                    <img className='absolute top-70 left-90 h-22 lg:top-23 lg:left-298 lg:h-43 popup' src={crown}/>
                    <img className='absolute top-84 left-20 w-79 h-34 block lg:hidden fade-in' src={myLogo}/>
                    <img className='absolute top-39 left-114 h-72 hidden lg:block fade-in' src={biglogo}/>
                    <img className='absolute -rotate-11 top-168 right-2 w-11 lg:top-112 lg:right-19 lg:w-20 popup' src={pose}/>
                    <a
                    href="https://yourwebsite.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='social-links'
                    ><img className='absolute top-148 left-35 h-16 lg:top-160 lg:left-125 lg:h-22 popup' src={register}/></a>
                    <img className='absolute h-36 -top-6 -left-27 lg:-left-30 lg:-top-7 lg:h-65' src={keepout}/>
                    <img className='absolute top-198 -left-6 h-41 lg:h-72 lg:-left-2 lg:top-143 popup' src={spray}/>
                    <img className='absolute right-1 -top-12 h-34 lg:right-19 lg:-top-31 lg:h-75 popup' src={punk}/>
                    <img className='absolute max-w-118 h-13 top-230 block lg:hidden popup' src={caution}/>
                    <img className='absolute hidden lg:block lg:top-200 lg:w-450 lg:h-23 popup' src={caution}/>
                    <img className='absolute w-13 left-6 top-154 lg:top-114 lg:left-58 lg:w-19 popup' src={tag}/>
        </div>

      </section>



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                      ABOUT BRAINWAVE                           */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="about" className="relative w-full">

        {/* ================= ABOUT START ================= */}



        {/* ================= ABOUT END =================== */}

      </section>



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                    HIGHLIGHTS / GALLERY                        */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="gallery" className="relative w-full">

        {/* =============== GALLERY START =============== */}



        {/* ================ GALLERY END ================= */}

      </section>



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                      COUNTDOWN TIMER                           */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="countdown" className="relative w-full">

        {/* ============== COUNTDOWN START ============== */}



        {/* =============== COUNTDOWN END =============== */}

      </section>



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                         TIMELINE                              */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="timeline" className="relative w-full">

        {/* =============== TIMELINE START ============== */}



        {/* ================ TIMELINE END =============== */}

      </section>



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                        PRIZE POOL                             */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="prizes" className="relative w-full">

        {/* ================= PRIZES START ============== */}



        {/* ================== PRIZES END =============== */}

      </section>



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                       REGISTRATION                            */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="register" className="relative w-full">

        {/* ============== REGISTRATION START =========== */}



        {/* =============== REGISTRATION END ============ */}

      </section>



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                         SPONSORS                              */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="sponsors" className="relative w-full">

        {/* =============== SPONSORS START ============== */}



        {/* ================ SPONSORS END =============== */}

      </section>



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                    MENTORS / JUDGES                           */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="mentors" className="relative w-full">

        {/* =============== MENTORS START =============== */}



        {/* ================ MENTORS END ================ */}

      </section>



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                            FAQ                                */}
      {/*                                                                */}
      {/* =============================================================== */}

      <section id="faq" className="relative w-full">

        <div className="w-full h-full bg-black relative">
              <div className=''>
                <img className='hidden lg:block' src={Faq} alt='faq'/> 
                <img className='block lg:hidden h-8' src={Faq2} alt='faq'/>       
              </div>
              <div className='main-content'>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"/>
                        <label htmlFor="first">What is Netflix?</label>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"/>
                        <label htmlFor="second">what is the cost for netflix subscription?</label>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="Third"/>
                        <label htmlFor="Third">Where can I watch?</label>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="forth"/>
                        <label htmlFor="forth">How to cancel the subscription?</label>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="fifth"/>
                        <label htmlFor="fifth">What can I watch on Netflix?</label>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="sixth"/>
                        <label htmlFor="sixth">is Netflix good for kids?</label>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                        </div>
                    </li>
                </ul>
              </div>
              <img className='absolute h-14 top-220 left-1 lg:top-210 lg:left-8 lg:h-27' src={MyLogo} alt='logo'/>
              <img className='absolute h-20 top-215 lg:h-25 lg:top-206 -right-1' src={decor} alt='decor'/>
              <div className="social-links absolute top-220 right-5 lg:top-210 lg:right-15 flex flex-row gap-1 items-center">
                <a
                    href="https://yourwebsite.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className='w-9 lg:w-12' src={linktree} alt="linktree" />
                </a>
        
                <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className='w-9 lg:w-12' src={instagram} alt="Instagram" />
                </a>
        
                <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className='w-9 lg:w-12' src={linkedin} alt="LinkedIn" />
                </a>
        
                <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className='w-9 lg:w-12' src={gmail} alt="gmail" />
                </a>
              </div>
        </div>

      </section>



      {/* =============================================================== */}
      {/*                                                                */}
      {/*                           FOOTER                              */}
      {/*                                                                */}
      {/* =============================================================== */}

      <footer id="footer" className="relative w-full">

        {/* ================= FOOTER START ============== */}



        {/* ================== FOOTER END =============== */}

      </footer>

    </main>
  );
}