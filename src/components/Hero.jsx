import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero">
      <img src="/images/1.png" alt="hero" className="hero-img" />
      <div className="hero-content">
        <h1>Learning Path AI</h1>
        <p>
         Discover personalized training courses powered by artificial intelligence.
          Build your skills with expert-led sessions tailored to your career goals.
        </p>
        <button className="btn">Get Started</button>
      </div>
    </section>
  );
}
