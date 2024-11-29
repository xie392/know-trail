import { useCallback, useState } from "react";
import { Toast } from "~/utils/toast";
import { API } from "~/lib/api";

export const useUploader = ({
  onUpload,
}: {
  onUpload: (url: string) => void;
}) => {
  const [loading, setLoading] = useState(false);

  const uploadFile = useCallback(
    async (file: File) => {
      setLoading(true);
      try {
        const url = await API.uploadImage(file);

        onUpload(url);
      } catch (errPayload: any) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const error =
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          errPayload?.response?.data?.error || "Something went wrong";
        Toast.error(error);
      }
      setLoading(false);
    },
    [onUpload],
  );

  return { loading, uploadFile };
};
