import { useEffect, useState, useRef, useCallback } from "react";

import ProductCard from '../components/ProductCard';
import SkeletonCard from '../components/SkeletonCard';
import Sidebar from '../components/Sidebar';

const ProductList = () => {
    // Store all products from backend
    const [allProducts, setAllProducts] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Track loading state
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);

    // Search, filter, and sort states
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [priceRange, setPriceRange] = useState([0, 0]);
    const [maxPrice, setMaxPrice] = useState(0);
    const [sortBy, setSortBy] = useState("name");

    // Infinite scroll state
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const observerTarget = useRef(null);

    // Fetch all products when component loads
    useEffect(() => {
        fetch("http://localhost:3001/api/products")
        .then((res) => res.json())
        .then((data) => {
            const formatted = data.map(item => ({
                id: item.id,
                name: item.name,
                category: item.category,
                oldPrice: item.oldPrice,
                price: item.price,
                discount: item.discount,
                rating: item.rating,
                image: item.image
            }));
            
            // Calculate max price from products
            const max = Math.max(...formatted.map(p => p.price));
            setMaxPrice(max);
            setPriceRange([0, max]);
            
            setAllProducts(formatted);
            setLoading(false);
        });
    }, []);

    // Apply search, filter, and sort
    useEffect(() => {
        let result = [...allProducts];

        // Search filter
        if (searchTerm) {
            result = result.filter(p => 
                p.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Category filter
        if (selectedCategory) {
            result = result.filter(p => p.category === selectedCategory);
        }

        // Price range filter
        result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

        // Sorting
        switch(sortBy) {
            case "price-low":
                result.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                result.sort((a, b) => b.price - a.price);
                break;
            case "name":
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "rating":
                result.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }

        setFilteredProducts(result);
        setCurrentPage(1); // Reset to first page when filters change
        setDisplayedProducts(result.slice(0, productsPerPage));
    }, [searchTerm, selectedCategory, priceRange, sortBy, allProducts]);

    // Load more products when user scrolls to bottom
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && !loadingMore && displayedProducts.length < filteredProducts.length) {
                    setLoadingMore(true);
                    // Simulate network delay
                    setTimeout(() => {
                        const nextPage = currentPage + 1;
                        const startIndex = nextPage * productsPerPage;
                        const endIndex = startIndex + productsPerPage;
                        const newProducts = filteredProducts.slice(0, endIndex);
                        setDisplayedProducts(newProducts);
                        setCurrentPage(nextPage);
                        setLoadingMore(false);
                    }, 500);
                }
            },
            { threshold: 0.1 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [currentPage, displayedProducts, filteredProducts, loadingMore]);

    if (loading) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-3 mb-4">
                        <Sidebar onCategorySelect={setSelectedCategory} />
                    </div>
                    <div className="col-lg-10 col-md-9">
                        <h2 className="mb-4">All Products</h2>
                        <div className="row">
                            {[...Array(8)].map((_, i) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={i}>
                                    <SkeletonCard />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Hero Banner */}
            <div className="products-hero-banner">
                <div className="hero-overlay">
                    <div className="container">
                        <div className="hero-content">
                            <h1 className="hero-title">McLAREN COLLECTIONS</h1>
                            <p className="hero-subtitle">Shop the official McLaren Formula 1® Team collections, including apparel, accessories, and exclusive merchandise</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
            <div className="row">
                {/* Sidebar */}
                <div className="col-lg-2 col-md-3 mb-4">
                    <Sidebar onCategorySelect={setSelectedCategory} />
                </div>

                {/* Products */}
                <div className="col-lg-10 col-md-9">
                    <h2 className="mb-4">All Products</h2>

                    {/* Search Bar */}
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Filter and Sort Controls */}
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Price Range: ₱{priceRange[0]} - ₱{priceRange[1]}</label>
                            <input
                                type="range"
                                className="form-range"
                                min="0"
                                max={maxPrice}
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Sort By:</label>
                            <select
                                className="form-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="name">Product Name</option>
                                <option value="price-low">Price (Low to High)</option>
                                <option value="price-high">Price (High to Low)</option>
                                <option value="rating">Rating</option>
                            </select>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="row">
                        {displayedProducts.length > 0 ? (
                            displayedProducts.map((product) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                                    <ProductCard product={product} />
                                </div>
                            ))
                        ) : (
                            <div className="col-12">
                                <p className="text-center text-muted">No products found.</p>
                            </div>
                        )}
                    </div>

                    {/* Loading indicator for infinite scroll */}
                    {loadingMore && (
                        <div className="infinite-scroll-loader">
                            <div className="spinner"></div>
                        </div>
                    )}

                    {/* Intersection observer target */}
                    <div ref={observerTarget} style={{ height: '20px' }}></div>
                </div>
            </div>
            </div>
        </>
    );
};

export default ProductList;
