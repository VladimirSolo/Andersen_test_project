import SearchBar from "./ui/SearchBar/SearchBar";
import Search from "./ui/Search/Search";
import searchSlice from "./model/slice/searchSlice";
import History from "./ui/History/History";

export { SearchBar, Search, History };

export const { actions: searchActions } = searchSlice;
export const { reducer: searchReducer } = searchSlice;
