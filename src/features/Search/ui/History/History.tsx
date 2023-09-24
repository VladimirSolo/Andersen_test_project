import { historyApi } from "features/Search/services/historyApi";
import { Link } from "react-router-dom";
import { PageLoader } from "widgets/PageLoader";
import HistoryLink from "../HistoryLink/HistoryLink";
import s from "./History.module.scss";

const History = () => {
  //   const [removeAllHistory, { isLoading: loadingRemoveAll }] = historyApi.useRemoveAllHistoryMutation();
  const { data: history, isLoading } = historyApi.useGetHistoryQuery();

  //   const onRemoveAllHistory = () => {
  //     removeAllHistory();
  //   };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
      <ul className={s.history}>
          {!history ? (
              <p className="mt-10">
                  <Link className="underline text-orange" to="/">
                      Back to main
                  </Link>
              </p>
          ) : (
            history.map((item) => (
                <HistoryLink key={item.id} item={item} />
            ))
          )}
      </ul>
  );
};

export default History;
