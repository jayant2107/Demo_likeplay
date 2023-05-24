import Api from "./interceptor";

//get Api
export const getApi = async (url, data) => {
  try {
    let result = await Api.get(url, data);
    if (result.status === 200) {
    //   if (result.data.status === 200) {
        return result.data;
    //   } else {
    //     return result.data.message;
    //   }
    }
  } catch (e) {
    return e?.response?.data;
  }
};

//   update data Api
export const putApi = async (url, data) => {
  try {
    let result = await Api.put(url, data);
    if (result.status === 200) {
    //   if (result.data.status === 200) {
        return result.data;
    //   } else {
    //     return result.data.message;
    //   }
    }
  } catch (e) {
    return e?.response?.data;
  }
};

// send data Api
export const postApi = async (url, data) => {
  try {
    let result = await Api.post(url, data);
    if (result.status === 200) {
    //   if (result.data.status === 200) {
        return result.data;
    //   } else {
    //     return result.data.message;
    //   }
    }
  } catch (e) {
    return e?.response?.data;
  }
};

//delete Api
export const deleteApi = async (url, data) => {
  try {
    let result = await Api.delete(url, { params: data });
    if (result.status === 200) {
    //   if (result.data.status === 200) {
        return result.data;
    //   } else {
    //     return result.data.message;
    //   }
    }
  } catch (e) {
    return e?.response?.data;
  }
};
