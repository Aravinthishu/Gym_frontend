import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';



import './about.css';

const About = () => {
  return (
   <>
   <Header title="About Us" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
     amet fuga cumque sapiente inventore corrupti harum nostrum iure non modi!
   </Header>

   <section className='about__story'>
    <div className="container about__story-container">
      <div className="about__section-image">
        <img src={StoryImage} alt="Our Story Image" />
      </div>
      <div className="about__section-content">
        <h1>Our Story</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui saepe quibusdam voluptas, voluptatem ipsa quia recusandae necessitatibus nemo debitis voluptates assumenda 
          excepturi eligendi labore distinctio dolorum expedita natus accusamus.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat hic quibusdam at recusandae explicabo veniam minima dolore accusamus nulla, eos voluptatibus velit
             vero dignissimos pariatur reiciendis amet perspiciatis voluptatem. Aut!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti fugit 
            commodi eum numquam quaerat, voluptatem aliquid nihil nostrum minima.
          </p>
      </div>
    </div>
   </section>

   <section className='about__Vision'>
    <div className="container about__vision-container">
      <div className="about__section-content">
        <h1>Our Vision</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui saepe quibusdam voluptas, voluptatem ipsa quia recusandae necessitatibus nemo debitis voluptates assumenda 
          excepturi eligendi labore distinctio dolorum expedita natus accusamus.</p>
        
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti fugit 
            commodi eum numquam quaerat, voluptatem aliquid nihil nostrum minima.
          </p>
      </div>
      <div className="about__section-image">
        <img src={VisionImage} alt="Our Vision Image" />
      </div>
    </div>
   </section>

   <section className='about__mission'>
    <div className="container about__mission-container">
      <div className="about__section-image">
        <img src={MissionImage} alt="Our Story Image" />
      </div>
      <div className="about__section-content">
        <h1>Our Mission</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui saepe quibusdam voluptas, voluptatem ipsa quia recusandae necessitatibus nemo debitis voluptates assumenda 
          excepturi eligendi labore distinctio dolorum expedita natus accusamus.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat hic quibusdam at recusandae explicabo veniam minima dolore accusamus nulla, eos voluptatibus velit
             vero dignissimos pariatur reiciendis amet perspiciatis voluptatem. Aut!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti fugit 
            commodi eum numquam quaerat, voluptatem aliquid nihil nostrum minima.
          </p>
      </div>
    </div>
   </section>

  
   </>
  )
}

export default About
