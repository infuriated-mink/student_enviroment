// writing a funciton for export

export default function DarkMode() {
  function toggleDark() {
    console.log("button clicked");
  }

  // easy thing to write here
  return <button onClick={toggleDark}> Toggle Here </button>;
}

// moving to impoprt above into the header
