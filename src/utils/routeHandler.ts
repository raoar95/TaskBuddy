// import React from "react";

// import { Route } from "react-router-dom";

// /** interface */
// interface IRouteProps {
//   path: string;
//   element: React.ReactNode;
// }

// const unauthorizeRedirect = (): void => {
//   // localStorage.removeItem("user");
//   setTimeout(() => {
//     window.location.href = "/";
//   }, 500);
// };

// const ProtectedRoute: React.FC<IRouteProps> = ({ element, path }) => {
//   return (
//     <Route
//       path={path}
//       element={
//         localStorage.getItem("user") == null ? (
//           <Navigate to="/login" />
//         ) : (
//           element
//         )
//       }
//     />
//   );
// };

// const UnProtectedRoute: React.FC<IRouteProps> = ({ element, path }) => {
//   return <Route path={path} element={element} />;
// };

// export { ProtectedRoute, UnProtectedRoute };
