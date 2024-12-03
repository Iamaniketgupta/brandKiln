import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useEffect, useState } from "react";

const Tasks = ({ setModal, allTask, setAllTask }) => {

    const [completedTasks, setCompletedTasks] = useState([]);
    const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
    const [deleteUpcomingTaskIDX, setDeleteUpcomingTaskIDX] = useState(null);
    const [deleteCompletedTaskIDX, setDeleteCompletedTaskIDX] = useState(null);

    useEffect(() => {
        const completedTasksFromLocalStorage = JSON.parse(localStorage.getItem('completedTasks'));
        if (completedTasksFromLocalStorage) {
            setCompletedTasks(completedTasksFromLocalStorage);
        }
    }, []); 

    const saveToLocalStorage = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    const checkTaskHandler = (id) => {
        const checkedTask = allTask.find((task) => task.id === id);
        setCompletedTasks((prev) => [...prev, checkedTask]);
        setAllTask((prevTasks) => prevTasks.filter((task) => task.id !== id));

        saveToLocalStorage('tasks', allTask);
        saveToLocalStorage('completedTasks', [...completedTasks, checkedTask]);
    };

    const uncheckTaskHandler = (id) => {
        const uncheckedTask = completedTasks.find((task) => task.id === id);
        setCompletedTasks((prev) => prev.filter((task) => task.id !== id));
        setAllTask((prev) => [...prev, uncheckedTask]);

        saveToLocalStorage('tasks', allTask);
        saveToLocalStorage('completedTasks', completedTasks.filter((task) => task.id !== id));
    };

    const deleteTask = (taskId) => {
        setAllTask(prevTasks => prevTasks.filter(task => task.id !== taskId));
        setSelectedTaskIndex(null);

        saveToLocalStorage('tasks', allTask);
    };

    const deleteCompletedTask = (taskId) => {
        setCompletedTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
        setDeleteCompletedTaskIDX(null);

        saveToLocalStorage('completedTasks', completedTasks.filter((task) => task.id !== taskId));
    };

    const deleteUpcomingTask = (taskId) => {
        setAllTask(prevTasks => prevTasks.filter(task => task.id !== taskId));
        setDeleteUpcomingTaskIDX(null);

        saveToLocalStorage('tasks', allTask);
    };


   

    return (
        <div>
            <section className="planned ">
                <div className=" items-center gap-4 inline-flex ">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 drop-shadow-md ">
                    </div>
                    <p className="text-xl font-semibold drop-shadow-md ">Planned Stages </p>
                    <p className="text-xs text-gray-400 pt-1 drop-shadow-md ">{allTask?.length} open tasks</p>
                </div>

                <div onClick={() => setModal(true)}
                    className="w-full text-center font-medium shadow-lg text-gray-600 bg-gray-100 my-4 py-2 rounded-md cursor-pointer">
                    <span className="text-xl">+</span>  Create Task
                </div>

                {allTask?.length ?
                    allTask?.map((item) =>
                        <div key={item.id} className="flex mt-5 relative items-center justify-between px-2 overflow-clip py-1 h-16 shadow-lg rounded-lg">

                            {/* Task details */}
                            <div className="items-center flex gap-3 ml-3 flex-grow max-w-[230px]">
                            <MdCheckBoxOutlineBlank onClick={() => checkTaskHandler(item.id)}
                                size={25} className="cursor-pointer max-w-10 min-w-10 inline-block" />
                                <p className="font-semibold ml-3 text-left md:text-lg text-md lg:max-w-[340px] ">{item?.taskName}</p>
                            </div>
                            <div className="flex text-center text-gray-500 items-center lg:min-w-[150px] gap-2 w-fit">
                                {/* Due date */}
                                <div className="items-center max-sm:pl-5 lg:text-sm text-xs flex gap-1 min-w-[100px]">
                                <svg
                                    className="max-sm:hidden"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11 1.5V3.5"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5 1.5V3.5"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2.5 5.5H13.5"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5.75 7.99979H7.5L6.5 9.24979C6.66443 9.24979 6.82631 9.29033 6.97133 9.36783C7.11635 9.44533 7.24001 9.55739 7.33139 9.69409C7.42276 9.83079 7.47901 9.98791 7.49516 10.1515C7.51132 10.3152 7.48687 10.4803 7.424 10.6322C7.36112 10.7841 7.26175 10.9182 7.13469 11.0226C7.00763 11.1269 6.85679 11.1983 6.69554 11.2305C6.53429 11.2626 6.3676 11.2545 6.21023 11.2069C6.05286 11.1592 5.90966 11.0735 5.79332 10.9573"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M9 8.74982L10 7.99982V11.2498"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                    <p className="max-sm:hidden">Due Date : </p>
                                    <p>{item?.date}</p>
                                    <p>{item?.month + " " + item?.year}</p>
                                </div>
                            </div>
                            {/* Tags */}
                            <div className="inline-flex gap-5 max-md:hidden lg:text-sm text-[11px]  min-w-[100px]  max-w-[350px]  justify-center items-center ">
                                {item?.tags?.map((tag, idx) =>
                                    <div key={idx} className={`${tag === "Report" ? 'bg-green-100 text-green-500' :
                                        tag === "Event" ? "bg-blue-100 text-blue-500" :
                                            tag === "Marketing" ? "bg-yellow-100 text-yellow-500" :
                                                tag === "Urgent" ? "bg-pink-100 text-pink-500" :
                                                    'bg-red-100 text-orange-500'} px-[4px] lg:px-2 lg:py-1 text-center  rounded-sm`}>
                                        {tag}
                                    </div>
                                )}
                            </div>
                            {/* Action buttons */}
                            <BsThreeDotsVertical
                                onClick={() => setSelectedTaskIndex(selectedTaskIndex === item.id ? null : item.id)}
                                className="mx-2 cursor-pointer"
                            />
                            {selectedTaskIndex === item.id && (
                                <div className="w-20 absolute z-50 text-center right-12 top-3 bg-gray-100 shadow-lg rounded-lg hover:bg-red-500 hover:text-white cursor-pointer text-sm font-semibold text-gray-500">
                                    <p onClick={() => deleteTask(item.id)} className="py-2">Delete</p>
                                </div>
                            )}
                        </div>
                    )
                    :
                    <p className="text-center text-gray-400">No Task Found</p>
                }


            </section>


            <section className="upcoming my-4 mt-5">
                <div className=" items-center gap-4 inline-flex ">
                    <div className="w-2 h-2 rounded-full bg-blue-500 drop-shadow-md ">
                    </div>
                    <p className="text-xl font-semibold drop-shadow-md ">Upcoming Tasks </p>
                    <p className="text-xs text-gray-400 pt-1 drop-shadow-md ">{allTask?.length} open tasks</p>
                </div>

                <div onClick={() => setModal(true)}
                    className="w-full text-center font-medium shadow-lg text-gray-600 bg-gray-100 my-4 py-2 rounded-md cursor-pointer">
                    <span className="text-xl">+</span>  Create Task
                </div>



                {allTask?.length ?
                    allTask?.map((item) =>
                        <div key={item.id} className="flex mt-5 relative items-center justify-between px-2 overflow-clip py-1 h-16 shadow-lg rounded-lg">

                            <div className="items-center flex gap-3 ml-3 flex-grow max-w-[230px]">
                            <MdCheckBoxOutlineBlank size={25}
                            className="cursor-pointer max-w-10 min-w-10 inline-block"
                             onClick={() => checkTaskHandler(item.id)}/>
                                <p className="font-semibold ml-3 text-left md:text-lg text-md lg:max-w-[340px] ">{item?.taskName}</p>
                            </div>

                            <div className="flex text-center text-gray-500 items-center lg:min-w-[150px] gap-2 w-fit">
                                <svg
                                    className="max-sm:hidden"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11 1.5V3.5"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5 1.5V3.5"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2.5 5.5H13.5"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5.75 7.99979H7.5L6.5 9.24979C6.66443 9.24979 6.82631 9.29033 6.97133 9.36783C7.11635 9.44533 7.24001 9.55739 7.33139 9.69409C7.42276 9.83079 7.47901 9.98791 7.49516 10.1515C7.51132 10.3152 7.48687 10.4803 7.424 10.6322C7.36112 10.7841 7.26175 10.9182 7.13469 11.0226C7.00763 11.1269 6.85679 11.1983 6.69554 11.2305C6.53429 11.2626 6.3676 11.2545 6.21023 11.2069C6.05286 11.1592 5.90966 11.0735 5.79332 10.9573"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M9 8.74982L10 7.99982V11.2498"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <div className="items-center max-sm:pl-5 lg:text-sm text-xs flex gap-1 min-w-[100px]">

                                    <p className="max-sm:hidden">Due Date : </p>
                                    <p>{item?.date}</p>
                                    <p>{item?.month + " " + item?.year}</p>
                                </div>
                            </div>



                            <div className="inline-flex gap-5 max-md:hidden lg:text-sm text-[11px]  min-w-[100px]  max-w-[350px]  justify-center items-center "
                            >
                                {
                                    item?.tags?.map((tag, idx) =>
                                        <div key={idx} className={`${tag === "Report" ? 'bg-green-100 text-green-500' :
                                            tag === "Event" ? "bg-blue-100 text-blue-500" :
                                                tag === "Marketing" ? "bg-yellow-100 text-yellow-500" :
                                                    tag === "Urgent" ? "bg-pink-100 text-pink-500" :
                                                        'bg-red-100 text-orange-500'} px-[4px] lg:px-2 lg:py-1 text-center  rounded-sm`}>
                                            {tag}
                                        </div>
                                    )

                                }

                            </div>
                        {/* Action buttons */}
                        <BsThreeDotsVertical
                                onClick={() => setDeleteUpcomingTaskIDX(deleteUpcomingTaskIDX === item.id ? null : item.id)}
                                className="mx-2 cursor-pointer"
                            />
                            {deleteUpcomingTaskIDX === item.id && (
                                <div className="w-20 absolute z-50 text-center right-12 top-3 bg-gray-100 shadow-lg rounded-lg hover:bg-red-500 hover:text-white cursor-pointer text-sm font-semibold text-gray-500">
                                    <p onClick={() => deleteUpcomingTask(item.id)} className="py-2">Delete</p>
                                </div>
                            )}


                        </div>)

                    :
                    <p className="text-center text-gray-400">No Task Found</p>
                }


            </section>

            <section className="completed my-4 mt-5">
                <div className=" items-center gap-4 inline-flex ">
                    <div className="w-2 h-2 rounded-full bg-green-500 drop-shadow-md ">
                    </div>
                    <p className="text-xl font-semibold drop-shadow-md ">Completed Tasks </p>
                    <p className="text-xs text-gray-400 pt-1 drop-shadow-md ">{completedTasks?.length} completed tasks</p>
                </div>

                {completedTasks?.length ?
                    completedTasks?.map((item) =>
                        <div key={item.id} className="flex mt-5 relative items-center justify-between px-2 overflow-clip py-1 h-16 shadow-lg rounded-lg">

                            <div className="items-center flex gap-3 opacity-70 ml-3 flex-grow max-w-[230px]">

                                <IoCheckbox size={25} 
                                className="cursor-pointer max-w-10 min-w-10 inline-block"
                                onClick={() => uncheckTaskHandler(item?.id)}

                                />
                                <p className="font-semibold ml-3 text-left md:text-lg text-md lg:max-w-[340px] ">{item?.taskName}</p>
                            </div>

                            <div className="flex text-center text-gray-500 items-center lg:min-w-[150px] gap-2 w-fit">
                                <svg
                                    className="max-sm:hidden"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11 1.5V3.5"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5 1.5V3.5"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2.5 5.5H13.5"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5.75 7.99979H7.5L6.5 9.24979C6.66443 9.24979 6.82631 9.29033 6.97133 9.36783C7.11635 9.44533 7.24001 9.55739 7.33139 9.69409C7.42276 9.83079 7.47901 9.98791 7.49516 10.1515C7.51132 10.3152 7.48687 10.4803 7.424 10.6322C7.36112 10.7841 7.26175 10.9182 7.13469 11.0226C7.00763 11.1269 6.85679 11.1983 6.69554 11.2305C6.53429 11.2626 6.3676 11.2545 6.21023 11.2069C6.05286 11.1592 5.90966 11.0735 5.79332 10.9573"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M9 8.74982L10 7.99982V11.2498"
                                        stroke="#727272"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <div className="items-center max-sm:pl-5 lg:text-sm text-xs flex gap-1 min-w-[100px]">

                                    <p className="max-sm:hidden">Due Date : </p>
                                    <p>{item?.date}</p>
                                    <p>{item?.month + " " + item?.year}</p>
                                </div>
                            </div>



                            <div className="inline-flex gap-5 max-md:hidden lg:text-sm text-[11px]  min-w-[100px]  max-w-[350px]  justify-center items-center "
                            >
                                {
                                    item?.tags?.map((tag, idx) =>
                                        <div key={idx} className={`${tag === "Report" ? 'bg-green-100 text-green-500' :
                                            tag === "Event" ? "bg-blue-100 text-blue-500" :
                                                tag === "Marketing" ? "bg-yellow-100 text-yellow-500" :
                                                    tag === "Urgent" ? "bg-pink-100 text-pink-500" :
                                                        'bg-red-100 text-orange-500'} px-[4px] lg:px-2 lg:py-1 text-center  rounded-sm`}>
                                            {tag}
                                        </div>
                                    )

                                }

                            </div>
                            {/* Action buttons */}
                            <BsThreeDotsVertical
                                onClick={() => setDeleteCompletedTaskIDX(deleteCompletedTaskIDX === item.id ? null : item.id)}
                                className="mx-2 cursor-pointer"
                            />
                            {deleteCompletedTaskIDX === item.id && (
                                <div className="w-20 absolute z-50 text-center right-12 top-3 bg-gray-100 shadow-lg rounded-lg hover:bg-red-500 hover:text-white cursor-pointer text-sm font-semibold text-gray-500">
                                    <p onClick={() => deleteCompletedTask(item.id)} className="py-2">Delete</p>
                                </div>
                            )}


                        </div>)

                    :
                    <p className="text-center my-3 text-gray-400">No Completed Task </p>
                }



            </section>


        </div>
    );
}

export default Tasks;
