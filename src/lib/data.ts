import path from "path";
import { readFile } from "fs/promises";
import { Product } from "./definitions";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProducts(
  name: string,
  page: number = 1,
  limit: number = 3
) {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "products.json");
    const jsonData = await readFile(filePath, "utf-8");
    let products: Product[] = JSON.parse(jsonData);

    products = products.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );

    const result = products.slice((page - 1) * limit, page * limit);

    return {
      products: result,
      totalPages: Math.ceil(products.length / limit),
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products data.");
  }
}

export async function getProductById(id: string) {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "products.json");
    const jsonData = await readFile(filePath, "utf-8");
    let products: Product[] = JSON.parse(jsonData);

    products = products.filter((p) => p.id === Number(id));

    // await delay(1500);

    if (products.length === 0) {
      return null;
    }

    return products[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products data.");
  }
}
