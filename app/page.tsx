import { auth } from "@/auth";
import LoginLogoutButton from "./components/LoginLogoutButton";


export default async function Home() {

  const session = await auth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900">
      {
        session?.user ? (
          <>
            <h1 className="mb-4 text-3xl font-bold text-white block!">
              Welcome, {session.user.name}!
            </h1>
          <LoginLogoutButton type="logout" />
          </>
        ) : (
          <LoginLogoutButton type="login" />
        )
      }
    </div>
  );
}
