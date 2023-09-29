import { RootState } from "app/providers/store/config/store";

export const getUser = (state: RootState) => state.auth.user.uid;
