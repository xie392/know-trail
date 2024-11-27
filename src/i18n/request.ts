import { getRequestConfig } from "next-intl/server";
import { useConfigStore } from "~/stores/config";

export default getRequestConfig(async () => {
  const locale = useConfigStore.getState().locale;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const messages = (await import(`../../messages/${locale}.json`)).default;

  // console.log("messages", messages);

  return {
    locale,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    messages,
  };
});
