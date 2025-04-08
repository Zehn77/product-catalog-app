import path from "path";
import { readFile } from "fs/promises";
import { Product } from "./definitions";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProducts() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "products.json");
    const jsonData = await readFile(filePath, "utf-8");
    const products: Product[] = JSON.parse(jsonData);
    await delay(1500);

    return products;
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

    await delay(1500);

    if (products.length === 0) {
      return null;
    }

    return products[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products data.");
  }
}
