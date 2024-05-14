document
  .getElementById('exampleForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    const result = await response.json();
    document.getElementById('responseMessage').textContent = result.message;
    console.log(result);
  });
