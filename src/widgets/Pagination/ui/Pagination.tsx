import { Dispatch, SetStateAction } from "react";
import RightArrowIcon from "shared/assets/icons/right.svg";
import LeftArrowIcon from "shared/assets/icons/left.svg";
import s from "./Pagination.module.scss";

interface Props {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Pagination = (props: Props) => {
  const { page, setPage } = props;

  return (
      <div className={s.paginat}>
          <button
            className={s.prev}
            type="button"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
              <LeftArrowIcon className={s.right} />
          </button>
          <button
            className={s.next}
            type="button"
            onClick={() => setPage(page + 1)}
          >
              <RightArrowIcon className={s.right} />
          </button>
      </div>
  );
};

export default Pagination;
