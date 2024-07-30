import { JWT_SECRET } from "@/config";
import { comparePassword } from "@/lib/bcrypt";
import prisma from "@/prisma";
import { User } from "@prisma/client"
import {sign} from "jsonwebtoken"; 

export const loginService = async (body: Pick<User, "email" | "password">) => {
    try {
        const {email, password} = body;

        const user = await prisma.user.findFirst({
            where: {email},
        });

        if(!user){
            throw new Error("Invalid Email Address")
        }

        const isPasswordValid = await comparePassword(password, user.password);

        if (!isPasswordValid){
            throw new Error("Incorrect Password")
        }

        const token = sign({ id: user.id}, JWT_SECRET, {expiresIn: "2h", });
    
        return {
            message : "Login Success",
            data: user,
            token,
        }

    } catch (error) {
        throw error
    }
}