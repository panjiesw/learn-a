import bar from "./bar";

export function fn() {
    const res = bar();
    console.log(res.name, res.message);
    return res.message;
}
