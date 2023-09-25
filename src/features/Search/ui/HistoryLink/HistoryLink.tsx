import { historyApi } from "features/Search/services/historyApi";
import { Link } from "react-router-dom";
import s from "./HistoryLink.module.scss";

interface History {
  name: string,
  id: string
}

interface Props {
  item: History
}

export default function HistoryLink(props: Props) {
  const { item } = props;

  const [removeHistoryItem] = historyApi.useRemoveHistoryMutation();

  const onRemoveHistory = () => {
    removeHistoryItem({ id: item.id });
  };

  return (
      <li className={s.linked}>
          <Link className={s.path} to={`/search?name=${item.name}`}>
              {item.name}
          </Link>
          <button className={s.bug} type="button" onClick={onRemoveHistory}>
              Delete
          </button>
      </li>
  );
}
