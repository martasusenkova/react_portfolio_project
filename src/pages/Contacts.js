const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Batumi, Georgia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a href="https://t.me/marta_esl">https://t.me/marta_esl</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="https://susenkova582@gmail.com">
                susenkova582@gmail.com
              </a>
            </p>
          </li>{" "}
          <li className="content-list__item">
            <h2 className="title-2">Phone</h2>
            <p>
              <a href="https://t.me/marta_esl">+995 555 499 570</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
