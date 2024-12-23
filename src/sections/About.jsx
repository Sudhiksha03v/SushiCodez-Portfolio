import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/me.jpeg" alt="grid-1" className="w-full h-full object-cover" />

            <div>
              <p className="grid-headtext center-text">🙋‍♀️A Brief Intro...</p>
              <p className="grid-subtext">
                🎯 Ex Google DSC Lead '23 | Ex SWE Intern - Salesforce TrailHead. <br />
                👩‍💻 Primarily an AI Engineer, I also build with MERN & ML. Web 3 & DApps interest me. <br />
                ✨ Have a knack for clean code, good UX. Side quests in tech? always up! <br />
                <br />
                🫱🏼‍🫲🏼 Open to discussions & collabs!👇🏻 <br />
                📬Reach out: <a href="mailto:ksha33yesvee@gmail.com">ksha33yesvee@gmail.com</a>
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/achh.jpg" alt="grid-2" className="w-full h-full object-cover" />

            <div>
              <p className="grid-headtext center-text">Achievements</p>
              <p className="grid-subtext">
                🎯 Top 10 AI Skills Challenge - Microsoft Learn <br />
                🎯 Top 5 TGTT Blackbucks State Hackathon JNTU <br />
                🎯 Bronze @ CodeShef | Gold (Python) @ HackerRank <br />
                🎯 Google Cloud Facilitator - Google DSC MRUH <br />
                🎯 Best Delegate - ICFAI ICON'21 Model United Nations <br />
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <img src="assets/socials.jpg" alt="grid-2" className="w-full h-full object-cover" />
            </div>
            <div>
              <div>
                <p className="grid-headtext center-text">📬 To reach out!</p>
                <p className="grid-subtext center-text">
                  Open to discussions & collaborations, remote work & freelance gigs. Let's build together!
                </p>{' '}
                <br />
                <div className="flex gap-">
                  <a href="https://linktr.ee/sudhiksha_v" target="_blank" rel="noopener noreferrer">
                    <Button name="My Linktree" isBeam className="mr-2" />
                  </a>{' '}
                  <br /> <br />
                  <a href="https://shorturl.at/HjEZN" target="_blank" rel="noopener noreferrer">
                    <Button name="Check out Resume" isBeam />
                  </a>{' '}
                </div>
              </div>{' '}
              <br />
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/sudhiksha03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon">
                  <img src="/assets/linkedin.png" alt="instagram" className="w-2/3 h-2/3" />
                </a>
                <a
                  href="https://github.com/Sudhiksha03v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon">
                  <img src="/assets/github.svg" alt="github" className="w-2/3 h-2/3" />
                </a>
                <a href="https://x.com/sudhiksha_v" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <img src="/assets/twitter.svg" alt="twitter" className="w-2/3 h-2/3" />
                </a>
                <a
                  href="https://www.instagram.com/techiephoenixx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon">
                  <img src="/assets/insta.png" alt="instagram" className="w-2/3 h-2/3" />
                </a>
                <a
                  href="https://discordapp.com/users/sushix03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon">
                  <img src="/assets/discord.png" alt="instagram" className="w-2/3 h-2/3" />
                </a>
                <a
                  href="https://medium.com/@miss_pixel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon">
                  <img src="/assets/medium.png" alt="instagram" className="w-2/3 h-2/3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/tech.jpg" alt="grid-3" className="w-full h-full object-cover" />

            <div>
              <p className="grid-headtext">Tech Stacks</p>
              <p className="grid-subtext">
                ⦿ Programming Languages: Java, Python, Dart, Javascript, R <br />⦿ Dev frameworks & libraries: MERN,
                Next.js, Keras, TensorFlow, Spark, PyTorch,PySpark, Scikit Learn <br />
                ⦿ Tools: Git, Github, VSCode, Jupyter, Jira, Notion, MS Suite <br />
                ⦿ Cloud / ML : Machine Learning & AI, NLP, AWS, Google Cloud, Microsoft Azure. MySQL. <br />⦿ Databases:
                Firebase, MongoDB, MySQL.
              </p>
              <p className="grid-subtext"></p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/collab.jpg" alt="grid-4" className="w-full h-full object-cover" />

            <div>
              <p className="grid-headtext">Open to discussions & collaborations!</p>
              <p className="grid-subtext">
                📬Reach out: <a href="mailto:ksha33yesvee@gmail.com">ksha33yesvee@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
