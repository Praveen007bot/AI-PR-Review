"use server"

import { signIn, signOut } from "@/auth"

export const Login = async () => {
  await signIn("github", { redirectTo: "/" })
}

export const Logout = async () => {
  await signOut({ redirectTo: "/" })
}