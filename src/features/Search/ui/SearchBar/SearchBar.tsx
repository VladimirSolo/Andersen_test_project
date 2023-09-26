import React, { useState } from "react";
import { useNavigate } from "react-router";
import SearchIcon from "shared/assets/icons/search.svg";
import { useGetByParamsQuery } from "widgets/api/moviesApi";
import { useTypedDispatch } from "app/providers/store/config/hooks";
import { searchActions } from "features/Search";
import { historyApi } from "features/Search/services/historyApi";
import { Suggest } from "widgets/Suggest";
import { useDebounce } from "widgets/lib/useDebounce";
import s from "./SearchBar.module.scss";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const [addHistory] = historyApi.useAddHistoryMutation();
  const debounce = useDebounce(query, 500);
  const { data } = useGetByParamsQuery(debounce);

  const handleSearch = () => {
    if (debounce) {
      dispatch(searchActions.setResults(data.Search));
      setQuery("");
      addHistory({ name: debounce });
      navigate(`/search?name=${debounce}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
      <div className={s.wrpapper}>
          <div className={s.search}>
              <input
                className={s.input}
                type="text"
                placeholder="search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button
                className={s.searchbtn}
                type="button"
                onClick={handleSearch}
              >
                  <SearchIcon />
              </button>
          </div>

          {debounce && data.Search && (
          <div className={s.sug}>
              <Suggest movies={data.Search} />
          </div>
          )}
      </div>
  );
};

export default SearchBar;
