import { useEffect } from "react";
import { authCheck } from "features/Auth/model/actions/authThunk";
import { useTypedDispatch } from "app/providers/store/config/hooks";

function useAuthCheck() {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(authCheck());
  }, [dispatch]);
}

export default useAuthCheck;
