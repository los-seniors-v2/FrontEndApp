import http from "../../shared/services/http-common";

export class IamApiService{

    // Método para registrar usuario en el servicio de autenticación
    signUpUser(user) {
        return http.post("/authentication/sign-up", {
            username: user.username,
            password: user.password,
            role: user.role
        });
    }

    // Método para crear perfil de usuario
    createProfile(user) {
        return http.post("/profiles", {
            firstName: user.firstname,
            lastName: user.lastname,
            email: user.email,
            weight: user.weigth,
            height: user.heigth,
            phone: user.phone,
            role: user.role
        });
    }

    async signInUser(username, password) {
        try {
            const response = await http.post("/authentication/sign-in", { username, password });
            return response.data;
        } catch (error) {
            console.error('Error signing in user:', error);
            throw error;
        }
    }
}