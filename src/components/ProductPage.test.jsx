import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./ProductPage";

const mockProduct = {
  id: "1",
  name: "80 Robux",
  price: 0.99,
  amount: 80,
  image: "https://via.placeholder.com/150?text=80+Robux",
  description: "A small top-up of 80 Robux",
  stock: "200",
};

function renderWithRoute() {
  return render(
    <MemoryRouter initialEntries={["/products/1"]}>
      <Routes>
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </MemoryRouter>
  );
}

beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

describe("ProductPage", () => {
  test("shows loading state first", () => {
    global.fetch.mockReturnValue(new Promise(() => {}));
    renderWithRoute();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders product details after a successful fetch", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });

    renderWithRoute();

    await waitFor(() => {
      expect(screen.getByText("80 Robux")).toBeInTheDocument();
    });

    expect(screen.getByText("Price: $0.99")).toBeInTheDocument();
    expect(screen.getByText("Amount: 80 Robux")).toBeInTheDocument();
    expect(screen.getByText("Stock: 200")).toBeInTheDocument();
  });

  test("shows an error message when the fetch fails", async () => {
    global.fetch.mockResolvedValueOnce({ ok: false });

    renderWithRoute();

    await waitFor(() => {
      expect(screen.getByText("Product not found")).toBeInTheDocument();
    });
  });

  test("lets an admin edit and save a new price", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });

    renderWithRoute();

    await waitFor(() => {
      expect(screen.getByText("80 Robux")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Edit Price"));

    const input = screen.getByLabelText("New Price: $");
    fireEvent.change(input, { target: { value: "1.50" } });

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ ...mockProduct, price: 1.5 }),
    });

    fireEvent.click(screen.getByText("Save"));

    await waitFor(() => {
      expect(screen.getByText("Price: $1.5")).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenLastCalledWith(
      "http://localhost:3001/products/1",
      expect.objectContaining({ method: "PATCH" })
    );
  });
});