import { useState } from "react";
import "../stylesheets/NewNote.css";



const NewNote = ()=>{
    const[formData,setFormData] = useState({});

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setFormData((oldValues)=>{
            console.log("oldvalues",oldValues);
            return {
                ...oldValues,
                [name]:value,
            }
        })
    }

    function handleSubmit(e){
        // e.preventDefault();
        console.log("form data submiited");
    }

    // function saveBtnClicked(e){
    //     e.disabled = true;
    //     console.log("jhg")
    // }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title Name:</label>
                    <input name="title" id="" value={formData.title || ""} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Note:</label>
                    <textarea name="note" id="" rows={10} cols={20} value={formData.note || ""} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label>Level:</label>
                    <select value={formData.level || "none"} onChange={handleChange} name="level">
                        <option value="none" disabled>select please</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <button className="saveBtn">Save</button>
            </form>
        </main>
    )
}

export default NewNote;