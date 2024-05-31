const loginreq = async (email: string, password: string) => {
  const url ='https://admin.dearburger.link/api/login' ;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Login Failed");
    }
    const data = await response.json();

    sessionStorage.setItem('token', data.token);

  } catch (error) {
    // Re-throw the error to be caught by the caller
    throw error;
  }
};

export default loginreq;