import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const AddTaskModal = ({ modal, setModal, currentTask, setCurrentTask, hadleCreateTask }) => {

    function handleTags(value) {

        currentTask?.tags?.indexOf(value) === -1 ?
            setCurrentTask((p) => ({ ...p, tags: [...p.tags, value] }))
            :
            setCurrentTask((p) => ({ ...p, tags: [...p.tags].filter((i) => i !== value) }))

    }
    
    return (
        modal && <form onSubmit={
            (e) => hadleCreateTask(e)
        }
            className='bg-[rgba(0,0,0,0.5)] flex items-center z-50 justify-center absolute inset-0' >
            <div className='bg-white w-[280px] p-4 rounded-xl relative'>
                <IoMdClose onClick={() => setModal(false)}
                    className="absolute top-5 cursor-pointer hover:text-red-500 font-bold right-5 " size={20} />


                <h2 className='text-center text-xl font-bold'>Create Task</h2>
                <label htmlFor='task' >
                    <div className='my-3 '>
                        <p className='font-semibold'>Task</p>
                        <input onChange={(e) => setCurrentTask((p) => ({ ...p, taskName: e.target.value }))}
                            className='bg-gray-100 w-full rounded-lg my-2 p-2'
                            required
                            type="text" name="" id="task" placeholder='Task Name' value={currentTask?.taskName} />
                    </div>
                </label>
                <label htmlFor='date'>
                    <div className='my-3 '>
                        <p className='font-semibold'>Due Date</p>
                        <input
                            onChange={(e) => setCurrentTask((p) => ({ ...p, date: e.target.value }))}
                            className=' cursor-pointer bg-gray-100 w-full rounded-lg my-2 p-2'
                            required
                            type="date" name="" id="date" value={currentTask?.date} />
                    </div>
                </label>

                <div className="flex my-3 flex-wrap font-semibold items-center gap-3 text-xs">
                    <div onClick={() => handleTags("Internal")}

                        className={`rounded-xl cursor-pointer w-fit p-1 px-2 
                ${currentTask?.tags?.indexOf("Internal") !== -1 ? 'bg-blue-500 text-white' : ' bg-red-100 text-orange-500'}`}>
                        Internal
                    </div>
                    <div onClick={() => handleTags("Report")}
                        className={`rounded-xl cursor-pointer w-fit p-1 px-2
                ${currentTask?.tags?.indexOf("Report") !== -1 ? 'bg-blue-500 text-white' : ' bg-green-100 text-green-500 '}`} >
                        Report
                    </div>

                    <div onClick={() => handleTags("Urgent")}
                        className={`rounded-xl cursor-pointer w-fit p-1 px-2
 ${currentTask?.tags?.indexOf("Urgent") !== -1 ? 'bg-blue-500 text-white' : ' bg-red-100 text-pink-500 '}`} >
                        Urgent
                    </div>
                    <div onClick={() => handleTags("Marketing")}
                        className={`rounded-xl cursor-pointer w-fit p-1 px-2
 ${currentTask?.tags?.indexOf("Marketing") !== -1 ? 'bg-blue-500 text-white' : ' bg-yellow-100 text-yellow-500 '}`} >
                        Marketing
                    </div>
                    <div onClick={() => handleTags("Event")}
                        className={`rounded-xl cursor-pointer w-fit p-1 px-2
 ${currentTask?.tags?.indexOf("Event") !== -1 ? 'bg-blue-500 text-white' : ' bg-blue-100 text-blue-500 '}`} >                        Event
                    </div>

                </div>

                <button type="submit"
                    className='w-full hover:bg-gray-700  bg-black p-2 font-semibold rounded-md my-3 text-white'>Create</button>
            </div>
        </form >
    );
}

export default AddTaskModal;
