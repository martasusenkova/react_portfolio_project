import Header from "../components/header/Header";
const Home = () => {
  return (
    <>
      {" "}
      <Header></Header>
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Skills</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, SCSS, Vite,
                NPM, BootStrap, TailwindCSS, StyledComponents
              </p>{" "}
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Languages</h2>
              <p>English - C1, Spanish - C1, Russian - Native</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
