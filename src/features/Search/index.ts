import SearchBar from "./ui/SearchBar/SearchBar";
import Search from "./ui/Search/Search";
import searchSlice from "./model/slice/searchSlice";

export { SearchBar, Search };

export const { actions: searchActions } = searchSlice;
export const { reducer: searchReducer } = searchSlice;
