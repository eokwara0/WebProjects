import { ImportContacts, Edit, People, Chat } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Spacer from "../../_spacer";
import IconCard from "./_icon_card";
import InspoBox from "./_inspo";

export default function SidePart() {
    return <>
    
    <Spacer className=' w-auto  #bg-emerald-400 h-5/6 #overflow-hidden   small-screen:hidden  rounded-2xl hover:z-auto'>
          <InspoBox className=' rotate-6  scale-75  shadow-xl hover:scale-95 transition ' data={
            {
              rightHeader: 'Inspiration And accesss',
              rightbody: 'understand the world better, together learn from  people who&apos;ve been there.'
              , rightCards: {
                first: <IconCard icon={<ImportContacts sx={{ color: '#9ca3af', width: 20 }} />} message="Community-Curated News" />,
                second: <IconCard icon={<Edit sx={{ color: '#9ca3af', width: 20 }} />} message="Shared Information across multiple." />
              }
              , leftHeader: 'Want to learn how ?',
              leftbgcolor: ' bg-amber-400 bg-opacity-30',
              leftcards: {
                first: {
                  avatar: <Avatar sx={{ bgcolor: "#38bdf8" }} aria-label="recipe">A</Avatar>
                  , title: 'September 14, 2016',
                  content: 'shiba Inu to the moon',
                  color : ''
                },
                second: {
                  avatar: <Avatar sx={{ bgcolor: "#10b981" }} aria-label="recipe">B</Avatar>,
                  title: 'September 14, 2016',
                  content: 'Thats right my friend🚀',
                  color : 'bg-amber-400 bg-opacity-80'
                }
              }
            }
          }/>
          <InspoBox className='flex-row-reverse scale-[.75] -translate-x-14 translate-y-2 -rotate-12 shadow-xl hover:scale-95 transition hover:z-auto ' data={
           {
            rightHeader: 'Meaningful Relationships',
            rightbody: 'meet new people in communities build friendships that last.'
            , rightCards: {
              first: <IconCard icon={<People sx={{ color: '#9ca3af', width: 20 }} />} message="Community-Curated News" />,
              second: <IconCard icon={<Chat sx={{ color: '#9ca3af', width: 20 }} />} message="Hot topics and discussions" />
            }
            , leftHeader: 'New hot meme token?',
            leftbgcolor: ' bg-sky-300 bg-opacity-30',
            leftcards: {
              first: {
                avatar: <Avatar sx={{ bgcolor: "#db2777" }} aria-label="recipe">E</Avatar>
                , title: 'September 14, 2016',
                content: 'I want to know what shorting',
                color : ''
              },
              second: {
                avatar: <Avatar sx={{ bgcolor: "#a855f7" }} aria-label="recipe">S</Avatar>,
                title: 'September 14, 2016',
                content: 'Alright let me show🌞',
                color : 'bg-sky-500 bg-opacity-50'
              }
            }
          }
        }
          />
          
      </Spacer>
    </>
}