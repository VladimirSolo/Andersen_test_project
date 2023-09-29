import React, { useState } from "react";
import { useNavigate } from "react-router";
import SearchIcon from "shared/assets/icons/search.svg";
import { useGetByParamsQuery } from "widgets/api/moviesApi";
import { historyApi } from "features/Search/services/historyApi";
import { Suggest } from "widgets/Suggest";
import { useDebounce } from "widgets/lib/useDebounce";
import s from "./SearchBar.module.scss";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggest, setSuggest] = useState(false);
  const navigate = useNavigate();
  const [addHistory] = historyApi.useAddHistoryMutation();
  const debounce = useDebounce(query, 500);
  const { data } = useGetByParamsQuery(debounce);

  const handleSearch = () => {
    if (debounce) {
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
                onFocus={() => setSuggest(true)}
                onBlur={() => setSuggest(false)}
              />
              <button
                className={s.searchbtn}
                type="button"
                onClick={handleSearch}
              >
                  <SearchIcon />
              </button>
          </div>

          {debounce && data.Search && suggest && (
          <div className={s.sug}>
              <Suggest movies={data.Search} />
          </div>
          )}
      </div>
  );
};

export default SearchBar;
