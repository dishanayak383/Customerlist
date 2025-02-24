import React from "react";
import {Customerlist} from "./Customerlist.jsx";


export default {
    title:"Components/Customerlist",
    compmonent:Customerlist,
};
const Template=(args)=><Customerlist {...args}/>;
export const customerlist =Template.bind()
