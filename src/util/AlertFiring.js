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

