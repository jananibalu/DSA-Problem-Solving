
export default function ReverseaString() {

    // const original = "janani";
    const original = [1, 2, 3, 4, 5, 6, 7];
    const reversed = [];

    for (let i = original.length - 1; i >= 0; i--) {
        const element = original[i];
        reversed.push(element);
        console.log(reversed);
    }

    return (
        <div>ReverseaString{JSON.stringify(reversed)}</div>
    )
}
