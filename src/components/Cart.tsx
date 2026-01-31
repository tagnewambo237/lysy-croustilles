"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, MapPin, Phone } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Cart() {
    const { items, isOpen, closeCart, updateQuantity, removeItem, totalItems, totalPrice, clearCart } = useCart();

    // Formulaire de livraison
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [showForm, setShowForm] = useState(false);

    // Générer le message WhatsApp
    const generateWhatsAppMessage = () => {
        if (items.length === 0) return "";

        let message = "🛒 *Nouvelle Commande LYSY Croustilles*\n\n";

        items.forEach(item => {
            message += `• ${item.name} x${item.quantity} = ${(item.price * item.quantity).toLocaleString('fr-FR')} FCFA\n`;
        });

        message += `\n💰 *Total: ${totalPrice.toLocaleString('fr-FR')} FCFA*\n\n`;
        message += `📍 Adresse: ${address || '[Non renseignée]'}\n`;
        message += `📞 Téléphone: ${phone || '[Non renseigné]'}`;

        return encodeURIComponent(message);
    };

    const canOrder = phone.length >= 9 && address.length >= 5;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/50 z-[70] backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[80] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white">
                                    <ShoppingBag className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="font-display text-xl">Mon Panier</h2>
                                    <span className="text-sm text-gray-500">{totalItems} article{totalItems > 1 ? 's' : ''}</span>
                                </div>
                            </div>
                            <button
                                onClick={closeCart}
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6 min-h-0">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
                                    <ShoppingBag className="w-16 h-16 mb-4 opacity-30" />
                                    <p className="font-medium mb-2">Votre panier est vide</p>
                                    <p className="text-sm">Ajoutez des délices pour commencer !</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: 100 }}
                                            className="flex gap-3 bg-gray-50 rounded-xl p-3"
                                        >
                                            {/* Image */}
                                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Info */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-sm text-[var(--ink)] truncate">{item.name}</h3>
                                                <p className="text-[var(--primary)] font-bold text-sm">
                                                    {item.price.toLocaleString('fr-FR')} FCFA
                                                </p>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center justify-between mt-2">
                                                    <div className="flex items-center gap-1.5 bg-white rounded-full p-0.5 shadow-sm">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                                                        >
                                                            <Minus className="w-3.5 h-3.5" />
                                                        </button>
                                                        <span className="w-7 text-center font-bold text-sm">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="w-7 h-7 rounded-full bg-[var(--primary)] text-white flex items-center justify-center hover:bg-[var(--primary-light)]"
                                                        >
                                                            <Plus className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="w-7 h-7 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-200"
                                                    >
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer avec Formulaire */}
                        {items.length > 0 && (
                            <div className="border-t p-4 space-y-3 bg-gray-50 max-h-[50vh] overflow-y-auto">
                                {/* Total simplifié */}
                                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                    <span className="font-bold">Total</span>
                                    <span className="font-display text-xl text-[var(--primary)]">
                                        {totalPrice.toLocaleString('fr-FR')} FCFA
                                    </span>
                                </div>

                                {/* Formulaire de Livraison */}
                                <div className="space-y-2.5">
                                    <p className="text-xs font-bold text-gray-600">Informations de livraison</p>

                                    {/* Téléphone */}
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="Numéro de téléphone"
                                            className="w-full pl-10 pr-3 py-2.5 text-sm rounded-lg border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all"
                                        />
                                    </div>

                                    {/* Adresse */}
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                        <textarea
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            placeholder="Adresse de livraison"
                                            rows={2}
                                            className="w-full pl-10 pr-3 py-2.5 text-sm rounded-lg border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all resize-none"
                                        />
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="space-y-2 pt-2">
                                    <a
                                        href={canOrder ? `https://wa.me/237691037693?text=${generateWhatsAppMessage()}` : "#"}
                                        target={canOrder ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                            if (!canOrder) {
                                                e.preventDefault();
                                                alert("Veuillez renseigner votre téléphone et votre adresse de livraison.");
                                            }
                                        }}
                                        className={`w-full py-3.5 rounded-full font-bold text-sm text-center flex items-center justify-center gap-2 transition-all shadow-lg ${canOrder
                                                ? 'bg-green-500 text-white hover:bg-green-600 shadow-green-500/30'
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        Commander via WhatsApp
                                    </a>

                                    {!canOrder && (
                                        <p className="text-xs text-center text-gray-400">
                                            Renseignez vos infos pour commander
                                        </p>
                                    )}

                                    <button
                                        onClick={clearCart}
                                        className="w-full py-2 text-gray-500 text-xs hover:text-red-500 transition-colors"
                                    >
                                        Vider le panier
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
