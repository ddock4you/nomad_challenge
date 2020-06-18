import express from "express";
import { commonMiddle, rootRedirect } from "./middlewares";

export const app = express();

app.listen(3000, () => console.log("hello"));

app.use(commonMiddle);
app.get("/", (req, res) => res.send("Root"));
app.get("/about-us", (req, res) => res.send("About Us"));
app.get("/contact", (req, res) => res.send("Contact"));
app.use(rootRedirect);
app.get("/protected", (req, res) => res.send("Protected"));

/*
    Challenge goals
    - Make 4 routes: "/" , "/about-us" , "/contact" and "/protected"
    - Each route should render a string with the name of the page, i.e: "/about-us" -> About Us.
    - Make one middleware for all the routes, that middleware should console.log the message "I'm a middleware" on every request to any route.
    - Make a middleware that won't allow me to go to "/protected", if I try to go to "/protected" I should be redirected back to "/"

    조건
    - Use only ONE file: index.js
    - There should be TWO middlewares. One is the "console" middleware and the other one is the "protected" middleware.
    - There should be FOUR routes.
    - IF ANY OF THE REQUIREMENTS ARE NOT FULFILLED YOU WILL GET AN "X"

    https://codesandbox.io/s/express-blueprint-xtp9u

    * Cannot set headers after they are sent to the client
    라는 오류가 떴었는데 문제 해결에 도움이 된 링크추가
    https://velog.io/@kim-macbook/Cannot-set-headers-after-they-are-sent-to-the-client
*/
