import {Navbar} from "@/Layouts/App/Navbar";
import {TitleBar} from "@/Layouts/App/Short/TitleBar";
import {PlayerZone} from "@/Components/App/Short/Player";

export default function Index() {

    return(
        <div>
            <Navbar/>
            <main className="w-full h-screen flex flex-col bg-[#1b1b1d]">
                <TitleBar/>
                <PlayerZone/>
            </main>
        </div>

    )
}
