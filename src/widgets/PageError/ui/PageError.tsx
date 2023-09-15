import s from "./PageError.module.scss";

const PageError = () => {
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
      <div className={s.error}>
          <p>Something went wrong</p>
          <button className={s.btn} type="button" onClick={reloadPage}>Refresh page</button>
      </div>
  );
};

export default PageError;
