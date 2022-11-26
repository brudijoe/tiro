import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="min-h-screen bg-red-200" id="error-page">
      <div className="text-xl font-bold">Error Page</div>
      <div>Error Text: {error.statusText}</div>
      <div>Error: {error.status}</div>
    </div>
  );
}
