import http from "../../shared/services/http-common";

export class IamApiService{

    getAllUsers(){
        return http.get("/users");
    }

    postUser(user){
        return http.post("/users", user);
    }

    loginUser(email, password) {
        return http.get(`/users?email=${email}&password=${password}`);
    }
}
