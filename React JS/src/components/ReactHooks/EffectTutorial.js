import React, { useEffect } from "react";

export const EffectTutorial = () => {

    // useEffect akan dijalankan setiap kali render terjadi

    useEffect(() => {
        console.log('useEffect is running');
    }, [])

    // jika ingin useEffect hanya sekali jalan nya maka tambahkan array kosong di param kedua
    // kita bisa isikan data state didalam array nya jika ingin menjalankan useEffect ketika ada render dari state tersebut


    return (
        <div>
            
        </div>
    )
}