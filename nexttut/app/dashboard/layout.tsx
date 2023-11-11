import {SideNav} from "@/app/ui/dashboard/SideNav";

export default function Layout({children}: {children: React.ReactNode}){
    return (
        <div>
            <SideNav />
            <h1>Novo Layout</h1>
            {children}
        </div>
    )
}