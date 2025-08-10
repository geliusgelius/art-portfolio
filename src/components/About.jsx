import "@/assets/scss/components/About.scss";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">О художнике</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="text-content">
              <p className="intro">
                Приветствую! Я профессиональный художник с 10-летним опытом в
                цифровой и традиционной живописи.
              </p>

              <div className="details">
                <div className="detail-item">
                  <span className="detail-icon">🎨</span>
                  <p>
                    Специализация: портреты и концепт-арт для игровой индустрии
                  </p>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">🏆</span>
                  <p>Участник международных выставок и конкурсов</p>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">📚</span>
                  <p>Преподаю основы цифровой живописи</p>
                </div>
              </div>

              <p className="outro">
                В каждом проекте стремлюсь создать не просто изображение, а
                историю, которая будет говорить сама за себя.
              </p>
            </div>
          </div>

          <div className="about-image">
            <img src="/images/artist-working.jpg" alt="Художник за работой" />
          </div>
        </div>
      </div>
    </section>
  );
}
