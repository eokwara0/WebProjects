'use client';
import { Chat, Flag, Star } from "@mui/icons-material";
import { Avatar, Menu, MenuItem, MenuList } from "@mui/material";
import Spacer from "../../_spacer";



export default function SolutionMenu({ handleClose, anchorEl, open }:
    {
        open: boolean,
        handleClose: () => void,
        anchorEl: null | HTMLElement,
    }) {

    const top = anchorEl !== null ? anchorEl.offsetTop + 70 : 0;
    const left = anchorEl !== null ? anchorEl.offsetLeft - 150 : 0;
    return <>
        <Menu
            open={open}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={{top : top  , left : left }}
            sx={{ '.MuiMenu-paper': { borderRadius: 4, boxShadow: 1,}}}
            disableAutoFocus
            disableAutoFocusItem
            autoFocus={false}
        >
            <MenuList className=" px-4 outline-none " >
                <MenuItem className=" outline-none px-3 py-3 rounded-lg " disableRipple onClick={handleClose}>
                    <Avatar  sx={{bgcolor: '#0ea5e9' , width: 30,height: 30}}>
                        <Flag />
                    </Avatar>
                    <Spacer className="w-5"/>
                    <div>
                        <p className=" text-sm font-semibold text-zinc-500 ">How it works</p>
                        <p className="text-zinc-400 text-sm ">An intuitive workflow to easily achieve hiring success.</p>
                    </div>
                </MenuItem>
                <MenuItem className=" outline-none px-3 py-3  rounded-lg " disableRipple onClick={handleClose}>
                    <Avatar sx={{bgcolor: '#0ea5e9' , width: 30,height: 30}}>
                        <Chat sx={{ width: 20,height: 20 }} />
                    </Avatar>
                    <Spacer className="w-5"/>
                    <div>
                        <p className=" text-sm font-semibold text-zinc-500 ">Why JOin ?</p>
                        <p className="text-zinc-400 text-sm ">How we make hiring easier</p>
                    </div>
                </MenuItem>
                <MenuItem className=" outline-none px-3 py-3  rounded-lg " disableRipple onClick={handleClose}>
                    <Avatar sx={{bgcolor: '#0ea5e9' , width: 30,height: 30}}>
                        <Star sx={{ width: 20,height: 20 }} />
                    </Avatar>
                    <Spacer className="w-5"/>
                    <div>
                        <p className=" text-sm font-semibold text-zinc-500 ">Customer success story</p>
                        <p className="text-zinc-400 text-sm ">See how we helped companies better attract talent.</p>
                    </div>
                </MenuItem>
            </MenuList>
            
        </Menu>
    </>
}