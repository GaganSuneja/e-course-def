import { usersApi } from "../../api/usersApi";

export const unsubscribeApi = function() {
  usersApi.abortApi();
};
