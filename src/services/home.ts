import { axiosGet } from "../utils/http"

export const fetchRecords = () => {
  return axiosGet("/json/records.json")
}
