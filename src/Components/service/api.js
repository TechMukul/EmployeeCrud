import axios from "axios";

const API_URL = "http://localhost:8080";
export const Adduser = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log("Error 404", error.message);
  }
};

export const getUsers = async () => {
  try{
    return await axios.get(API_URL);
  }
  catch(error){
    console("Error while calling",error)
  }
};


export const getUser = async (data) => {
  try{
    return await axios.get(`${API_URL}/${data}`);
  }
  catch(error){
    console("Error while  calling",error)
  }
};


export const editUser = async (data,id) => {
  try{
    return await axios.put(`${API_URL}/${id}`,data);
  }
  catch(error){
    console("Error while  calling",error.message)
  }
};

export const deleteUser = async (id) => {
  try{
    return await axios.delete(`${API_URL}/${id}`);
  }
  catch(error){
    console("Error while  calling",error.message)
  }
};
