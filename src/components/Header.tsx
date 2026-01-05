"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { totalItems, openCart } = useCart();

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 2, ease: [0.76, 0, 0.24, 1] }}
                className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6"
            >
                <div className="flex items-center justify-between max-w-[1800px] mx-auto">

                    <Link href="/" className="group relative">
                        <span className="font-display text-3xl md:text-4xl tracking-tighter text-[var(--ink)] group-hover:opacity-0 transition-opacity">
                            LYSY<span className="text-[var(--primary)]">.</span>
                        </span>
                        <span className="font-display text-3xl md:text-4xl tracking-tighter text-[var(--primary)] absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                            LYSY<span className="text-[var(--ink)]">.</span>
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-12">
                        {['La Carte', 'Histoire', 'Livraison'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="relative text-sm font-semibold uppercase tracking-widest text-[var(--ink)] hover:text-[var(--primary)] transition-colors group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--primary)] group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://wa.me/237691037693"
                            className="hidden md:flex items-center gap-3 px-6 py-3 bg-[var(--ink)] text-white rounded-full font-bold text-sm hover:bg-[var(--primary)] transition-colors"
                        >
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            Commander
                        </a>

                        {/* Cart Button */}
                        <button
                            onClick={openCart}
                            className="relative p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            {totalItems > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-1 -right-1 w-6 h-6 bg-[var(--primary)] text-white text-xs font-bold rounded-full flex items-center justify-center"
                                >
                                    {totalItems}
                                </motion.span>
                            )}
                        </button>

                        <button
                            onClick={() => setMenuOpen(true)}
                            className="lg:hidden p-3 bg-[var(--ink)] text-white rounded-full"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
                        animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
                        exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[60] bg-[var(--ink)] text-white overflow-hidden"
                    >
                        <div className="absolute inset-0 flex">
                            <div className="hidden lg:block w-1/2 h-full relative">
                                <img
                                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80"
                                    className="w-full h-full object-cover opacity-50"
                                    alt=""
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--ink)]" />
                            </div>

                            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-12 md:px-24">
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="absolute top-8 right-8 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <nav className="space-y-2">
                                    {['Accueil', 'La Carte', 'Notre Histoire', 'Livraison', 'Contact'].map((item, i) => (
                                        <div key={item} className="overflow-hidden">
                                            <motion.a
                                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                                initial={{ y: 100 }}
                                                animate={{ y: 0 }}
                                                transition={{ delay: 0.1 * i + 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                                                onClick={() => setMenuOpen(false)}
                                                className="flex items-center gap-6 font-display text-5xl md:text-7xl hover:text-[var(--primary)] transition-colors group py-2"
                                            >
                                                <span className="text-sm font-sans font-medium opacity-30 group-hover:opacity-100 transition-opacity">
                                                    0{i + 1}
                                                </span>
                                                {item}
                                                <ArrowUpRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            </motion.a>
                                        </div>
                                    ))}
                                </nav>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-6 text-sm text-white/50"
                                >
                                    <div>
                                        <span className="block text-white font-bold mb-1">WhatsApp</span>
                                        691 03 76 93
                                    </div>
                                    <div>
                                        <span className="block text-white font-bold mb-1">Localisation</span>
                                        Ngousso – Petrolex
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
