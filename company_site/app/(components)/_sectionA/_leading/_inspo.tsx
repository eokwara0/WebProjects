import {Silkscreen, Prompt , Jost} from "next/font/google";
import Spacer from "../../_spacer";
import { Card, CardHeader } from "@mui/material";


const itm1 = Jost({
    display: 'swap',
    subsets: ['latin'],
    weight : '700'
  });

const sun = Prompt({
    display: 'swap',
    subsets: ['latin'],
    weight: '600'
});

const itm = Silkscreen({
    display: 'swap',
    subsets: ['latin'],
    weight : '400'
});
  
export default function InspoBox({ className, data }: {
    className?: string, data?: { 
        rightHeader: string,
        rightbody: string,
        rightCards: {
            first: React.ReactNode, second: React.ReactNode
        },
        leftHeader: string,
        leftbgcolor: string,
        leftcards: {
            first: {
                avatar: React.ReactNode,
                title: string,
                content: string,
                color: string
            },
            second: {
                avatar: React.ReactNode,
                title: string,
                content: string,
                color: string
            }
        }
        
} }) {
    
    return <>
        <div className={className + " border-2 w-[750px] flex rounded-3xl columns-2 #bg-gray-400 px-4 py-4  border-slate-200 h-5/6 "}>
            <div className=" #bg-sky-500 flex flex-col w-3/6" >
            <Spacer className="h-3"/>

                <h1 className={"text-xl  font-bold text-slate-600 " + itm1.className}>{data?.rightHeader}</h1>
                <Spacer className="h-4"/>
                <p className={"w-1/1 font-semibold text-sm text-slate-500 " + itm.className}>{ data?.rightbody }</p>
                <Spacer className="h-4"/>
                <div className="flex flex-col">
                    {data?.rightCards.first}
                    <Spacer className="h-4"/>
                    {data?.rightCards.second}
                </div>
            </div>
            <Spacer className="w-6"/>
            <div className={data?.leftbgcolor + " w-4/6 bg-opacity-30 px-5 py-5  rounded-3xl"}>
                <p className={" text-zinc-500 w-full text-center text-xl font-semibold " + itm1.className}>{data?.leftHeader}</p>
                <Spacer className="h-4" />
                <div className="flex">
                    <Card className={data?.leftcards.first.color + " rounded-2xl h-16 shadow-sm"}>
                <CardHeader
                    avatar={data?.leftcards.first.avatar}
                title={data?.leftcards.first.title}
                subheader={data?.leftcards.first.content}
                />
                    </Card>
                    <Spacer className="w-20 h-10" />
                </div>
                <Spacer className="h-6" />
                <div className="flex">
                    <Spacer className="w-20 h-10" />
                    <div className={data?.leftcards.second.color + " flex rounded-xl h-16 shadow-sm justify-center items-center px-5 py-5 "}>
                        <div>
                            {data?.leftcards.second.avatar}
                        </div>
                        <Spacer className="w-4"/>
                        <div className={"font-medium text-white font-sans tracking-wide"}>
                            <p className="text-sm font-normal">{data?.leftcards.second.title}</p>
                            <p className="text-sm font-bold">{data?.leftcards.second.content}</p>
                        </div>
                    </div>
                </div>
                <Spacer className="h-4" />
            </div>
        </div>
    </>
}