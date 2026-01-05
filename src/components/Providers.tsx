"use client";

import { ReactNode } from "react";
import SmoothScroll from "./SmoothScroll";
import Preloader from "./Preloader";
import Cart from "./Cart";
import { CartProvider } from "../context/CartContext";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <CartProvider>
            <Preloader />
            <Cart />
            <SmoothScroll>
                {children}
            </SmoothScroll>
        </CartProvider>
    );
}
