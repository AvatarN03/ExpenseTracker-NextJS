"use server";

import { db } from "@/lib/db";
import { Transaction } from "@/types/Transaction";
import { auth } from "@clerk/nextjs/server";

async function getTransactionList(): Promise<{
    transactions?: Transaction[];
    error?: string;
  
}> {
  const {userId} = await auth();

  if (!userId) {
    return { error: "User not authenticated" };
  }

  try {
    const transactions = await db.transaction.findMany({
        where:{
            userId
        }
    })

    
    return {
        transactions
    }
  } catch (error) {
    return {
        error:"Database Error"
    }
    
  }
}

export default getTransactionList;
