import { createContext } from "react";

interface FeatureContext {
  isTelegramShareEnabled: boolean;
}

export const FeatureTelegramContext = createContext<FeatureContext>({ isTelegramShareEnabled: false });
