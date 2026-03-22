import { useEffect, useState } from 'react';

const Sidebar = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  const handleCategoryClick = (category) => {
    const newCategory = selectedCategory === category ? "" : category;
    setSelectedCategory(newCategory);
    onCategorySelect(newCategory);
  };

  return (
    <aside className="bg-light p-3">
      <h5>Categories</h5>
      <ul className="list-group">
        {loading ? (
          <li className="list-group-item">Loading...</li>
        ) : (
          <>
            <li 
              className={`list-group-item ${selectedCategory === "" ? "active" : ""}`}
              style={{ cursor: 'pointer' }}
              onClick={() => handleCategoryClick("")}
            >
              All Categories
            </li>
            {categories.map((category, index) => (
              <li 
                key={index} 
                className={`list-group-item ${selectedCategory === category ? "active" : ""}`}
                style={{ cursor: 'pointer' }}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
