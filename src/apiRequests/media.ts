import http from "@/lib/http";
import { UploadImageResType } from "@/schemaValidations/media.schema";

export const mediaAPiRequest = {
    upload: (formData: FormData) => http.post<UploadImageResType>('/media/upload', formData)
}