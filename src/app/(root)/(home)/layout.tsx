import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="relative overflow-hidden">
            <Navbar />
            <div className="flex relative">
                <Sidebar />
                <section className="bg-dark-2 flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
                    <div className="w-full">{children}</div>
                </section>
            </div>
        </main>
    )
}

export default layout