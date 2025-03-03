import { Hono } from "hono";

type Expense = {
  id: number;
  title: string;
  amount: number;
};

const fakeExpenses: Expense[] = [
  { id: 1, title: "Groceries", amount: 50 },
  { id: 2, title: "Utilities", amount: 100 },
  { id: 3, title: "Rent", amount: 100 },
];

export const expensesRoute = new Hono();

expensesRoute.get("/", (c) => {
  return c.json({ expenses: fakeExpenses });
});

expensesRoute.post("/", async (c) => {
  const expense = await c.req.json();
  return c.json(expense);
});
