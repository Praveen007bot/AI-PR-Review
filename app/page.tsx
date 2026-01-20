import { auth } from "@/auth";
import LoginLogoutButton from "./components/LoginLogoutButton";


export default async function Home() {

  const session = await auth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900">
      {
        session?.user ? (
          <LoginLogoutButton type="logout" />
        ) : (
          <LoginLogoutButton type="login" />
        )
      }
    </div>
  );
}
