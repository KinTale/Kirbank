import React from "react";

export interface UserInfo {
  userId: number;
  username: string;
}

export interface LoginForm{
  email: string,
  password: string
}

export interface Transaction {
  title: string;
  amount: number;
  date?: Date;
  type: string
}

export type change = React.ChangeEvent<HTMLInputElement>
export type submit = React.FormEvent<HTMLFormElement>