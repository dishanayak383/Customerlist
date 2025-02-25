import React from "react";
import './Customerlist.css'
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";

export const Customerlist=()=>{
    return (
        <div className="container">
            <div className="sub-container">
                <div className="customer">
                    <div className="list">
                        <div className="dental">
                        <img src="https://www.shutterstock.com/image-vector/tooth-3d-blue-dentist-icon-260nw-1681421581.jpg"/>
                        </div>
                        <div className="list-customer">
                            <div className="list1">
                                <p>List Customer</p>
                                <p><IoIosArrowForward/></p>
                                <p>Jerome Bellingham</p>
                            </div>
                            <div className="list2">
                                <p><CiSearch/></p>
                                <p><IoNotificationsOutline/></p>
                            </div>
                            <div className="list3"></div>
                        </div>
                    </div>
                    <div className="customer1">
                        <div className="first">
                            <p></p>
                        </div>
                        <div className="second"></div>
                        <div className="third">
                            <div className="row"></div>
                            <div className="row1">
                                <div className="column"></div>
                                <div className="column1"></div>
                                <div className="column2"></div>
                            </div>
                           <div className="row2"></div>
                           <div className="row3"></div>              
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
   
};
