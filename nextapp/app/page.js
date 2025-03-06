import { getServerSession } from "next-auth";
// Importing the getServerSession function from 'next-auth' to fetch session data on the server side.

export default async function Home() {
  // Async function to fetch session data before rendering the page.

  const session = await getServerSession();
  // getServerSession fetches session information during the server-side rendering process.
  // This ensures the session data is available when the page is rendered.

  return (
    <div>
      {JSON.stringify(session)}
      {/* Displaying the session data as a JSON string for debugging purposes. */}
    </div>
  );
}