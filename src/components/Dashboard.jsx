import Sidebar from "./Sidebar";
import profileImg from "../assets/profile.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import Tasks from "./Tasks";
import AddTaskModal from "./AddTaskModal";
import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";



const Dashboard = () => {
    const [modal, setModal] = useState(false);
    const [show, setShow] = useState(false);
    const [allTask, setAllTask] = useState(() => {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        return tasks ? tasks : [];
    });
    
    const [currentTask, setCurrentTask] = useState({
        taskName: '',
        date: '',
        tags: [],
    });


    function saveToLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            setAllTask(tasks);
        }
    }, []); 

    function hadleCreateTask(e) {
        e.preventDefault();
    
        const dateParts = currentTask.date?.split("-");
        const day = dateParts[2];
        const monthNumber = currentTask.date?.split("-")[1];
        const year = currentTask.date?.split("-")[0];
    
        let monthName;
        switch (monthNumber) {
            case "01":
                monthName = "Jan";
                break;
            case "02":
                monthName = "Feb";
                break;
            case "03":
                monthName = "Mar";
                break;
            case "04":
                monthName = "Apr";
                break;
            case "05":
                monthName = "May";
                break;
            case "06":
                monthName = "Jun";
                break;
            case "07":
                monthName = "Jul";
                break;
            case "08":
                monthName = "Aug";
                break;
            case "09":
                monthName = "Sep";
                break;
            case "10":
                monthName = "Oct";
                break;
            case "11":
                monthName = "Nov";
                break;
            case "12":
                monthName = "Dec";
                break;
            default:
                monthName = "";
                break;
        }
    
        const newTask = {
            id:crypto.randomUUID(),
            taskName: currentTask?.taskName,
            date: day,
            month: monthName,
            year: year,
            tags: [...currentTask.tags]
        };
    
        setAllTask((pr) => ([...pr, newTask]));


        setCurrentTask({
            taskName: '',
            date: '',
            tags: [],
        });
        setModal(false);

    }
    
    useEffect(() => {
        saveToLocalStorage('tasks', allTask);
    }, [allTask]);
    
    return (
        <div className="flex items-start w-full">
            <div className="inline-block h-screen w-fit">
                <Sidebar show={show} setShow={setShow} />
            </div>

            <div className="w-full">

                {/* First */}
                <div className=" relative py-3 pl-3 flex border-b-[1px] border-gray-200 items-center justify-between w-full">
                    <FaBarsStaggered onClick={() => setShow(true)}
                        className="w-fit absolute cursor-pointer lg:hidden inline-block" size={25} />
                    <form className="flex ml-10 max-md:w-30 border-2 rounded-md boder h-8 px-2 w-80-gray-200 text-gray-400 text-sm items-center justify-center ">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z"
                                stroke="#AFAFAF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13.7026 13.7031L17.4996 17.5"
                                stroke="#AFAFAF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <input type="search" placeholder="Search" className="outline-none block w-full px-3 flex-grow " />
                        <svg
                            width={48}
                            height={20}
                            viewBox="0 0 48 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width={20} height={20} rx={2} fill="#F2F2F2" />
                            <path
                                d="M13.25 5H13.25C13.7141 5 14.1593 5.18437 14.4874 5.51256C14.8156 5.84075 15 6.28587 15 6.75V6.75C15 7.21413 14.8156 7.65925 14.4874 7.98744C14.1592 8.31563 13.7141 8.5 13.25 8.5H11.5V6.75C11.5 6.28587 11.6844 5.84075 12.0126 5.51256C12.3408 5.18437 12.7859 5 13.25 5V5Z"
                                stroke="#727272"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.5 8.5H6.75C6.28587 8.5 5.84075 8.31563 5.51256 7.98744C5.18437 7.65925 5 7.21413 5 6.75V6.75C5 6.28587 5.18437 5.84075 5.51256 5.51256C5.84075 5.18437 6.28587 5 6.75 5H6.75C7.21413 5 7.65925 5.18437 7.98744 5.51256C8.31563 5.84075 8.5 6.28587 8.5 6.75V8.5Z"
                                stroke="#727272"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.5 11.5H13.25C13.7141 11.5 14.1592 11.6844 14.4874 12.0126C14.8156 12.3408 15 12.7859 15 13.25V13.25C15 13.7141 14.8156 14.1593 14.4874 14.4874C14.1593 14.8156 13.7141 15 13.25 15H13.25C12.7859 15 12.3408 14.8156 12.0126 14.4874C11.6844 14.1592 11.5 13.7141 11.5 13.25V11.5Z"
                                stroke="#727272"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.75 15H6.75C6.28587 15 5.84075 14.8156 5.51256 14.4874C5.18437 14.1593 5 13.7141 5 13.25V13.25C5 12.7859 5.18437 12.3408 5.51256 12.0126C5.84075 11.6844 6.28587 11.5 6.75 11.5H8.5V13.25C8.5 13.7141 8.31563 14.1592 7.98744 14.4874C7.65925 14.8156 7.21413 15 6.75 15V15Z"
                                stroke="#727272"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.5 8.5H8.5V11.5H11.5V8.5Z"
                                stroke="#727272"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <rect x={28} width={20} height={20} rx={2} fill="#F2F2F2" />
                            <path
                                d="M34.2784 16V4.36364H41.4943V5.875H36.0341V9.42045H40.9773V10.9261H36.0341V16H34.2784Z"
                                fill="#727272"
                            />
                        </svg>

                    </form>

                    <div className="flex gap-4 items-center mx-1 ml-2">
                        <div className="text-gray-400 text-xs w-fit inline-flex items-center gap-2">
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
                                    d="M10.1875 14.0625C10.1875 14.1661 10.1036 14.25 10 14.25C9.89645 14.25 9.8125 14.1661 9.8125 14.0625C9.8125 13.9589 9.89645 13.875 10 13.875C10.1036 13.875 10.1875 13.9589 10.1875 14.0625Z"
                                    fill="#727272"
                                    stroke="#727272"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M9.99997 11.2504V10.6254C10.4326 10.6254 10.8555 10.4971 11.2153 10.2567C11.575 10.0163 11.8554 9.6747 12.021 9.27499C12.1865 8.87527 12.2298 8.43544 12.1454 8.01111C12.061 7.58677 11.8527 7.197 11.5468 6.89107C11.2408 6.58514 10.8511 6.3768 10.4267 6.2924C10.0024 6.20799 9.56256 6.25131 9.16285 6.41688C8.76314 6.58245 8.4215 6.86282 8.18113 7.22256C7.94076 7.58229 7.81247 8.00522 7.81247 8.43787"
                                    stroke="#727272"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <p className="lg:block hidden ">Help Center</p>
                        </div>

                        <div className="inline-flex items-center gap-3 min-w-fit px-2 mx-2">
                            <div className="w-8 h-8 rounded-full overflow-clip">
                                <img src={profileImg} className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="lg:block hidden ">
                                Pratik Pradhan
                            </div>
                            <div>
                                <MdKeyboardArrowDown />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Second */}
                <div className=" lg:pr-4 pb-0 pl-3 shadow-xl flex items-center justify-between h-14">
                    <div className="flex gap-8 mx-3 pt-3 text-xl font-semibold text-black h-full">
                        <div className="relative">
                            Task
                        </div>
                        <div className="relative text-sm h-full w-14 inline-flex pt-[5px] justify-center">
                            <svg
                                width={18}
                                height={21}
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.75 9.25L16.25 9.25C16.5952 9.25 16.875 8.97018 16.875 8.625L16.875 5.5C16.875 5.15482 16.5952 4.875 16.25 4.875L3.75 4.875C3.40482 4.875 3.125 5.15482 3.125 5.5L3.125 8.625C3.125 8.97018 3.40482 9.25 3.75 9.25Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3.75 16.125L16.25 16.125C16.5952 16.125 16.875 15.8452 16.875 15.5L16.875 12.375C16.875 12.0298 16.5952 11.75 16.25 11.75L3.75 11.75C3.40482 11.75 3.125 12.0298 3.125 12.375L3.125 15.5C3.125 15.8452 3.40482 16.125 3.75 16.125Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p className="mx-1">

                                List
                            </p>
                            <div className="h-[2px] bg-black absolute bottom-0 w-full"></div>
                        </div>
                    </div>

                    <div className="flex cursor-pointer items-center pr-2 ">
                        <div className="lg:pr-3">


                            <div className="border-2 border-black rounded-md w-fit inline-flex items-center lg:px-2 px-1 py-1 justify-center ">
                                <svg
                                    className="mx-2"
                                    width={16}
                                    height={17}
                                    viewBox="0 0 16 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 8.5H12"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1.5 5.5H14.5"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M6.5 11.5H9.5"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <p className="lg:block hidden ">
                                    Sort By
                                </p>
                            </div>

                            <div className="border-2 cursor-pointer mx-2  border-black rounded-md w-fit inline-flex items-center lg:px-2 px-1 py-1 justify-center ">
                                <svg className="mx-2"
                                    width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.63028 3.5H13.3697C13.4666 3.5 13.5614 3.52814 13.6425 3.58099C13.7237 3.63384 13.7878 3.70914 13.827 3.79772C13.8662 3.88631 13.8788 3.98437 13.8633 4.07999C13.8478 4.1756 13.8049 4.26466 13.7397 4.33634L9.63003 8.85697C9.54636 8.949 9.5 9.06892 9.5 9.1933V12.7324C9.5 12.8147 9.47968 12.8958 9.44084 12.9683C9.402 13.0409 9.34584 13.1028 9.27735 13.1484L7.27735 14.4818C7.20205 14.532 7.11454 14.5608 7.02415 14.5652C6.93375 14.5695 6.84387 14.5493 6.76408 14.5066C6.68428 14.4639 6.61758 14.4003 6.57107 14.3227C6.52457 14.245 6.5 14.1562 6.5 14.0657V9.1933C6.5 9.06892 6.45364 8.949 6.36997 8.85697L2.26031 4.33634C2.19515 4.26466 2.15221 4.1756 2.13672 4.07999C2.12122 3.98437 2.13384 3.88631 2.17302 3.79772C2.21221 3.70914 2.27628 3.63384 2.35746 3.58099C2.43863 3.52814 2.53341 3.5 2.63028 3.5V3.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="lg:block hidden ">
                                    Filter
                                </p>
                            </div>
                        </div>
                        <button onClick={() => setModal(true)}
                            className="border-2 hover:bg-gray-700   bg-black text-white border-black rounded-md w-fit inline-flex items-center lg:px-2 py-1 justify-center ">
                            <svg className="mx-2"
                                width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 9.25C13.9142 9.25 14.25 8.91421 14.25 8.5C14.25 8.08579 13.9142 7.75 13.5 7.75V9.25ZM2.5 7.75C2.08579 7.75 1.75 8.08579 1.75 8.5C1.75 8.91421 2.08579 9.25 2.5 9.25V7.75ZM13.5 7.75H2.5V9.25H13.5V7.75Z" fill="white" />
                                <path d="M7.25 14C7.25 14.4142 7.58579 14.75 8 14.75C8.41421 14.75 8.75 14.4142 8.75 14H7.25ZM8.75 3C8.75 2.58579 8.41421 2.25 8 2.25C7.58579 2.25 7.25 2.58579 7.25 3H8.75ZM8.75 14V3H7.25V14H8.75Z" fill="white" />
                            </svg>
                            <p className="lg:block hidden ">
                                Add Task
                            </p>
                        </button>

                    </div>

                </div>

                <div className="p-5 overflow-y-scroll h-[80vh]" style={{ scrollbarWidth: "none" }} >
                    <Tasks setModal={setModal} allTask={allTask} setAllTask={setAllTask} />
                </div>


            </div>

            <AddTaskModal hadleCreateTask={hadleCreateTask} setCurrentTask={setCurrentTask} currentTask={currentTask} modal={modal} setModal={setModal} />

        </div>
    );
}

export default Dashboard;
