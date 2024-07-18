import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemList from "../src/components/Products/ItemList";
import React from "react";
import "@testing-library/jest-dom/vitest";
import { Product } from "../src/interfaces/Product";
import { Provider } from "react-redux";
import store from "../src/store/index";

describe("ItemList", () => {
  it("should render nothing, when array is empty", () => {
    const { container } = render(<ItemList items={[]} />);
    screen.debug();
    expect(container).toBeEmptyDOMElement();
  });

  it("should render items, if array of items is passed", () => {
    const items: Product[] = [
      {
        id: 1,
        category: "category01",
        description: "description01",
        image: "imageURL01",
        title: "title-01",
        price: 120,
        rating: 4.1,
        count: 2,
      },
      {
        id: 2,
        category: "category02",
        description: "description02",
        image: "imageURL02",
        price: 1,
        title: "title",
        rating: 3.4,
        count: 22,
      },
    ];

    render(
      <Provider store={store}>
        <ItemList items={items} />
      </Provider>
    );
    expect(items).toHaveLength(2);
    const images = screen.getAllByRole("img");
    items.forEach((item, index) => {
      const renderedItemTitle = screen.getByText(item.title);
      const renderedItemPrice = screen.getByText(`₹${item.price}`);

      expect(renderedItemTitle).toBeInTheDocument();
      expect(renderedItemPrice).toBeInTheDocument();
      expect(images[index]).toHaveAttribute("src", item.image);
    });
  });
});
