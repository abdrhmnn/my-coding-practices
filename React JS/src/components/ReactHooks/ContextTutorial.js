import React, { createContext, useState } from "react";

// useContext digunakan untuk mengelola state yang kita gunakan
// utk bisa menggunakan useContext maka kita harus buat context nya terlebih dahulu

export const AppContext = createContext(null);

export const ContextTutorial = () => {

    const [data, setData] = useState("");

    return (
        <AppContext.Provider value={ data, setData }>
            {/* masukan components yang ingin menggunakan state nya */}
            {/* nanti caranya tinggal import useContext hooks dan hubungkan useContext nya dengan AppContext kemudian value nya bisa langsung di destruct sesuai dgn kebutuhan */}
        </AppContext.Provider>
    )
}