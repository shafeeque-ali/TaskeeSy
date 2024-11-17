import apiClient from "./axiosClient";

export const getAllTaks = async ( status ) => {
  try {
    if (status) {
      const response = await apiClient.get(`tasks`, {
        params: {
          status: status,
        },
      });
      return response;
    }
    const response = await apiClient.get(`tasks`);
    return response;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const getTask = async (id) => {
  try {
    const response = await apiClient.get(`tasks/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const addTask = async ({ title, description, status }) => {
  try {
    const response = await apiClient.post("tasks", {
      title,
      description,
      status,
    });
    return response;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
export const updateTask = async (id, { title, description, status }) => {
  try {
    let payload = { title };
    if (description) payload.description = description;
    if (status) payload.status = status;
    const response = await apiClient.put(`tasks/${id}`, payload);
    return response;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const changeTaskStatus = async (id, { status }) => {
  try {
    let payload = { status };
    const response = await apiClient.patch(`tasks/${id}`, payload);
    return response;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await apiClient.delete(`tasks/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
