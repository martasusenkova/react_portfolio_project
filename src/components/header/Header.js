import "./style.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Marta Susenkova</em>
          </strong>
          <br />
          I'm a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="/MartaSusenkova_CV.pdf" className="btn" download>
          Download CV
        </a>
        <a
          href="https://drive.google.com/file/d/1hogEGqAdDD8uUgDRQPNBq7rl5Px7VJUm/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
          Посмотреть по ссылке{" "}
        </a>
      </div>
    </header>
  );
};

export default Header;
