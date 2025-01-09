/* utils */
import tryCatchHandler from "../utils/tryCatchHandler";
import { fetchHandler, responseHandler } from "../utils/apiHandler";

/* interface */
import { ILoginAuth, IRegisterAuth } from "../interface/user";
import { ITokens } from "../context/authProvider.context";

// ================================== Login Auth start ====================================== //

const loginAuth = tryCatchHandler(async (payload: ILoginAuth) => {
  const response = await fetchHandler({
    endpoint: "/users/login",
    method: "POST",
    payload,
  });

  return await responseHandler(response);
});

// ================================== Login Auth end =========================================== //

// ================================== Register Auth start ========================================= //

const registerAuth = tryCatchHandler(async (payload: IRegisterAuth) => {
  const response = await fetchHandler({
    endpoint: "/users/register",
    method: "POST",
    payload,
  });

  return await responseHandler(response);
});

// ================================== Register Auth End ========================================= //

// =================================== User Logout Start ========================================= //

const logoutUser = tryCatchHandler(async (token: ITokens) => {
  const response = await fetchHandler({
    endpoint: "/users/logout",
    method: "POST",
    token,
  });

  return await responseHandler(response);
});

// ===================================== User Logout End ========================================= //

export { loginAuth, registerAuth, logoutUser };
