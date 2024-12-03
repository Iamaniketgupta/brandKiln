import logoImg from "../assets/logo.png";
import { IoMdClose } from "react-icons/io";

import { MdKeyboardArrowDown } from "react-icons/md";

const Sidebar = ({show,setShow}) => {


    
    return (
        <div className={`w-[250px] absolute z-20 lg:block lg:left-0 ${!show?'right-[100%]' : ''} overflow-clip bg-gray-100 lg:relative  h-screen transition ease-in-out delay-150`}>

            {/* logo */}
            <div className="h-[57px] gap-3 pl-7 relative border-b-[1px] w-full border-x-gray-200 inline-flex items-center ">
           { <IoMdClose  onClick={()=>setShow(false)} size={20}
           className={`lg:hidden block cursor-pointer absolute top-5 right-5`}/>}

                <div className="w-6 h-6">
                    <img src={logoImg} alt="Venture"
                        className="w-full h-full object-cover" />
                </div>
                <div className="font-semibold text-2xl">
                    Brand Kiln
                </div>
            </div>

            {/* tabs */}
            <div className="border-b-[1px] text-gray-500 text-sm w-full border-x-gray-200 pl-7">

                <div className="my-2 gap-3 w-full  inline-flex items-center ">
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10 10V2.5"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16.4952 6.25L3.50482 13.75"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>


                    <div className="font-semibold text-md">
                        Dashboard
                    </div>
                </div>


                <div className="my-2 gap-3 w-full  inline-flex items-center ">
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.39089 8.12501C4.38985 7.38377 4.53554 6.64965 4.81955 5.96497C5.10355 5.2803 5.52027 4.6586 6.04567 4.13573C6.57106 3.61285 7.19476 3.19914 7.88079 2.91843C8.56683 2.63772 9.30164 2.49557 10.0429 2.50017C13.1358 2.52316 15.6098 5.09402 15.6098 8.19563V8.75001C15.6098 11.5481 16.1952 13.1718 16.7108 14.0592C16.7663 14.1541 16.7959 14.2619 16.7965 14.3718C16.7971 14.4816 16.7687 14.5897 16.7141 14.6852C16.6596 14.7806 16.5809 14.8599 16.4859 14.9152C16.3909 14.9705 16.2831 14.9997 16.1732 15H3.82687C3.71697 14.9997 3.60908 14.9705 3.51409 14.9152C3.41911 14.8599 3.34038 14.7805 3.28586 14.6851C3.23134 14.5897 3.20295 14.4815 3.20356 14.3716C3.20417 14.2617 3.23375 14.1539 3.28932 14.0591C3.8052 13.1716 4.39088 11.548 4.39088 8.75001L4.39089 8.12501Z"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.5 15V15.625C7.5 16.288 7.76339 16.9239 8.23223 17.3928C8.70107 17.8616 9.33696 18.125 10 18.125C10.663 18.125 11.2989 17.8616 11.7678 17.3928C12.2366 16.9239 12.5 16.288 12.5 15.625V15"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>


                    <div className="font-semibold text-md">
                        Notification
                    </div>

                </div>

                <div className="my-2 gap-3 w-full  inline-flex items-center ">
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.2411 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V3.75C3.125 3.58424 3.19085 3.42527 3.30806 3.30806C3.42527 3.19085 3.58424 3.125 3.75 3.125H16.25C16.4158 3.125 16.5747 3.19085 16.6919 3.30806C16.8092 3.42527 16.875 3.58424 16.875 3.75V12.2411C16.875 12.3232 16.8588 12.4045 16.8274 12.4803C16.796 12.5561 16.75 12.625 16.6919 12.6831L12.6831 16.6919C12.625 16.75 12.5561 16.796 12.4803 16.8274C12.4045 16.8588 12.3232 16.875 12.2411 16.875V16.875Z"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16.8188 12.4994H12.5V16.8181"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>



                    <div className="font-semibold text-md">
                        Notes
                    </div>

                </div>
                <div className="my-2 gap-3 w-full  inline-flex items-center ">
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.5 11.875H12.5"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.5 9.375H12.5"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12.5002 3.125H15.625C15.7908 3.125 15.9497 3.19085 16.0669 3.30806C16.1842 3.42527 16.25 3.58424 16.25 3.75V16.875C16.25 17.0408 16.1842 17.1997 16.0669 17.3169C15.9497 17.4342 15.7908 17.5 15.625 17.5H4.375C4.20924 17.5 4.05027 17.4342 3.93306 17.3169C3.81585 17.1997 3.75 17.0408 3.75 16.875V3.75C3.75 3.58424 3.81585 3.42527 3.93306 3.30806C4.05027 3.19085 4.20924 3.125 4.375 3.125H7.49983"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.875 5.625V5C6.875 4.1712 7.20424 3.37634 7.79029 2.79029C8.37634 2.20424 9.1712 1.875 10 1.875C10.8288 1.875 11.6237 2.20424 12.2097 2.79029C12.7958 3.37634 13.125 4.1712 13.125 5V5.625H6.875Z"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>




                    <div className="font-semibold text-md">
                        Tasks
                    </div>

                </div>
                <div className="my-2 gap-3 w-full  inline-flex items-center ">
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.5 4.375L10 11.25L2.5 4.375"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M2.5 4.375H17.5V15C17.5 15.1658 17.4342 15.3247 17.3169 15.4419C17.1997 15.5592 17.0408 15.625 16.875 15.625H3.125C2.95924 15.625 2.80027 15.5592 2.68306 15.4419C2.56585 15.3247 2.5 15.1658 2.5 15V4.375Z"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8.63639 10L2.69275 15.4484"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17.3073 15.4484L11.3636 10"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>





                    <div className="font-semibold text-md">
                        Emails
                    </div>

                    <MdKeyboardArrowDown className="relative left-20" />


                </div>
                <div className="my-2 gap-3 w-full  inline-flex items-center ">
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.75 1.875V4.375"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.25 1.875V4.375"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3.125 6.875H16.875"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.1875 9.99976H9.375L8.125 11.5623C8.33053 11.5623 8.53289 11.6129 8.71416 11.7098C8.89543 11.8067 9.05002 11.9468 9.16423 12.1176C9.27845 12.2885 9.34876 12.4849 9.36895 12.6895C9.38915 12.894 9.35859 13.1003 9.28 13.2903C9.2014 13.4802 9.07719 13.6478 8.91836 13.7782C8.75953 13.9087 8.57099 13.9979 8.36942 14.0381C8.16786 14.0783 7.9595 14.0682 7.76278 14.0086C7.56607 13.9491 7.38708 13.8419 7.24166 13.6967"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M11.25 10.9373L12.5 9.99976V14.0623"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>





                    <div className="font-semibold text-md">
                        Calendars
                    </div>

                </div>
                <div className="my-2 gap-3 w-full  inline-flex items-center ">
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.5 11.875H12.5"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.5 9.375H12.5"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12.5002 3.125H15.625C15.7908 3.125 15.9497 3.19085 16.0669 3.30806C16.1842 3.42527 16.25 3.58424 16.25 3.75V16.875C16.25 17.0408 16.1842 17.1997 16.0669 17.3169C15.9497 17.4342 15.7908 17.5 15.625 17.5H4.375C4.20924 17.5 4.05027 17.4342 3.93306 17.3169C3.81585 17.1997 3.75 17.0408 3.75 16.875V3.75C3.75 3.58424 3.81585 3.42527 3.93306 3.30806C4.05027 3.19085 4.20924 3.125 4.375 3.125H7.49983"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.875 5.625V5C6.875 4.1712 7.20424 3.37634 7.79029 2.79029C8.37634 2.20424 9.1712 1.875 10 1.875C10.8288 1.875 11.6237 2.20424 12.2097 2.79029C12.7958 3.37634 13.125 4.1712 13.125 5V5.625H6.875Z"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>




                    <div className="font-semibold text-md">
                        Tasks
                    </div>

                </div>


            </div>

            <div className="border-b-[1px] text-gray-500 text-sm w-full border-x-gray-200 pl-7">
                <div className="text-xs font-semibold mt-3 my-2">DATABASE</div>

                <div className="my-2 gap-3 w-full  inline-flex items-center ">
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.5 16.25H2.5V3.75"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16.2502 5L10.0002 11.25L7.50018 8.75L2.50018 13.75"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16.2502 8.125V5H13.1252"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>



                    <div className="font-semibold text-md">
                        Analytics
                    </div>
                </div>
                <div className="my-2 gap-3 w-full  inline-flex items-center ">
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.625 11.25C12.0057 11.25 13.125 10.1307 13.125 8.75C13.125 7.36929 12.0057 6.25 10.625 6.25C9.24429 6.25 8.125 7.36929 8.125 8.75C8.125 10.1307 9.24429 11.25 10.625 11.25Z"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M2.5 8.4375H4.375"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M2.5 5.3125H4.375"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M2.5 11.5625H4.375"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M2.5 14.6875H4.375"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.87476 13.1248C7.31145 12.5427 7.87766 12.0703 8.52855 11.7448C9.17945 11.4194 9.89716 11.25 10.6249 11.25C11.3526 11.25 12.0703 11.4194 12.7212 11.7447C13.3721 12.0701 13.9383 12.5426 14.3751 13.1247"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16.875 16.875V3.125C16.875 2.77982 16.5952 2.5 16.25 2.5L5 2.5C4.65482 2.5 4.375 2.77982 4.375 3.125V16.875C4.375 17.2202 4.65482 17.5 5 17.5H16.25C16.5952 17.5 16.875 17.2202 16.875 16.875Z"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>



                    <div className="font-semibold text-md">
                        Contacts
                    </div>
                </div>

                <div className="my-2 gap-3 w-full  inline-flex items-center ">
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.8756 5.625H3.12561C2.78043 5.625 2.50061 5.90482 2.50061 6.25V16.25C2.50061 16.5952 2.78043 16.875 3.12561 16.875H16.8756C17.2208 16.875 17.5006 16.5952 17.5006 16.25V6.25C17.5006 5.90482 17.2208 5.625 16.8756 5.625Z"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.125 5.625V4.375C13.125 4.04348 12.9933 3.72554 12.7589 3.49112C12.5245 3.2567 12.2065 3.125 11.875 3.125H8.125C7.79348 3.125 7.47554 3.2567 7.24112 3.49112C7.0067 3.72554 6.875 4.04348 6.875 4.375V5.625"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17.5006 9.86792C15.2211 11.1867 12.6334 11.8792 9.99998 11.875C7.36696 11.8792 4.77968 11.1869 2.50049 9.86858"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9.0625 9.375H10.9375"
                            stroke="#727272"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>



                    <div className="font-semibold text-md">
                        Companies
                    </div>
                </div>


            </div>

            <div className="my-2 mt-3 gap-3 w-full pl-7 text-sm text-gray-500 inline-flex items-center ">
                <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.75 3.75H3.75V8.75H8.75V3.75Z"
                        stroke="#727272"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.25 3.75H11.25V8.75H16.25V3.75Z"
                        stroke="#727272"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.75 11.25H3.75V16.25H8.75V11.25Z"
                        stroke="#727272"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.25 11.25H11.25V16.25H16.25V11.25Z"
                        stroke="#727272"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>




                <div className="font-semibold text-md">
                    Integrations
                </div>
            </div>
            <div className="my-2 gap-3 w-full pl-7 text-sm text-gray-500 inline-flex items-center ">
                <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.3485 5.08493C14.5486 5.26215 14.7379 5.45135 14.9151 5.6515L17.0496 5.95631C17.3958 6.55908 17.6627 7.20402 17.8437 7.87513L16.5504 9.59949C16.5504 9.59949 16.5666 10.1338 16.5504 10.4006L17.8442 12.1255C17.6628 12.7965 17.3955 13.4413 17.0489 14.0438L14.9151 14.3486C14.9151 14.3486 14.5487 14.7379 14.3486 14.9151L14.0438 17.0497C13.441 17.3958 12.7961 17.6627 12.125 17.8437L10.4007 16.5505C10.1339 16.5667 9.86632 16.5667 9.59948 16.5505L7.87459 17.8443C7.2036 17.6628 6.55884 17.3955 5.95631 17.049L5.65156 14.9152C5.45141 14.738 5.2622 14.5488 5.08498 14.3487L2.95043 14.0439C2.60427 13.4411 2.33738 12.7962 2.15638 12.1251L3.4497 10.4007C3.4497 10.4007 3.43343 9.86636 3.44965 9.59954L2.15582 7.87465C2.33728 7.20366 2.6046 6.5589 2.95116 5.95637L5.08487 5.65162C5.26208 5.45147 5.45129 5.26226 5.65144 5.08504L5.95625 2.95048C6.55902 2.60433 7.20396 2.33745 7.87507 2.15645L9.59932 3.44972C9.86616 3.4335 10.1337 3.43349 10.4006 3.44971L12.1255 2.15588C12.7965 2.33734 13.4412 2.60466 14.0437 2.95122L14.3485 5.08493Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <div className="font-semibold text-md">
                    Settings
                </div>
            </div>

            <div className="my-2 absolute left-0 right-0 bottom-0 border-t-[1px] py-3 border-gray-200 gap-3  pl-7 text-sm text-gray-500 inline-flex items-center ">
                <svg
                className="shadow-sm bg-slate-200"
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    
                    <path
                        d="M10.6186 11.3182H12.483L15.7244 19.233H15.8438L19.0852 11.3182H20.9496V21.5H19.4879V14.1321H19.3935L16.3906 21.4851H15.1776L12.1747 14.1271H12.0803V21.5H10.6186V11.3182Z"
                        fill="black"
                    />
                </svg>

                <div className="font-semibold text-md">
                    {" Marketing Team's"}
                </div>
                <svg 
                className="ml-3"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.75 6.25L10 2.5L6.25 6.25"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.75 13.75L10 17.5L6.25 13.75"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

            </div>






            {/* End */}
        </div>
    );
}

export default Sidebar;
