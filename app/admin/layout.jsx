"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/Auth";
import Sidebar from "@/components/SideBar";

export default function AdminLayout({ children }) {
    const router = useRouter();
    const { token } = useAuthStore();
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    useEffect(() => {
        if (hydrated && !token) {
            router.replace("/");
        }
    }, [hydrated, token]);

    return (
        <div className="flex h-screen  text-white">
            <div className="flex flex-1">
                <Sidebar/>
                <main className="flex-1 overflow-auto p-3">
                    {children}
                </main>
            </div>
        </div>
    );
}