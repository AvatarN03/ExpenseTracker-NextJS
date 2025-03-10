"use client";

import addTransaction from "@/app/actions/addTransaction";
import { useRef } from "react";
import { toast } from "react-toastify";
const AddTransaction = () => {

    const formRef = useRef<HTMLFormElement>(null);

    const clientAction = async (formData: FormData)=>{
        const {data, error} = await addTransaction(formData);

        if(error)
        {
            toast.error(error);
        }else{
            toast.success("Transaction added successfully");
            formRef.current?.reset()
            
        }
    }

  return (
    <>
    <h1>Add transaction</h1>
    <form ref={formRef} action={clientAction}>
        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" name="text" id="text" placeholder="Enter the text..." />
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount<br/>(negative - expense. positive - income)</label>
            <input type="number" name="amount" id="amount" placeholder="Enter the amount" step={0.1}/>
        </div>
        <button className="btn"> Add Transaction</button>
    </form>
    </>
  )
}

export default AddTransaction