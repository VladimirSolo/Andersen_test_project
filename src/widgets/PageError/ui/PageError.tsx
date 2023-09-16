import { Button } from "shared/ui";
import s from "./PageError.module.scss";

const PageError = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
      <div data-testid="page-error" className={s.error}>
          <p>Something went wrong</p>
          <Button
            className={s.btn}
            type="button"
            onClick={reloadPage}
            text="Refresh page"
          />
      </div>
  );
};

export default PageError;
