import React, { useEffect, useLayoutEffect } from "react";

export const LayoutEffectTutorial = () => {

    useEffect(() => {
        console.log('useEffect is running');
    }, [])

    useLayoutEffect(() => {
        console.log('useLayoutEffect is running');
    }, [])

    // bedanya yaitu useEffect akan dijalanan setelah semua konten di print sedangkan useLayoutEffect sebelum semua konten di print

    return (
        <div>
            
        </div>
    )
}