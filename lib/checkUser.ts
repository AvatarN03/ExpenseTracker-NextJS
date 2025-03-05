import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUser = async ()=>{
    const user = await currentUser();

    //check for the current user in clerk
    if(!user)
    {
        return null;
    }


    // Check for the current clerk user is loggedIn in database

    const loggedInUser = await db.user.findUnique({
        where:{
            clerkUserId: user.id
        }
    })

    // If the user is in database then return the user
    if(loggedInUser)
    {
        return loggedInUser;
    }

    //if the user is not in database then create the user
    const newUser = await db.user.create({
        data:{
            clerkUserId: user.id,
            name:`${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,
        }
    })

    return newUser;
}