// import "./UserDesc.css";

const User = ({ url, title, name, lastName, tel }) => {
  return (
    <section className="User">
      <img className="User__img" src={url} alt={title} width="480" />
      <h1 className="User__name">
        {name}
        {lastName}
      </h1>
      <p className="User__text">
        Мене звати Ігор, я фотограф з м. Макарів, перед війною почав вивчати
        HTML/CSS/JS. З початком війни побачив як суттєво страждає наша
        економіка. Тенденція пост воєнного майбутнього на розвиток країни бачу в
        технологічній індустрії, саме тому вирішив ще почати вивчати React, що
        надасть мені чудову змогу приєднатися до лав тих хто буде на фронті
        економічного підняття України.
      </p>
      <a className="User__contact" href="tel:+380979540954">
        tel:{tel}
      </a>
    </section>
  );
};

export default User;
