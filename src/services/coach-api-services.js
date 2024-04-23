import http from "./http-common.js";

/**
 * CoachApiServices class
 * @description Service class to interact with the Coach API
 */
export class CoachApiServices {
    getAll() {
        return http.get("/coaches");
    }
    
    getById(id){
        return http.get(`/coaches/${id}`);
    }
    
    create(coachResource){
        return http.post("coaches",coachResource);
    }
    
    update(id, coachResource){
        return http.put(`/coaches/${id}`, coachResource);
    }
    
    delete(id){
        return http.delete(`/coaches/${id}`);
    }
    
    findByName(name) {
        return http.get(`/coaches?name=${name}`);
    }
    
}