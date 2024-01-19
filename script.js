//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function () {
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;

  try {
    const result = await delayAndDisplay(textInput, delayInput);
    document.getElementById('output').innerText = result;
  } catch (error) {
    console.error(error);
    document.getElementById('output').innerText = 'An error occurred.';
  }
});

async function delayAndDisplay(text, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
}
