
// This is the main component.

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Repairs.css";

export const Repairs = () => (
    <>
        <Route
            render={() => {
                if (localStorage.getItem("honey_customer")) {
                    return (
                        <>
                            <NavBar />
                            <h1>Honey Rae's Repair Shop</h1>
                            <ApplicationViews />
                        </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
);
