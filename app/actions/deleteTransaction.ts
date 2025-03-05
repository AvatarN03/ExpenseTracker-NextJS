"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

async function deleteTransaction(transactionId:string): Promise<{ 
    message?: string; 
    error?: string; }> {
  const {userId} = await auth();

  if (!userId) {
    return { error: "User not authenticated" };
  }

  try {
    await db.transaction.delete({
        where:{
            id:transactionId,
            userId
        }
    })


    revalidatePath("/")
    


    return {
        message:"Transaction Deleted successfully",
    }
  } catch (error) {
    return {
        error:"Database Error in deleting the transaction",
    }
    
  }
}

export default deleteTransaction;
