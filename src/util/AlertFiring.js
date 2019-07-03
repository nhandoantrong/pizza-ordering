import Swal from "sweetalert2";


export const fireLoading = (title) =>{
    Swal.fire({
        title,
        onBeforeOpen:()=>{
            Swal.showLoading()
        },
        allowOutsideClick : false,
        
    })
}

export const closeSwal = ()=>{
    Swal.close();
}

export const fireSuccess = (title) =>{
    Swal.fire({
        title,
        type:"success",
    })
}

export const fireError = (err) =>{
    Swal.fire({
        title: err,
        type:"error"
    })
}