export default function Button() {
  let count = 0;

  const handleClick = (e) => (
    count++,
    (e.target.textContent = count <= 3 ? `Count: ${count}` : `That's enough`)
  );
  // count++;
  // count > 1
  //   ? console.log(`You clicked me ${count} times`)
  //   : console.log(`You clicked me ${count} time`);
  return (
    <button id="myButton" onClick={(e) => handleClick(e)}>
      Click Me!
    </button>
  );
}
