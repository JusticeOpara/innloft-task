import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditdProduct = () => {

  const [product, setProduct] = useState({
    description: '',
    categories: '',
    businessModel: '',
    trl: '',
    attributes: [],
  });

  // Function to handle attribute changes
  const handleAttributeChange = (index, newValue) => {
    const updatedAttributes = [...product.attributes];

    updatedAttributes[index] = newValue;
    setProduct({ ...product, attributes: updatedAttributes });
  };

  // Function to save the product
  const saveProduct = async () => {
    try {
      // Make a PUT request to the API with the updated product data
      // Replace 'your-api-endpoint' with the actual API URL and 'your-product-id' with the ID of the product being edited
      await axios.put(`https://api-test.innoloft.com/product/${your - product - id}/`, product);
      // Handle success or show a success message
    } catch (error) {
      console.error("Error updating product data:", error);
      // Handle error if needed
    }
  };

  useEffect(() => {
    const PushProductData = async () => {
      try {
        const response = await axios.get("https://api-test.innoloft.com/product/6781/");
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    PushProductData();
  }, []);

  console.log(product, "--productfdjgkjgkjdjgkjgkjdfkjgkdfj")
  return (
    <div>
      <h1>Edit Product</h1>
      <label>Description (WYSIWYG):</label>
      {/* Integrate your WYSIWYG editor component here */}

      <label>Categories:</label>
      <input
        type="text"
        value={product.categories}
        onChange={(e) => setProduct({ ...product, categories: e.target.value })}
      />

      <label>Business Model:</label>
      <input
        type="text"
        value={product.businessModel}
        onChange={(e) =>
          setProduct({ ...product, businessModel: e.target.value })
        }
      />

      <label>TRL:</label>
      <select
        value={product.trl}
        onChange={(e) => setProduct({ ...product, trl: e.target.value })}
      >
        {/* Add dropdown options here */}
      </select>

      <h2>Attributes:</h2>
     {product.attributes.map((attribute, index) => (
        <input
          key={index}
          type="text"
          value={attribute}
          onChange={(e) => handleAttributeChange(index, e.target.value)}
        />
      ))}

      <button onClick={() => setProduct({ ...product, attributes: [...product.attributes, ''] })}>
        Add Attribute
      </button>

      <button onClick={saveProduct}>Save Product</button>
    </div>
  );
};

export default EditPdroduct;
