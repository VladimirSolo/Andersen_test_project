import {
  ReactNode, useMemo,
} from "react";
import { useGetFeatureTelegramFlagQuery } from "widgets/api/serverApi";
import { FeatureTelegramContext } from "../../FeatureTelegramProvider";

interface Props {
  children: ReactNode;
}

export const FeatureTelegramProvider = ({ children }: Props) => {
  const { data } = useGetFeatureTelegramFlagQuery();

  const contextValue = useMemo(() => {
    if (data) {
      return data;
    }
    return { isTelegramShareEnabled: false };
  }, [data]);

  return (
      <FeatureTelegramContext.Provider value={contextValue}>
          {children}
      </FeatureTelegramContext.Provider>
  );
};
