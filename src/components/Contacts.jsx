import { useRef } from "react";
import "@/assets/scss/components/Contacts.scss";

export default function Contacts() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Сообщение отправлено!");
    formRef.current.reset();
  };

  return (
    <section id="contacts" className="contacts-section">
      <div className="container">
        <h2 className="section-title">Контакты</h2>
        <div className="contacts-grid">
          <div className="contacts-info">
            <h3>Свяжитесь со мной</h3>
            <p>Email: artist@example.com</p>
            <p>Телефон: +7 (123) 456-78-90</p>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <input type="text" placeholder="Ваше имя" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Ваше сообщение" required></textarea>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
}
