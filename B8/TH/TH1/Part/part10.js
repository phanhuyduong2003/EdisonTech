//Part #10: Promise, Async, Await
function takeLongTimeAsync() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long _time_value"), 1000)
    })
}
export async function test() {
    const v = await takeLongTimeAsync()
    console.log(v);
}