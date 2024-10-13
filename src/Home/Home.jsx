import React from "react";
import "./Home.css"
import MyImage from "../Image/myimage.jpg"
import ReactIcon from "../Image/react-brands-solid.svg"

function Home() {
  return (
    <div>
        <div className="section_box">
            <section className="info">
                <h1>Ramziddin Mahudov</h1>
                <p>
                    "My name is Ramziddin Mahmudov, a passionate web developer with expertise in front-end and back-end technologies like React, CSS, and Supabase. I focus on creating efficient and user-friendly digital solutions. I’m always eager to learn, collaborate, and work on challenging projects. In my free time, I enjoy exploring new tech and coding personal projects."
                </p>
                <a href="https://github.com/ramziddinmahmudov" target="blank"><button className="btn_start">Let’s get started</button></a>
            </section>
            <section>
                <img src={MyImage} alt="" />
            </section>
        </div>
        <div className="worked">
            <p className="work_p">Worked with</p>
            <section className="fremwork">
                <article>
                    <img src={ReactIcon} alt="" className="ReactIcon"/>
                    <span>React</span>
                </article>
                <article>
                    <img src={ReactIcon} alt="" className="ReactIcon"/>
                    <span>React</span>
                </article>
                <article>
                    <img src={ReactIcon} alt="" className="ReactIcon"/>
                    <span>React</span>
                </article>
                <article>
                    <img src={ReactIcon} alt="" className="ReactIcon"/>
                    <span>React</span>
                </article>
                <article>
                    <img src={ReactIcon} alt="" className="ReactIcon"/>
                    <span>React</span>
                </article>
                <article>
                    <img src={ReactIcon} alt="" className="ReactIcon"/>
                    <span>React</span>
                </article>
                <article>
                    <img src={ReactIcon} alt="" className="ReactIcon"/>
                    <span>React</span>
                </article>
            </section>
        </div>
    </div>
  );
}

export default Home;
