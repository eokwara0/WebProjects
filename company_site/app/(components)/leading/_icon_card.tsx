import Spacer from "../_spacer"
import { Sunshiney, MuseoModerno } from "next/font/google"

const sun = MuseoModerno({
    display: 'swap',
    subsets: ['latin'],
    weight: '400'
});

export default function IconCard({icon , message } : {icon?: React.ReactNode , message?: string}) {
    return <>
        <div className="flex">
            {icon}
            <Spacer className=" w-3" />
            <p className={"text-slate-400 text-sm " + sun.className}>{message}</p>
        </div>
    </>
}