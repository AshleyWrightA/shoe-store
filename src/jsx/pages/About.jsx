import Navbar from "../components/Navbar";

import "../../css/about.min.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="about__info">
          <div></div>
          <div className="about__info-wrapper">
            <h1>Our Boots are different...or are they?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda voluptatum
              laborum recusandae quibusdam ratione tenetur exercitationem ducimus, esse sequi
              repellendus doloremque consequatur doloribus, odio error sapiente, nisi commodi
              praesentium? Voluptatum, tempora mollitia ab distinctio maxime possimus aliquid
              commodi alias ipsam ut ratione sunt magnam inventore vitae natus eos, dicta cupiditate
              eveniet.
            </p>
          </div>
          <img className="about__image" src="./assets/images/about_splash.jpg" alt="" />
        </div>
        <div className="about__testamonials">
          <p className="about__testamonial-1 about__testamonial">
            Mollitia quis quae aut optio fuga similique illum in incidunt, ipsa, soluta ullam
            adipisci iusto! Quis rem nemo nihil? Beatae, repellendus eligendi?
          </p>
          <p className="about__testamonial-2 about__testamonial">
            Beatae nihil neque, error earum et sit culpa consequatur iusto consectetur, sed illo!
            Nobis delectus in aliquid nihil, dolorem rerum. Est, eligendi!
          </p>
          <p className="about__testamonial-3 about__testamonial">
            Sint dolores aperiam est ullam, illo provident delectus tempora obcaecati quaerat optio
            dolorem veniam in, quidem facilis hic repudiandae sunt atque quae.
          </p>
          <p className="about__testamonial-4 about__testamonial">
            Temporibus recusandae dolorem quas? Sint officiis repellendus, facilis aliquid alias
            asperiores nulla mollitia possimus maxime id. Perspiciatis quibusdam expedita obcaecati
            nostrum exercitationem aliquid necessitatibus deleniti ipsam recusandae architecto,
            fugit, odit maiores, dolorem ut in rerum deserunt? Reprehenderit, quibusdam incidunt?
            Eos, incidunt consequatur!
          </p>
        </div>
      </div>
    </>
  );
}
