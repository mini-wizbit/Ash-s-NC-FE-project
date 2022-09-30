import React, { useState } from "react";
import { useEffect } from "react";
import { getCategories } from "../../utils/api";
import { Link } from "react-router-dom";
import "./CategoriesList.css";

const CategoryList = ({ setTheCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((ApiCategories) => {
      setCategories(ApiCategories);
    });
  }, []);

  return (
    <div className="category-box">
      <ul>
        <li key="All" className="category-list">
          <Link
            to={"/reviews"}
            value="all"
            onClick={() => {
              setTheCategory("");
            }}
          >
            All
          </Link>
        </li>
        {categories.map((category) => {
          return (
            <div className="category-list">
              <li key={category.slug}>
                <Link
                  to={"/reviews"}
                  value={category.slug}
                  onClick={() => {
                    setTheCategory(category.slug);
                  }}
                >
                  {category.slug}
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
