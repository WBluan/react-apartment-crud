import { LayoutDashboard, House, Settings } from "lucide-react";

export default function Menu() {
    return (
        <div className="w-50 h-screen bg-base-200 p-4 fixed left-0 top-0">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul className="menu">
                <li>
                    <a className="flex items-center gap-2">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <LayoutDashboard/>
                        </svg>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a className="flex items-center gap-2">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <House/>
                        </svg>
                        Unidades
                    </a>
                </li>
                <li>
                    <a className="flex items-center gap-2">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <Settings/>
                        </svg>
                        Sistema
                    </a>
                </li>
            </ul>
        </div>
    );
}