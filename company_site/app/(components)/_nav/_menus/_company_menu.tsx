'use client';
import { Chat, Flag, Star } from "@mui/icons-material";
import { Avatar, Menu, MenuItem, MenuList } from "@mui/material";
import Spacer from "../../_spacer";



export default function CompanyMenu({ handleClose, anchorEl, open }:
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
                        <p className=" text-sm font-semibold text-zinc-500 ">About us</p>
                        <p className="text-zinc-400 text-sm ">Get to know our team and mission.</p>
                    </div>
                </MenuItem>
                <MenuItem className=" outline-none px-3 py-3  rounded-lg " disableRipple onClick={handleClose}>
                    <Avatar sx={{bgcolor: '#0ea5e9' , width: 30,height: 30}}>
                        <Chat sx={{ width: 20,height: 20 }} />
                    </Avatar>
                    <Spacer className="w-5"/>
                    <div>
                        <p className=" text-sm font-semibold text-zinc-500 ">Careers</p>
                        <p className="text-zinc-400 text-sm ">Why you should Join our fast-growing HR start-up.</p>
                    </div>
                </MenuItem>
            </MenuList>
            
        </Menu>
    </>
}