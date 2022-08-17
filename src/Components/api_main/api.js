import axios from "axios";
import React from 'react';
import {useNavigate} from "react-router-dom"

export const getAxiosInstance=(dynamicApi)=>{

    return axios.create({
        baseURL:"https://nodejs-arash.chabk.ir/api",
        headers: {
            Authorization: "Bearer" +" "+ dynamicApi,
            "Content-Type": "application/json",
            
          },
          
    })

}          

    let dynamicApi=null;        
    export const getBlogss=async(dynamicApi)=>{

        
        return   getAxiosInstance(dynamicApi).get('/blogs').then(result=>{
                // console.log(result.data)

                return result;
        }).catch(error=>{
        })
    }
    export const getProjects=async(dynamicApi)=>{

        
        return   getAxiosInstance(dynamicApi).get('/projects').then(result=>{
                // console.log(result.data)

                return result;
        }).catch(error=>{
        })
    }
  
    export const getBlogsid=(dynamicApi,id)=>{

        
        return   getAxiosInstance(dynamicApi).get(`/blogs/${id}`,).then(result=>{
            const data=result.data;
            return result;

        }).catch(error=>{
            console.log(error)
        })
    }