import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <main className="flex bg-dark-2 h-screen w-full items-center justify-center">
            <SignUp />
        </main>
    );
}