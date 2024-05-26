import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <main className="flex bg-dark-2 h-screen w-full items-center justify-center">
            <SignIn />
        </main>
    )
}