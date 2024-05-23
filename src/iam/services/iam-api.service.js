import http from "../../shared/services/http-common";

export class IamApiService{

    getAllUsers(){
        return http.get("/users");
    }
}
