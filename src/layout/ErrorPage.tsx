import { useRouteError } from "react-router-dom";

interface RouterError extends Error {
  data?: string;
  statusText?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouterError;

  return (
    //Check this error id later
    <div id="error-page" className="flex-col h-screen gap-4 text-white flex-center bg-slate-800">
      <h1 className="text-2xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i>
        <i>{error.message}</i>
      </p>
      <p>{error.data}</p>
    </div>
  );
}