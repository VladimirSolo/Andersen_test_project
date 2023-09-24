import React, { useState } from "react";
import { useNavigate } from "react-router";
import SearchIcon from "shared/assets/icons/search.svg";
import { useGetByParamsQuery } from "widgets/api/moviesApi";
import { useTypedDispatch } from "app/providers/store/config/hooks";
import { searchActions } from "features/Search";
import { historyApi } from "features/Search/services/historyApi";
import s from "./SearchBar.module.scss";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const [addHistory] = historyApi.useAddHistoryMutation();

  const { data } = useGetByParamsQuery(query);

  const handleSearch = () => {
    if (query) {
      dispatch(searchActions.setResults(data.Search));
      setQuery("");
      addHistory({ name: query });
      navigate(`/search?name=${query}`);
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
      </div>
  );
};

export default SearchBar;
