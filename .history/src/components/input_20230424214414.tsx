import { ClassAttributes, InputHTMLAttributes } from "react";

export function Input(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {
    return <input {...props}></input>

}