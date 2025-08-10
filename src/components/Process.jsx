import "@/assets/scss/components/Process.scss";

export default function Process() {
  const steps = [
    {
      title: "Консультация",
      description: "Обсуждение идеи и составление технического задания",
      icon: "💬",
    },
    {
      title: "Эскиз",
      description: "Создание предварительных набросков и утверждение",
      icon: "✏️",
    },
    {
      title: "Реализация",
      description: "Поэтапное создание работы с промежуточными показами",
      icon: "🎨",
    },
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        <h2 className="section-title">Процесс работы</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
