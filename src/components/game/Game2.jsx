import React, { useCallback, useState } from "react";
import './TextArea.css';

function Game2() {
    
    const [listToDo, setListToDo] = useState([]);
    const [priority, setPriority] = useState("");
    const [todo, setTodo] = useState("");
    const [catatan, setCatatan] = useState("");

    const addToDo = (event) => {
        event.preventDefault();
        setListToDo((dataSebelumnya) => {
            const newDataTodo = {
                priority: priority,
                todo: todo,
                catatan: catatan,
            };

            return [...dataSebelumnya, newDataTodo];
        });

        setPriority("");
        setTodo("");
        setCatatan("");
    }

    return (
        <div className="p-3">
            <h1 className="mb-4">Simple To-Do List</h1>

            <div>
                <form onSubmit={addToDo}>
                    <div className="row">
                        <div className="col-6">
                            <p className="text-start">Apa yang ingin dikerjakan?</p>
                            <input type="text" className="form-control" placeholder="Nama To-Do List" value={todo} onChange={(e) => setTodo(e.target.value)} required />
                        </div>
                        <div className="col-6">
                            <p className="text-start">Pilih Priority</p>
                            <select name="priority" value={priority} id="" className="form-select" aria-label="Default select example" onChange={(e) => setPriority(e.target.value)} required>
                                <option value="" disabled selected>Pilih Priority</option>
                                <option value="Urgent">Urgent</option>
                                <option value="Normal">Normal</option>
                                <option value="Biasa Saja">Biasa Saja</option>
                            </select>
                        </div>
                    </div>

                    <div className="row row-cols-2">
                        <div>
                            <p className="text-start">Catatan</p>
                            <textarea className="form-control" placeholder="Leave a comment here" rows={5} value={catatan} onChange={(e) => setCatatan(e.target.value)} required></textarea>
                            <button type="submit" className="btn btn-primary d-flex align-item-start mt-4">Tambah To-Do List</button>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <div className="row">
                    {
                        listToDo.map((item, index) => (
                            item.priority == 'Urgent' ? 
                                <div className="col-md-4 mt-4" key={index}>
                                    <div className="card border border-0">
                                        <div className="card-header text-bg-danger">{item.priority}</div>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.todo}</h5>
                                            <p className="card-text">{item.catatan}</p>
                                        </div>
                                    </div>
                                </div>
                            :
                            (
                                item.priority == 'Normal' ? 
                                    <div className="col-md-4 mt-4" key={index}>
                                        <div className="card border border-0">
                                            <div className="card-header text-bg-success">{item.priority}</div>
                                            <div className="card-body">
                                                <h5 className="card-title">{item.todo}</h5>
                                                <p className="card-text">{item.catatan}</p>
                                            </div>
                                        </div>
                                    </div>
                                : 
                                    <div className="col-md-4 mt-4" key={index}>
                                        <div className="card border border-0">
                                            <div className="card-header text-bg-dark">{item.priority}</div>
                                            <div className="card-body">
                                                <h5 className="card-title">{item.todo}</h5>
                                                <p className="card-text">{item.catatan}</p>
                                            </div>
                                        </div>
                                    </div>
                            )
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Game2;