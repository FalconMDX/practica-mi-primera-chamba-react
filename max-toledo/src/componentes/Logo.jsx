function Logo({ type }){
    if (type === "logo1"){
        return(
            <img src="/Imagen_1.png" alt="" />
        )
    }
    else if (type === "logo2"){
        return(
            <img src="/Imagen_7.png" alt="" />
        )
    }
}

export default Logo