"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-[var(--primary)] flex flex-col items-center justify-center overflow-hidden"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                >
                    {/* Logo animé */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <h1 className="font-display text-[20vw] text-white leading-none tracking-tighter">
                            LYSY
                        </h1>
                        <motion.div
                            className="absolute -bottom-4 right-0 text-white/50 text-lg font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Croustilles
                        </motion.div>
                    </motion.div>

                    {/* Compteur */}
                    <motion.div
                        className="absolute bottom-12 left-12 font-display text-8xl text-white/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {count}%
                    </motion.div>

                    {/* Barre de progression */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                        <motion.div
                            className="h-full bg-white"
                            initial={{ width: "0%" }}
                            animate={{ width: `${count}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>

                    {/* Décoration */}
                    <motion.div
                        className="absolute top-1/4 right-1/4 text-[15rem] opacity-10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        🥞
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
