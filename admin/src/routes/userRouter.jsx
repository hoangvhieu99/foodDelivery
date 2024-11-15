import Add from "../pages/Add/Add";
import Order from "../pages/Orders/Order";
import List from "../pages/List/List";

const baseUrl = "http://localhost:4000";

export const userRouter = [
  {
    path: "/add",
    component: <Add url={baseUrl}/>,
    text: "Add",
  },
  {
    path: "/list",
    component: <List url={baseUrl}/>,
    text: "List",
  },
  {
    path: "/orders",
    component: <Order url={baseUrl}/>,
    text: "Order",
  },
];
