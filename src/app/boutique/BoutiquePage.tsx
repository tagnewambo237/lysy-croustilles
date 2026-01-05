"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search, SlidersHorizontal, Plus, Check, ShoppingBag, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

const CATEGORIES = [
    { id: "all", name: "Tout", emoji: "🍽️" },
    { id: "crepes", name: "Crêpes", emoji: "🥞" },
    { id: "gateaux", name: "Gâteaux", emoji: "🎂" },
];

const PRODUCTS = [
    // === CRÊPES ===
    { id: 1, name: "Crêpe Simple", desc: "Nature, légère et moelleuse", price: 100, category: "crepes", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600" },
    { id: 2, name: "Crêpe Marbrée", desc: "Bicolore vanille & chocolat", price: 150, category: "crepes", image: "https://images.unsplash.com/photo-1575487426162-d278065d6c93?w=600" },
    { id: 3, name: "Crêpe Chocolat", desc: "Garnie au chocolat fondant", price: 150, category: "crepes", tag: "Gourmand", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600" },
    { id: 4, name: "Crêpe Coco", desc: "Saveur noix de coco naturelle", price: 200, category: "crepes", image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600" },
    { id: 5, name: "Crêpe Orange", desc: "Au sirop d'orange, parfumée", price: 250, category: "crepes", image: "https://images.unsplash.com/photo-1504113888839-1c8f5a5c8b5c?w=600" },
    { id: 6, name: "Crêpe Choco-Coco", desc: "Double plaisir chocolat + coco", price: 300, category: "crepes", tag: "Populaire", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600" },
    // === GÂTEAUX ===
    { id: 7, name: "Gâteau au Lait", desc: "Moelleux et doux", price: 2500, category: "gateaux", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600" },
    { id: 8, name: "Gâteau Yaourt", desc: "Léger et savoureux", price: 3000, category: "gateaux", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600" },
    { id: 9, name: "Gâteau Marbré", desc: "L'équilibre vanille & chocolat", price: 3500, category: "gateaux", tag: "Best Seller", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600" },
    { id: 10, name: "Gâteau Orange", desc: "Parfumé et frais", price: 3500, category: "gateaux", image: "https://images.unsplash.com/photo-1551879400-111a9087cd86?w=600" },
    { id: 11, name: "Gâteau Chocolat", desc: "Intense et fondant", price: 4000, category: "gateaux", tag: "Premium", image: "https://images.unsplash.com/photo-1606313564200-e75d5e304abd?w=600" },
];

export default function BoutiquePage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const [showFilters, setShowFilters] = useState(false);
    const { openCart, totalItems } = useCart();

    // Filtrage
    let filteredProducts = PRODUCTS.filter(p => {
        const matchesCategory = activeCategory === "all" || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Tri
    if (sortBy === "price-asc") {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
        filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
    }

    return (
        <div className="min-h-screen bg-[var(--cream)]">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-[var(--ink)] transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="hidden sm:inline">Retour</span>
                        </Link>
                        <div className="w-px h-6 bg-gray-200" />
                        <Link href="/" className="font-display text-2xl text-[var(--ink)]">
                            LYSY<span className="text-[var(--primary)]">.</span>
                        </Link>
                    </div>

                    <button
                        onClick={openCart}
                        className="relative p-3 bg-[var(--ink)] text-white rounded-full hover:bg-[var(--primary)] transition-colors"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--primary)] text-white text-xs font-bold rounded-full flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">
                {/* Page Title */}
                <div className="mb-8">
                    <h1 className="font-display text-4xl md:text-5xl text-[var(--ink)] mb-2">
                        Notre Boutique
                    </h1>
                    <p className="text-gray-500">
                        {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} disponible{filteredProducts.length > 1 ? 's' : ''}
                    </p>
                </div>

                {/* Filters Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Rechercher un produit..."
                            className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Categories */}
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${activeCategory === cat.id
                                        ? "bg-[var(--primary)] text-white shadow-lg shadow-red-500/20"
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                    }`}
                            >
                                <span>{cat.emoji}</span>
                                <span>{cat.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Sort */}
                    <div className="relative">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
                        >
                            <SlidersHorizontal className="w-5 h-5" />
                            <span className="hidden sm:inline">Trier</span>
                        </button>

                        {showFilters && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                                {[
                                    { value: "default", label: "Par défaut" },
                                    { value: "price-asc", label: "Prix croissant" },
                                    { value: "price-desc", label: "Prix décroissant" },
                                    { value: "name", label: "Nom A-Z" },
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => { setSortBy(option.value); setShowFilters(false); }}
                                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${sortBy === option.value ? "text-[var(--primary)] font-medium" : "text-gray-600"
                                            }`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, i) => (
                            <ProductCard key={product.id} product={product} index={i} />
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="font-bold text-xl mb-2">Aucun produit trouvé</h3>
                        <p className="text-gray-500">Essayez de modifier vos filtres</p>
                    </div>
                )}
            </main>

            {/* Floating Cart Button - Mobile */}
            {totalItems > 0 && (
                <motion.button
                    initial={{ scale: 0, y: 100 }}
                    animate={{ scale: 1, y: 0 }}
                    onClick={openCart}
                    className="fixed bottom-6 right-6 z-50 px-6 py-4 bg-[var(--primary)] text-white rounded-full shadow-2xl shadow-red-500/30 flex items-center gap-3 md:hidden"
                >
                    <ShoppingBag className="w-5 h-5" />
                    <span className="font-bold">Panier ({totalItems})</span>
                </motion.button>
            )}
        </div>
    );
}

function ProductCard({ product, index }: { product: any; index: number }) {
    const { addItem, items } = useCart();
    const [justAdded, setJustAdded] = useState(false);

    const itemInCart = items.find(item => item.id === product.id);
    const quantity = itemInCart?.quantity || 0;

    const handleAdd = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
        });
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 800);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
        >
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {product.tag && (
                        <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-[var(--primary)]">
                                {product.tag}
                            </span>
                        </div>
                    )}

                    {quantity > 0 && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-3 right-3 w-7 h-7 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold text-sm"
                        >
                            {quantity}
                        </motion.div>
                    )}

                    {/* Quick Add */}
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={handleAdd}
                            className={`w-full py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors ${justAdded ? 'bg-green-500 text-white' : 'bg-white text-[var(--ink)] hover:bg-[var(--primary)] hover:text-white'
                                }`}
                        >
                            {justAdded ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            {justAdded ? 'Ajouté !' : 'Ajouter'}
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    <h3 className="font-bold text-[var(--ink)] truncate group-hover:text-[var(--primary)] transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-0.5 truncate">{product.desc}</p>
                    <div className="mt-3 flex items-center justify-between">
                        <span className="font-display text-xl text-[var(--primary)]">
                            {product.price.toLocaleString('fr-FR')} <span className="text-xs font-sans text-gray-400">F</span>
                        </span>
                        <button
                            onClick={handleAdd}
                            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${justAdded ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-[var(--primary)] hover:text-white'
                                }`}
                        >
                            {justAdded ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
