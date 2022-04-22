import React, { useState } from "react";
import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([false]);

  const handleProductSelection = (payload) => {
    setIsOpen(false);
    setProducts(payload.selection);
  };

  return (
    <Page
      title="Product Selector"
      primaryAction={{
        content: "Select Products",
        onAction: () => setIsOpen(true),
      }}
    >
      <ResourcePicker
        resourceType="Product"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={handleProductSelection}
      />
      {products.map((product, i) => (
        <div key={i}>{product.title}</div>
      ))}
    </Page>
  );
};

export default Index;
