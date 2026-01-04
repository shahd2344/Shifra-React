import "./Hero.css";
import { useNavigate } from "react-router-dom";
import "./Recommendation.css"

const courses = [
  {
    title: "Advanced React Development",
    desc: "Master modern React patterns, hooks, and state management with hands-on projects.",
    image: "2.png",
    price: 299,
  },
  {
    title: "Data Science",
    desc: "Learn Python, statistics, and machine learning for data-driven decision making.",
    image: "3.png",
    price: 349,
  },
  {
    title: "UI/UX Design",
    desc: "Create intuitive user experiences with design thinking and prototyping tools.",
    image: "4.png",
    price: 249,
  },
];

export default function Recommendations() {
  const navigate = useNavigate();

  return (
    <section className="section">
      <h2>Smart Recommendations</h2>
      <p className="subtitle">Courses recommended for you</p>

      <div className="cards">
        {courses.map((c, i) => (
          <div className="card" key={i}>
            <img src={`/images/${c.image}`} alt={c.title} />
            <h3>{c.title}</h3>
            <p>{c.desc}</p>

            <div className="actions">
              {/* ✅ DETAILS FIX */}
              <button
                className="btn-outline"
                onClick={() => navigate("/Details", { state: c })}
              >
                Details
              </button>

              <button
                className="btn"
                onClick={() => navigate("/book", { state: c })}
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}