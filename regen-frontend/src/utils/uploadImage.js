import { API_PATHS }  from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage=async(imageFile)=>{
    const formData=new FormData();
    formData.append('image',imageFile);

    try{
        const response=await axiosInstance.post(API_PATHS.IMAGE_UPLOAD.UPLOAD,formData,{
            headers:{
                'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
}catch(error){
    console.error("Error Uploading Image",error);
    throw error;
}
};

export default uploadImage;