import React, { useState } from "react";
import { toast } from "react-toastify";

function Game1() {

    const [isStart, setIsStart] = useState(false);
    const [random, setRandom] = useState();
    const [jumlahTebakan, setJumlahTebakan] = useState(0);
    const [tebakan, setTebakan] = useState();
    const [isGameOver, setGameOver] = useState(false);

    const notifyBenar = (message) => {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark",
        });
    };

    const notifySalah = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark",
        });
    };

    const mulaiPermainanEventHandler = () => {
        const rand = Math.floor(Math.random() * (20 - 11 + 1)) + 11;
        setIsStart(true);
        setRandom(rand);
    }

    const tebakEventHandler = (event) => {
        event.preventDefault();

        if(tebakan != null && tebakan != ""){

            if(tebakan == random){
                setJumlahTebakan(4);
                notifyBenar("Congratulation!! Anda Menang");
                setGameOver(true);
                return;
            }

            if(jumlahTebakan < 3){
    
                if(tebakan < random){
                    notifySalah("Nilai Inputan Terlalu Kecil");
                    
                } else if(tebakan > random) {
                    notifySalah("Nilai Inputan Terlalu Besar");
                }

                setJumlahTebakan(jumlahTebakan + 1);
            } else {
                setJumlahTebakan(4);
                notifySalah("Game Over");
                setGameOver(true);
            }
        } else {
            notifySalah("Input Tidak Boleh Kosong");
        }

    }

    const resetEventHandler = (event) => {
        event.preventDefault();

        setJumlahTebakan(0);
        setGameOver(false);
        mulaiPermainanEventHandler();
        setTebakan("");
    }

    return (
        <div className="p-3">
            <h1 className="mb-4">Number Guessing Game</h1>
            <div>
                <p className="text-start ms-5">
                    1. Each Player gets 4 chances to guess<br/>
                    2. Number range is between 11 - 20<br/>
                    3. You can reset the number after 4 wrong answer
                </p>
            </div>

            <div>
                {
                    isStart ? ( 
                        <>
                            <p className="text-start ms-5 mt-5">Input Angka</p>
                            <form onSubmit={tebakEventHandler}>
                                {
                                    isGameOver ? (
                                        <input type="number" className="form-control ms-5 w-50" placeholder="Input Angka 11 - 20" value={tebakan} onChange={(e) => setTebakan(e.target.value)} disabled/>
                                    ) :
                                    <input type="number" className="form-control ms-5 w-50" placeholder="Input Angka 11 - 20" value={tebakan} onChange={(e) => setTebakan(e.target.value)}/>
                                    
                                }
                                <p className="text-start ms-5 mt-4">Nilai Aslinya Adalah {random}</p>
                                <p className="text-start ms-5 mt-5">Jumlah Tebakan {jumlahTebakan}</p>

                                {
                                    isGameOver ?
                                    <button className="btn btn-danger d-flex align-item-start ms-5 mt-2" type="button" onClick={resetEventHandler}>Reset</button>
                                    :
                                    <button className="btn btn-primary d-flex align-item-start ms-5 mt-2" type="submit">Tebak Angka</button>
                                }
                            </form>
                        </>
                    ) :
                    <>
                        <p className="text-start ms-5 mt-5">Silahkan Mulai Permainan</p>
                        <button className="btn btn-success d-flex align-item-start ms-5 mt-5" onClick={mulaiPermainanEventHandler}>Mulai Permainan</button>
                    </>
                }
            </div>

        </div>
    )
}

export default Game1;