import React from "react";
import './Customerlist.css'
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { GoPaste } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { GrCube } from "react-icons/gr";
import { BiDockTop } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";

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
                            <div className="list3">
                                <img src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png"/>
                                <a>Alexander Arnold</a>
                                <a>as a Administrator</a>
                            </div>
                        </div>
                    </div>
                    <div className="customer1">
                        <div className="first">
                            <p><RxDashboard /></p>
                            <p><GoPaste /></p>
                            <p><FiUser /></p>
                            <p><CiCalendar /></p>
                            <p><GrCube /></p>
                            <p><BiDockTop /></p>
                        </div>
                        <div className="second">
                            <div className="c1">
                                <a>Patient Queue</a>
                                <a><FiSearch /></a>
                                <p>All</p>
                                <p>Oldest</p>
                                <p>Newest</p>
                            </div>
                            <div className="c2">
                                <div className="im">
                                    <img src="https://acade100.com/wp-content/uploads/2024/08/Image-26.png" width={"30px"} height={"30px"} />
                                    <p><HiDotsHorizontal /></p>
                                </div>
                                <div className="nam">Bessie Cooper</div>
                                <div className="reg">Register: 12 March 2023</div>
                            </div>
                            <div className="c3">
                                 <div className="im">
                                    <img src="https://acade100.com/wp-content/uploads/2024/08/Image-26.png" width={"30px"} height={"30px"} />
                                    <p><HiDotsHorizontal /></p>
                                </div>
                                <div className="nam">Bessie Cooper</div>
                                <div className="reg">Register: 12 March 2023</div>
                            </div>
                            <div className="c4">
                                <div className="im">
                                    <img src="https://acade100.com/wp-content/uploads/2024/08/Image-26.png" width={"30px"} height={"30px"} />
                                    <p><HiDotsHorizontal /></p>
                                </div>
                                <div className="nam">Bessie Cooper</div>
                                <div className="reg">Register: 12 March 2023</div>
                            </div>
                            <div className="c5">
                            <div className="im">
                                    <img src="https://acade100.com/wp-content/uploads/2024/08/Image-26.png" width={"30px"} height={"30px"} />
                                    <p><HiDotsHorizontal /></p>
                                </div>
                                <div className="nam">Bessie Cooper</div>
                                <div className="reg">Register: 12 March 2023</div>
                            
                            </div>
                            <div className="c6">
                            <div className="im">
                                    <img src="https://acade100.com/wp-content/uploads/2024/08/Image-26.png" width={"30px"} height={"30px"} />
                                    <p><HiDotsHorizontal /></p>
                                </div>
                                <div className="nam">Bessie Cooper</div>
                                <div className="reg">Register: 12 March 2023</div>
                            
                            </div>
                            <div className="c7">
                            <div className="im">
                                    <img src="https://acade100.com/wp-content/uploads/2024/08/Image-26.png" width={"30px"} height={"30px"} />
                                    <p><HiDotsHorizontal /></p>
                                </div>
                                <div className="nam">Bessie Cooper</div>
                                <div className="reg">Register: 12 March 2023</div>
                            
                            </div>
                            <div className="c8">
                            <div className="im">
                                    <img src="https://acade100.com/wp-content/uploads/2024/08/Image-26.png" width={"30px"} height={"30px"} />
                                    <p><HiDotsHorizontal /></p>
                                </div>
                                <div className="nam">Bessie Cooper</div>
                            </div>
                        </div>
                        <div className="third">
                            <div className="row"></div>
                            <div className="row1">
                                <div className="column"></div>
                                <div className="column1"></div>
                                <div className="column2"></div>
                            </div>
                           <div className="row2">
                               <div className="row3"></div>
                           </div>
                                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
   
};
